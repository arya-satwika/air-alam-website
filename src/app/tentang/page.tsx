"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const historyData = [
  {
    image: "botol-hero.png",
    title: "Sejarah Kami",
    subtitle: "Awal Perjalanan AirAlam",
    desc: "AirAlam didirikan pada tahun 1994 dengan visi sederhana namun kuat: menyediakan air minum berkualitas premium yang terjangkau untuk seluruh masyarakat Indonesia.",
  },
  {
    image: "2.png",
    title: "Sejarah Kami",
    subtitle: "Berkembang Bersama Kualitas",
    desc: "Berawal dari satu fasilitas produksi kecil, kini AirAlam telah berkembang menjadi salah satu produsen air minum terkemuka dengan jangkauan distribusi di seluruh nusantara. Perjalanan kami didorong oleh komitmen tanpa henti terhadap kualitas, inovasi, dan keberlanjutan.",
  },
  {
    image: "330ml.png",
    title: "Sejarah Kami",
    subtitle: "Komitmen Untuk Indonesia",
    desc: "Setiap hari, kami melayani jutaan pelanggan yang mempercayai AirAlam sebagai pilihan mereka untuk hidup lebih sehat. Ini bukan hanya tentang bisnis, tetapi tentang membuat perbedaan nyata dalam kehidupan masyarakat.",
  },
] as const;

const values = [
  {
    icon: "water_drop",
    title: "Kualitas Premium",
    body: "Setiap botol AirAlam melalui kontrol kualitas ketat dengan standar internasional untuk memastikan kemurnian dan kesegaran.",
  },
  {
    icon: "eco",
    title: "Sustainability",
    body: "Kami berkomitmen pada praktik ramah lingkungan, dari sumber air hingga kemasan yang dapat didaur ulang.",
  },
  {
    icon: "verified_user",
    title: "Keamanan Terjamin",
    body: "Proses produksi higienis dengan sertifikasi BPOM dan ISO untuk menjamin keamanan produk kami.",
  },
  {
    icon: "favorite_border",
    title: "Kesehatan Masyarakat",
    body: "Misi kami adalah meningkatkan kualitas hidup masyarakat melalui akses air minum berkualitas.",
  },
] as const;

const journeyPoints = [
  {
    year: "1994",
    title: "Pendirian AirAlam",
    body: "Berawal dari visi menyediakan air minum berkualitas tinggi untuk masyarakat Indonesia.",
    position: "lg:left-[85px] lg:top-[10px]",
    align: "left",
  },
  {
    year: "2000",
    title: "Pengembangan Distribusi",
    body: "Memperluas jaringan distribusi ke berbagai wilayah untuk memenuhi kebutuhan konsumen.",
    position: "lg:left-[-25px] lg:top-[210px]",
    align: "left",
  },
  {
    year: "2008",
    title: "Modernisasi Produk",
    body: "Mengadopsi teknologi penyaringan dan pengemasan modern untuk menjaga kualitas produk.",
    position: "lg:left-[85px] lg:bottom-[10px]",
    align: "left",
  },
  {
    year: "2015",
    title: "Sertifikasi dan Standar Kualitas",
    body: "Memperoleh sertifikasi mutu dan keamanan pangan sebagai komitmen terhadap kualitas.",
    position: "lg:right-[35px] lg:top-[90px]",
    align: "right",
  },
  {
    year: "2022",
    title: "Inisiatif Ramah Lingkungan",
    body: "Menerapkan program keberlanjutan melalui kemasan ramah lingkungan dan efisiensi produksi.",
    position: "lg:right-[35px] lg:bottom-[80px]",
    align: "right",
  },
] as const;

const productionLeft = [
  {
    step: "01",
    title: "Sumber Air Alami",
    body: "Air diambil dari sumber pegunungan pilihan yang terjaga kelestariannya.",
  },
  {
    step: "02",
    title: "Penyaringan 7 Tahap",
    body: "Proses filtrasi canggih untuk menghilangkan kontaminan dan menjaga mineral alami.",
  },
  {
    step: "03",
    title: "Sterilisasi UV",
    body: "Teknologi UV untuk memastikan bebas dari bakteri dan mikroorganisme berbahaya.",
  },
] as const;

const productionRight = [
  {
    step: "04",
    title: "Quality Control",
    body: "Pengujian laboratorium ketat di setiap batch produksi.",
  },
  {
    step: "05",
    title: "Pengemasan Higienis",
    body: "Botol food-grade BPA-free yang aman dan menjaga kesegaran.",
  },
  {
    step: "06",
    title: "Distribusi Terpercaya",
    body: "Sistem distribusi efisien untuk memastikan produk sampai dalam kondisi prima.",
  },
] as const;

const qualityCards = [
  { image: "/330ml.png", title: "Sertifikasi BPOM" },
  { image: "/500ml.png", title: "ISO 9001:2015" },
  { image: "/600ml.png", title: "Eco-Friendly" },
  { image: "/1500ml.png", title: "1M+ Pelanggan" },
] as const;

export default function TentangPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    setImageVisible(false);

    const timer = window.setTimeout(() => {
      setDisplayIndex(currentIndex);
      setImageVisible(true);
    }, 260);

    return () => window.clearTimeout(timer);
  }, [currentIndex]);

  const slide = historyData[displayIndex];
  const slideNumber = `${String(displayIndex + 1).padStart(2, "0")} / ${String(
    historyData.length,
  ).padStart(2, "0")}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader active="tentang" />

      <section className="relative isolate overflow-hidden bg-slate-100 pt-28 sm:pt-32 lg:pt-36">
        <Image
          src="/gambar8.jpeg"
          alt="Tentang AirAlam"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_38%,rgba(255,255,255,0.15)_58%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center justify-center px-4 pb-16 text-center sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-extrabold tracking-[-0.08em] text-slate-950 drop-shadow-[0_4px_18px_rgba(255,255,255,0.45)] sm:text-6xl lg:text-7xl">
              Tentang{" "}
              <span className="bg-gradient-to-r from-[#5b7cff] to-[#8fe3ff] bg-clip-text text-transparent">
                AirAlam
              </span>
            </h1>

            <p className="mx-auto max-w-[880px] text-sm font-medium leading-8 text-white/90 sm:text-base">
              Lebih dari sekedar air minum. Kami adalah komitmen untuk kesehatan
              dan kesejahteraan Anda. AirAlam hadir membawa kemurnian alami yang
              terinspirasi langsung dari kesejukan alam Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="space-y-5">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-cyan-700/20 bg-cyan-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-cyan-700 lg:mx-0">
              AirAlam Story
            </div>

            <div className="mx-auto w-full max-w-[430px] lg:mx-0 lg:max-w-none">
              <div className="relative mx-auto h-[420px] w-[280px] sm:h-[500px] sm:w-[380px] lg:h-[560px] lg:w-[430px]">
                <div className="absolute -left-6 -top-6 h-[calc(100%-40px)] w-[calc(100%-40px)] rounded-[40px] border border-slate-500/30" />
                <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />

                <div className="relative h-full overflow-hidden rounded-[32px] bg-slate-100 shadow-[0_30px_70px_rgba(15,23,42,0.18)]">
                  <Image
                    key={slide.image}
                    src={`/${slide.image}`}
                    alt="Sejarah AirAlam"
                    fill
                    className={`object-cover object-center transition duration-300 ${imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
                  <div className="absolute left-5 bottom-5 rounded-full border border-white/40 bg-white/15 px-3.5 py-2 text-sm tracking-[0.18em] text-white backdrop-blur-md">
                    {slideNumber}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-slate-200 bg-white text-slate-900 shadow-[0_14px_35px_rgba(15,23,42,0.1)] transition hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) => (prev - 1 + historyData.length) % historyData.length)
                  }
                >
                  <span className="material-icons-round text-[28px]">west</span>
                </button>

                <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3">
                  {historyData.map((_, index) => (
                    <span
                      key={`dot-${index}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-7 bg-gradient-to-r from-[#5069b7] to-[#5aa9b8]" : "w-2 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-slate-200 bg-white text-slate-900 shadow-[0_14px_35px_rgba(15,23,42,0.1)] transition hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % historyData.length)
                  }
                >
                  <span className="material-icons-round text-[28px]">east</span>
                </button>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-700/20 bg-cyan-50 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.28em] text-cyan-700">
              AirAlam Story
            </span>
            <h2 className="mt-7 text-5xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-6xl">
              {slide.title}
            </h2>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-800 sm:text-[26px]">
              {slide.subtitle}
            </h3>
            <div className="my-8 h-0.5 w-28 bg-gradient-to-r from-[#5069b7] to-transparent lg:mx-0 mx-auto" />
            <p className="mx-auto max-w-[610px] text-lg leading-8 text-slate-600 lg:mx-0 sm:text-[18px]">
              {slide.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_18rem_1fr] lg:items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-6xl">
              Visi Kami
            </h2>
            <p className="mx-auto mt-6 max-w-[440px] text-lg leading-8 text-slate-600 lg:mx-0">
              Menjadi brand air minum pilihan utama di Indonesia yang dikenal
              dengan standar kualitas tertinggi, inovasi berkelanjutan, dan
              kontribusi nyata terhadap kesehatan masyarakat serta kelestarian
              lingkungan.
            </p>
          </div>

          <div className="relative mx-auto flex h-[300px] w-full max-w-[340px] items-end justify-center sm:h-[340px]">
            <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 animate-spin text-4xl text-sky-300 [animation-duration:8s]">
              ❋
            </div>
            <Image
              src="/600ml.png"
              alt="Botol AirAlam"
              fill
              className="object-contain object-bottom drop-shadow-[0_28px_32px_rgba(15,23,42,0.18)]"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-6xl">
              Misi Kami
            </h2>
            <ul className="mx-auto mt-6 max-w-[500px] space-y-5 text-lg leading-8 text-slate-600 lg:mx-0">
              <li>• Menyediakan air minum berkualitas premium dengan harga terjangkau.</li>
              <li>• Menerapkan praktik produksi yang ramah lingkungan dan berkelanjutan.</li>
              <li>• Berinovasi terus-menerus untuk meningkatkan kualitas produk.</li>
              <li>• Memberikan nilai terbaik kepada pelanggan, mitra, dan stakeholder.</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t-2 border-slate-800 pt-4">
          <span className="font-extrabold tracking-[-0.03em] text-slate-950">
            AirAlam
          </span>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.6fr]">
          <div className="text-center lg:sticky lg:top-24 lg:text-left">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.28em] text-cyan-700 lg:mx-0">
              AirAlam Values
            </span>
            <h2 className="mt-6 text-5xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-6xl">
              Nilai-Nilai Kami
            </h2>
            <p className="mx-auto mt-5 max-w-[390px] text-lg leading-8 text-slate-600 lg:mx-0">
              Prinsip yang memandu setiap keputusan dan tindakan kami untuk menjaga
              kualitas, kepercayaan, serta keberlanjutan dalam setiap botol AirAlam.
            </p>
          </div>

          <div className="grid overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative overflow-hidden border-b border-r border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50/60 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span className="mb-7 inline-block text-lg font-extrabold text-cyan-500">
                  0{index + 1}
                </span>
                <div className="relative z-10 flex gap-5 max-sm:flex-col">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-400 text-white shadow-lg shadow-sky-400/20">
                    <span className="material-icons-round text-[30px]">{value.icon}</span>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-slate-800">
                      {value.title}
                    </h3>
                    <p className="text-base leading-7 text-slate-600">{value.body}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-200/20 transition group-hover:scale-125" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex text-[11px] font-extrabold uppercase tracking-[0.28em] text-cyan-700">
              AirAlam Journey
            </span>
            <h2 className="text-5xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-6xl">
              Perjalanan Penting AirAlam
            </h2>
            <p className="mt-4 text-xl text-slate-500">Milestone penting dalam sejarah AirAlam</p>
          </div>

          <div className="relative flex flex-col gap-4 lg:min-h-[555px]">
            <div className="mx-auto h-[330px] w-[220px] overflow-hidden rounded-[999px] shadow-[0_30px_70px_rgba(15,23,42,0.16)] sm:h-[360px] sm:w-[240px] lg:absolute lg:left-1/2 lg:top-12 lg:h-[435px] lg:w-[285px] lg:-translate-x-1/2">
              <Image
                src="/1500ml.png"
                alt="Perjalanan AirAlam"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 rounded-[999px] border-[10px] border-white/85" />
            </div>

            {journeyPoints.map((point) => (
              <div
                key={point.year}
                className={`rounded-[28px] border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur-sm lg:absolute lg:w-[340px] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${point.position} ${point.align === "right" ? "lg:text-right" : "lg:text-left"}`}
              >
                <span className="mb-2 block text-base font-extrabold text-cyan-700">
                  [{point.year}]
                </span>
                <h3 className="mb-2 text-2xl font-bold tracking-[-0.04em] text-slate-900">
                  {point.title}
                </h3>
                <p className="text-base leading-7 text-slate-600">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-50 to-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_1px_0.65fr_1px_0.65fr] lg:items-stretch">
            <div className="relative">
              <h2 className="text-5xl font-extrabold tracking-[-0.08em] text-slate-950 sm:text-6xl lg:text-[4.5rem] lg:leading-none">
                PROSES
                <br />
                PRODUKSI
                <br />
                KAMI
              </h2>

              <p className="mt-6 max-w-[520px] text-lg leading-8 text-slate-500">
                Setiap botol melalui proses ketat untuk memastikan kualitas terbaik
              </p>

              <div className="mt-10 overflow-hidden rounded-2xl">
                <Image
                  src="/500ml.png"
                  alt="Proses Produksi AirAlam"
                  width={760}
                  height={520}
                  className="h-[250px] w-full object-cover sm:h-[280px] lg:w-[380px]"
                />
              </div>

              <div className="hidden text-5xl text-sky-300 lg:absolute lg:right-10 lg:bottom-24 lg:block">
                ✦
              </div>
            </div>

            <div className="hidden w-px bg-black/30 lg:block" />

            <div className="space-y-10 py-2">
              {productionLeft.map((item) => (
                <div key={item.step} className="max-w-[260px]">
                  <span className="mb-3 block text-base font-extrabold text-sky-500">
                    {item.step}
                  </span>
                  <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="hidden w-px bg-black/30 lg:block" />

            <div className="space-y-10 py-2">
              {productionRight.map((item) => (
                <div key={item.step} className="max-w-[260px]">
                  <span className="mb-3 block text-base font-extrabold text-sky-500">
                    {item.step}
                  </span>
                  <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_15%,rgba(255,255,255,0.18),transparent_26%),linear-gradient(135deg,#3394fc_0%,#7f92a5_52%,#72869a_100%)] px-4 py-20 text-white sm:px-6 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute left-[-72px] top-10 hidden h-[155px] text-[155px] font-extrabold leading-none text-white/7 lg:block [writing-mode:vertical-rl] rotate-180">
          Quality
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="mb-6 inline-flex rounded-full border border-white/15 bg-white/15 px-6 py-3 text-sm font-bold text-white/95 backdrop-blur-md">
              Standar Kualitas Tertinggi
            </span>

            <h2 className="mb-6 text-5xl font-extrabold tracking-[-0.08em] sm:text-6xl lg:text-[4.4rem] lg:leading-none">
              Komitmen Kualitas
              <br />
              Tanpa Kompromi
            </h2>

            <p className="mx-auto max-w-4xl text-lg leading-8 text-white/[0.78]">
              Setiap botol AirAlam diproduksi dengan standar kualitas internasional.
              Kami memiliki sertifikasi BPOM, ISO 9001, dan berbagai penghargaan
              industri yang membuktikan dedikasi kami terhadap excellence.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {qualityCards.map((card) => (
              <div
                key={card.title}
                className="group relative h-64 overflow-hidden rounded-2xl bg-slate-900 shadow-[0_22px_45px_rgba(15,23,42,0.18)]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center grayscale-[20%] transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/35" />
                <div className="absolute left-1/2 top-[-10px] z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[6px] border-slate-200 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.45)]" />
                <div className="absolute inset-0 z-10 flex items-start justify-center p-8 text-center">
                  <h3 className="text-3xl font-extrabold tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
