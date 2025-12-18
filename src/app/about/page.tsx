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
            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-2xl border-r-4 border-navy">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-navy text-white rounded-lg">
                                <Compass size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-navy">الرؤية</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            أن يكون مركز عُمان التطوعي المنصة الوطنية الرائدة في تمكين العمل التطوعي وتعزيز أثره التنموي، وبناء مجتمع واعٍ ومبادرات مستدامة تسهم في تحقيق رؤية عُمان 2040.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border-r-4 border-cream">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-cream text-navy rounded-lg">
                                <Target size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-navy">الرسالة</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            تنظيم وتطوير العمل التطوعي في سلطنة عُمان عبر منصة وطنية متكاملة تربط المتطوعين بالفرص العامة والتخصصية، وتمكّن الجهات والمبادرات من تنفيذ أعمال تطوعية عالية الجودة ذات أثر تنموي.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-navy mb-12">القيم</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: "المواطنة والمسؤولية", icon: Shield },
                            { name: "العمل بروح الفريق", icon: Users },
                            { name: "الابتكار والتطوير", icon: Zap },
                            { name: "التمكين وبناء القدرات", icon: Star },
                            { name: "الاستدامة", icon: Globe },
                            { name: "الشراكة والتكامل", icon: Heart },
                        ].map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="mb-4 text-cream">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="font-bold text-navy">{value.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section id="objectives" className="py-20 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold text-navy text-center mb-16">الأهداف الاستراتيجية</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {objectives.map((obj, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl shadow-sm border-t-4 border-navy hover:shadow-lg transition-shadow group">
                                <span className="text-5xl font-bold text-gray-200 mb-4 block group-hover:text-cream/80 transition-colors">
                                    {(i + 1).toString().padStart(2, '0')}
                                </span>
                                <p className="text-lg font-medium text-navy leading-relaxed">
                                    {obj}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section id="partners" className="bg-gray-50 py-20 scroll-mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-navy mb-12">الشركاء والرعاة</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                        <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center">
                            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-400">
                                Logo
                            </div>
                            <h3 className="font-bold text-navy text-xl">وزارة الثقافة والرياضة والشباب</h3>
                        </div>

                        {/* Placeholder for more partners */}
                        <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-400">
                                Logo
                            </div>
                            <h3 className="font-bold text-navy text-xl">شريك استراتيجي</h3>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-400">
                                Logo
                            </div>
                            <h3 className="font-bold text-navy text-xl">راعي بلاتيني</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
