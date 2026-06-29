export const GTM_ID = 'GTM-5S497MK8';
export const GA4_MEASUREMENT_ID = 'G-3F295E8E3Y';

type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

function pushEvent(event: DataLayerEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackPageView(path: string) {
  pushEvent({
    event: 'page_view',
    page_path: path,
    page_title: document.title,
    page_location: `${window.location.origin}${path}`,
  });
}

export function trackEvent(event: string, params: Record<string, string> = {}) {
  pushEvent({ event, ...params });
}

export function trackContactFormSubmission(source: string) {
  trackEvent('contact_form_submission', { form_source: source });
  trackEvent('generate_lead', { form_source: source });
}

export function initAnalyticsListeners() {
  document.addEventListener(
    'click',
    (event) => {
      const link = (event.target as HTMLElement | null)?.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const text = link.textContent?.replace(/\s+/g, ' ').trim() || '';

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', { link_url: href });
        return;
      }

      if (href.startsWith('tel:')) {
        trackEvent('phone_click', { link_url: href });
        return;
      }

      if (/wa\.me|whatsapp/i.test(href)) {
        trackEvent('whatsapp_click', { link_url: href, link_text: text });
        return;
      }

      if (/calendly\.com/i.test(href) || /book a (call|strategy|growth)/i.test(text)) {
        trackEvent('book_call_click', { link_url: href, link_text: text });
        return;
      }

      if (href.includes('/get-started') || /start a project/i.test(text)) {
        trackEvent('start_project_click', { link_url: href, link_text: text });
      }
    },
    true,
  );
}
