export default function PartnersPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-navy mb-12">الشركاء والرعاة</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center">
                        <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-400">
                            Logo
                        </div>
                        <h3 className="font-bold text-navy text-xl">وزارة الثقافة والرياضة والشباب</h3>
                    </div>

                    {/* Placeholder for more partners */}
                    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center opacity-50">
                        <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-400">
                            Logo
                        </div>
                        <h3 className="font-bold text-navy text-xl">شريك استراتيجي</h3>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center opacity-50">
                        <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-400">
                            Logo
                        </div>
                        <h3 className="font-bold text-navy text-xl">راعي بلاتيني</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
