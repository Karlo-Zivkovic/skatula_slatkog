import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { categories } from '@/lib/categories';
import { pastries } from '@/lib/pastries';
import { boxes } from '@/lib/boxes';

function getCount(slug: string): number {
  const box = boxes.find((b) => b.categorySlug === slug);
  if (box) return box.items.length;
  return pastries.filter((p) => p.category === slug).length;
}

export default function Gallery() {
  const t = useTranslations('gallery');
  const locale = useLocale();

  return (
    <section id="gallery" className="min-h-screen flex items-center px-6 bg-cream">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            {t('subtitle')}
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-brown leading-tight">
            {t('title')}
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        {/* Row 1: 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {categories.slice(0, 2).map((cat) => (
            <CategoryCard
              key={cat.slug}
              cat={{
                slug: cat.slug,
                gradient: cat.gradient,
                coverImage: cat.coverImage,
                name: locale === 'hr' ? cat.nameHr : cat.nameEn,
                description: locale === 'hr' ? cat.descriptionHr : cat.descriptionEn,
              }}
              count={getCount(cat.slug)}
              t={t}
              height="h-80"
            />
          ))}
        </div>

        {/* Row 2: 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(2).map((cat) => (
            <CategoryCard
              key={cat.slug}
              cat={{
                slug: cat.slug,
                gradient: cat.gradient,
                coverImage: cat.coverImage,
                name: locale === 'hr' ? cat.nameHr : cat.nameEn,
                description: locale === 'hr' ? cat.descriptionHr : cat.descriptionEn,
              }}
              count={getCount(cat.slug)}
              t={t}
              height="h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  cat,
  count,
  t,
  height,
}: {
  cat: { slug: string; name: string; description: string; gradient: string; coverImage: string };
  count: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  height: string;
}) {
  return (
    <Link
      href={`/galerija/${cat.slug}`}
      className={`group relative overflow-hidden rounded-2xl ${height} block`}
    >
      <Image
        src={cat.coverImage}
        alt={cat.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-brown/10" />

      <div className="absolute top-4 right-4 bg-gold text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
        {count} {count === 1 ? t('item') : t('items')}
      </div>

      <div className="absolute top-4 left-4 text-white/0 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-3xl text-white drop-shadow mb-1">{cat.name}</h3>
        <p className="text-white/70 text-sm max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-300">
          {cat.description}
        </p>
      </div>
    </Link>
  );
}
