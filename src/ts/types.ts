/**
 * FEA — shared types.
 *
 * TypeScript is deliberately kept small here. All wording lives in the HTML
 * pages and all styling in main.css; these modules only add the typed logic
 * that markup and CSS cannot express: language state, filtering, scoring and
 * the assistant's intent matching.
 */

namespace FEA {
  /** The four languages of the platform. */
  export type LangCode = 'de' | 'en' | 'fa' | 'ar';

  export interface LangMeta {
    code: LangCode;
    /** Short label for the switcher pill. */
    short: string;
    /** Name written in the language itself. */
    native: string;
    dir: 'ltr' | 'rtl';
    /** BCP-47 tag written to <html lang>. */
    htmlLang: string;
  }

  /** One opportunity card, read from the data-* attributes in the HTML. */
  export interface Card {
    el: HTMLElement;
    id: string;
    kind: string;
    region: string;
    levels: string[];
    fields: string[];
    /** Minimum language level required: none | a1 … c1 */
    needs: string;
    /** Site languages the provider publishes in. */
    offered: string[];
    free: boolean;
    /** ISO date or "rolling". */
    deadline: string;
  }

  /** Answers collected from the analyzer form in analyzer.html. */
  export interface Answers {
    location: string;
    level: string;
    goal: string;
    fields: string[];
    german: string;
    english: string;
    needsFree: boolean;
  }

  export interface Match {
    card: Card;
    score: number;
    /** Ids of the reason templates to show ("goal", "level", …). */
    reasons: string[];
  }
}
