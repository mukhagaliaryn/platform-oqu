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

export interface BlogProps {
    blogs: Blog[]
}


export default async function BlogPage() {
    const res = await fetch(`${process.env.BACKEND_URL}/blog/`);
    const data = await res.json();
    const blogs = data.blogs;

    return (
        <MainLayout>
            <BlogContainer blogs={blogs} />
        </MainLayout>
    );
}
