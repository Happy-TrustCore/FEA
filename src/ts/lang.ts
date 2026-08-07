/**
 * Language controller.
 *
 * The switching itself is done by CSS: main.css shows only the <span data-t="…">
 * matching <html data-lang="…">. This module just decides which language is
 * active, flips the direction for Dari and Arabic, and fills the few places
 * where CSS cannot reach — <option> labels, placeholders and aria-labels, which
 * keep their wording in data-de / data-en / data-fa / data-ar attributes.
 */
namespace FEA.Lang {
  const STORAGE_KEY = 'fea.lang';

  export const LANGS: LangMeta[] = [
    { code: 'de', short: 'DE', native: 'Deutsch', dir: 'ltr', htmlLang: 'de' },
    { code: 'en', short: 'EN', native: 'English', dir: 'ltr', htmlLang: 'en' },
    { code: 'fa', short: 'دری', native: 'دری', dir: 'rtl', htmlLang: 'fa-AF' },
    { code: 'ar', short: 'ع', native: 'العربية', dir: 'rtl', htmlLang: 'ar' },
  ];

  const listeners: Array<(code: LangCode) => void> = [];
  let current: LangCode = 'de';

  function isLang(value: string | null): value is LangCode {
    return value === 'de' || value === 'en' || value === 'fa' || value === 'ar';
  }

  export function get(): LangCode {
    return current;
  }

  export function meta(code: LangCode): LangMeta {
    for (let i = 0; i < LANGS.length; i++) {
      if (LANGS[i].code === code) return LANGS[i];
    }
    return LANGS[0];
  }

  export function onChange(fn: (code: LangCode) => void): void {
    listeners.push(fn);
  }

  function detect(): LangCode {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (isLang(fromUrl)) return fromUrl;

    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      stored = null;
    }
    if (isLang(stored)) return stored;

    const nav = (navigator.language || '').toLowerCase();
    if (nav.indexOf('de') === 0) return 'de';
    if (nav.indexOf('fa') === 0 || nav.indexOf('prs') === 0 || nav.indexOf('ps') === 0) return 'fa';
    if (nav.indexOf('ar') === 0) return 'ar';
    if (nav.indexOf('en') === 0) return 'en';
    return 'de';
  }

  /**
   * Attribute-based strings. Used only where an element cannot hold child
   * elements (<option>) or where the text is an attribute (placeholder,
   * aria-label, title). The wording still lives in the HTML.
   */
  function applyAttributeStrings(): void {
    document.querySelectorAll<HTMLElement>('[data-' + current + ']').forEach(function (el) {
      const value = el.getAttribute('data-' + current);
      if (value !== null) el.textContent = value;
    });
    document.querySelectorAll<HTMLElement>('[data-ph-' + current + ']').forEach(function (el) {
      const value = el.getAttribute('data-ph-' + current);
      if (value !== null) el.setAttribute('placeholder', value);
    });
    document.querySelectorAll<HTMLElement>('[data-al-' + current + ']').forEach(function (el) {
      const value = el.getAttribute('data-al-' + current);
      if (value !== null) el.setAttribute('aria-label', value);
    });
  }

  /** Document title and meta description also carry their four variants. */
  function applyHead(): void {
    const title = document.body.getAttribute('data-title-' + current);
    if (title) document.title = title;

    const description = document.body.getAttribute('data-desc-' + current);
    const meta = document.querySelector('meta[name="description"]');
    if (description && meta) meta.setAttribute('content', description);
  }

  export function set(code: LangCode, persist?: boolean): void {
    current = code;
    const info = meta(code);

    const root = document.documentElement;
    root.setAttribute('data-lang', code);
    root.setAttribute('lang', info.htmlLang);
    root.setAttribute('dir', info.dir);

    if (persist !== false) {
      try {
        window.localStorage.setItem(STORAGE_KEY, code);
      } catch (err) {
        /* private mode — the choice just is not remembered */
      }
    }

    applyAttributeStrings();
    applyHead();

    document.querySelectorAll<HTMLElement>('[data-lang-code]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lang-code') === code));
    });

    for (let i = 0; i < listeners.length; i++) listeners[i](code);
  }

  /** Fills every <div data-lang-switcher> with one pill per language. */
  function buildSwitchers(): void {
    document.querySelectorAll<HTMLElement>('[data-lang-switcher]').forEach(function (host) {
      host.innerHTML = '';
      host.setAttribute('role', 'group');

      LANGS.forEach(function (lang) {
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

  export function init(): void {
    const root = document.documentElement;

    // Built pages contain exactly one language and say so. Switching is done by
    // following a link, not by script — so here we only read which language this
    // file is, and remember it so the next page opens in the same one.
    const fixed = root.getAttribute('data-lang');
    if (root.hasAttribute('data-single-lang') && isLang(fixed)) {
      current = fixed;
      try {
        window.localStorage.setItem(STORAGE_KEY, fixed);
      } catch (err) {
        /* private mode — nothing to remember */
      }
      return;
    }

    // Source pages (src/pages/*.html) still hold all four languages.
    buildSwitchers();
    set(detect(), false);
  }
}
