'use client'
import CartList from "@/components/CartList"
import Image from "next/image"



export default function CheckoutPage() {
    function addDummyCartItems() {
        const dummyCart = [
            { id: 1, quantity: 2 },
            { id: 2, quantity: 1 }
        ]
        localStorage.setItem('cart', JSON.stringify(dummyCart))
    }
    // src logo bank
    const bniLogo = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Bank_Negara_Indonesia_logo_(2004).svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
    const bcaLogo = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
    const mandiriLogo = "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
    const briLogo = "https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg"
    const ovoLogo = "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg"
    const shopeePayLogo = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg"

    return (
        <div>
            <nav className="fixed z-50 bg-white/90 backdrop-blur-[12px] border-b border-[#1A8FE31A] px-1 flex items-center justify-between top-0 left-0 right-0 px-[5%] gap-4 w-full h-16 ">
                <div className="flex items-center gap-6">
                    <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#1a8fe3] to-[#00d4ff] shadow-[0_4px_12px_rgba(26,143,227,0.35)]">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white">
                            <path d="M12 2C12 2 5 10 5 15a7 7 0 0014 0c0-5-7-13-7-13z" />
                        </svg>
                    </div>
                    <span className="text-[1.25rem] font-bold text-[#1a2535] tracking-[-0.5px]">
                        Air<span className="text-[#1a8fe3]">Alam</span>
                    </span>
                </div>

                <div className="hidden md:flex gap-6">
                    <div className="flex gap-6">
                        <a href=".....\KWU_AIRALAM\Home-Page.html"
                            className="text-sm font-medium text-[#4a5568] hover:text-[#1a8fe3] transition-colors duration-200"> Home</a>
                        <a href=".....\KWU_AIRALAM\tentang.html"
                            className="text-sm font-medium text-[#4a5568] hover:text-[#1a8fe3] transition-colors duration-200">Tentang</a>
                        <a href=".....\KWU_AIRALAM\brand.html"
                            className="text-sm font-medium text-[#4a5568] hover:text-[#1a8fe3] transition-colors duration-200">Brand</a>
                        <a href=".....\KWU_AIRALAM\product.html"
                            className="text-sm font-medium text-[#4a5568] hover:text-[#1a8fe3] transition-colors duration-200">Produk</a>
                        <a href=".....\KWU_AIRALAM\kontak.html"
                            className="text-sm font-medium text-[#4a5568] hover:text-[#1a8fe3] transition-colors duration-200">Kontak</a>
                    </div>
                </div>
            </nav>

            <section className="max-w-6xl mx-auto px-5 lg:px-8 pt-28 pb-10 bg-gray-100">
                <div className="mb-10">
                    <h1 className="text-[32px] font-extrabold text-[#1b2433] leading-none">Checkout</h1>
                    <p className="text-[15px] text-slate-500 mt-3">Selesaikan pembayaran Anda</p>
                </div>

                <CartList/>

                <div className="bg-white rounded-[28px] shadow-sm border border-slate-100 p-6 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#2196F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M3 11l8.586 8.586a2 2 0 002.828 0l6-6a2 2 0 000-2.828L11.828 2H3v9z" />
                        </svg>
                        <h2 className="text-[24px] font-bold text-[#1b2433]">Kode Promo</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" placeholder="Masukkan kode promo" className="flex-1 h-[70px] rounded-2xl border border-[#cfe5ff] px-6 outline-none text-[15px] focus:border-[#2196F3] transition" id="kodePromo" />
                        <button onClick={addDummyCartItems} className="h-[70px] px-10 rounded-2xl bg-gradient-to-r from-[#2196F3] via-[#5FB2F6] to-[#64B5F6] text-white text-[18px] font-semibold hover:opacity-90 transition shadow-md shadow-blue-500/20" id="usePromo">Terapkan</button>
                    </div>
                </div>

                <div className="bg-white rounded-[28px] shadow-sm border border-slate-100 p-6 mb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#2196F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h.01M11 15h2m-9 4h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h2 className="text-[26px] font-bold text-[#1b2433]">Metode Pembayaran</h2>
                    </div>

                    <form id="paymentForm">
                        <input type="hidden" name="selected_payment_method" id="selectedPaymentMethod" value=""/>

                            <div className="mb-8">
                                <p className="text-[15px] font-semibold text-slate-500 mb-4">QRIS</p>
                                <div className="payment-card border-2 border-[#dbeafe] bg-white rounded-3xl p-6 flex items-center gap-5 cursor-pointer transition-all duration-300" data-type="qris" data-id="qris">
                                    <div className="w-14 h-14 rounded-2xl bg-[#edf5ff] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#2196F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm11 1h2m-2 4h5m-5-2h2m-9-2h2m0 4h2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-[20px] font-bold text-[#1b2433]">QRIS</h3>
                                        <p className="text-[17px] text-slate-500 mt-1">Scan QR untuk bayar</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-[15px] font-semibold text-slate-500 mb-4">Transfer Bank</p>
                                <div className="space-y-4">

                                    <div className="payment-card border-2 border-[#DBEAFE] bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300" data-type="bank" data-id="bca">
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-[#EDF5FF] flex items-center justify-center">
                                                <Image src={bcaLogo} width={300} height={100} alt="BCA" className="w-8 object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-[20px] font-bold text-[#1b2433]">Bank BCA</h3>
                                                <div className="bank-detail hidden mt-2">
                                                    <p className="text-[14px] text-[#64748B]">No. Rekening: <span className="font-semibold text-[#1b2433]">1234567890</span></p>
                                                    <p className="text-[14px] text-[#64748B] mt-1">a.n. PT AirAlam Indonesia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment-card border-2 border-[#DBEAFE] bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300" data-type="bank" data-id="mandiri">
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-[#EDF5FF] flex items-center justify-center">
                                                <Image src={mandiriLogo} width={200} height={100} alt="Mandiri" className="w-8 object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-[20px] font-bold text-[#1b2433]">Bank Mandiri</h3>
                                                <div className="bank-detail hidden mt-2">
                                                    <p className="text-[14px] text-[#64748B]">No. Rekening: <span className="font-semibold text-[#1b2433]">0987654321</span></p>
                                                    <p className="text-[14px] text-[#64748B] mt-1">a.n. PT AirAlam Indonesia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment-card border-2 border-[#DBEAFE] bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300" data-type="bank" data-id="bni">
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-[#EDF5FF] flex items-center justify-center">
                                                <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Bank_Negara_Indonesia_logo_(2004).svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" width={200} height={100} alt="BNI" className="w-8 object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-[20px] font-bold text-[#1b2433]">Bank BNI</h3>
                                                <div className="bank-detail hidden mt-2">
                                                    <p className="text-[14px] text-[#64748B]">No. Rekening: <span className="font-semibold text-[#1b2433]">8889997776661</span></p>
                                                    <p className="text-[14px] text-[#64748B] mt-1">a.n. PT AirAlam Indonesia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment-card border-2 border-[#DBEAFE] bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300" data-type="bank" data-id="bri">
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-[#EDF5FF] flex items-center justify-center">
                                                <Image src={briLogo} width={200} height={100} alt="BRI" className="w-8 object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-[20px] font-bold text-[#1b2433]">Bank BRI</h3>
                                                <div className="bank-detail hidden mt-2">
                                                    <p className="text-[14px] text-[#64748B]">No. Rekening: <span className="font-semibold text-[#1b2433]">564738293</span></p>
                                                    <p className="text-[14px] text-[#64748B] mt-1">a.n. PT AirAlam Indonesia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <p className="text-[20px] font-semibold text-slate-500 mb-4">E-Wallet</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <div className="payment-card border-2 border-[#dbeafe] bg-white rounded-3xl py-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300" data-type="ewallet" data-id="dana">
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg" width={160} height={60} alt="DANA" className="h-8 object-contain mb-3" />
                                    </div>

                                    <div className="payment-card border-2 border-[#dbeafe] bg-white rounded-3xl py-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300" data-type="ewallet" data-id="ovo">
                                        <Image src={ovoLogo} width={160} height={60} alt="OVO" className="h-8 object-contain mb-3" />
                                    </div>

                                    <div className="payment-card border-2 border-[#dbeafe] bg-white rounded-3xl py-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300" data-type="ewallet" data-id="gopay">
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg" width={160} height={60} alt="GoPay" className="h-8 object-contain mb-3" />
                                    </div>

                                    <div className="payment-card border-2 border-[#dbeafe] bg-white rounded-3xl py-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300" data-type="ewallet" data-id="shopeepay">
                                        <Image src={shopeePayLogo} width={180} height={60} alt="ShopeePay" className="h-10 object-contain mb-3" />
                                    </div>

                                </div>
                            </div>

                    </form>
                </div>

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

            <div id="qrisModal" className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4 opacity-0 transition-opacity duration-300">
                <div className="bg-white rounded-[32px] w-full max-w-md p-6 relative transform scale-95 transition-transform duration-300 shadow-2xl max-h-[95vh] overflow-y-auto hide-scrollbar" id="qrisModalContent">

                    <button id="closeModalBtn" className="absolute top-5 right-5 text-slate-400 hover:text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="text-center mb-4 mt-2">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" width={160} height={60} alt="QRIS" className="h-10 mx-auto mb-2" />
                        <h2 className="text-[22px] font-bold text-[#1b2433]">Pembayaran QRIS</h2>
                        <p className="text-slate-500 text-[14px]">Scan QR code untuk bayar</p>
                    </div>

                    <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-4 text-center mb-4 relative">
                        <div className="flex items-center justify-center gap-1.5 text-[#2196F3] font-semibold mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[14px]">09:42</span>
                        </div>
                        <p className="text-slate-500 text-[13px] mb-3">Selesaikan pembayaran sebelum waktu habis</p>

                        <div className="w-44 h-44 bg-white border border-slate-200 rounded-xl mx-auto flex items-center justify-center shadow-sm p-2">
                            <Image src="https://placehold.co/160x160/000000/FFFFFF.png?text=QR+CODE" width={160} height={160} alt="QR Code" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>

                    <div className="text-center mb-5">
                        <p className="text-slate-500 text-[13px]">Total Pembayaran</p>
                        <p className="text-[26px] font-bold text-[#2196F3] mt-0.5" id="qrisTotalDisplay">Rp 20.000</p>
                    </div>

                    <div className="space-y-2 mb-4">
                        <button className="w-full h-[48px] rounded-2xl border-2 border-[#2196F3] text-[#2196F3] text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download QR Code
                        </button>
                        <button id="btnSayaSudahBayar" className="w-full h-[48px] rounded-2xl bg-gradient-to-r from-[#2196F3] via-[#5FB2F6] to-[#64B5F6] text-white text-[15px] font-semibold shadow-lg shadow-blue-500/30 hover:opacity-90 transition">
                            Saya Sudah Bayar
                        </button>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <p className="font-bold text-[#1b2433] text-[13px] mb-1">Cara bayar:</p>
                        <ol className="list-decimal list-inside text-slate-500 text-[12px] space-y-1">
                            <li>Buka aplikasi e-wallet atau m-banking</li>
                            <li>Pilih menu QRIS atau Scan QR</li>
                            <li>Scan QR code di atas</li>
                            <li>Konfirmasi pembayaran</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
