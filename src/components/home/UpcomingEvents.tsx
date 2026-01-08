"use client";

import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";

// Sample Data
const events = [
    {
        id: 1,
        title: "لقاء المتطوعين لماراثون مسقط",
        date: "29 ديسمبر",
        time: "09:00 صباحاً",
        location: "القاعة الرئيسية"
    },
    {
        id: 2,
        title: "ورشة القيادة الشبابية",
        date: "05 يناير",
        time: "04:30 مساءً",
        location: "مركز التدريب"
    },
    {
        id: 3,
        title: "حفل العشاء الخيري",
        date: "12 يناير",
        time: "07:00 مساءً",
        location: "قاعة الاحتفالات الكبرى"
    },
];

export default function UpcomingEvents() {
    return (
        <section className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-white/10 h-full">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--brand-gold)]/20">
                    <Calendar className="text-[var(--brand-gold)]" size={24} />
                </div>
                الفعاليات القادمة
            </h2>

            <div className="space-y-6">
                {events.map((event) => (
                    <div key={event.id} className="flex gap-4 group cursor-pointer p-4 rounded-xl hover:bg-[#A2268E]/20 transition-colors">
                        {/* Date Block */}
                        <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-[var(--brand-blue)] rounded-xl border border-white/10 text-white shadow-lg group-hover:scale-105 transition-transform">
                            <span className="text-xs font-bold uppercase opacity-70 text-[var(--brand-gold)]">{event.date.split(' ')[1]}</span>
                            <span className="text-2xl font-bold">{event.date.split(' ')[0]}</span>
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-lg leading-tight group-hover:text-white transition-colors">
                                {event.title}
                            </h4>
                            <div className="mt-2 text-sm text-gray-400 flex flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <Clock size={14} />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link
                href="/enrollment"
                className="mt-8 block w-full rounded-xl border border-[var(--brand-gold)] p-4 text-center text-sm font-bold text-[var(--brand-gold)] hover:bg-[var(--brand-gold)] hover:text-[var(--brand-blue)] transition-all uppercase tracking-wide"
            >
                عرض التقويم الكامل
            </Link>
        </section>
    );
}
