"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full mb-4 bg-coffee shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl text-latte">
                    Cafe-In
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    <Link
                        href="/menu"
                        className="text-latte hover:text-yellow-400 transition">
                        Menu
                    </Link>
                    <Link
                        href="/tentang-kami"
                        className="text-latte hover:text-yellow-400 transition">
                        Tentang Kami
                    </Link>
                    <Link
                        href="/tentang-kopi"
                        className="text-latte hover:text-yellow-400 transition">
                        Tentang Kopi
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="text-latte md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-coffee md:hidden">
                        <nav className="flex flex-col items-center space-y-4 py-4">
                            <Link href="/menu">
                                <a
                                    className="text-latte hover:text-yellow-400 transition"
                                    onClick={toggleMenu}
                                >
                                    Menu
                                </a>
                            </Link>
                            <Link href="/about">
                                <a
                                    className="text-latte hover:text-yellow-400 transition"
                                    onClick={toggleMenu}
                                >
                                    Tentang Kami
                                </a>
                            </Link>
                            <Link href="/locations">
                                <a
                                    className="text-latte hover:text-yellow-400 transition"
                                    onClick={toggleMenu}
                                >
                                    Lokasi
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a
                                    className="text-latte hover:text-yellow-400 transition"
                                    onClick={toggleMenu}
                                >
                                    Hubungi Kami
                                </a>
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
