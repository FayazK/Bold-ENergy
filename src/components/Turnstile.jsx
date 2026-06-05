import { useEffect, useRef } from 'react';

// Cloudflare Turnstile site key (public). Falls back to Cloudflare's official
// "always passes" TEST key so the widget works in local dev without setup.
// In production set VITE_TURNSTILE_SITE_KEY to your real site key.
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

let loaderPromise = null;
function loadTurnstileScript() {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'));
  if (window.turnstile) return Promise.resolve();
  if (loaderPromise) return loaderPromise;
  loaderPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load Turnstile'));
    document.head.appendChild(s);
  });
  return loaderPromise;
}

/**
 * Cloudflare Turnstile CAPTCHA widget.
 * - onToken(token): called with the verification token (or '' when cleared/expired)
 * - resetSignal: increment to force the widget to reset and clear its token
 */
export default function Turnstile({ onToken, resetSignal = 0, theme = 'light' }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useEffect(() => {
    let cancelled = false;
    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile) return;
        if (widgetIdRef.current !== null) return; // already rendered
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          theme,
          callback: (token) => onTokenRef.current?.(token),
          'expired-callback': () => onTokenRef.current?.(''),
          'error-callback': () => onTokenRef.current?.(''),
        });
      })
      .catch(() => {
        /* network/script error — submit will be blocked server-side */
      });
    return () => {
      cancelled = true;
      if (widgetIdRef.current !== null && window.turnstile) {
        try { window.turnstile.remove(widgetIdRef.current); } catch { /* noop */ }
        widgetIdRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (resetSignal === 0) return;
    if (widgetIdRef.current !== null && window.turnstile) {
      try { window.turnstile.reset(widgetIdRef.current); } catch { /* noop */ }
      onTokenRef.current?.('');
    }
  }, [resetSignal]);

  return <div ref={containerRef} className="min-h-[65px]" />;
}
