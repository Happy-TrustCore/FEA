/**
 * Opportunity directory: card rendering (shared with the analyzer), plus the
 * search / filter / sort controller for opportunities.html.
 */
namespace FEA.Opps {
  const LOCALE_MAP: Record<LangCode, string> = {
    de: 'de-DE',
    en: 'en-GB',
    // Force the Gregorian calendar and Latin digits so the date on the card can
    // be compared 1:1 with the date on the official application page.
    fa: 'fa-AF-u-ca-gregory-nu-latn',
    ar: 'ar-u-ca-gregory-nu-latn',
  };

  export function formatDeadline(value: string): string {
    if (value === 'rolling') return I18n.t('common.rolling');
    const date = new Date(value + 'T00:00:00');
    if (isNaN(date.getTime())) return value;
    try {
      return new Intl.DateTimeFormat(LOCALE_MAP[I18n.getLang()], {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(date);
    } catch (err) {
      return value;
    }
  }

  function el(tag: string, className?: string, text?: string): HTMLElement {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function tag(text: string, variant?: string): HTMLElement {
    return el('span', 'tag' + (variant ? ' tag--' + variant : ''), text);
  }

  function metaRow(labelKey: string, value: string): HTMLElement {
    const row = el('div', 'meta-row');
    row.appendChild(el('dt', 'meta-row__label', I18n.t(labelKey)));
    row.appendChild(el('dd', 'meta-row__value', value));
    return row;
  }

  function levelsLabel(opp: Opportunity): string {
    return opp.levels
      .map(function (level) {
        return I18n.t('level.' + level);
      })
      .join(' · ');
  }

  function languageLabel(opp: Opportunity): string {
    if (opp.requiresLanguage === 'none') return I18n.t('lvl.none');
    return opp.requiresLanguage.toUpperCase();
  }

  /**
   * Builds one opportunity card. `extras` lets the analyzer attach the match
   * score and the reasons why the entry was proposed.
   */
  export function card(opp: Opportunity, extras?: { score?: number; reasonKeys?: string[] }): HTMLElement {
    const article = el('article', 'card opp-card');
    article.setAttribute('data-id', opp.id);
    article.setAttribute('data-kind', opp.kind);

    const top = el('div', 'opp-card__tags');
    top.appendChild(tag(I18n.t('kind.' + opp.kind), 'kind-' + opp.kind));
    top.appendChild(tag(I18n.t('region.' + opp.region)));
    if (opp.free) top.appendChild(tag(I18n.t('common.free'), 'free'));
    article.appendChild(top);

    if (extras && typeof extras.score === 'number') {
      const score = el('div', 'match');
      const bar = el('div', 'match__bar');
      const fill = el('span', 'match__fill');
      fill.style.width = extras.score + '%';
      bar.appendChild(fill);
      score.appendChild(el('span', 'match__value', extras.score + '% ' + I18n.t('an.match')));
      score.appendChild(bar);
      article.appendChild(score);
    }

    article.appendChild(el('h3', 'opp-card__title', I18n.t(opp.titleKey)));
    article.appendChild(el('p', 'opp-card__provider', I18n.t(opp.providerKey)));
    article.appendChild(el('p', 'opp-card__summary', I18n.t(opp.summaryKey)));

    const meta = el('dl', 'opp-card__meta');
    meta.appendChild(metaRow('common.deadline', formatDeadline(opp.deadline)));
    meta.appendChild(metaRow('common.langreq', languageLabel(opp)));
    meta.appendChild(metaRow('common.level', levelsLabel(opp)));
    article.appendChild(meta);

    if (extras && extras.reasonKeys && extras.reasonKeys.length) {
      const why = el('div', 'why');
      why.appendChild(el('p', 'why__title', I18n.t('an.why')));
      const list = el('ul', 'why__list');
      extras.reasonKeys.forEach(function (key) {
        list.appendChild(el('li', undefined, I18n.t(key)));
      });
      why.appendChild(list);
      article.appendChild(why);
    }

    const link = document.createElement('a');
    link.className = 'btn btn--ghost btn--sm opp-card__link';
    link.href = opp.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = I18n.t('common.openLink');
    article.appendChild(link);

    return article;
  }

  /* ------------------------------------------------------------------ */
  /* Directory controller                                                */
  /* ------------------------------------------------------------------ */

  interface FilterState {
    query: string;
    kind: string;
    region: string;
    level: string;
    freeOnly: boolean;
    sort: 'deadline' | 'az';
  }

  const state: FilterState = {
    query: '',
    kind: 'all',
    region: 'all',
    level: 'all',
    freeOnly: false,
    sort: 'deadline',
  };

  function searchable(opp: Opportunity): string {
    return [
      I18n.t(opp.titleKey),
      I18n.t(opp.providerKey),
      I18n.t(opp.summaryKey),
      I18n.t('kind.' + opp.kind),
      I18n.t('region.' + opp.region),
      opp.id,
    ]
      .join(' ')
      .toLowerCase();
  }

  function matches(opp: Opportunity): boolean {
    if (state.kind !== 'all' && opp.kind !== state.kind) return false;
    if (state.region !== 'all' && opp.region !== state.region) return false;
    if (state.level !== 'all' && opp.levels.indexOf(state.level as StudyLevel) === -1) return false;
    if (state.freeOnly && !opp.free) return false;
    if (state.query && searchable(opp).indexOf(state.query) === -1) return false;
    return true;
  }

  function sorted(list: Opportunity[]): Opportunity[] {
    const copy = list.slice();
    if (state.sort === 'az') {
      copy.sort(function (a, b) {
        return I18n.t(a.titleKey).localeCompare(I18n.t(b.titleKey), I18n.getLang());
      });
      return copy;
    }
    copy.sort(function (a, b) {
      // Fixed dates first (soonest at the top), rolling entries after them.
      if (a.deadline === 'rolling' && b.deadline === 'rolling') return 0;
      if (a.deadline === 'rolling') return 1;
      if (b.deadline === 'rolling') return -1;
      return a.deadline < b.deadline ? -1 : 1;
    });
    return copy;
  }

  function fillSelect(select: HTMLSelectElement, values: string[], keyPrefix: string): void {
    const previous = select.value || 'all';
    select.innerHTML = '';
    const all = document.createElement('option');
    all.value = 'all';
    all.textContent = I18n.t('opps.filter.all');
    select.appendChild(all);
    values.forEach(function (value) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = I18n.t(keyPrefix + value);
      select.appendChild(option);
    });
    select.value = previous;
  }

  function fillSortSelect(select: HTMLSelectElement): void {
    const previous = select.value || 'deadline';
    select.innerHTML = '';
    [
      ['deadline', 'opps.sort.deadline'],
      ['az', 'opps.sort.az'],
    ].forEach(function (pair) {
      const option = document.createElement('option');
      option.value = pair[0];
      option.textContent = I18n.t(pair[1]);
      select.appendChild(option);
    });
    select.value = previous;
  }

  export function init(): void {
    const gridHost = document.querySelector<HTMLElement>('[data-opps-grid]');
    if (!gridHost) return;
    const grid: HTMLElement = gridHost;

    const search = document.querySelector<HTMLInputElement>('[data-opps-search]');
    const kindSelect = document.querySelector<HTMLSelectElement>('[data-opps-kind]');
    const regionSelect = document.querySelector<HTMLSelectElement>('[data-opps-region]');
    const levelSelect = document.querySelector<HTMLSelectElement>('[data-opps-level]');
    const sortSelect = document.querySelector<HTMLSelectElement>('[data-opps-sort]');
    const freeToggle = document.querySelector<HTMLInputElement>('[data-opps-free]');
    const resetButton = document.querySelector<HTMLButtonElement>('[data-opps-reset]');
    const countLabel = document.querySelector<HTMLElement>('[data-opps-count]');
    const empty = document.querySelector<HTMLElement>('[data-opps-empty]');

    const kinds: OpportunityKind[] = ['scholarship', 'university', 'ausbildung', 'course', 'language', 'career'];
    const regions: Region[] = ['germany', 'afghanistan', 'online', 'international'];

    function buildSelects(): void {
      if (kindSelect) fillSelect(kindSelect, kinds, 'kind.');
      if (regionSelect) fillSelect(regionSelect, regions, 'region.');
      if (levelSelect) fillSelect(levelSelect, Data.LEVELS, 'level.');
      if (sortSelect) fillSortSelect(sortSelect);
    }

    function render(): void {
      const list = sorted(Data.OPPORTUNITIES.filter(matches));
      grid.innerHTML = '';
      list.forEach(function (opp) {
        grid.appendChild(card(opp));
      });
      if (countLabel) countLabel.textContent = I18n.t('opps.count', { n: list.length });
      if (empty) empty.hidden = list.length > 0;
      grid.hidden = list.length === 0;
    }

    if (search) {
      search.addEventListener('input', function () {
        state.query = search.value.trim().toLowerCase();
        render();
      });
    }
    if (kindSelect) {
      kindSelect.addEventListener('change', function () {
        state.kind = kindSelect.value;
        render();
      });
    }
    if (regionSelect) {
      regionSelect.addEventListener('change', function () {
        state.region = regionSelect.value;
        render();
      });
    }
    if (levelSelect) {
      levelSelect.addEventListener('change', function () {
        state.level = levelSelect.value;
        render();
      });
    }
    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        state.sort = sortSelect.value === 'az' ? 'az' : 'deadline';
        render();
      });
    }
    if (freeToggle) {
      freeToggle.addEventListener('change', function () {
        state.freeOnly = freeToggle.checked;
        render();
      });
    }
    if (resetButton) {
      resetButton.addEventListener('click', function () {
        state.query = '';
        state.kind = 'all';
        state.region = 'all';
        state.level = 'all';
        state.freeOnly = false;
        state.sort = 'deadline';
        if (search) search.value = '';
        if (kindSelect) kindSelect.value = 'all';
        if (regionSelect) regionSelect.value = 'all';
        if (levelSelect) levelSelect.value = 'all';
        if (sortSelect) sortSelect.value = 'deadline';
        if (freeToggle) freeToggle.checked = false;
        render();
      });
    }

    // A deep link such as opportunities.html#ausbildung pre-selects a filter.
    const hash = window.location.hash.replace('#', '');
    if (hash && kinds.indexOf(hash as OpportunityKind) !== -1) {
      state.kind = hash;
    }

    buildSelects();
    if (kindSelect) kindSelect.value = state.kind;
    render();

    I18n.onChange(function () {
      buildSelects();
      if (kindSelect) kindSelect.value = state.kind;
      if (regionSelect) regionSelect.value = state.region;
      if (levelSelect) levelSelect.value = state.level;
      if (sortSelect) sortSelect.value = state.sort;
      render();
    });
  }
}
