"use client";

import React from "react";
import { Target, Compass, Heart, Users, Star, Shield, Zap, Globe, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    const objectives = [
        "تعزيز ثقافة العمل التطوعي ونشر الوعي بأهمية المشاركة المجتمعية بين مختلف فئات المجتمع.",
        "تنظيم وإدارة العمل التطوعي من خلال وضع معايير واضحة وإجراءات موحدة للفرص والمبادرات التطوعية.",
        "توفير منصة وطنية متكاملة تربط المتطوعين بالفرص العامة والتخصصية، وتسهّل الوصول إليها وتوثيقها.",
        "تمكين المتطوعين وتطوير قدراتهم عبر برامج تدريبية متقدمة تُعزز مهاراتهم وتؤهلهم للمشاركة الفعّالة.",
        "دعم المبادرات المجتمعية وتذليل التحديات المؤسسية والتنظيمية أمام الفرق والمشاريع التطوعية.",
        "تعزيز الشراكات الوطنية مع القطاع الحكومي والخاص والمجتمع المدني والمؤسسات الأكاديمية لدعم منظومة التطوع.",
        "تطوير التطوع التخصصي وتوجيه المهارات المهنية للمتطوعين نحو تلبية احتياجات المجتمع والمؤسسات.",
        "توثيق الأثر التطوعي من خلال بناء قواعد بيانات ولوحات مؤشرات تُظهر حجم المشاركة وأثرها الاجتماعي والتنموي.",
        "استدامة العمل التطوعي عبر تصميم برامج طويلة المدى تعزز استمرارية المبادرات وتوسّع أثرها."
    ];

    const values = [
        { name: "المواطنة", icon: Shield },
        { name: "روح الفريق", icon: Users },
        { name: "الابتكار", icon: Zap },
        { name: "التمكين", icon: Star },
        { name: "الاستدامة", icon: Globe },
        { name: "الشراكة", icon: Heart },
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-[var(--brand-blue)] min-h-screen text-white overflow-hidden">

            {/* 1. Who We Are (Alternating Layout) */}
            <section id="who-we-are" className="relative py-24 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] font-bold mb-6 text-sm border border-[var(--brand-gold)]/30">
                                عن المركز
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                المظلة الوطنية الشاملة <br />
                                <span className="text-[var(--brand-gold)]">للعمل التطوعي</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-loose mb-8 text-justify">
                                يُعدّ مركز عُمان التطوعي المظلة الوطنية الشاملة لاحتضان وتنظيم الأنشطة والمبادرات التطوعية في السلطنة، انسجامًا مع رؤية وزارة الثقافة والرياضة والشباب واستراتيجيتها الرامية إلى تعزيز ثقافة العمل التطوعي وترسيخ قيمه في المجتمع العُماني، ليكون ركيزة أساسية في التنمية المستدامة.
                            </p>
                            <div className="flex gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-3xl font-bold text-[var(--brand-gold)] mb-1">+500</h3>
                                    <p className="text-sm text-gray-400">مبادرة تطوعية</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-3xl font-bold text-[var(--brand-gold)] mb-1">+20k</h3>
                                    <p className="text-sm text-gray-400">ساعة تطوع</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                <img src="/images/vol.jpg" alt="About Oman Volunteering" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/80 to-transparent"></div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--brand-gold)] rounded-full blur-[80px] opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Vision & Mission (Cards) */}
            <section className="py-24 bg-black/20 relative">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -right-[20%] top-[20%] w-[600px] h-[600px] bg-[var(--brand-green)]/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        {/* Vision - Flip Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="group h-full perspective-[1000px]"
                        >
                            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-[2.5rem]">
                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl">
                                    <img
                                        src="/images/vision.png"
                                        alt="Vision"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-[var(--brand-blue)]/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg border border-white/10">
                                            <Compass size={32} className="text-[var(--brand-gold)]" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white">الرؤية</h2>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className="relative w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#5B6683] p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-xl flex flex-col justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--brand-blue)] flex items-center justify-center mb-8 shadow-lg shadow-[var(--brand-blue)]/40">
                                        <Compass size={32} className="text-[var(--brand-gold)]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">الرؤية</h2>
                                    <p className="text-gray-100 leading-relaxed text-base md:text-lg">
                                        أن يكون مركز عُمان التطوعي المنصة الوطنية الرائدة في تمكين العمل التطوعي وتعزيز أثره التنموي، وبناء مجتمع واعٍ ومبادرات مستدامة تسهم في تحقيق رؤية عُمان 2040.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        {/* Mission - Flip Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                            className="group h-full perspective-[1000px]"
                        >
                            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-[2.5rem]">
                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl">
                                    <img
                                        src="/images/message.png"
                                        alt="Mission"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-[var(--brand-blue)]/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg border border-white/10">
                                            <Target size={32} className="text-[var(--brand-gold)]" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white">الرسالة</h2>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className="relative w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#5B6683] p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-xl flex flex-col justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--brand-blue)] flex items-center justify-center mb-8 shadow-lg shadow-[var(--brand-blue)]/40">
                                        <Target size={32} className="text-[var(--brand-gold)]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">الرسالة</h2>
                                    <p className="text-gray-100 leading-relaxed text-base md:text-lg">
                                        تنظيم وتطوير العمل التطوعي في سلطنة عُمان عبر منصة وطنية متكاملة تربط المتطوعين بالفرص العامة والتخصصية، وتمكّن الجهات والمبادرات من تنفيذ أعمال تطوعية عالية الجودة ذات أثر تنموي.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Values (Grid) */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">قيمنا الراسخة</h2>
                        <div className="w-24 h-1 bg-[var(--brand-gold)] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {values.map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="mb-4 text-[var(--brand-gold)] group-hover:text-white transition-colors duration-300">
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-bold text-white text-lg">{value.name}</h3>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>



            {/* 5. Partners */}
            <section id="partners" className="py-24 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-gold)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-blue)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">الشركاء</h2>
                        <div className="w-24 h-1 bg-[var(--brand-gold)] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
                        {[
                            { name: "وزارة الثقافة والرياضة والشباب", img: "/images/sport1.png" },
                            { name: "وزارة التنمية الاجتماعية", img: "/images/soci.png" },
                            { name: "جهاز الاستثمار العماني", img: "/images/invest.jpeg" },
                        ].map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:border-[var(--brand-gold)]/30 hover:bg-white/10 transition-all duration-500"
                            >
                                <div className="h-32 w-full flex items-center justify-center mb-6 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <img
                                        src={partner.img}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <h3 className="text-white font-bold text-center text-sm md:text-base opacity-80 group-hover:opacity-100 group-hover:text-[var(--brand-gold)] transition-all duration-300">
                                    {partner.name}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

