import { LandingSection } from '@/components/app/landing-section';
import MainLayout from '@/layouts/main-layout';


export default async function MainPage() {
    const res = await fetch(`${process.env.BACKEND_URL}/`);
    const data = await res.json();
    const courses = data.courses;
    const blogs = data.blogs;

    return (
        <MainLayout>
            <LandingSection courses={courses} blogs={blogs} />
        </MainLayout>
    );
}