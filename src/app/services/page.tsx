import { Calendar, MapPin, Lock, Briefcase, ChevronLeft } from "lucide-react";
import Link from "next/link";
import BookingForm from "@/components/forms/BookingForm";
import VolunteerRequestForm from "@/components/forms/VolunteerRequestForm";
import GlassSurface from "@/components/GlassSurface"; // Assuming this component is available

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
        <div className="bg-gray-50/50 min-h-screen">
            {/* Header */}
            <section className="relative py-20 overflow-hidden isolate">
                <div className="absolute inset-0 bg-navy z-0"></div>
                {/* Optional: Add Threads or texture here if needed for header, but keeping it clean navy for now per request for consistency */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">الخدمات</h1>
                    <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed text-lg">
                        نقدم مجموعة واسعة من الخدمات الرقمية والميدانية لدعم وتعزيز العمل التطوعي في السلطنة.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 -mt-10 relative z-20 space-y-24 pb-24">

                {/* Initiative Section */}
                <section id="initiative" className="scroll-mt-24">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-navy/5 text-center max-w-4xl mx-auto border border-white/50 backdrop-blur-sm">
                        <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center mb-6 text-navy mx-auto">
                            <Lock size={32} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-bold text-navy mb-4">طلب مبادرة</h2>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                            انطلق بأفكارك التطوعية. يجب أن تكون مسجلاً لدينا لتقديم مقترحات لمبادرات جديدة.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/login" className="inline-flex justify-center items-center px-8 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy/90 transition-all shadow-lg hover:shadow-navy/20 active:scale-95">
                                تسجيل الدخول
                            </Link>
                            <Link href="/register" className="inline-flex justify-center items-center px-8 py-3 rounded-full bg-white text-navy border border-gray-200 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95">
                                إنشاء حساب جديد
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Hall Booking Section */}
                <section id="hall" className="scroll-mt-24 max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3 sticky top-24 pt-4">
                            <h2 className="text-3xl font-bold text-navy mb-4 leading-tight">حجز القاعات</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                هل تخطط لورشة عمل أو اجتماع لفريقك التطوعي؟ تحقق من توفر قاعاتنا واحجز المساحة المناسبة لك بكل سهولة.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cream"></div> قاعات مجهزة بالكامل</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cream"></div> أنظمة صوت وعرض حديثة</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cream"></div> خيارات ترتيب مرنة</li>
                            </ul>
                        </div>
                        <div className="md:w-2/3 w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <BookingForm />
                        </div>
                    </div>
                </section>

                {/* Enrollment Section */}
                <section id="enrollment" className="scroll-mt-24 max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy mb-4">الفعاليات المتاحة</h2>
                        <p className="text-gray-600">شارك في الفعاليات القادمة وساهم في خدمة المجتمع</p>
                    </div>

                    <div className="grid gap-5">
                        {events.map((event, i) => (
                            <div key={i} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1 h-full bg-gray-100 group-hover:bg-cream transition-colors duration-300"></div>

                                <div className="flex-1 text-center sm:text-right w-full z-10">
                                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
                                            {event.type}
                                        </span>
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${event.status === 'مفتوح' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
                                            {event.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-navy/80">{event.title}</h3>
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-cream" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} className="text-cream" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:w-auto z-10">
                                    <button
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-navy text-white font-medium hover:bg-navy/90 transition-all disabled:opacity-50 disabled:bg-gray-300"
                                        disabled={event.status !== 'مفتوح'}
                                    >
                                        <span>{event.status === 'مفتوح' ? 'سجل الآن' : 'قريباً'}</span>
                                        {event.status === 'مفتوح' && <ChevronLeft size={16} className="rotate-0 rtl:rotate-180" />}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Volunteer Request Section */}
                <section id="volunteer" className="scroll-mt-24 max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                        <div className="md:w-1/3 sticky top-24 pt-4 text-left rtl:text-right">
                            <h2 className="text-3xl font-bold text-navy mb-4 leading-tight">طلب متطوعين</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                هل تحتاج إلى دعم لفعاليتك القادمة؟ اطلب متطوعين مؤهلين من خلال استمارتنا الإلكترونية السهلة.
                            </p>
                            <div className="bg-cream/10 p-4 rounded-2xl border border-cream/20">
                                <h4 className="font-bold text-navy text-sm mb-2 flex items-center gap-2">
                                    <Briefcase size={16} /> آلية الطلب
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    يعتمد وقت المعالجة على عدد المتطوعين المطلوب. يرجى تقديم طلبك في وقت مبكر لضمان التنسيق المناسب.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-2/3 w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <VolunteerRequestForm />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
