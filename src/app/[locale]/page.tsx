import { HomeContainer } from '@/components/app/main/home-container';
import MainLayout from '@/layouts/main-layout';


type Course = {
    id: number;
    name: string;
    sub_category: {
        id: number,
        name: string,
        slug: string
    };
    poster: string
};

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

type FAQ = {
    id: number,
    title: string,
    content: string
}

export interface MainProps {
    courses: Course[];
    blogs: Blog[];
    faqs: FAQ[]
}


export default async function MainPage() {
    const res = await fetch(`${process.env.BACKEND_URL}/`);
    const data = await res.json();
    const courses = data.courses;
    const blogs = data.blogs;
    const faqs = data.faqs;

    return (
        <MainLayout>
            <HomeContainer 
                courses={courses} 
                blogs={blogs} 
                faqs={faqs} 
            />
        </MainLayout>
    );
}