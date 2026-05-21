"use client";

import { useState, useEffect, useCallback } from "react";
import type { Cart } from "@/app/lib/cart";

interface CartItemProps {
  itemId: number;
  initialQuantity: number;
}

export default function CartItem({ itemId, initialQuantity }: CartItemProps) {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      const parsed: Cart[] = raw ? JSON.parse(raw) : [];
      setCartItems(parsed);
    } catch (error) {
      console.error("Failed to parse cart:", error);
      setCartItems([]);
    }
    setIsLoaded(true);
  }, []);

  const updateItemQuantity = (newQuantity: number) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item,
      );
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
    setQuantity(newQuantity);
  };

  const handleIncrement = () => {
    updateItemQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateItemQuantity(quantity - 1);
    }
  };

  if (!isLoaded) return null;

  if (!cartItems.some((item) => item.id === itemId)) {
    return <div>Item not found in cart</div>;
  }
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6">
      <div className="w-[120px] h-[120px] bg-[#f5f7fb] rounded-2xl flex items-center justify-center p-2">
        <img
          src="https://placehold.co/80x80"
          alt="produk"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-[24px] font-bold text-[#1b2433]">AirAlam 600ml</h3>
        <p className="text-[24px] font-extrabold text-[#2196F3] mt-3">
          Rp 5.000
        </p>
        <div className="flex items-center gap-5 mt-6">
          <span className="text-slate-500 text-[20px]">Jumlah:</span>
          <div className="flex items-center gap-5">
            <button
              className="w-10 h-10 rounded-full bg-[#edf5ff] text-[#2196F3] text-lg font-bold transition hover:bg-blue-100"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-[24px] font-semibold text-[#1b2433]">
              {quantity}
            </span>
            <button
              className="w-10 h-10 rounded-full bg-[#edf5ff] text-[#2196F3] text-lg font-bold transition hover:bg-blue-100"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
