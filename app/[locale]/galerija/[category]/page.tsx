import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { categories } from "@/lib/categories";
import { pastries } from "@/lib/pastries";
import { getBox } from "@/lib/boxes";
import AddToCart from "@/components/AddToCart";
import InnerHeader from "@/components/InnerHeader";
import Footer from "@/components/Footer";
import BoxItemCard from "@/components/BoxItemCard";
import PetitFoursBuilder from "@/components/PetitFoursBuilder";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string; locale: string }>;
}) {
  const { category: categorySlug, locale } = await params;
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) notFound();

  const t = await getTranslations({ locale, namespace: "gallery" });
  const tPastry = await getTranslations({ locale, namespace: "pastry" });
  const categoryName = locale === "hr" ? category.nameHr : category.nameEn;

  return (
    <main className="min-h-screen bg-cream">
      <InnerHeader backHref="/#gallery" backLabel={t("backToGallery")} />

      {/* Category banner */}
      <div
        className="h-32 md:h-36 flex items-end px-4 md:px-6 pb-5 md:pb-6"
        style={{ background: category.gradient }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg">
            {categoryName}
          </h1>
          <p className="text-white/80 mt-1.5 text-sm">
            {locale === "hr" ? category.descriptionHr : category.descriptionEn}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {category.type === "box" && (
          <BoxPage
            categorySlug={categorySlug}
            locale={locale}
            tPastry={tPastry}
          />
        )}
        {category.type === "individual" && (
          <IndividualPage
            categorySlug={categorySlug}
            locale={locale}
            t={t}
            tPastry={tPastry}
          />
        )}
        {category.type === "collection" && (
          <PetitFoursBuilder
            items={pastries.filter((p) => p.category === "petit-fours")}
            locale={locale}
            ingredientsLabel={tPastry("ingredients")}
          />
        )}
        {category.type === "showcase" && (
          <ShowcasePage categorySlug={categorySlug} locale={locale} />
        )}
      </div>
      <Footer />
    </main>
  );
}

// ─── Box page (skatula mediterana / Zlatna škatula) ───────────────────────────

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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-16">
        <div className="max-w-xl">
          <p className="text-brown-light text-base md:text-lg leading-relaxed mb-5 md:mb-6">
            {locale === "hr" ? box.descriptionHr : box.descriptionEn}
          </p>
          <div className="inline-flex items-center gap-3 bg-gold text-white px-6 py-3 rounded-full shadow-md">
            <span className="text-sm uppercase tracking-widest">Škatula</span>
            <span className="text-2xl font-semibold">
              {box.boxPrice.toFixed(2)} €
            </span>
          </div>
        </div>
        <div className="md:shrink-0 md:text-right">
          <p className="text-sm text-brown-light mb-0">
            {locale === "hr"
              ? "Naručuje se kao cjelina."
              : "Ordered as a whole."}
          </p>
          <AddToCart
            slug={categorySlug}
            nameHr={
              categories.find((c) => c.slug === categorySlug)?.nameHr ??
              categorySlug
            }
            nameEn={
              categories.find((c) => c.slug === categorySlug)?.nameEn ??
              categorySlug
            }
            price={box.boxPrice}
            coverImage={box.items[0]?.images[0] ?? "/pastries/placeholder.jpg"}
            category={categorySlug}
          />
        </div>
      </div>

      {/* Product showcase */}
      {box.showcaseImages && box.showcaseImages.length > 0 && (
        <div className="mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-brown mb-2">
            {locale === "hr" ? "Škatula u cjelini" : "The complete box"}
          </h2>
          <div className="w-10 h-0.5 bg-gold mb-6 md:mb-8" />
          <div
            className={`grid gap-4 ${box.showcaseImages.length === 1 ? "grid-cols-1 max-w-2xl" : "grid-cols-1 sm:grid-cols-2"}`}
          >
            {box.showcaseImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={`${locale === "hr" ? "Škatula" : "Box"} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: img.objectPosition ?? "center" }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Items inside */}
      <h2 className="font-display text-3xl md:text-4xl text-brown mb-2">
        {locale === "hr" ? "Što je u škatuli" : "What's in the box"}
      </h2>
      <div className="w-10 h-0.5 bg-gold mb-6 md:mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {box.items.map((item) => (
          <BoxItemCard
            key={item.slug}
            item={item}
            locale={locale}
            ingredientsLabel={tPastry("ingredients")}
            allergensLabel={locale === "hr" ? "Alergeni" : "Allergens"}
          />
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
        const name = locale === "hr" ? pastry.nameHr : pastry.nameEn;
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
                style={{ objectPosition: pastry.objectPosition ?? "center" }}
              />
              <div className="absolute top-3 right-3 bg-white/95 text-brown text-sm font-semibold px-3 py-1 rounded-full shadow">
                {pastry.price.toFixed(2)} €
              </div>
              <div className="flex gap-1 absolute top-3 left-3">
                {pastry.isGlutenFree && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    GF
                  </span>
                )}
                {pastry.isVegan && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">
                    Vegan
                  </span>
                )}
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-2xl text-brown mb-1">{name}</h3>
              {pastry.priceNote && (
                <p className="text-xs text-brown-light/70 mb-2">
                  {pastry.priceNote}
                </p>
              )}
              <p className="text-sm text-brown-light line-clamp-2 mb-3">
                {locale === "hr"
                  ? pastry.compositionHr
                  : (pastry.compositionEn ?? pastry.compositionHr)}
              </p>
              <div className="border-t border-gold/20 pt-3">
                <p className="text-xs text-gold uppercase tracking-widest mb-1">
                  {tPastry("ingredients")}
                </p>
                <p className="text-xs text-brown-light line-clamp-2">
                  {locale === "hr"
                    ? pastry.ingredientsHr
                    : (pastry.ingredientsEn ?? pastry.ingredientsHr)}
                </p>
              </div>
              <div className="mt-auto pt-4">
                <p className="text-gold text-sm uppercase tracking-widest mb-0 group-hover:gap-2 transition-all">
                  {t("viewItem")} →
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

// ─── Showcase page (Prigodne torte) ──────────────────────────────────────────

const PRIGODNE_IMAGES = Array.from({ length: 20 }, (_, i) => `/pastries/prigodne-torte/image${i + 1}.jpg`);

function ShowcasePage({ categorySlug: _categorySlug, locale }: { categorySlug: string; locale: string }) {
  return (
    <div>
      {/* Intro text */}
      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="text-brown-light text-base md:text-lg leading-relaxed mb-6">
          {locale === "hr"
            ? "Prigodne torte izrađujemo isključivo po narudžbi — za rođendane, vjenčanja, obljetnice i svaki trenutak koji zaslužuje nešto posebno. Svaka torta je jedinstvena, dizajnirana prema vašim željama i izrađena s pažnjom do posljednjeg detalja."
            : "Occasion cakes are made exclusively to order — for birthdays, weddings, anniversaries and every moment that deserves something special. Each cake is unique, designed to your wishes and crafted with care down to the last detail."}
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full shadow-md hover:bg-gold/90 transition-colors text-sm uppercase tracking-widest"
        >
          {locale === "hr" ? "Pošalji upit" : "Send an inquiry"} →
        </Link>
      </div>

      {/* Photo grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {PRIGODNE_IMAGES.map((src, i) => (
          <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={src}
              alt={locale === "hr" ? `Prigodna torta ${i + 1}` : `Occasion cake ${i + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center">
        <p className="text-brown-light mb-4">
          {locale === "hr"
            ? "Zainteresirani ste za prigodnu tortu? Kontaktirajte nas i zajedno ćemo kreirati nešto posebno."
            : "Interested in an occasion cake? Get in touch and we'll create something special together."}
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full shadow-md hover:bg-gold/90 transition-colors text-sm uppercase tracking-widest"
        >
          {locale === "hr" ? "Pošalji upit" : "Send an inquiry"} →
        </Link>
      </div>
    </div>
  );
}

