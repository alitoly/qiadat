import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Sample Data
// Sample Data
const news = [
    {
        id: 1,
        title: "انطلاق موسم التطوع الجديد 2025",
        date: "05 ديسمبر 2024",
        image: "/images/volunteer.png",
        category: "إعلانات"
    },
    {
        id: 2,
        title: "شراكة استراتيجية مع وزارة الثقافة والرياضة",
        date: "28 نوفمبر 2024",
        image: "/images/sport.png",
        category: "شراكات"
    },
    {
        id: 3,
        title: "حملة تنظيف الشواطئ تحقق نجاحاً باهراً",
        date: "20 نوفمبر 2024",
        image: "/images/clean.png",
        category: "فعاليات"
    },
];

export default function NewsFeed() {
    return (
        <section>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-cream">آخر الأخبار</h2>
                <Link href="/media" className="group flex items-center gap-2 text-sm font-semibold text-cream hover:text-opacity-80">
                    عرض جميع الأخبار <ArrowRight size={16} className="transition-transform group-hover:-translate-x-1 rotate-180" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {news.map((item) => (
                    <article key={item.id} className="group cursor-pointer flex flex-col gap-4">
                        <div className={`aspect-video w-full rounded-xl relative overflow-hidden`}>
                            {/* Real Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-cream/10 group-hover:bg-cream/0 transition-colors"></div>
                            <div className="absolute top-4 right-4 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-cream uppercase tracking-wider backdrop-blur-sm">
                                {item.category}
                            </div>
                        </div>
                        <div>
                            <time className="text-sm text-gray-500 font-medium">{item.date}</time>
                            <h3 className="mt-2 text-xl font-bold text-cream group-hover:text-opacity-80 leading-tight">
                                {item.title}
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
