"use client"

import Image from "next/image";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Menu = () => {
  const categories = [
    "Coffee",
    "Non Coffee",
    "Food",
    "Desert",
    "Ready to Drink",
    "Merchandise",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryClick = (category) => {
    if (selectedCategory !== category) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedCategory(category);
        setIsAnimating(false);
      }, 300);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Coffee":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee">
            <path d="M10 2v2" /><path d="M14 2v2" />
            <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" /><path d="M6 2v2" />
          </svg>
        );

      case "Non Coffee":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cup-soda"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
            <path d="M5 8h14" /><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" /><path d="m12 8 1-6h2" />
          </svg>
        );

      case "Food":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
            <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
            <path d="m2.1 21.8 6.4-6.3" /><path d="m19 5-7 7" />
          </svg>
        );

      case "Desert":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cake-slice"><circle cx="9" cy="7" r="2" />
            <path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6" />
            <path d="M16 13H3" /><path d="M16 17H3" />
          </svg>
        );

      case "Ready to Drink":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-milk">
            <path d="M8 2h8" /><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
            <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
          </svg>
        );

      case "Merchandise":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shirt">
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </svg>
        );
      default:
        return category;
    }
  };

  return (
    <div className="bg-primary text-latte">
      {/* Hero Section */}
      <div className="relative bg-primary bg-cover bg-center h-80 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Kopi Pilihan Terbaik</h1>
          <p className="text-lg mt-2">Nikmati kopi premium dari Cafe-In.</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-4 bg-primary shadow-md overflow-x-auto">
        <div className="container py-10 flex space-x-4 px-4 min-w-max mx-auto justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-3 py-1.5 flex items-center justify-center gap-2 transition-all delay-75 text-sm whitespace-nowrap ${selectedCategory === category
                ? "bg-none text-latte transition-all delay-100"
                : "hover:bg-primary hover:text-coffee"
                }`}
              onClick={() => handleCategoryClick(category)}
            >
              <div
                className={`flex items-center justify-center transition-all ${
                  isAnimating && selectedCategory === category
                    ? "animate-fadeOut"
                    : "animate-fadeIn"
                }`}
              >
                {selectedCategory === category ? (
                  <>
                    {getCategoryIcon(category)}
                    <span>{category}</span>
                  </>
                ) : (
                  category
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">Kopi Pilihan Terbaik Untukmu</h2>

        {/* Filters */}
        <div className="flex justify-between items-center mb-4">
          <button className="border px-4 py-2 rounded-md bg-primary text-white">
            Filter
          </button>
          <button className="border px-4 py-2 rounded-md">Urutan</button>
        </div>

        {/* Products */}
        <ProductCard />
      </div>
    </div>
  );
};

export default Menu;
