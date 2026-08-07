# FEA edge Worker — contact form + chat AI fallback

One Cloudflare Worker, two endpoints:

- `/contact` — relays the contact form to Brevo
- `/chat` — the assistant's AI fallback, only called when its local,
  in-browser knowledge base has no confident answer

Everything here is free, forever, without a payment method: Cloudflare
Workers gives 100,000 requests/day free, Workers KV gives 100,000 reads and
1,000 writes a day free, Workers AI has its own daily free allocation, and
Brevo gives 300 emails/day free. Neither endpoint will come close to any of
those numbers — see each section below for the extra caps this project adds
on top, just to be sure.

The Worker never runs on your machine in production — Cloudflare hosts it.
You only need `wrangler` (Cloudflare's CLI) locally to deploy it once. Both
endpoints deploy together, in the same steps below.

## One-time setup (you run these yourself — nothing here is typed into a chat)

1. **Create a free Cloudflare account** at <https://dash.cloudflare.com/sign-up>
   if you don't have one. No card required for the plan this uses — Workers
   AI (used by `/chat`) is included on the same free account, no extra signup.

2. **Create a free Brevo account** at <https://www.brevo.com> if you don't
   have one. No card required for the free plan (300 emails/day). Skip this
   and step 3 if you only want to deploy the chat AI fallback, not the
   contact form.

3. In Brevo, go to **Senders, Domains & Dedicated IPs → Senders** and verify
   `happytrustcore.github@gmail.com` as a sender (Brevo emails you a
   confirmation link). This is required — Brevo refuses to send "from" an
   address it hasn't verified.

4. In Brevo, go to **SMTP & API → API Keys** and create a new API key. Copy
   it — you'll paste it into your own terminal in step 7, never into a chat
   with me or anyone else.

5. From this folder, log in to Cloudflare (opens your browser):

   ```bash
   cd worker
   npx wrangler login
   ```

6. Create the KV namespace both endpoints share for their daily counters —
   "how many contact messages / chat questions has this IP sent today":

   ```bash
   npx wrangler kv namespace create CONTACT_KV
   ```

   It prints something like `id = "a1b2c3..."`. Open `wrangler.toml` in this
   folder and replace `REPLACE_WITH_KV_NAMESPACE_ID` with that id.

7. Store the Brevo API key as a Cloudflare secret — this prompts you in your
   own terminal, and the key is stored encrypted on Cloudflare, never in this
   repository. (Skip this if you're only deploying the chat fallback.)

   ```bash
   npx wrangler secret put BREVO_API_KEY
   ```

8. Deploy:

   ```bash
   npx wrangler deploy
   ```

   Wrangler prints a URL that looks like
   `https://fea-contact.<your-subdomain>.workers.dev`. Copy it — both
   endpoints live under it, as `/contact` and `/chat`.

9. Wire up whichever endpoints you deployed for real:

   **Contact form** — open [`src/pages/contact.html`](../src/pages/contact.html),
   find

   ```html
   data-endpoint="https://fea-contact.YOUR-SUBDOMAIN.workers.dev/contact"
   ```

   and replace `YOUR-SUBDOMAIN` with your real subdomain from step 8.

   **Chat AI fallback** — open [`src/ts/chat.ts`](../src/ts/chat.ts), find

   ```ts
   const CHAT_ENDPOINT = 'https://fea-contact.YOUR-SUBDOMAIN.workers.dev/chat';
   ```

   and do the same there.

   Then rebuild everything and commit + push as usual:

   ```bash
   cd ..
   npm run build
   python tools/build_pages.py
   ```

   Until you do this, both features keep working exactly as they do today —
   the contact form opens the visitor's email client, and the chat assistant
   answers only from its local knowledge base. Nothing breaks if you skip
   this step, deploy only one of the two endpoints, or come back to it later.

## Contact form: what it protects against, and what it doesn't

- **Bots submitting the form automatically**: a hidden honeypot field
  (`worker/src/contact.js` checks it) silently drops anything that fills in
  a field real visitors never see.
- **A bot or a mistake burning your free email quota**: at most 5 emails per
  IP address per day get through; the 6th is refused with no charge to
  anyone, since Brevo's free tier has no paid overflow to fall back to.
- **This is not a CAPTCHA.** A determined human spammer could still get a
  handful of messages through per day. That's an acceptable trade for staying
  free and not asking visitors to solve a puzzle. If spam ever becomes a real
  problem, Cloudflare Turnstile (also free, no card) is the natural next
  layer — ask me to add it if that day comes.

## Chat AI fallback: how it stays free and never breaks

The assistant always tries its local, in-browser knowledge base first (see
`src/ts/chat.ts` and `assets/js/chat-data.js`) — that part is instant and
costs nothing. The AI Worker is only called when the local matcher has no
confident answer, and even then:

- **A daily cap well under Cloudflare's own free allocation**: at most 200
  AI replies per day site-wide, and 15 per visitor. Once either cap is hit,
  the Worker refuses the request *before* calling Workers AI — the assistant
  just falls back to its normal "I didn't quite understand that" message,
  same as if the Worker were never deployed at all.
- **No payment method on the Cloudflare account means it is structurally
  impossible for this to cost money.** Once the free daily allocation is
  used up, Cloudflare simply declines further requests — there's no paid
  tier to spill into by accident.
- **The model is kept on a short leash** (see `worker/src/chat.js`): it's
  told which real FEA programmes it may mention, told never to invent a
  deadline or amount, and told to point to the official page for anything
  specific. A vague-but-honest answer is better than a confident wrong one.
- **Any failure — quota reached, Workers AI is slow, anything** — reaches
  the visitor as the same static fallback text the assistant has always
  shown. There is no error state a visitor can see.

## Testing changes locally before deploying

```bash
cd worker
npx wrangler dev --local
```

This runs the Worker on your machine with a local, throwaway KV store. Put
a fake key in a `worker/.dev.vars` file (already gitignored) to test `/contact`
without touching your real Brevo account:

```
BREVO_API_KEY="anything-for-local-testing"
```

A local test of `/contact` will attempt a real network call to Brevo and get
rejected (since the key isn't real) — that's expected, and confirms the
request path works right up to the point where a genuine key is needed.

`/chat` cannot be fully tested locally: Workers AI always calls Cloudflare's
real infrastructure, even in `wrangler dev --local`, and needs a logged-in
`wrangler` session (step 5 above) to authenticate. Without that, `/chat`
correctly returns `{ ok: false }` rather than crashing — which is itself the
thing worth confirming after any change to `worker/src/chat.js`.
