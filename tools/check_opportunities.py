#!/usr/bin/env python3
"""
FEA — daily opportunity monitor.

Runs every day on GitHub Actions (free on a public repository) and keeps the
site trustworthy without anyone having to remember to check it:

  1. Verifies that every official link on the site still works.
  2. Notices when a source page has changed since the last run, which usually
     means a deadline or requirement moved.
  3. Flags deadlines that have passed.
  4. Writes today's date into the "last checked" line on the site.
  5. Produces a report so a human can decide what to change.

Deliberately uses only the Python standard library: nothing to install, nothing
to pay for, and one less thing that can break.

Nothing is ever published automatically. The job proposes; a person decides.
That matters — wrong deadlines in front of someone applying for a scholarship
are worse than no deadlines at all.
"""

from __future__ import annotations

import hashlib
import json
import re
import ssl
import sys
import urllib.error
import urllib.request
from datetime import date, datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
STATE_FILE = DATA_DIR / "monitor-state.json"
REPORT_FILE = DATA_DIR / "monitor-report.md"

USER_AGENT = (
    "Mozilla/5.0 (compatible; FEA-LinkMonitor/1.0; "
    "+https://happy-trustcore.github.io/FEA/)"
)
TIMEOUT = 25

# One <article class="card opp-card" …> per opportunity.
CARD_RE = re.compile(r'<article class="card opp-card"(?P<attrs>[^>]*)>(?P<body>.*?)</article>', re.S)
ATTR_RE = re.compile(r'data-(?P<key>[a-z]+)="(?P<value>[^"]*)"')
LINK_RE = re.compile(r'class="btn btn--ghost btn--sm opp-card__link" href="(?P<href>[^"]+)"')
CHECKED_RE = re.compile(r'(<span data-checked>)(.*?)(</span>)')


def read_cards() -> dict[str, dict]:
    """Collects every opportunity from the HTML pages, keyed by its id."""
    cards: dict[str, dict] = {}
    for page in sorted(ROOT.glob("*.html")):
        html = page.read_text(encoding="utf-8")
        for match in CARD_RE.finditer(html):
            attrs = dict(
                (m.group("key"), m.group("value"))
                for m in ATTR_RE.finditer(match.group("attrs"))
            )
            card_id = attrs.get("id")
            if not card_id or card_id in cards:
                continue
            link = LINK_RE.search(match.group("body"))
            if not link:
                continue
            cards[card_id] = {
                "id": card_id,
                "deadline": attrs.get("deadline", "rolling"),
                "url": link.group("href"),
            }
    return cards


SCRIPT_RE = re.compile(rb"<(script|style)\b.*?</\1>", re.S | re.I)
COMMENT_RE = re.compile(rb"<!--.*?-->", re.S)
TAG_RE = re.compile(rb"<[^>]+>")
# Session ids, nonces and cache-busting tokens change on every single request.
TOKEN_RE = re.compile(rb"\b[0-9a-f]{16,}\b", re.I)
WS_RE = re.compile(rb"\s+")


def stable_digest(body: bytes) -> str:
    """
    Hashes only the readable text of a page.

    Raw bytes change on nearly every request — CSRF tokens, timestamps, rotating
    banners — so hashing them would raise an alert every single day and train us
    to ignore the report. Stripping scripts, markup and random tokens leaves the
    part that actually matters: the words, including the deadlines.
    """
    text = SCRIPT_RE.sub(b" ", body)
    text = COMMENT_RE.sub(b" ", text)
    text = TAG_RE.sub(b" ", text)
    text = TOKEN_RE.sub(b" ", text)
    text = WS_RE.sub(b" ", text).strip().lower()
    return hashlib.sha256(text).hexdigest()[:16]


def fetch(url: str) -> tuple[int, str | None, str | None]:
    """Returns (status, content hash, error). Never raises."""
    context = ssl.create_default_context()
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT, context=context) as response:
            body = response.read(400_000)
            return response.status, stable_digest(body), None
    except urllib.error.HTTPError as err:
        return err.code, None, f"HTTP {err.code}"
    except Exception as err:  # noqa: BLE001 - a monitor must survive anything
        return 0, None, type(err).__name__


def load_state() -> dict:
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            pass
    return {}


def stamp_pages(today: str) -> int:
    """Writes the date into the site itself, so the page stays fully static."""
    changed = 0
    for page in sorted(ROOT.glob("*.html")):
        html = page.read_text(encoding="utf-8")
        updated, count = CHECKED_RE.subn(rf"\g<1>{today}\g<3>", html)
        if count and updated != html:
            page.write_text(updated, encoding="utf-8")
            changed += count
    return changed


def main() -> int:
    DATA_DIR.mkdir(exist_ok=True)
    today = date.today().isoformat()
    previous = load_state()
    cards = read_cards()

    if not cards:
        print("No opportunity cards found — has the card markup changed?")
        return 1

    broken: list[str] = []
    moved: list[str] = []
    expired: list[str] = []
    state: dict[str, dict] = {}

    for card_id, card in sorted(cards.items()):
        status, digest, error = fetch(card["url"])
        was = previous.get(card_id, {})

        if status != 200:
            broken.append(f"**{card_id}** — {error or status} — {card['url']}")
        elif was.get("hash") and digest and was["hash"] != digest:
            moved.append(f"**{card_id}** — source page changed — {card['url']}")

        if card["deadline"] != "rolling" and card["deadline"] < today:
            expired.append(f"**{card_id}** — deadline {card['deadline']} has passed")

        state[card_id] = {
            "url": card["url"],
            "status": status,
            "hash": digest or was.get("hash"),
            "deadline": card["deadline"],
            "checked": today,
        }

    STATE_FILE.write_text(json.dumps(state, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    stamped = stamp_pages(today)

    needs_attention = broken or moved or expired
    lines = [
        "# FEA — daily opportunity check",
        "",
        f"Run: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}  ",
        f"Checked: **{len(cards)}** opportunities · Date written into **{stamped}** places on the site",
        "",
    ]

    def section(title: str, items: list[str], hint: str) -> None:
        if not items:
            return
        lines.append(f"## {title} ({len(items)})")
        lines.append("")
        lines.append(hint)
        lines.append("")
        lines.extend(f"- {item}" for item in items)
        lines.append("")

    section("Broken links", broken, "These no longer load. Fix the URL or remove the card.")
    section("Source pages changed", moved, "Open each one and confirm the deadline and requirements.")
    section("Deadlines passed", expired, "Update `data-deadline` on the card, or mark it as rolling.")

    if not needs_attention:
        lines += ["## All good", "", "Every link works and no deadline has passed.", ""]

    REPORT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print("\n".join(lines))

    # Signals the workflow to open an issue. Never fails the run for this —
    # a red build every time a university edits a page would train us to
    # ignore it.
    return 2 if needs_attention else 0


if __name__ == "__main__":
    sys.exit(main())
