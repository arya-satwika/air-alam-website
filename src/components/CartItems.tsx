"use client";

import { useState, useEffect } from "react";
import { getCart, saveCart, items } from "@/app/lib/cart";
import type { Cart } from "@/app/lib/cart";
import Image from "next/image";

interface CartItemProps {
  itemId: number;
  initialQuantity: number;
  imageSrc: string;
}

export default function CartItem({ itemId, initialQuantity, imageSrc }: CartItemProps) {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
    setIsLoaded(true);
  }, []);

  const currentItem = items[itemId];
  if (!currentItem) {
    console.log(`Item with ID ${itemId} not found in items list.`);
    return <div>Item not found</div>;
  }
  

  const updateItemQuantity = (newQuantity: number) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item,
      );
      saveCart(updated);
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
      <div className="w-[120px] h-[200px] bg-[#f5f7fb] rounded-2xl flex items-center justify-center p-2">
        <Image
          src={imageSrc}
          alt="produk"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-[24px] font-bold text-[#1b2433]">
          {currentItem.name}
        </h3>
        <p className="text-[24px] font-extrabold text-[#2196F3] mt-3">
          Rp {currentItem.price?.toLocaleString()}
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
