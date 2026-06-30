'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = 'G-CVHD3HLX7M';

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(localStorage.getItem('cookie_consent'));

    const handler = () => setConsent(localStorage.getItem('cookie_consent'));
    window.addEventListener('cookie_consent_changed', handler);
    return () => window.removeEventListener('cookie_consent_changed', handler);
  }, []);

  if (consent !== 'accepted') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
