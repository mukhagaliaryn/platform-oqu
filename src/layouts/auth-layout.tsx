import { AuthHeader } from "@/components/layouts/auth-header"


type Props = {
    children: React.ReactNode
}


export function AuthLayout({ children }: Props) {
    return (
        <div className="h-screen overflow-auto flex flex-col">
            <div className="flex-1">
                <AuthHeader />

                <main>
                    {children}
                </main>
            </div>

        </div>
    )
}