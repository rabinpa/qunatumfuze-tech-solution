'use client';

import { useEffect, useRef, useState } from 'react';

interface TurnstileWidgetProps {
  siteKey?: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  theme?: 'light' | 'dark' | 'auto';
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: Record<string, unknown>
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

/**
 * Cloudflare Turnstile widget.
 * Renders the Turnstile challenge and reports verification tokens.
 * Renders nothing when siteKey is not configured (development mode).
 */
export function TurnstileWidget({
  siteKey,
  onVerify,
  onExpire,
  onError,
  theme = 'light',
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(
    typeof window !== 'undefined' && Boolean(window.turnstile)
  );

  // Load the Turnstile script once
  useEffect(() => {
    if (!siteKey || isScriptLoaded) return;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TURNSTILE_SCRIPT_SRC}"]`
    );

    const handleLoad = () => setIsScriptLoaded(true);

    if (existingScript) {
      // Script already in DOM — wait for turnstile global or hook load event
      if (window.turnstile) {
        setIsScriptLoaded(true);
      } else {
        existingScript.addEventListener('load', handleLoad);
        return () => existingScript.removeEventListener('load', handleLoad);
      }
    } else {
      const script = document.createElement('script');
      script.src = TURNSTILE_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', handleLoad);
      document.head.appendChild(script);
      return () => script.removeEventListener('load', handleLoad);
    }
  }, [siteKey, isScriptLoaded]);

  // Render the widget once the script is available
  useEffect(() => {
    if (!siteKey || !isScriptLoaded || !window.turnstile || !containerRef.current) return;
    if (widgetIdRef.current !== null) return; // Already rendered

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme,
      callback: (token: string) => onVerify(token),
      'expired-callback': () => onExpire?.(),
      'error-callback': () => onError?.(),
    });

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Widget already removed
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, isScriptLoaded, theme, onVerify, onExpire, onError]);

  // Not configured — don't render anything
  if (!siteKey) {
    return null;
  }

  return <div ref={containerRef} className="min-h-[65px]" aria-label="Security verification" />;
}
