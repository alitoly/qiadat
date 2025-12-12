import VolunteerRequestForm from "@/components/forms/VolunteerRequestForm";

export default function VolunteerRequestPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <h1 className="text-3xl font-bold text-navy mb-2">طلب متطوعين</h1>
                <p className="text-gray-600 mb-8">قدم طلبك للحصول على متطوعين وفقاً لفترة الإشعار المطلوبة.</p>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <VolunteerRequestForm />
                </div>
            </div>
        </div>
    );
}
