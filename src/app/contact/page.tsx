import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-navy text-center mb-12">تواصل معنا</h1>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="p-3 bg-navy/10 text-navy rounded-lg">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-navy text-lg mb-1">موقعنا</h3>
                                <p className="text-gray-600">مسقط، سلطنة عمان</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="p-3 bg-navy/10 text-navy rounded-lg">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-navy text-lg mb-1">رقم الهاتف</h3>
                                <a href="tel:+96876797992" className="text-gray-600 hover:text-navy transition-colors" dir="ltr">
                                    +968 76797992
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="p-3 bg-navy/10 text-navy rounded-lg">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-navy text-lg mb-1">البريد الإلكتروني</h3>
                                <a href="mailto:info@voluntary.qa" className="text-gray-600 hover:text-navy transition-colors">
                                    info@voluntary.qa
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="p-3 bg-navy/10 text-navy rounded-lg">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-navy text-lg mb-1">ساعات العمل</h3>
                                <p className="text-gray-600">الأحد - الخميس: 08:30 صباحًا - 07:30 مساءً</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-2xl min-h-[400px] flex items-center justify-center text-gray-400">
                        خريطة تفاعلية
                    </div>
                </div>
            </div>
        </div>
    );
}
