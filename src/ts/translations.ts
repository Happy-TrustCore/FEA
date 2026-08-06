/**
 * Language registry + assembled translation table.
 *
 * English is the reference dictionary: any key missing from another locale
 * falls back to English at lookup time (see i18n.ts) instead of showing a raw key.
 */
namespace FEA {
  export const LANGUAGES: LanguageMeta[] = [
    { code: 'de', native: 'Deutsch', short: 'DE', dir: 'ltr', htmlLang: 'de' },
    { code: 'en', native: 'English', short: 'EN', dir: 'ltr', htmlLang: 'en' },
    { code: 'fa', native: 'دری', short: 'دری', dir: 'rtl', htmlLang: 'fa-AF' },
    { code: 'ar', native: 'العربية', short: 'ع', dir: 'rtl', htmlLang: 'ar' },
  ];

  export const DEFAULT_LANG: LangCode = 'de';

  export const TRANSLATIONS: TranslationTable = {
    de: Locales.de,
    en: Locales.en,
    fa: Locales.fa,
    ar: Locales.ar,
  };
}
