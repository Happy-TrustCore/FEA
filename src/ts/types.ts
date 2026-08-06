/**
 * Free Education Assistance (FEA) — shared type definitions.
 *
 * The whole front end is written in TypeScript and compiled with `tsc` into a
 * single classic script (assets/js/fea.js) so the site also runs from the file
 * system without a bundler or a server.
 */

namespace FEA {
  /** The four languages the FEA platform must support. */
  export type LangCode = 'de' | 'en' | 'fa' | 'ar';

  export type TextDirection = 'ltr' | 'rtl';

  export interface LanguageMeta {
    code: LangCode;
    /** Name written in the language itself. */
    native: string;
    /** Short label for the switcher pill. */
    short: string;
    dir: TextDirection;
    /** BCP-47 tag written to <html lang>. */
    htmlLang: string;
  }

  /** A flat dictionary: translation key -> translated string. */
  export type Dictionary = Record<string, string>;

  export type TranslationTable = Record<LangCode, Dictionary>;

  export type OpportunityKind =
    | 'scholarship'
    | 'university'
    | 'ausbildung'
    | 'course'
    | 'language'
    | 'career';

  export type Region = 'germany' | 'afghanistan' | 'online' | 'international';

  export type StudyLevel = 'school' | 'highschool' | 'bachelor' | 'master' | 'professional';

  export interface Opportunity {
    id: string;
    kind: OpportunityKind;
    region: Region;
    /** Levels this opportunity is realistically open to. */
    levels: StudyLevel[];
    /** Fields of interest, matched against the analyzer answers. */
    fields: string[];
    /** Language requirement expressed as a minimum level (a1..c1, none). */
    requiresLanguage: 'none' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1';
    /** Which of the four site languages the provider publishes in. */
    languagesOffered: LangCode[];
    /** Free of charge for the applicant. */
    free: boolean;
    /** Rolling deadline (no fixed date) or an ISO date string. */
    deadline: 'rolling' | string;
    /** Translation keys — the card content itself is multilingual. */
    titleKey: string;
    providerKey: string;
    summaryKey: string;
    /** Official information link. */
    link: string;
  }

  export interface AnalyzerAnswers {
    location: 'afghanistan' | 'germany' | 'other';
    level: StudyLevel;
    goal: OpportunityKind;
    fields: string[];
    german: 'none' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1';
    english: 'none' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1';
    needsFree: boolean;
  }

  export interface MatchResult {
    opportunity: Opportunity;
    /** 0..100 */
    score: number;
    /** Translation keys explaining why this result was matched. */
    reasonKeys: string[];
  }

  export interface ChatMessage {
    author: 'user' | 'bot';
    /** Already-resolved text for the active language. */
    text: string;
    time: string;
  }

  export interface ChatIntent {
    id: string;
    /** Lower-cased keywords per language; any hit counts. */
    keywords: Record<LangCode, string[]>;
    /** Translation key of the answer. */
    answerKey: string;
    /** Optional follow-up chips (translation keys). */
    suggestionKeys?: string[];
  }
}
