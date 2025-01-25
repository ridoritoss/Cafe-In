const jenisKopi = [
    {
        nama: 'Arabika',
        deskripsi: 'Kopi Arabika adalah varietas yang paling populer di dunia, dengan cita rasa yang halus dan kompleks. Tumbuh di dataran tinggi dengan ketinggian 600-2000 meter di atas permukaan laut.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Robusta',
        deskripsi: 'Kopi Robusta memiliki kandungan kafein lebih tinggi dan rasa yang lebih kuat. Lebih tahan terhadap hama dan dapat tumbuh di dataran yang lebih rendah.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Liberica',
        deskripsi: 'Kopi Liberica memiliki biji yang lebih besar dan rasa yang unik dengan aroma yang kuat. Varietas ini lebih jarang ditemui dan tumbuh di iklim tropis.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Excelsa',
        deskripsi: 'Kopi Excelsa adalah varietas yang sering dikategorikan sebagai subspesies Liberica. Memiliki rasa yang tajam, fruity, dan aroma yang unik, cocok untuk campuran kopi.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Geisha',
        deskripsi: 'Kopi Geisha dikenal dengan profil rasa yang floral, fruity, dan kompleks. Banyak ditemukan di Panama dan menjadi salah satu varietas kopi termahal di dunia.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Charrieriana',
        deskripsi: 'Kopi Charrieriana berasal dari Afrika Barat dan unik karena alami tanpa kafein. Cocok untuk penikmat kopi yang ingin mengurangi konsumsi kafein.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Luwak',
        deskripsi: 'Kopi Luwak adalah kopi unik yang difermentasi di dalam saluran pencernaan luwak. Memiliki rasa yang lembut dan eksklusif, menjadi salah satu kopi termahal di dunia.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Gayo',
        deskripsi: 'Kopi Gayo berasal dari Aceh, Indonesia. Dikenal dengan rasa earthy, mild acidity, dan aroma rempah yang khas. Banyak disukai oleh pecinta kopi lokal maupun internasional.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Toraja',
        deskripsi: 'Kopi Toraja berasal dari Sulawesi Selatan, Indonesia. Dikenal dengan rasa bold, earthy, dan hint rempah-rempah. Cocok untuk penikmat kopi dengan rasa yang kuat.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Flores Bajawa',
        deskripsi: 'Kopi Flores Bajawa berasal dari Nusa Tenggara Timur. Memiliki rasa chocolatey dengan acidity rendah dan aroma floral yang khas.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Bali Kintamani',
        deskripsi: 'Kopi Bali Kintamani berasal dari Bali. Memiliki rasa citrus yang khas dengan acidity yang segar karena metode tanamnya menggunakan sistem tumpang sari.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Mandailing',
        deskripsi: 'Kopi Mandailing berasal dari Sumatera Utara. Dikenal dengan rasa smooth, body yang tebal, dan hint rasa cokelat atau rempah.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Jawa',
        deskripsi: 'Kopi Jawa dikenal dengan rasa yang clean, acidity yang seimbang, dan body medium. Banyak ditanam di dataran tinggi Ijen dan sekitarnya.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Sidikalang',
        deskripsi: 'Kopi Sidikalang berasal dari Sumatera Utara. Memiliki rasa yang kuat, aroma khas, dan body yang bold, cocok untuk pecinta kopi dengan karakter yang intens.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Wamena',
        deskripsi: 'Kopi Wamena berasal dari Papua. Dikenal dengan rasa earthy, acidity ringan, dan aroma floral. Tumbuh secara organik di pegunungan Jayawijaya.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Blue Mountain',
        deskripsi: 'Kopi Blue Mountain berasal dari Jamaika dan dianggap sebagai salah satu kopi terbaik di dunia. Memiliki rasa smooth, sweet, dan aroma yang kaya.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Vietnam',
        deskripsi: 'Kopi Vietnam dikenal dengan gaya penyajian unik menggunakan drip filter (phin) dan sering disajikan dengan susu kental manis. Rasa cenderung bold dan manis.',
        image: "assets/Coffee/arabica.jpg"
    },
    {
        nama: 'Kopi Ethiopia',
        deskripsi: 'Kopi Ethiopia, dikenal sebagai tempat asal kopi, memiliki profil rasa yang fruity, floral, dan acidity yang cerah. Cocok untuk penyajian metode pour-over.',
        image: "assets/Coffee/arabica.jpg"
    }
];

const TentangKopi = () => {
    return (
        <div className="bg-primary min-h-screen">
            {/* Hero Section */}
            <div className="bg-primary bg-opacity-90 text-latte py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Sejarah Kopi</h1>
                    <p className="text-xl">Menjelajahi Perjalanan Minuman yang Mendunia</p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-4 py-12">
                {/* Kopi Indonesia */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-latte mb-6">Kopi Indonesia</h2>
                    <div className="bg-primary rounded-lg shadow-lg p-6">
                        <p className="text-latte leading-relaxed">
                            Indonesia adalah salah satu produsen kopi terbesar di dunia. Beberapa varian kopi terkenal dari Indonesia termasuk Kopi Gayo dari Aceh, Kopi Toraja dari Sulawesi, dan Kopi Luwak yang terkenal sebagai kopi termahal di dunia.
                        </p>
                    </div>
                </section>

                {/* Hero Section with Dynamic Images */}
                <section data-scroll-section className="mb-16">
                    <h2 className="text-3xl font-bold text-latte mb-6" data-scroll data-scroll-speed="1">Varietas Kopi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        {jenisKopi.map((kopi, index) => (
                            <div
                                key={index}
                                className="relative h-[400px] rounded-lg shadow-lg overflow-hidden transition-transform"
                                data-scroll
                                data-scroll-speed="0.3"
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center z-0"
                                    style={{ backgroundImage: `url(${kopi.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
                                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                                    <h1 className="block md:hidden text-9xl font-semibold text-center mb-3 text-white animate-marquee whitespace-nowrap">
                                        <span className="inline-block">{kopi.nama}</span>
                                    </h1>
                                    <h3 className="hidden md:block font-semibold text-white mb-3">{kopi.nama}</h3>
                                    <p className="text-gray-200 text-lg">{kopi.deskripsi}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TentangKopi