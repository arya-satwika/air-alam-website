import Link from "next/link";

export const metadata = {
  title: "AirAlam - Kesegaran Alami Dalam Setiap Tetes",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fbff] font-sans text-[#1a2535]">
      <nav className="fixed left-0 right-0 top-0 z-[100] flex h-16 items-center justify-between border-b border-[rgba(26,143,227,0.1)] bg-white/[0.92] px-[5%] shadow-[0_2px_20px_rgba(26,143,227,0.08)] backdrop-blur-[12px]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#1a8fe3,#00d4ff)] shadow-[0_4px_12px_rgba(26,143,227,0.35)]">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-white"
            >
              <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" />
            </svg>
          </div>
          <span className="text-[1.25rem] font-bold tracking-[-0.5px] text-[#1a2535]">
            Air<span className="text-[#1a8fe3]">Alam</span>
          </span>
        </div>

        <div className="flex gap-6 text-sm font-medium text-[#4a5568] lg:gap-8">
          <Link
            href="/"
            className="relative text-[#1a8fe3] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#1a8fe3]"
          >
            Home
          </Link>
          <a href="/tentang" className="transition-colors duration-200 hover:text-[#1a8fe3]">
            Tentang
          </a>
          <a href="/brand" className="transition-colors duration-200 hover:text-[#1a8fe3]">
            Brand
          </a>
          <a href="/produk" className="transition-colors duration-200 hover:text-[#1a8fe3]">
            Produk
          </a>
          <Link href="/#kontak" className="transition-colors duration-200 hover:text-[#1a8fe3]">
            Kontak
          </Link>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(160deg,#f0f9ff_0%,#e8f4fe_40%,#ddf0fd_100%)] px-[5%] pb-16 pt-16 min-[993px]:grid min-[993px]:min-h-screen min-[993px]:grid-cols-2 min-[993px]:items-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(86,197,247,0.22)_0%,rgba(86,197,247,0.12)_30%,rgba(86,197,247,0.05)_55%,transparent_80%)] blur-[35px] opacity-90"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-80px] left-0 h-[268px] w-full bg-[linear-gradient(to_bottom,rgba(240,249,255,0)_0%,rgba(240,249,255,0.35)_25%,rgba(248,251,255,0.75)_55%,rgba(255,255,255,0.95)_80%,#ffffff_100%)] blur-[45px]"
        />

        <div className="relative z-10 mb-16 max-w-xl min-[993px]:mb-[100px] min-[993px]:pr-8">
          <div className="inline-flex items-center rounded-full border border-[rgba(26,143,227,0.25)] bg-[rgba(26,143,227,0.1)] px-3.5 py-1.5 text-[0.78rem] font-semibold tracking-[0.3px] text-[#1a8fe3]">
            Natural Freshness Everyday
          </div>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.1] tracking-[-0.08em] text-[#1a2535] sm:text-6xl lg:text-[4.5rem]">
            Kesegaran Alami
            <br />
            <span className="bg-[linear-gradient(120deg,#1a8fe3,#00c4f0)] bg-clip-text text-transparent">
              Dalam Setiap Tetes
            </span>
          </h1>

          <p className="mt-4 max-w-[380px] text-sm leading-7 text-[#5a6a7e] sm:text-[0.97rem] sm:leading-7">
            AirAlam menghadirkan air minum berkualitas dengan kemurnian alami
            untuk gaya hidup sehat dan modern.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#produk"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#1a8fe3,#0d73c7)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(26,143,227,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(26,143,227,0.45)]"
            >
              Lihat Produk
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-4 w-4"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="/tentang"
              className="inline-flex items-center gap-2 rounded-full border border-[#d0dde8] bg-white px-6 py-3.5 text-sm font-semibold text-[#1a2535] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1a8fe3] hover:text-[#1a8fe3]"
            >
              Tentang Kami
            </a>
          </div>
        </div>

        <div className="relative z-10 flex justify-center min-[993px]:justify-end">
          <img
            src="/botol-hero.png"
            alt="AirAlam Bottle"
            className="w-[85%] max-w-[500px] -translate-y-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] min-[993px]:w-[75%] min-[993px]:-translate-y-10"
          />
        </div>
      </section>

      <section className="bg-[#fcfeff] px-[5%] py-[70px]">
        <div className="mx-auto grid max-w-[1300px] items-center gap-9 min-[993px]:grid-cols-[1.15fr_1fr]">
          <div className="order-2 w-full min-[993px]:order-1">
            <img
              src="/gambar8.jpeg"
              alt="AirAlam Bottle"
              className="h-[420px] w-full rounded-[20px] object-cover shadow-[0_20px_45px_rgba(0,0,0,0.1)] min-[993px]:h-[645px] min-[993px]:w-[85%]"
            />
          </div>

          <div className="order-1 w-full min-[993px]:order-2">
            <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-[-0.08em] text-[#1b2433] lg:text-5xl">
              Mengapa Memilih
              <br />
              AirAlam?
            </h2>
            <p className="mb-8 text-base leading-8 text-[#64748b]">
              AirAlam bukan sekadar air minum. Kami adalah komitmen untuk
              memberikan yang terbaik bagi kesehatan Anda dan keluarga. Setiap
              botol diproduksi dengan standar tertinggi dan penuh perhatian
              terhadap detail.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#2492ff]">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-[#2492ff] stroke-[3]">
                    <path d="M6 12l4 4 8-8" />
                  </svg>
                </div>
                <p className="m-0 text-base leading-7 text-[#5f6f89]">
                  Sumber air alami terpilih dari pegunungan Indonesia
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#2492ff]">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-[#2492ff] stroke-[3]">
                    <path d="M6 12l4 4 8-8" />
                  </svg>
                </div>
                <p className="m-0 text-base leading-7 text-[#5f6f89]">
                  Proses penyaringan 7 tahap dengan teknologi modern
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#2492ff]">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-[#2492ff] stroke-[3]">
                    <path d="M6 12l4 4 8-8" />
                  </svg>
                </div>
                <p className="m-0 text-base leading-7 text-[#5f6f89]">
                  Kemasan BPA-free yang aman dan ramah lingkungan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%] py-20">
        <div className="mx-auto max-w-[1300px] text-center">
          <div className="mb-14">
            <h2 className="mb-3 text-4xl font-extrabold tracking-[-0.05em] text-[#1e293b] lg:text-5xl">
              Nilai-Nilai Kami
            </h2>
            <p className="text-base text-[#64748b]">
              Komitmen kami untuk memberikan yang terbaik dalam setiap aspek
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 min-[993px]:grid-cols-4">
            <div className="rounded-[18px] border border-[rgba(26,143,227,0.1)] bg-[#f8fbff] px-6 py-7 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,143,227,0.12)]">
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#1a8fe3,#00c4f0)] shadow-[0_6px_16px_rgba(26,143,227,0.3)]">
                <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-white stroke-2">
                  <path
                    d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-[0.95rem] font-bold text-[#1a2535]">Murni</h3>
              <p className="text-[0.83rem] leading-6 text-[#7a8fa6]">
                Air dari sumber alami dengan proses penyaringan modern.
              </p>
            </div>

            <div className="rounded-[18px] border border-[rgba(26,143,227,0.1)] bg-[#f8fbff] px-6 py-7 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,143,227,0.12)]">
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#1a8fe3,#00c4f0)] shadow-[0_6px_16px_rgba(26,143,227,0.3)]">
                <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-white stroke-2">
                  <path d="M12 3l1.5 4.5H18l-3.5 2.5 1.5 4.5L12 12l-4 2.5 1.5-4.5L6 7.5h4.5z" />
                </svg>
              </div>
              <h3 className="mb-2 text-[0.95rem] font-bold text-[#1a2535]">Menyegarkan</h3>
              <p className="text-[0.83rem] leading-6 text-[#7a8fa6]">
                Rasa segar alami yang memanjakan setiap tegukan.
              </p>
            </div>

            <div className="rounded-[18px] border border-[rgba(26,143,227,0.1)] bg-[#f8fbff] px-6 py-7 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,143,227,0.12)]">
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#1a8fe3,#00c4f0)] shadow-[0_6px_16px_rgba(26,143,227,0.3)]">
                <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-white stroke-2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="mb-2 text-[0.95rem] font-bold text-[#1a2535]">Higienis</h3>
              <p className="text-[0.83rem] leading-6 text-[#7a8fa6]">
                Standar kebersihan internasional di setiap tahap produksi.
              </p>
            </div>

            <div className="rounded-[18px] border border-[rgba(26,143,227,0.1)] bg-[#f8fbff] px-6 py-7 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,143,227,0.12)]">
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#1a8fe3,#00c4f0)] shadow-[0_6px_16px_rgba(26,143,227,0.3)]">
                <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-white stroke-2">
                  <path d="M19 3C13 3 7 7 7 13c0 4 3 7 7 7 6 0 10-6 10-12V3h-5z" />
                  <path d="M7 13c2 0 5-1 8-4" />
                </svg>
              </div>
              <h3 className="mb-2 text-[0.95rem] font-bold text-[#1a2535]">
                Ramah Lingkungan
              </h3>
              <p className="text-[0.83rem] leading-6 text-[#7a8fa6]">
                Kemasan recyclable untuk masa depan yang lebih hijau.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className="bg-white px-[5%] py-20">
        <div className="mx-auto max-w-[1300px] text-center">
          <div className="mb-14">
            <h2 className="mb-3 text-4xl font-extrabold tracking-[-0.05em] text-[#1e293b] lg:text-5xl">
              Produk Pilihan
            </h2>
            <p className="text-base text-[#64748b]">Berbagai ukuran untuk memenuhi kebutuhan Anda</p>
          </div>

          <div className="grid grid-cols-1 gap-8 min-[993px]:grid-cols-4">
            <div className="rounded-[22px] border border-black/5 bg-[#f4f9fd] p-[22px] text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="h-[280px] overflow-hidden rounded-[18px] bg-white">
                <img src="/330ml.png" alt="AirAlam 330ml" className="h-full w-full object-cover" />
              </div>
              <div className="mt-[26px]">
                <h3 className="mb-3 text-base font-bold text-[#1e293b]">AirAlam 330ml</h3>
                <span className="mb-4 inline-block text-base font-semibold text-[#1d9bf0]">330ml</span>
                <p className="mb-[26px] text-base leading-8 text-[#64748b]">Perfect untuk aktivitas harian</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[#1d9bf0] transition-all duration-200 hover:gap-3"
                >
                  Lihat Detail
                </a>
              </div>
            </div>

            <div className="rounded-[22px] border border-black/5 bg-[#f4f9fd] p-[22px] text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="h-[280px] overflow-hidden rounded-[18px] bg-white">
                <img src="/500ml.png" alt="AirAlam 500ml" className="h-full w-full object-cover" />
              </div>
              <div className="mt-[26px]">
                <h3 className="mb-3 text-base font-bold text-[#1e293b]">AirAlam 500ml</h3>
                <span className="mb-4 inline-block text-base font-semibold text-[#1d9bf0]">500ml</span>
                <p className="mb-[26px] text-base leading-8 text-[#64748b]">Pilihan tepat untuk olahraga</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[#1d9bf0] transition-all duration-200 hover:gap-3"
                >
                  Lihat Detail
                </a>
              </div>
            </div>

            <div className="rounded-[22px] border border-black/5 bg-[#f4f9fd] p-[22px] text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="h-[280px] overflow-hidden rounded-[18px] bg-white">
                <img src="/600ml.png" alt="AirAlam 600ml" className="h-full w-full object-cover" />
              </div>
              <div className="mt-[26px]">
                <h3 className="mb-3 text-base font-bold text-[#1e293b]">AirAlam 600ml</h3>
                <span className="mb-4 inline-block text-base font-semibold text-[#1d9bf0]">600ml</span>
                <p className="mb-[26px] text-base leading-8 text-[#64748b]">Ekonomis untuk keluarga</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[#1d9bf0] transition-all duration-200 hover:gap-3"
                >
                  Lihat Detail
                </a>
              </div>
            </div>

            <div className="rounded-[22px] border border-black/5 bg-[#f4f9fd] p-[22px] text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="h-[280px] overflow-hidden rounded-[18px] bg-white">
                <img src="/1500ml.png" alt="AirAlam 1.5L" className="h-full w-full object-cover" />
              </div>
              <div className="mt-[26px]">
                <h3 className="mb-3 text-base font-bold text-[#1e293b]">AirAlam 1.5L</h3>
                <span className="mb-4 inline-block text-base font-semibold text-[#1d9bf0]">1500ml</span>
                <p className="mb-[26px] text-base leading-8 text-[#64748b]">Ekonomis untuk keluarga</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[#1d9bf0] transition-all duration-200 hover:gap-3"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>

          <div className="mt-[60px] flex justify-center">
            <a
              href="#"
              className="inline-flex rounded-full bg-[linear-gradient(135deg,#3ba3f5,#1d8ef0)] px-9 py-4 text-base font-semibold text-white shadow-[0_10px_24px_rgba(29,142,240,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(29,142,240,0.3)]"
            >
              Lihat Semua Produk
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fb] px-[5%] py-[90px]">
        <div className="mx-auto max-w-[1300px] text-center">
          <div className="mb-14">
            <h2 className="mb-3 text-4xl font-extrabold tracking-[-0.05em] text-[#1e293b] lg:text-5xl">
              Apa Kata Mereka
            </h2>
            <p className="text-base text-[#64748b]">Testimoni dari pelanggan setia AirAlam</p>
          </div>

          <div className="grid grid-cols-1 gap-8 min-[993px]:grid-cols-3">
            <div className="rounded-[28px] bg-white p-8 text-left shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5 text-[1.6rem] tracking-[0.25em] text-[#f5b301]">★★★★★</div>
              <p className="mb-10 text-[1.15rem] leading-[1.9] text-[#64748b] italic">
                &quot;AirAlam adalah pilihan terbaik untuk gaya hidup sehat saya.
                Rasanya fresh dan kemasannya premium!&quot;
              </p>
              <div>
                <h3 className="mb-1.5 text-[1.7rem] text-[#1e293b]">Sarah Wijaya</h3>
                <span className="text-[1.05rem] text-[#64748b]">Lifestyle Blogger</span>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-8 text-left shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5 text-[1.6rem] tracking-[0.25em] text-[#f5b301]">★★★★★</div>
              <p className="mb-10 text-[1.15rem] leading-[1.9] text-[#64748b] italic">
                &quot;Saya selalu membawa AirAlam saat workout. Sangat menyegarkan dan
                praktis.&quot;
              </p>
              <div>
                <h3 className="mb-1.5 text-[1.7rem] text-[#1e293b]">Budi Santoso</h3>
                <span className="text-[1.05rem] text-[#64748b]">Fitness Enthusiast</span>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-8 text-left shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5 text-[1.6rem] tracking-[0.25em] text-[#f5b301]">★★★★★</div>
              <p className="mb-10 text-[1.15rem] leading-[1.9] text-[#64748b] italic">
                &quot;Kantor kami sudah beralih ke AirAlam. Kualitas terjamin dan tim
                sangat puas.&quot;
              </p>
              <div>
                <h3 className="mb-1.5 text-[1.7rem] text-[#1e293b]">Linda Chen</h3>
                <span className="text-[1.05rem] text-[#64748b]">Corporate Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%]">
        <div className="bg-[linear-gradient(to_right,#339af0,#5cb8ff)] px-5 py-[146px] text-center">
          <h2 className="mb-7 text-5xl font-extrabold leading-[1.2] text-white sm:text-6xl">
            Siap Untuk Hidup Lebih Sehat?
          </h2>
          <p className="mx-auto mb-12 max-w-[850px] text-lg leading-8 text-white/90 sm:text-[1.35rem]">
            Bergabunglah dengan ribuan orang yang telah memilih AirAlam sebagai
            bagian dari gaya hidup sehat mereka
          </p>
          <a
            href="#"
            className="inline-flex rounded-full bg-white px-10 py-[18px] text-[1.05rem] font-semibold text-[#339af0] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>

      <footer id="kontak" className="bg-[#0d1b2e] px-[5%] pb-8 pt-16 text-white">
        <div className="grid gap-12 border-b border-white/[0.08] pb-12 min-[993px]:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-2.5 flex items-center gap-2.5">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#1a8fe3,#00d4ff)] shadow-[0_4px_12px_rgba(26,143,227,0.35)]">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white">
                  <path
                    d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-[1.25rem] font-bold tracking-[-0.5px] text-white">
                Air<span className="text-[#1a8fe3]">Alam</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/50">
              Menghadirkan kesegaran alami dari pegunungan Indonesia langsung ke
              keluarga Anda setiap hari.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.5px] text-white/90">
              Perusahaan
            </h4>
          <a href="#" className="mb-2 block text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]">
              Tentang Kami
            </a>
            <a href="#" className="mb-2 block text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]">
              Visi & Misi
            </a>
            <a href="#" className="mb-2 block text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]">
              Karir
            </a>
            <a href="#" className="mb-2 block text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]">
              Blog
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.5px] text-white/90">
              Produk
            </h4>
            <a href="#" className="mb-2 block text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]">
              AirAlam Mini
            </a>
            <a href="#" className="mb-2 block text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]">
              AirAlam Regular
            </a>
            <a href="#" className="mb-2 block text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]">
              AirAlam Galon
            </a>
            <a href="#" className="mb-2 block text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]">
              Produk Bisnis
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.5px] text-white/90">
              Kontak
            </h4>
            <a
              href="#"
              className="mb-2 flex items-start gap-2 text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]"
            >
              <i className="fa-solid fa-location-dot" />
              <span>Surabaya, Jawa Timur</span>
            </a>
            <a
              href="#"
              className="mb-2 flex items-start gap-2 text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]"
            >
              <i className="fa-solid fa-phone" />
              <span>0800-123-4567</span>
            </a>
            <a
              href="#"
              className="mb-2 flex items-start gap-2 text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]"
            >
              <i className="fa-solid fa-envelope" />
              <span>halo@airalam.id</span>
            </a>
            <a
              href="#"
              className="mb-2 flex items-start gap-2 text-sm text-white/[0.45] transition-colors hover:text-[#56c5f7]"
            >
              <i className="fa-solid fa-globe" />
              <span>www.airalam.id</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>(c) 2025 AirAlam. Semua hak dilindungi.</span>
          <span>Natural Freshness Everyday</span>
        </div>
      </footer>
    </main>
  );
}
