"use client";

import { useState } from "react";
import NewsFeed from "@/components/home/NewsFeed"; // Reusing NewsFeed or parts of it
import clsx from "clsx";

export default function MediaPage() {
    const tabs = ["الكل", "الفعاليات", "المبادرات", "الأخبار", "الإعلانات"];
    const [activeTab, setActiveTab] = useState("الكل");

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-navy mb-8">المركز الإعلامي</h1>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={clsx(
                                "px-6 py-3 font-medium text-sm rounded-t-lg transition-colors border-b-2",
                                activeTab === tab
                                    ? "border-navy text-navy bg-white"
                                    : "border-transparent text-gray-500 hover:text-navy hover:bg-gray-100/50"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div>
                    <p className="text-gray-500 mb-8">عرض النتائج لـ: <span className="font-bold text-navy">{activeTab}</span></p>

                    {/* Using basic placeholder content for tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                                <div className="h-48 bg-navy/5 relative">
                                    {/* Placeholder */}
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-cream bg-navy px-2 py-1 rounded mb-2 inline-block">
                                        {activeTab === "الكل" ? "أخبار" : activeTab}
                                    </span>
                                    <h3 className="font-bold text-navy text-lg mb-2 group-hover:underline">عنوان الخبر {item}</h3>
                                    <p className="text-gray-500 text-sm">نص توضيحي مختصر للخبر أو الفعالية يظهر هنا...</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Example Pagination */}
                    <div className="mt-12 flex justify-center gap-2">
                        <button className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-navy hover:text-white transition-colors">1</button>
                        <button className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-navy hover:text-white transition-colors">2</button>
                        <button className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-navy hover:text-white transition-colors">3</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
