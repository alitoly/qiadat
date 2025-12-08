import Link from "next/link";
import { Calendar } from "lucide-react";

// Sample Data
const events = [
    {
        id: 1,
        title: "Muscat Marathon Volunteer Briefing",
        date: "Dec 29",
        time: "09:00 AM",
        location: "Main Hall"
    },
    {
        id: 2,
        title: "Youth Leadership Workshop",
        date: "Jan 05",
        time: "04:30 PM",
        location: "Training Center"
    },
    {
        id: 3,
        title: "Charity Fundraising Gala",
        date: "Jan 12",
        time: "07:00 PM",
        location: "Grand Ballroom"
    },
];

export default function UpcomingEvents() {
    return (
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <Calendar className="text-cream" />
                Upcoming Events
            </h2>

            <div className="space-y-6">
                {events.map((event, index) => (
                    <div key={event.id} className="flex gap-4 group">
                        <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-navy/5 rounded-xl border border-navy/10 group-hover:bg-navy group-hover:text-white transition-colors">
                            <span className="text-xs font-bold uppercase opacity-70 group-hover:opacity-100">{event.date.split(' ')[0]}</span>
                            <span className="text-xl font-bold">{event.date.split(' ')[1]}</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-navy text-lg leading-tight group-hover:text-opacity-80">
                                {event.title}
                            </h4>
                            <div className="mt-1 text-sm text-gray-500 flex flex-col gap-0.5">
                                <span>{event.time}</span>
                                <span>{event.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link
                href="/enrollment"
                className="mt-8 block w-full rounded-lg border-2 border-dashed border-gray-200 p-3 text-center text-sm font-semibold text-gray-500 hover:border-navy hover:text-navy transition-colors"
            >
                View Full Calendar
            </Link>
        </section>
    );
}
