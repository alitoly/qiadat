"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { addDays, format, isFriday, isSaturday } from "date-fns";

export default function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [error, setError] = useState("");

    // Min Date: Today + 2 days
    const minDate = format(addDays(new Date(), 2), "yyyy-MM-dd");

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(e.target.value);
        if (isFriday(selectedDate) || isSaturday(selectedDate)) {
            setError("Bookings are not available on Fridays and Saturdays.");
            setDate("");
        } else {
            setError("");
            setDate(e.target.value);
        }
    };

    // Generate Time Slots (08:30 - 19:30)
    const timeSlots = [];
    const startHour = 8;
    const endHour = 19;

    for (let h = startHour; h <= endHour; h++) {
        // 08:30 start
        if (h === 8) {
            timeSlots.push("08:30");
            continue;
        }
        // Slot on the hour
        timeSlots.push(`${h.toString().padStart(2, '0')}:00`);

        // Slot on the half hour (except 19:30 is last slot)
        if (h < 19 || (h === 19 && false)) { // 19:30 included? "between 8:30 - 7:30". usually means last booking at 7:30 or ends at 7:30? Assume 19:30 is a valid start time or end time? "Allow bookings between...". I'll include 19:30 as start slot if needed, or stop at 19:00? Let's add 19:30.
            timeSlots.push(`${h.toString().padStart(2, '0')}:30`);
        } else if (h === 19) {
            timeSlots.push("19:30");
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!date || !time) return;
        alert(`Booking Requested for ${date} at ${time}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-navy mb-2">Select Date</label>
                <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                        type="date"
                        required
                        min={minDate}
                        className="w-full rounded-lg border border-gray-300 pl-10 p-2.5 focus:border-navy focus:ring-navy"
                        onChange={handleDateChange}
                        value={date}
                    />
                </div>
                <p className="mt-1 text-xs text-gray-500">Bookings require at least 2 days notice.</p>
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-navy mb-2">Select Time</label>
                <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                        <button
                            key={slot}
                            type="button"
                            onClick={() => setTime(slot)}
                            disabled={!date}
                            className={`
                        py-2 text-sm font-medium rounded-md border transition-colors
                        ${time === slot
                                    ? 'bg-navy text-white border-navy'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-navy hover:text-navy'
                                }
                        ${!date && 'opacity-50 cursor-not-allowed'}
                    `}
                        >
                            {slot}
                        </button>
                    ))}
                </div>
                <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={12} /> Sunday - Thursday (08:30 AM - 07:30 PM)
                </p>
            </div>

            <button
                type="submit"
                disabled={!date || !time}
                className="w-full rounded-lg bg-navy px-5 py-3 text-center text-sm font-semibold text-white hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Confirm Booking
            </button>
        </form>
    );
}
