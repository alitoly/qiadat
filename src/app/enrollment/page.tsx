import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

export default function EnrollmentPage() {
    const events = [
        {
            title: "ماراثون مسقط 2025",
            date: "15 يناير 2025",
            location: "الموج مسقط",
            type: "رياضة",
            status: "مفتوح"
        },
        {
            title: "احتفالات العيد الوطني",
            date: "18 نوفمبر 2025",
            location: "مواقع متعددة",
            type: "ثقافة",
            status: "قريباً"
        },
        {
            title: "حملة إفطار صائم",
            date: "10 مارس 2025",
            location: "مركز للمؤتمرات",
            type: "خيري",
            status: "مفتوح"
        }
    ];

    return (
        <div className="min-h-screen relative isolate py-20 overflow-hidden bg-[var(--brand-purple)]">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10 bg-[var(--brand-purple)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4a044e]/50 via-transparent to-transparent"></div> {/* Darker magenta/purple tone */}
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#d946ef]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div> {/* Magenta blob */}
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--brand-blue)]/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <h1 className="text-5xl font-bold text-white drop-shadow-sm">الاشتراك في الفعاليات</h1>
                    <p className="text-gray-200 max-w-2xl text-lg leading-relaxed">
                        استعرض الفعاليات المتاحة وكن جزءاً من الحراك التطوعي والمجتمعي في السلطنة.
                    </p>
                </div>

                <div className="grid gap-6 max-w-4xl mx-auto">
                    {events.map((event, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 group shadow-xl">
                            <div className="flex-1 text-center md:text-right w-full">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                    <span className="px-4 py-1.5 bg-white/10 text-white text-xs font-bold rounded-full border border-white/10">
                                        {event.type}
                                    </span>
                                    <span className={`px-4 py-1.5 text-xs font-bold rounded-full border ${event.status === 'مفتوح' ? 'bg-[var(--brand-green)]/20 text-[var(--brand-green)] border-[var(--brand-green)]/30' : 'bg-white/5 text-gray-400 border-white/5'}`}>
                                        {event.status}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[var(--brand-gold)] transition-colors">{event.title}</h3>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3 text-sm text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} className="text-[var(--brand-gold)]" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={18} className="text-[var(--brand-gold)]" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-auto shrink-0">
                                <button
                                    className="w-full md:w-auto px-10 py-4 bg-[var(--brand-gold)] text-[var(--brand-blue)] font-bold rounded-xl hover:bg-[#b0912d] hover:text-white transition-all shadow-lg shadow-[var(--brand-gold)]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                                    disabled={event.status !== 'مفتوح'}
                                >
                                    {event.status === 'مفتوح' ? 'سجل الآن' : 'قريباً'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
