import QuickAccessGrid from "@/components/home/QuickAccessGrid";

export default function ServicesPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-navy mb-4">الخدمات</h1>
                    <p className="text-gray-600">
                        اكتشف مجموعة الخدمات التي يقدمها مركز عمان التطوعي لتمكين الأفراد والمؤسسات.
                    </p>
                </div>

                {/* Reusing the Grid but with adjusted margins since it's not overlapping hero here */}
                <div className="mt-8">
                    <QuickAccessGrid />
                </div>

                {/* Additional info or FAQ could go here */}
            </div>
        </div>
    );
}
