import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy text-white pt-12 pb-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-cream">مركز عمان التطوعي</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            تمكين المتطوعين في عمان. تواصل، شارك، واصنع أثراً في المجتمع من خلال مبادراتنا.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-cream">روابط سريعة</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-cream transition-colors">عن المركز</Link></li>
                            <li><Link href="/about#objectives" className="hover:text-cream transition-colors">الأهداف</Link></li>
                            <li><Link href="/services" className="hover:text-cream transition-colors">الخدمات</Link></li>
                            <li><Link href="/#partners" className="hover:text-cream transition-colors">الشركاء والرعاة</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-cream">اتصل بنا</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-cream shrink-0" />
                                <span>مسقط، سلطنة عمان</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-cream shrink-0" />
                                <span dir="ltr">+968 76797992</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-cream shrink-0" />
                                <span>info@voluntary.qa</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Placeholder or Other */}
                    <div>
                        <div className="h-40 w-full rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 text-xs">
                            خريطة الموقع
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} مركز عمان التطوعي. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
}
