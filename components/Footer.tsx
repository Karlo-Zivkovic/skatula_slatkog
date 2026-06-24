import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-brown text-cream/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <span className="font-display text-3xl text-gold block mb-3">
              Škatula slatkog
            </span>
            <p className="text-sm text-cream/50 leading-relaxed">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">{t('nav')}</p>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-sm hover:text-cream transition-colors">
                  {t('links.about')}
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-sm hover:text-cream transition-colors">
                  {t('links.gallery')}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm hover:text-cream transition-colors">
                  {t('links.contact')}
                </Link>
              </li>
              <li>
                <Link href="/upit" className="text-sm hover:text-cream transition-colors">
                  {t('links.inquiry')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">{t('contact')}</p>
            <ul className="space-y-3 text-sm">
              <li>{t('address')}</li>
              <li>
                <a href="tel:+385913463368" className="hover:text-cream transition-colors">
                  +385 91 3463 368
                </a>
              </li>
              <li>
                <a href="mailto:skatulaslatkog@gmail.com" className="hover:text-cream transition-colors">
                  skatulaslatkog@gmail.com
                </a>
              </li>
              <li className="pt-1 text-cream/50">
                {t('hours')}<br />
                {t('hoursSat')}
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-5">
        <p className="max-w-6xl mx-auto text-xs text-cream/30 text-center">
          © {new Date().getFullYear()} Škatula slatkog. {t('rights')}.
        </p>
      </div>
    </footer>
  );
}
