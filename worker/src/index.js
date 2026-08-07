/**
 * FEA — Worker entry point. Routes to the two small endpoints the static
 * site needs a backend for. Both are free-tier only, see the README.
 */

import { handleContact } from './contact.js';
import { handleChat } from './chat.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/contact') return handleContact(request, env);
    if (url.pathname === '/chat') return handleChat(request, env);

    return new Response('Not found', { status: 404 });
  },
};
