/**
 * 24/7 assistant widget.
 *
 * The production system routes to an LLM plus a human handover queue; this
 * prototype answers from the local knowledge base in data.ts. Keywords from all
 * four languages are checked on every message, so an Arabic speaker who types a
 * German term still gets the right answer.
 */
namespace FEA.Chat {
  let panel: HTMLElement | null = null;
  let launcher: HTMLButtonElement | null = null;
  let log: HTMLElement | null = null;
  let chipsHost: HTMLElement | null = null;
  let input: HTMLInputElement | null = null;
  let open = false;
  const history: ChatMessage[] = [];

  /** Fold Arabic/Persian letter variants so "أفغانستان" matches "افغانستان". */
  function normalize(value: string): string {
    return value
      .toLowerCase()
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/[ىي]/g, 'ی')
      .replace(/ك/g, 'ک')
      .replace(/[ً-ْٰ]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function findIntent(text: string): ChatIntent | null {
    const needle = normalize(text);
    let best: ChatIntent | null = null;
    let bestHits = 0;

    Data.INTENTS.forEach(function (intent) {
      let hits = 0;
      LANGUAGES.forEach(function (lang) {
        const words = intent.keywords[lang.code];
        for (let i = 0; i < words.length; i++) {
          if (needle.indexOf(normalize(words[i])) !== -1) hits += 1;
        }
      });
      if (hits > bestHits) {
        bestHits = hits;
        best = intent;
      }
    });

    return bestHits > 0 ? best : null;
  }

  function timestamp(): string {
    const now = new Date();
    return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  }

  function renderMessages(): void {
    if (!log) return;
    const target = log;
    target.innerHTML = '';
    history.forEach(function (message) {
      const row = document.createElement('div');
      row.className = 'chat-msg chat-msg--' + message.author;

      const bubble = document.createElement('div');
      bubble.className = 'chat-msg__bubble';
      bubble.textContent = message.text;

      const meta = document.createElement('span');
      meta.className = 'chat-msg__meta';
      meta.textContent =
        (message.author === 'user' ? I18n.t('chat.you') : I18n.t('chat.bot')) + ' · ' + message.time;

      row.appendChild(bubble);
      row.appendChild(meta);
      target.appendChild(row);
    });
    target.scrollTop = target.scrollHeight;
  }

  function renderChips(keys: string[]): void {
    if (!chipsHost) return;
    chipsHost.innerHTML = '';
    keys.forEach(function (key) {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chip';
      chip.textContent = I18n.t(key);
      chip.addEventListener('click', function () {
        send(I18n.t(key), Data.CHIP_INTENTS[key]);
      });
      chipsHost!.appendChild(chip);
    });
  }

  function showTyping(): HTMLElement | null {
    if (!log) return null;
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--bot chat-msg--typing';
    const bubble = document.createElement('div');
    bubble.className = 'chat-msg__bubble';
    bubble.innerHTML = '<span></span><span></span><span></span>';
    bubble.setAttribute('aria-label', I18n.t('chat.typing'));
    row.appendChild(bubble);
    log.appendChild(row);
    log.scrollTop = log.scrollHeight;
    return row;
  }

  function answer(text: string, forcedIntentId?: string): void {
    let intent: ChatIntent | null = null;
    if (forcedIntentId) {
      for (let i = 0; i < Data.INTENTS.length; i++) {
        if (Data.INTENTS[i].id === forcedIntentId) intent = Data.INTENTS[i];
      }
    }
    if (!intent) intent = findIntent(text);

    const typing = showTyping();
    window.setTimeout(function () {
      if (typing && typing.parentElement) typing.parentElement.removeChild(typing);
      history.push({
        author: 'bot',
        text: intent ? I18n.t(intent.answerKey) : I18n.t('chat.fallback'),
        time: timestamp(),
      });
      renderMessages();
      renderChips(intent && intent.suggestionKeys ? intent.suggestionKeys : Data.DEFAULT_CHIPS);
    }, 420);
  }

  export function send(text: string, forcedIntentId?: string): void {
    const value = text.trim();
    if (!value) return;
    history.push({ author: 'user', text: value, time: timestamp() });
    renderMessages();
    if (input) input.value = '';
    answer(value, forcedIntentId);
  }

  export function toggle(next?: boolean): void {
    open = next === undefined ? !open : next;
    if (!panel || !launcher) return;
    panel.hidden = !open;
    panel.classList.toggle('is-open', open);
    launcher.setAttribute('aria-expanded', String(open));
    if (open && input) input.focus();
  }

  function build(): void {
    launcher = document.createElement('button');
    launcher.type = 'button';
    launcher.className = 'chat-launcher';
    launcher.setAttribute('aria-expanded', 'false');
    launcher.setAttribute('aria-controls', 'fea-chat-panel');
    launcher.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<path d="M12 3c5 0 9 3.4 9 7.6 0 4.2-4 7.6-9 7.6-.9 0-1.7-.1-2.5-.3L5 20.4l.9-3.2C4.1 15.8 3 13.3 3 10.6 3 6.4 7 3 12 3z" ' +
      'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>' +
      '<circle cx="8.5" cy="10.6" r="1.05" fill="currentColor"/>' +
      '<circle cx="12" cy="10.6" r="1.05" fill="currentColor"/>' +
      '<circle cx="15.5" cy="10.6" r="1.05" fill="currentColor"/></svg>' +
      '<span class="chat-launcher__label" data-i18n="chat.title"></span>';
    launcher.addEventListener('click', function () {
      toggle();
    });

    panel = document.createElement('section');
    panel.className = 'chat-panel';
    panel.id = 'fea-chat-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', I18n.t('chat.title'));
    panel.innerHTML =
      '<header class="chat-panel__head">' +
      '<div><p class="chat-panel__title" data-i18n="chat.title"></p>' +
      '<p class="chat-panel__subtitle" data-i18n="chat.subtitle"></p></div>' +
      '<button type="button" class="chat-panel__close" data-chat-close data-i18n-aria="common.close">&times;</button>' +
      '</header>' +
      '<div class="chat-panel__log" data-chat-log role="log" aria-live="polite"></div>' +
      '<div class="chat-panel__chips" data-chat-chips></div>' +
      '<form class="chat-panel__form" data-chat-form>' +
      '<input type="text" class="chat-panel__input" data-chat-input autocomplete="off" ' +
      'data-i18n-placeholder="chat.placeholder" data-i18n-aria="chat.placeholder">' +
      '<button type="submit" class="btn btn--primary btn--sm" data-i18n="chat.send"></button>' +
      '</form>' +
      '<p class="chat-panel__note" data-i18n="chat.disclaimer"></p>';

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    log = panel.querySelector<HTMLElement>('[data-chat-log]');
    chipsHost = panel.querySelector<HTMLElement>('[data-chat-chips]');
    input = panel.querySelector<HTMLInputElement>('[data-chat-input]');

    const form = panel.querySelector<HTMLFormElement>('[data-chat-form]');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (input) send(input.value);
      });
    }

    const close = panel.querySelector<HTMLButtonElement>('[data-chat-close]');
    if (close) {
      close.addEventListener('click', function () {
        toggle(false);
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && open) toggle(false);
    });

    // Any element on a page can open the assistant, e.g. the home page CTA.
    document.querySelectorAll<HTMLElement>('[data-open-chat]').forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        toggle(true);
      });
    });
  }

  function greet(): void {
    history.length = 0;
    history.push({ author: 'bot', text: I18n.t('chat.greeting'), time: timestamp() });
    renderMessages();
    renderChips(Data.DEFAULT_CHIPS);
  }

  export function init(): void {
    build();
    I18n.apply(panel!);
    I18n.apply(launcher!);
    greet();

    I18n.onChange(function () {
      if (panel) {
        I18n.apply(panel);
        panel.setAttribute('aria-label', I18n.t('chat.title'));
      }
      if (launcher) I18n.apply(launcher);
      // Restart the conversation so the whole transcript is in one language.
      greet();
    });
  }
}
