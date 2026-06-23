import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { pastries } from '@/lib/pastries';

export default function Gallery() {
  const t = useTranslations('gallery');
  const locale = useLocale();

  return (
    <section id="gallery" className="min-h-screen flex items-center px-6 bg-cream">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Naša ponuda</p>
          <h2 className="font-display text-5xl md:text-6xl text-brown leading-tight">
            {t('title')}
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastries.map((pastry) => (
            <Link
              key={pastry.slug}
              href={`/kolaci/${pastry.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pastry.coverImage}
                  alt={locale === 'hr' ? pastry.nameHr : pastry.nameEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-brown mb-2">
                  {locale === 'hr' ? pastry.nameHr : pastry.nameEn}
                </h3>
                <span className="text-gold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
                  {t('viewMore')} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
