"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Objectives", href: "/objectives" },
    { name: "Services", href: "/services" },
    { name: "Media", href: "/media" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-navy text-white shadow-md">
            {/* Top Bar for Socials/Login */}
            <div className="container mx-auto flex h-10 items-center justify-between px-4 text-xs md:px-6">
                <div className="flex items-center gap-4">
                    <span className="text-gray-300">Welcome to Oman Volunteer Center</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="flex items-center gap-1 hover:text-cream transition-colors">
                        <User size={14} />
                        <span>Register / Login</span>
                    </Link>
                </div>
            </div>

            {/* Main Nav */}
            <div className="border-t border-white/10 glass-nav">
                <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                    {/* Logo Placeholder */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <span className="text-cream text-2xl">Qiadat</span>
                        <span className="text-sm font-normal text-gray-300 hidden md:inline-block">Oman Volunteer Center</span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-cream",
                                    pathname === item.href ? "text-cream underline underline-offset-4" : "text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Link
                            href="/request/volunteer"
                            className="rounded-full bg-cream px-6 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(239,232,186,0.3)]"
                        >
                            Volunteer With Us
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-white/10 bg-navy p-4 pb-8 animate-accordion-down">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-lg font-medium text-white hover:text-cream"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/request/volunteer"
                            className="mt-4 inline-flex justify-center rounded-full bg-cream px-6 py-3 text-sm font-semibold text-navy hover:bg-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Volunteer With Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
