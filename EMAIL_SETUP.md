# Form → Email Setup (Resend)

All three forms on the site send submissions to:
- reed.p@empowerenergy.co
- salman.s@empowerenergy.co

How it works:
- The browser POSTs the form data to `/api/send-email`.
- The serverless function at `api/send-email.js` uses the Resend SDK to send the email.
- The Resend API key lives in an environment variable (`RESEND_API_KEY`) — never in the frontend code.

## One-time setup

### 1. Create a Resend account and API key
1. Go to https://resend.com → sign up (free tier covers 3,000 emails/month, 100/day).
2. In the dashboard, open **API Keys** → **Create API Key** → copy the key (starts with `re_`).

### 2. Set the API key
Create a `.env.local` file in the project root (next to `package.json`) with:

```
RESEND_API_KEY=re_your_key_here
```

`.env.local` is git-ignored. Do not commit your key.

### 3. (Production) Verify your sending domain
By default the API sends from `onboarding@resend.dev`, which works for testing but lands in spam easily.

For production:
1. In Resend, go to **Domains** → **Add Domain** (e.g. `boldenergy.com`).
2. Add the DNS records Resend shows you to your DNS provider.
3. Once verified, set `RESEND_FROM` (e.g. `Bold Energy <hello@boldenergy.com>`) in `.env.local` and in the production env vars.

## Local development

The `/api/*` routes are serverless functions (Vercel-style). `npm run dev` (Vite) only serves the frontend — it does not run the API.

The simplest way to run the API locally is the Vercel CLI:

```
npm i -g vercel
vercel dev
```

`vercel dev` runs both the Vite frontend and the `/api/send-email` function together. It will prompt you to link the project the first time — choose "Yes" and follow defaults.

## Production deploy

This project is set up for Vercel deployment:

1. Push the repo to GitHub.
2. Import the repo at https://vercel.com/new.
3. Add `RESEND_API_KEY` (and optionally `RESEND_FROM`) in the project's **Settings → Environment Variables**.
4. Deploy.

If you deploy somewhere else (Netlify, Cloudflare Pages, etc.), the `api/` folder convention is Vercel-specific — you'll need to move the handler to that platform's serverless function path.

## Customising

- Recipient addresses live in `api/send-email.js` (`RECIPIENTS` array).
- Email subject, "from" address, HTML template are all in that same file.
- Each form sends a `formType` identifier:
  - `homeowner_modal` — popup "Request a Quote"
  - `homeowner_hero` — inline lead form on `/home-owners`
  - `dealer_modal` — popup "Become a Partner / Schedule a Call"
