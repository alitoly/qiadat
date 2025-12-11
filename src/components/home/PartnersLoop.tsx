"use client";

import LogoLoop from "../LogoLoop";
import { FaLandmark, FaHandsHelping, FaUniversity, FaBuilding, FaGlobe } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const partners = [
    { node: <FaLandmark />, title: "Ministry of Culture", href: "#" },
    { node: <FaHandsHelping />, title: "Volunteer Oman", href: "#" },
    { node: <FaUniversity />, title: "Sultan Qaboos Univ", href: "#" },
    { node: <MdGroups />, title: "Youth Center", href: "#" },
    { node: <FaBuilding />, title: "Oman LNG", href: "#" },
    { node: <FaGlobe />, title: "UN Volunteers", href: "#" },
    { node: <FaLandmark />, title: "Ministry of Social Dev", href: "#" },
];

export default function PartnersLoop() {
    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-2xl font-bold text-navy opacity-80">Our Strategic Partners</h2>
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
