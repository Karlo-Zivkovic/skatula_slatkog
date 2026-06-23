import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 bg-white">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Javite nam se</p>
          <h2 className="font-display text-5xl md:text-6xl text-brown leading-tight">
            {t('title')}
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <ContactForm />

          <div className="space-y-10">
            <div>
              <p className="text-xs text-gold uppercase tracking-[0.2em] mb-3">{t('address')}</p>
              <p className="text-brown text-lg">Kroz Smrdečac 43</p>
            </div>

            <div>
              <p className="text-xs text-gold uppercase tracking-[0.2em] mb-3">{t('hours')}</p>
              <p className="text-brown">{t('hoursWeekdays')}</p>
              <p className="text-brown">{t('hoursSaturday')}</p>
            </div>

            <div>
              <p className="text-xs text-gold uppercase tracking-[0.2em] mb-3">{t('phone')}</p>
              <a
                href="tel:+385913463368"
                className="text-brown hover:text-gold transition-colors text-lg"
              >
                +385 91 3463 368
              </a>
            </div>

            <div>
              <p className="text-xs text-gold uppercase tracking-[0.2em] mb-3">Email</p>
              <a
                href="mailto:skatulaslatkog@gmail.com"
                className="text-brown hover:text-gold transition-colors text-lg"
              >
                skatulaslatkog@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
