import { Calendar, MapPin, Lock, Briefcase, ChevronLeft } from "lucide-react";
import Link from "next/link";
import BookingForm from "@/components/forms/BookingForm";
import VolunteerRequestForm from "@/components/forms/VolunteerRequestForm";
import InitiativeForm from "@/components/forms/InitiativeForm";

export default function ServicesPage() {
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
        <div className="min-h-screen relative isolate py-20 overflow-hidden bg-[#5B6683]">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10 bg-[#5B6683]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#687492]/50 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#9995AB]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#687492]/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            {/* Hero Section */}
            <div className="relative w-full h-[50vh] mb-20 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/sss.png')" }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-20">
                    <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">الخدمات</h1>
                    <p className="text-gray-200 max-w-2xl text-xl font-medium drop-shadow-md">
                        نقدم مجموعة واسعة من الخدمات الرقمية والميدانية لدعم وتعزيز العمل التطوعي في السلطنة.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 space-y-24 pb-24">


                {/* Initiative Section */}
                <section id="initiative" className="scroll-mt-24 max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-5/12 pt-4">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center mb-6 text-[#D4AF37]">
                                    <Lock size={32} strokeWidth={1.5} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6 leading-tight flex items-center gap-3">
                                    <span className="w-2 h-8 bg-[#D4AF37] rounded-full block"></span>
                                    طلب مبادرة
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                    لديك فكرة تطوعية مبتكرة؟ نحن هنا لتحويلها إلى واقع. قدم مقترحك الآن وسنساعدك في التخطيط والتنفيذ.
                                </p>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                        <span className="font-medium">دراسة الجدوى والأثر المجتمعي</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                        <span className="font-medium">توفير الدعم اللوجستي والمادي</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                        <span className="font-medium">الترويج للمبادرة إعلامياً</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-7/12 w-full">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden relative border border-white/50">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <InitiativeForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hall Booking Section */}
                <section id="hall" className="scroll-mt-24 max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-5/12 lg:sticky lg:top-32 pt-4">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <h2 className="text-3xl font-bold text-white mb-6 leading-tight flex items-center gap-3">
                                    <span className="w-2 h-8 bg-[#D4AF37] rounded-full block"></span>
                                    حجز القاعات
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                    هل تخطط لورشة عمل أو اجتماع لفريقك التطوعي؟ تحقق من توفر قاعاتنا واحجز المساحة المناسبة لك بكل سهولة.
                                </p>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                        <span className="font-medium">قاعات مجهزة بالكامل</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                        <span className="font-medium">أنظمة صوت وعرض حديثة</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                        <span className="font-medium">خيارات ترتيب مرنة</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-7/12 w-full">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <BookingForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enrollment Section */}
                <section id="enrollment" className="scroll-mt-24 max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">الفعاليات المتاحة</h2>
                        <p className="text-gray-300 text-lg">شارك في الفعاليات القادمة وساهم في خدمة المجتمع</p>
                    </div>

                    <div className="grid gap-6">
                        {events.map((event, i) => (
                            <div key={i} className="group bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-lg hover:shadow-2xl">
                                <div className="absolute top-0 right-0 w-1 h-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="flex-1 text-center md:text-right w-full z-10">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                        <span className="px-4 py-1.5 bg-white/10 text-white border border-white/10 text-xs font-bold rounded-full backdrop-blur-sm">
                                            {event.type}
                                        </span>
                                        <span className={`px-4 py-1.5 text-xs font-bold rounded-full border ${event.status === 'مفتوح' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-orange-500/10 text-orange-400 border-orange-500/20'}`}>
                                            {event.status}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{event.title}</h3>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-[#D4AF37]" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-[#D4AF37]" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-auto z-10">
                                    <button
                                        className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#D4AF37] text-[#1B1F3B] font-bold hover:bg-white transition-all disabled:opacity-50 disabled:bg-gray-500 disabled:text-gray-200"
                                        disabled={event.status !== 'مفتوح'}
                                    >
                                        <span>{event.status === 'مفتوح' ? 'سجل الآن' : 'قريباً'}</span>
                                        {event.status === 'مفتوح' && <ChevronLeft size={18} className="rotate-0 rtl:rotate-180" />}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Volunteer Request Section */}
                <section id="volunteer" className="scroll-mt-24 max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
                        <div className="lg:w-5/12 pt-4 text-left rtl:text-right">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <h2 className="text-3xl font-bold text-white mb-6 leading-tight flex items-center gap-3">
                                    <span className="w-2 h-8 bg-[#D4AF37] rounded-full block"></span>
                                    طلب متطوعين
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                    هل تحتاج إلى دعم لفعاليتك القادمة؟ اطلب متطوعين مؤهلين من خلال استمارتنا الإلكترونية السهلة.
                                </p>
                                <div className="bg-[#D4AF37]/10 p-6 rounded-2xl border border-[#D4AF37]/20">
                                    <h4 className="font-bold text-[#D4AF37] text-sm mb-3 flex items-center gap-2">
                                        <Briefcase size={18} /> آلية الطلب
                                    </h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        يعتمد وقت المعالجة على عدد المتطوعين المطلوب. يرجى تقديم طلبك في وقت مبكر لضمان التنسيق المناسب.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-7/12 w-full">
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden relative">
                                <VolunteerRequestForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
