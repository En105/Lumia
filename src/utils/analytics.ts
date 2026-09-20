// Google Analytics 4 (GA4) Tracking Utility for Lumia
// Uses gtag.js configured in index.html (Measurement ID: G-T135SY6GD0)

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Tracks a page view in Google Analytics
 */
export const trackPageView = (pageTitle: string, pagePath: string) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: pagePath,
      });
      console.log(`[Lumia Analytics] Page view tracked: ${pageTitle} (${pagePath})`);
    }
  } catch (error) {
    console.warn('[Lumia Analytics] Failed to send page view', error);
  }
};

/**
 * Tracks custom user interactions and events in Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, string | number | boolean | undefined> = {}
) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
      console.log(`[Lumia Analytics] Event tracked: ${eventName}`, eventParams);
    }
  } catch (error) {
    console.warn('[Lumia Analytics] Failed to send event', error);
  }
};
