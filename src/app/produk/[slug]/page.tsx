import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-shell";
import { getProductBySlug, productSlugs, products } from "../../lib/product-data";
import ProductCard from "@/components/ProductCard";
type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "AirAlam - Detail Produk",
    };
  }

  return {
    title: `${product.title} - AirAlam`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);


  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative bg-slate-50 px-4 pt-[102px] sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 text-lg font-medium text-sky-600 transition hover:-translate-x-1 hover:text-sky-500"
          >
            <span className="text-2xl font-extrabold">&larr;</span>
            Kembali
          </Link>
        </div>
      </section>

      <ProductCard product={product} />

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950">
                Spesifikasi Produk
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-[22px] border border-slate-100 bg-slate-50 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950">
                Kenapa Memilih {product.size}?
              </h2>
              <p className="mt-3 text-lg leading-8 text-slate-500">
                Manfaat yang Anda dapat dari produk ini
              </p>

              <div className="mt-6 space-y-4">
                {product.advantages.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-[22px] border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                      <span className="material-icons-round text-[24px]">water_drop</span>
                    </div>
                    <p className="pt-1 text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Informasi Kandungan
            </h2>
            <p className="mt-3 text-sm font-semibold text-slate-500">
              Kandungan gizi per botol {product.size}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="space-y-4">
              {product.nutrients.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm"
                >
                  <span className="font-medium text-slate-700">{item.label}</span>
                  <span className="font-bold text-sky-600">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Produk Lainnya
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Lihat produk AirAlam lain yang mungkin Anda sukai
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.slice(0, 3).map((item) => (
              <article
                key={item.slug}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.12)]"
              >
                <div className="mb-4 relative h-120 overflow-hidden rounded-[18px] bg-slate-50">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                <p className="mt-1 text-sm font-bold text-sky-600">{item.price}</p>
                <Link
                  href={`/produk/${item.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition group-hover:text-sky-600"
                >
                  Lihat Detail
                  <span className="transition group-hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="mx-auto mt-8 flex max-w-full flex-col items-center justify-center bg-gradient-to-r from-[#2196F3] to-[#0EA5E9] px-4 py-16 text-center text-white shadow-xl shadow-sky-100">
          <h2 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
            Tertarik dengan {product.title}?
          </h2>
          <p className="mt-3 max-w-lg text-sm text-sky-100">
            Hubungi kami untuk informasi pemesanan dan harga grosir partai besar.
          </p>
          <Link
            href="/kontak"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0EA5E9] transition hover:bg-sky-50"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
