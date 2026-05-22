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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  const { formType, data } = body || {};
  if (!formType || !data || typeof data !== 'object') {
    return res.status(400).json({ error: 'Invalid payload.' });
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
