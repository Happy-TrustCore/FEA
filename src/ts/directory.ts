/**
 * Opportunity directory.
 *
 * The 14 cards are written out as real HTML in opportunities.html — this module
 * never creates one. It reads the data-* attributes, hides the cards that do not
 * match the filters (a single CSS class) and reorders the ones that do.
 */
namespace FEA.Directory {
  /** Reads every card in a container into a typed list. */
  export function read(scope: ParentNode): Card[] {
    const cards: Card[] = [];
    scope.querySelectorAll<HTMLElement>('.opp-card').forEach(function (el) {
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

  /** Only the text of the language currently on screen is searched. */
  function haystack(card: Card): string {
    const parts: string[] = [card.id];
    card.el.querySelectorAll<HTMLElement>('[data-t="' + Lang.get() + '"]').forEach(function (node) {
      parts.push(node.textContent || '');
    });
    return parts.join(' ').toLowerCase();
  }

  export function init(): void {
    const grid = document.querySelector<HTMLElement>('[data-opps-grid]');
    if (!grid) return;

    const cards = read(grid);
    const search = document.querySelector<HTMLInputElement>('[data-opps-search]');
    const kind = document.querySelector<HTMLSelectElement>('[data-opps-kind]');
    const region = document.querySelector<HTMLSelectElement>('[data-opps-region]');
    const level = document.querySelector<HTMLSelectElement>('[data-opps-level]');
    const sort = document.querySelector<HTMLSelectElement>('[data-opps-sort]');
    const freeOnly = document.querySelector<HTMLInputElement>('[data-opps-free]');
    const reset = document.querySelector<HTMLButtonElement>('[data-opps-reset]');
    const empty = document.querySelector<HTMLElement>('[data-opps-empty]');

    function matches(card: Card): boolean {
      if (kind && kind.value !== 'all' && card.kind !== kind.value) return false;
      if (region && region.value !== 'all' && card.region !== region.value) return false;
      if (level && level.value !== 'all' && card.levels.indexOf(level.value) === -1) return false;
      if (freeOnly && freeOnly.checked && !card.free) return false;
      const query = search ? search.value.trim().toLowerCase() : '';
      if (query && haystack(card).indexOf(query) === -1) return false;
      return true;
    }

    function apply(): void {
      let visible = 0;
      cards.forEach(function (card) {
        const show = matches(card);
        card.el.classList.toggle('is-filtered', !show);
        if (show) visible += 1;
      });

      // Reorder the DOM so the chosen sort is reflected on screen.
      const order = cards.slice();
      if (sort && sort.value === 'az') {
        order.sort(function (a, b) {
          return haystack(a).localeCompare(haystack(b), Lang.get());
        });
      } else {
        order.sort(function (a, b) {
          if (a.deadline === 'rolling' && b.deadline === 'rolling') return 0;
          if (a.deadline === 'rolling') return 1;
          if (b.deadline === 'rolling') return -1;
          return a.deadline < b.deadline ? -1 : 1;
        });
      }
      order.forEach(function (card) {
        grid!.appendChild(card.el);
      });

      document.querySelectorAll<HTMLElement>('[data-opps-count]').forEach(function (node) {
        node.textContent = String(visible);
      });
      if (empty) empty.hidden = visible > 0;
    }

    [search, kind, region, level, sort, freeOnly].forEach(function (control) {
      if (!control) return;
      control.addEventListener('input', apply);
      control.addEventListener('change', apply);
    });

    if (reset) {
      reset.addEventListener('click', function () {
        if (search) search.value = '';
        if (kind) kind.value = 'all';
        if (region) region.value = 'all';
        if (level) level.value = 'all';
        if (sort) sort.value = 'deadline';
        if (freeOnly) freeOnly.checked = false;
        apply();
      });
    }

    // opportunities.html#ausbildung opens with that type pre-selected.
    const hash = window.location.hash.replace('#', '');
    if (hash && kind) {
      for (let i = 0; i < kind.options.length; i++) {
        if (kind.options[i].value === hash) kind.value = hash;
      }
    }

    apply();
    Lang.onChange(apply);
  }
}
