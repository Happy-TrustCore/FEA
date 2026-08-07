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

interface ChatAnswer {
  de: string;
  en: string;
  fa: string;
  ar: string;
  [key: string]: string;
}

interface ChatIntentData {
  id: string;
  label: ChatAnswer;
  keywords: string[];
  answer: ChatAnswer;
  follow?: string[];
  link?: string;
}

interface FeaChatData {
  greeting: ChatAnswer[];
  fallback: ChatAnswer;
  clarify: ChatAnswer;
  intents: ChatIntentData[];
}
declare const FEA_CHAT: FeaChatData;

namespace FEA.Chat {
  /**
   * Tried only when the local knowledge base has no confident answer — see
   * ask() below. Free, rate-limited server-side, and never required: until
   * this is deployed (see /worker/README.md) the placeholder below is
   * detected and the assistant behaves exactly as it always has.
   */
  const CHAT_ENDPOINT = 'https://fea-contact.YOUR-SUBDOMAIN.workers.dev/chat';

  let panel: HTMLElement | null = null;
  let launcher: HTMLElement | null = null;
  let log: HTMLElement | null = null;
  let chips: HTMLElement | null = null;
  let input: HTMLInputElement | null = null;

  /** The last topic discussed, so short follow-ups still make sense. */
  let lastIntent: ChatIntentData | null = null;
  let busy = false;

  /* ------------------------------------------------------------------ */
  /* Matching                                                            */
  /* ------------------------------------------------------------------ */

  /** Folds Arabic/Persian letter variants and strips punctuation. */
  function normalize(value: string): string {
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
  function close(a: string, b: string): boolean {
    if (a === b) return true;
    if (Math.abs(a.length - b.length) > 1) return false;
    if (a.length < 4) return false;

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
      if (edits > 1) return false;
      if (a.length > b.length) i += 1;
      else if (b.length > a.length) j += 1;
      else {
        i += 1;
        j += 1;
      }
    }
    return edits + (a.length - i) + (b.length - j) <= 1;
  }

  function scoreIntent(intent: ChatIntentData, text: string, tokens: string[]): number {
    let score = 0;

    for (let i = 0; i < intent.keywords.length; i++) {
      const keyword = normalize(intent.keywords[i]);
      if (!keyword) continue;

      // Whole phrase present — the strongest signal, weighted by length so
      // "learn german" beats a bare "german".
      if (text.indexOf(keyword) !== -1) {
        score += 4 + Math.min(keyword.length / 4, 4);
        continue;
      }

      // Otherwise compare token by token, forgiving one typo.
      const parts = keyword.split(' ');
      for (let p = 0; p < parts.length; p++) {
        if (parts[p].length < 3) continue;
        for (let t = 0; t < tokens.length; t++) {
          if (tokens[t] === parts[p]) score += 2.5;
          else if (close(tokens[t], parts[p])) score += 1.5;
        }
      }
    }

    return score;
  }

  function byId(id: string): ChatIntentData | null {
    for (let i = 0; i < FEA_CHAT.intents.length; i++) {
      if (FEA_CHAT.intents[i].id === id) return FEA_CHAT.intents[i];
    }
    return null;
  }

  interface MatchOutcome {
    intent: ChatIntentData | null;
    /** Set when two topics scored almost the same. */
    alternatives?: ChatIntentData[];
  }

  function match(raw: string): MatchOutcome {
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
      if (lastIntent && tokens.length <= 4) return { intent: lastIntent };
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

  function text(entry: ChatAnswer): string {
    return entry[Lang.get()] || entry.en;
  }

  /**
   * Points a link at the current language's file.
   * "opportunities.html#scholarship" becomes "opportunities-ar.html#scholarship"
   * on the Arabic build, and stays unchanged on the German one.
   */
  function localise(href: string): string {
    const suffix: Record<string, string> = { de: '', en: '-en', fa: '-fa', ar: '-ar' };
    const add = suffix[Lang.get()];
    if (!add) return href;
    return href.replace(/^([a-z-]+)\.html/, '$1' + add + '.html');
  }

  function stamp(): string {
    const now = new Date();
    return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  }

  function bubble(author: 'user' | 'bot', body: string, link?: string): HTMLElement | null {
    if (!log) return null;

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
      } as ChatAnswer);
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
  function renderChips(ids: string[]): void {
    if (!chips) return;
    chips.innerHTML = '';
    ids.forEach(function (id) {
      const intent = byId(id);
      if (!intent) return;
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chip';
      chip.textContent = text(intent.label);
      chip.addEventListener('click', function () {
        ask(text(intent.label), intent);
      });
      chips!.appendChild(chip);
    });
  }

  function typing(): HTMLElement | null {
    if (!log) return null;
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--bot chat-msg--typing';
    row.innerHTML = '<div class="chat-msg__bubble"><span></span><span></span><span></span></div>';
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
    return row;
  }

  /** Longer answers take a moment longer, the way a person would type. */
  function replyDelay(length: number): number {
    return Math.min(1500, 420 + length * 3.2);
  }

  function say(body: string, options?: { link?: string; chips?: string[] }): void {
    busy = true;
    const indicator = typing();
    window.setTimeout(function () {
      if (indicator && indicator.parentElement) indicator.parentElement.removeChild(indicator);
      bubble('bot', body, options && options.link);
      renderChips((options && options.chips) || defaultChips());
      busy = false;
    }, replyDelay(body.length));
  }

  function defaultChips(): string[] {
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
  function askAI(userText: string): void {
    if (!CHAT_ENDPOINT || CHAT_ENDPOINT.indexOf('YOUR-SUBDOMAIN') !== -1) {
      say(text(FEA_CHAT.fallback), { chips: defaultChips() });
      return;
    }

    busy = true;
    const indicator = typing();
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeout = window.setTimeout(function () {
      if (controller) controller.abort();
    }, 12000);

    function stop(): void {
      window.clearTimeout(timeout);
      if (indicator && indicator.parentElement) indicator.parentElement.removeChild(indicator);
      busy = false;
    }

    fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userText, lang: Lang.get() }),
      signal: controller ? controller.signal : undefined,
    })
      .then(function (response) {
        if (!response.ok) throw new Error('chat endpoint responded ' + response.status);
        return response.json();
      })
      .then(function (data: { ok?: boolean; reply?: string }) {
        stop();
        if (data && data.ok && data.reply) {
          bubble('bot', data.reply);
          renderChips(defaultChips());
        } else {
          say(text(FEA_CHAT.fallback), { chips: defaultChips() });
        }
      })
      .catch(function () {
        stop();
        say(text(FEA_CHAT.fallback), { chips: defaultChips() });
      });
  }

  export function ask(userText: string, forced?: ChatIntentData): void {
    const value = userText.trim();
    if (!value || busy) return;

    bubble('user', value);
    if (input) input.value = '';

    const outcome: MatchOutcome = forced ? { intent: forced } : match(value);

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

  function greet(): void {
    if (!log) return;
    log.innerHTML = '';
    lastIntent = null;
    const pick = FEA_CHAT.greeting[Math.floor(Math.random() * FEA_CHAT.greeting.length)];
    bubble('bot', text(pick));
    renderChips(defaultChips());
  }

  export function toggle(open?: boolean): void {
    if (!panel || !launcher) return;
    const next = open === undefined ? panel.hidden : open;
    panel.hidden = !next;
    launcher.setAttribute('aria-expanded', String(next));
    if (next && input) input.focus();
  }

  export function init(): void {
    panel = document.querySelector<HTMLElement>('[data-chat-panel]');
    launcher = document.querySelector<HTMLElement>('[data-chat-launcher]');
    if (!panel || !launcher || typeof FEA_CHAT === 'undefined') return;

    log = panel.querySelector<HTMLElement>('[data-chat-log]');
    chips = panel.querySelector<HTMLElement>('[data-chat-chips]');
    input = panel.querySelector<HTMLInputElement>('[data-chat-input]');

    launcher.addEventListener('click', function () {
      toggle();
    });

    const close = panel.querySelector<HTMLButtonElement>('[data-chat-close]');
    if (close) {
      close.addEventListener('click', function () {
        toggle(false);
      });
    }

    const form = panel.querySelector<HTMLFormElement>('[data-chat-form]');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (input) ask(input.value);
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && panel && !panel.hidden) toggle(false);
    });

    document.querySelectorAll<HTMLElement>('[data-open-chat]').forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        toggle(true);
      });
    });

    greet();
    // Restart the transcript so the whole conversation is in one language.
    Lang.onChange(greet);
  }
}
