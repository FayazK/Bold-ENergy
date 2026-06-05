import { useCallback, useRef, useState } from 'react';

/**
 * Bundles the client-side bot-protection signals shared by every form:
 * - hp: honeypot field value (must stay empty for humans)
 * - token: Cloudflare Turnstile token
 * - renderedAt: timestamp used for the server-side time-trap
 * - resetSignal: bump to reset the Turnstile widget
 *
 * Spread `honeypotProps` onto a visually-hidden <input>, pass `setToken`
 * to <Turnstile onToken>, and call reset() after a successful submit (or
 * when a modal re-opens) to get a fresh challenge.
 */
export function useBotGuard() {
  const [hp, setHp] = useState('');
  const [token, setToken] = useState('');
  const [resetSignal, setResetSignal] = useState(0);
  const renderedAt = useRef(Date.now());

  const reset = useCallback(() => {
    setHp('');
    setToken('');
    renderedAt.current = Date.now();
    setResetSignal((n) => n + 1);
  }, []);

  const getSecurity = useCallback(
    () => ({ hp, token, t: renderedAt.current }),
    [hp, token]
  );

  const honeypotProps = {
    name: 'company_website',
    tabIndex: -1,
    autoComplete: 'off',
    'aria-hidden': true,
    value: hp,
    onChange: (e) => setHp(e.target.value),
    style: {
      position: 'absolute',
      left: '-9999px',
      width: '1px',
      height: '1px',
      opacity: 0,
      pointerEvents: 'none',
    },
  };

  return { hp, setHp, token, setToken, resetSignal, renderedAt, reset, getSecurity, honeypotProps };
}
