'use client';

import { useEffect, useRef } from 'react';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function RecaptchaCheckbox({ onChange }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;

    let cancelled = false;

    const render = () => {
      if (cancelled || !containerRef.current || widgetIdRef.current !== null) return;
      if (!window.grecaptcha || !window.grecaptcha.render) {
        setTimeout(render, 100);
        return;
      }
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: (token) => onChange(token),
        'expired-callback': () => onChange(''),
        'error-callback': () => onChange(''),
      });
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [onChange]);

  if (!RECAPTCHA_SITE_KEY) return null;

  return <div ref={containerRef} className="recaptcha-checkbox-widget" style={{ margin: '0.5rem 0' }} />;
}
