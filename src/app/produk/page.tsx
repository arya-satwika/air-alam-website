export const metadata = {
  title: "AirAlam - Produk",
};

export default function ProdukPage() {
  return (
    <div>
      <style>{`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: #fff;
  color: #172033;
}

/* Navbar & Hero Section Start */
.hero {
  height: 70vh;

  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.72) 38%,
      rgba(255, 255, 255, 0.15) 58%,
      rgba(0, 0, 0, 0.08) 100%
    ),
    url("/botol-hero.png");
  background-size: cover;
  background-position: center;
  padding: 24px 70px;
  position: relative;
  overflow: hidden;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;
  padding: 0 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  z-index: 9999;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);
}

.nav-logo {
  font-family: "Outfit", sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: #172033;
  text-decoration: none;
  letter-spacing: -1px;
}

.nav-logo span {
  color: #5197f1;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 42px;
  background: transparent;
  padding: 0;
  box-shadow: none;
  border-radius: 0;
}

.nav-menu a {
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none;
  color: #1f2937;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 0;
  border-radius: 0;
  transition: 0.3s ease;
}

.nav-menu a.active,
.nav-menu a:hover {
  background: transparent;
  color: #5197f1;
}

.nav-search {
  text-decoration: none;
  color: #172033;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-search span {
  font-size: 31px;
  font-weight: 600;
}

.hero-content {
  text-align: center;
  max-width: 1000px;
  margin: 160px auto 0;
  position: relative;
  z-index: 2;
}

h1 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 1.05;
  color: #111;
  font-weight: 700;
  letter-spacing: -3px;
  margin-bottom: 20px;
  text-shadow: 0 4px 18px rgba(255, 255, 255, 0.45);
}

.blue-text {
  font-family: "Allura", cursive;
  font-size: 1.2em;
  font-weight: normal;

  background: linear-gradient(90deg, #5b7cff, #8fe3ff);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  letter-spacing: 1px;

  text-shadow:
    0 2px 8px rgba(91, 124, 255, 0.35),
    0 4px 18px rgba(143, 227, 255, 0.28),
    0 0 30px rgba(143, 227, 255, 0.22);

  opacity: 0.98;
}

.desc {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.92);
  max-width: 880px;
  margin: auto;
  font-weight: 500;
}

/* Navbar & Hero Section End */
      `}</style>

      <section className="hero">
        <nav className="navbar">
          <a href="/" className="nav-logo">
            Air<span>Alam</span>
          </a>

          <div className="nav-menu">
            <a href="/">Home</a>
            <a href="/tentang">Tentang</a>
            <a href="/brand">Brand</a>
            <a href="/produk" className="active">
              Produk
            </a>
            <a href="/#kontak">Kontak</a>
          </div>

          <a href="#" className="nav-search">
            <span className="material-icons-round">search</span>
          </a>
        </nav>

        <div className="hero-content">
          <h1>
            Produk <span className="blue-text">AirAlam</span>
          </h1>

          <p className="desc">
            Berbagai pilihan ukuran untuk memenuhi kebutuhan hidrasi Anda setiap
            hari
          </p>
        </div>
      </section>
    </div>
  );
}
