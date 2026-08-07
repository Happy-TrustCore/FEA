#!/usr/bin/env python3
"""
FEA — DAAD scholarship harvester.

Runs weekly on GitHub Actions (free on a public repository) and proposes new
DAAD scholarships as a Pull Request. Nothing is ever published automatically —
this script only edits a file on a branch; a human still clicks "Merge".

WHERE THE DATA COMES FROM

The DAAD scholarship database at daad.de is not an HTML page a robot would
have to scrape and guess at. The page itself loads the *entire* database as a
small set of public, unauthenticated JavaScript files and filters them in the
visitor's browser:

    https://www2.daad.de/bundles/daadstipendiendatenbanklsh/data/a/js/scholarships.js
    https://www2.daad.de/bundles/daadstipendiendatenbanklsh/data/a/js/status.js

That is the same request every visitor's browser already makes. This script
makes it too, strips the "var scholarships = TAFFY(...)" wrapper, and reads
the JSON inside. No account, no scraping of rendered HTML, no guessing.

Only entries flagged "isDaad": 1 are used — those are DAAD's own scholarship
programmes, not the other funding organisations DAAD also lists. That is the
"DAAD only" whitelist: the domain is daad.de and the field says so directly.

FIRST RUN VS. LATER RUNS

The first run has no history to compare against, so treating "everything" as
"new" would flood the maintainer with a hundred-card Pull Request nobody could
review. Instead the first run captures a baseline (records every scholarship
id as already known) and proposes nothing. Every run after that proposes only
scholarships that were not in the previous baseline — genuinely new ones.

WRITING THE TEXT

Every new card's sentence comes from data/sentence-templates.json — the
human-translated pattern library described in that file. The robot only fills
in {audience} and {provider}; it never invents or machine-translates a
sentence. The scholarship's own name (nameDe / nameEn) is used as the title,
since a programme's official name is not something to translate.

The deadline is deliberately always written as "rolling": the feed's deadline
data is inconsistent (often blank, sometimes per-country, sometimes a bare day
and month) and a wrong deadline in front of someone applying for a scholarship
is worse than an approximate "check the official page". A human reviewing the
Pull Request can tighten it once they have looked at the real detail page.

Standard library only: nothing to install, nothing to pay for.
"""

from __future__ import annotations

import json
import re
import sys
import urllib.error
import urllib.request
from datetime import date, datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
STATE_FILE = DATA_DIR / "daad-state.json"
REPORT_FILE = DATA_DIR / "daad-report.md"
TEMPLATES_FILE = DATA_DIR / "sentence-templates.json"
OPPORTUNITIES_SRC = ROOT / "src" / "pages" / "opportunities.html"

SCHOLARSHIPS_URL = (
    "https://www2.daad.de/bundles/daadstipendiendatenbanklsh/data/a/js/scholarships.js"
)
STATUS_URL = "https://www2.daad.de/bundles/daadstipendiendatenbanklsh/data/a/js/status.js"
DETAIL_URL = (
    "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
    "?detail={id}"
)

USER_AGENT = (
    "Mozilla/5.0 (compatible; FEA-DAADHarvester/1.0; "
    "+https://happy-trustcore.github.io/FEA/)"
)
TIMEOUT = 25

# A weekly run should stay small enough for a human to review card by card.
# Anything beyond this waits quietly for next week — nothing is lost, the
# scholarship simply is not yet in the "known" state file.
MAX_NEW_PER_RUN = 10

TAFFY_RE = re.compile(r"^\s*var\s+\w+\s*=\s*TAFFY\((.*)\);\s*$", re.S)
INSERT_MARKER = "<!-- DAAD-HARVESTER: tools/daad_harvester.py inserts new scholarship"

# persStatus id -> the site's own audience-level vocabulary (data-levels).
# Undergraduates, Postdoctoral researchers, Graduates, Doctoral candidates,
# Faculty — see status.js, fetched fresh below rather than assumed, in case
# DAAD ever renumbers them.
LEVELS_BY_STATUS_NAME = {
    "undergraduates": ["highschool", "bachelor"],
    "graduates": ["bachelor", "master"],
    "doctoral candidates/phd students": ["master", "professional"],
    "postdoctoral researchers": ["professional"],
    "faculty": ["professional"],
}
LEVEL_ORDER = ["school", "highschool", "bachelor", "master", "professional"]

# Which slot_values.audience key (data/sentence-templates.json) fits a given
# persStatus name. Doctoral/postdoctoral programmes read oddly if described
# with the generic "international students" sentence.
DOCTORAL_STATUS_NAMES = {"doctoral candidates/phd students", "postdoctoral researchers"}


def fetch(url: str) -> str:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
        return response.read().decode("utf-8")


def parse_taffy(text: str) -> list[dict[str, Any]]:
    match = TAFFY_RE.match(text)
    if not match:
        raise ValueError("Unexpected DAAD data format — TAFFY(...) wrapper not found")
    data: list[dict[str, Any]] = json.loads(match.group(1))
    return data


def load_state() -> dict[str, Any]:
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            pass
    return {"known": {}}


def save_state(state: dict[str, Any]) -> None:
    DATA_DIR.mkdir(exist_ok=True)
    STATE_FILE.write_text(
        json.dumps(state, indent=2, ensure_ascii=False, sort_keys=True) + "\n",
        encoding="utf-8",
    )


def levels_for(status_ids: list[int], status_names: dict[int, str]) -> list[str]:
    found: set[str] = set()
    for status_id in status_ids:
        name = status_names.get(status_id, "").strip().lower()
        for level in LEVELS_BY_STATUS_NAME.get(name, []):
            found.add(level)
    if not found:
        found.add("bachelor")
        found.add("master")
    return [level for level in LEVEL_ORDER if level in found]


def audience_for(status_ids: list[int], status_names: dict[int, str]) -> str:
    for status_id in status_ids:
        if status_names.get(status_id, "").strip().lower() in DOCTORAL_STATUS_NAMES:
            return "doctoral_candidates"
    return "international_students"


def escape(value: str) -> str:
    return (
        value.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def build_card(entry: dict[str, Any], templates: dict[str, Any]) -> str:
    sap_progid = entry["sapProgid"]
    card_id = f"daad-{sap_progid}"
    name_de = escape(entry.get("nameDe") or entry.get("nameEn") or "DAAD")
    name_en = escape(entry.get("nameEn") or entry.get("nameDe") or "DAAD")

    status_ids = entry.get("_status_ids", [])
    status_names = entry.get("_status_names", {})
    levels = levels_for(status_ids, status_names)
    audience_key = audience_for(status_ids, status_names)

    audience = templates["slot_values"]["audience"][audience_key]
    pattern = templates["templates"]["scholarship_full"]

    def sentence(lang: str) -> str:
        return pattern[lang].format(audience=audience[lang], provider="DAAD")

    link = DETAIL_URL.format(id=sap_progid)

    return f"""
        <article class="card opp-card" data-id="{card_id}" data-kind="scholarship" data-region="international"
                 data-levels="{' '.join(levels)}" data-fields="any" data-needs="b2"
                 data-offered="de en" data-free="true" data-deadline="rolling">
          <div class="opp-card__tags">
            <span class="tag tag--kind-scholarship"><span data-t="de">Stipendium</span><span data-t="en">Scholarship</span><span data-t="fa">بورسیه</span><span data-t="ar">منحة</span></span>
            <span class="tag"><span data-t="de">International</span><span data-t="en">International</span><span data-t="fa">بین‌المللی</span><span data-t="ar">دولي</span></span>
            <span class="tag tag--free"><span data-t="de">Kostenlos</span><span data-t="en">Free</span><span data-t="fa">رایگان</span><span data-t="ar">مجاني</span></span>
          </div>
          <h3 class="opp-card__title"><span data-t="de">{name_de}</span><span data-t="en">{name_en}</span><span data-t="fa">{name_en}</span><span data-t="ar">{name_en}</span></h3>
          <p class="opp-card__provider">DAAD</p>
          <p class="opp-card__summary">
            <span data-t="de">{escape(sentence('de'))}</span>
            <span data-t="en">{escape(sentence('en'))}</span>
            <span data-t="fa">{escape(sentence('fa'))}</span>
            <span data-t="ar">{escape(sentence('ar'))}</span>
          </p>
          <dl class="opp-card__meta">
            <div class="meta-row"><dt class="meta-row__label"><span data-t="de">Frist</span><span data-t="en">Deadline</span><span data-t="fa">مهلت</span><span data-t="ar">الموعد</span></dt><dd class="meta-row__value"><span data-t="de">Laufend</span><span data-t="en">Open</span><span data-t="fa">همیشه باز</span><span data-t="ar">مفتوح</span></dd></div>
            <div class="meta-row"><dt class="meta-row__label"><span data-t="de">Sprachniveau</span><span data-t="en">Language level</span><span data-t="fa">سطح زبان</span><span data-t="ar">مستوى اللغة</span></dt><dd class="meta-row__value">B2</dd></div>
          </dl>
          <a class="btn btn--ghost btn--sm opp-card__link" href="{link}" target="_blank" rel="noopener noreferrer">
            <span data-t="de">Offizielle Informationen</span><span data-t="en">Official information</span><span data-t="fa">معلومات رسمی</span><span data-t="ar">المعلومات الرسمية</span>
          </a>
        </article>
"""


def insert_cards(html: str, cards_html: str) -> str:
    marker_index = html.find(INSERT_MARKER)
    if marker_index == -1:
        raise ValueError(
            f"Insertion marker not found in {OPPORTUNITIES_SRC}. "
            "Has the file been edited by hand?"
        )
    return html[:marker_index] + cards_html.lstrip() + "\n        " + html[marker_index:]


def main() -> int:
    DATA_DIR.mkdir(exist_ok=True)
    today = date.today().isoformat()

    try:
        scholarships = parse_taffy(fetch(SCHOLARSHIPS_URL))
        status_rows = parse_taffy(fetch(STATUS_URL))
    except (urllib.error.URLError, OSError, ValueError, json.JSONDecodeError) as err:
        REPORT_FILE.write_text(
            "# FEA — DAAD harvester\n\n"
            f"Run: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}\n\n"
            f"Could not fetch or parse DAAD's data this run: **{type(err).__name__}: {err}**\n\n"
            "No files were changed. This is not necessarily a problem — DAAD may have "
            "changed the shape of their data, or the site may have been briefly "
            "unreachable. If this keeps happening, a human should check by hand.\n",
            encoding="utf-8",
        )
        print(f"Fetch/parse failed: {type(err).__name__}: {err}")
        return 0

    status_names = {row["id"]: row["nameEn"] for row in status_rows}

    daad_only = [e for e in scholarships if e.get("isDaad") == 1 and e.get("sapProgid")]
    for entry in daad_only:
        entry["_status_ids"] = entry.get("status") or []
        entry["_status_names"] = status_names

    current_ids = {str(e["sapProgid"]) for e in daad_only}
    state = load_state()
    known: dict[str, Any] = state.get("known", {})

    lines = [
        "# FEA — DAAD harvester",
        "",
        f"Run: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}  ",
        f"DAAD scholarships seen: **{len(daad_only)}**  ·  Already known: **{len(known)}**",
        "",
    ]

    if not known:
        # First run: record everything as a baseline, propose nothing. See
        # the module docstring for why — a hundred-card PR helps no one.
        for entry in daad_only:
            known[str(entry["sapProgid"])] = {
                "title": entry.get("nameEn") or entry.get("nameDe"),
                "added": today,
                "baseline": True,
            }
        state["known"] = known
        save_state(state)
        lines += [
            "## Baseline captured",
            "",
            f"This is the first run: {len(daad_only)} current DAAD scholarships were "
            "recorded so future runs only propose genuinely new ones. No cards were "
            "added and no Pull Request is needed for this run.",
            "",
        ]
        REPORT_FILE.write_text("\n".join(lines), encoding="utf-8")
        print("\n".join(lines))
        return 0

    new_ids = sorted(current_ids - set(known.keys()), key=int)
    to_add = new_ids[:MAX_NEW_PER_RUN]
    deferred = new_ids[MAX_NEW_PER_RUN:]

    if not to_add:
        lines += ["## Nothing new", "", "No DAAD scholarships were added since the last run.", ""]
        REPORT_FILE.write_text("\n".join(lines), encoding="utf-8")
        print("\n".join(lines))
        return 0

    templates = json.loads(TEMPLATES_FILE.read_text(encoding="utf-8"))
    by_id = {str(e["sapProgid"]): e for e in daad_only}

    cards_html = "".join(build_card(by_id[i], templates) for i in to_add)
    html = OPPORTUNITIES_SRC.read_text(encoding="utf-8")
    OPPORTUNITIES_SRC.write_text(insert_cards(html, cards_html), encoding="utf-8")

    for scholarship_id in to_add:
        entry = by_id[scholarship_id]
        known[scholarship_id] = {
            "title": entry.get("nameEn") or entry.get("nameDe"),
            "added": today,
        }
    state["known"] = known
    save_state(state)

    lines += [
        f"## {len(to_add)} new scholarship(s) proposed",
        "",
        "Added to `src/pages/opportunities.html` as `rolling` deadline, B2, "
        "`data-fields=\"any\"`. Please open each official link and, if you have a "
        "moment, tighten the deadline, language level and field before merging.",
        "",
    ]
    for scholarship_id in to_add:
        entry = by_id[scholarship_id]
        lines.append(
            f"- **{entry.get('nameEn') or entry.get('nameDe')}** — "
            f"{DETAIL_URL.format(id=scholarship_id)}"
        )
    lines.append("")

    if deferred:
        lines += [
            f"## {len(deferred)} more waiting",
            "",
            f"Found {len(deferred)} additional new scholarship(s) beyond this run's "
            f"limit of {MAX_NEW_PER_RUN}. They are not lost — next week's run will "
            "pick them up.",
            "",
        ]

    REPORT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print("\n".join(lines))
    return 0


if __name__ == "__main__":
    sys.exit(main())
