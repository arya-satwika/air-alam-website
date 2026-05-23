"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div id="Navbar Componenet" className="fixed z-50 bg-white/90 backdrop-blur-[12px] border-b border-[#1A8FE31A] px-1 flex items-center justify-between top-0 left-0 right-0 px-[5%] gap-4 w-full h-16 ">
      <div className="flex items-center gap-8">
        <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#1a8fe3] to-[#00d4ff] shadow-[0_4px_12px_rgba(26,143,227,0.35)]">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-white"
          >
            <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" />
          </svg>
        </div>

        <span className="text-[1.25rem] font-bold text-[#1a2535] tracking-[-0.5px]">
          Air<span className="text-[#1a8fe3]">Alam</span>
        </span>
      </div>

      <div className="flex gap-8">
        <Link
          href="/"
          className={`text-sm font-medium transition-colors duration-200 ${
            pathname === "/"
              ? "text-[#1a8fe3]"
              : "text-[#4a5568] hover:text-[#1a8fe3]"
          }`}
        >
          Home
        </Link>
        <Link
          href="/tentang"
          className={`text-sm font-medium transition-colors duration-200 ${
            pathname === "/tentang"
              ? "text-[#1a8fe3]"
              : "text-[#4a5568] hover:text-[#1a8fe3]"
          }`}
        >
          Tentang
        </Link>
        <Link
          href="/brand"
          className={`text-sm font-medium transition-colors duration-200 ${
            pathname === "/brand"
              ? "text-[#1a8fe3]"
              : "text-[#4a5568] hover:text-[#1a8fe3]"
          }`}
        >
          Brand
        </Link>
        <Link
          href="/produk"
          className={`text-sm font-medium transition-colors duration-200 ${
            pathname === "/produk"
              ? "text-[#1a8fe3]"
              : "text-[#4a5568] hover:text-[#1a8fe3]"
          }`}
        >
          Produk
        </Link>
        <Link
          href="/kontak"
          className={`text-sm font-medium transition-colors duration-200 ${
            pathname === "/kontak"
              ? "text-[#1a8fe3]"
              : "text-[#4a5568] hover:text-[#1a8fe3]"
          }`}
        >
          Kontak
        </Link>
        <Link
          href="/checkout"
          className={`text-sm font-medium transition-colors duration-200 ${
            pathname === "/checkout"
              ? "text-[#1a8fe3]"
              : "text-[#4a5568] hover:text-[#1a8fe3]"
          }`}
        >
          Keranjang
        </Link>
      </div>
    </div>
  );
}
