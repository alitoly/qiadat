export default function PartnersPage() {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-navy mb-4">Our Partners</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    We work with leading organizations to drive positive change in the community.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                    {/* Ministry */}
                    <div className="w-full h-48 bg-gray-50 flex flex-col items-center justify-center p-8 rounded-xl border border-gray-100 grayscale hover:grayscale-0 transition-all">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
                        <span className="font-bold text-navy text-sm">Ministry of Culture, Sports and Youth</span>
                    </div>

                    {/* More Placeholders */}
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className="w-full h-48 bg-white flex items-center justify-center p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <span className="text-gray-300 font-medium">Partner Logo {i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
