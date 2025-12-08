import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Sample Data
const news = [
    {
        id: 1,
        title: "Launch of the New Volunteering Season 2025",
        date: "Dec 05, 2024",
        image: "bg-blue-100", // placeholder class
        category: "Announcements"
    },
    {
        id: 2,
        title: "Partnership with Ministry of Culture and Sports",
        date: "Nov 28, 2024",
        image: "bg-green-100",
        category: "Partnerships"
    },
    {
        id: 3,
        title: "Community Beach Cleanup Success",
        date: "Nov 20, 2024",
        image: "bg-yellow-100",
        category: "Events"
    },
];

export default function NewsFeed() {
    return (
        <section>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-navy">Latest News</h2>
                <Link href="/media" className="group flex items-center gap-2 text-sm font-semibold text-navy hover:text-opacity-80">
                    View All News <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {news.map((item) => (
                    <article key={item.id} className="group cursor-pointer flex flex-col gap-4">
                        <div className={`aspect-video w-full rounded-xl ${item.image} relative overflow-hidden`}>
                            {/* Placeholder for real image */}
                            <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/0 transition-colors"></div>
                            <div className="absolute top-4 left-4 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-navy uppercase tracking-wider backdrop-blur-sm">
                                {item.category}
                            </div>
                        </div>
                        <div>
                            <time className="text-sm text-gray-500 font-medium">{item.date}</time>
                            <h3 className="mt-2 text-xl font-bold text-navy group-hover:text-opacity-80 leading-tight">
                                {item.title}
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
