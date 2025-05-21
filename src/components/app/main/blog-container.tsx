import { BlogProps } from "@/app/[locale]/(main)/blog/page"
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl"


export function BlogContainer({ blogs }: BlogProps) {
    const locale = useLocale();

    return (
        <>
            <div className="max-w-screen-xl mx-auto py-8 md:py-16 px-4 md:px-0 grid gap-8">
                <h1 className="text-2xl font-semibold">Соңғы жаңалықтар.</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Items */}
                    {blogs.map(item => {
                        const date = new Date(item.created_at).toLocaleString(locale, {
                            month: 'long',
                            day: 'numeric',
                        })
                        return (
                            <Link
                                href={`/blog/${item.id}`} 
                                key={item.id} className="grid gap-4 p-4 transition-all hover:bg-secondary"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">{item.category.name}</span>
                                    <span className="text-muted-foreground">{date}</span>
                                </div>

                                <div className="grid gap-2">
                                    <h1 className="text-base md:text-xl font-medium">{item.title}</h1>
                                    <span className="block text-muted-foreground line-clamp-3">
                                        {item.shortcut}
                                    </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <div className="w-5 h-5 rounded-full bg-secondary"></div>
                                    <span className="text-muted-foreground">OQU labs</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}