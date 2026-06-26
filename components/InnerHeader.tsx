"use client";

import { Link } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import CartBadge from "./CartBadge";
import LanguageSwitcher from "./LanguageSwitcher";

export default function InnerHeader({
  backHref,
  backLabel,
}: {
  backHref: string;
  backLabel: string;
}) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(backHref);
    }
  };

  return (
    <div className="bg-white border-b border-gold/20 px-4 md:px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-brown hover:text-gold transition-colors shrink-0"
        >
          Škatula slatkog
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={handleBack}
            className="text-xs text-gold uppercase tracking-widest hover:text-brown transition-colors hidden sm:block"
          >
            ← {backLabel}
          </button>
          <button
            onClick={handleBack}
            className="text-gold hover:text-brown transition-colors sm:hidden"
            aria-label={backLabel}
          >
            ←
          </button>
          <LanguageSwitcher />
          <CartBadge />
        </div>
      </div>
    </div>
  );
}
