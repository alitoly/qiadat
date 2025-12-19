import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center p-4 md:p-10 relative">
            {/* Background elements if needed, or keep clean */}
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}
