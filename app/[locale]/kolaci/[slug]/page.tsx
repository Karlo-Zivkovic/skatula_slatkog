import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { pastries } from '@/lib/pastries';
import { categories } from '@/lib/categories';
import AddToCart from '@/components/AddToCart';
import InnerHeader from '@/components/InnerHeader';

export default async function PastryPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const pastry = pastries.find((p) => p.slug === slug);

  if (!pastry) notFound();

  const category = categories.find((c) => c.slug === pastry.category);
  const t = await getTranslations({ locale, namespace: 'pastry' });
  const name = locale === 'hr' ? pastry.nameHr : pastry.nameEn;
  const categoryName = locale === 'hr' ? category?.nameHr : category?.nameEn;

  return (
    <main className="min-h-screen bg-cream">
      <InnerHeader backHref={`/galerija/${pastry.category}`} backLabel={t('back')} />

      {/* Product info */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        {/* Name row */}
        <div className="flex items-baseline justify-between gap-6 mb-3">
          <div>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-1">{categoryName}</p>
            <h1 className="font-display text-5xl text-brown leading-tight">{name}</h1>
          </div>
          <div className="shrink-0 flex items-center gap-2 bg-gold text-white px-5 py-2 rounded-full shadow">
            <span className="text-xl font-semibold">{pastry.price.toFixed(2)} €</span>
            {pastry.priceNote && (
              <span className="text-xs opacity-80">/ {pastry.priceNote}</span>
            )}
          </div>
        </div>

        <div className="w-8 h-0.5 bg-gold mb-4" />

        <div className="mb-4">
          <AddToCart
            slug={pastry.slug}
            nameHr={pastry.nameHr}
            nameEn={pastry.nameEn}
            price={pastry.price}
            priceNote={pastry.priceNote}
            coverImage={pastry.coverImage}
            category={pastry.category}
          />
        </div>

        {/* Composition + details in one compact row */}
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-brown-light">
          <p className="leading-relaxed max-w-sm">{pastry.compositionHr}</p>
          <div className="border-l border-gold/30 pl-10 flex flex-col gap-3">
            <span>
              <span className="text-xs text-gold uppercase tracking-widest mr-2">{t('ingredients')}</span>
              {pastry.ingredientsHr}
            </span>
            <span>
              <span className="text-xs text-gold uppercase tracking-widest mr-2">
                {locale === 'hr' ? 'Alergeni' : 'Allergens'}
              </span>
              {pastry.allergensHr}
            </span>
            {(pastry.isGlutenFree || pastry.isVegan) && (
              <div className="flex gap-2 mt-1">
                {pastry.isGlutenFree && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-medium">Gluten free</span>
                )}
                {pastry.isVegan && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-medium">Vegan</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* All images — equal columns, container width keeps images a comfortable height */}
      <div
        className={`mx-auto px-6 pb-16 ${
          pastry.images.length === 1
            ? 'max-w-xs'
            : pastry.images.length === 2
            ? 'max-w-2xl'
            : pastry.images.length === 3
            ? 'max-w-4xl'
            : 'max-w-6xl'
        }`}
      >
        {pastry.images.length > 0 && (
          <div
            className={`grid gap-4 ${
              pastry.images.length === 1
                ? 'grid-cols-1'
                : pastry.images.length === 2
                ? 'grid-cols-2'
                : pastry.images.length === 3
                ? 'grid-cols-3'
                : 'grid-cols-2 md:grid-cols-4'
            }`}
          >
            {pastry.images.map((img, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={img}
                  alt={`${name} ${i + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        )}
      </div>

    </main>
  );
}
