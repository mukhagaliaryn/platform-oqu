import MainLayout from '@/layouts/main-layout';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


export default function NewsPage() {
    const t = useTranslations('NewsPage');

    return (
        <MainLayout>
            <div className="max-w-2xl mx-auto py-10 text-center">
                <h1 className="text-2xl font-semibold">{t('title.title')}</h1>
                <span className="text-muted-foreground">{t('title.description')}</span>
                <div>
                    <Link href={"/"}>{t("links.home")}</Link>
                </div>
            </div>
        </MainLayout>
    );
}
