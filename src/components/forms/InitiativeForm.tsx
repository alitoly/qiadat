"use client";

import { useState } from "react";
import { Lightbulb, Target, Users, ArrowLeft, Send, ChevronDown } from "lucide-react";

export default function InitiativeForm() {
    const [step, setStep] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "social",
        beneficiaries: "",
        description: "",
        goals: "",
        expectedImpact: "",
        leaderName: "",
        contactEmail: "",
        contactPhone: ""
    });

    const categories = [
        { value: "social", label: "اجتماعي" },
        { value: "environmental", label: "بيئي" },
        { value: "cultural", label: "ثقافي" },
        { value: "educational", label: "تعليمي" },
        { value: "health", label: "صحي" },
        { value: "tech", label: "تقني" },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("تم استلام مقترح المبادرة وسيتم مراجعته!");
    };

    return (
        <div className="w-full">
            {/* Progress Bar */}
            <div className="mb-8 flex items-center justify-between relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 rounded-full"></div>
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s
                            ? "bg-[#D4AF37] text-white shadow-lg scale-110"
                            : "bg-gray-200 text-gray-500"
                            }`}
                    >
                        {s}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Step 1: Basic Info */}
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <h3 className="text-xl font-bold text-[#1B1F3B] mb-4 flex items-center gap-2">
                            <Lightbulb className="text-[#D4AF37]" />
                            تفاصيل الفكرة
                        </h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">عنوان المبادرة</label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] transition-all bg-gray-50 focus:bg-white text-black"
                                placeholder="مثال: مبادرة التشجير الوطنية"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-600 mb-2">مجال المبادرة</label>
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full text-right rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-gray-50/50 backdrop-blur-sm hover:bg-white transition-all flex justify-between items-center"
                            >
                                <span className={formData.category ? "text-gray-900" : "text-gray-500"}>
                                    {categories.find(c => c.value === formData.category)?.label || "اختر المجال"}
                                </span>
                                <ChevronDown size={20} className={`text-gray-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl z-20 flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-200">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.value}
                                            type="button"
                                            onClick={() => {
                                                setFormData({ ...formData, category: cat.value });
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`p-3 rounded-lg text-right transition-colors hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] font-medium ${formData.category === cat.value ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "text-gray-700"}`}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">الفئة المستهدفة</label>
                            <input
                                type="text"
                                name="beneficiaries"
                                required
                                value={formData.beneficiaries}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-gray-50 focus:bg-white text-black"
                                placeholder="مثال: طلاب المدارس، كبار السن..."
                            />
                        </div>
                    </div>
                )}

                {/* Step 2: Details & Impact */}
                {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <h3 className="text-xl font-bold text-[#1B1F3B] mb-4 flex items-center gap-2">
                            <Target className="text-[#D4AF37]" />
                            الأهداف والأثر
                        </h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">وصف المبادرة</label>
                            <textarea
                                name="description"
                                rows={3}
                                required
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-gray-50 focus:bg-white text-black"
                                placeholder="شرح مختصر لفكرة المبادرة وآلية تنفيذها..."
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">الأهداف الرئيسية</label>
                            <textarea
                                name="goals"
                                rows={3}
                                required
                                value={formData.goals}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-gray-50 focus:bg-white text-black"
                                placeholder="ما الذي تسعى لتحقيقه من خلال هذه المبادرة؟"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">الأثر المتوقع</label>
                            <textarea
                                name="expectedImpact"
                                rows={2}
                                required
                                value={formData.expectedImpact}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-gray-50 focus:bg-white text-black"
                                placeholder="النتائج الإيجابية المتوقعة على المجتمع..."
                            ></textarea>
                        </div>
                    </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <h3 className="text-xl font-bold text-[#1B1F3B] mb-4 flex items-center gap-2">
                            <Users className="text-[#D4AF37]" />
                            بيانات التواصل
                        </h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">اسم صاحب المبادرة</label>
                            <input
                                type="text"
                                name="leaderName"
                                required
                                value={formData.leaderName}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-gray-50 focus:bg-white text-black"
                                placeholder="الاسم الثلاثي"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    name="contactEmail"
                                    required
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-gray-50 focus:bg-white text-black"
                                    placeholder="example@mail.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    name="contactPhone"
                                    required
                                    value={formData.contactPhone}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-200 p-4 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-gray-50 focus:bg-white text-black"
                                    placeholder="968xxxxxxxx"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    {step > 1 ? (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-gray-100 text-gray-600 font-medium transition-colors"
                        >
                            <ArrowLeft size={18} className="rotate-0 rtl:rotate-180" />
                            السابق
                        </button>
                    ) : (
                        <div></div>
                    )}

                    {step < 3 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-[#1B1F3B] text-white font-bold hover:bg-[#D4AF37] hover:text-[#1B1F3B] transition-colors"
                        >
                            التالي
                            <ArrowLeft size={18} className="rotate-180 rtl:rotate-0" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-10 py-3 rounded-xl bg-[#D4AF37] text-[#1B1F3B] font-bold hover:bg-[#b0912d] hover:text-white transition-all shadow-lg hover:shadow-xl"
                        >
                            إرسال المبادرة
                            <Send size={18} />
                        </button>
                    )}
                </div>

            </form>
        </div>
    );
}
