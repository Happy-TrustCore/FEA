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

  /* ---------------------------------------------------------------- */
  /* Contact form                                                      */
  /* ---------------------------------------------------------------- */

  /**
   * A valid submission is sent straight to the Cloudflare Worker endpoint
   * (see /worker), which relays it through Brevo. If that endpoint has not
   * been deployed yet (data-endpoint is still the placeholder), or the
   * request fails for any reason — offline visitor, Worker down, free quota
   * exhausted — the form falls back to opening the visitor's own mail client
   * with the message prepared, exactly as it always has. A visitor never
   * sees a dead end either way.
   */
  function initContactForm() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var name = form.querySelector('#ct-name');
    var email = form.querySelector('#ct-email');
    var message = form.querySelector('#ct-message');
    var consent = form.querySelector('#ct-consent');
    var topic = form.querySelector('#ct-topic');
    var answerLang = form.querySelector('#ct-lang');
    var honeypot = form.querySelector('[data-hp-field]');
    var successSent = document.querySelector('[data-contact-success-sent]');
    var successMailto = document.querySelector('[data-contact-success]');
    var address = form.getAttribute('data-mail-to') || '';
    var endpoint = form.getAttribute('data-endpoint') || '';
    var submitButton = form.querySelector('button[type="submit"]');

    function mark(field, invalid) {
      var wrapper = field.closest('.field');
      var hint = wrapper ? wrapper.querySelector('.field__error') : null;
      if (hint) hint.hidden = !invalid;
      if (invalid) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
      return !invalid;
    }

    function selectedText(select) {
      return select && select.options[select.selectedIndex]
        ? select.options[select.selectedIndex].text
        : '';
    }

    function hideSuccess() {
      if (successSent) successSent.hidden = true;
      if (successMailto) successMailto.hidden = true;
    }

    function showSuccess(node) {
      hideSuccess();
      if (!node) return;
      node.hidden = false;
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function sendByMailto() {
      var body = [
        message.value.trim(),
        '',
        '---',
        'Name: ' + name.value.trim(),
        'E-Mail: ' + email.value.trim(),
        'Thema / topic: ' + selectedText(topic),
        'Antwortsprache / answer language: ' + selectedText(answerLang)
      ].join('\n');

      window.location.href =
        'mailto:' + address +
        '?subject=' + encodeURIComponent('[FEA] ' + selectedText(topic) + ' — ' + name.value.trim()) +
        '&body=' + encodeURIComponent(body);

      showSuccess(successMailto);
    }

    function sendByWorker() {
      var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      var timeout = window.setTimeout(function () {
        if (controller) controller.abort();
      }, 8000);

      var payload = {
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim(),
        topic: topic ? topic.value : 'other',
        lang: answerLang ? answerLang.value : 'en',
        consent: !!(consent && consent.checked),
        hp: honeypot ? honeypot.value : ''
      };

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller ? controller.signal : undefined
      })
        .then(function (response) {
          if (!response.ok) throw new Error('worker responded ' + response.status);
          return response.json();
        })
        .then(function (data) {
          if (!data || data.ok !== true) throw new Error('worker reported failure');
          form.reset();
          showSuccess(successSent);
        })
        .catch(function () {
          // Offline, Worker not deployed yet, free quota exhausted for the
          // day, anything — the visitor still gets their message out.
          sendByMailto();
        })
        .then(function () {
          window.clearTimeout(timeout);
          if (submitButton) submitButton.disabled = false;
        });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var valid = true;
      valid = mark(name, name.value.trim().length < 2) && valid;
      valid = mark(email, !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) && valid;
      valid = mark(message, message.value.trim().length < 20) && valid;
      valid = mark(consent, !consent.checked) && valid;

      if (!valid) {
        hideSuccess();
        var first = form.querySelector('[aria-invalid="true"]');
        if (first) first.focus();
        return;
      }

      // Not deployed yet (still the placeholder subdomain): keep today's
      // behaviour rather than let every visitor's browser try — and fail —
      // a request to a Worker that does not exist.
      if (!endpoint || endpoint.indexOf('YOUR-SUBDOMAIN') !== -1) {
        sendByMailto();
        return;
      }

      if (submitButton) submitButton.disabled = true;
      sendByWorker();
    });
  }

  function start() {
    initTheme();
    initNav();
    initReveal();
    initAccordion();
    initCounters();
    initBackToTop();
    initFlow();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
