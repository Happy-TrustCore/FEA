#!/usr/bin/env python3
"""
FEA — page builder.

YOU EDIT 7 FILES. THIS SCRIPT PRODUCES 28.

    src/pages/index.html        (contains all four languages)
        │
        ├─►  index.html         German
        ├─►  index-en.html      English
        ├─►  index-fa.html      Dari
        └─►  index-ar.html      Arabic

Why bother: today every visitor downloads all four languages and reads one.
A phone in Kabul on a slow, expensive connection pays for three languages it
cannot read. Splitting them makes each page about four times smaller, and gives
every language its own address so Google can offer the right one.

You never maintain 28 files. Edit the source page, run this, done — or let the
GitHub robot run it for you on every push.

    python tools/build_pages.py

Standard library only: nothing to install, nothing to pay for.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "src" / "pages"

LANGS = ["de", "en", "fa", "ar"]
SUFFIX = {"de": "", "en": "-en", "fa": "-fa", "ar": "-ar"}
HTML_LANG = {"de": "de", "en": "en", "fa": "fa-AF", "ar": "ar"}
DIRECTION = {"de": "ltr", "en": "ltr", "fa": "rtl", "ar": "rtl"}
PILL = {"de": "DE", "en": "EN", "fa": "دری", "ar": "ع"}
NATIVE = {"de": "Deutsch", "en": "English", "fa": "دری", "ar": "العربية"}
SWITCHER_LABEL = {"de": "Sprache", "en": "Language", "fa": "زبان", "ar": "اللغة"}

PAGES = ["index", "about", "opportunities", "analyzer", "community", "contact", "legal"]

# Public address of the site. Change this if the project moves to its own domain.
BASE_URL = "https://happy-trustcore.github.io/FEA/"

# Locale codes used by Facebook / WhatsApp / Telegram link previews.
OG_LOCALE = {"de": "de_DE", "en": "en_GB", "fa": "fa_AF", "ar": "ar_AR"}

SPAN_OPEN = re.compile(r'<span\s+data-t="(?P<lang>de|en|fa|ar)"\s*>')
ANY_SPAN = re.compile(r"<\s*(/?)span\b", re.I)


def resolve_spans(html: str, lang: str) -> str:
    """
    Keeps only the chosen language.

    A simple regex cannot do this: some blocks nest, for example
    `<span data-t="de"><span data-opps-count>14</span> Möglichkeiten</span>`.
    So we walk forward from each opening tag, counting spans, to find the
    matching close — then keep the inside (chosen language) or drop the whole
    block (every other language).
    """
    out: list[str] = []
    cursor = 0

    while True:
        match = SPAN_OPEN.search(html, cursor)
        if not match:
            out.append(html[cursor:])
            break

        out.append(html[cursor : match.start()])
        depth = 1
        pos = match.end()

        while depth and pos < len(html):
            nxt = ANY_SPAN.search(html, pos)
            if not nxt:
                break
            depth += -1 if nxt.group(1) else 1
            pos = html.index(">", nxt.end()) + 1

        inner = html[match.end() : pos - len("</span>")]
        if match.group("lang") == lang:
            # The inside may itself contain other-language spans (rare) —
            # resolve it too so nothing is left behind.
            out.append(resolve_spans(inner, lang))
        cursor = pos

    return "".join(out)


def apply_attributes(html: str, lang: str) -> str:
    """Bakes data-de/-ph-de/-al-de attributes into real text and attributes."""
    # <option data-de="Alle" …>Alle</option>  ->  <option>Alle</option>
    def option(match: re.Match[str]) -> str:
        attrs = match.group("attrs")
        value = re.search(rf'data-{lang}="([^"]*)"', attrs)
        cleaned = re.sub(r'\s*data-(de|en|fa|ar)="[^"]*"', "", attrs)
        text = value.group(1) if value else match.group("text")
        return f"<option{cleaned}>{text}</option>"

    html = re.sub(
        r"<option(?P<attrs>[^>]*)>(?P<text>.*?)</option>", option, html, flags=re.S
    )

    # data-ph-xx -> placeholder, data-al-xx -> aria-label
    html = re.sub(
        rf'data-ph-{lang}="([^"]*)"', lambda m: f'placeholder="{m.group(1)}"', html
    )
    html = re.sub(
        rf'data-al-{lang}="([^"]*)"', lambda m: f'aria-label="{m.group(1)}"', html
    )
    html = re.sub(r'\s*data-(ph|al)-(de|en|fa|ar)="[^"]*"', "", html)
    return html


def apply_head(html: str, lang: str) -> str:
    """Uses the per-language title and description, then drops the attributes."""
    title = re.search(rf'data-title-{lang}="([^"]*)"', html)
    desc = re.search(rf'data-desc-{lang}="([^"]*)"', html)

    if title:
        html = re.sub(r"<title>.*?</title>", f"<title>{title.group(1)}</title>", html, flags=re.S)
    if desc:
        html = re.sub(
            r'(<meta name="description" content=")[^"]*(")',
            lambda m: m.group(1) + desc.group(1) + m.group(2),
            html,
        )

    html = re.sub(r'\s*data-(title|desc)-(de|en|fa|ar)="[^"]*"', "", html)
    return html


def rewrite_links(html: str, lang: str) -> str:
    """about.html -> about-fa.html, keeping any #anchor."""
    suffix = SUFFIX[lang]
    if not suffix:
        return html
    for page in PAGES:
        html = html.replace(f'href="{page}.html"', f'href="{page}{suffix}.html"')
        html = html.replace(f'href="{page}.html#', f'href="{page}{suffix}.html#')
    return html


def build_switcher(page: str, lang: str, classes: str) -> str:
    """Static links to the same page in the other three languages."""
    links = []
    for other in LANGS:
        target = f"{page}{SUFFIX[other]}.html"
        current = ' aria-current="page"' if other == lang else ""
        links.append(
            f'<a class="lang-pill" href="{target}" hreflang="{HTML_LANG[other]}" '
            f'lang="{HTML_LANG[other]}" title="{NATIVE[other]}" '
            f'aria-label="{NATIVE[other]}"{current}>{PILL[other]}</a>'
        )
    return (
        f'<div class="{classes}" role="group" aria-label="{SWITCHER_LABEL[lang]}">'
        + "".join(links)
        + "</div>"
    )


SWITCHER_RE = re.compile(
    r'<div class="(?P<classes>lang-switcher[^"]*)" data-lang-switcher[^>]*></div>'
)

# Matches the inline <script> in <head> whatever comments it contains. An
# earlier version required the function to start immediately after <script>,
# so a page with a comment line kept its language-switching script and then
# relabelled itself with the visitor's stored language — an Arabic page
# announcing itself as Dari. Identify the block by what it does, not its shape.
PREPAINT_RE = re.compile(
    r"<script>(?:(?!</script>).)*?fea\.theme(?:(?!</script>).)*?</script>", re.S
)

THEME_ONLY_SCRIPT = """<script>
  /* Applied before first paint so the theme never flashes. The language is
     fixed for this file, so nothing else is needed here. */
  (function () {
    try {
      document.documentElement.setAttribute(
        'data-theme', localStorage.getItem('fea.theme') || 'light');
    } catch (e) {}
  })();
</script>"""


def head_tags(page: str, lang: str, title: str, description: str) -> str:
    """
    Search-engine and social tags.

    hreflang is what stops Google treating the four language versions as four
    duplicate pages, and what lets it offer the Dari page to a Dari speaker.
    The Open Graph tags decide how a link looks when someone shares it on
    WhatsApp, Telegram or Facebook — which is how most of this project's
    visitors will arrive.
    """
    url = f"{BASE_URL}{page}{SUFFIX[lang]}.html"
    tags = [f'<link rel="canonical" href="{url}">']

    for other in LANGS:
        tags.append(
            f'<link rel="alternate" hreflang="{HTML_LANG[other]}" '
            f'href="{BASE_URL}{page}{SUFFIX[other]}.html">'
        )
    # Shown to anyone whose language we do not publish.
    tags.append(f'<link rel="alternate" hreflang="x-default" href="{BASE_URL}{page}.html">')

    tags += [
        '<meta property="og:type" content="website">',
        f'<meta property="og:url" content="{url}">',
        f'<meta property="og:title" content="{title}">',
        f'<meta property="og:description" content="{description}">',
        f'<meta property="og:locale" content="{OG_LOCALE[lang]}">',
        f'<meta property="og:image" content="{BASE_URL}assets/img/favicon.svg">',
        '<meta property="og:site_name" content="Free Education Assistance">',
        '<meta name="twitter:card" content="summary">',
        f'<meta name="twitter:title" content="{title}">',
        f'<meta name="twitter:description" content="{description}">',
    ]
    return "\n".join(tags)


def write_sitemap() -> None:
    """Lists every page so search engines can find all 28."""
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
        'xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ]
    for page in PAGES:
        if not (SOURCE / f"{page}.html").exists():
            continue
        for lang in LANGS:
            lines.append("  <url>")
            lines.append(f"    <loc>{BASE_URL}{page}{SUFFIX[lang]}.html</loc>")
            for other in LANGS:
                lines.append(
                    f'    <xhtml:link rel="alternate" hreflang="{HTML_LANG[other]}" '
                    f'href="{BASE_URL}{page}{SUFFIX[other]}.html"/>'
                )
            lines.append("  </url>")
    lines.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")

    (ROOT / "robots.txt").write_text(
        "User-agent: *\nAllow: /\n\nSitemap: " + BASE_URL + "sitemap.xml\n",
        encoding="utf-8",
    )


def build(page: str, lang: str, source: str) -> str:
    html = resolve_spans(source, lang)
    html = apply_attributes(html, lang)
    html = apply_head(html, lang)
    html = rewrite_links(html, lang)

    # Insert the search-engine and social tags just before </head>.
    title_match = re.search(r"<title>(.*?)</title>", html, re.S)
    desc_match = re.search(r'<meta name="description" content="([^"]*)"', html)
    html = html.replace(
        "</head>",
        head_tags(
            page,
            lang,
            title_match.group(1) if title_match else "FEA",
            desc_match.group(1) if desc_match else "",
        )
        + "\n</head>",
        1,
    )

    html = SWITCHER_RE.sub(
        lambda m: build_switcher(page, lang, m.group("classes")), html
    )
    html = PREPAINT_RE.sub(THEME_ONLY_SCRIPT, html, count=1)

    # <html> now describes exactly one language. data-single-lang tells the
    # script not to try to switch it.
    html = re.sub(
        r"<html[^>]*>",
        f'<html lang="{HTML_LANG[lang]}" dir="{DIRECTION[lang]}" '
        f'data-theme="light" data-lang="{lang}" data-single-lang>',
        html,
        count=1,
    )

    header = (
        "<!-- GENERATED FILE — DO NOT EDIT.\n"
        f"     Source: src/pages/{page}.html  ·  Language: {NATIVE[lang]}\n"
        "     Rebuild with: python tools/build_pages.py -->\n"
    )
    return header + html


def main() -> int:
    if not SOURCE.is_dir():
        print(f"Source folder missing: {SOURCE}")
        return 1

    written = 0
    for page in PAGES:
        path = SOURCE / f"{page}.html"
        if not path.exists():
            print(f"  skip {page}.html (not in src/pages)")
            continue
        source = path.read_text(encoding="utf-8")

        for lang in LANGS:
            target = ROOT / f"{page}{SUFFIX[lang]}.html"
            target.write_text(build(page, lang, source), encoding="utf-8")
            written += 1
        print(f"  {page}.html -> 4 files")

    write_sitemap()
    print(f"\nBuilt {written} pages from {len(PAGES)} sources, plus sitemap.xml and robots.txt.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
