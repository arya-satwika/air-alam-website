'use client'

import { useEffect, useState } from "react"
import CartItems from "./CartItems"
import { getCart } from "@/app/lib/cart"
import { get } from 'http';

function getImageSrc(itemId: number): string {
    switch (itemId) {
        case 0:
            return "/220ml.png";
        case 1:
            return "/330ml.png";
        case 2:
            return "/500ml.png";
        case 3:
            return "/600ml.png";
        case 4:
            return "/1500ml.png";
        case 5:
            return "/airgalon.png";
        default:
            return "/botol.png";
    }
}

export default function CartList() {
    const [cartItems, setCartItems] = useState<{ id: number, quantity: number }[]>([]);

    useEffect(() => {
        setCartItems(getCart());
        console.log("Cart items loaded:", getCart());
    }, []);

    return (
        <div>
            <div className="bg-white rounded-[28px] shadow-sm border border-slate-100 p-6 mb-8">
                    <h2 className="text-[26px] font-bold text-[#1b2433] mb-8">Ringkasan Produk</h2>
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {cartItems.map((item: { id: number, quantity: number }) => (
                            <CartItems key={item.id} itemId={item.id} initialQuantity={item.quantity} imageSrc={getImageSrc(item.id)} />
                        ))}
                    </div>
                </div>
        </div>
    )

}
