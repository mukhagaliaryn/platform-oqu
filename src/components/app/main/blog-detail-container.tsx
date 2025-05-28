import { BlogDetailProps } from "@/app/[locale]/(main)/blog/[id]/page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";


export default function BlogDetailContainer({ blog }: BlogDetailProps) {
    const locale = useLocale();

    const date = new Date(blog.created_at).toLocaleString(locale, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    return (
        <div className="max-w-screen-xl mx-auto py-8 md:py-16 px-4 md:px-0 grid gap-8">
            <Breadcrumb className="mx-auto">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/blog">Жаңалықтар</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href={`/blog/category/${blog.category.slug}`}>{blog.category.name}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="max-w-2xl mx-auto grid gap-8 text-center">
                <h1 className="font-semibold text-2xl md:text-4xl">{blog.title}</h1>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{blog.category.name}</span>
                    <span className="text-muted-foreground">{date}</span>
                </div>
                <span className="text-base md:text-lg text-muted-foreground">{blog.shortcut}</span>
                <div className="text-justify text-base">
                    <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
                </div>
            </div>
        </div>
    )
}