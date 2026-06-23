"use client";

import { useState } from "react";
import { useCart, CartItem } from "@/lib/cart-context";

type Props = Omit<CartItem, "quantity">;

export default function AddToCart(props: Props) {
  const { items, addItem, updateQuantity } = useCart();
  const [qty, setQty] = useState(1);

  const cartItem = items.find((i) => i.slug === props.slug);
  const stop = (e: React.MouseEvent) => e.preventDefault();

  const handleAdd = (e: React.MouseEvent) => {
    stop(e);
    if (cartItem) {
      updateQuantity(props.slug, cartItem.quantity + qty);
    } else {
      for (let i = 0; i < qty; i++) addItem(props);
    }
    setQty(1);
  };

  return (
    <div className="mt-3">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-gold/10 rounded-full px-2 py-1.5">
          <button
            onClick={(e) => { stop(e); setQty((q) => Math.max(1, q - 1)); }}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gold/20 text-brown font-bold leading-none transition-colors"
            aria-label="Smanji"
          >
            −
          </button>
          <span className="text-sm font-semibold text-brown w-5 text-center tabular-nums">{qty}</span>
          <button
            onClick={(e) => { stop(e); setQty((q) => q + 1); }}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gold/20 text-brown font-bold leading-none transition-colors"
            aria-label="Povećaj"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="border border-gold text-gold text-xs uppercase tracking-widest px-6 py-2 rounded-full hover:bg-gold hover:text-white transition-colors"
        >
          Dodaj
        </button>
      </div>

      {cartItem && (
        <p className="text-xs text-gold mt-1.5">
          ✓ U upitu: {cartItem.quantity} kom
        </p>
      )}
    </div>
  );
}
