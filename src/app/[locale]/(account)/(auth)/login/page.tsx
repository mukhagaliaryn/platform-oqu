import { LoginForm } from "@/components/app/account/auth/login-form";
import { AuthLayout } from "@/layouts/auth-layout";


export default function LoginPage() {
    
    return (
        <AuthLayout>
            <div className="w-full max-w-sm mx-auto py-16 px-4 md:px-0">
                <LoginForm />
            </div>
        </AuthLayout>
    )
}
