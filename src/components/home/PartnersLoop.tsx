"use client";

import LogoLoop from "../LogoLoop";
import { FaLandmark, FaHandsHelping, FaUniversity, FaBuilding, FaGlobe } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const partners = [
    { node: <FaLandmark />, title: "وزارة الثقافة", href: "#" },
    { node: <FaHandsHelping />, title: "عمان التطوعية", href: "#" },
    { node: <FaUniversity />, title: "جامعة السلطان قابوس", href: "#" },
    { node: <MdGroups />, title: "مركز الشباب", href: "#" },
    { node: <FaBuilding />, title: "الشركة العمانية للغاز", href: "#" },
    { node: <FaGlobe />, title: "متطوعو الأمم المتحدة", href: "#" },
    { node: <FaLandmark />, title: "وزارة التنمية الاجتماعية", href: "#" },
];

export default function PartnersLoop() {
    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-2xl font-bold text-navy opacity-80">شركاؤنا الاستراتيجيون</h2>
            </div>

            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={partners}
                    speed={50}
                    direction="left"
                    logoHeight={48}
                    gap={60}
                    hoverSpeed={20}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                />
            </div>
        </section>
    );
}
