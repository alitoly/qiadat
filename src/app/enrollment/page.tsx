import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

export default function EnrollmentPage() {
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
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-navy mb-8">Event Enrollment</h1>

                <div className="space-y-4">
                    {events.map((event, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-bold rounded-full uppercase tracking-wide">
                                        {event.type}
                                    </span>
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${event.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                        {event.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">{event.title}</h3>
                                <div className="flex items-center gap-6 text-sm text-gray-500">
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
                                    {event.status === 'Open' ? 'Register Now' : 'Coming Soon'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
