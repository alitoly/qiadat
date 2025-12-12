import { Target, Compass, Heart, Users, Star, Shield, Zap, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-navy py-20 text-white">
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
        </div>
    );
}
