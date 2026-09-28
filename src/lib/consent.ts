// Thin wrapper around the CookieYes consent banner loaded in index.html.
import { useEffect, useState } from 'react';

export type ConsentCategory = 'necessary' | 'functional' | 'analytics' | 'performance' | 'advertisement';

interface CookieYesConsent {
  categories?: Partial<Record<ConsentCategory, boolean>>;
}

declare global {
  interface Window {
    getCkyConsent?: () => CookieYesConsent;
    revisitCkyConsent?: () => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function hasConsent(category: ConsentCategory) {
  if (category === 'necessary') return true;
  try {
    return Boolean(window.getCkyConsent?.().categories?.[category]);
  } catch {
    return false;
  }
}

// Calls `callback` once CookieYes has loaded and again whenever the visitor changes their choices.
export function onConsentChange(callback: () => void) {
  document.addEventListener('cookieyes_banner_load', callback);
  document.addEventListener('cookieyes_consent_update', callback);
  return () => {
    document.removeEventListener('cookieyes_banner_load', callback);
    document.removeEventListener('cookieyes_consent_update', callback);
  };
}

export function openCookiePreferences() {
  window.revisitCkyConsent?.();
}

// Mirrors CookieYes choices into Google Consent Mode so GTM tags respect them even if the
// CookieYes dashboard integration is switched off. Defaults are set to "denied" in index.html.
export function syncGoogleConsentMode() {
  const update = () => {
    const state = (granted: boolean) => (granted ? 'granted' : 'denied');
    const analytics = hasConsent('analytics');
    const advertising = hasConsent('advertisement');
    const functional = hasConsent('functional');
    window.gtag?.('consent', 'update', {
      analytics_storage: state(analytics),
      ad_storage: state(advertising),
      ad_user_data: state(advertising),
      ad_personalization: state(advertising),
      functionality_storage: state(functional),
      personalization_storage: state(functional),
    });
  };
  update();
  return onConsentChange(update);
}

export function useConsent(category: ConsentCategory) {
  const [granted, setGranted] = useState(() => hasConsent(category));
  useEffect(() => {
    const update = () => setGranted(hasConsent(category));
    update();
    return onConsentChange(update);
  }, [category]);
  return granted;
}

const TRUSTPILOT_SRC = 'https://invitejs.trustpilot.com/tp.min.js';
const TRUSTPILOT_KEY = 'SrkyA91FkOVl0qe1';

// Loads the Trustpilot invitation script once the visitor allows functional cookies.
export function loadTrustpilotWhenAllowed() {
  let loaded = false;
  const load = () => {
    if (loaded || !hasConsent('functional')) return;
    loaded = true;
    const w = window as unknown as Record<string, unknown> & { tp?: (...args: unknown[]) => void };
    w.TrustpilotObject = 'tp';
    const queue: unknown[][] = [];
    w.tp = w.tp || Object.assign((...args: unknown[]) => { queue.push(args); }, { q: queue });
    const script = document.createElement('script');
    script.async = true;
    script.src = TRUSTPILOT_SRC;
    document.head.appendChild(script);
    w.tp('register', TRUSTPILOT_KEY);
  };
  load();
  return onConsentChange(load);
}
