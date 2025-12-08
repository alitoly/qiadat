import { Lock } from "lucide-react";
import Link from "next/link";

export default function InitiativeRequestPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-24 flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-md text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-6 text-navy">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-navy mb-2">Login Required</h1>
                    <p className="text-gray-600 mb-8">
                        You must be a registered member to submit new initiatives.
                    </p>

                    <div className="flex flex-col gap-3 w-full">
                        <Link href="/login" className="w-full rounded-lg bg-navy px-5 py-3 font-semibold text-white hover:bg-opacity-90">
                            Login
                        </Link>
                        <Link href="/register" className="w-full rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50">
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
