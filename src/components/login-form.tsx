import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="text-center mb-2">
                <h1 className="text-2xl font-bold text-navy">مرحباً بك مجدداً</h1>
                <p className="text-gray-500 text-sm mt-2">
                    أدخل بياناتك للدخول إلى حسابك
                </p>
            </div>

            <Card className="overflow-hidden p-6 md:p-8 rounded-3xl shadow-xl border-t border-white/50 bg-white/80 backdrop-blur-md">
                <CardContent className="p-0">
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-navy">البريد الإلكتروني</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                                className="rounded-xl border-gray-200 focus:border-navy focus:ring-navy py-5"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-navy">كلمة المرور</label>
                                <a
                                    href="#"
                                    className="text-xs text-navy hover:underline font-medium"
                                >
                                    نسيت كلمة المرور؟
                                </a>
                            </div>
                            <Input id="password" type="password" required className="rounded-xl border-gray-200 focus:border-navy focus:ring-navy py-5" />
                        </div>
                        <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-6 rounded-xl mt-2 shadow-lg shadow-navy/10 transition-transform active:scale-[0.98]">
                            تسجيل الدخول
                        </Button>

                        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                            <span className="relative z-10 bg-white/0 px-2 text-muted-foreground font-medium">
                                أو تابع باستخدام
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="w-full rounded-xl py-5 hover:bg-gray-50" type="button">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="sr-only">Login with Google</span>
                            </Button>
                            <Button variant="outline" className="w-full rounded-xl py-5 hover:bg-gray-50" type="button">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="sr-only">Login with Apple</span>
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <div className="text-center text-sm text-gray-500">
                ليس لديك حساب؟{" "}
                <Link href="/register" className="font-semibold text-navy hover:underline">
                    أنشئ حساباً جديداً
                </Link>
            </div>

            <div className="text-center text-xs text-gray-400 max-w-xs mx-auto">
                بالنقر على متابعة فإنك توافق على <a href="#" className="hover:text-navy">شروط الخدمة</a>{" "}
                و <a href="#" className="hover:text-navy">سياسة الخصوصية</a>.
            </div>
        </div>
    )
}
