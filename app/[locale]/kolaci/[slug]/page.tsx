import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { pastries } from '@/lib/pastries';

export default async function PastryPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const pastry = pastries.find((p) => p.slug === slug);

  if (!pastry) notFound();

  const t = await getTranslations({ locale, namespace: 'pastry' });
  const name = locale === 'hr' ? pastry.nameHr : pastry.nameEn;
  const description = locale === 'hr' ? pastry.descriptionHr : pastry.descriptionEn;

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-gold/20 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-2xl text-brown hover:text-gold transition-colors"
          >
            Škatula slatkog
          </Link>
          <Link
            href="/#gallery"
            className="text-xs text-gold uppercase tracking-widest hover:text-brown transition-colors"
          >
            ← {t('back')}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero image */}
        <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl mb-12">
          <Image
            src={pastry.coverImage}
            alt={name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h1 className="font-display text-5xl md:text-6xl text-white drop-shadow-lg">
              {name}
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl">
          <div className="w-12 h-0.5 bg-gold mb-8" />
          <p className="text-brown-light text-lg leading-relaxed">{description}</p>
        </div>

        {/* Additional images */}
        {pastry.images.length > 1 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl text-brown mb-8">{t('gallery')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pastry.images.slice(1).map((img, i) => (
                <div key={i} className="relative h-52 rounded-xl overflow-hidden shadow-md">
                  <Image src={img} alt={`${name} ${i + 2}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
