"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./ImageLightbox";

interface BoxItem {
  slug: string;
  nameHr: string;
  nameEn: string;
  taglineHr?: string;
  taglineEn?: string;
  compositionHr: string;
  compositionEn?: string;
  ingredientsHr: string;
  ingredientsEn?: string;
  allergensHr: string;
  allergensEn?: string;
  isGlutenFree?: boolean;
  coverImage?: string;
  objectPosition?: string;
  images: string[];
}

interface Props {
  item: BoxItem;
  locale: string;
  ingredientsLabel: string;
  allergensLabel: string;
}

export default function BoxItemCard({ item, locale, ingredientsLabel, allergensLabel }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const coverSrc = item.coverImage ?? item.images[0];
  const name = locale === "hr" ? item.nameHr : (item.nameEn ?? item.nameHr);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
        {/* Clickable image */}
        <div
          className="relative h-56 overflow-hidden cursor-zoom-in group/img"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={coverSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
            style={{ objectPosition: item.objectPosition ?? "center" }}
          />
          {item.isGlutenFree && (
            <div className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs uppercase tracking-wide px-2 py-1 rounded-full font-medium">
              GF
            </div>
          )}
          {/* Photo count badge */}
          {item.images.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {item.images.length}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col flex-1 gap-4">
          <h3 className="font-display text-2xl text-brown">{name}</h3>
          {(item.taglineHr || item.taglineEn) && (
            <p className="text-sm italic text-brown-light/70 -mt-2">
              {locale === "hr" ? item.taglineHr : (item.taglineEn ?? item.taglineHr)}
            </p>
          )}

          <div>
            <p className="text-xs text-gold uppercase tracking-widest mb-1">
              {locale === "hr" ? "Sastav" : "Composition"}
            </p>
            <p className="text-sm text-brown-light">
              {locale === "hr" ? item.compositionHr : (item.compositionEn ?? item.compositionHr)}
            </p>
          </div>

          <div>
            <p className="text-xs text-gold uppercase tracking-widest mb-1">{ingredientsLabel}</p>
            <p className="text-xs text-brown-light">
              {locale === "hr" ? item.ingredientsHr : (item.ingredientsEn ?? item.ingredientsHr)}
            </p>
          </div>

          <div className="mt-auto border-t border-gold/20 pt-3">
            <p className="text-xs text-brown-light/70">
              <span className="font-medium text-brown-light">
                {allergensLabel}:
              </span>{" "}
              {locale === "hr" ? item.allergensHr : (item.allergensEn ?? item.allergensHr)}
            </p>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={item.images}
          name={name}
          initialIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
