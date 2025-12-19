import GlassSurface from "../GlassSurface";

export default function HeroSection() {
    return (
        <section className="relative w-full text-white overflow-hidden pb-24">
            {/* Background Decor */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>

            {/* Content */}
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
                <div className="max-w-4xl space-y-8 flex flex-col items-center">

                    <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md border border-white/20 text-cream shadow-sm">
                        تمكين المجتمعات
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        اصنع الأثر مع <span className="text-cream relative inline-block">
                            مركز عمان التطوعي
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-cream opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7952 3.32832 103.54 -1.40856 197.973 3.65751" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed drop-shadow-md font-medium">
                        المظلة الوطنية الشاملة لاحتضان وتنظيم العمل التطوعي في سلطنة عُمان، وتعزيز ثقافته وترسيخ قيمه في المجتمع.
                    </p>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-sm">
                        انضم كمتطوع، أو سجّل مبادرتك، أو اعرض فرصة تطوعية عبر منصة موحدة وموثوقة
                    </p>

                    <div className="flex flex-wrap gap-6 pt-8 justify-center">
                        <GlassSurface
                            as="button"
                            width="auto"
                            height="auto"
                            borderRadius={50}
                            borderWidth={1}
                            brightness={120}
                            blur={12}
                            opacity={1}
                            backgroundOpacity={0.8}
                            className="font-bold text-navy transition-all duration-300 hover:scale-105 hover:brightness-125 shadow-lg hover:shadow-cream/20"
                            style={{ color: '#1F2A52', padding: 0, backgroundColor: 'rgba(239, 232, 186, 0.9)' }} // Cream background
                        >
                            <span className="px-10 py-4 block text-lg">ابدأ رحلتك</span>
                        </GlassSurface>

                        <GlassSurface
                            as="button"
                            width="auto"
                            height="auto"
                            borderRadius={50}
                            borderWidth={1}
                            brightness={110}
                            blur={8}
                            opacity={0.8}
                            backgroundOpacity={0.3}
                            className="font-bold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            style={{ padding: 0 }}
                        >
                            <span className="px-10 py-4 block text-lg">اكتشف المزيد</span>
                        </GlassSurface>
                    </div>
                </div>
            </div>
        </section>
    );
}
