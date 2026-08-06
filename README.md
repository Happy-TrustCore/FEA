<<<<<<< HEAD
# Free Education Assistance (FEA) — Website

Front end for the FEA platform: free educational guidance for students in Afghanistan,
refugees and migrants in Germany, and anyone facing barriers to education.

Built for the **Werner-Schulz-Stipendien 2026** project concept. This phase is
**front end only** — there is no backend, no database and no server-side code.

## Languages

The whole site is available in **German, English, Dari (دری) and Arabic (العربية)**.
Dari and Arabic switch the page to right-to-left automatically. The choice is
remembered in `localStorage` and can also be deep-linked: `index.html?lang=fa`.

## Tech stack

| Layer | Technology | What it does |
| --- | --- | --- |
| Content | **HTML5** | Every sentence, in all four languages, written directly in the pages |
| Presentation | **CSS3** | Themes, layout, RTL — *and the language switching itself* |
| Behaviour | **JavaScript** | Theme, navigation, reveal, accordion, counters, contact-form validation |
| Typed logic | **TypeScript** | Only what needs types: language state, filtering, analyzer scoring, chat matching |

### How the four languages work

There is no translation dictionary in the code. Each sentence appears four times
in the HTML and CSS shows only the active one:

```html
<h1>
  <span data-t="de">Bildung darf nicht davon abhängen …</span>
  <span data-t="en">Education should never depend on …</span>
  <span data-t="fa">تحصیل هرگز نباید …</span>
  <span data-t="ar">يجب ألّا يتوقف التعليم …</span>
</h1>
```

```css
[data-t] { display: none; }
html[data-lang="de"] [data-t="de"] { display: revert; }
```

TypeScript only sets `data-lang` and `dir` on `<html>`. To change any wording,
edit the page — no build step needed for text. `<option>` elements and
placeholders cannot hold child elements, so they use `data-de` / `data-en` /
`data-fa` / `data-ar` attributes instead; the wording still lives in the HTML.

## Pages

| File | Content |
| --- | --- |
| `index.html` | Hero, key figures, the three civil-society values, the 5-step ecosystem flow, problem statement, target groups |
| `about.html` | Full project concept: summary, problem, objectives, activities, AI system, outreach, community, plan (3 phases), impact, vision |
| `opportunities.html` | Searchable directory of 14 real opportunities with filters (type, region, level, free only) and sorting |
| `analyzer.html` | AI Opportunity Analyzer — 6 questions, scored matching, ranked results with reasons |
| `community.html` | Mentoring, webinars, Q&A, support groups, channels, FAQ accordion |
| `contact.html` | Validated contact form (opens the mail client), direct channels, response times |

The **assistant chat widget** is injected on every page by `src/ts/chat.ts`.

## Project structure

```
fea/
├─ index.html … contact.html      6 pages
├─ assets/
│  ├─ css/main.css                design system, language switching, utilities
│  ├─ js/ui.js                    JavaScript: theme, nav, reveal, accordion, contact form
│  ├─ js/chat-data.js             JavaScript: the assistant's answers in four languages
│  ├─ js/fea.js                   compiled TypeScript bundle (do not edit by hand)
│  └─ img/favicon.svg
├─ src/ts/                        ~600 lines of TypeScript in total
│  ├─ types.ts                    shared interfaces
│  ├─ lang.ts                     which language is active + RTL
│  ├─ directory.ts                filter / search / sort the HTML cards
│  ├─ analyzer.ts                 step navigation + scoring
│  ├─ chat.ts                     keyword matching + printing replies
│  └─ main.ts                     bootstrap
├─ tsconfig.json
└─ package.json
```

## Running it

Just open `index.html` in a browser — the compiled bundle is committed, so no build
step is needed to view the site.

For development:

```bash
npm install
```

```bash
npm run build
```

```bash
npm run watch
```

To serve it locally at <http://localhost:5173>:

```bash
npm start
```

## How to change content

**Add or edit text** — every string lives in `src/ts/locales/*.ts` under the same key.
Add the key to all four files, put `data-i18n="your.key"` on the element, then run
`npm run build`. Missing keys fall back to English instead of showing the raw key.

**Add an opportunity** — append an entry to `OPPORTUNITIES` in `src/ts/data.ts`, add its
three text keys (`opp.<id>.title` / `.provider` / `.summary`) to the four locale files,
and rebuild. It appears in the directory and in the analyzer automatically.

**Teach the chat something new** — add an intent to `INTENTS` in `src/ts/data.ts` with
keywords in all four languages and an `answerKey`.

## What is a prototype today

Marked as such in the interface, and ready to be swapped for real services later:

- The chat answers from a local knowledge base, not from a live AI service.
- The analyzer scores locally in the browser; nothing is uploaded or stored on a server.
- The contact form opens the visitor's mail client instead of posting to an API.
- Social links point at the public development page until the accounts go live (Phase 1).

Deadlines and requirements on the opportunity cards can change — every card links to the
official source, and the page says so.

## Accessibility & quality

- Keyboard operable throughout; visible focus rings; skip link.
- `prefers-reduced-motion` disables reveal animations and counters.
- The site always opens in the white (light) theme; the header toggle switches to dark and remembers it.
- No horizontal scrolling down to 360 px, in LTR and RTL.
- Print styles produce a clean PDF of the analyzer results.
=======
# FEA
>>>>>>> 0f6bb2de8ed5538aa1dd511acd2aeedd672cbd21
