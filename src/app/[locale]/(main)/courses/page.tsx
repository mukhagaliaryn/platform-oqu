import MainLayout from "@/layouts/main-layout";
import Link from "next/link";


export default function CoursesPage() {
    return (
        <MainLayout>
            <div className="max-w-2xl mx-auto py-10 text-center">
                <h1 className="text-2xl font-semibold">Courses page</h1>
                <span className="text-muted-foreground">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Aliquid, suscipit repudiandae sed illum perferendis nisi ex tempore praesentium ad quod!
                </span>
                <div>
                    <Link href={"/"}>Басты бет</Link>
                </div>
            </div>
        </MainLayout>
    )
}