import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'], // Pilih subset yang diperlukan
  weight: ['400', '500', '700'], // Bobot font yang diinginkan
});

export const metadata: Metadata = {
  title: "Portfolio Fadli",
  description: `Software Developer berpengalaman, ahli dalam membangun solusi digital yang scalable dan inovatif. Menghadirkan aplikasi yang efisien untuk meningkatkan kinerja bisnis Anda. Fokus pada kualitas, keamanan, dan keberlanjutan teknologi.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${plusJakartaSans.className} antialiased`} >
        <Navbar />
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
