"use client";

import Image from "next/image";
import { addToCart } from "@/app/lib/cart";
import type { ProductDetail } from "@/app/lib/product-data";
import Link from "next/link";


export default function ProductCard({ product }: { product: ProductDetail }) {
  function handleAddToCart() {
    addToCart(parseInt(product.slug), 1);
    console.log(`Added ${product.title} to cart.`);
  }
  return (
    <div>
      <section className="bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto flex h-[480px] w-full max-w-[460px] items-center justify-center overflow-hidden rounded-[34px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
            <div className="absolute h-52 w-52 rounded-full bg-sky-200/35 blur-3xl" />
            <Image
              src={product.image}
              alt={product.alt}
              fill
              className="rounded-[28px] object-cover p-8 drop-shadow-[0_18px_25px_rgba(15,23,42,0.14)]"
              priority
            />
          </div>

          <div>
            <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-sky-700">
              {product.size}
            </span>
            <h1 className="mt-4 text-[clamp(36px,5vw,60px)] font-bold tracking-[-0.06em] text-slate-950">
              {product.title}
            </h1>
            <p className="mt-3 text-2xl font-bold text-sky-600">
              {product.price}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {product.details}
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">
                Keunggulan
              </h2>
              <ul className="mt-4 space-y-4 text-base leading-7 text-slate-700">
                {product.advantages.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 text-sm font-bold text-sky-500">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              href="/checkout"
              onClick={handleAddToCart}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-sky-700"
            >
              Pesan Sekarang
              <span className="material-icons-round text-[20px]">east</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
