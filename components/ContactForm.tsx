'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-transparent border-b border-gold/40 py-3 text-brown placeholder-brown-light/50 focus:outline-none focus:border-gold transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-xs text-gold uppercase tracking-[0.2em] mb-2">
          {t('name')}
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={set('name')}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs text-gold uppercase tracking-[0.2em] mb-2">
          {t('email')}
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={set('email')}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs text-gold uppercase tracking-[0.2em] mb-2">
          {t('message')}
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={set('message')}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'success' && (
        <p className="text-sm text-green-700 bg-green-50 px-4 py-3 rounded-lg">
          {t('successMessage')}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
          {t('errorMessage')}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-gold hover:bg-gold-light text-white text-sm uppercase tracking-widest px-10 py-3.5 transition-colors duration-200 disabled:opacity-50"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>
    </form>
  );
}
