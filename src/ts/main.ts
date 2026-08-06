/** Bootstrap. Each module checks for its own markup and stays inert without it. */
namespace FEA {
  function markActiveNav(): void {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach(function (link) {
      const active = (link.getAttribute('href') || '') === (page === '' ? 'index.html' : page);
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function start(): void {
    Lang.init();
    markActiveNav();
    Directory.init();
    Analyzer.init();
    Chat.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
}
