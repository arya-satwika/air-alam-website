import Image from "next/image";
import { SiteHeader } from "@/components/site-shell";

export const metadata = {
  title: "AirAlam - Produk",
};

export default function ProdukPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader active="produk" />

      <section className="relative isolate overflow-hidden bg-slate-100 pt-28 sm:pt-32 lg:pt-36">
        <Image
          src="/botol-hero.png"
          alt="Produk AirAlam"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_38%,rgba(255,255,255,0.15)_58%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center justify-center px-4 pb-16 text-center sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-extrabold tracking-[-0.08em] text-slate-950 drop-shadow-[0_4px_18px_rgba(255,255,255,0.45)] sm:text-6xl lg:text-7xl">
              Produk{" "}
              <span className="bg-gradient-to-r from-[#5b7cff] to-[#8fe3ff] bg-clip-text text-transparent">
                AirAlam
              </span>
            </h1>

            <p className="mx-auto max-w-[880px] text-sm font-medium leading-8 text-white/90 sm:text-base">
              Berbagai pilihan ukuran untuk memenuhi kebutuhan hidrasi Anda setiap
              hari
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
