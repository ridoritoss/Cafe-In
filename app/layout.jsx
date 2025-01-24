import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import PageTransition from "./components/PageTransition"; // Import PageTransition
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
        <Header />

        {/* Animasi Transisi Antar Halaman */}
        <PageTransition>
          <main>{children}</main>
        </PageTransition>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
