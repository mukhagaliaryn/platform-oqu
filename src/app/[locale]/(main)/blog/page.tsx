import { BlogContainer } from '@/components/app/main/blog-container';
import MainLayout from '@/layouts/main-layout';


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

type BlogCategory = {
    id: number,
    name: string,
    slug: string
}

export interface BlogProps {
    blogs: Blog[]
    categories: BlogCategory[]
}


export default async function BlogPage() {
    const res = await fetch(`${process.env.BACKEND_URL}/blog/`);
    const data = await res.json();
    const blogs = data.blogs;
    const categories = data.categories;

    return (
        <MainLayout>
            <BlogContainer blogs={blogs} categories={categories} />
        </MainLayout>
    );
}
