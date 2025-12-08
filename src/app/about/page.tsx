import { Target, Compass, Heart, Users, Star, Shield, Zap, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-navy py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">About Qiadat</h1>
                    <p className="opacity-90 max-w-2xl mx-auto">
                        The Oman Volunteer Center is dedicated to fostering a culture of volunteering and community service across the Sultanate.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-navy">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-navy text-white rounded-lg">
                                <Compass size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To be the premier national hub for voluntary work, creating a sustainable ecosystem that empowers individuals to contribute effectively to Oman's development.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-cream">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-cream text-navy rounded-lg">
                                <Target size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Organizing and enabling voluntary efforts through a digital platform that connects volunteers with opportunities, ensuring quality, transparency, and impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-navy mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { name: "Integrity", icon: Shield },
                            { name: "Commitment", icon: Heart },
                            { name: "Excellence", icon: Star },
                            { name: "Teamwork", icon: Users },
                            { name: "Impact", icon: Zap },
                            { name: "Inclusivity", icon: Globe },
                        ].map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="mb-4 text-cream">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="font-bold text-navy">{value.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
