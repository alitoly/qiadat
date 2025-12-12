import BookingForm from "@/components/forms/BookingForm";

export default function HallBookingPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-xl">
                <h1 className="text-3xl font-bold text-navy mb-2">طلب حجز قاعة</h1>
                <p className="text-gray-600 mb-8">تحقق من التوفر واحجز قاعاتنا متعددة الأغراض لفعالياتك.</p>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <BookingForm />
                </div>
            </div>
        </div>
    );
}
