import { Calendar, MapPin, Lock } from "lucide-react";
import Link from "next/link";
import BookingForm from "@/components/forms/BookingForm";
import VolunteerRequestForm from "@/components/forms/VolunteerRequestForm";

export default function ServicesPage() {
    const events = [
        {
            title: "Muscat Marathon 2025",
            date: "Jan 15, 2025",
            location: "Al Mouj Muscat",
            type: "Sports",
            status: "Open"
        },
        {
            title: "National Day Celebrations",
            date: "Nov 18, 2025",
            location: "Various Locations",
            type: "Culture",
            status: "Upcoming"
        },
        {
            title: "Ramadan Charity Drive",
            date: "Mar 10, 2025",
            location: "Convention Center",
            type: "Charity",
            status: "Open"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <section className="bg-navy py-12 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">الخدمات</h1>
                    <p className="opacity-90 max-w-2xl mx-auto leading-relaxed">
                        نقدم مجموعة واسعة من الخدمات الرقمية والميدانية لدعم العمل التطوعي في السلطنة.
                    </p>
                </div>
            </section>

            {/* Initiative Section */}
            <section id="initiative" className="py-20 scroll-mt-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-6 text-navy">
                                <Lock size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-navy mb-4">طلب مبادرة</h2>
                            <p className="text-gray-600 mb-8">
                                يجب أن تكون مسجلاً لتقديم مبادرات جديدة.
                            </p>

                            <div className="flex flex-col gap-3 w-full max-w-md">
                                <Link href="/login" className="w-full rounded-lg bg-navy px-5 py-3 font-semibold text-white hover:bg-opacity-90 transition-colors">
                                    تسجيل الدخول
                                </Link>
                                <Link href="/register" className="w-full rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                                    إنشاء حساب جديد
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hall Booking Section */}
            <section id="hall" className="py-20 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy mb-2">حجز قاعة</h2>
                        <p className="text-gray-600">تحقق من التوفر واحجز قاعاتنا متعددة الأغراض لفعالياتك.</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <BookingForm />
                    </div>
                </div>
            </section>

            {/* Enrollment Section */}
            <section id="enrollment" className="py-20 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-navy mb-12 text-center">الاشتراك في الفعاليات</h2>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {events.map((event, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex-1 text-center md:text-right">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2 flex-wrap">
                                        <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-bold rounded-full uppercase tracking-wide">
                                            {event.type}
                                        </span>
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${event.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                            {event.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-2">{event.title}</h3>
                                    <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {event.location}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className="w-full md:w-auto px-6 py-2.5 bg-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed" disabled={event.status !== 'Open'}>
                                        {event.status === 'Open' ? 'سجل الآن' : 'قريباً'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volunteer Request Section */}
            <section id="volunteer" className="py-20 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy mb-2">طلب متطوعين</h2>
                        <p className="text-gray-600">قدم طلبك للحصول على متطوعين وفقاً لفترة الإشعار المطلوبة.</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <VolunteerRequestForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
