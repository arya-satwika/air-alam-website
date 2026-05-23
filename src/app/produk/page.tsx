import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-shell";
import { products } from "../lib/product-data";

export const metadata = {
  title: "AirAlam - Produk",
};

export default function ProdukPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-100 pt-[88px] sm:pt-[96px] lg:pt-[104px]">
        <Image
          src="/gambar7.png"
          alt="Produk AirAlam"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_38%,rgba(255,255,255,0.15)_58%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center justify-center px-4 pb-16 text-center sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-[clamp(42px,6vw,72px)] font-bold tracking-[-0.08em] text-slate-950 drop-shadow-[0_4px_18px_rgba(255,255,255,0.45)]">
              Produk{" "}
              <span className="bg-gradient-to-r from-[#5b7cff] to-[#8fe3ff] bg-clip-text text-transparent">
                AirAlam
              </span>
            </h1>

            <p className="mx-auto max-w-[880px] text-sm font-medium leading-8 text-white/90 sm:text-base">
              Berbagai pilihan ukuran untuk memenuhi kebutuhan hidrasi Anda setiap
              hari.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl">
              Our Product
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-500">
              Temukan pilihan AirAlam yang sesuai untuk kebutuhan hidrasi harian Anda
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-300 text-white shadow-[0_10px_24px_rgba(96,165,250,0.24)]">
                    <span className="material-icons-round text-[28px]">
                      water_drop
                    </span>
                  </div>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-700">
                    {product.size}
                  </span>
                </div>

                <div className="relative mb-5 h-120 overflow-hidden rounded-[24px] bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">
                    {product.title}
                  </h3>
                  <div className="shrink-0 text-lg font-extrabold text-sky-600">
                    {product.price}
                  </div>
                </div>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {product.summary}
                </p>

                <ul className="mt-5 space-y-3 text-sm font-medium text-slate-700">
                  {product.advantages.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 text-sky-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/produk/${product.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-700"
                >
                  Lihat Detail
                  <span className="material-icons-round text-[18px]">east</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,#4f8fe8_0%,#7fa4d3_45%,#8797a8_100%)] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-[0_24px_55px_rgba(15,23,42,0.18)]">
              <Image
                src="/gambar8.jpeg"
                alt="Produk AirAlam"
                width={960}
                height={760}
                className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[520px]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 rounded-[22px] border border-white/30 bg-white/15 px-5 py-4 text-white backdrop-blur-md sm:left-8">
              <strong className="block text-4xl font-extrabold leading-none">6+</strong>
              <p className="mt-2 max-w-[170px] text-sm leading-6 text-white/85">
                Pilihan ukuran untuk kebutuhan harian Anda
              </p>
              <div className="mt-4 h-0.5 w-16 bg-white/70" />
            </div>
          </div>

          <div className="max-w-2xl text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-bold backdrop-blur-md">
              AirAlam Product
            </span>

            <h2 className="mt-6 text-[clamp(38px,5vw,64px)] font-extrabold tracking-[-0.08em] leading-[1.02]">
              Tertarik dengan
              <br />
              Produk Kami?
            </h2>

            <p className="mt-6 max-w-[580px] text-lg leading-8 text-white/80">
              Hubungi kami untuk informasi pemesanan, harga grosir, atau kerjasama
              distribusi produk AirAlam.
            </p>

            <Link
              href="/kontak"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#3f7ddb] shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
            >
              Hubungi Kami
              <span className="material-icons-round text-[20px]">east</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
