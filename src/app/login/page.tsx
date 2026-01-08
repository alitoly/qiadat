import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen relative isolate flex items-center justify-center p-4 pt-28 overflow-hidden bg-[#5B6683]">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10 bg-[#5B6683]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#687492]/50 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#9995AB]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#687492]/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <LoginForm />
            </div>
        </div>
    )
}
