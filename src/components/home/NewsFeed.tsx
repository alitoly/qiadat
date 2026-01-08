"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Sample Data
const news = [
    {
        id: 1,
        title: "انطلاق موسم التطوع الجديد 2025",
        date: "05 ديسمبر 2024",
        image: "/images/volunteer.png",
        category: "إعلانات"
    },
    {
        id: 2,
        title: "شراكة استراتيجية مع وزارة الثقافة والرياضة",
        date: "28 نوفمبر 2024",
        image: "/images/sport.png",
        category: "شراكات"
    },
    {
        id: 3,
        title: "حملة تنظيف الشواطئ تحقق نجاحاً باهراً",
        date: "20 نوفمبر 2024",
        image: "/images/clean.png",
        category: "فعاليات"
    },
];

export default function NewsFeed() {
    return (
        <section>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-8 bg-[var(--brand-gold)] rounded-full block"></span>
                    آخر الأخبار
                </h2>
                <Link href="/media" className="group flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)] hover:text-white transition-colors">
                    عرض جميع الأخبار <ArrowRight size={16} className="transition-transform group-hover:-translate-x-1 rotate-180" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                    <article
                        key={item.id}
                        className="group relative h-[400px] w-full cursor-pointer overflow-hidden rounded-[2rem] bg-neutral-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        {/* Background Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay (alternate purple/blue by index) */}
                        <div className={`absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-70 ${item.id % 2 === 1 ? 'bg-gradient-to-t from-[hsl(var(--brand-purple)/0.85)] via-[hsl(var(--brand-purple)/0.6)] to-transparent' : 'bg-gradient-to-t from-[hsl(var(--brand-blue)/0.85)] via-[hsl(var(--brand-blue)/0.6)] to-transparent'}`}></div>

                        {/* Top Category Badge */}
                        <div className="absolute top-6 right-6 z-10">
                            <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md border border-white/10">
                                {item.category}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-4 transform transition-transform duration-500">
                            {/* Date */}
                            <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                                <Calendar size={14} className="text-[var(--brand-gold)]" />
                                <time>{item.date}</time>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white leading-tight transition-colors">
                                {item.title}
                            </h3>

                            {/* Pill Button */}
                            <div className="mt-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                <Link href="/media" className="inline-flex items-center gap-2 rounded-full btn-outline-gold px-5 py-2 text-sm font-semibold transition-colors">
                                    اقرأ المزيد
                                    <ArrowRight size={14} className="rotate-180" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
