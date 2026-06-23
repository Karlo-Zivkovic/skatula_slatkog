"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/lib/cart-context";

export default function InquiryPage({ locale }: { locale: string }) {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState({ name: "", email: "", phone: "", note: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const hr = locale === "hr";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setStatus("sending");

    const itemLines = items
      .map((i) => {
        const name = locale === "hr" ? i.nameHr : i.nameEn;
        return `${name} × ${i.quantity}  —  ${(i.price * i.quantity).toFixed(2)} €`;
      })
      .join("\n");

    const message = [
      hr ? "UPIT ZA SLASTICE" : "PASTRY INQUIRY",
      "─".repeat(30),
      itemLines,
      "─".repeat(30),
      `${hr ? "Ukupno (informativno)" : "Total (indicative)"}: ${totalPrice.toFixed(2)} €`,
      "",
      hr
        ? "* Ovo nije potvrda narudžbe. Kontaktirat ćemo Vas za dogovor."
        : "* This is not an order confirmation. We will contact you to arrange.",
      "",
      form.note ? `${hr ? "Napomena" : "Note"}: ${form.note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message }),
      });
      if (res.ok) {
        setStatus("sent");
        clearCart();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">✓</div>
          <h1 className="font-display text-4xl text-brown mb-3">
            {hr ? "Upit poslan!" : "Inquiry sent!"}
          </h1>
          <p className="text-brown-light mb-8">
            {hr
              ? "Hvala! Javit ćemo Vam se što prije za dogovor oko narudžbe."
              : "Thank you! We will contact you as soon as possible to arrange your order."}
          </p>
          <Link
            href="/"
            className="inline-block bg-gold text-white text-sm uppercase tracking-widest px-8 py-3 rounded-full"
          >
            {hr ? "Natrag na početnu" : "Back to home"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-gold/20 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display text-2xl text-brown hover:text-gold transition-colors">
            Škatula slatkog
          </Link>
          <Link href="/" className="text-xs text-gold uppercase tracking-widest hover:text-brown transition-colors">
            ← {hr ? "Natrag" : "Back"}
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-gold text-xs uppercase tracking-[0.3em] mb-2">
          {hr ? "Vaš odabir" : "Your selection"}
        </p>
        <h1 className="font-display text-5xl text-brown mb-2">
          {hr ? "Upit" : "Inquiry"}
        </h1>
        <div className="w-8 h-0.5 bg-gold mb-8" />

        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-brown-light text-lg mb-6">
              {hr ? "Vaš upit je prazan." : "Your inquiry is empty."}
            </p>
            <Link
              href="/#gallery"
              className="inline-block border border-gold text-gold text-sm uppercase tracking-widest px-8 py-3 rounded-full hover:bg-gold hover:text-white transition-colors"
            >
              {hr ? "Pregledaj slastice" : "Browse pastries"}
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: item list */}
            <div>
              <ul className="space-y-4 mb-6">
                {items.map((item) => {
                  const name = locale === "hr" ? item.nameHr : item.nameEn;
                  return (
                    <li key={item.slug} className="flex items-center gap-4 bg-white rounded-2xl px-4 py-3 shadow-sm">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-cream">
                        <Image
                          src={item.coverImage}
                          alt={name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-brown font-medium text-sm truncate">{name}</p>
                        <p className="text-xs text-brown-light">{item.price.toFixed(2)} € / kom</p>
                      </div>
                      {/* qty controls */}
                      <div className="flex items-center gap-2 bg-gold/10 rounded-full px-2 py-1 shrink-0">
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gold/20 text-brown font-bold leading-none"
                        >
                          −
                        </button>
                        <span className="text-sm font-semibold text-brown w-4 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gold/20 text-brown font-bold leading-none"
                        >
                          +
                        </button>
                      </div>
                      {/* line total */}
                      <p className="text-gold font-semibold text-sm shrink-0 w-16 text-right tabular-nums">
                        {(item.price * item.quantity).toFixed(2)} €
                      </p>
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="text-brown-light/50 hover:text-brown-light transition-colors shrink-0"
                        aria-label="Ukloni"
                      >
                        ×
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Total */}
              <div className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm border border-gold/20">
                <div>
                  <p className="text-brown font-semibold">
                    {hr ? "Ukupno (informativno)" : "Total (indicative)"}
                  </p>
                  <p className="text-xs text-brown-light mt-0.5">
                    {hr
                      ? "Cijene su informativne — potvrda stiže pozivom."
                      : "Prices are indicative — confirmation comes by phone."}
                  </p>
                </div>
                <p className="text-2xl font-semibold text-gold tabular-nums">
                  {totalPrice.toFixed(2)} €
                </p>
              </div>
            </div>

            {/* Right: contact form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-display text-3xl text-brown mb-1">
                {hr ? "Vaši podaci" : "Your details"}
              </h2>
              <p className="text-sm text-brown-light mb-4">
                {hr
                  ? "Pošaljite upit i kontaktirat ćemo Vas za potvrdu i dogovor o preuzimanju."
                  : "Send the inquiry and we will contact you to confirm and arrange pickup."}
              </p>

              <div>
                <label className="text-xs text-gold uppercase tracking-widest block mb-1">
                  {hr ? "Ime i prezime" : "Full name"} *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white border border-gold/30 rounded-xl px-4 py-2.5 text-brown text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="text-xs text-gold uppercase tracking-widest block mb-1">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white border border-gold/30 rounded-xl px-4 py-2.5 text-brown text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="text-xs text-gold uppercase tracking-widest block mb-1">
                  {hr ? "Telefon" : "Phone"}
                </label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full bg-white border border-gold/30 rounded-xl px-4 py-2.5 text-brown text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="text-xs text-gold uppercase tracking-widest block mb-1">
                  {hr ? "Napomena" : "Note"}
                </label>
                <textarea
                  rows={3}
                  value={form.note}
                  onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                  placeholder={hr ? "Npr. datum preuzimanja, posebni zahtjevi..." : "E.g. pickup date, special requests..."}
                  className="w-full bg-white border border-gold/30 rounded-xl px-4 py-2.5 text-brown text-sm focus:outline-none focus:border-gold resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  {hr ? "Nešto je pošlo po krivu. Pokušajte ponovno." : "Something went wrong. Please try again."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gold hover:bg-gold/90 disabled:opacity-60 text-white text-sm uppercase tracking-widest px-8 py-3.5 rounded-full transition-colors"
              >
                {status === "sending"
                  ? (hr ? "Šaljem..." : "Sending...")
                  : (hr ? "Pošalji upit" : "Send inquiry")}
              </button>

              <p className="text-xs text-brown-light/70 text-center">
                {hr
                  ? "Ovo nije narudžba — potvrda stiže telefonskim pozivom ili emailom."
                  : "This is not an order — confirmation comes by phone or email."}
              </p>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
