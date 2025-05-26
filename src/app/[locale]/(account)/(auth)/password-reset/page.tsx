import { PasswordResetForm } from "@/components/app/account/auth/password-reset-form";
import { AuthLayout } from "@/layouts/auth-layout";


export default function PasswordResetPage() {
    return (
        <AuthLayout>
            <div className="w-full max-w-sm mx-auto py-16 px-4 md:px-0">
                <PasswordResetForm />
            </div>
        </AuthLayout>
    )
}