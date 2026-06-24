'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchTo = (next: string) => {
    router.replace(pathname, { locale: next, scroll: false });
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm uppercase tracking-widest transition-colors hover:text-gold ${
          light ? 'text-white/90 drop-shadow' : 'text-brown-mid'
        }`}
      >
        {locale === 'hr' ? 'HR' : 'EN'}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-20 bg-white rounded-lg shadow-lg border border-gold/20 overflow-hidden whitespace-nowrap">
            <button
              onClick={() => switchTo('hr')}
              className={`block w-full px-5 py-2.5 text-sm text-left transition-colors hover:bg-cream ${
                locale === 'hr' ? 'text-gold font-semibold' : 'text-brown'
              }`}
            >
              HR – Hrvatski
            </button>
            <button
              onClick={() => switchTo('en')}
              className={`block w-full px-5 py-2.5 text-sm text-left transition-colors hover:bg-cream ${
                locale === 'en' ? 'text-gold font-semibold' : 'text-brown'
              }`}
            >
              EN – English
            </button>
          </div>
        </>
      )}
    </div>
  );
}
