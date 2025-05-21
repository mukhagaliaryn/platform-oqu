import BlogDetailContainer from "@/components/app/main/blog-detail-container";
import MainLayout from "@/layouts/main-layout";
import { notFound } from "next/navigation";

export const revalidate = 300;


type Props = {
    params: Promise<{
        id: string
    }>
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

export interface BlogDetailProps {
    blog: Blog
}


async function getBlog(id: string) {
    const res = await fetch(`${process.env.BACKEND_URL}/blog/${id}/`)
    const data = await res.json();
    const blog = data.blog;
    if (!blog) notFound();
    return blog;
}


export async function generateMetadata({ params, }: Props) {
    const { id } = await params;
    const blog = await getBlog(id)

    return {
        title: blog.title,
    }
}

export default async function BlogPage({ params }: Props) {
    const { id } = await params;
    const blog = await getBlog(id);

    return (
        <MainLayout>
            <BlogDetailContainer blog={blog} />
        </MainLayout>
    )
}
