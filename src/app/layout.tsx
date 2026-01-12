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
  title: "مركز عمان التطوعي",
  description: "المنصة الرسمية لمركز عمان التطوعي. انضم إلينا في بناء مستقبل التطوع في سلطنة عمان. اكتشف الفرص التطوعية، وسجل في الفعاليات، وكن جزءاً من التغيير الإيجابي.",
  keywords: ["مركز عمان التطوعي", "تطوع", "عمان", "Oman Volunteer Center", "Volunteer Oman", "فرص تطوعية", "سلطنة عمان", "خدمة المجتمع"],
  openGraph: {
    title: "مركز عمان التطوعي ",
    description: "المنصة الرسمية لمركز عمان التطوعي. انضم إلينا في بناء مستقبل التطوع في سلطنة عمان.",
    url: "https://volunteerom.org", // Placeholder or actual if known, good for SEO to have structure
    siteName: "مركز عمان التطوعي",
    locale: "ar_OM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز عمان التطوعي",
    description: "المنصة الرسمية لمركز عمان التطوعي. انضم إلينا في بناء مستقبل التطوع في سلطنة عمان.",
  },
  robots: {
    index: true,
    follow: true,
  }
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
          <Threads enableMouseInteraction={true} />
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
