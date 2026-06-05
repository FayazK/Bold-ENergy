import { Resend } from 'resend';

const RECIPIENTS = ['reed.p@empowerenergy.co', 'salman.s@empowerenergy.co'];

const FROM_ADDRESS = process.env.RESEND_FROM || 'Bold Energy <onboarding@resend.dev>';

const escapeHtml = (str) =>
  String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const FORM_LABELS = {
  homeowner_modal: 'Homeowner — Request a Quote',
  homeowner_hero: 'Homeowner — Hero Lead Form',
  dealer_modal: 'Dealer — Partner Application',
};

const FIELD_LABELS = {
  fullName: 'Full Name',
  company: 'Company',
  phone: 'Phone Number',
  email: 'Email Address',
  state: 'State',
  installType: 'What to Install',
  monthlyBill: 'Monthly Electric Bill',
  volume: 'Monthly Deal Volume',
  address: 'Property Address',
  utilityBill: 'Monthly Utility Bill',
  ownRent: 'Own or Rent',
  contactMethod: 'Preferred Contact Method',
};

const buildHtml = (formType, data) => {
  const title = FORM_LABELS[formType] || 'New Form Submission';
  const rows = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:10px 14px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;color:#1A2A4A;width:200px;">${escapeHtml(FIELD_LABELS[k] || k)}</td>
          <td style="padding:10px 14px;border:1px solid #e5e7eb;color:#1A2A4A;">${escapeHtml(v)}</td>
        </tr>`
    )
    .join('');

  return `
    <div style="font-family:'DM Sans',Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#1A2A4A;">
      <h2 style="font-family:'Quicksand',Arial,sans-serif;color:#1A2A4A;margin:0 0 6px 0;">New Submission</h2>
      <p style="color:#A1B502;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;font-size:12px;margin:0 0 18px 0;">${escapeHtml(title)}</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${rows}
      </table>
      <p style="margin-top:24px;font-size:12px;color:#6b7280;">Submitted from boldenergy.com</p>
    </div>
  `;
};

const buildText = (formType, data) => {
  const title = FORM_LABELS[formType] || 'New Form Submission';
  const lines = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${FIELD_LABELS[k] || k}: ${v}`)
    .join('\n');
  return `${title}\n\n${lines}\n\n-- Bold Energy`;
};

// --- Bot protection -------------------------------------------------------

const MIN_FILL_MS = 3000; // submissions faster than this are almost certainly bots
const RATE_LIMIT = { windowMs: 60_000, max: 5 }; // per IP, per warm instance

// Cloudflare's official "always passes" TEST secret is used in non-production
// so local dev works without setup. Production MUST set TURNSTILE_SECRET_KEY.
const TURNSTILE_SECRET =
  process.env.TURNSTILE_SECRET_KEY ||
  (process.env.NODE_ENV !== 'production' ? '1x0000000000000000000000000000000AA' : '');

const getClientIp = (req) =>
  (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
  req.socket?.remoteAddress ||
  'unknown';

const isRateLimited = (ip) => {
  const now = Date.now();
  const store = globalThis.__formRateHits || (globalThis.__formRateHits = new Map());
  const recent = (store.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  store.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
};

const originAllowed = (req) => {
  const allow = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (allow.length === 0) return true; // not enforced unless configured
  const src = req.headers.origin || req.headers.referer || '';
  if (!src) return true; // no header (e.g. server-side) — don't block
  try {
    return allow.includes(new URL(src).host);
  } catch {
    return false;
  }
};

async function verifyTurnstile(token, ip) {
  const params = new URLSearchParams();
  params.append('secret', TURNSTILE_SECRET);
  params.append('response', token);
  if (ip && ip !== 'unknown') params.append('remoteip', ip);
  const resp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });
  const out = await resp.json().catch(() => ({ success: false }));
  return !!out.success;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured.' });
  }
  if (!TURNSTILE_SECRET) {
    return res.status(500).json({ error: 'Spam protection is not configured.' });
  }

  // Only accept requests from our own site (when ALLOWED_ORIGINS is configured)
  if (!originAllowed(req)) {
    return res.status(403).json({ error: 'Forbidden.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  const { formType, data, token, hp, t } = body || {};
  if (!formType || !FORM_LABELS[formType] || !data || typeof data !== 'object') {
    return res.status(400).json({ error: 'Invalid payload.' });
  }

  const ip = getClientIp(req);

  // 1) Honeypot — if the hidden field is filled, it's a bot. Pretend success.
  if (typeof hp === 'string' && hp.trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  // 2) Time-trap — implausibly fast submissions are bots. Pretend success.
  const elapsed = t ? Date.now() - Number(t) : Infinity;
  if (Number.isFinite(elapsed) && elapsed < MIN_FILL_MS) {
    return res.status(200).json({ ok: true });
  }

  // 3) Rate limit per IP
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again shortly.' });
  }

  // 4) CAPTCHA — the primary gate
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ error: 'Please complete the verification.' });
  }
  const human = await verifyTurnstile(token, ip);
  if (!human) {
    return res.status(400).json({ error: 'Verification failed. Please try again.' });
  }

  const requiredEmail = data.email;
  if (requiredEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(requiredEmail)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const resend = new Resend(apiKey);
  const subject = `[Bold Energy] ${FORM_LABELS[formType] || 'New form submission'}${data.fullName ? ' — ' + data.fullName : ''}`;

  try {
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: RECIPIENTS,
      reply_to: data.email || undefined,
      subject,
      html: buildHtml(formType, data),
      text: buildText(formType, data),
    });

    if (result?.error) {
      return res.status(502).json({ error: result.error.message || 'Email send failed.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err?.message || 'Email send failed.' });
  }
}
