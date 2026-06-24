import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/hero_background.jpg"
        alt="Škatula slatkog – slastičarnica"
        fill
        sizes="100vw"
        className="object-cover [object-position:30%_top] md:object-top"
        priority
      />
      <div className="absolute inset-0 bg-brown/50" />
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
          Škatula slatkog
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-wide mb-8 md:mb-10 text-white/90 drop-shadow">
          {t("tagline")}
        </p>
        <a
          href="#gallery"
          className="inline-block border border-white/60 hover:bg-white hover:text-brown text-white px-8 md:px-10 py-3.5 text-sm uppercase tracking-widest transition-all duration-300"
        >
          {t("cta")}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
