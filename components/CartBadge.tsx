"use client";

import { useCart } from "@/lib/cart-context";
import { Link, usePathname } from "@/i18n/navigation";

export default function CartBadge({ light }: { light?: boolean }) {
  const { totalItems } = useCart();
  const pathname = usePathname();

  return (
    <Link
      href={{ pathname: '/upit', query: { from: pathname } }}
      className={`relative flex items-center transition-colors ${
        light ? "text-white/90 hover:text-white" : "text-brown-mid hover:text-gold"
      }`}
      aria-label="Upit"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </Link>
  );
}
