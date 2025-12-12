"use client";

import { useState, useEffect } from "react";
import { Calendar, Users, Briefcase } from "lucide-react";
import { addDays, isFriday, isSaturday, format } from "date-fns";

export default function VolunteerRequestForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        volunteersCount: 0,
        startDate: "",
    });

    const [minDate, setMinDate] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    // Helper to add working days (Sun-Thu)
    const addWorkingDays = (startDate: Date, daysToAdd: number) => {
        let currentDate = startDate;
        let addedDays = 0;

        while (addedDays < daysToAdd) {
            currentDate = addDays(currentDate, 1);
            if (!isFriday(currentDate) && !isSaturday(currentDate)) {
                addedDays++;
            }
        }
        return currentDate;
    };

    useEffect(() => {
        const count = formData.volunteersCount;
        let daysNotice = 0;

        if (count > 0 && count <= 15) {
            daysNotice = 5;
        } else if (count > 15 && count <= 30) {
            daysNotice = 10;
        } else if (count > 30) {
            daysNotice = 20;
        }

        if (daysNotice > 0) {
            const today = new Date();
            const calculatedMinDate = addWorkingDays(today, daysNotice);
            const formattedMin = format(calculatedMinDate, "yyyy-MM-dd");
            setMinDate(formattedMin);
            setValidationMessage(`لعدد ${count} متطوعين، فترة الإشعار المطلوبة هي ${daysNotice} أيام عمل. أقرب موعد للبدء: ${format(calculatedMinDate, "dd-MM-yyyy")}`);
        } else {
            setMinDate(format(new Date(), "yyyy-MM-dd"));
            setValidationMessage("");
        }
    }, [formData.volunteersCount]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "volunteersCount" ? parseInt(value) || 0 : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("تم إرسال الطلب! (تجريبي)");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-navy mb-2">عنوان المبادرة / الفعالية</label>
                <div className="relative">
                    <Briefcase className="absolute right-3 top-3 text-gray-400" size={18} />
                    <input
                        type="text"
                        name="title"
                        required
                        className="w-full rounded-lg border border-gray-300 pr-10 p-2.5 focus:border-navy focus:ring-navy"
                        placeholder="مثال: حملة تنظيف الشاطئ"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-navy mb-2">عدد المتطوعين المطلوب</label>
                <div className="relative">
                    <Users className="absolute right-3 top-3 text-gray-400" size={18} />
                    <input
                        type="number"
                        name="volunteersCount"
                        required
                        min="1"
                        className="w-full rounded-lg border border-gray-300 pr-10 p-2.5 focus:border-navy focus:ring-navy"
                        placeholder="مثال: 10"
                        value={formData.volunteersCount || ""}
                        onChange={handleChange}
                    />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                    1-15: 5 أيام عمل إشعار | 15-30: 10 أيام | 30+: 20 يوم
                </p>
            </div>

            <div>
                <label className="block text-sm font-medium text-navy mb-2">تاريخ البدء</label>
                <div className="relative">
                    <Calendar className="absolute right-3 top-3 text-gray-400" size={18} />
                    <input
                        type="date"
                        name="startDate"
                        required
                        min={minDate}
                        className="w-full rounded-lg border border-gray-300 pr-10 p-2.5 focus:border-navy focus:ring-navy"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>
                {validationMessage && (
                    <div className="mt-2 text-sm text-amber-600 bg-amber-50 p-2 rounded border border-amber-100">
                        {validationMessage}
                    </div>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-navy mb-2">الوصف</label>
                <textarea
                    name="description"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-navy focus:ring-navy"
                    placeholder="صف المهام والمتطلبات..."
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-navy px-5 py-3 text-center text-sm font-semibold text-white hover:bg-opacity-90 transition-colors"
            >
                إرسال الطلب
            </button>
        </form>
    );
}
