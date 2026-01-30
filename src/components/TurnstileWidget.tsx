'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          theme?: 'light' | 'dark';
        }
      ) => string;
    };
  }
}

const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

interface TurnstileWidgetProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  disabled?: boolean;
}

export function TurnstileWidget({ siteKey, onVerify, onExpire, disabled }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!containerRef.current || !siteKey || disabled) return;

    const loadAndRender = () => {
      if (!window.turnstile || !containerRef.current) return;
      if (widgetIdRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: 'light',
        callback: onVerify,
        'expired-callback': onExpire ?? (() => {}),
      });
    };

    if (window.turnstile) {
      loadAndRender();
      return;
    }

    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.onload = loadAndRender;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [siteKey, disabled, onVerify, onExpire]);

  if (!siteKey) return null;
  return <div ref={containerRef} className="cf-turnstile" />;
}
