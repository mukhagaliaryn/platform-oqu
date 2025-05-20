import { ReactNode } from "react";
import { Inter_Tight } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";


const interTight = Inter_Tight({
    subsets: ["latin"]
})


type Props = {
    children: ReactNode,
    params: Promise<{ locale: string }>
}


export async function generateMetadata({ params }: Omit<Props, "children">) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t("title"),
        description: t("description")
    };
}


export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale} className={interTight.className} suppressHydrationWarning>
            <body className="text-sm overflow-hidden">

                <NextIntlClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                            {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
