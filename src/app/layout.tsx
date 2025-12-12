import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google"; // Using IBM Plex Sans Arabic as a modern, clean Arabic font
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Qiadat | مركز عمان التطوعي",
  description: "المنصة الرسمية لمركز عمان التطوعي",
};

import Threads from "@/components/Threads";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibmPlexArabic.variable} font-sans antialiased min-h-screen flex flex-col relative`}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.5 }}>
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
