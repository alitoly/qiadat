export default function ObjectivesPage() {
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
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none z-0">
                {/* Using an SVG approximation of the flame shape or the uploaded image if configured */}
                <img src="/images/logo-Gold.jpg" alt="" className="w-full h-full object-contain mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <h1 className="text-4xl font-bold text-navy text-center mb-16">الأهداف الاستراتيجية</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {objectives.map((obj, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-navy hover:shadow-lg transition-shadow group">
                            <span className="text-5xl font-bold text-gray-100 mb-4 block group-hover:text-cream/50 transition-colors">
                                {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <p className="text-lg font-medium text-navy leading-relaxed">
                                {obj}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
