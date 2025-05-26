import { BlogCategoryContainer } from "@/components/app/main/blog-category-container";
import MainLayout from "@/layouts/main-layout";
import { notFound } from "next/navigation";

export const revalidate = 300;


type Props = {
    params: Promise<{
        slug: string
    }>
}

type BlogCategory = {
    id: number,
    name: string,
    slug: string
}

type Blog = {
    id: number;
    title: string;
    category: {
        id: number,
        name: string,
        slug: string
    };
    shortcut: string,
    content: string,
    created_at: string
}

export interface BlogCategoryProps {
    category: BlogCategory
    categories: BlogCategory[]
    blogs: Blog[]
}


async function getBlogCategory(slug: string) {
    const res = await fetch(`${process.env.BACKEND_URL}/blog/category/${slug}/`)
    const data = await res.json();
    if (!data.category) notFound();
    return data;
}


export async function generateMetadata({ params, }: Props) {
    const { slug } = await params;
    const data = await getBlogCategory(slug);
    const category = data.category;

    return {
        title: category.name,
    }
}

export default async function BlogCategoryPage({ params }: Props) {
    const { slug } = await params;
    const data = await getBlogCategory(slug);
    const category = data.category;
    const categories = data.categories;
    const blogs = data.blogs;

    return (
        <MainLayout>
            <BlogCategoryContainer category={category} categories={categories} blogs={blogs} />
        </MainLayout>
    )
}
