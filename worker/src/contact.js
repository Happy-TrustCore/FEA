/**
 * FEA — contact form endpoint.
 *
 * Free path: Cloudflare Workers (100,000 requests/day free, no card) calls
 * Brevo's transactional email API (300 emails/day free, no card) to deliver
 * the message. No server to rent, no payment method anywhere in this chain.
 *
 * Two things protect the free Brevo quota from being drained by a bot before
 * a human ever sees the abuse:
 *   - a honeypot field ("website") that only a bot fills in
 *   - a per-IP daily cap stored in Workers KV
 * Both fail OPEN, not closed: if KV is briefly unreachable, a real visitor's
 * message still goes through rather than being blocked by an infrastructure
 * hiccup that has nothing to do with them.
 *
 * The site itself (GitHub Pages) and this Worker (Cloudflare) are different
 * origins, so CORS is handled explicitly below — only the real site's origin
 * is allowed to call this endpoint.
 */

const ALLOWED_ORIGINS = new Set(['https://happy-trustcore.github.io']);

const TOPICS = new Set(['scholarship', 'university', 'ausbildung', 'course', 'volunteer', 'other']);
const LANGS = new Set(['de', 'en', 'fa', 'ar']);
const DAILY_LIMIT_PER_IP = 5;
const RATE_LIMIT_TTL_SECONDS = 60 * 60 * 24 * 2; // keep counters around two days

export function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.has(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

export function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

export function originAllowed(origin) {
  return ALLOWED_ORIGINS.has(origin);
}

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

/** Fails open on any KV problem — a real visitor is never blocked by our own infrastructure. */
async function withinDailyLimit(env, key, limit) {
  if (!env.CONTACT_KV) return true;
  try {
    const current = parseInt((await env.CONTACT_KV.get(key)) || '0', 10);
    if (current >= limit) return false;
    await env.CONTACT_KV.put(key, String(current + 1), { expirationTtl: RATE_LIMIT_TTL_SECONDS });
    return true;
  } catch (err) {
    return true;
  }
}

export async function handleContact(request, env) {
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

  // A hidden field real visitors never see or fill in. A bot that fills
  // every field on the form fills this one too.
  if (data.hp) {
    return json({ ok: true }, 200, origin);
  }

  const name = typeof data.name === 'string' ? data.name.trim().slice(0, 200) : '';
  const email = typeof data.email === 'string' ? data.email.trim().slice(0, 200) : '';
  const message = typeof data.message === 'string' ? data.message.trim().slice(0, 5000) : '';
  const topic = TOPICS.has(data.topic) ? data.topic : 'other';
  const lang = LANGS.has(data.lang) ? data.lang : 'en';
  const consent = data.consent === true;

  if (name.length < 2 || !isValidEmail(email) || message.length < 20 || !consent) {
    return json({ ok: false, error: 'invalid_input' }, 400, origin);
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const rateKey = `rl:contact:${ip}:${new Date().toISOString().slice(0, 10)}`;
  if (!(await withinDailyLimit(env, rateKey, DAILY_LIMIT_PER_IP))) {
    return json({ ok: false, error: 'rate_limited' }, 429, origin);
  }

  if (!env.BREVO_API_KEY || !env.CONTACT_TO_EMAIL) {
    // Misconfiguration, not a visitor error — logged for the maintainer,
    // reported generically to the visitor so nothing internal leaks.
    console.error('Contact worker is missing BREVO_API_KEY or CONTACT_TO_EMAIL');
    return json({ ok: false, error: 'not_configured' }, 500, origin);
  }

  const textContent = [
    message,
    '',
    '---',
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Topic: ${topic}`,
    `Answer language: ${lang}`,
  ].join('\n');

  let brevoResponse;
  try {
    brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'FEA contact form',
          email: env.CONTACT_FROM_EMAIL || env.CONTACT_TO_EMAIL,
        },
        to: [{ email: env.CONTACT_TO_EMAIL }],
        replyTo: { email, name },
        subject: `[FEA] ${topic} — ${name}`,
        textContent,
      }),
    });
  } catch (err) {
    console.error('Brevo request failed', err);
    return json({ ok: false, error: 'send_failed' }, 502, origin);
  }

  if (!brevoResponse.ok) {
    const detail = await brevoResponse.text().catch(() => '');
    console.error('Brevo rejected the message', brevoResponse.status, detail);
    return json({ ok: false, error: 'send_failed' }, 502, origin);
  }

  return json({ ok: true }, 200, origin);
}

export { withinDailyLimit };
