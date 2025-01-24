"use client"

import Social from "../components/SocialMedia";

const TentangKami = () => {
    return (
        <div className="bg-latte text-coffee min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-5xl font-bold mb-12 text-center">Tentang Cafe-In</h1>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">Selamat Datang di Cafe-In</h2>
                        <p className="text-lg leading-relaxed">
                            Cafe-In adalah destinasi kuliner premium yang menghadirkan pengalaman
                            kopi autentik dengan biji kopi pilihan dari berbagai daerah di Indonesia.
                            Sejak 2023, kami berkomitmen menghadirkan tidak hanya secangkir kopi
                            berkualitas, tetapi juga suasana yang membuat setiap kunjungan Anda menjadi istimewa.
                        </p>
                        <div className="space-y-4 mt-8">
                            <h3 className="text-xl font-semibold">Keunggulan Kami</h3>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Biji kopi premium dari petani lokal terpilih</li>
                                <li>Barista bersertifikasi internasional</li>
                                <li>Suasana modern dengan sentuhan budaya lokal</li>
                                <li>Menu makanan fusion yang inovatif</li>
                            </ul>
                        </div>
                        <button className="bg-coffee text-latte px-8 py-3 rounded-lg hover:opacity-90 transition-all mt-6 font-semibold">
                            Hubungi Kami
                        </button>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6">Informasi Kafe</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-semibold mb-3">Jam Operasional</h4>
                                    <ul className="space-y-2">
                                        <li>Senin - Jumat: 08.00 - 22.00 WIB</li>
                                        <li>Sabtu - Minggu: 09.00 - 23.00 WIB</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-3">Lokasi</h4>
                                    <p className="leading-relaxed">
                                        Jl. Sudirman No. 123<br />
                                        Jakarta Selatan, DKI Jakarta 12190
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-3">Reservasi</h4>
                                    <p className="leading-relaxed">
                                        Telepon: +62 21 1234-5678<br />
                                        WhatsApp: +62 812-3456-7890<br />
                                        Email: reservasi@cafe-in.id
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-3">Fasilitas</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>• WiFi Berkecepatan Tinggi</div>
                                        <div>• Valet Parking</div>
                                        <div>• Ruang Meeting Private</div>
                                        <div>• Smoking Area</div>
                                        <div>• Area Outdoor</div>
                                        <div>• Power Outlet</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add Maps section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Lokasi Kami</h2>
                    <div className="w-full h-[400px] rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904049411774!2d106.80575731476882!3d-6.227307395493508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505c76d775%3A0xe8503eecf84be674!2sJl.%20Jend.%20Sudirman%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1625647152544!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TentangKami;