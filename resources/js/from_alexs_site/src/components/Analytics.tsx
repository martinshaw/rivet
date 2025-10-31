import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4 - Pageview tracking
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
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