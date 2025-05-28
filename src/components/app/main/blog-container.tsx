"use client"

import { BlogProps } from "@/app/[locale]/(main)/blog/page"
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation";


export function BlogContainer({ blogs, categories }: BlogProps) {
    const locale = useLocale();
    const pathname = usePathname();

    return (
        <>
            <div className="max-w-screen-xl mx-auto py-8 md:py-16 px-4 grid gap-8">
                <div className="grid md:flex gap-4 justify-between">
                    <h1 className="text-2xl font-medium">Жаңалықтар.</h1>

                    <ScrollArea className="max-w-xs sm:max-w-full">
                        <div className="flex gap-2 items-center">
                            <Link href={`/blog`}>
                                <Button variant={pathname === `/${locale}/blog` ? "default" : "ghost"}>Барлығы</Button>
                            </Link>
                            {categories.map(item => (
                                <Link key={item.id} href={`/blog/category/${item.slug}`}>
                                    <Button variant={pathname === `/${locale}/blog/category/${item.slug}` ? "default" : "ghost"}>{item.name}</Button>
                                </Link>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>

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
                                    <span className="text-muted-foreground" suppressHydrationWarning>{date}</span>
                                </div>

                                <div className="grid gap-2">
                                    <h1 className="text-base md:text-xl font-medium">{item.title}</h1>
                                    <div className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
                                        {item.shortcut}
                                    </div>
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