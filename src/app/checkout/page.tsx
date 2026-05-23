"use client";
import { useEffect, useState } from "react";
import CartList from "@/components/CartList";
import { paySnap } from "@/app/lib/paySnap";
import { redirect } from "next/navigation";
import { calculateTotal, getCart, clearCart } from "@/app/lib/cart";
import type { Cart } from "@/app/lib/cart";
import Link from "next/dist/client/link";

export default function CheckoutPage() {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  async function handlePay(formData: FormData) {
    const email = formData.get("email") as string;
    const nama = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const orderId = `ORDER-${Date.now()}`;
    const grossAmount = calculateTotal(cart) + 15000;

    const transactionDetails = {
      gross_amount: grossAmount,
      order_id: orderId,
      email: email,
      name: nama,
      phone: phone,
    };
    const redirectUrl = await paySnap(transactionDetails);
    console.log("Redirect URL:", redirectUrl);
    clearCart();

    redirect(redirectUrl);
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white px-6 py-20">
        <section className="mx-auto flex w-full max-w-3xl flex-col items-center rounded-[32px] border border-sky-100 bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 text-[#2196F3]">
            <span className="material-icons-round text-[40px]">shopping_cart</span>
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-red-400">
            Keranjang Kosong
          </p>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Anda belum menambahkan produk ke keranjang.
          </h1>
          <Link
            href="/produk"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Lihat Produk
          </Link>
        </section>
      </main>
    );
  }

  return (
    <div className="bg-white/90">
      <section className="max-w-6xl mx-auto px-5 lg:px-8 pt-28 pb-10 bg-gray-100">
        <div className="mb-10">
          <h1 className="text-[32px] font-extrabold text-[#1b2433] leading-none">
            Checkout
          </h1>
          <p className="text-[15px] text-slate-500 mt-3">
            Selesaikan pembayaran Anda
          </p>
        </div>

        <CartList />

        <div className="bg-white rounded-[28px] shadow-sm border border-slate-100 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-[#2196F3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-[24px] font-bold text-[#1b2433]">
              Data Pemesan
            </h2>
          </div>
          <form action={handlePay} className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              name="name"
              placeholder="Masukkan nama Anda"
              className="h-[70px] rounded-2xl border border-[#cfe5ff] px-6 outline-none text-[15px] text-black placeholder:text-slate-700 focus:border-[#2196F3] transition"
              id="nameInput"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Masukkan nomor telepon"
              className="h-[70px] rounded-2xl border border-[#cfe5ff] px-6 outline-none text-[15px] text-black placeholder:text-slate-700 focus:border-[#2196F3] transition"
              id="phoneInput"
            />
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              className="h-[70px] rounded-2xl border border-[#cfe5ff] px-6 outline-none text-[15px] text-black placeholder:text-slate-700 focus:border-[#2196F3] transition"
              id="emailInput"
            />
            <div className="bg-white rounded-[28px] shadow-sm border border-slate-100 p-6 col-span-3">
              <h2 className="text-[26px] font-bold text-[#1b2433] mb-8">
                Ringkasan Pembayaran
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-[22px] text-[#64748B]">Subtotal</p>
                  <p className="text-[22px] text-[#64748B]" id="subTotal">
                    Rp {calculateTotal(cart).toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[22px] text-[#64748B]">Ongkir</p>
                  <p className="text-[22px] text-[#64748B]" id="ongkir">
                    Rp 15.000
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
                  <h3 className="text-[28px] font-bold text-[#1b2433]">
                    Total
                  </h3>
                  <h3
                    className="text-[28px] font-extrabold text-[#2196F3]"
                    id="totalBiaya"
                  >
                    Rp {(calculateTotal(cart) + 15000).toLocaleString("id-ID")}
                  </h3>
                </div>

                <button
                  type="submit"
                  className="w-full h-[78px] rounded-full bg-[#dceeff] text-[#64748B] text-[22px] font-semibold mt-5 transition-all duration-300 cursor-pointer hover:bg-[#2196F3] hover:text-white"
                  id="bayarBtn"
                >
                  Bayar Sekarang
                </button>

                <div className="w-full h-[78px] rounded-3xl bg-[#f3f7fb] flex items-center justify-center text-[20px] text-[#64748B]">
                  Estimasi pengiriman:{" "}
                  <span className="font-bold text-[#1b2433] ml-2">
                    2-3 hari kerja
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
