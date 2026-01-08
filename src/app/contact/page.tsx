"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-[var(--brand-blue)] min-h-screen py-24">
            <div className="container mx-auto px-4 mt-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">تواصل معنا</h1>
                    <p className="text-gray-400">نحن هنا للإجابة على استفساراتكم ومساعدتكم</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors group">
                            <div className="p-4 bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] rounded-2xl group-hover:scale-110 transition-transform">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl mb-2">موقعنا</h3>
                                <p className="text-gray-300 leading-relaxed">مسقط، سلطنة عمان</p>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors group">
                            <div className="p-4 bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] rounded-2xl group-hover:scale-110 transition-transform">
                                <Phone size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl mb-2">رقم الهاتف</h3>
                                <a href="tel:+96876797992" className="text-gray-300 hover:text-[var(--brand-gold)] transition-colors text-lg" dir="ltr">
                                    +968 76797992
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors group">
                            <div className="p-4 bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] rounded-2xl group-hover:scale-110 transition-transform">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl mb-2">البريد الإلكتروني</h3>
                                <a href="mailto:info@voluntary.qa" className="text-gray-300 hover:text-[var(--brand-gold)] transition-colors text-lg">
                                    info@voluntary.qa
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors group">
                            <div className="p-4 bg-[var(--brand-gold)]/20 text-[var(--brand-gold)] rounded-2xl group-hover:scale-110 transition-transform">
                                <Clock size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl mb-2">ساعات العمل</h3>
                                <p className="text-gray-300">الأحد - الخميس: 08:30 صباحًا - 07:30 مساءً</p>
                            </div>
                        </div>
                    </div>

                    {/* Maps */}
                    <div className="space-y-6">
                        <div className="bg-white/5 p-2 rounded-3xl border border-white/10 h-[300px] md:h-[400px] overflow-hidden shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14625.6114076897!2d58.411872!3d23.589881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa43052b8e9%3A0x936801d323b7e1ae!2z2LnZj9mF2KfZhiDYo9mB2YrZhtmK2YjYsiDZhdmI2YQ!5e0!3m2!1sar!2som!4v1766135985513!5m2!1sar!2som"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-2xl hover:filter-none transition-all duration-500"
                            ></iframe>
                        </div>
                        <div className="bg-white/5 p-2 rounded-3xl border border-white/10 h-[300px] md:h-[400px] overflow-hidden shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.544988127873!2d58.146592!3d23.58478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de323e486793d%3A0x4777598c68ae219d!2sSQUare!5e0!3m2!1sar!2som!4v1766136033881!5m2!1sar!2som"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-2xl hover:filter-none transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
