import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="min-h-screen flex items-center px-6 bg-white">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">
        <div>
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Slastičarnica</p>
          <h2 className="font-display text-5xl md:text-6xl text-brown mb-6 leading-tight">
            {t('title')}
          </h2>
          <div className="w-12 h-0.5 bg-gold mb-8" />
          <p className="text-brown-light leading-relaxed text-lg">{t('text')}</p>
        </div>

        <div className="relative">
          <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero_background.jpg"
              alt="Škatula slatkog"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative gold border offset */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}
