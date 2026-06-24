import { useTranslations } from "next-intl";
import Image from "next/image";

const stripPhotos = [
  "/about_us/about3.jpg",
  "/about_us/about9.jpg",
  "/about_us/about7.jpg",
  "/about_us/about8.jpg",
];

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-white">
      {/* Main row: text + portrait */}
      <div className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">
          {/* Text */}
          <div>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Slastičarnica
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-brown mb-6 leading-tight">
              {t("title")}
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <div className="space-y-4 text-brown-light leading-relaxed text-lg">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <p>{t("p4")}</p>
              <p>{t("p5")}</p>
            </div>
          </div>

          {/* Portrait photo */}
          <div className="relative">
            <div className="relative h-[580px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about_us/about1.jpg"
                alt="Škatula slatkog"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="grid grid-cols-4 h-64">
        {stripPhotos.map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt={`Škatula slatkog ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
