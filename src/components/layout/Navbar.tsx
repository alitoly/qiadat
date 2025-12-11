"use client";

import CardNav, { CardNavItem } from "@/components/CardNav";
import { useRouter } from "next/navigation";

const logo = "/logo.jpg";

export default function Navbar() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/request/volunteer");
    };

    const items: CardNavItem[] = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "About Us", href: "/about", ariaLabel: "About Company" },
                { label: "Objectives", href: "/objectives", ariaLabel: "Our Objectives" },
                { label: "Partners", href: "/partners", ariaLabel: "Our Partners" }
            ]
        },
        {
            label: "Resources",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Services", href: "/services", ariaLabel: "Our Services" },
                { label: "Media", href: "/media", ariaLabel: "Media Center" }
            ]
        },
        {
            label: "Connect",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Contact Us", href: "/contact", ariaLabel: "Contact Us" },
                { label: "Login / Register", href: "/login", ariaLabel: "Login or Register" }
            ]
        }
    ];

    return (
        <CardNav
            logo={logo}
            logoAlt="Qiadat Logo"
            items={items}
            baseColor="#090510" // Dark navy to match theme
            menuColor="#fff"
            buttonBgColor="#efe8ba" // Cream color
            buttonTextColor="#1a1f3c" // Navy color
            ease="power3.out"
        // @ts-ignore - CTA click handler if supported or we modify CardNav later. 
        // For now CardNav has internal button. We might need to make it functional if it isn't.
        // Based on CardNav code, the button doesn't take an onClick prop but we can add it if needed.
        // Wait, checking CardNav.tsx... line 181 button doesn't have onClick except internal.
        // I should probably update CardNav.tsx to accept onCtaClick or make the button a link if needed.
        // But for now let's stick to the prompt's usage example + existing functionality.
        // The user code didn't show onCtaClick. I will modify CardNav.tsx to make the button functional if requested, 
        // but for now I will just implement the structure.
        />
    );
}
