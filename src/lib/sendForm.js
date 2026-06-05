export async function sendForm(formType, data, security = {}) {
  const res = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formType,
      data,
      // Bot-protection signals (verified server-side)
      token: security.token,
      hp: security.hp,
      t: security.t,
    }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json();
}
