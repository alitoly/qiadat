import { Target, Compass, Heart, Users, Star, Shield, Zap, Globe } from "lucide-react";

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

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Who We Are Section */}
            <section id="who-we-are" className="bg-navy py-20 text-white scroll-mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">من نحن</h1>
                    <p className="opacity-90 max-w-2xl mx-auto leading-relaxed">
                        يُعدّ مركز عُمان التطوعي المظلة الوطنية الشاملة لاحتضان وتنظيم الأنشطة والمبادرات التطوعية في السلطنة، انسجامًا مع رؤية وزارة الثقافة والرياضة والشباب واستراتيجيتها الرامية إلى تعزيز ثقافة العمل التطوعي وترسيخ قيمه في المجتمع العُماني.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-xl shadow-navy/5 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-navy/10 text-navy rounded-2xl">
                                <Compass size={32} strokeWidth={1.5} />
                            </div>
                            <h2 className="text-3xl font-bold text-navy">الرؤية</h2>
                        </div>
                        <p className="text-gray-700 leading-loose text-lg font-medium">
                            أن يكون مركز عُمان التطوعي المنصة الوطنية الرائدة في تمكين العمل التطوعي وتعزيز أثره التنموي، وبناء مجتمع واعٍ ومبادرات مستدامة تسهم في تحقيق رؤية عُمان 2040.
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-xl shadow-navy/5 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-cream/20 text-navy rounded-2xl">
                                <Target size={32} strokeWidth={1.5} />
                            </div>
                            <h2 className="text-3xl font-bold text-navy">الرسالة</h2>
                        </div>
                        <p className="text-gray-700 leading-loose text-lg font-medium">
                            تنظيم وتطوير العمل التطوعي في سلطنة عُمان عبر منصة وطنية متكاملة تربط المتطوعين بالفرص العامة والتخصصية، وتمكّن الجهات والمبادرات من تنفيذ أعمال تطوعية عالية الجودة ذات أثر تنموي.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-navy/5 -skew-y-3 transform origin-top-left z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold text-center text-navy mb-16">قيمنا الراسخة</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: "المواطنة", icon: Shield },
                            { name: "روح الفريق", icon: Users },
                            { name: "الابتكار", icon: Zap },
                            { name: "التمكين", icon: Star },
                            { name: "الاستدامة", icon: Globe },
                            { name: "الشراكة", icon: Heart },
                        ].map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <div key={i} className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-cream/50">
                                    <div className="mb-4 text-navy/40 group-hover:text-cream transition-colors duration-300 transform group-hover:scale-110">
                                        <Icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-bold text-navy text-lg">{value.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section id="objectives" className="py-24 bg-white scroll-mt-20 relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-cream/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-navy/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-cream font-bold tracking-wider uppercase text-sm mb-2 block">استراتيجيتنا</span>
                        <h2 className="text-4xl font-bold text-navy">الأهداف الاستراتيجية</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {objectives.map((obj, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-navy/5 border border-gray-50 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="text-6xl font-bold text-gray-100 mb-6 block group-hover:text-cream/20 transition-colors absolute top-4 left-6 select-none -z-10">
                                    {(i + 1).toString().padStart(2, '0')}
                                </span>
                                <p className="text-lg font-medium text-gray-700 leading-relaxed relative z-10">
                                    {obj}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section id="partners" className="bg-navy py-24 scroll-mt-20 text-white relative isolate overflow-hidden">
                <div className="absolute inset-0 bg-navy opacity-90 z-0"></div>
                {/* Optional: Add Threads or texture here */}

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-16">الشركاء والرعاة</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-full h-32 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white/30 group-hover:text-white/50 transition-colors">
                                Logo
                            </div>
                            <h3 className="font-bold text-lg">وزارة الثقافة والرياضة والشباب</h3>
                        </div>

                        {/* Placeholder for more partners */}
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group opacity-70 hover:opacity-100">
                            <div className="w-full h-32 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white/30 group-hover:text-white/50 transition-colors">
                                Logo
                            </div>
                            <h3 className="font-bold text-lg">شريك استراتيجي</h3>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group opacity-70 hover:opacity-100">
                            <div className="w-full h-32 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white/30 group-hover:text-white/50 transition-colors">
                                Logo
                            </div>
                            <h3 className="font-bold text-lg">راعي بلاتيني</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

