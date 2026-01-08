"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Image updated to match local files and downloaded asset
const SLIDES = [
    {
        id: 1,
        image: "/images/هيثم.jpeg",
        alt: "السلطان هيثم بن طارق",
    },
    {
        id: 2,
        image: "/images/omanvision.jpg",
        alt: "رؤية عمان 2040",
    },
    {
        id: 3,
        image: "/images/volunteering.jpg",
        alt: "العمل التطوعي في عمان",
    },
];

const AUTOPLAY_DELAY = 5000;

export default function HeroSection() {
    const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Helper to handle wrapping indices
    const wrap = (index: number, length: number) => {
        return (index + length) % length;
    };

    const paginate = (newDirection: number) => {
        setCurrentDisplayIndex((prev) => wrap(prev + newDirection, SLIDES.length));
    };

    const goToSlide = (index: number) => {
        setCurrentDisplayIndex(index);
    };

    const startAutoplay = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (!isHovered) {
                paginate(1);
            }
        }, AUTOPLAY_DELAY);
    };

    const stopAutoplay = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [isHovered]); // Restart timer if hover state changes

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-black"
            dir="ltr" // Force LTR for the slider container for consistent positioning, text will be RTL
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Slider */}
            <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                    key={SLIDES[currentDisplayIndex].id}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src={SLIDES[currentDisplayIndex].image}
                        alt={SLIDES[currentDisplayIndex].alt}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay: Purple → Blue gradient for brand */}
            <div className="absolute inset-0 hero-gradient pointer-events-none" /> 

            {/* Content Layer */}
            <div
                className="absolute inset-0 z-10 container mx-auto px-4 md:px-6 flex items-center justify-start"
                dir="rtl" // Inner content is RTL
            >
                <div className="max-w-2xl w-full mr-8 md:mr-16 lg:mr-24">
                    {/* Frosted Glass Quote Card */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
                        <div className="relative z-10 text-right">
                            <div className="mb-6 h-1 w-20 bg-gradient-to-r from-[var(--brand-gold)] to-transparent rounded-full" />
                            <p className="text-xl md:text-3xl font-bold leading-relaxed text-white drop-shadow-md font-sans">
                                "إن العمل التطوعي يعكس القيم الأصيلة للمجتمع العُماني، ويجسّد روح العطاء والمسؤولية، ويُعدّ ركيزةً أساسية في بناء الإنسان وتعزيز التماسك المجتمعي، ومكمّلًا فاعلًا لجهود التنمية الوطنية."
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="h-12 w-1 bg-[var(--brand-gold)] rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--brand-gold)]">
                                        هيثم بن طارق
                                    </h3>
                                    <p className="text-sm text-gray-200">
                                        سلطان عُمان
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative shine */}
                        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
                {/* Pagination Bars */}
                <div className="flex items-center gap-2">
                    {SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentDisplayIndex
                                    ? "w-12 bg-[var(--brand-gold)]"
                                    : "w-4 bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Arrow Controls (Optional/Desktop) */}
                <div className="hidden md:flex items-center gap-4 text-white">
                    <button
                        onClick={() => paginate(-1)}
                        className="p-3 rounded-full border border-white/30 bg-black/20 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                        aria-label="Previous Slide"
                    >
                        <ChevronRight className="w-6 h-6 rotate-180 md:rotate-0" /> {/* RTL Considerations: Icons might need flipping depending on context, using rotation here */}
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="p-3 rounded-full border border-white/30 bg-black/20 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                        aria-label="Next Slide"
                    >
                        <ChevronLeft className="w-6 h-6 rotate-180 md:rotate-0" />
                    </button>
                </div>
            </div>
        </section>
    );
}
