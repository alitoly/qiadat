"use client";

import CardNav, { CardNavItem } from "@/components/CardNav";
import { useRouter } from "next/navigation";

const logo = "/logo.jpg";

export default function Navbar() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/home");
    };

    const items: CardNavItem[] = [
        {
            label: "عن المركز",
            href: "/about",
            ariaLabel: "About Center",
            bgColor: "#4e04beff",
            textColor: "#fff",
            links: [
                { label: "من نحن", href: "/about#who-we-are", ariaLabel: "About Company" },
                { label: "الأهداف", href: "/about#objectives", ariaLabel: "Our Objectives" },
                { label: "الشركاء والرعاة", href: "/about#partners", ariaLabel: "Our Partners" }
            ]
        },
        {
            label: "الخدمات",
            href: "/services",
            ariaLabel: "Our Services",
            bgColor: "#ddb917ff",
            textColor: "#fff",
            links: [
                { label: "طلب مبادرة", href: "/services#initiative", ariaLabel: "Request Initiative" },
                { label: "حجز قاعة", href: "/services#hall", ariaLabel: "Book Hall" },
                { label: "الاشتراك في الفعاليات", href: "/services#enrollment", ariaLabel: "Event Enrollment" },
                { label: "طلب متطوعين", href: "/services#volunteer", ariaLabel: "Request Volunteer" }
            ]
        },
        {
            label: "تواصل معنا",
            bgColor: "#4e04beff",
            textColor: "#fff",
            links: [
                { label: "اتصل بنا", href: "/contact", ariaLabel: "Contact Us" },
                { label: "دخول / تسجيل", href: "/login", ariaLabel: "Login or Register" }
            ]
        }
    ];

    return (
        <CardNav
            logo={logo}
            logoAlt="شعار قيادات"
            items={items}
            baseColor="#090510" // Dark navy to match theme
            menuColor="#fff"
            buttonBgColor="#efe8ba" // Cream color
            buttonTextColor="#1a1f3c" // Navy color
            ease="power3.out"
        />
    );
}
