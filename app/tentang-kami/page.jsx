"use client"

const TentangKami = () => {
    return (
        <div className="bg-primary text-latte min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6 hover:transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-coffee to-latte bg-clip-text text-transparent">Welcome to Your Urban Escape</h2>
                        <p className="text-lg leading-relaxed">
                            Born in 2023, Cafe-In is more than just a coffee shop - it's your daily retreat. 
                            We craft exceptional coffee experiences using premium Indonesian beans, 
                            served in an Instagram-worthy setting that blends modern aesthetics with local culture.
                        </p>
                        <div className="space-y-4 mt-8">
                            <h3 className="text-xl font-semibold">Why We're Different</h3>
                            <ul className="grid grid-cols-2 gap-4">
                                <li className="flex items-center space-x-2">
                                    <span className="text-coffee">★</span>
                                    <span>Single-origin beans</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-coffee">★</span>
                                    <span>Pro baristas</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-coffee">★</span>
                                    <span>Aesthetic vibes</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-coffee">★</span>
                                    <span>Fusion cuisine</span>
                                </li>
                            </ul>
                        </div>
                        <button className="bg-coffee text-latte px-8 py-3 rounded-full hover:bg-opacity-90 transition-all mt-6 font-semibold flex items-center space-x-2">
                            <span>Connect With Us</span>
                            <span>→</span>
                        </button>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-coffee p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-95">
                            <h3 className="text-2xl font-semibold mb-6">Essential Info</h3>
                            <div className="space-y-6">
                                <div className="hover:transform hover:translate-x-2 transition-all duration-300">
                                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="mr-2">⏰</span> Hours
                                    </h4>
                                    <ul className="space-y-2">
                                        <li>Mon - Fri: 08.00 - 22.00</li>
                                        <li>Sat - Sun: 09.00 - 23.00</li>
                                    </ul>
                                </div>

                                <div className="hover:transform hover:translate-x-2 transition-all duration-300">
                                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="mr-2">📍</span> Find Us
                                    </h4>
                                    <p className="leading-relaxed">
                                        123 Sudirman Street<br />
                                        South Jakarta, DKI 12190
                                    </p>
                                </div>

                                <div className="hover:transform hover:translate-x-2 transition-all duration-300">
                                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="mr-2">📱</span> Get in Touch
                                    </h4>
                                    <p className="leading-relaxed">
                                        Call: +62 21 1234-5678<br />
                                        WA: +62 812-3456-7890<br />
                                        hello@cafe-in.id
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-3">Perks & Features</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center space-x-2 hover:font-bold hover:scale-105 transition-all duration-200">
                                            <span>⚡</span>
                                            <span>High-Speed WiFi</span>
                                        </div>
                                        <div className="flex items-center space-x-2 hover:font-bold hover:scale-105 transition-all duration-200">
                                            <span>🅿️</span>
                                            <span>Valet Service</span>
                                        </div>
                                        <div className="flex items-center space-x-2 hover:font-bold hover:scale-105 transition-all duration-200">
                                            <span>🤝</span>
                                            <span>Meeting Pods</span>
                                        </div>
                                        <div className="flex items-center space-x-2 hover:font-bold hover:scale-105 transition-all duration-200">
                                            <span>🌳</span>
                                            <span>Garden Area</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Visit Us Here</h2>
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-[1.02] transition-all duration-300">
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
            </div >
        </div >
    );
}

export default TentangKami;