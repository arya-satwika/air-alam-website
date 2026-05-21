"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { SiteFooter } from "@/components/site-shell";

const operatingHours = [
  { day: "Senin - Jumat", time: "08:00 - 17:00" },
  { day: "Sabtu", time: "08:00 - 14:00" },
  { day: "Minggu", time: "Tutup" },
] as const;

const contactInfo = [
  { icon: "call", title: "Telepon", value: "0858-99999-252" },
  { icon: "mail", title: "Email", value: "info@airalam.co.id" },
  { icon: "chat", title: "WhatsApp", value: "0858-99999-252" },
  { icon: "photo_camera", title: "Instagram", value: "@airalamid" },
] as const;

const faqs = [
  {
    title: "Bagaimana cara memesan AirAlam dalam jumlah besar?",
    body: "Anda dapat menghubungi tim sales kami melalui WhatsApp atau email untuk pemesanan grosir. Kami menyediakan harga khusus untuk pembelian dalam jumlah besar.",
  },
  {
    title: "Apakah AirAlam tersedia di seluruh Indonesia?",
    body: "Ya, AirAlam tersedia di berbagai kota besar di Indonesia melalui jaringan distributor kami. Hubungi kami untuk informasi ketersediaan di daerah Anda.",
  },
  {
    title: "Apakah kemasan AirAlam ramah lingkungan?",
    body: "Semua kemasan AirAlam terbuat dari material BPA-free dan 100% dapat didaur ulang. Kami berkomitmen pada keberlanjutan lingkungan.",
  },
  {
    title: "Bagaimana cara menjadi mitra distributor AirAlam?",
    body: "Kami selalu terbuka untuk kerjasama dengan mitra baru. Silakan hubungi tim partnership kami untuk informasi lebih detail mengenai program kemitraan.",
  },
] as const;

export default function KontakPage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setPopupOpen(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-100 pt-[88px] sm:pt-[96px] lg:pt-[104px]">
        <Image
          src="/gambar8.jpeg"
          alt="Kontak AirAlam"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_38%,rgba(255,255,255,0.15)_58%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center justify-center px-4 pb-16 text-center sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-[clamp(42px,6vw,72px)] font-bold tracking-[-0.08em] text-slate-950 drop-shadow-[0_4px_18px_rgba(255,255,255,0.45)]">
              Hubungi Kami
            </h1>

            <p className="mx-auto max-w-[880px] text-sm font-medium leading-8 text-white/90 sm:text-base">
              Kami siap membantu anda. Jangan ragu untuk menghubungi tim AirAlam
              untuk pertanyaan, pemesanan, atau kerjasama.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -left-16 top-0 h-52 w-52 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-cyan-200/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-sky-700">
              Operational Hours
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
              Jam Operasional AirAlam
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-lg leading-8 text-slate-600 lg:mx-0">
              Kami siap melayani kebutuhan informasi, pemesanan, dan distribusi
              produk AirAlam setiap harinya.
            </p>
            <a
              href="#contact-form"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-sky-700"
            >
              Hubungi Kami
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {operatingHours.map((item) => (
              <div
                key={item.day}
                className="rounded-[26px] border border-slate-200 bg-white p-6 text-center shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-xl font-bold tracking-[-0.03em] text-slate-900">
                  {item.day}
                </h3>
                <span className="mt-4 block text-lg font-semibold text-sky-700">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-[34px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-10">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-sky-700">
              Contact Us
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl">
              Kirim Pesan
            </h2>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Nama
                </span>
                <input
                  type="text"
                  placeholder="Nama lengkap Anda"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Subject
                </span>
                <input
                  type="text"
                  placeholder="Masukkan subject"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Pesan
                </span>
                <textarea
                  placeholder="Tulis pesan Anda disini..."
                  rows={5}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-sky-700"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="rounded-[34px] bg-[radial-gradient(circle_at_top_left,rgba(91,124,255,0.16),transparent_34%),linear-gradient(135deg,#4f8fe8_0%,#7fa4d3_45%,#8797a8_100%)] p-8 text-white shadow-[0_24px_55px_rgba(15,23,42,0.12)] sm:p-10">
            <h2 className="text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">
              Informasi Kontak
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Anda dapat menghubungi tim AirAlam untuk informasi produk, pemesanan,
              kerja sama distribusi, maupun pertanyaan lainnya. Kami siap membantu
              Anda dengan layanan yang cepat dan ramah.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-md"
                >
                  <span className="material-icons-round text-[28px] text-white">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-white/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-50 to-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-sky-700">
              Location
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl">
              Lokasi Kami
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Jalan Prambanan Raya No. 128, RT.001/RW.016, Cibodas Baru, Kec.
              Cibodas, Kota Tangerang, Banten 15138.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jalan%20Prambanan%20Raya%20No.%20128%20Cibodas%20Baru%20Tangerang"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-sky-700"
            >
              Lihat di Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
            <iframe
              title="Lokasi AirAlam"
              src="https://www.google.com/maps?q=Jalan%20Prambanan%20Raya%20No.%20128%20Cibodas%20Baru%20Tangerang%20Banten%2015138&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-sky-700">
              FAQ AirAlam
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl">
              Pertanyaan Umum
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Temukan jawaban cepat untuk pertanyaan yang paling sering diajukan
              mengenai pemesanan, distribusi, kemasan, dan kerja sama AirAlam.
            </p>

            <div className="mt-8 overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
              <Image
                src="/gambar8.jpeg"
                alt="AirAlam FAQ"
                width={900}
                height={650}
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const open = index === openFaq;

              return (
                <div
                  key={faq.title}
                  className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left"
                  >
                    <span className="rounded-full bg-sky-50 px-3 py-2 text-sm font-extrabold text-sky-700">
                      0{index + 1}
                    </span>
                    <span className="flex-1 text-lg font-bold tracking-[-0.03em] text-slate-900">
                      {faq.title}
                    </span>
                    <span className="material-icons-round text-[28px] text-slate-500">
                      keyboard_arrow_down
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden px-5 pb-5">
                      <p className="text-base leading-8 text-slate-600">{faq.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),linear-gradient(135deg,#4f8fe8_0%,#7fa4d3_45%,#8797a8_100%)] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-bold backdrop-blur-md">
            Contact AirAlam
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Masih Punya Pertanyaan?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Tim kami siap membantu Anda kapan saja
          </p>
          <a
            href="mailto:info@airalam.co.id"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-[#3f7ddb] shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
          >
            Email Kami
          </a>
        </div>
      </section>

      {popupOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4">
          <div className="w-full max-w-md rounded-[28px] bg-white p-8 text-center shadow-[0_30px_70px_rgba(15,23,42,0.25)]">
            <span className="material-icons-round text-[56px] text-emerald-500">
              check_circle
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-950">
              Terima kasih telah menghubungi kami!
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Kami akan segera menghubungi Anda.
            </p>
            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-700"
            >
              Tutup
            </button>
          </div>
        </div>
      ) : null}

      <SiteFooter />
    </main>
  );
}
