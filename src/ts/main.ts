/**
 * Bootstrap. Every page loads the same compiled bundle; each module checks for
 * the markup it needs and stays inert if the page does not contain it.
 */
namespace FEA {
  function markActiveNav(): void {
    let page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === '') page = 'index.html';

    document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach(function (link) {
      const target = link.getAttribute('href') || '';
      const isActive = target === page || (page === 'index.html' && target === 'index.html');
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /** Renders the social channel links shared by the footer and the community page. */
  function renderChannels(): void {
    const icons: Record<string, string> = {
      instagram:
        '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/>' +
        '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/>' +
        '<circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>',
      facebook:
        '<path d="M14.5 8.4h2.2V5.6h-2.4c-2.2 0-3.6 1.4-3.6 3.6v1.6H8.4v2.9h2.3V21h3v-7.3h2.3l.4-2.9h-2.7V9.6c0-.8.3-1.2.8-1.2z" fill="currentColor"/>',
      tiktok:
        '<path d="M14.2 3h2.6c.2 1.9 1.4 3.3 3.2 3.6v2.7c-1.2 0-2.3-.3-3.2-.9v5.8c0 3.1-2.3 5.4-5.2 5.4S6.4 17.3 6.4 14.2s2.3-5.4 5.2-5.4c.3 0 .6 0 .9.1v2.8a2.6 2.6 0 1 0 1.7 2.5z" fill="currentColor"/>',
      telegram:
        '<path d="M20.7 4.5 3.9 11c-1 .4-1 1.8 0 2.1l4.2 1.3 1.6 4.8c.3.9 1.4 1.1 2 .4l2.2-2.4 4.1 3c.7.5 1.7.1 1.9-.8l2.6-13c.2-1-.8-1.8-1.8-1.4z" fill="currentColor"/>',
      whatsapp:
        '<path d="M12 3.3a8.6 8.6 0 0 0-7.4 13l-1.2 4.4 4.5-1.2A8.6 8.6 0 1 0 12 3.3zm4.7 12c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6a9.4 9.4 0 0 1-3.6-3.6c-.4-.6-.7-1.3-.7-2 0-.7.3-1.3.7-1.7.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.5l-.3.4c-.1.1-.2.3-.1.5.3.6 1.5 2.1 3 2.7.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.3.1.4.3.4.4 0 .1 0 .4-.1.6z" fill="currentColor"/>',
    };

    document.querySelectorAll<HTMLElement>('[data-channels]').forEach(function (host) {
      const style = host.getAttribute('data-channels') || 'inline';
      host.innerHTML = '';
      Data.CHANNELS.forEach(function (channel) {
        const link = document.createElement('a');
        link.className = style === 'cards' ? 'channel-card' : 'channel-link';
        link.href = channel.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', channel.label);

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
        svg.innerHTML = icons[channel.icon] || '';
        link.appendChild(svg);

        const label = document.createElement('span');
        label.textContent = channel.label;
        link.appendChild(label);

        host.appendChild(link);
      });
    });
  }

  /** Fills in the mail/dev links that are shared across pages. */
  function renderStaticLinks(): void {
    document.querySelectorAll<HTMLAnchorElement>('[data-mailto]').forEach(function (link) {
      link.href = 'mailto:' + Data.CONTACT_EMAIL;
      if (link.hasAttribute('data-mailto-text')) link.textContent = Data.CONTACT_EMAIL;
    });
    document.querySelectorAll<HTMLAnchorElement>('[data-dev-link]').forEach(function (link) {
      link.href = Data.DEV_SITE;
    });
  }

  function start(): void {
    I18n.init();
    markActiveNav();
    renderChannels();
    renderStaticLinks();
    Opps.init();
    Analyzer.init();
    Contact.init();
    Chat.init();
    document.body.classList.add('is-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
}
