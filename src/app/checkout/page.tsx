'use client'
import CartList from "@/components/CartList"
import Image from "next/image"



export default function CheckoutPage() {
    // src logo bank
    const bniLogo = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Bank_Negara_Indonesia_logo_(2004).svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
    const bcaLogo = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
    const mandiriLogo = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
    const briLogo = "https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg"
    const ovoLogo = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg"
    const shopeePayLogo = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg"

    return (
        <div className="bg-white/90">
            <section className="max-w-6xl mx-auto px-5 lg:px-8 pt-28 pb-10 bg-gray-100">
                <div className="mb-10">
                    <h1 className="text-[32px] font-extrabold text-[#1b2433] leading-none">Checkout</h1>
                    <p className="text-[15px] text-slate-500 mt-3">Selesaikan pembayaran Anda</p>
                </div>

                <CartList/>
                <div className="bg-white rounded-[28px] shadow-sm border border-slate-100 p-6">
                    <h2 className="text-[26px] font-bold text-[#1b2433] mb-8">Ringkasan Pembayaran</h2>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <p className="text-[22px] text-[#64748B]">Subtotal (1 item)</p>
                            <p className="text-[22px] text-[#64748B]" id="subTotal">Rp 5.000</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[22px] text-[#64748B]">Ongkir</p>
                            <p className="text-[22px] text-[#64748B]" id="ongkir">Rp 15.000</p>
                        </div>
                        <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
                            <h3 className="text-[28px] font-bold text-[#1b2433]">Total</h3>
                            <h3 className="text-[28px] font-extrabold text-[#2196F3]" id="totalBiaya">Rp 20.000</h3>
                        </div>

                        <button type="button" className="w-full h-[78px] rounded-full bg-[#dceeff] text-[#64748B] text-[22px] font-semibold mt-5 transition-all duration-300 pointer-events-none" id="bayarBtn">
                            Bayar Sekarang
                        </button>

                        <div className="w-full h-[78px] rounded-3xl bg-[#f3f7fb] flex items-center justify-center text-[20px] text-[#64748B]">
                            Estimasi pengiriman: <span className="font-bold text-[#1b2433] ml-2">2-3 hari kerja</span>
                        </div>
                    </div>
                </div>

                
                
            </section>
          
        </div>
    )
}
