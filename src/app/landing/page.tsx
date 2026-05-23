import Link from "next/link";

type LandingPageProps = {
  searchParams?: {
    order_id?: string | string[];
  };
};

export default function LandingPage({ searchParams }: LandingPageProps) {
  const orderId = Array.isArray(searchParams?.order_id)
    ? searchParams?.order_id[0]
    : searchParams?.order_id;

  void orderId;

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white px-6 py-20">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center rounded-[32px] border border-sky-100 bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 text-4xl text-[#2196F3]">
          ✓
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">
          Payment completed
        </p>
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Terima kasih, pesanan Anda sedang diproses.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
          Pantau Alamat Email yang anda daftarkan untuk mendapatkan informasi terbaru tentang status pesanan Anda.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          Kembali ke beranda
        </Link>
      </section>
    </main>
  );
}
