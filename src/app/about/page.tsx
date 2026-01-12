import AboutContent from "@/components/about/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "عن المركز | مركز عمان التطوعي",
    description: "تعرف على مركز عمان التطوعي: رؤيتنا، رسالتنا، وقيمنا في تعزيز ثقافة العمل التطوعي في سلطنة عمان.",
};

export default function AboutPage() {
    return <AboutContent />;
}
