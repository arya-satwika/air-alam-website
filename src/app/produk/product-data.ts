export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  slug: string;
  title: string;
  size: string;
  price: string;
  image: string;
  alt: string;
  summary: string;
  details: string;
  specifications: ProductSpec[];
  nutrients: ProductSpec[];
  advantages: string[];
};

export const products: ProductDetail[] = [
  {
    slug: "airalam-220ml",
    title: "AirAlam Mineral 220ml",
    size: "220ml",
    price: "Rp 1.800",
    image: "/220ml.png",
    alt: "AirAlam Mineral 220ml",
    summary: "Ukuran mini yang praktis untuk sekali minum, kegiatan sekolah, dan tas kecil.",
    details: "AirAlam 220ml adalah varian paling ringkas dalam lini produk kami, dirancang untuk kebutuhan cepat dan efisien. Format kecil ini cocok untuk kegiatan harian yang serba mobile, dari perjalanan singkat sampai paket konsumsi acara.",
    specifications: [
      { label: "Volume", value: "220ml" },
      { label: "Material", value: "PET food grade" },
      { label: "pH", value: "7.0 - 7.4" },
      { label: "Mineral", value: "Kalsium & magnesium ringan" },
      { label: "Shelf Life", value: "12 bulan" },
    ],
    nutrients: [
      { label: "Kalsium", value: "1.2 mg" },
      { label: "Magnesium", value: "0.4 mg" },
      { label: "Natrium", value: "0.15 mg" },
      { label: "Kalium", value: "0.10 mg" },
    ],
    advantages: [
      "Ukuran sekali minum",
      "Ringan dan mudah dibawa",
      "Cocok untuk kegiatan cepat",
      "Harga ekonomis",
    ],
  },
  {
    slug: "airalam-330ml",
    title: "AirAlam Mineral 330ml",
    size: "330ml",
    price: "Rp 3.500",
    image: "/330ml.png",
    alt: "AirAlam Mineral 330ml",
    summary: "Ukuran compact untuk perjalanan singkat, commute harian, dan konsumsi praktis.",
    details: "AirAlam 330ml menghadirkan keseimbangan antara ukuran ringkas dan hidrasi yang cukup untuk aktivitas harian. Varian ini ideal untuk pengguna yang butuh botol praktis tanpa mengorbankan kenyamanan saat dibawa bepergian.",
    specifications: [
      { label: "Volume", value: "330ml" },
      { label: "Material", value: "Clear PET premium" },
      { label: "pH", value: "7.2 - 7.8" },
      { label: "Mineral", value: "Silika natural" },
      { label: "Shelf Life", value: "12 bulan" },
    ],
    nutrients: [
      { label: "Kalsium", value: "1.5 mg" },
      { label: "Magnesium", value: "0.5 mg" },
      { label: "Natrium", value: "0.16 mg" },
      { label: "Kalium", value: "0.12 mg" },
    ],
    advantages: [
      "Praktis dibawa ke mana saja",
      "Pas untuk kegiatan on-the-go",
      "Tampilan botol rapi dan modern",
      "Segel aman dan mudah dibuka",
    ],
  },
  {
    slug: "airalam-600ml",
    title: "AirAlam Mineral 600ml",
    size: "600ml",
    price: "Rp 5.500",
    image: "/600ml.png",
    alt: "AirAlam Mineral 600ml",
    summary: "Pilihan medium yang pas untuk olahraga, kerja, dan kebutuhan hidrasi lebih lama.",
    details: "AirAlam 600ml dibuat untuk menemani aktivitas yang lebih panjang tanpa terasa terlalu besar saat dibawa. Varian ini cocok untuk pekerja lapangan, olahraga ringan, atau sesi belajar yang membutuhkan hidrasi konsisten.",
    specifications: [
      { label: "Volume", value: "600ml" },
      { label: "Material", value: "BPA-free PET" },
      { label: "pH", value: "7.1 - 7.6" },
      { label: "Mineral", value: "Elektrolit seimbang" },
      { label: "Shelf Life", value: "12 bulan" },
    ],
    nutrients: [
      { label: "Kalsium", value: "2.0 mg" },
      { label: "Magnesium", value: "0.6 mg" },
      { label: "Natrium", value: "0.18 mg" },
      { label: "Kalium", value: "0.14 mg" },
    ],
    advantages: [
      "Cocok untuk olahraga ringan",
      "Lebih awet untuk aktivitas panjang",
      "Pegangan botol nyaman",
      "Efisien untuk konsumsi harian",
    ],
  },
  {
    slug: "airalam-1-5l",
    title: "AirAlam Mineral 1.5L",
    size: "1.5L",
    price: "Rp 9.500",
    image: "/1500ml.png",
    alt: "AirAlam Mineral 1.5L",
    summary: "Ukuran keluarga yang ekonomis untuk meja makan, rumah, dan kebutuhan bersama.",
    details: "AirAlam 1.5L menghadirkan kapasitas besar yang cocok untuk rumah tangga, ruang makan, atau persediaan kerja. Format ini membantu mengurangi frekuensi pembelian sekaligus menjaga stok air minum tetap tersedia lebih lama.",
    specifications: [
      { label: "Volume", value: "1.5L" },
      { label: "Material", value: "Thick PET family pack" },
      { label: "pH", value: "7.0 - 7.4" },
      { label: "Mineral", value: "Calcium & magnesium balanced" },
      { label: "Shelf Life", value: "12 bulan" },
    ],
    nutrients: [
      { label: "Kalsium", value: "3.2 mg" },
      { label: "Magnesium", value: "1.1 mg" },
      { label: "Natrium", value: "0.25 mg" },
      { label: "Kalium", value: "0.20 mg" },
    ],
    advantages: [
      "Ekonomis untuk keluarga",
      "Cocok untuk stok di rumah",
      "Kapasitas besar dan efisien",
      "Pas untuk konsumsi bersama",
    ],
  },
  {
    slug: "airalam-eco-plus",
    title: "AirAlam Eco+ 500ml",
    size: "Eco+ 500ml",
    price: "Rp 10.000",
    image: "/500ml.png",
    alt: "AirAlam Eco+ 500ml",
    summary: "Varian premium dengan fokus pada kemasan ramah lingkungan dan tampilan modern.",
    details: "AirAlam Eco+ 500ml dirancang untuk pengguna yang menginginkan pengalaman minum yang lebih premium dan bertanggung jawab. Produk ini menggabungkan rasa bersih, kemasan yang lebih sadar lingkungan, dan tampilan yang cocok untuk kebutuhan modern.",
    specifications: [
      { label: "Volume", value: "500ml" },
      { label: "Material", value: "100% recycled-friendly bottle" },
      { label: "pH", value: "8.4 - 8.8" },
      { label: "Mineral", value: "Balanced mineral profile" },
      { label: "Shelf Life", value: "10 bulan" },
    ],
    nutrients: [
      { label: "Kalsium", value: "1.8 mg" },
      { label: "Magnesium", value: "0.7 mg" },
      { label: "Natrium", value: "0.14 mg" },
      { label: "Kalium", value: "0.11 mg" },
    ],
    advantages: [
      "Kemasan lebih ramah lingkungan",
      "Tampilan premium untuk retail",
      "Cocok untuk kebutuhan harian",
      "Rasa ringan dan bersih",
    ],
  },
  {
    slug: "airalam-galon-19l",
    title: "AirAlam Galon 19L",
    size: "Galon 19L",
    price: "Rp 28.000",
    image: "/airgalon.png",
    alt: "AirAlam Galon 19L",
    summary: "Solusi volume besar untuk rumah, kantor, dan distribusi air harian yang stabil.",
    details: "AirAlam Galon 19L diposisikan sebagai pilihan paling efisien untuk kebutuhan air skala besar. Produk ini cocok untuk dispenser, ruang kerja, dan rumah yang membutuhkan persediaan air yang lebih stabil setiap hari.",
    specifications: [
      { label: "Volume", value: "19L" },
      { label: "Material", value: "Food-grade polycarbonate" },
      { label: "pH", value: "7.0 - 7.5" },
      { label: "Mineral", value: "Stable mineral blend" },
      { label: "Shelf Life", value: "14 hari setelah dibuka" },
    ],
    nutrients: [
      { label: "Kalsium", value: "4.5 mg" },
      { label: "Magnesium", value: "1.5 mg" },
      { label: "Natrium", value: "0.30 mg" },
      { label: "Kalium", value: "0.25 mg" },
    ],
    advantages: [
      "Ekonomis untuk penggunaan rutin",
      "Cocok untuk dispenser",
      "Volume besar dan stabil",
      "Ideal untuk rumah dan kantor",
    ],
  },
];

export const productSlugs = products.map((product) => product.slug);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
