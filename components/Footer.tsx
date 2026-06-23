import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-brown text-cream/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-3xl text-gold">Škatula slatkog</span>
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Škatula slatkog. {t('rights')}.
        </p>
      </div>
    </footer>
  );
}
