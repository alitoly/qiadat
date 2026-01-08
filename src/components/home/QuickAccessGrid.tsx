"use client";

import Link from "next/link";
import { Users, Calendar, Lightbulb, Building } from "lucide-react";

const services = [
    {
        title: "طلب متطوعين",
        icon: Users,
        href: "/request/volunteer",
        color: "bg-navy",
        textColor: "text-white",
        description: "اطلب متطوعين لفعاليتك أو مبادرتك."
    },
    {
        title: "الاشتراك في الفعاليات",
        icon: Calendar,
        href: "/enrollment",
        color: "bg-cream",
        textColor: "text-navy",
        description: "انضم إلى الفعاليات القادمة مثل ماراثون مسقط."
    },
    {
        title: "طلب مبادرة",
        icon: Lightbulb,
        href: "/request/initiative",
        color: "bg-navy",
        textColor: "text-white",
        description: "قدم مقترح مبادرة جديدة للموافقة عليها."
    },
    {
        title: "حجز قاعة",
        icon: Building,
        href: "/booking/hall",
        color: "bg-cream",
        textColor: "text-navy",
        description: "احجز قاعاتنا متعددة الأغراض لفعالياتك."
    },
];

export default function QuickAccessGrid() {
    return (
        <div className="container mx-auto px-4 relative z-20 -mt-20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <Link
                            key={index}
                            href={service.href}
                            className={`
                        group relative overflow-hidden rounded-xl p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl
                        ${service.color} ${service.textColor}
                    `}
                        >
                            <div className="relative z-10 flex flex-col gap-4">
                                <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center 
                            ${service.textColor === 'text-white' ? 'bg-white/10' : 'bg-navy/10'}
                        `}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className={`text-sm opacity-90 leading-snug`}>
                                        {service.description}
                                    </p>
                                </div>
                                <div className="mt-2 text-xs font-semibold uppercase tracking-wider opacity-75 group-hover:opacity-100 flex items-center gap-2">
                                    تصفح <span>&larr;</span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}
