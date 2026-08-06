/**
 * AI Opportunity Analyzer.
 *
 * The six questions and all their answer options are plain HTML in
 * analyzer.html — this module only reveals one step at a time, scores the
 * opportunity cards that are already on the page, and moves the best matches
 * into the results area. Nothing leaves the browser.
 */
namespace FEA.Analyzer {
  const RANK: Record<string, number> = { none: 0, a1: 1, a2: 2, b1: 3, b2: 4, c1: 5 };

  /** Goals that stay partly relevant when the user asked for something adjacent. */
  const RELATED: Record<string, string[]> = {
    scholarship: ['university'],
    university: ['scholarship'],
    ausbildung: ['career', 'language'],
    course: ['language'],
    language: ['course'],
    career: ['ausbildung'],
  };

  function today(): string {
    const now = new Date();
    return (
      now.getFullYear() +
      '-' +
      String(now.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(now.getDate()).padStart(2, '0')
    );
  }

  function score(card: Card, answers: Answers): Match {
    const reasons: string[] = [];
    let points = 0;

    if (card.kind === answers.goal) {
      points += 30;
      reasons.push('goal');
    } else if (RELATED[answers.goal] && RELATED[answers.goal].indexOf(card.kind) !== -1) {
      points += 10;
    }

    if (answers.location === 'germany') {
      if (card.region === 'germany') {
        points += 15;
        reasons.push('location');
      } else if (card.region === 'online' || card.region === 'international') {
        points += 10;
      }
    } else if (answers.location === 'afghanistan') {
      if (card.region !== 'germany') {
        points += 15;
        reasons.push('location');
      } else {
        points += 5;
      }
    } else {
      if (card.region === 'international' || card.region === 'online') {
        points += 13;
        reasons.push('location');
      } else {
        points += 7;
      }
    }

    if (card.levels.indexOf(answers.level) !== -1) {
      points += 15;
      reasons.push('level');
    }

    let fieldHit = false;
    for (let i = 0; i < answers.fields.length; i++) {
      if (card.fields.indexOf(answers.fields[i]) !== -1) fieldHit = true;
    }
    if (fieldHit) {
      points += 15;
      reasons.push('field');
    } else if (card.fields.indexOf('any') !== -1) {
      points += 8;
    }

    const required = RANK[card.needs] || 0;
    if (required === 0) {
      points += 12;
      reasons.push('language');
    } else {
      // Providers publishing in English can be used with either language.
      const have =
        card.offered.indexOf('en') !== -1
          ? Math.max(RANK[answers.german], RANK[answers.english])
          : RANK[answers.german];
      const gap = required - have;
      if (gap <= 0) {
        points += 15;
        reasons.push('language');
      } else if (gap === 1) {
        points -= 5;
      } else {
        points -= 15;
      }
    }

    if (answers.needsFree) {
      if (card.free) {
        points += 10;
        reasons.push('free');
      } else {
        points -= 25;
      }
    } else if (card.free) {
      points += 5;
    }

    if (card.offered.indexOf(Lang.get()) !== -1) {
      points += 5;
      reasons.push('available');
    }

    if (card.deadline === 'rolling' || card.deadline >= today()) {
      points += 5;
      reasons.push('deadline');
    }

    return {
      card: card,
      score: Math.max(0, Math.min(100, Math.round((points / 105) * 100))),
      reasons: reasons.slice(0, 4),
    };
  }

  export function init(): void {
    const form = document.querySelector<HTMLFormElement>('[data-analyzer]');
    if (!form) return;

    const steps = Array.prototype.slice.call(
      form.querySelectorAll<HTMLElement>('[data-an-step]')
    ) as HTMLElement[];
    const pool = document.querySelector<HTMLElement>('[data-an-pool]');
    const resultsBlock = document.querySelector<HTMLElement>('[data-an-results]');
    const resultsGrid = document.querySelector<HTMLElement>('[data-an-results-grid]');
    const resultsEmpty = document.querySelector<HTMLElement>('[data-an-results-empty]');
    const progress = form.querySelector<HTMLElement>('[data-an-progress]');
    const bar = form.querySelector<HTMLElement>('[data-an-bar]');
    const back = form.querySelector<HTMLButtonElement>('[data-an-back]');
    const next = form.querySelector<HTMLButtonElement>('[data-an-next]');
    const error = form.querySelector<HTMLElement>('[data-an-error]');
    const labelNext = form.querySelector<HTMLElement>('[data-an-label-next]');
    const labelSubmit = form.querySelector<HTMLElement>('[data-an-label-submit]');
    const restart = document.querySelector<HTMLButtonElement>('[data-an-restart]');
    const print = document.querySelector<HTMLButtonElement>('[data-an-print]');

    if (!steps.length || !pool || !resultsBlock || !resultsGrid || !next) return;

    const cards = Directory.read(pool);
    const tplMatch = document.querySelector<HTMLTemplateElement>('#tpl-match');
    const tplWhy = document.querySelector<HTMLTemplateElement>('#tpl-why');
    const tplReasons = document.querySelector<HTMLTemplateElement>('#tpl-reasons');
    let step = 0;

    function value(name: string): string {
      const checked = form!.querySelector<HTMLInputElement>('input[name="' + name + '"]:checked');
      if (checked) return checked.value;
      const select = form!.querySelector<HTMLSelectElement>('select[name="' + name + '"]');
      return select ? select.value : '';
    }

    function chosenFields(): string[] {
      const list: string[] = [];
      form!
        .querySelectorAll<HTMLInputElement>('input[name="fields"]:checked')
        .forEach(function (input) {
          list.push(input.value);
        });
      return list;
    }

    function answers(): Answers {
      return {
        location: value('location'),
        level: value('level'),
        goal: value('goal'),
        fields: chosenFields(),
        german: value('german') || 'none',
        english: value('english') || 'none',
        needsFree: value('free') !== 'no',
      };
    }

    function showStep(): void {
      steps.forEach(function (node, index) {
        node.hidden = index !== step;
      });
      if (progress) {
        progress.querySelectorAll<HTMLElement>('[data-an-cur]').forEach(function (n) {
          n.textContent = String(step + 1);
        });
        progress.querySelectorAll<HTMLElement>('[data-an-total]').forEach(function (n) {
          n.textContent = String(steps.length);
        });
      }
      if (bar) bar.style.width = Math.round(((step + 1) / steps.length) * 100) + '%';
      if (back) back.disabled = step === 0;
      const last = step === steps.length - 1;
      if (labelNext) labelNext.hidden = last;
      if (labelSubmit) labelSubmit.hidden = !last;
      if (error) error.hidden = true;
    }

    function decorate(match: Match): void {
      const card = match.card.el;

      if (tplMatch) {
        const block = tplMatch.content.cloneNode(true) as DocumentFragment;
        const valueNode = block.querySelector<HTMLElement>('[data-score]');
        const fill = block.querySelector<HTMLElement>('.match__fill');
        if (valueNode) valueNode.textContent = String(match.score);
        if (fill) fill.style.width = match.score + '%';
        card.insertBefore(block, card.firstChild);
      }

      if (tplWhy && tplReasons) {
        const why = tplWhy.content.cloneNode(true) as DocumentFragment;
        const list = why.querySelector<HTMLElement>('.why__list');
        if (list) {
          match.reasons.forEach(function (reason) {
            const item = tplReasons.content.querySelector('[data-reason="' + reason + '"]');
            if (item) list.appendChild(item.cloneNode(true));
          });
        }
        const link = card.querySelector('.opp-card__link');
        if (link) card.insertBefore(why, link);
        else card.appendChild(why);
      }
    }

    function clearResults(): void {
      resultsGrid!.querySelectorAll<HTMLElement>('.opp-card').forEach(function (card) {
        card.querySelectorAll('.match, .why').forEach(function (extra) {
          if (extra.parentElement) extra.parentElement.removeChild(extra);
        });
        pool!.appendChild(card);
      });
      resultsGrid!.innerHTML = '';
    }

    function finish(): void {
      clearResults();

      const list = cards
        .map(function (card) {
          return score(card, answers());
        })
        .filter(function (match) {
          return match.score >= 35;
        })
        .sort(function (a, b) {
          return b.score - a.score;
        })
        .slice(0, 6);

      list.forEach(function (match) {
        resultsGrid!.appendChild(match.card.el);
        decorate(match);
      });

      document.querySelectorAll<HTMLElement>('[data-an-count]').forEach(function (node) {
        node.textContent = String(list.length);
      });
      if (resultsEmpty) resultsEmpty.hidden = list.length > 0;

      form!.hidden = true;
      resultsBlock!.hidden = false;
      resultsBlock!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    next.addEventListener('click', function () {
      if (steps[step].getAttribute('data-an-step') === 'fields' && chosenFields().length === 0) {
        if (error) error.hidden = false;
        return;
      }
      if (step === steps.length - 1) {
        finish();
        return;
      }
      step += 1;
      showStep();
    });

    if (back) {
      back.addEventListener('click', function () {
        if (step > 0) step -= 1;
        showStep();
      });
    }

    if (restart) {
      restart.addEventListener('click', function () {
        clearResults();
        resultsBlock!.hidden = true;
        form!.hidden = false;
        step = 0;
        showStep();
        form!.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    if (print) {
      print.addEventListener('click', function () {
        window.print();
      });
    }

    showStep();
  }
}
