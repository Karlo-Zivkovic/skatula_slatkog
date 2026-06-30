'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true);
    }
  }, []);

  function respond(choice: 'accepted' | 'declined') {
    localStorage.setItem('cookie_consent', choice);
    window.dispatchEvent(new Event('cookie_consent_changed'));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brown border-t border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-cream/80 leading-relaxed">
          Koristimo kolačiće za analizu posjeta putem Google Analyticsa.{' '}
          <Link href="/privacy-policy" className="underline hover:text-cream transition-colors">
            Više informacija
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => respond('declined')}
            className="text-sm text-cream/50 hover:text-cream transition-colors px-4 py-2"
          >
            Odbij
          </button>
          <button
            onClick={() => respond('accepted')}
            className="text-sm bg-gold text-brown font-medium px-5 py-2 rounded hover:bg-gold/90 transition-colors"
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  );
}
