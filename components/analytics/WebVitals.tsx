'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log web vitals in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', metric);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && window.umami) {
      window.umami.track('web-vitals', {
        metric: metric.name,
        value: Math.round(metric.value),
        rating: metric.rating,
      });
    }
  });

  return null;
}
