import React from "react";
import Link from "next/link";
import Social from "../components/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Tentang Cafe-In</h3>
          <p className="text-sm">
            Cafe-In adalah platform kopi premium yang menyediakan berbagai pilihan kopi terbaik dari seluruh penjuru dunia. Kami berdedikasi untuk memberikan pengalaman minum kopi terbaik bagi Anda.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Navigasi Cepat</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-gray-300 transition">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/tentang-kami" className="hover:text-gray-300 transition">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/tentang-kopi" className="hover:text-gray-300 transition">
                Tentang Kopi
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
          <p className="text-sm mb-2">Jl. Kopi No. 123, Jakarta</p>
          <p className="text-sm mb-2">Email: support@cafe-in.com</p>
          <p className="text-sm mb-4">Telp: +62 812-3456-7890</p>
          <div className="flex space-x-4">
            <Social />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-latte pt-4 text-center">
        <p className="text-sm">&copy; 2025 Cafe-In. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
