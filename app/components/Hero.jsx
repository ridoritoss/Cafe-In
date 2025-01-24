"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    {
      title: "Selamat Datang di Cafe-In",
      subtitle: "Rasakan aroma kopi yang menggugah selera",
      buttonText: "Menu Kami",
      image: "/assets/Hero/Coffee1.jpg",
    },
    {
      title: "Nikmati Saat Santai Anda",
      subtitle: "Ditemani secangkir kopi dan suasana hangat",
      buttonText: "Pesan Sekarang",
      image: "/assets/Hero/Coffee2.jpg",
    },
    {
      title: "Lebih Dari Sekadar Cafe",
      subtitle: "Tempat sempurna untuk berkumpul dan bersantai",
      buttonText: "Temukan Cabang Kami",
      image: "/assets/Hero/Coffee3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, buttonText, image } = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-2xl font-light">{subtitle}</p>
        <button className="mt-6 px-8 py-3 bg-transparent text-white font-semibold border border-white rounded-lg hover:bg-white hover:text-coffee hover:shadow-none transition-all">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
