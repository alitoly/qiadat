"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

// Sample Data
const mediaItems = [
    {
        id: 1,
        title: "انطلاق موسم التطوع الجديد 2025",
        date: "05 ديسمبر 2024",
        category: "أخبار",
        image: "/images/volunteer.png",
        excerpt: "شهد اليوم انطلاق فعاليات موسم التطوع الجديد بمشاركة واسعة من الفرق التطوعية من مختلف محافظات السلطنة، حيث تم استعراض خطة عمل العام الجديد."
    },
    {
        id: 2,
        title: "حملة تنظيف الشواطئ تحقق نجاحاً باهراً",
        date: "20 نوفمبر 2024",
        category: "مبادرات",
        image: "/images/clean.png",
        excerpt: "تمكن المتطوعون من إزالة أكثر من 5 أطنان من المخلفات في حملة تنظيف الشواطئ التي أقيمت في ولاية السيب، بمشاركة طلاب المدارس وأفراد المجتمع."
    },
    {
        id: 3,
        title: "شراكة استراتيجية مع وزارة الثقافة والرياضة",
        date: "28 نوفمبر 2024",
        category: "أخبار",
        image: "/images/sport.png",
        excerpt: "توقيع اتفاقية تعاون مشترك لتعزيز العمل التطوعي في القطاع الرياضي، وتأهيل الكوادر الوطنية لتنظيم الأحداث الرياضية الكبرى."
    },
    {
        id: 4,
        title: "ملتقى القيادات الشابة الثالث",
        date: "15 يناير 2025",
        category: "فعاليات",
        image: "/images/pic1.png",
        excerpt: "تجمع سنوي يهدف إلى تمكين الشباب وتبادل الخبرات في مجال القيادة والعمل المجتمعي، بمشاركة نخبة من المتحدثين الملهمين."
    },
    {
        id: 5,
        title: "ورشة عمل: أساسيات العمل التطوعي",
        date: "10 فبراير 2025",
        category: "فعاليات",
        image: "/images/pic2.png",
        excerpt: "ورشة تدريبية مكثفة للمتطوعين الجدد للتعرف على حقوق وواجبات المتطوع، وآليات العمل في الفرق التطوعية والمؤسسات الأهلية."
    },
    {
        id: 6,
        title: "إطلاق جائزة التطوع الوطنية",
        date: "01 مارس 2025",
        category: "إعلانات",
        image: "/images/pic3.png",
        excerpt: "الإعلان عن فتح باب الترشح لجائزة التطوع الوطنية في دورتها الخامسة، والتي تهدف إلى تكريم المبادرات الفردية والمؤسسية المتميزة."
    },
    {
        id: 7,
        title: "اليوم العالمي للتطوع",
        date: "05 ديسمبر 2024",
        category: "أخبار",
        image: "/images/pic4.png",
        excerpt: "احتفال سنوي لتكريم المتطوعين، يسلط الضوء على قصص نجاح ملهمة وأثر العمل التطوعي في تنمية المجتمع."
    },
    {
        id: 8,
        title: "مبادرة 'ابتسامة' لدعم الأطفال المرضى",
        date: "25 ديسمبر 2024",
        category: "مبادرات",
        image: "/images/pic5.png",
        excerpt: "زيارات ميدانية للمستشفيات لتوزيع الهدايا وتنظيم أنشطة ترفيهية للأطفال، بهدف رسم البسمة على وجوههم وتقديم الدعم النفسي لهم ولأسرهم."
    }
];

export default function MediaPage() {
    const tabs = ["الكل", "أخبار", "فعاليات", "مبادرات", "إعلانات"];
    const [activeTab, setActiveTab] = useState("الكل");

    const filteredItems = activeTab === "الكل"
        ? mediaItems
        : mediaItems.filter(item => item.category === activeTab);

    return (
        <div className="min-h-screen relative isolate py-12">
            {/* Background Image */}
            {/* Background */}
            <div className="fixed inset-0 -z-10 bg-[#5B6683]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#687492]/50 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#9995AB]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#687492]/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">المركز الإعلامي</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">تابع آخر أخبار المركز، الفعاليات القادمة، والمبادرات المجتمعية.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={clsx(
                                "px-6 py-2 rounded-xl transition-all duration-300 font-bold border",
                                activeTab === tab
                                    ? "bg-[var(--brand-gold)] text-[var(--brand-blue)] border-[var(--brand-gold)] shadow-[0_0_20px_rgba(255,215,0,0.3)] transform scale-105"
                                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <article key={item.id} className="group bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-[var(--brand-blue)]/90 backdrop-blur-md text-[var(--brand-gold)] border border-[var(--brand-gold)]/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                        {item.category}
                                    </span>
                                </div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/90 via-transparent to-transparent opacity-60"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow relative">
                                <div className="flex items-center gap-4 text-xs text-[var(--brand-gold)]/80 mb-4 font-medium">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>3 دقائق قراءة</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[var(--brand-gold)] transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                                    {item.excerpt}
                                </p>

                                <Link href="#" className="inline-flex items-center text-[var(--brand-gold)] font-bold text-sm hover:text-white transition-colors mt-auto group/link">
                                    اقرأ المزيد
                                    <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/link:-translate-x-1 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 shadow-sm">
                        <p className="text-gray-400 text-lg">لا توجد محتويات في هذا التصنيف حالياً.</p>
                    </div>
                )}

                {/* Pagination (Visual Only) */}
                <div className="mt-16 flex justify-center gap-2" dir="ltr">
                    <button className="w-10 h-10 rounded-full border border-white/10 text-white/70 hover:bg-[var(--brand-gold)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-gold)] transition-all flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[var(--brand-gold)] text-[var(--brand-blue)] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(162,38,142,0.5)]">1</button>
                    <button className="w-10 h-10 rounded-full border border-white/10 text-white/70 hover:bg-[var(--brand-gold)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-gold)] transition-all flex items-center justify-center">2</button>
                    <button className="w-10 h-10 rounded-full border border-white/10 text-white/70 hover:bg-[var(--brand-gold)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-gold)] transition-all flex items-center justify-center">3</button>
                    <button className="w-10 h-10 rounded-full border border-white/10 text-white/70 hover:bg-[var(--brand-gold)] hover:text-[var(--brand-blue)] hover:border-[var(--brand-gold)] transition-all flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
