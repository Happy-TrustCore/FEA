/**
 * FEA — chat assistant AI fallback.
 *
 * The assistant tries its local, in-browser knowledge base first (see
 * src/ts/chat.ts and assets/js/chat-data.js) — that part costs nothing and
 * always works, offline included. This endpoint is only reached when the
 * local matcher has no confident answer, and it exists to keep three
 * promises at once:
 *
 *   1. Free, forever, no card: Cloudflare Workers AI has a daily free
 *      allocation. Without a billing method on the Cloudflare account (there
 *      is none here, by design), a request beyond that allocation simply
 *      fails — it cannot be billed, because there is nothing to bill.
 *   2. It can never cost money: DAILY_LIMIT_TOTAL is set well *below*
 *      Cloudflare's own free allocation, so this Worker stops calling the AI
 *      on its own before Cloudflare's free tier would ever refuse a request.
 *   3. It never breaks: any failure here — quota reached, the AI is slow,
 *      Workers AI is having a bad day — returns a plain { ok: false }. The
 *      browser already knows to fall back to its static local answer when
 *      that happens (see chat.ts), so a visitor never sees an error.
 *
 * The model is deliberately kept on a short leash: told exactly which
 * programmes it may mention, told never to invent a deadline or amount, and
 * told to answer only in the visitor's language, briefly. A wrong deadline
 * in front of someone applying for a scholarship is worse than a vaguer
 * answer that points them at the official page.
 */

import { corsHeaders, json, originAllowed, withinDailyLimit } from './contact.js';

const LANG_NAMES = {
  de: 'German',
  en: 'English',
  fa: 'Dari (Afghan Persian)',
  ar: 'Arabic',
};

const MODEL = '@cf/meta/llama-3.1-8b-instruct';

// Cloudflare Workers AI's own free daily allocation is far larger than this.
// Both numbers exist purely so the assistant degrades to "local answers
// only" gracefully and predictably, long before any real limit is hit.
const DAILY_LIMIT_TOTAL = 200;
const DAILY_LIMIT_PER_IP = 15;

const MAX_MESSAGE_LENGTH = 600;
const MAX_REPLY_LENGTH = 900;

function systemPrompt(langName) {
  return (
    `You are the FEA Assistant, a brief, careful helper on a non-profit website that helps ` +
    `Afghan and other students find free scholarships, German Ausbildung (vocational training), ` +
    `university pathways and free courses in Germany.\n` +
    `Answer only in ${langName}, in 2-4 short sentences.\n` +
    `You may mention these real programmes when relevant: DAAD scholarships, Deutschlandstipendium, ` +
    `Hilde-Domin-Programm, Garantiefonds Hochschule, Studienkolleg, uni-assist, the Arbeitsagentur and ` +
    `IHK Ausbildung portals, BAMF Integrationskurs, Deutsche Welle German courses, freeCodeCamp, ` +
    `edX/Coursera, and Make it in Germany.\n` +
    `NEVER state a specific deadline, amount of money, or eligibility rule unless you are certain of ` +
    `it — instead tell the visitor to check the official page or this site's Opportunities page.\n` +
    `If the question is not about education, scholarships, visas for study, or student/apprentice life ` +
    `in Germany, say briefly that this assistant only covers those topics and suggest the contact page.\n` +
    `Never ask the visitor for personal data. Be warm but brief.`
  );
}

export async function handleChat(request, env) {
  const origin = request.headers.get('Origin') || '';

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405, origin);
  }
  if (!originAllowed(origin)) {
    return json({ ok: false, error: 'origin_not_allowed' }, 403, origin);
  }

  let data;
  try {
    data = await request.json();
  } catch (err) {
    return json({ ok: false, error: 'invalid_json' }, 400, origin);
  }

  const message = typeof data.message === 'string' ? data.message.trim().slice(0, MAX_MESSAGE_LENGTH) : '';
  const lang = LANG_NAMES[data.lang] ? data.lang : 'en';

  if (!message) {
    return json({ ok: false, error: 'invalid_input' }, 400, origin);
  }

  if (!env.AI) {
    console.error('Chat worker has no AI binding configured');
    return json({ ok: false, error: 'not_configured' }, 500, origin);
  }

  const today = new Date().toISOString().slice(0, 10);
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

  const withinTotal = await withinDailyLimit(env, `rl:chat:total:${today}`, DAILY_LIMIT_TOTAL);
  if (!withinTotal) {
    return json({ ok: false, error: 'limit_reached' }, 429, origin);
  }
  const withinIp = await withinDailyLimit(env, `rl:chat:ip:${ip}:${today}`, DAILY_LIMIT_PER_IP);
  if (!withinIp) {
    return json({ ok: false, error: 'limit_reached' }, 429, origin);
  }

  try {
    const result = await env.AI.run(MODEL, {
      messages: [
        { role: 'system', content: systemPrompt(LANG_NAMES[lang]) },
        { role: 'user', content: message },
      ],
      max_tokens: 260,
    });

    const reply = typeof result?.response === 'string' ? result.response.trim().slice(0, MAX_REPLY_LENGTH) : '';
    if (!reply) {
      return json({ ok: false, error: 'empty_reply' }, 502, origin);
    }

    return json({ ok: true, reply }, 200, origin);
  } catch (err) {
    console.error('Workers AI call failed', err);
    return json({ ok: false, error: 'ai_failed' }, 502, origin);
  }
}
