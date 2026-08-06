/**
 * Internationalisation engine.
 *
 * Markup opts in with data attributes:
 *   data-i18n="key"              -> textContent
 *   data-i18n-html="key"         -> innerHTML (only for strings we author ourselves)
 *   data-i18n-placeholder="key"  -> placeholder attribute
 *   data-i18n-aria="key"         -> aria-label attribute
 *   data-i18n-title="key"        -> title attribute
 *   data-i18n-vars='{"n":"12"}'  -> values for {placeholders} inside the string
 *
 * Switching language re-renders every registered listener, so the analyzer,
 * the directory and the chat all follow along without a page reload.
 */
namespace FEA.I18n {
  const STORAGE_KEY = 'fea.lang';
  const listeners: Array<(lang: LangCode) => void> = [];
  let current: LangCode = DEFAULT_LANG;

  function isLang(value: string | null): value is LangCode {
    return value === 'de' || value === 'en' || value === 'fa' || value === 'ar';
  }

  export function meta(code: LangCode): LanguageMeta {
    for (let i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === code) return LANGUAGES[i];
    }
    return LANGUAGES[0];
  }

  export function getLang(): LangCode {
    return current;
  }

  export function dir(): TextDirection {
    return meta(current).dir;
  }

  /** Resolve a key, falling back to English and finally to the key itself. */
  export function t(key: string, vars?: Record<string, string | number>): string {
    const table = TRANSLATIONS[current];
    let value = table[key];
    if (value === undefined) value = TRANSLATIONS.en[key];
    if (value === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        value = (value as string).split('{' + name + '}').join(String(vars[name]));
      });
    }
    return value;
  }

  /** Detect the initial language: stored choice > ?lang= > browser > default. */
  function detect(): LangCode {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
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
    return DEFAULT_LANG;
  }

  function readVars(el: Element): Record<string, string> | undefined {
    const raw = el.getAttribute('data-i18n-vars');
    if (!raw) return undefined;
    try {
      return JSON.parse(raw) as Record<string, string>;
    } catch (err) {
      return undefined;
    }
  }

  /** Translate every tagged node inside `root` (defaults to the document). */
  export function apply(root?: ParentNode): void {
    const scope: ParentNode = root || document;

    scope.querySelectorAll<HTMLElement>('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n') as string, readVars(el));
    });
    scope.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html') as string, readVars(el));
    });
    scope.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder') as string));
    });
    scope.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria') as string));
    });
    scope.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title') as string));
    });
  }

  function applyDocument(): void {
    const info = meta(current);
    const html = document.documentElement;
    html.setAttribute('lang', info.htmlLang);
    html.setAttribute('dir', info.dir);
    html.setAttribute('data-lang', info.code);

    const titleKey = document.body.getAttribute('data-page-title');
    if (titleKey) document.title = t(titleKey);

    const description = document.querySelector('meta[name="description"]');
    const descKey = document.body.getAttribute('data-page-description');
    if (description && descKey) description.setAttribute('content', t(descKey));

    apply(document);
  }

  export function onChange(fn: (lang: LangCode) => void): void {
    listeners.push(fn);
  }

  export function setLang(code: LangCode, persist?: boolean): void {
    current = code;
    if (persist !== false) {
      try {
        window.localStorage.setItem(STORAGE_KEY, code);
      } catch (err) {
        /* private mode — the choice simply is not remembered */
      }
    }
    applyDocument();
    for (let i = 0; i < listeners.length; i++) listeners[i](code);
    document.dispatchEvent(new CustomEvent('fea:langchange', { detail: { lang: code } }));
  }

  /** Render the language switcher(s) present on the page. */
  function buildSwitchers(): void {
    document.querySelectorAll<HTMLElement>('[data-lang-switcher]').forEach(function (host) {
      host.innerHTML = '';
      host.setAttribute('role', 'group');
      host.setAttribute('aria-label', t('common.language'));

      LANGUAGES.forEach(function (lang) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'lang-pill';
        button.textContent = lang.short;
        button.lang = lang.htmlLang;
        button.title = lang.native;
        button.setAttribute('aria-label', lang.native);
        button.setAttribute('data-lang-code', lang.code);
        button.setAttribute('aria-pressed', String(lang.code === current));
        button.addEventListener('click', function () {
          setLang(lang.code);
        });
        host.appendChild(button);
      });
    });
  }

  function syncSwitchers(): void {
    document.querySelectorAll<HTMLElement>('[data-lang-code]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lang-code') === current));
    });
    document.querySelectorAll<HTMLElement>('[data-lang-switcher]').forEach(function (host) {
      host.setAttribute('aria-label', t('common.language'));
    });
  }

  export function init(): void {
    current = detect();
    buildSwitchers();
    applyDocument();
    syncSwitchers();
    onChange(syncSwitchers);
  }
}
