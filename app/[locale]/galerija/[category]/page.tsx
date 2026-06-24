import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { categories } from '@/lib/categories';
import { pastries } from '@/lib/pastries';
import { getBox } from '@/lib/boxes';
import AddToCart from '@/components/AddToCart';
import InnerHeader from '@/components/InnerHeader';
import Footer from '@/components/Footer';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string; locale: string }>;
}) {
  const { category: categorySlug, locale } = await params;
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) notFound();

  const t = await getTranslations({ locale, namespace: 'gallery' });
  const tPastry = await getTranslations({ locale, namespace: 'pastry' });
  const categoryName = locale === 'hr' ? category.nameHr : category.nameEn;

  return (
    <main className="min-h-screen bg-cream">
      <InnerHeader backHref="/#gallery" backLabel={t('backToGallery')} />

      {/* Category banner */}
      <div className="h-36 flex items-end px-6 pb-6" style={{ background: category.gradient }}>
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="font-display text-5xl md:text-6xl text-white drop-shadow-lg">
            {categoryName}
          </h1>
          <p className="text-white/80 mt-2 text-sm">
            {locale === 'hr' ? category.descriptionHr : category.descriptionEn}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {category.type === 'box' && <BoxPage categorySlug={categorySlug} locale={locale} tPastry={tPastry} />}
        {category.type === 'individual' && <IndividualPage categorySlug={categorySlug} locale={locale} t={t} tPastry={tPastry} />}
        {category.type === 'collection' && <CollectionPage locale={locale} tPastry={tPastry} />}
      </div>
      <Footer />
    </main>
  );
}

// ─── Box page (Kutija mediterana / Zlatna škatula) ───────────────────────────

async function BoxPage({
  categorySlug,
  locale,
  tPastry,
}: {
  categorySlug: string;
  locale: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tPastry: any;
}) {
  const box = getBox(categorySlug);
  if (!box) return null;

  return (
    <div>
      {/* Box intro */}
      <div className="flex items-end justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <p className="text-brown-light text-lg leading-relaxed mb-6">
            {locale === 'hr' ? box.descriptionHr : box.descriptionEn}
          </p>
          <div className="inline-flex items-center gap-3 bg-gold text-white px-6 py-3 rounded-full shadow-md">
            <span className="text-sm uppercase tracking-widest">Kutija</span>
            <span className="text-2xl font-semibold">{box.boxPrice.toFixed(2)} €</span>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-sm text-brown-light mb-0">
            {locale === 'hr' ? 'Naručuje se kao cjelina.' : 'Ordered as a whole.'}
          </p>
          <AddToCart
            slug={categorySlug}
            nameHr={categories.find(c => c.slug === categorySlug)?.nameHr ?? categorySlug}
            nameEn={categories.find(c => c.slug === categorySlug)?.nameEn ?? categorySlug}
            price={box.boxPrice}
            coverImage={box.items[0]?.images[0] ?? '/pastries/placeholder.jpg'}
            category={categorySlug}
          />
        </div>
      </div>

      {/* Items inside */}
      <h2 className="font-display text-4xl text-brown mb-2">
        {locale === 'hr' ? 'Što je u kutiji' : "What's in the box"}
      </h2>
      <div className="w-10 h-0.5 bg-gold mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {box.items.map((item) => (
          <div key={item.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.coverImage ?? item.images[0]}
                alt={item.nameHr}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                style={{ objectPosition: item.objectPosition ?? 'center' }}
              />
              {item.isGlutenFree && (
                <div className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs uppercase tracking-wide px-2 py-1 rounded-full font-medium">
                  GF
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1 gap-4">
              <h3 className="font-display text-2xl text-brown">{item.nameHr}</h3>

              <div>
                <p className="text-xs text-gold uppercase tracking-widest mb-1">
                  {locale === 'hr' ? 'Sastav' : 'Composition'}
                </p>
                <p className="text-sm text-brown-light">
                  {locale === 'hr' ? item.compositionHr : (item.compositionEn ?? item.compositionHr)}
                </p>
              </div>

              <div>
                <p className="text-xs text-gold uppercase tracking-widest mb-1">
                  {tPastry('ingredients')}
                </p>
                <p className="text-xs text-brown-light">
                  {locale === 'hr' ? item.ingredientsHr : (item.ingredientsEn ?? item.ingredientsHr)}
                </p>
              </div>

              <div className="mt-auto border-t border-gold/20 pt-3">
                <p className="text-xs text-brown-light/70">
                  <span className="font-medium text-brown-light">
                    {locale === 'hr' ? 'Alergeni' : 'Allergens'}:
                  </span>{' '}
                  {locale === 'hr' ? item.allergensHr : (item.allergensEn ?? item.allergensHr)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

// ─── Individual page (Kolači / Torte) ────────────────────────────────────────

async function IndividualPage({
  categorySlug,
  locale,
  t,
  tPastry,
}: {
  categorySlug: string;
  locale: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tPastry: any;
}) {
  const items = pastries.filter((p) => p.category === categorySlug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((pastry) => {
        const name = locale === 'hr' ? pastry.nameHr : pastry.nameEn;
        return (
          <Link
            key={pastry.slug}
            href={`/kolaci/${pastry.slug}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden shrink-0">
              <Image
                src={pastry.coverImage}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: pastry.objectPosition ?? 'center' }}
              />
              <div className="absolute top-3 right-3 bg-white/95 text-brown text-sm font-semibold px-3 py-1 rounded-full shadow">
                {pastry.price.toFixed(2)} €
              </div>
              <div className="flex gap-1 absolute top-3 left-3">
                {pastry.isGlutenFree && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">GF</span>
                )}
                {pastry.isVegan && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">Vegan</span>
                )}
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-2xl text-brown mb-1">{name}</h3>
              {pastry.priceNote && (
                <p className="text-xs text-brown-light/70 mb-2">{pastry.priceNote}</p>
              )}
              <p className="text-sm text-brown-light line-clamp-2 mb-3">
                {locale === 'hr' ? pastry.compositionHr : (pastry.compositionEn ?? pastry.compositionHr)}
              </p>
              <div className="border-t border-gold/20 pt-3">
                <p className="text-xs text-gold uppercase tracking-widest mb-1">
                  {tPastry('ingredients')}
                </p>
                <p className="text-xs text-brown-light line-clamp-2">
                  {locale === 'hr' ? pastry.ingredientsHr : (pastry.ingredientsEn ?? pastry.ingredientsHr)}
                </p>
              </div>
              <div className="mt-auto pt-4">
                <p className="text-gold text-sm uppercase tracking-widest mb-0 group-hover:gap-2 transition-all">
                  {t('viewItem')} →
                </p>
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
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// ─── Collection page (Petit fours) ───────────────────────────────────────────

async function CollectionPage({
  locale,
  tPastry,
}: {
  locale: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tPastry: any;
}) {
  const items = pastries.filter((p) => p.category === 'petit-fours');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => {
        const name = locale === 'hr' ? item.nameHr : item.nameEn;
        return (
          <div
            key={item.slug}
            className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col"
          >
            <div className="relative h-56 overflow-hidden shrink-0">
              <Image
                src={item.coverImage}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                style={{ objectPosition: item.objectPosition ?? 'center' }}
              />
              <div className="absolute top-3 right-3 bg-white/95 text-brown text-sm font-semibold px-3 py-1 rounded-full shadow">
                {item.price.toFixed(2)} €
              </div>
              {item.isGlutenFree && (
                <span className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">GF</span>
              )}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-2xl text-brown mb-1">{name}</h3>
              <p className="text-sm text-brown-light line-clamp-2 mb-3">
                {locale === 'hr' ? item.compositionHr : (item.compositionEn ?? item.compositionHr)}
              </p>
              <div className="border-t border-gold/20 pt-3">
                <p className="text-xs text-gold uppercase tracking-widest mb-1">
                  {tPastry('ingredients')}
                </p>
                <p className="text-xs text-brown-light line-clamp-2">
                  {locale === 'hr' ? item.ingredientsHr : (item.ingredientsEn ?? item.ingredientsHr)}
                </p>
              </div>
              <div className="mt-auto pt-4">
                <AddToCart
                  slug={item.slug}
                  nameHr={item.nameHr}
                  nameEn={item.nameEn}
                  price={item.price}
                  coverImage={item.coverImage}
                  category="petit-fours"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
