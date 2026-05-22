'use client'

import { useEffect, useState } from "react"
import CartItems from "./CartItems"
import { getCart } from "@/app/lib/cart"

export default function CartList() {
    const cartItems = getCart() //JSON.parse(localStorage.getItem('cart') || '[]')
//     const cartItems = [
//     {
//         id: 3,
//         quantity: 2
//     },
//     {
//         id: 2,
//         quantity: 1
//     }
// ]
    return (
        <div>
            <div className="bg-white rounded-[28px] shadow-sm border border-slate-100 p-6 mb-8">
                    <h2 className="text-[26px] font-bold text-[#1b2433] mb-8">Ringkasan Produk</h2>
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {cartItems.map((item: { id: number, quantity: number }) => (
                            <CartItems key={item.id} itemId={item.id} initialQuantity={item.quantity} />
                        ))}
                    </div>
                </div>
        </div>
    )

}
