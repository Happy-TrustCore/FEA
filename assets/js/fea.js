"use strict";
/**
 * FEA — shared types.
 *
 * TypeScript is deliberately kept small here. All wording lives in the HTML
 * pages and all styling in main.css; these modules only add the typed logic
 * that markup and CSS cannot express: language state, filtering, scoring and
 * the assistant's intent matching.
 */
/**
 * Language controller.
 *
 * The switching itself is done by CSS: main.css shows only the <span data-t="…">
 * matching <html data-lang="…">. This module just decides which language is
 * active, flips the direction for Dari and Arabic, and fills the few places
 * where CSS cannot reach — <option> labels, placeholders and aria-labels, which
 * keep their wording in data-de / data-en / data-fa / data-ar attributes.
 */
var FEA;
(function (FEA) {
    var Lang;
    (function (Lang) {
        const STORAGE_KEY = 'fea.lang';
        Lang.LANGS = [
            { code: 'de', short: 'DE', native: 'Deutsch', dir: 'ltr', htmlLang: 'de' },
            { code: 'en', short: 'EN', native: 'English', dir: 'ltr', htmlLang: 'en' },
            { code: 'fa', short: 'دری', native: 'دری', dir: 'rtl', htmlLang: 'fa-AF' },
            { code: 'ar', short: 'ع', native: 'العربية', dir: 'rtl', htmlLang: 'ar' },
        ];
        const listeners = [];
        let current = 'de';
        function isLang(value) {
            return value === 'de' || value === 'en' || value === 'fa' || value === 'ar';
        }
        function get() {
            return current;
        }
        Lang.get = get;
        function meta(code) {
            for (let i = 0; i < Lang.LANGS.length; i++) {
                if (Lang.LANGS[i].code === code)
                    return Lang.LANGS[i];
            }
            return Lang.LANGS[0];
        }
        Lang.meta = meta;
        function onChange(fn) {
            listeners.push(fn);
        }
        Lang.onChange = onChange;
        function detect() {
            const fromUrl = new URLSearchParams(window.location.search).get('lang');
            if (isLang(fromUrl))
                return fromUrl;
            let stored = null;
            try {
                stored = window.localStorage.getItem(STORAGE_KEY);
            }
            catch (err) {
                stored = null;
            }
            if (isLang(stored))
                return stored;
            const nav = (navigator.language || '').toLowerCase();
            if (nav.indexOf('de') === 0)
                return 'de';
            if (nav.indexOf('fa') === 0 || nav.indexOf('prs') === 0 || nav.indexOf('ps') === 0)
                return 'fa';
            if (nav.indexOf('ar') === 0)
                return 'ar';
            if (nav.indexOf('en') === 0)
                return 'en';
            return 'de';
        }
        /**
         * Attribute-based strings. Used only where an element cannot hold child
         * elements (<option>) or where the text is an attribute (placeholder,
         * aria-label, title). The wording still lives in the HTML.
         */
        function applyAttributeStrings() {
            document.querySelectorAll('[data-' + current + ']').forEach(function (el) {
                const value = el.getAttribute('data-' + current);
                if (value !== null)
                    el.textContent = value;
            });
            document.querySelectorAll('[data-ph-' + current + ']').forEach(function (el) {
                const value = el.getAttribute('data-ph-' + current);
                if (value !== null)
                    el.setAttribute('placeholder', value);
            });
            document.querySelectorAll('[data-al-' + current + ']').forEach(function (el) {
                const value = el.getAttribute('data-al-' + current);
                if (value !== null)
                    el.setAttribute('aria-label', value);
            });
        }
        /** Document title and meta description also carry their four variants. */
        function applyHead() {
            const title = document.body.getAttribute('data-title-' + current);
            if (title)
                document.title = title;
            const description = document.body.getAttribute('data-desc-' + current);
            const meta = document.querySelector('meta[name="description"]');
            if (description && meta)
                meta.setAttribute('content', description);
        }
        function set(code, persist) {
            current = code;
            const info = meta(code);
            const root = document.documentElement;
            root.setAttribute('data-lang', code);
            root.setAttribute('lang', info.htmlLang);
            root.setAttribute('dir', info.dir);
            if (persist !== false) {
                try {
                    window.localStorage.setItem(STORAGE_KEY, code);
                }
                catch (err) {
                    /* private mode — the choice just is not remembered */
                }
            }
            applyAttributeStrings();
            applyHead();
            document.querySelectorAll('[data-lang-code]').forEach(function (button) {
                button.setAttribute('aria-pressed', String(button.getAttribute('data-lang-code') === code));
            });
            for (let i = 0; i < listeners.length; i++)
                listeners[i](code);
        }
        Lang.set = set;
        /** Fills every <div data-lang-switcher> with one pill per language. */
        function buildSwitchers() {
            document.querySelectorAll('[data-lang-switcher]').forEach(function (host) {
                host.innerHTML = '';
                host.setAttribute('role', 'group');
                Lang.LANGS.forEach(function (lang) {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'lang-pill';
                    button.textContent = lang.short;
                    button.lang = lang.htmlLang;
                    button.title = lang.native;
                    button.setAttribute('aria-label', lang.native);
                    button.setAttribute('data-lang-code', lang.code);
                    button.addEventListener('click', function () {
                        set(lang.code);
                    });
                    host.appendChild(button);
                });
            });
        }
        function init() {
            const root = document.documentElement;
            // Built pages contain exactly one language and say so. Switching is done by
            // following a link, not by script — so here we only read which language this
            // file is, and remember it so the next page opens in the same one.
            const fixed = root.getAttribute('data-lang');
            if (root.hasAttribute('data-single-lang') && isLang(fixed)) {
                current = fixed;
                try {
                    window.localStorage.setItem(STORAGE_KEY, fixed);
                }
                catch (err) {
                    /* private mode — nothing to remember */
                }
                return;
            }
            // Source pages (src/pages/*.html) still hold all four languages.
            buildSwitchers();
            set(detect(), false);
        }
        Lang.init = init;
    })(Lang = FEA.Lang || (FEA.Lang = {}));
})(FEA || (FEA = {}));
/**
 * Opportunity directory.
 *
 * The 14 cards are written out as real HTML in opportunities.html — this module
 * never creates one. It reads the data-* attributes, hides the cards that do not
 * match the filters (a single CSS class) and reorders the ones that do.
 */
var FEA;
(function (FEA) {
    var Directory;
    (function (Directory) {
        /** Reads every card in a container into a typed list. */
        function read(scope) {
            const cards = [];
            scope.querySelectorAll('.opp-card').forEach(function (el) {
                cards.push({
                    el: el,
                    id: el.getAttribute('data-id') || '',
                    kind: el.getAttribute('data-kind') || '',
                    region: el.getAttribute('data-region') || '',
                    levels: (el.getAttribute('data-levels') || '').split(' '),
                    fields: (el.getAttribute('data-fields') || '').split(' '),
                    needs: el.getAttribute('data-needs') || 'none',
                    offered: (el.getAttribute('data-offered') || '').split(' '),
                    free: el.getAttribute('data-free') === 'true',
                    deadline: el.getAttribute('data-deadline') || 'rolling',
                });
            });
            return cards;
        }
        Directory.read = read;
        /** Only the text of the language currently on screen is searched. */
        function haystack(card) {
            const parts = [card.id];
            card.el.querySelectorAll('[data-t="' + FEA.Lang.get() + '"]').forEach(function (node) {
                parts.push(node.textContent || '');
            });
            return parts.join(' ').toLowerCase();
        }
        function init() {
            const grid = document.querySelector('[data-opps-grid]');
            if (!grid)
                return;
            const cards = read(grid);
            const search = document.querySelector('[data-opps-search]');
            const kind = document.querySelector('[data-opps-kind]');
            const region = document.querySelector('[data-opps-region]');
            const level = document.querySelector('[data-opps-level]');
            const sort = document.querySelector('[data-opps-sort]');
            const freeOnly = document.querySelector('[data-opps-free]');
            const reset = document.querySelector('[data-opps-reset]');
            const empty = document.querySelector('[data-opps-empty]');
            function matches(card) {
                if (kind && kind.value !== 'all' && card.kind !== kind.value)
                    return false;
                if (region && region.value !== 'all' && card.region !== region.value)
                    return false;
                if (level && level.value !== 'all' && card.levels.indexOf(level.value) === -1)
                    return false;
                if (freeOnly && freeOnly.checked && !card.free)
                    return false;
                const query = search ? search.value.trim().toLowerCase() : '';
                if (query && haystack(card).indexOf(query) === -1)
                    return false;
                return true;
            }
            function apply() {
                let visible = 0;
                cards.forEach(function (card) {
                    const show = matches(card);
                    card.el.classList.toggle('is-filtered', !show);
                    if (show)
                        visible += 1;
                });
                // Reorder the DOM so the chosen sort is reflected on screen.
                const order = cards.slice();
                if (sort && sort.value === 'az') {
                    order.sort(function (a, b) {
                        return haystack(a).localeCompare(haystack(b), FEA.Lang.get());
                    });
                }
                else {
                    order.sort(function (a, b) {
                        if (a.deadline === 'rolling' && b.deadline === 'rolling')
                            return 0;
                        if (a.deadline === 'rolling')
                            return 1;
                        if (b.deadline === 'rolling')
                            return -1;
                        return a.deadline < b.deadline ? -1 : 1;
                    });
                }
                order.forEach(function (card) {
                    grid.appendChild(card.el);
                });
                document.querySelectorAll('[data-opps-count]').forEach(function (node) {
                    node.textContent = String(visible);
                });
                if (empty)
                    empty.hidden = visible > 0;
            }
            [search, kind, region, level, sort, freeOnly].forEach(function (control) {
                if (!control)
                    return;
                control.addEventListener('input', apply);
                control.addEventListener('change', apply);
            });
            if (reset) {
                reset.addEventListener('click', function () {
                    if (search)
                        search.value = '';
                    if (kind)
                        kind.value = 'all';
                    if (region)
                        region.value = 'all';
                    if (level)
                        level.value = 'all';
                    if (sort)
                        sort.value = 'deadline';
                    if (freeOnly)
                        freeOnly.checked = false;
                    apply();
                });
            }
            // opportunities.html#ausbildung opens with that type pre-selected.
            const hash = window.location.hash.replace('#', '');
            if (hash && kind) {
                for (let i = 0; i < kind.options.length; i++) {
                    if (kind.options[i].value === hash)
                        kind.value = hash;
                }
            }
            apply();
            FEA.Lang.onChange(apply);
        }
        Directory.init = init;
    })(Directory = FEA.Directory || (FEA.Directory = {}));
})(FEA || (FEA = {}));
/**
 * AI Opportunity Analyzer.
 *
 * The six questions and all their answer options are plain HTML in
 * analyzer.html — this module only reveals one step at a time, scores the
 * opportunity cards that are already on the page, and moves the best matches
 * into the results area. Nothing leaves the browser.
 */
var FEA;
(function (FEA) {
    var Analyzer;
    (function (Analyzer) {
        const RANK = { none: 0, a1: 1, a2: 2, b1: 3, b2: 4, c1: 5 };
        /** Goals that stay partly relevant when the user asked for something adjacent. */
        const RELATED = {
            scholarship: ['university'],
            university: ['scholarship'],
            ausbildung: ['career', 'language'],
            course: ['language'],
            language: ['course'],
            career: ['ausbildung'],
        };
        function today() {
            const now = new Date();
            return (now.getFullYear() +
                '-' +
                String(now.getMonth() + 1).padStart(2, '0') +
                '-' +
                String(now.getDate()).padStart(2, '0'));
        }
        function score(card, answers) {
            const reasons = [];
            let points = 0;
            if (card.kind === answers.goal) {
                points += 30;
                reasons.push('goal');
            }
            else if (RELATED[answers.goal] && RELATED[answers.goal].indexOf(card.kind) !== -1) {
                points += 10;
            }
            if (answers.location === 'germany') {
                if (card.region === 'germany') {
                    points += 15;
                    reasons.push('location');
                }
                else if (card.region === 'online' || card.region === 'international') {
                    points += 10;
                }
            }
            else if (answers.location === 'afghanistan') {
                if (card.region !== 'germany') {
                    points += 15;
                    reasons.push('location');
                }
                else {
                    points += 5;
                }
            }
            else {
                if (card.region === 'international' || card.region === 'online') {
                    points += 13;
                    reasons.push('location');
                }
                else {
                    points += 7;
                }
            }
            if (card.levels.indexOf(answers.level) !== -1) {
                points += 15;
                reasons.push('level');
            }
            let fieldHit = false;
            for (let i = 0; i < answers.fields.length; i++) {
                if (card.fields.indexOf(answers.fields[i]) !== -1)
                    fieldHit = true;
            }
            if (fieldHit) {
                points += 15;
                reasons.push('field');
            }
            else if (card.fields.indexOf('any') !== -1) {
                points += 8;
            }
            const required = RANK[card.needs] || 0;
            if (required === 0) {
                points += 12;
                reasons.push('language');
            }
            else {
                // Providers publishing in English can be used with either language.
                const have = card.offered.indexOf('en') !== -1
                    ? Math.max(RANK[answers.german], RANK[answers.english])
                    : RANK[answers.german];
                const gap = required - have;
                if (gap <= 0) {
                    points += 15;
                    reasons.push('language');
                }
                else if (gap === 1) {
                    points -= 5;
                }
                else {
                    points -= 15;
                }
            }
            if (answers.needsFree) {
                if (card.free) {
                    points += 10;
                    reasons.push('free');
                }
                else {
                    points -= 25;
                }
            }
            else if (card.free) {
                points += 5;
            }
            if (card.offered.indexOf(FEA.Lang.get()) !== -1) {
                points += 5;
                reasons.push('available');
            }
            if (card.deadline === 'rolling' || card.deadline >= today()) {
                points += 5;
                reasons.push('deadline');
            }
            return {
                card: card,
                score: Math.max(0, Math.min(100, Math.round((points / 105) * 100))),
                reasons: reasons.slice(0, 4),
            };
        }
        function init() {
            const form = document.querySelector('[data-analyzer]');
            if (!form)
                return;
            const steps = Array.prototype.slice.call(form.querySelectorAll('[data-an-step]'));
            const pool = document.querySelector('[data-an-pool]');
            const resultsBlock = document.querySelector('[data-an-results]');
            const resultsGrid = document.querySelector('[data-an-results-grid]');
            const resultsEmpty = document.querySelector('[data-an-results-empty]');
            const progress = form.querySelector('[data-an-progress]');
            const bar = form.querySelector('[data-an-bar]');
            const back = form.querySelector('[data-an-back]');
            const next = form.querySelector('[data-an-next]');
            const error = form.querySelector('[data-an-error]');
            const labelNext = form.querySelector('[data-an-label-next]');
            const labelSubmit = form.querySelector('[data-an-label-submit]');
            const restart = document.querySelector('[data-an-restart]');
            const print = document.querySelector('[data-an-print]');
            if (!steps.length || !pool || !resultsBlock || !resultsGrid || !next)
                return;
            const cards = FEA.Directory.read(pool);
            const tplMatch = document.querySelector('#tpl-match');
            const tplWhy = document.querySelector('#tpl-why');
            const tplReasons = document.querySelector('#tpl-reasons');
            let step = 0;
            function value(name) {
                const checked = form.querySelector('input[name="' + name + '"]:checked');
                if (checked)
                    return checked.value;
                const select = form.querySelector('select[name="' + name + '"]');
                return select ? select.value : '';
            }
            function chosenFields() {
                const list = [];
                form
                    .querySelectorAll('input[name="fields"]:checked')
                    .forEach(function (input) {
                    list.push(input.value);
                });
                return list;
            }
            function answers() {
                return {
                    location: value('location'),
                    level: value('level'),
                    goal: value('goal'),
                    fields: chosenFields(),
                    german: value('german') || 'none',
                    english: value('english') || 'none',
                    needsFree: value('free') !== 'no',
                };
            }
            function showStep() {
                steps.forEach(function (node, index) {
                    node.hidden = index !== step;
                });
                if (progress) {
                    progress.querySelectorAll('[data-an-cur]').forEach(function (n) {
                        n.textContent = String(step + 1);
                    });
                    progress.querySelectorAll('[data-an-total]').forEach(function (n) {
                        n.textContent = String(steps.length);
                    });
                }
                if (bar)
                    bar.style.width = Math.round(((step + 1) / steps.length) * 100) + '%';
                if (back)
                    back.disabled = step === 0;
                const last = step === steps.length - 1;
                if (labelNext)
                    labelNext.hidden = last;
                if (labelSubmit)
                    labelSubmit.hidden = !last;
                if (error)
                    error.hidden = true;
            }
            function decorate(match) {
                const card = match.card.el;
                if (tplMatch) {
                    const block = tplMatch.content.cloneNode(true);
                    const valueNode = block.querySelector('[data-score]');
                    const fill = block.querySelector('.match__fill');
                    if (valueNode)
                        valueNode.textContent = String(match.score);
                    if (fill)
                        fill.style.width = match.score + '%';
                    card.insertBefore(block, card.firstChild);
                }
                if (tplWhy && tplReasons) {
                    const why = tplWhy.content.cloneNode(true);
                    const list = why.querySelector('.why__list');
                    if (list) {
                        match.reasons.forEach(function (reason) {
                            const item = tplReasons.content.querySelector('[data-reason="' + reason + '"]');
                            if (item)
                                list.appendChild(item.cloneNode(true));
                        });
                    }
                    const link = card.querySelector('.opp-card__link');
                    if (link)
                        card.insertBefore(why, link);
                    else
                        card.appendChild(why);
                }
            }
            function clearResults() {
                resultsGrid.querySelectorAll('.opp-card').forEach(function (card) {
                    card.querySelectorAll('.match, .why').forEach(function (extra) {
                        if (extra.parentElement)
                            extra.parentElement.removeChild(extra);
                    });
                    pool.appendChild(card);
                });
                resultsGrid.innerHTML = '';
            }
            function finish() {
                clearResults();
                const list = cards
                    .map(function (card) {
                    return score(card, answers());
                })
                    .filter(function (match) {
                    return match.score >= 35;
                })
                    .sort(function (a, b) {
                    return b.score - a.score;
                })
                    .slice(0, 6);
                list.forEach(function (match) {
                    resultsGrid.appendChild(match.card.el);
                    decorate(match);
                });
                document.querySelectorAll('[data-an-count]').forEach(function (node) {
                    node.textContent = String(list.length);
                });
                if (resultsEmpty)
                    resultsEmpty.hidden = list.length > 0;
                form.hidden = true;
                resultsBlock.hidden = false;
                resultsBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            next.addEventListener('click', function () {
                if (steps[step].getAttribute('data-an-step') === 'fields' && chosenFields().length === 0) {
                    if (error)
                        error.hidden = false;
                    return;
                }
                if (step === steps.length - 1) {
                    finish();
                    return;
                }
                step += 1;
                showStep();
            });
            if (back) {
                back.addEventListener('click', function () {
                    if (step > 0)
                        step -= 1;
                    showStep();
                });
            }
            if (restart) {
                restart.addEventListener('click', function () {
                    clearResults();
                    resultsBlock.hidden = true;
                    form.hidden = false;
                    step = 0;
                    showStep();
                    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            }
            if (print) {
                print.addEventListener('click', function () {
                    window.print();
                });
            }
            showStep();
        }
        Analyzer.init = init;
    })(Analyzer = FEA.Analyzer || (FEA.Analyzer = {}));
})(FEA || (FEA = {}));
/**
 * Assistant widget.
 *
 * The panel is written in the HTML of every page and the answers live in
 * assets/js/chat-data.js. This module is the part that needs types: scoring
 * what the visitor wrote against the knowledge base, handling typos and
 * mixed languages, and deciding what to offer next.
 *
 * It costs nothing to run — no API, no server — and works on a slow
 * connection, which matters for the people this project is built for.
 */
var FEA;
(function (FEA) {
    var Chat;
    (function (Chat) {
        /**
         * Tried only when the local knowledge base has no confident answer — see
         * ask() below. Free, rate-limited server-side, and never required: until
         * this is deployed (see /worker/README.md) the placeholder below is
         * detected and the assistant behaves exactly as it always has.
         */
        const CHAT_ENDPOINT = 'https://fea-contact.YOUR-SUBDOMAIN.workers.dev/chat';
        let panel = null;
        let launcher = null;
        let log = null;
        let chips = null;
        let input = null;
        /** The last topic discussed, so short follow-ups still make sense. */
        let lastIntent = null;
        let busy = false;
        /* ------------------------------------------------------------------ */
        /* Matching                                                            */
        /* ------------------------------------------------------------------ */
        /** Folds Arabic/Persian letter variants and strips punctuation. */
        function normalize(value) {
            return value
                .toLowerCase()
                .replace(/[أإآٱ]/g, 'ا')
                .replace(/ة/g, 'ه')
                .replace(/[ىي]/g, 'ی')
                .replace(/ك/g, 'ک')
                .replace(/[ً-ْ]/g, '')
                .replace(/[.,!?;:()"'،؟]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }
        /** Edit distance, capped — used only to forgive small typos. */
        function close(a, b) {
            if (a === b)
                return true;
            if (Math.abs(a.length - b.length) > 1)
                return false;
            if (a.length < 4)
                return false;
            let i = 0;
            let j = 0;
            let edits = 0;
            while (i < a.length && j < b.length) {
                if (a[i] === b[j]) {
                    i += 1;
                    j += 1;
                    continue;
                }
                edits += 1;
                if (edits > 1)
                    return false;
                if (a.length > b.length)
                    i += 1;
                else if (b.length > a.length)
                    j += 1;
                else {
                    i += 1;
                    j += 1;
                }
            }
            return edits + (a.length - i) + (b.length - j) <= 1;
        }
        function scoreIntent(intent, text, tokens) {
            let score = 0;
            for (let i = 0; i < intent.keywords.length; i++) {
                const keyword = normalize(intent.keywords[i]);
                if (!keyword)
                    continue;
                // Whole phrase present — the strongest signal, weighted by length so
                // "learn german" beats a bare "german".
                if (text.indexOf(keyword) !== -1) {
                    score += 4 + Math.min(keyword.length / 4, 4);
                    continue;
                }
                // Otherwise compare token by token, forgiving one typo.
                const parts = keyword.split(' ');
                for (let p = 0; p < parts.length; p++) {
                    if (parts[p].length < 3)
                        continue;
                    for (let t = 0; t < tokens.length; t++) {
                        if (tokens[t] === parts[p])
                            score += 2.5;
                        else if (close(tokens[t], parts[p]))
                            score += 1.5;
                    }
                }
            }
            return score;
        }
        function byId(id) {
            for (let i = 0; i < FEA_CHAT.intents.length; i++) {
                if (FEA_CHAT.intents[i].id === id)
                    return FEA_CHAT.intents[i];
            }
            return null;
        }
        function match(raw) {
            const text = normalize(raw);
            const tokens = text.split(' ').filter(function (t) {
                return t.length > 1;
            });
            const ranked = FEA_CHAT.intents
                .map(function (intent) {
                return { intent: intent, score: scoreIntent(intent, text, tokens) };
            })
                .filter(function (entry) {
                return entry.score > 0;
            })
                .sort(function (a, b) {
                return b.score - a.score;
            });
            if (!ranked.length) {
                // "and in Germany?" right after a topic — keep the thread going.
                if (lastIntent && tokens.length <= 4)
                    return { intent: lastIntent };
                return { intent: null };
            }
            // Two topics almost tied: ask instead of guessing wrong.
            if (ranked.length > 1 && ranked[1].score >= ranked[0].score * 0.85 && ranked[0].score < 8) {
                return {
                    intent: null,
                    alternatives: [ranked[0].intent, ranked[1].intent],
                };
            }
            return { intent: ranked[0].intent };
        }
        /* ------------------------------------------------------------------ */
        /* Rendering                                                           */
        /* ------------------------------------------------------------------ */
        function text(entry) {
            return entry[FEA.Lang.get()] || entry.en;
        }
        /**
         * Points a link at the current language's file.
         * "opportunities.html#scholarship" becomes "opportunities-ar.html#scholarship"
         * on the Arabic build, and stays unchanged on the German one.
         */
        function localise(href) {
            const suffix = { de: '', en: '-en', fa: '-fa', ar: '-ar' };
            const add = suffix[FEA.Lang.get()];
            if (!add)
                return href;
            return href.replace(/^([a-z-]+)\.html/, '$1' + add + '.html');
        }
        function stamp() {
            const now = new Date();
            return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
        }
        function bubble(author, body, link) {
            if (!log)
                return null;
            const row = document.createElement('div');
            row.className = 'chat-msg chat-msg--' + author;
            const content = document.createElement('div');
            content.className = 'chat-msg__bubble';
            content.textContent = body;
            if (link) {
                const anchor = document.createElement('a');
                anchor.className = 'chat-msg__link';
                anchor.href = localise(link);
                anchor.textContent = text({
                    de: 'Seite öffnen',
                    en: 'Open the page',
                    fa: 'باز کردن صفحه',
                    ar: 'افتح الصفحة',
                });
                content.appendChild(anchor);
            }
            const meta = document.createElement('span');
            meta.className = 'chat-msg__meta';
            meta.textContent = author === 'bot' ? 'FEA · ' + stamp() : stamp();
            row.appendChild(content);
            row.appendChild(meta);
            log.appendChild(row);
            log.scrollTop = log.scrollHeight;
            return row;
        }
        /** Replaces the quick replies with the topics that follow on naturally. */
        function renderChips(ids) {
            if (!chips)
                return;
            chips.innerHTML = '';
            ids.forEach(function (id) {
                const intent = byId(id);
                if (!intent)
                    return;
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'chip';
                chip.textContent = text(intent.label);
                chip.addEventListener('click', function () {
                    ask(text(intent.label), intent);
                });
                chips.appendChild(chip);
            });
        }
        function typing() {
            if (!log)
                return null;
            const row = document.createElement('div');
            row.className = 'chat-msg chat-msg--bot chat-msg--typing';
            row.innerHTML = '<div class="chat-msg__bubble"><span></span><span></span><span></span></div>';
            log.appendChild(row);
            log.scrollTop = log.scrollHeight;
            return row;
        }
        /** Longer answers take a moment longer, the way a person would type. */
        function replyDelay(length) {
            return Math.min(1500, 420 + length * 3.2);
        }
        function say(body, options) {
            busy = true;
            const indicator = typing();
            window.setTimeout(function () {
                if (indicator && indicator.parentElement)
                    indicator.parentElement.removeChild(indicator);
                bubble('bot', body, options && options.link);
                renderChips((options && options.chips) || defaultChips());
                busy = false;
            }, replyDelay(body.length));
        }
        function defaultChips() {
            return ['scholarship', 'ausbildung', 'university', 'german', 'free', 'analyzer'];
        }
        /* ------------------------------------------------------------------ */
        /* Conversation                                                        */
        /* ------------------------------------------------------------------ */
        /**
         * Reached only when the local matcher found nothing. Tries the AI Worker;
         * whatever happens — not deployed yet, offline, today's free quota used up,
         * a slow response — falls back to the same static answer the assistant has
         * always given, so a visitor never sees an error or a dead end.
         */
        function askAI(userText) {
            if (!CHAT_ENDPOINT || CHAT_ENDPOINT.indexOf('YOUR-SUBDOMAIN') !== -1) {
                say(text(FEA_CHAT.fallback), { chips: defaultChips() });
                return;
            }
            busy = true;
            const indicator = typing();
            const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
            const timeout = window.setTimeout(function () {
                if (controller)
                    controller.abort();
            }, 12000);
            function stop() {
                window.clearTimeout(timeout);
                if (indicator && indicator.parentElement)
                    indicator.parentElement.removeChild(indicator);
                busy = false;
            }
            fetch(CHAT_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userText, lang: FEA.Lang.get() }),
                signal: controller ? controller.signal : undefined,
            })
                .then(function (response) {
                if (!response.ok)
                    throw new Error('chat endpoint responded ' + response.status);
                return response.json();
            })
                .then(function (data) {
                stop();
                if (data && data.ok && data.reply) {
                    bubble('bot', data.reply);
                    renderChips(defaultChips());
                }
                else {
                    say(text(FEA_CHAT.fallback), { chips: defaultChips() });
                }
            })
                .catch(function () {
                stop();
                say(text(FEA_CHAT.fallback), { chips: defaultChips() });
            });
        }
        function ask(userText, forced) {
            const value = userText.trim();
            if (!value || busy)
                return;
            bubble('user', value);
            if (input)
                input.value = '';
            const outcome = forced ? { intent: forced } : match(value);
            if (outcome.intent) {
                lastIntent = outcome.intent;
                say(text(outcome.intent.answer), {
                    link: outcome.intent.link,
                    chips: outcome.intent.follow || defaultChips(),
                });
                return;
            }
            if (outcome.alternatives && outcome.alternatives.length) {
                say(text(FEA_CHAT.clarify), {
                    chips: outcome.alternatives.map(function (i) {
                        return i.id;
                    }),
                });
                return;
            }
            // The local knowledge base — checked first, always free, always
            // available — found nothing confident enough. Only now does the AI
            // fallback get a turn.
            askAI(value);
        }
        Chat.ask = ask;
        function greet() {
            if (!log)
                return;
            log.innerHTML = '';
            lastIntent = null;
            const pick = FEA_CHAT.greeting[Math.floor(Math.random() * FEA_CHAT.greeting.length)];
            bubble('bot', text(pick));
            renderChips(defaultChips());
        }
        function toggle(open) {
            if (!panel || !launcher)
                return;
            const next = open === undefined ? panel.hidden : open;
            panel.hidden = !next;
            launcher.setAttribute('aria-expanded', String(next));
            if (next && input)
                input.focus();
        }
        Chat.toggle = toggle;
        function init() {
            panel = document.querySelector('[data-chat-panel]');
            launcher = document.querySelector('[data-chat-launcher]');
            if (!panel || !launcher || typeof FEA_CHAT === 'undefined')
                return;
            log = panel.querySelector('[data-chat-log]');
            chips = panel.querySelector('[data-chat-chips]');
            input = panel.querySelector('[data-chat-input]');
            launcher.addEventListener('click', function () {
                toggle();
            });
            const close = panel.querySelector('[data-chat-close]');
            if (close) {
                close.addEventListener('click', function () {
                    toggle(false);
                });
            }
            const form = panel.querySelector('[data-chat-form]');
            if (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    if (input)
                        ask(input.value);
                });
            }
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape' && panel && !panel.hidden)
                    toggle(false);
            });
            document.querySelectorAll('[data-open-chat]').forEach(function (trigger) {
                trigger.addEventListener('click', function (event) {
                    event.preventDefault();
                    toggle(true);
                });
            });
            greet();
            // Restart the transcript so the whole conversation is in one language.
            FEA.Lang.onChange(greet);
        }
        Chat.init = init;
    })(Chat = FEA.Chat || (FEA.Chat = {}));
})(FEA || (FEA = {}));
/** Bootstrap. Each module checks for its own markup and stays inert without it. */
var FEA;
(function (FEA) {
    function markActiveNav() {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('[data-nav-link]').forEach(function (link) {
            const active = (link.getAttribute('href') || '') === (page === '' ? 'index.html' : page);
            link.classList.toggle('is-active', active);
            if (active)
                link.setAttribute('aria-current', 'page');
            else
                link.removeAttribute('aria-current');
        });
    }
    function start() {
        FEA.Lang.init();
        markActiveNav();
        FEA.Directory.init();
        FEA.Analyzer.init();
        FEA.Chat.init();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    }
    else {
        start();
    }
})(FEA || (FEA = {}));
//# sourceMappingURL=fea.js.map