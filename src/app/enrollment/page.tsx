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
        <div className="bg-gray-50/50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-start gap-4 mb-10">
                    <h1 className="text-4xl font-bold text-navy">الاشتراك في الفعاليات</h1>
                    <p className="text-gray-600 max-w-2xl">
                        استعرض الفعاليات المتاحة وكن جزءاً من الحراك التطوعي والمجتمعي في السلطنة.
                    </p>
                </div>

                <div className="grid gap-6">
                    {events.map((event, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 group">
                            <div className="flex-1 text-center md:text-right w-full">
                                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                    <span className="px-3 py-1 bg-navy/5 text-navy text-xs font-bold rounded-full">
                                        {event.type}
                                    </span>
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${event.status === 'مفتوح' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                        {event.status}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-amber-600 transition-colors">{event.title}</h3>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-auto">
                                <button
                                    className="w-full md:w-auto px-8 py-3 bg-navy text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
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
