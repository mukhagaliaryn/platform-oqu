import { RegisterForm } from "@/components/app/account/auth/register-form";
import { AuthLayout } from "@/layouts/auth-layout";


export default function RegisterPage() {
    return (
        <AuthLayout>
            <div className="w-full max-w-sm mx-auto py-16 px-4 md:px-0">
                <RegisterForm />
            </div>
        </AuthLayout>
    )
}
