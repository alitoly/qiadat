"use client";
// Force rebuild

import {
    Megaphone,
    ClipboardList,
    Globe,
    GraduationCap,
    HandHeart,
    Handshake,
    Briefcase,
    BarChart3,
    Leaf
} from "lucide-react";

export default function ObjectivesPage() {
    const objectives = [
        {
            text: "تعزيز ثقافة العمل التطوعي ونشر الوعي بأهمية المشاركة المجتمعية بين مختلف فئات المجتمع.",
            icon: Megaphone
        },
        {
            text: "تنظيم وإدارة العمل التطوعي من خلال وضع معايير واضحة وإجراءات موحدة للفرص والمبادرات التطوعية.",
            icon: ClipboardList
        },
        {
            text: "توفير منصة وطنية متكاملة تربط المتطوعين بالفرص العامة والتخصصية، وتسهّل الوصول إليها وتوثيقها.",
            icon: Globe
        },
        {
            text: "تمكين المتطوعين وتطوير قدراتهم عبر برامج تدريبية متقدمة تُعزز مهاراتهم وتؤهلهم للمشاركة الفعّالة.",
            icon: GraduationCap
        },
        {
            text: "دعم المبادرات المجتمعية وتذليل التحديات المؤسسية والتنظيمية أمام الفرق والمشاريع التطوعية.",
            icon: HandHeart
        },
        {
            text: "تعزيز الشراكات الوطنية مع القطاع الحكومي والخاص والمجتمع المدني والمؤسسات الأكاديمية لدعم منظومة التطوع.",
            icon: Handshake
        },
        {
            text: "تطوير التطوع التخصصي وتوجيه المهارات المهنية للمتطوعين نحو تلبية احتياجات المجتمع والمؤسسات.",
            icon: Briefcase
        },
        {
            text: "توثيق الأثر التطوعي من خلال بناء قواعد بيانات ولوحات مؤشرات تُظهر حجم المشاركة وأثرها الاجتماعي والتنموي.",
            icon: BarChart3
        },
        {
            text: "استدامة العمل التطوعي عبر تصميم برامج طويلة المدى تعزز استمرارية المبادرات وتوسّع أثرها.",
            icon: Leaf
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#1B1F3B] py-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
                    style={{ backgroundImage: "url('/images/vol.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B1F3B]/95 via-[#1B1F3B]/90 to-[#D4AF37]/10"></div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1B1F3B] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block mb-4 px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-sm">
                    <span className="text-[#D4AF37] font-bold tracking-wide">الرؤية المستقبلية</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-20 drop-shadow-lg">
                    الأهداف <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">الاستراتيجية</span>
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {objectives.map((obj, i) => {
                        const Icon = obj.icon;
                        return (
                            <div
                                key={i}
                                className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] flex flex-col items-center text-center overflow-hidden"
                            >
                                {/* Background Number */}
                                <div className="absolute top-2 right-4 text-9xl font-black text-white/5 z-0 group-hover:text-white/20 transition-colors duration-500 font-sans">
                                    {i + 1}
                                </div>

                                {/* Icon Bubble */}
                                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                                    <Icon size={40} className="text-[#D4AF37] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <p className="text-gray-300 font-medium text-lg leading-loose group-hover:text-white transition-colors duration-300">
                                        {obj.text}
                                    </p>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
