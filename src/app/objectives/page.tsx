export default function ObjectivesPage() {
    const objectives = [
        "Promote the culture of volunteering among all segments of society.",
        "Regulate and organize voluntary work efforts in the Sultanate.",
        "Connect volunteers with institutions and organizations needing support.",
        "Provide training and development for volunteers.",
        "Highlight and reward distinguished voluntary initiatives.",
        "Create a unified database for volunteers and opportunities."
    ];

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none z-0">
                {/* Using an SVG approximation of the flame shape or the uploaded image if configured */}
                <img src="/images/logo-Gold.jpg" alt="" className="w-full h-full object-contain mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <h1 className="text-4xl font-bold text-navy text-center mb-16">Strategic Objectives</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {objectives.map((obj, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-navy hover:shadow-lg transition-shadow group">
                            <span className="text-5xl font-bold text-gray-100 mb-4 block group-hover:text-cream/50 transition-colors">
                                {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <p className="text-lg font-medium text-navy leading-relaxed">
                                {obj}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
