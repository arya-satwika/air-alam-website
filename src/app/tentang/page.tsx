"use client";

import { useEffect, useRef, useState } from "react";

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
];

export default function TentangPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    img.style.opacity = "0";
    img.style.transform = "scale(1.04)";

    const timer = window.setTimeout(() => {
      setDisplayIndex(currentIndex);
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    }, 260);

    return () => window.clearTimeout(timer);
  }, [currentIndex]);

  const slide = historyData[displayIndex];
  const slideNumber = `${String(displayIndex + 1).padStart(2, "0")} / ${String(
    historyData.length
  ).padStart(2, "0")}`;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % historyData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + historyData.length) % historyData.length);
  };

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
    url("/gambar8.jpeg");
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

/* History Section Start */
.history-section {
  background: #fff;
  padding: 120px 70px;
  overflow: hidden;
}

.history-container {
  max-width: 1180px;
  margin: auto;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 90px;
  align-items: center;
}

.modern-slider {
  position: relative;
  width: 100%;
}

.image-stage {
  position: relative;
  width: 430px;
  height: 560px;
  margin: auto;
}

.image-outline {
  position: absolute;
  width: 390px;
  height: 500px;
  border: 1.7px solid rgba(31, 41, 55, 0.28);
  top: -26px;
  left: -26px;
  z-index: 1;
}

.image-glow {
  position: absolute;
  inset: 40px -30px -30px 40px;
  background: linear-gradient(135deg, rgba(80, 105, 183, 0.18), rgba(90, 169, 184, 0.12));
  filter: blur(35px);
  border-radius: 40px;
  z-index: 0;
}

.image-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  background: #eef3f6;
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.18);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: 0.55s ease;
}

.image-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.18));
  pointer-events: none;
}

.slide-number {
  position: absolute;
  left: 26px;
  bottom: 24px;
  z-index: 3;
  color: #fff;
  font-family: "Outfit", sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.38);
  backdrop-filter: blur(12px);
  padding: 9px 14px;
  border-radius: 999px;
}

.slider-controls {
  margin-top: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
}

.control-btn {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  border: 1px solid rgba(23, 32, 51, 0.1);
  background: #ffffff;
  color: #172033;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.1);
  transition: 0.3s ease;
}

.control-btn span {
  font-size: 28px;
}

.control-btn:hover {
  background: #172033;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
}

.dots {
  display: flex;
  align-items: center;
  gap: 9px;
  background: #f4f7fa;
  padding: 10px 14px;
  border-radius: 999px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #cbd5e1;
  transition: 0.3s ease;
}

.dot.active {
  width: 28px;
  background: linear-gradient(90deg, #5069b7, #5aa9b8);
}

.history-text {
  position: relative;
}

.history-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #5a9cad;
  background: rgba(90, 169, 184, 0.1);
  border: 1px solid rgba(90, 169, 184, 0.28);
  padding: 11px 18px;
  border-radius: 999px;
  margin-bottom: 28px;
}

.history-label::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5aa9b8;
}

.history-text h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(44px, 5vw, 66px);
  line-height: 1;
  letter-spacing: -3px;
  color: #111827;
  margin-bottom: 22px;
}

.history-text h3 {
  font-family: "Outfit", sans-serif;
  font-size: 26px;
  line-height: 1.35;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 22px;
}

.history-text p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  line-height: 2;
  color: #66728a;
  max-width: 610px;
  font-weight: 500;
}

.text-line {
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, #5069b7, transparent);
  margin: 30px 0;
}

/* History Section End */

/* Vision Mission Section Start */
.vision-mission-section {
  background: #ffffff;
  padding: 105px 70px 95px;
  position: relative;
  overflow: hidden;
}

.vm-container {
  max-width: 1220px;
  margin: auto;
  min-height: 520px;
  display: grid;
  grid-template-columns: 1fr 360px 1fr;
  align-items: start;
  gap: 56px;
  position: relative;
}

.vm-text {
  padding-top: 24px;
  position: relative;
  z-index: 2;
}

.vm-text.mission {
  padding-left: 22px;
  margin-left: -90px;
}

.vm-text.vision {
  margin-left: 50px;
  margin-right: -60px;
}

.vm-text h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(54px, 6vw, 10px);
  line-height: 0.95;
  letter-spacing: -4px;
  color: #141414;
  margin-bottom: 28px;
  font-weight: 800;
}

.vm-text p,
.vm-text li {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  line-height: 1.65;
  color: #4f5664;
  font-weight: 500;
}

.vm-text p {
  max-width: 440px;
}

.vm-text ul {
  max-width: 500px;
  list-style: none;
}

.vm-text li {
  margin-bottom: 40px;
}

.vm-text li::before {
  content: "•";
  color: #5aa9b8;
  font-weight: 800;
  margin-right: 12px;
}

.vm-bottle-wrap {
  align-self: end;
  justify-self: center;
  width: 340px;
  height: 430px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.vm-bottle {
  max-width: 310px;
  max-height: 420px;
  object-fit: contain;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 28px 32px rgba(15, 23, 42, 0.18));
}

.vm-footer-line {
  max-width: 1220px;
  margin: 48px auto 0;
  position: relative;
  padding-top: 18px;
  border-top: 3px solid rgba(23, 32, 51, 0.78);
}

.vm-footer-line span {
  position: absolute;
  left: 0;
  top: -34px;
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #172033;
  letter-spacing: -0.4px;
}

/* Vision Mission Section End */

.star-spin {
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 42px;
  color: #8fe3ff;
  text-shadow:
    0 0 12px rgba(143, 227, 255, 0.7),
    0 0 30px rgba(91, 124, 255, 0.45);
  animation: spinStar 8s linear infinite;
  z-index: 5;
}

@keyframes spinStar {
  from {
    transform: translateX(-50%) rotate(0deg);
  }

  to {
    transform: translateX(-50%) rotate(360deg);
  }
}

/* Values Section Start */
.values-section {
  background: #ffffff;
  padding: 95px 70px 120px;
  position: relative;
  overflow: hidden;
}

.values-container {
  max-width: 1220px;
  margin: auto;
  display: grid;
  grid-template-columns: 0.82fr 1.6fr;
  gap: 72px;
  align-items: start;
}

.values-intro {
  position: sticky;
  top: 90px;
  padding-top: 10px;
}

.values-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #5aa9b8;
  margin-bottom: 22px;
}

.values-label::before {
  content: "";
  width: 34px;
  height: 2px;
  background: linear-gradient(90deg, #5aa9b8, transparent);
}

.values-intro h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(40px, 4.8vw, 64px);
  line-height: 1.02;
  letter-spacing: -3px;
  color: #141414;
  font-weight: 800;
  margin-bottom: 20px;
  max-width: 390px;
}

.values-intro p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 17px;
  line-height: 1.9;
  color: #6b7588;
  max-width: 390px;
  font-weight: 500;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-left: 1px solid rgba(23, 32, 51, 0.08);
  border-top: 1px solid rgba(23, 32, 51, 0.08);
}

.value-card {
  min-height: 220px;
  padding: 34px 34px 32px;
  border-right: 1px solid rgba(23, 32, 51, 0.08);
  border-bottom: 1px solid rgba(23, 32, 51, 0.08);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(245, 250, 253, 0.72));
  transition: 0.35s ease;
  position: relative;
  overflow: hidden;
}

.value-card::after {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  right: -55px;
  bottom: -55px;
  border-radius: 50%;
  background: rgba(143, 227, 255, 0.14);
  transition: 0.35s ease;
}

.value-card:hover {
  transform: translateY(-6px);
  background: #ffffff;
  box-shadow: 0 24px 55px rgba(15, 23, 42, 0.1);
  z-index: 2;
}

.value-card:hover::after {
  transform: scale(1.35);
  background: rgba(90, 169, 184, 0.13);
}

.value-number {
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #6fa7bc;
  margin-bottom: 28px;
  display: inline-block;
}

.value-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  position: relative;
  z-index: 2;
}

.value-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: linear-gradient(135deg, #6da7f2, #7fc8ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 16px 30px rgba(109, 167, 242, 0.22);
}

.value-icon span {
  font-size: 30px;
  color: #ffffff;
}

.value-text h3 {
  font-family: "Outfit", sans-serif;
  font-size: 24px;
  line-height: 1.2;
  color: #1f2937;
  margin-bottom: 12px;
  font-weight: 700;
}

.value-text p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  line-height: 1.75;
  color: #6b7588;
  font-weight: 500;
}

/* Values Section End */

/* Journey Section Start */
.journey-section {
  background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
  padding: 105px 70px 130px;
  overflow: hidden;
}

.journey-wrap {
  max-width: 1220px;
  margin: auto;
}

.journey-heading {
  text-align: center;
  margin-bottom: 55px;
}

.journey-heading span {
  display: inline-block;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #5aa9b8;
  margin-bottom: 16px;
}

.journey-heading h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(44px, 5vw, 66px);
  line-height: 1.05;
  color: #111827;
  font-weight: 800;
  letter-spacing: -3px;
  margin-bottom: 16px;
}

.journey-heading p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 20px;
  color: #6f7d94;
  font-weight: 500;
}

.journey-content {
  min-height: 555px;
  position: relative;
}

.journey-center {
  width: 285px;
  height: 435px;
  border-radius: 999px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.16);
}

.journey-center::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 10px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  z-index: 2;
}

.journey-center img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.journey-point {
  position: absolute;
  width: 340px;
  padding: 0;
  border-radius: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  backdrop-filter: none;
}

.journey-point span {
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #00a2dd;
  display: inline-block;
  margin-bottom: 10px;
}

.journey-point h3 {
  font-family: "Outfit", sans-serif;
  font-size: 23px;
  color: #172033;
  margin-bottom: 10px;
}

.journey-point p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: #66728a;
}

.journey-point.left {
  text-align: left;
}

.journey-point.right {
  text-align: right;
}

.point-1 {
  left: 85px;
  top: 10px;
}

.point-2 {
  left: -25px;
  top: 210px;
}

.point-3 {
  left: 85px;
  bottom: 10px;
}

.point-4 {
  right: 35px;
  top: 90px;
}

.point-5 {
  right: 35px;
  bottom: 80px;
}
/* Journey Section End */

/* Production Section Start */
.production-section {
  background: linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
  padding: 110px 70px 120px;
  overflow: hidden;
}

.production-wrap {
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.55fr 1px 0.65fr 1px 0.65fr;
  gap: 36px;
  align-items: stretch;
}

.production-left h2 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(54px, 5.5vw, 70px);
  line-height: 0.92;
  font-weight: 800;
  letter-spacing: -5px;
  color: #0f172a;
  margin-bottom: 22px;
}

.production-subtitle {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  line-height: 1.7;
  color: #6f7d94;
  max-width: 520px;
  margin-bottom: 90px;
  font-weight: 500;
}

.production-photo {
  width: 380px;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 28px;
}

.production-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.production-line {
  width: 1px;
  background: rgba(0, 0, 0, 0.28);
}

.production-middle,
.production-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 55px 0 20px;
}

.process-item {
  max-width: 260px;
}

.process-item span {
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: #5b9be6;
  display: inline-block;
  margin-bottom: 12px;
}

.process-item h3 {
  font-family: "Outfit", sans-serif;
  font-size: 23px;
  line-height: 1.2;
  font-weight: 700;
  color: #172033;
  margin-bottom: 14px;
  text-transform: none;
  letter-spacing: -1px;
}

.process-item p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: #66728a;
  font-weight: 500;
}

.production-left {
  position: relative;
  padding-left: 40px;
}
.production-star {
  position: absolute;
  right: 53px;
  bottom: 120px;

  font-size: 55px;
  color: #9ecbff;

  text-shadow:
    0 0 12px rgba(158, 203, 255, 0.65),
    0 0 28px rgba(91, 155, 230, 0.35);

  animation: rotateProductionStar 10s linear infinite;
}

@keyframes rotateProductionStar {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Production Section End */

/* Quality Section Start */
.quality-section {
  background:
    radial-gradient(circle at 12% 15%, rgba(255, 255, 255, 0.18), transparent 26%),
    linear-gradient(135deg, #3394fc 0%, #7f92a5 52%, #72869a 100%);
  padding: 105px 70px 95px;
  overflow: hidden;
  position: relative;
}

.quality-section::before {
  content: "Quality";
  position: absolute;
  left: -72px;
  top: 45px;
  font-family: "Outfit", sans-serif;
  font-size: 155px;
  line-height: 1;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.07);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  pointer-events: none;
}

.quality-wrap {
  max-width: 1280px;
  margin: auto;
  position: relative;
  z-index: 2;
}

.quality-top {
  text-align: center;
  margin: 0 auto 62px;
}

.quality-badge {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 26px;
}

.quality-left h3 {
  font-family: "Outfit", sans-serif;
  font-size: clamp(54px, 6vw, 70px);
  line-height: 0.95;
  letter-spacing: -4px;
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 26px;
}

.quality-left p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 500;
  max-width: 720px;
  margin: 0 auto;
}

.quality-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.quality-card {
  height: 300px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: #111;
  border-radius: 2px;
  box-shadow: 0 22px 45px rgba(15, 23, 42, 0.18);
}

.quality-card::after {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #ffffff;
  border: 6px solid #d7e7f9;
  left: 50%;
  top: -10px;
  transform: translateX(-50%);
  z-index: 4;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.45);
}

.quality-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%);
  transition: 0.45s ease;
}

.quality-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.58);
  z-index: 1;
  transition: 0.45s ease;
}

.quality-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}

.quality-overlay h3 {
  font-family: "Outfit", sans-serif;
  font-size: 27px;
  line-height: 1.1;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.quality-card:hover img {
  transform: scale(1.06);
  filter: grayscale(0%);
}

.quality-card:hover::before,
.quality-card:hover .quality-overlay {
  opacity: 0;
}

/* Quality Section End */

/* Footer Start */
.footer {
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(circle at top left, rgba(96, 165, 250, 0.18), transparent 30%),
    linear-gradient(135deg, #111827 0%, #1e293b 45%, #334155 100%);

  padding: 90px 70px 35px;
}

.footer-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.22;
  pointer-events: none;
}

.footer-glow-1 {
  width: 240px;
  height: 240px;
  background: #60a5fa;
  top: -80px;
  left: -80px;
}

.footer-glow-2 {
  width: 260px;
  height: 260px;
  background: #7dd3fc;
  bottom: -120px;
  right: -90px;
}

.footer-container {
  max-width: 1280px;
  margin: auto;

  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.9fr 1fr;
  gap: 60px;

  position: relative;
  z-index: 2;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 14px;

  margin-bottom: 24px;
}

.footer-logo-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;

  background: linear-gradient(135deg, #60a5fa, #7dd3fc);

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 12px 30px rgba(96, 165, 250, 0.35);
}

.footer-logo-icon span {
  color: #fff;
  font-size: 30px;
}

.footer-logo h2 {
  font-family: "Outfit", sans-serif;
  font-size: 38px;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: -1px;
}

.footer-brand p {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 18px;
  line-height: 1.9;

  color: rgba(255, 255, 255, 0.72);

  max-width: 320px;
}

.footer-socials {
  display: flex;
  gap: 14px;
  margin-top: 30px;
}

.footer-socials a {
  width: 48px;
  height: 48px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  transition: 0.35s ease;
}

.footer-socials a span {
  color: #ffffff;
  font-size: 23px;
}

.footer-socials a:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, #60a5fa, #7dd3fc);
  box-shadow: 0 14px 30px rgba(96, 165, 250, 0.35);
}

.footer-links h3 {
  font-family: "Outfit", sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 28px;
}

.footer-links a {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 18px;

  text-decoration: none;

  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 17px;

  color: rgba(255, 255, 255, 0.68);

  transition: 0.3s ease;
}

.footer-links a span {
  font-size: 21px;
}

.footer-links a:hover {
  color: #7dd3fc;
  transform: translateX(5px);
}

.footer-bottom {
  max-width: 1280px;
  margin: 60px auto 0;

  position: relative;
  z-index: 2;
}

.footer-line {
  width: 100%;
  height: 1px;

  background:
    linear-gradient(to right, transparent, rgba(255, 255, 255, 0.22), transparent);

  margin-bottom: 28px;
}

.footer-bottom p {
  text-align: center;

  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;

  color: rgba(255, 255, 255, 0.55);
}
/* Footer End */

/* Responsive Style Start */

img {
  max-width: 100%;
}

body {
  overflow-x: hidden;
}

@media (max-width: 1200px) {
  .navbar {
    padding: 0 42px;
  }

  .nav-menu {
    gap: 26px;
  }

  .hero {
    height: auto;
    min-height: 76vh;
    padding: 120px 42px 90px;
  }

  .hero-content {
    margin: 95px auto 0;
  }

  .history-section,
  .vision-mission-section,
  .values-section,
  .journey-section,
  .production-section,
  .quality-section,
  .footer {
    padding-left: 42px;
    padding-right: 42px;
  }

  .history-container {
    gap: 58px;
  }

  .image-stage {
    width: 380px;
    height: 500px;
  }

  .vm-container {
    grid-template-columns: 1fr 300px 1fr;
    gap: 32px;
  }

  .vm-text.vision,
  .vm-text.mission {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
  }

  .production-wrap {
    grid-template-columns: 1.15fr 1px 0.85fr 1px 0.85fr;
    gap: 26px;
  }

  .production-left {
    padding-left: 0;
  }

  .production-photo {
    width: 340px;
  }

  .production-star {
    right: 12px;
  }

  .footer-container {
    grid-template-columns: 1.2fr 0.8fr 0.9fr 1fr;
    gap: 38px;
  }
}

@media (max-width: 900px) {
  .navbar {
    height: auto;
    min-height: 72px;
    padding: 14px 22px;
    gap: 18px;
    flex-wrap: wrap;
    align-items: center;
  }

  .nav-logo {
    font-size: 27px;
  }

  .nav-search {
    display: none;
  }

  .nav-menu {
    position: static !important;
    transform: none !important;
    width: 100% !important;
    order: 3;
    display: flex;
    justify-content: flex-start;
    gap: 18px;
    overflow-x: auto;
    padding: 10px 2px 2px;
    scrollbar-width: none;
  }

  .nav-menu::-webkit-scrollbar {
    display: none;
  }

  .nav-menu a {
    font-size: 11px;
    letter-spacing: 2px;
    flex: 0 0 auto;
    white-space: nowrap;
  }

  .hero {
    min-height: 78vh;
    height: auto;
    padding: 145px 24px 80px !important;
    background-position: center;
  }

  .hero-content {
    margin: 68px auto 0 !important;
    max-width: 760px;
  }

  h1 {
    font-size: clamp(42px, 11vw, 70px);
    line-height: 0.98;
    letter-spacing: -2px;
  }

  .blue-text {
    display: inline-block;
  }

  .desc {
    font-size: 15px;
    line-height: 1.8;
    max-width: 680px;
  }

  .history-section,
  .vision-mission-section,
  .values-section,
  .journey-section,
  .production-section,
  .quality-section,
  .footer {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .history-section {
    padding-top: 78px !important;
    padding-bottom: 78px !important;
  }

  .history-container {
    grid-template-columns: 1fr;
    gap: 46px;
  }

  .image-stage {
    width: min(100%, 360px) !important;
    height: 455px !important;
  }

  .image-outline {
    width: 88%;
    height: 88%;
    top: -14px;
    left: -14px;
  }

  .history-text {
    text-align: center;
  }

  .history-label {
    margin-left: auto;
    margin-right: auto;
  }

  .history-text h2 {
    font-size: 44px;
    letter-spacing: -2px;
  }

  .history-text h3 {
    font-size: 22px;
  }

  .history-text p {
    font-size: 16px;
    line-height: 1.85;
    margin: auto;
  }

  .text-line {
    margin: 24px auto;
  }

  .vision-mission-section {
    padding-top: 80px !important;
    padding-bottom: 80px !important;
  }

  .vm-container {
    grid-template-columns: 1fr;
    gap: 34px;
    text-align: center;
    min-height: auto;
  }

  .vm-text,
  .vm-text.vision,
  .vm-text.mission {
    margin: 0;
    padding: 0;
  }

  .vm-text h2 {
    font-size: 46px;
    letter-spacing: -2px;
  }

  .vm-text p,
  .vm-text ul {
    max-width: 650px;
    margin: auto;
  }

  .vm-text li {
    margin-bottom: 18px;
  }

  .vm-bottle-wrap {
    width: 100%;
    height: 340px;
    order: 2;
  }

  .vm-text.mission {
    order: 3;
  }

  .vm-bottle {
    max-height: 320px;
  }

  .star-spin {
    top: -18px;
  }

  .values-section {
    padding-top: 80px !important;
    padding-bottom: 85px !important;
  }

  .values-container {
    grid-template-columns: 1fr;
    gap: 42px;
  }

  .values-intro {
    position: relative;
    top: 0;
    text-align: center;
  }

  .values-label {
    justify-content: center;
  }

  .values-intro h2,
  .values-intro p {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .value-card {
    min-height: auto;
    padding: 28px 24px;
  }

  .journey-section {
    padding-top: 82px !important;
    padding-bottom: 90px !important;
  }

  .journey-heading h2 {
    font-size: 42px;
    letter-spacing: -2px;
  }

  .journey-heading p {
    font-size: 16px;
  }

  .journey-content {
    min-height: auto !important;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .journey-center,
  .journey-point {
    position: relative !important;
    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;
    transform: none !important;
  }

  .journey-center {
    width: 240px;
    height: 360px;
    margin: 0 auto 14px;
    order: 1;
  }

  .journey-point {
    width: 100%;
    max-width: 620px;
    margin: auto;
    text-align: center !important;
  }

  .production-section {
    padding-top: 82px !important;
    padding-bottom: 90px !important;
  }

  .production-wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .production-left {
    padding-left: 0;
    text-align: center;
  }

  .production-left h2 {
    font-size: clamp(46px, 12vw, 64px);
    letter-spacing: -3px;
    margin-bottom: 20px;
  }

  .production-subtitle {
    margin: 0 auto 42px;
    font-size: 16px;
    max-width: 620px;
  }

  .production-photo {
    width: min(100%, 520px);
    height: 280px;
    margin: 0 auto;
  }

  .production-star {
    display: none;
  }

  .production-line {
    display: none;
  }

  .production-middle,
  .production-right {
    padding: 0;
    gap: 26px;
  }

  .process-item {
    max-width: 620px;
    margin: 0 auto;
    text-align: center;
    padding: 22px 18px;
    border-bottom: 1px solid rgba(23, 32, 51, 0.08);
  }

  .quality-section {
    padding-top: 82px !important;
    padding-bottom: 80px !important;
  }

  .quality-section::before {
    display: none;
  }

  .quality-top {
    text-align: center;
    margin-bottom: 42px;
  }

  .quality-left h3 {
    font-size: clamp(40px, 10vw, 58px);
    letter-spacing: -2px;
  }

  .quality-left p {
    max-width: 650px;
    margin: auto;
    font-size: 15px;
  }

  .quality-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .quality-card {
    height: 250px;
  }

  .footer {
    padding-top: 72px !important;
    padding-bottom: 30px !important;
  }

  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 38px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-brand p {
    max-width: 620px;
  }
}

@media (max-width: 600px) {
  .navbar {
    padding: 12px 16px;
  }

  .nav-logo {
    font-size: 25px;
  }

  .nav-menu {
    gap: 16px;
  }

  .hero {
    min-height: 82vh;
    padding: 135px 18px 70px !important;
  }

  .hero-content {
    margin-top: 54px !important;
  }

  h1 {
    font-size: clamp(44px, 15vw, 62px);
    letter-spacing: -2px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.75;
  }

  .history-section,
  .vision-mission-section,
  .values-section,
  .journey-section,
  .production-section,
  .quality-section,
  .footer {
    padding-left: 18px !important;
    padding-right: 18px !important;
  }

  .image-stage {
    width: min(100%, 315px) !important;
    height: 410px !important;
  }

  .slider-controls {
    gap: 14px;
  }

  .control-btn {
    width: 46px;
    height: 46px;
    border-radius: 15px;
  }

  .vm-bottle-wrap {
    height: 300px;
  }

  .vm-bottle {
    max-height: 290px;
  }

  .value-content {
    flex-direction: column;
    gap: 16px;
  }

  .value-icon {
    width: 52px;
    height: 52px;
  }

  .journey-center {
    width: 220px;
    height: 330px;
  }

  .production-photo {
    height: 220px;
  }

  .process-item {
    padding: 18px 6px 24px;
  }

  .quality-gallery {
    grid-template-columns: 1fr;
  }

  .quality-card {
    height: 245px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .footer-logo h2 {
    font-size: 30px;
  }

  .footer-brand p,
  .footer-links a {
    font-size: 15px;
  }

  .footer-bottom {
    margin-top: 42px;
  }
}

@media (max-width: 420px) {
  .hero {
    min-height: 86vh;
  }

  h1 {
    font-size: 44px;
  }

  .blue-text {
    font-size: 1.12em;
  }

  .history-text h2,
  .values-intro h2,
  .journey-heading h2 {
    font-size: 36px;
  }

  .production-left h2 {
    font-size: 42px;
  }

  .quality-left h3 {
    font-size: 38px;
  }
}

/* Responsive Style End */
      `}</style>

      <section className="hero">
        <nav className="navbar">
          <a href="/" className="nav-logo">
            Air<span>Alam</span>
          </a>

          <div className="nav-menu">
            <a href="/">Home</a>
            <a href="/tentang" className="active">
              Tentang
            </a>
            <a href="/brand">Brand</a>
            <a href="/produk">Produk</a>
            <a href="/#kontak">Kontak</a>
          </div>

          <a href="#" className="nav-search">
            <span className="material-icons-round">search</span>
          </a>
        </nav>

        <div className="hero-content">
          <h1>
            Tentang <span className="blue-text">AirAlam</span>
          </h1>

          <p className="desc">
            Lebih dari sekedar air minum. Kami adalah komitmen untuk kesehatan
            dan kesejahteraan Anda. AirAlam hadir membawa kemurnian alami yang
            terinspirasi langsung dari kesejukan alam Indonesia.
          </p>
        </div>
      </section>

      <section className="history-section">
        <div className="history-container">
          <div className="modern-slider">
            <div className="image-stage">
              <div className="image-glow"></div>
              <div className="image-outline"></div>

              <div className="image-card">
                <img
                  ref={imgRef}
                  src={`/${slide.image}`}
                  alt="Sejarah AirAlam"
                />
                <div className="slide-number">{slideNumber}</div>
              </div>
            </div>

            <div className="slider-controls">
              <button className="control-btn" type="button" onClick={prevSlide}>
                <span className="material-icons-round">west</span>
              </button>

              <div className="dots">
                {historyData.map((_, index) => (
                  <span
                    key={`dot-${index}`}
                    className={`dot${index === currentIndex ? " active" : ""}`}
                  ></span>
                ))}
              </div>

              <button className="control-btn" type="button" onClick={nextSlide}>
                <span className="material-icons-round">east</span>
              </button>
            </div>
          </div>

          <div className="history-text">
            <span className="history-label">AirAlam Story</span>
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <div className="text-line"></div>
            <p>{slide.desc}</p>
          </div>
        </div>
      </section>

      <section className="vision-mission-section">
        <div className="vm-container">
          <div className="vm-text vision">
            <h2>Visi Kami</h2>
            <p>
              Menjadi brand air minum pilihan utama di Indonesia yang dikenal
              dengan standar kualitas tertinggi, inovasi berkelanjutan, dan
              kontribusi nyata terhadap kesehatan masyarakat serta kelestarian
              lingkungan.
            </p>
          </div>

          <div className="vm-bottle-wrap">
            <div className="star-spin">❋</div>
            <img className="vm-bottle" src="/600ml.png" alt="Botol AirAlam" />
          </div>

          <div className="vm-text mission">
            <h2>Misi Kami</h2>
            <ul>
              <li>Menyediakan air minum berkualitas premium dengan harga terjangkau.</li>
              <li>Menerapkan praktik produksi yang ramah lingkungan dan berkelanjutan.</li>
              <li>Berinovasi terus-menerus untuk meningkatkan kualitas produk.</li>
              <li>Memberikan nilai terbaik kepada pelanggan, mitra, dan stakeholder.</li>
            </ul>
          </div>
        </div>

        <div className="vm-footer-line">
          <span>AirAlam</span>
        </div>
      </section>

      <section className="values-section">
        <div className="values-container">
          <div className="values-intro">
            <span className="values-label">AirAlam Values</span>
            <h2>Nilai-Nilai Kami</h2>
            <p>
              Prinsip yang memandu setiap keputusan dan tindakan kami untuk menjaga
              kualitas, kepercayaan, serta keberlanjutan dalam setiap botol AirAlam.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <span className="value-number">01</span>
              <div className="value-content">
                <div className="value-icon">
                  <span className="material-icons-round">water_drop</span>
                </div>
                <div className="value-text">
                  <h3>Kualitas Premium</h3>
                  <p>
                    Setiap botol AirAlam melalui kontrol kualitas ketat dengan standar internasional
                    untuk memastikan kemurnian dan kesegaran.
                  </p>
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">02</span>
              <div className="value-content">
                <div className="value-icon">
                  <span className="material-icons-round">eco</span>
                </div>
                <div className="value-text">
                  <h3>Sustainability</h3>
                  <p>
                    Kami berkomitmen pada praktik ramah lingkungan, dari sumber air hingga kemasan
                    yang dapat didaur ulang.
                  </p>
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">03</span>
              <div className="value-content">
                <div className="value-icon">
                  <span className="material-icons-round">verified_user</span>
                </div>
                <div className="value-text">
                  <h3>Keamanan Terjamin</h3>
                  <p>
                    Proses produksi higienis dengan sertifikasi BPOM dan ISO untuk menjamin keamanan
                    produk kami.
                  </p>
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">04</span>
              <div className="value-content">
                <div className="value-icon">
                  <span className="material-icons-round">favorite_border</span>
                </div>
                <div className="value-text">
                  <h3>Kesehatan Masyarakat</h3>
                  <p>
                    Misi kami adalah meningkatkan kualitas hidup masyarakat melalui akses air minum
                    berkualitas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-wrap">
          <div className="journey-heading">
            <span>AirAlam Journey</span>
            <h2>Perjalanan Penting AirAlam</h2>
            <p>Milestone penting dalam sejarah AirAlam</p>
          </div>

          <div className="journey-content">
            <div className="journey-center">
              <img src="/1500ml.png" alt="Perjalanan AirAlam" />
            </div>

            <div className="journey-point left point-1">
              <span>[1994]</span>
              <h3>Pendirian AirAlam</h3>
              <p>Berawal dari visi menyediakan air minum berkualitas tinggi untuk masyarakat Indonesia.</p>
            </div>

            <div className="journey-point left point-2">
              <span>[2000]</span>
              <h3>Pengembangan Distribusi</h3>
              <p>Memperluas jaringan distribusi ke berbagai wilayah untuk memenuhi kebutuhan konsumen.</p>
            </div>

            <div className="journey-point left point-3">
              <span>[2008]</span>
              <h3>Modernisasi Produk</h3>
              <p>Mengadopsi teknologi penyaringan dan pengemasan modern untuk menjaga kualitas produk.</p>
            </div>

            <div className="journey-point right point-4">
              <span>[2015]</span>
              <h3>Sertifikasi dan Standar Kualitas</h3>
              <p>Memperoleh sertifikasi mutu dan keamanan pangan sebagai komitmen terhadap kualitas.</p>
            </div>

            <div className="journey-point right point-5">
              <span>[2022]</span>
              <h3>Inisiatif Ramah Lingkungan</h3>
              <p>Menerapkan program keberlanjutan melalui kemasan ramah lingkungan dan efisiensi produksi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="production-section">
        <div className="production-wrap">
          <div className="production-left">
            <h2>
              PROSES<br />
              PRODUKSI<br />
              KAMI
            </h2>

            <p className="production-subtitle">
              Setiap botol melalui proses ketat untuk memastikan kualitas terbaik
            </p>

            <div className="production-photo">
              <img src="/500ml.png" alt="Proses Produksi AirAlam" />
            </div>

            <div className="production-star">✦</div>
          </div>

          <div className="production-line"></div>

          <div className="production-middle">
            <div className="process-item">
              <span>01</span>
              <h3>Sumber Air Alami</h3>
              <p>Air diambil dari sumber pegunungan pilihan yang terjaga kelestariannya.</p>
            </div>

            <div className="process-item">
              <span>02</span>
              <h3>Penyaringan 7 Tahap</h3>
              <p>Proses filtrasi canggih untuk menghilangkan kontaminan dan menjaga mineral alami.</p>
            </div>

            <div className="process-item">
              <span>03</span>
              <h3>Sterilisasi UV</h3>
              <p>Teknologi UV untuk memastikan bebas dari bakteri dan mikroorganisme berbahaya.</p>
            </div>
          </div>

          <div className="production-line"></div>

          <div className="production-right">
            <div className="process-item">
              <span>04</span>
              <h3>Quality Control</h3>
              <p>Pengujian laboratorium ketat di setiap batch produksi.</p>
            </div>

            <div className="process-item">
              <span>05</span>
              <h3>Pengemasan Higienis</h3>
              <p>Botol food-grade BPA-free yang aman dan menjaga kesegaran.</p>
            </div>

            <div className="process-item">
              <span>06</span>
              <h3>Distribusi Terpercaya</h3>
              <p>Sistem distribusi efisien untuk memastikan produk sampai dalam kondisi prima.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-wrap">
          <div className="quality-top">
            <div className="quality-left">
              <span className="quality-badge">Standar Kualitas Tertinggi</span>

              <h3>
                Komitmen Kualitas<br />
                Tanpa Kompromi
              </h3>

              <p>
                Setiap botol AirAlam diproduksi dengan standar kualitas internasional.
                Kami memiliki sertifikasi BPOM, ISO 9001, dan berbagai penghargaan
                industri yang membuktikan dedikasi kami terhadap excellence.
              </p>
            </div>
          </div>

          <div className="quality-gallery">
            <div className="quality-card">
              <img src="/330ml.png" alt="Sertifikasi BPOM" />
              <div className="quality-overlay">
                <h3>Sertifikasi BPOM</h3>
              </div>
            </div>

            <div className="quality-card">
              <img src="/500ml.png" alt="ISO 9001:2015" />
              <div className="quality-overlay">
                <h3>ISO 9001:2015</h3>
              </div>
            </div>

            <div className="quality-card">
              <img src="/600ml.png" alt="Eco-Friendly" />
              <div className="quality-overlay">
                <h3>Eco-Friendly</h3>
              </div>
            </div>

            <div className="quality-card">
              <img src="/1500ml.png" alt="1M+ Pelanggan" />
              <div className="quality-overlay">
                <h3>1M+ Pelanggan</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-glow footer-glow-1"></div>
        <div className="footer-glow footer-glow-2"></div>

        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span className="material-icons-round">water_drop</span>
              </div>
              <h2>AirAlam</h2>
            </div>

            <p>
              Kesegaran alami dalam setiap tetes untuk gaya hidup sehat, modern,
              dan penuh keseimbangan.
            </p>

            <div className="footer-socials">
              <a href="#">
                <span className="material-icons-round">language</span>
              </a>
              <a href="#">
                <span className="material-icons-round">photo_camera</span>
              </a>
              <a href="#">
                <span className="material-icons-round">smart_display</span>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Menu</h3>
            <a href="/">Home</a>
            <a href="/tentang">Tentang</a>
            <a href="/brand">Brand</a>
            <a href="/produk">Produk</a>
          </div>

          <div className="footer-links">
            <h3>Produk</h3>
            <a href="#">AirAlam 330ml</a>
            <a href="#">AirAlam 600ml</a>
            <a href="#">AirAlam 1.5L</a>
            <a href="#">AirAlam Eco+</a>
          </div>

          <div className="footer-links footer-contact">
            <h3>Hubungi Kami</h3>

            <a href="#">
              <span className="material-icons-round">mail</span>
              info@airalam.co.id
            </a>

            <a href="#">
              <span className="material-icons-round">call</span>
              0858-99999-252
            </a>

            <a href="#">
              <span className="material-icons-round">photo_camera</span>
              @airalamid
            </a>

            <a href="#">
              <span className="material-icons-round">location_on</span>
              Tangerang, Indonesia
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>

          <p>(c) 2026 AirAlam. Natural Freshness Everyday.</p>
        </div>
      </footer>
    </div>
  );
}
