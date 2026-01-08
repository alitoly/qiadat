import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer
            className="text-white pt-12 pb-6 relative"
            style={{
                backgroundImage: "url('/images/footer.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'var(--brand-blue)' // Fallback
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div> {/* Overlay for readability */}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#D4AF37]">مركز عمان التطوعي</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            تمكين المتطوعين في عمان. تواصل، شارك، واصنع أثراً في المجتمع من خلال مبادراتنا.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-[#D4AF37]">روابط سريعة</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-white transition-colors">عن المركز</Link></li>
                            <li><Link href="/about#objectives" className="hover:text-white transition-colors">الأهداف</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">الخدمات</Link></li>
                            <li><Link href="/#partners" className="hover:text-white transition-colors">الشركاء والرعاة</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-[#D4AF37]">اتصل بنا</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                                <span dir="ltr">+968 76797992</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                                <span>info@voluntary.qa</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} مركز عمان التطوعي. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
}
