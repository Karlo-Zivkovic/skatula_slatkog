'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from '@/i18n/navigation';
import { useCart } from '@/lib/cart-context';

const BOX_IMAGES = [
  '/pastries/petit-fours/box/image1.jpg',
  '/pastries/petit-fours/box/image2.jpg',
  '/pastries/petit-fours/box/image3.jpg',
];

const BOX_SIZE = 16;

interface Item {
  slug: string;
  nameHr: string;
  nameEn: string;
  price: number;
  coverImage: string;
  objectPosition?: string;
  isGlutenFree?: boolean;
  compositionHr: string;
  compositionEn?: string;
  ingredientsHr: string;
  ingredientsEn?: string;
}

export default function PetitFoursBuilder({
  items,
  locale,
  ingredientsLabel,
}: {
  items: Item[];
  locale: string;
  ingredientsLabel: string;
}) {
  const { addItem } = useCart();
  const router = useRouter();
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [added, setAdded] = useState(false);
  const hr = locale === 'hr';

  const total = Object.values(selections).reduce((s, n) => s + n, 0);
  const remaining = BOX_SIZE - total;
  const totalPrice = items.reduce((s, item) => s + item.price * (selections[item.slug] ?? 0), 0);

  function change(slug: string, delta: number) {
    setSelections((prev) => {
      const current = prev[slug] ?? 0;
      const next = Math.max(0, current + delta);
      if (delta > 0 && total >= BOX_SIZE) return prev;
      return { ...prev, [slug]: next };
    });
  }

  function addToCart() {
    if (total !== BOX_SIZE) return;
    const contents = items
      .filter((i) => (selections[i.slug] ?? 0) > 0)
      .map((i) => `${selections[i.slug]}× ${hr ? i.nameHr : i.nameEn}`)
      .join(', ');
    addItem({
      slug: 'petit-fours-box',
      nameHr: `Petit fours kutija (${BOX_SIZE} kom)`,
      nameEn: `Petit fours box (${BOX_SIZE} pcs)`,
      price: totalPrice,
      coverImage: '/pastries/petit-fours/box/image1.jpg',
      category: 'petit-fours',
      note: contents,
    });
    setSelections({});
    setAdded(true);
    setTimeout(() => setAdded(false), 4000);
  }

  return (
    <div className="pb-32">
      {/* Toast notification */}
      {added && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-brown text-cream px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-fade-in">
          <span className="text-sm">{hr ? 'Kutija dodana u upit!' : 'Box added to inquiry!'}</span>
          <button
            onClick={() => router.push('/upit')}
            className="bg-gold text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full hover:bg-gold/90 transition-colors shrink-0"
          >
            {hr ? 'Pogledaj upit →' : 'View inquiry →'}
          </button>
        </div>
      )}

      {/* Box showcase */}
      <div className="mb-10 md:mb-14">
        <div className="grid grid-cols-3 gap-3 max-w-2xl">
          {BOX_IMAGES.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
              <Image
                src={src}
                alt={hr ? `Petit fours kutija ${i + 1}` : `Petit fours box ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-brown-light text-sm mb-8">
        {hr
          ? `Složite svoju kutiju od ${BOX_SIZE} petit fours — birajte kombinaciju po želji.`
          : `Build your box of ${BOX_SIZE} petit fours — mix and match as you like.`}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => {
          const name = hr ? item.nameHr : item.nameEn;
          const qty = selections[item.slug] ?? 0;
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
                  <span className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    GF
                  </span>
                )}
                {qty > 0 && (
                  <div className="absolute bottom-3 right-3 bg-gold text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow">
                    {qty}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-brown mb-1">{name}</h3>
                <p className="text-sm text-brown-light line-clamp-2 mb-3">
                  {hr ? item.compositionHr : (item.compositionEn ?? item.compositionHr)}
                </p>
                <div className="border-t border-gold/20 pt-3">
                  <p className="text-xs text-gold uppercase tracking-widest mb-1">{ingredientsLabel}</p>
                  <p className="text-xs text-brown-light line-clamp-2">
                    {hr ? item.ingredientsHr : (item.ingredientsEn ?? item.ingredientsHr)}
                  </p>
                </div>

                {/* +/- controls replacing AddToCart */}
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-gold/10 rounded-full px-3 py-1.5">
                    <button
                      onClick={() => change(item.slug, -1)}
                      disabled={qty === 0}
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gold/20 disabled:opacity-30 text-brown font-bold text-lg leading-none transition-colors"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold text-brown w-4 text-center tabular-nums">{qty}</span>
                    <button
                      onClick={() => change(item.slug, 1)}
                      disabled={total >= BOX_SIZE}
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gold/20 disabled:opacity-30 text-brown font-bold text-lg leading-none transition-colors"
                    >
                      +
                    </button>
                  </div>
                  {qty > 0 && (
                    <span className="text-xs text-brown-light/60">
                      {(item.price * qty).toFixed(2)} €
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-brown border-t border-white/10 px-4 py-3 shadow-2xl">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-xs text-cream/60 mb-1">
              <span>{hr ? 'Odabrano' : 'Selected'}</span>
              <span className="tabular-nums">{total} / {BOX_SIZE}</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-300"
                style={{ width: `${(total / BOX_SIZE) * 100}%` }}
              />
            </div>
          </div>
          {total > 0 && (
            <div className="text-right shrink-0">
              <p className="text-cream/50 text-xs">{hr ? 'Ukupno' : 'Total'}</p>
              <p className="text-gold font-semibold tabular-nums">{totalPrice.toFixed(2)} €</p>
            </div>
          )}
          <button
            onClick={addToCart}
            disabled={total !== BOX_SIZE}
            className="shrink-0 bg-gold hover:bg-gold/90 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-colors"
          >
            {total === BOX_SIZE
              ? (hr ? 'Dodaj u upit' : 'Add to inquiry')
              : (hr ? `Još ${remaining}` : `${remaining} more`)}
          </button>
        </div>
      </div>
    </div>
  );
}
