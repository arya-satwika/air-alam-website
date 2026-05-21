import Link from "next/link";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "tentang", label: "Tentang", href: "/tentang" },
  { id: "brand", label: "Brand", href: "/brand" },
  { id: "produk", label: "Produk", href: "/produk" },
  { id: "kontak", label: "Kontak", href: "/#kontak" },
] as const;

type SiteHeaderProps = {
  active: (typeof navItems)[number]["id"];
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="text-[30px] font-extrabold tracking-[-0.05em] text-slate-900"
        >
          Air<span className="text-[#5197f1]">Alam</span>
        </Link>

        <nav className="ml-auto flex flex-1 items-center gap-4 overflow-x-auto whitespace-nowrap px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-6 lg:justify-center lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={item.id === active ? "page" : undefined}
              className={cx(
                "text-[11px] font-extrabold uppercase tracking-[0.28em] transition-colors duration-300 sm:text-[12px]",
                item.id === active ? "text-[#5197f1]" : "text-slate-700 hover:text-[#5197f1]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="#"
          aria-label="Cari"
          className="hidden h-10 w-10 items-center justify-center text-slate-900 transition hover:text-[#5197f1] lg:inline-flex"
        >
          <span className="material-icons-round text-[31px] font-semibold">
            search
          </span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const menuLinks = [
    { label: "Home", href: "/" },
    { label: "Tentang", href: "/tentang" },
    { label: "Brand", href: "/brand" },
    { label: "Produk", href: "/produk" },
  ];

  const productLinks = [
    { label: "AirAlam 330ml", href: "#" },
    { label: "AirAlam 600ml", href: "#" },
    { label: "AirAlam 1.5L", href: "#" },
    { label: "AirAlam Eco+", href: "#" },
  ];

  const contactLinks = [
    { icon: "mail", label: "info@airalam.co.id", href: "#" },
    { icon: "call", label: "0858-99999-252", href: "#" },
    { icon: "photo_camera", label: "@airalamid", href: "#" },
    { icon: "location_on", label: "Tangerang, Indonesia", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_30%),linear-gradient(135deg,#111827_0%,#1e293b_45%,#334155_100%)] px-4 pb-8 pt-20 text-white sm:px-6 lg:px-10 lg:pb-9 lg:pt-24">
      <div className="pointer-events-none absolute -left-20 top-[-80px] h-60 w-60 rounded-full bg-sky-400/20 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-28 right-[-90px] h-64 w-64 rounded-full bg-cyan-300/20 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] lg:gap-14">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-400 to-cyan-300 shadow-[0_12px_30px_rgba(96,165,250,0.35)]">
              <span className="material-icons-round text-[30px] text-white">
                water_drop
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.04em]">AirAlam</h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-white/70">
            Kesegaran alami dalam setiap tetes untuk gaya hidup sehat, modern,
            dan penuh keseimbangan.
          </p>

          <div className="mt-8 flex gap-3">
            {["language", "photo_camera", "smart_display"].map((icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition hover:-translate-y-1 hover:bg-gradient-to-br hover:from-sky-400 hover:to-cyan-300 hover:shadow-[0_14px_30px_rgba(96,165,250,0.35)]"
              >
                <span className="material-icons-round text-[23px]">{icon}</span>
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
                <span className="material-icons-round text-[21px]">chevron_right</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-7 text-2xl font-bold">Produk</h3>
          <div className="space-y-4">
            {productLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 text-[17px] text-white/70 transition hover:translate-x-1 hover:text-cyan-300"
              >
                <span className="material-icons-round text-[21px]">chevron_right</span>
                {link.label}
              </Link>
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
                <span className="material-icons-round text-[21px]">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-[1280px]">
        <div className="mb-7 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="text-center text-sm text-white/60">
          (c) 2026 AirAlam. Natural Freshness Everyday.
        </p>
      </div>
    </footer>
  );
}
