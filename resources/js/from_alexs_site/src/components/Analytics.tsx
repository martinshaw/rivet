import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
  }
}

const Analytics = () => {
  const page = usePage();

  useEffect(() => {
    // Google Analytics 4 - Pageview tracking
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: page.url,
      });
    }

    // LinkedIn Insight Tag - Pageview tracking
    if (typeof window._linkedin_partner_id !== 'undefined') {
      // LinkedIn tracking would be initialized via script tag
    }

    // Meta Pixel - Pageview tracking
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
};

export default Analytics;
