"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, LogIn } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggle = () => setIsOpen((s) => !s);

    return (
        <div className="site-navbar">
            <div className={`nav-inner ${scrolled ? 'scrolled' : 'transparent'}`}>
                {/* Right-aligned (RTL) menu */}
                <div className="nav-menu hidden md:flex" dir="rtl">
                    <div className="nav-item-group relative">
                        <button className="nav-link" aria-haspopup="true" onClick={toggle} aria-expanded={isOpen}>
                            عن المركز <span className="nav-caret">▾</span>
                        </button>
                        <div className="nav-dropdown" role="menu">
                            <Link href="/about#who-we-are" className="text-sm px-3 py-2 text-white">من نحن</Link>
                            <Link href="/about#objectives" className="text-sm px-3 py-2 text-white">الأهداف</Link>
                            <Link href="/about#vision" className="text-sm px-3 py-2 text-white">الرؤية والرسالة</Link>
                        </div>
                    </div>

                    <Link href="/contact" className="nav-link">تواصل معنا</Link>

                    <Link href="/services#initiative" className="nav-link">طلب مبادرة</Link>
                    <Link href="/services#hall" className="nav-link">حجز قاعة</Link>
                    <Link href="/services#enrollment" className="nav-link">الاشتراك في فعالية</Link>
                    <Link href="/services#volunteer" className="nav-link">طلب متطوعين</Link>

                    <Link href="/" className="nav-link" aria-label="Home">
                        <Home className="w-4 h-4" />
                    </Link>
                </div>

                {/* Left side circle */}
                <div className="flex items-center gap-3">
                    <Link href="/login" className="hidden md:flex items-center gap-2 nav-link hover:text-[var(--brand-gold)] transition-colors">
                        <LogIn size={20} />
                        <span className="text-sm font-medium">تسجيل الدخول</span>
                    </Link>
                    <button className="nav-circle" aria-label="Profile / Language">ع</button>
                </div>

                {/* Mobile Quick Links */}
                <div className="md:hidden flex flex-1 items-center justify-center gap-2 pl-14">
                    <Link href="/services#initiative" className="text-[10px] font-bold text-white hover:text-[var(--brand-gold)] transition-colors whitespace-nowrap">طلب مبادرة</Link>
                    <Link href="/services#enrollment" className="text-[10px] font-bold text-white hover:text-[var(--brand-gold)] transition-colors whitespace-nowrap">الاشتراك في فعالية</Link>
                    <Link href="/services#volunteer" className="text-[10px] font-bold text-white hover:text-[var(--brand-gold)] transition-colors whitespace-nowrap">طلب متطوعين</Link>
                </div>

                {/* Mobile hamburger */}
                <div className="md:hidden absolute left-6 top-3">
                    <button onClick={toggle} className="p-2 rounded-md border border-white/10 bg-white/5">
                        <span className="block w-5 h-0.5 bg-white mb-1" />
                        <span className="block w-5 h-0.5 bg-white" />
                    </button>
                </div>

            </div>

            {/* Mobile panel */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setIsOpen(false)}>
                    <div className="absolute top-20 right-4 bg-white/5 backdrop-blur-md rounded-lg p-4 w-64 text-right" dir="rtl" onClick={(e) => e.stopPropagation()}>
                        <Link href="/" className="block py-2 px-3 text-white">الرئيسية</Link>
                        <Link href="/about#who-we-are" className="block py-2 px-3 text-white">عن المركز</Link>
                        <Link href="/contact" className="block py-2 px-3 text-white">تواصل معنا</Link>
                        <Link href="/login" className="block py-2 px-3 text-white">تسجيل الدخول</Link>
                    </div>
                </div>
            )}
        </div>
    );
} 
