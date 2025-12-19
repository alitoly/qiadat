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

                    {/* Maps */}
                    <div className="space-y-6">
                        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-[400px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.6114076897!2d58.411872!3d23.589881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa43052b8e9%3A0x936801d323b7e1ae!2z2LnZj9mF2KfZhiDYo9mB2YrZhtmK2YjYsiDZhdmI2YQ!5e0!3m2!1sar!2som!4v1766135985513!5m2!1sar!2som"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-[400px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.544988127873!2d58.146592!3d23.58478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de323e486793d%3A0x4777598c68ae219d!2sSQUare!5e0!3m2!1sar!2som!4v1766136033881!5m2!1sar!2som"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-xl"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
