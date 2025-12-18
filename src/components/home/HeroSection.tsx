export default function HeroSection() {
    return (
        <section className="relative w-full text-white overflow-hidden pb-24">
            {/* Background Decor */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>

            {/* Content */}
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/10 text-cream">
                        تمكين المجتمعات
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        اصنع الأثر مع <span className="text-cream">مركز عمان التطوعي</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                        المظلة الوطنية الشاملة لاحتضان وتنظيم العمل التطوعي في سلطنة عُمان، وتعزيز ثقافته وترسيخ قيمه في المجتمع.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                        انضم كمتطوع، أو سجّل مبادرتك، أو اعرض فرصة تطوعية عبر منصة موحدة وموثوقة
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="rounded-full bg-cream px-8 py-3 font-bold text-navy transition hover:bg-white hover:shadow-[0_0_20px_rgba(239,232,186,0.5)]">
                            ابدأ رحلتك
                        </button>
                        <button className="rounded-full border border-white/20 px-8 py-3 font-medium text-white transition hover:bg-white/10 backdrop-blur-sm">
                            اكتشف المزيد
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
