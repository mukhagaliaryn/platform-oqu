import { MainFooter } from "@/components/layouts/main-footer";
import { MainHeader } from "@/components/layouts/main-header";
import { ReactNode } from "react";


type Props = {
    children: ReactNode;
}


export default function MainLayout({ children }: Props) {
    return (
        <div className="h-screen overflow-auto flex flex-col bg-background">
            <div className="flex-1">
                <MainHeader />

                <main>
                    {children}
                </main>
            </div>

            <MainFooter />
        </div>
    )
}
