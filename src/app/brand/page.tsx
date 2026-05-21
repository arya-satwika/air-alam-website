import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata = {
  title: "AirAlam - Brand",
};

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader active="brand" />

      <section className="relative isolate overflow-hidden bg-slate-100 pt-28 sm:pt-32 lg:pt-36">
        <Image
          src="/botol-hero.png"
          alt="Brand AirAlam"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_38%,rgba(255,255,255,0.15)_58%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center justify-center px-4 pb-16 text-center sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-extrabold tracking-[-0.08em] text-slate-950 drop-shadow-[0_4px_18px_rgba(255,255,255,0.45)] sm:text-6xl lg:text-7xl">
              Brand{" "}
              <span className="bg-gradient-to-r from-[#5b7cff] to-[#8fe3ff] bg-clip-text text-transparent">
                AirAlam
              </span>
            </h1>

            <p className="mx-auto max-w-[880px] text-sm font-medium leading-8 text-white/90 sm:text-base">
              Identitas visual yang mencerminkan nilai kesegaran, kemurnian, dan
              kualitas premium dari AirAlam.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-300/10" />
            <h2 className="text-center text-3xl font-extrabold tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Filosofi Brand
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-300/10" />
          </div>

          <div className="overflow-hidden bg-[#4f78a8] shadow-[0_26px_60px_rgba(15,23,42,0.16)] lg:grid lg:grid-cols-[1fr_1.08fr]">
            <div className="relative min-h-[19rem] lg:min-h-[390px]">
              <Image
                src="/2.png"
                alt="Filosofi Brand AirAlam"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="bg-gradient-to-br from-[#2f5f92] to-[#4f88c7] p-8 text-white sm:p-10 lg:p-12">
              <h3 className="mb-6 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-[2rem]">
                FILOSOFI BRAND AIRALAM
              </h3>

            <div className="space-y-4 text-base leading-8 text-white/[0.82] sm:text-lg">
                <p>
                  AirAlam lahir dari keyakinan bahwa air minum berkualitas adalah
                  hak setiap orang. Nama &quot;AirAlam&quot; menggambarkan kesegaran
                  alami, kemurnian, dan keindahan alam Indonesia.
                </p>
                <p>
                  Identitas visual kami dirancang untuk mencerminkan nilai-nilai
                  inti: kesegaran, kemurnian, dan kepedulian terhadap alam. Setiap
                  elemen desain dipilih dengan cermat untuk mengkomunikasikan
                  komitmen kami terhadap kualitas premium dan keberlanjutan.
                </p>
              </div>

              <div className="mt-7 inline-flex rounded-2xl bg-white/15 px-5 py-4 text-lg font-bold sm:text-xl">
                &quot;Natural Freshness Everyday&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#4f8fe8] via-[#7fa4d3] to-[#8797a8] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto max-w-[1050px] text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Ingin Tahu Lebih Lanjut tentang Brand Kami?
          </h2>
          <p className="mx-auto mb-10 max-w-4xl text-lg leading-8 text-white/[0.82] sm:text-xl">
            Hubungi tim kami untuk informasi lebih detail mengenai brand guidelines
            dan kerjasama
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-[#3f7ddb] shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
