/**
 * FEA — progressive UI behaviour (plain JavaScript, no build step).
 *
 * This file deliberately stays in vanilla JS: it only touches presentation
 * (theme, navigation, reveal animations, accordions) and must keep working even
 * if the compiled TypeScript bundle fails to load.
 */
(function () {
  'use strict';

  var THEME_KEY = 'fea.theme';

  /* ---------------------------------------------------------------- */
  /* Theme                                                            */
  /* ---------------------------------------------------------------- */

  function storedTheme() {
    try {
      return window.localStorage.getItem(THEME_KEY);
    } catch (err) {
      return null;
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', String(theme === 'dark'));
    }
  }

  function initTheme() {
    // FEA is a white site: light is always the default, no matter what the
    // operating system prefers. Dark mode only appears if the visitor picks it.
    applyTheme(storedTheme() || 'light');

    document.addEventListener('click', function (event) {
      var toggle = event.target.closest ? event.target.closest('[data-theme-toggle]') : null;
      if (!toggle) return;
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        window.localStorage.setItem(THEME_KEY, next);
      } catch (err) {
        /* ignore — theme simply is not remembered */
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* Header + mobile navigation                                        */
  /* ---------------------------------------------------------------- */

  function initNav() {
    var header = document.querySelector('[data-header]');
    var toggle = document.querySelector('[data-nav-toggle]');
    var menu = document.querySelector('[data-nav-menu]');

    if (header) {
      var onScroll = function () {
        header.classList.toggle('is-stuck', window.scrollY > 8);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    if (!toggle || !menu) return;

    var close = function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    };

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-open', isOpen);
    });

    menu.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') close();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') close();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) close();
    });
  }

  /* ---------------------------------------------------------------- */
  /* Reveal on scroll                                                  */
  /* ---------------------------------------------------------------- */

  function initReveal() {
    var nodes = document.querySelectorAll('[data-reveal]');
    if (!nodes.length) return;

    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      for (var i = 0; i < nodes.length; i++) nodes[i].classList.add('is-visible');
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var delay = parseInt(entry.target.getAttribute('data-reveal-delay') || '0', 10);
          window.setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    for (var j = 0; j < nodes.length; j++) observer.observe(nodes[j]);
  }

  /* ---------------------------------------------------------------- */
  /* Accordion (FAQ)                                                   */
  /* ---------------------------------------------------------------- */

  function initAccordion() {
    var items = document.querySelectorAll('[data-accordion] > .accordion__item');
    for (var i = 0; i < items.length; i++) {
      (function (item) {
        var button = item.querySelector('.accordion__trigger');
        var panel = item.querySelector('.accordion__panel');
        if (!button || !panel) return;

        button.setAttribute('aria-expanded', 'false');
        panel.hidden = true;

        button.addEventListener('click', function () {
          var isOpen = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', String(!isOpen));
          panel.hidden = isOpen;
          item.classList.toggle('is-open', !isOpen);
        });
      })(items[i]);
    }
  }

  /* ---------------------------------------------------------------- */
  /* Count-up statistics                                               */
  /* ---------------------------------------------------------------- */

  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var node = entry.target;
          var text = node.textContent || '';
          var digits = text.match(/\d+/);
          if (!digits) {
            observer.unobserve(node);
            return;
          }
          var target = parseInt(digits[0], 10);
          if (target > 500) {
            observer.unobserve(node);
            return;
          }
          var started = null;
          var duration = 900;
          var step = function (now) {
            if (started === null) started = now;
            var progress = Math.min((now - started) / duration, 1);
            var value = Math.round(target * progress);
            node.textContent = text.replace(digits[0], String(value));
            if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
          observer.unobserve(node);
        });
      },
      { threshold: 0.5 }
    );

    for (var i = 0; i < counters.length; i++) observer.observe(counters[i]);
  }

  /* ---------------------------------------------------------------- */
  /* Back to top                                                       */
  /* ---------------------------------------------------------------- */

  function initBackToTop() {
    var button = document.querySelector('[data-to-top]');
    if (!button) return;

    var onScroll = function () {
      button.classList.toggle('is-visible', window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Flow diagram: keyboard + click focus on a step                     */
  /* ---------------------------------------------------------------- */

  function initFlow() {
    var steps = document.querySelectorAll('[data-flow-step]');
    for (var i = 0; i < steps.length; i++) {
      (function (step) {
        step.addEventListener('mouseenter', function () {
          step.classList.add('is-focused');
        });
        step.addEventListener('mouseleave', function () {
          step.classList.remove('is-focused');
        });
        step.addEventListener('focusin', function () {
          step.classList.add('is-focused');
        });
        step.addEventListener('focusout', function () {
          step.classList.remove('is-focused');
        });
      })(steps[i]);
    }
  }

  function start() {
    initTheme();
    initNav();
    initReveal();
    initAccordion();
    initCounters();
    initBackToTop();
    initFlow();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
