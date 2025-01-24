const jenisKopi = [
    {
        nama: 'Arabika',
        deskripsi: 'Kopi Arabika adalah varietas yang paling populer di dunia, dengan cita rasa yang halus dan kompleks. Tumbuh di dataran tinggi dengan ketinggian 600-2000 meter di atas permukaan laut.',
        image: ""
    },
    {
        nama: 'Robusta',
        deskripsi: 'Kopi Robusta memiliki kandungan kafein lebih tinggi dan rasa yang lebih kuat. Lebih tahan terhadap hama dan dapat tumbuh di dataran yang lebih rendah.',
        image: ""
    },
    {
        nama: 'Liberica',
        deskripsi: 'Kopi Liberica memiliki biji yang lebih besar dan rasa yang unik dengan aroma yang kuat. Varietas ini lebih jarang ditemui dan tumbuh di iklim tropis.',
        image: ""
    },
    {
        nama: 'Excelsa',
        deskripsi: 'Kopi Excelsa adalah varietas yang sering dikategorikan sebagai subspesies Liberica. Memiliki rasa yang tajam, fruity, dan aroma yang unik, cocok untuk campuran kopi.',
        image: ""
    },
    {
        nama: 'Geisha',
        deskripsi: 'Kopi Geisha dikenal dengan profil rasa yang floral, fruity, dan kompleks. Banyak ditemukan di Panama dan menjadi salah satu varietas kopi termahal di dunia.',
        image: ""
    },
    {
        nama: 'Charrieriana',
        deskripsi: 'Kopi Charrieriana berasal dari Afrika Barat dan unik karena alami tanpa kafein. Cocok untuk penikmat kopi yang ingin mengurangi konsumsi kafein.',
        image: ""
    },
    {
        nama: 'Kopi Luwak',
        deskripsi: 'Kopi Luwak adalah kopi unik yang difermentasi di dalam saluran pencernaan luwak. Memiliki rasa yang lembut dan eksklusif, menjadi salah satu kopi termahal di dunia.',
        image: ""
    },
    {
        nama: 'Kopi Gayo',
        deskripsi: 'Kopi Gayo berasal dari Aceh, Indonesia. Dikenal dengan rasa earthy, mild acidity, dan aroma rempah yang khas. Banyak disukai oleh pecinta kopi lokal maupun internasional.',
        image: ""
    },
    {
        nama: 'Kopi Toraja',
        deskripsi: 'Kopi Toraja berasal dari Sulawesi Selatan, Indonesia. Dikenal dengan rasa bold, earthy, dan hint rempah-rempah. Cocok untuk penikmat kopi dengan rasa yang kuat.',
        image: ""
    },
    {
        nama: 'Kopi Flores Bajawa',
        deskripsi: 'Kopi Flores Bajawa berasal dari Nusa Tenggara Timur. Memiliki rasa chocolatey dengan acidity rendah dan aroma floral yang khas.',
        image: ""
    },
    {
        nama: 'Kopi Bali Kintamani',
        deskripsi: 'Kopi Bali Kintamani berasal dari Bali. Memiliki rasa citrus yang khas dengan acidity yang segar karena metode tanamnya menggunakan sistem tumpang sari.',
        image: ""
    },
    {
        nama: 'Kopi Mandailing',
        deskripsi: 'Kopi Mandailing berasal dari Sumatera Utara. Dikenal dengan rasa smooth, body yang tebal, dan hint rasa cokelat atau rempah.',
        image: ""
    },
    {
        nama: 'Kopi Jawa',
        deskripsi: 'Kopi Jawa dikenal dengan rasa yang clean, acidity yang seimbang, dan body medium. Banyak ditanam di dataran tinggi Ijen dan sekitarnya.',
        image: ""
    },
    {
        nama: 'Kopi Sidikalang',
        deskripsi: 'Kopi Sidikalang berasal dari Sumatera Utara. Memiliki rasa yang kuat, aroma khas, dan body yang bold, cocok untuk pecinta kopi dengan karakter yang intens.',
        image: ""
    },
    {
        nama: 'Kopi Wamena',
        deskripsi: 'Kopi Wamena berasal dari Papua. Dikenal dengan rasa earthy, acidity ringan, dan aroma floral. Tumbuh secara organik di pegunungan Jayawijaya.',
        image: ""
    },
    {
        nama: 'Kopi Blue Mountain',
        deskripsi: 'Kopi Blue Mountain berasal dari Jamaika dan dianggap sebagai salah satu kopi terbaik di dunia. Memiliki rasa smooth, sweet, dan aroma yang kaya.',
        image: ""
    },
    {
        nama: 'Kopi Vietnam',
        deskripsi: 'Kopi Vietnam dikenal dengan gaya penyajian unik menggunakan drip filter (phin) dan sering disajikan dengan susu kental manis. Rasa cenderung bold dan manis.',
        image: ""
    },
    {
        nama: 'Kopi Ethiopia',
        deskripsi: 'Kopi Ethiopia, dikenal sebagai tempat asal kopi, memiliki profil rasa yang fruity, floral, dan acidity yang cerah. Cocok untuk penyajian metode pour-over.',
        image: ""
    }
];



const TentangKopi = () => {
    return (
        <div className="bg-cream min-h-screen">
            {/* Hero Section */}
            <div className="bg-coffee bg-opacity-90 text-cream py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Sejarah Kopi</h1>
                    <p className="text-xl">Menjelajahi Perjalanan Minuman yang Mendunia</p>
                </div>
            </div>



            {/* Content Sections */}
            <div className="container mx-auto px-4 py-12">
                {/* Kopi Indonesia */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-coffee mb-6">Kopi Indonesia</h2>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <p className="text-gray-700 leading-relaxed">
                            Indonesia adalah salah satu produsen kopi terbesar di dunia. Beberapa varian kopi terkenal dari Indonesia termasuk Kopi Gayo dari Aceh, Kopi Toraja dari Sulawesi, dan Kopi Luwak yang terkenal sebagai kopi termahal di dunia.
                        </p>
                    </div>
                </section>

                {/* Hero Section with Dynamic Images */}
                <section data-scroll-section className="mb-16">
                    <h2 className="text-3xl font-bold text-coffee mb-6" data-scroll data-scroll-speed="1">Varietas Kopi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        {jenisKopi.map((kopi, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-14 transition-transform hover:scale-105"
                                data-scroll
                                data-scroll-speed="0.3"
                            >
                                {kopi.image && (
                                    <img
                                        src={kopi.image}
                                        alt={kopi.nama}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                )}
                                <h1 className="text-2xl font-bold mb-3 text-coffee">{kopi.nama}</h1>
                                <p className="text-gray-700 text-sm">{kopi.deskripsi}</p>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </div>
    );
}

export default TentangKopi