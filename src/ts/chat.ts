/**
 * Assistant widget.
 *
 * The panel itself is written in the HTML of every page, so its labels can be
 * edited there. The answers live in assets/js/chat-data.js — one plain-JS file
 * shared by all pages. This module only matches what the visitor typed against
 * the keywords and prints the reply.
 */

/** Shape of the global defined by assets/js/chat-data.js. */
interface FeaChatData {
  greeting: Record<string, string>;
  fallback: Record<string, string>;
  intents: Array<{ id: string; keywords: string[]; answer: Record<string, string> }>;
}
declare const FEA_CHAT: FeaChatData;

namespace FEA.Chat {
  let panel: HTMLElement | null = null;
  let launcher: HTMLElement | null = null;
  let log: HTMLElement | null = null;
  let input: HTMLInputElement | null = null;

  /** Folds Arabic/Persian letter variants so "أفغانستان" matches "افغانستان". */
  function normalize(value: string): string {
    return value
      .toLowerCase()
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/[ىي]/g, 'ی')
      .replace(/ك/g, 'ک')
      .replace(/[ً-ْ]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function answerFor(text: string): string {
    const needle = normalize(text);
    const lang = Lang.get();
    let best: string | null = null;
    let bestHits = 0;

    FEA_CHAT.intents.forEach(function (intent) {
      let hits = 0;
      for (let i = 0; i < intent.keywords.length; i++) {
        if (needle.indexOf(normalize(intent.keywords[i])) !== -1) hits += 1;
      }
      if (hits > bestHits) {
        bestHits = hits;
        best = intent.answer[lang] || intent.answer.en;
      }
    });

    return best !== null ? best : FEA_CHAT.fallback[lang] || FEA_CHAT.fallback.en;
  }

  function byId(id: string): string {
    const lang = Lang.get();
    for (let i = 0; i < FEA_CHAT.intents.length; i++) {
      if (FEA_CHAT.intents[i].id === id) {
        return FEA_CHAT.intents[i].answer[lang] || FEA_CHAT.intents[i].answer.en;
      }
    }
    return FEA_CHAT.fallback[lang] || FEA_CHAT.fallback.en;
  }

  function stamp(): string {
    const now = new Date();
    return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  }

  function bubble(author: 'user' | 'bot', text: string): void {
    if (!log) return;
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--' + author;

    const body = document.createElement('div');
    body.className = 'chat-msg__bubble';
    body.textContent = text;

    const meta = document.createElement('span');
    meta.className = 'chat-msg__meta';
    // "FEA" is the brand name in every language, so no translation is needed.
    meta.textContent = author === 'bot' ? 'FEA · ' + stamp() : stamp();

    row.appendChild(body);
    row.appendChild(meta);
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
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

  function reply(text: string): void {
    const indicator = typing();
    window.setTimeout(function () {
      if (indicator && indicator.parentElement) indicator.parentElement.removeChild(indicator);
      bubble('bot', text);
    }, 420);
  }

  function greet(): void {
    if (!log) return;
    log.innerHTML = '';
    bubble('bot', FEA_CHAT.greeting[Lang.get()] || FEA_CHAT.greeting.en);
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
        if (!input) return;
        const text = input.value.trim();
        if (!text) return;
        bubble('user', text);
        input.value = '';
        reply(answerFor(text));
      });
    }

    panel.querySelectorAll<HTMLElement>('[data-chip]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        bubble('user', (chip.textContent || '').trim());
        reply(byId(chip.getAttribute('data-chip') || ''));
      });
    });

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
