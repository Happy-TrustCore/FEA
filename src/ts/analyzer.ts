/**
 * AI Opportunity Analyzer.
 *
 * A six-step questionnaire followed by a transparent scoring pass over the
 * opportunity dataset. Everything runs locally: no request leaves the browser,
 * which is why the prototype can be shipped without any backend.
 */
namespace FEA.Analyzer {
  const STORAGE_KEY = 'fea.analyzer';
  const LANG_RANK: Record<string, number> = { none: 0, a1: 1, a2: 2, b1: 3, b2: 4, c1: 5 };

  type StepId = 'location' | 'level' | 'goal' | 'fields' | 'languages' | 'budget';

  interface Step {
    id: StepId;
    titleKey: string;
    /** 'single' = radio group, 'multi' = checkbox group, 'custom' = bespoke markup. */
    type: 'single' | 'multi' | 'custom';
    options?: Array<{ value: string; labelKey: string }>;
  }

  const STEPS: Step[] = [
    {
      id: 'location',
      titleKey: 'an.q1',
      type: 'single',
      options: [
        { value: 'afghanistan', labelKey: 'an.q1.afghanistan' },
        { value: 'germany', labelKey: 'an.q1.germany' },
        { value: 'other', labelKey: 'an.q1.other' },
      ],
    },
    {
      id: 'level',
      titleKey: 'an.q2',
      type: 'single',
      options: Data.LEVELS.map(function (level) {
        return { value: level, labelKey: 'level.' + level };
      }),
    },
    {
      id: 'goal',
      titleKey: 'an.q3',
      type: 'single',
      options: [
        { value: 'scholarship', labelKey: 'an.q3.scholarship' },
        { value: 'university', labelKey: 'an.q3.university' },
        { value: 'ausbildung', labelKey: 'an.q3.ausbildung' },
        { value: 'course', labelKey: 'an.q3.course' },
        { value: 'language', labelKey: 'an.q3.language' },
        { value: 'career', labelKey: 'an.q3.career' },
      ],
    },
    {
      id: 'fields',
      titleKey: 'an.q4',
      type: 'multi',
      options: Data.FIELDS.map(function (field) {
        return { value: field, labelKey: 'an.f.' + field };
      }),
    },
    { id: 'languages', titleKey: 'an.q56', type: 'custom' },
    {
      id: 'budget',
      titleKey: 'an.q7',
      type: 'single',
      options: [
        { value: 'yes', labelKey: 'an.q7.yes' },
        { value: 'no', labelKey: 'an.q7.no' },
      ],
    },
  ];

  const answers: AnalyzerAnswers = {
    location: 'germany',
    level: 'highschool',
    goal: 'scholarship',
    fields: [],
    german: 'none',
    english: 'none',
    needsFree: true,
  };

  let step = 0;
  let finished = false;

  /* ------------------------------------------------------------------ */
  /* Scoring                                                             */
  /* ------------------------------------------------------------------ */

  /** Kinds that stay relevant when the user asked for something adjacent. */
  const RELATED: Record<OpportunityKind, OpportunityKind[]> = {
    scholarship: ['university'],
    university: ['scholarship'],
    ausbildung: ['career', 'language'],
    course: ['language'],
    language: ['course'],
    career: ['ausbildung'],
  };

  function userLangRank(opp: Opportunity): number {
    const german = LANG_RANK[answers.german];
    const english = LANG_RANK[answers.english];
    // Providers that publish in English can be used with either language.
    return opp.languagesOffered.indexOf('en') !== -1 ? Math.max(german, english) : german;
  }

  function deadlineOpen(opp: Opportunity): boolean {
    if (opp.deadline === 'rolling') return true;
    const today = new Date();
    const iso =
      today.getFullYear() +
      '-' +
      String(today.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(today.getDate()).padStart(2, '0');
    return opp.deadline >= iso;
  }

  export function score(opp: Opportunity): MatchResult {
    const reasons: string[] = [];
    let points = 0;

    /* Goal — the strongest signal. */
    if (opp.kind === answers.goal) {
      points += 30;
      reasons.push('reason.goal');
    } else if (RELATED[answers.goal] && RELATED[answers.goal].indexOf(opp.kind) !== -1) {
      points += 10;
    }

    /* Location. */
    if (answers.location === 'germany') {
      if (opp.region === 'germany') {
        points += 15;
        reasons.push('reason.location');
      } else if (opp.region === 'online' || opp.region === 'international') {
        points += 10;
      }
    } else if (answers.location === 'afghanistan') {
      if (opp.region === 'online' || opp.region === 'international' || opp.region === 'afghanistan') {
        points += 15;
        reasons.push('reason.location');
      } else {
        points += 5;
      }
    } else {
      if (opp.region === 'international' || opp.region === 'online') {
        points += 13;
        reasons.push('reason.location');
      } else {
        points += 7;
      }
    }

    /* Education level. */
    if (opp.levels.indexOf(answers.level) !== -1) {
      points += 15;
      reasons.push('reason.level');
    }

    /* Field of interest. */
    let fieldHit = false;
    for (let i = 0; i < answers.fields.length; i++) {
      if (opp.fields.indexOf(answers.fields[i]) !== -1) {
        fieldHit = true;
        break;
      }
    }
    if (fieldHit) {
      points += 15;
      reasons.push('reason.field');
    } else if (opp.fields.indexOf('any') !== -1) {
      points += 8;
    }

    /* Language requirement. */
    const required = LANG_RANK[opp.requiresLanguage];
    if (required === 0) {
      points += 12;
      reasons.push('reason.language');
    } else {
      const gap = required - userLangRank(opp);
      if (gap <= 0) {
        points += 15;
        reasons.push('reason.language');
      } else if (gap === 1) {
        points -= 5;
      } else {
        points -= 15;
      }
    }

    /* Cost. */
    if (answers.needsFree) {
      if (opp.free) {
        points += 10;
        reasons.push('reason.free');
      } else {
        points -= 25;
      }
    } else if (opp.free) {
      points += 5;
    }

    /* Information available in the language the user is reading right now. */
    if (opp.languagesOffered.indexOf(I18n.getLang()) !== -1) {
      points += 5;
      reasons.push('reason.available');
    }

    /* Deadline. */
    if (deadlineOpen(opp)) {
      points += 5;
      reasons.push('reason.deadline');
    }

    const normalized = Math.max(0, Math.min(100, Math.round((points / 105) * 100)));
    return { opportunity: opp, score: normalized, reasonKeys: reasons.slice(0, 4) };
  }

  export function results(): MatchResult[] {
    return Data.OPPORTUNITIES.map(score)
      .filter(function (result) {
        return result.score >= 35;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, 6);
  }

  /* ------------------------------------------------------------------ */
  /* Persistence                                                         */
  /* ------------------------------------------------------------------ */

  function save(): void {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch (err) {
      /* nothing to do — the analyzer still works for this visit */
    }
  }

  function restore(): boolean {
    let raw: string | null = null;
    try {
      raw = window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return false;
    }
    if (!raw) return false;
    try {
      const parsed = JSON.parse(raw) as Partial<AnalyzerAnswers>;
      if (!parsed || !parsed.goal || !parsed.fields) return false;
      answers.location = parsed.location || answers.location;
      answers.level = parsed.level || answers.level;
      answers.goal = parsed.goal;
      answers.fields = parsed.fields;
      answers.german = parsed.german || 'none';
      answers.english = parsed.english || 'none';
      answers.needsFree = parsed.needsFree !== false;
      return true;
    } catch (err) {
      return false;
    }
  }

  /* ------------------------------------------------------------------ */
  /* Rendering                                                           */
  /* ------------------------------------------------------------------ */

  function el(tag: string, className?: string, text?: string): HTMLElement {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function currentValue(id: StepId): string {
    switch (id) {
      case 'location':
        return answers.location;
      case 'level':
        return answers.level;
      case 'goal':
        return answers.goal;
      case 'budget':
        return answers.needsFree ? 'yes' : 'no';
      default:
        return '';
    }
  }

  function setValue(id: StepId, value: string): void {
    switch (id) {
      case 'location':
        answers.location = value as AnalyzerAnswers['location'];
        break;
      case 'level':
        answers.level = value as StudyLevel;
        break;
      case 'goal':
        answers.goal = value as OpportunityKind;
        break;
      case 'budget':
        answers.needsFree = value === 'yes';
        break;
      default:
        break;
    }
  }

  function levelSelect(id: 'german' | 'english', labelKey: string): HTMLElement {
    const wrap = el('div', 'field');
    const label = document.createElement('label');
    label.className = 'field__label';
    label.htmlFor = 'an-' + id;
    label.textContent = I18n.t(labelKey);

    const select = document.createElement('select');
    select.className = 'field__control';
    select.id = 'an-' + id;
    Data.LANGUAGE_LEVELS.forEach(function (level) {
      const option = document.createElement('option');
      option.value = level;
      option.textContent = level === 'none' ? I18n.t('lvl.none') : level.toUpperCase();
      select.appendChild(option);
    });
    select.value = answers[id];
    select.addEventListener('change', function () {
      answers[id] = select.value as AnalyzerAnswers['german'];
      save();
    });

    wrap.appendChild(label);
    wrap.appendChild(select);
    return wrap;
  }

  function renderStep(host: HTMLElement, error?: string): void {
    const definition = STEPS[step];
    host.innerHTML = '';

    const fieldset = document.createElement('fieldset');
    fieldset.className = 'an-step';

    const legend = document.createElement('legend');
    legend.className = 'an-step__title';
    legend.textContent = I18n.t(definition.titleKey);
    fieldset.appendChild(legend);

    if (definition.type === 'multi') {
      fieldset.appendChild(el('p', 'an-step__hint', I18n.t('an.multi')));
    }

    if (definition.type === 'custom' && definition.id === 'languages') {
      const grid = el('div', 'an-langs');
      grid.appendChild(levelSelect('german', 'an.q5'));
      grid.appendChild(levelSelect('english', 'an.q6'));
      fieldset.appendChild(grid);
    } else if (definition.options) {
      const list = el('div', 'an-options');
      definition.options.forEach(function (option) {
        const label = document.createElement('label');
        label.className = 'an-option';

        const input = document.createElement('input');
        input.type = definition.type === 'multi' ? 'checkbox' : 'radio';
        input.name = 'an-' + definition.id;
        input.value = option.value;

        if (definition.type === 'multi') {
          input.checked = answers.fields.indexOf(option.value) !== -1;
          input.addEventListener('change', function () {
            const index = answers.fields.indexOf(option.value);
            if (input.checked && index === -1) answers.fields.push(option.value);
            if (!input.checked && index !== -1) answers.fields.splice(index, 1);
            save();
          });
        } else {
          input.checked = currentValue(definition.id) === option.value;
          input.addEventListener('change', function () {
            setValue(definition.id, option.value);
            save();
          });
        }

        label.appendChild(input);
        label.appendChild(el('span', 'an-option__label', I18n.t(option.labelKey)));
        list.appendChild(label);
      });
      fieldset.appendChild(list);
    }

    if (error) {
      const alert = el('p', 'an-error', error);
      alert.setAttribute('role', 'alert');
      fieldset.appendChild(alert);
    }

    host.appendChild(fieldset);
  }

  function renderResults(host: HTMLElement): void {
    host.innerHTML = '';
    const list = results();

    host.appendChild(el('h2', 'an-results__title', I18n.t('an.results.title')));

    if (!list.length) {
      host.appendChild(el('p', 'an-results__lead', I18n.t('an.results.empty')));
    } else {
      host.appendChild(el('p', 'an-results__lead', I18n.t('an.results.lead', { n: list.length })));
      const grid = el('div', 'grid grid--cards');
      list.forEach(function (result) {
        grid.appendChild(
          Opps.card(result.opportunity, { score: result.score, reasonKeys: result.reasonKeys })
        );
      });
      host.appendChild(grid);
    }

    const next = el('div', 'an-next card card--soft');
    next.appendChild(el('h3', undefined, I18n.t('an.next.title')));
    const steps = el('ol', 'an-next__list');
    ['an.next.1', 'an.next.2', 'an.next.3'].forEach(function (key) {
      steps.appendChild(el('li', undefined, I18n.t(key)));
    });
    next.appendChild(steps);
    host.appendChild(next);

    const actions = el('div', 'an-actions');
    const restart = document.createElement('button');
    restart.type = 'button';
    restart.className = 'btn btn--ghost';
    restart.textContent = I18n.t('an.restart');
    restart.addEventListener('click', function () {
      finished = false;
      step = 0;
      answers.fields = [];
      render();
    });

    const print = document.createElement('button');
    print.type = 'button';
    print.className = 'btn btn--ghost';
    print.textContent = I18n.t('an.print');
    print.addEventListener('click', function () {
      window.print();
    });

    actions.appendChild(restart);
    actions.appendChild(print);
    host.appendChild(actions);
  }

  let root: HTMLElement | null = null;

  function render(error?: string): void {
    if (!root) return;

    const stepsHost = root.querySelector<HTMLElement>('[data-an-steps]');
    const resultsHost = root.querySelector<HTMLElement>('[data-an-results]');
    const nav = root.querySelector<HTMLElement>('[data-an-nav]');
    const progress = root.querySelector<HTMLElement>('[data-an-progress]');
    const bar = root.querySelector<HTMLElement>('[data-an-bar]');
    const backButton = root.querySelector<HTMLButtonElement>('[data-an-back]');
    const nextButton = root.querySelector<HTMLButtonElement>('[data-an-next]');
    if (!stepsHost || !resultsHost || !nav || !backButton || !nextButton) return;

    if (finished) {
      stepsHost.hidden = true;
      nav.hidden = true;
      if (progress) progress.parentElement!.hidden = true;
      resultsHost.hidden = false;
      renderResults(resultsHost);
      return;
    }

    stepsHost.hidden = false;
    nav.hidden = false;
    resultsHost.hidden = true;
    if (progress) progress.parentElement!.hidden = false;

    renderStep(stepsHost, error);

    if (progress) progress.textContent = I18n.t('an.progress', { c: step + 1, t: STEPS.length });
    if (bar) bar.style.width = Math.round(((step + 1) / STEPS.length) * 100) + '%';

    backButton.textContent = I18n.t('an.back');
    backButton.disabled = step === 0;
    nextButton.textContent = step === STEPS.length - 1 ? I18n.t('an.submit') : I18n.t('an.next');
  }

  export function init(): void {
    root = document.querySelector<HTMLElement>('[data-analyzer]');
    if (!root) return;

    const backButton = root.querySelector<HTMLButtonElement>('[data-an-back]');
    const nextButton = root.querySelector<HTMLButtonElement>('[data-an-next]');

    restore();

    if (backButton) {
      backButton.addEventListener('click', function () {
        if (step > 0) step -= 1;
        render();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        if (STEPS[step].id === 'fields' && answers.fields.length === 0) {
          render(I18n.t('an.err.field'));
          return;
        }
        if (step === STEPS.length - 1) {
          finished = true;
          save();
          render();
          const results = root!.querySelector<HTMLElement>('[data-an-results]');
          if (results) results.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        step += 1;
        render();
      });
    }

    render();
    I18n.onChange(function () {
      render();
    });
  }
}
