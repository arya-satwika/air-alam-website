import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AirAlam - Brand",
};

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Brand", href: "/brand" },
  { label: "Produk", href: "/produk" },
] as const;

const productLinks = [
  { label: "AirAlam 330ml", href: "#" },
  { label: "AirAlam 600ml", href: "#" },
  { label: "AirAlam 1.5L", href: "#" },
  { label: "AirAlam Eco+", href: "#" },
] as const;

const contactLinks = [
  { icon: "mail", label: "info@airalam.co.id", href: "mailto:info@airalam.co.id" },
  { icon: "call", label: "0858-99999-252", href: "tel:+6285899999252" },
  { icon: "photo_camera", label: "@airalamid", href: "#" },
  { icon: "location_on", label: "Tangerang, Indonesia", href: "#" },
] as const;

const socialLinks = [
  { icon: "language", label: "Website", href: "#" },
  { icon: "photo_camera", label: "Instagram", href: "#" },
  { icon: "smart_display", label: "YouTube", href: "#" },
] as const;

function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "water_drop":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z" />
        </svg>
      );
    case "language":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.7 4 6.1 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6.1-4-9s1.5-6.3 4-9z" />
        </svg>
      );
    case "photo_camera":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "smart_display":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "call":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.6-.35c1.1.38 2.3.58 3.5.58a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5C10.1 21.5 2.5 13.9 2.5 4a1.5 1.5 0 0 1 1.5-1.5h2.4A1.5 1.5 0 0 1 7.9 4c0 1.2.2 2.4.58 3.5a1.5 1.5 0 0 1-.35 1.6l-1.53 1.7z" />
        </svg>
      );
    case "location_on":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "chevron_right":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function BrandPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-100 pt-[88px] sm:pt-[96px] lg:pt-[104px]">
        <Image
          src="/gambar8.png"
          alt="Brand AirAlam"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.72)_38%,rgba(255,255,255,0.15)_58%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center justify-center px-4 pb-16 text-center sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-[clamp(42px,6vw,72px)] font-bold tracking-[-0.08em] text-slate-950 drop-shadow-[0_4px_18px_rgba(255,255,255,0.45)]">
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

      <footer className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_30%),linear-gradient(135deg,#111827_0%,#1e293b_45%,#334155_100%)] px-4 pb-8 pt-20 text-white sm:px-6 lg:px-10 lg:pb-9 lg:pt-24">
        <div className="pointer-events-none absolute -left-20 top-[-80px] h-60 w-60 rounded-full bg-sky-400/20 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-28 right-[-90px] h-64 w-64 rounded-full bg-cyan-300/20 blur-[90px]" />

        <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] lg:gap-14">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-400 to-cyan-300 shadow-[0_12px_30px_rgba(96,165,250,0.35)]">
                <Icon name="water_drop" className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-4xl font-bold tracking-[-0.04em]">AirAlam</h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-white/70">
              Kesegaran alami dalam setiap tetes untuk gaya hidup sehat, modern,
              dan penuh keseimbangan.
            </p>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition hover:-translate-y-1 hover:bg-gradient-to-br hover:from-sky-400 hover:to-cyan-300 hover:shadow-[0_14px_30px_rgba(96,165,250,0.35)]"
                >
                  <Icon name={link.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-7 text-2xl font-bold">Menu</h3>
            <div className="space-y-4">
              {menuLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-[17px] text-white/70 transition hover:translate-x-1 hover:text-cyan-300"
                >
                  <Icon name="chevron_right" className="h-5 w-5" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-7 text-2xl font-bold">Produk</h3>
            <div className="space-y-4">
              {productLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-[17px] text-white/70 transition hover:translate-x-1 hover:text-cyan-300"
                >
                  <Icon name="chevron_right" className="h-5 w-5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-7 text-2xl font-bold">Hubungi Kami</h3>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-[17px] text-white/70 transition hover:translate-x-1 hover:text-cyan-300"
                >
                  <Icon name={link.icon} className="h-5 w-5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-[1280px]">
          <div className="mb-7 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="text-center text-sm text-white/60">
            © 2026 AirAlam. Natural Freshness Everyday.
          </p>
        </div>
      </footer>
    </main>
  );
}
