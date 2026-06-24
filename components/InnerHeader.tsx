"use client";

import { Link } from "@/i18n/navigation";
import CartBadge from "./CartBadge";
import LanguageSwitcher from "./LanguageSwitcher";

export default function InnerHeader({
  backHref,
  backLabel,
}: {
  backHref: string;
  backLabel: string;
}) {
  return (
    <div className="bg-white border-b border-gold/20 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl text-brown hover:text-gold transition-colors"
        >
          Škatula slatkog
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={backHref}
            className="text-xs text-gold uppercase tracking-widest hover:text-brown transition-colors"
          >
            ← {backLabel}
          </Link>
          <LanguageSwitcher />
          <CartBadge />
        </div>
      </div>
    </div>
  );
}
