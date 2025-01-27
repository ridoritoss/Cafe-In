import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cafe-In",
  description: "A simple cafe website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-latte text-coffee`}
      >
        {/* Header */}
          <Header className="mb-8" />

          {/* Animasi Transisi Antar Halaman */}
          <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
