"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  name: string;
  initialIndex?: number;
  onClose: () => void;
}

export function Lightbox({ images, name, initialIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none z-10 p-2"
        aria-label="Zatvori"
      >
        ×
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 p-3"
          aria-label="Prethodna"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${name} ${index + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 p-3"
          aria-label="Sljedeća"
        >
          ›
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface GalleryProps {
  images: string[];
  name: string;
  className?: string;
  imageClassName?: string;
}

export default function ImageGallery({ images, name, className, imageClassName }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className={className}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl overflow-hidden shadow-sm cursor-zoom-in ${imageClassName ?? ""}`}
            onClick={() => setLightboxIndex(i)}
          >
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

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          name={name}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
