"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        if (isMenuOpen) toggleMenu();
    };

    const getLinkClass = (menu) =>
        menu === activeMenu
            ? "text-yellow-400 font-semibold"
            : "text-latte hover:text-yellow-400 transition";

    return (
        <header className="fixed top-0 left-0 w-full mb-4 py-6 bg-transparent z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-4xl font-extrabold text-latte"
                    onClick={() => handleMenuClick("home")}
                >
                    Cafe-In
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex font-semibold space-x-6">
                    <Link
                        href="/menu"
                        className={getLinkClass("menu")}
                        onClick={() => handleMenuClick("menu")}
                    >
                        Menu
                    </Link>
                    <Link
                        href="/tentang-kami"
                        className={getLinkClass("tentang-kami")}
                        onClick={() => handleMenuClick("tentang-kami")}
                    >
                        Tentang Kami
                    </Link>
                    <Link
                        href="/tentang-kopi"
                        className={getLinkClass("tentang-kopi")}
                        onClick={() => handleMenuClick("tentang-kopi")}
                    >
                        Tentang Kopi
                    </Link>
                </nav>

                {/* Login Button */}
                <button
                    className="hidden md:block px-4 py-2 bg-transparent border border-latte text-latte hover:bg-gradient-to-t transition"
                    onClick={() => handleMenuClick("login")}
                >
                    Login
                </button>

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
                <div 
                    className={`absolute top-full left-0 w-full bg-coffee md:hidden transform transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
                >
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <Link
                            href="/menu"
                            className={getLinkClass("menu")}
                            onClick={() => handleMenuClick("menu")}
                        >
                            Menu
                        </Link>
                        <Link
                            href="/tentang-kami"
                            className={getLinkClass("tentang-kami")}
                            onClick={() => handleMenuClick("tentang-kami")}
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            href="/tentang-kopi"
                            className={getLinkClass("tentang-kopi")}
                            onClick={() => handleMenuClick("tentang-kopi")}
                        >
                            Tentang Kopi
                        </Link>
                    </nav>
                    <button
                        className="w-full py-2 bg-transparent border border-latte text-latte hover:bg-gradient-to-t transition md:hidden"
                        onClick={() => handleMenuClick("login")}
                    >
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
