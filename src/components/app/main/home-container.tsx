import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChartColumn, Languages, SlidersHorizontal } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { MainProps } from '@/app/[locale]/page';


export function HomeContainer({ courses, blogs, faqs }: MainProps) {
    const t = useTranslations("MainPage");
    const locale = useLocale();

    return (
        <>
            {/* Section 1: Offer */}
            <div className="w-full">
                <div className="max-w-2xl mx-auto py-16 px-4 md:px-0 grid gap-4 md:gap-8 text-center">
                    <Image
                        src={"/short-light.svg"}
                        width={240}
                        height={240}
                        alt="OQU"
                        className="mx-auto w-24 md:w-36 dark:hidden"
                    />
                    <Image
                        src={"/short-dark.svg"}
                        width={240}
                        height={240}
                        alt="OQU"
                        className="mx-auto w-24 md:w-36 hidden dark:block"
                    />
                    <div className="grid gap-2">
                        <h1 className="text-3xl md:text-4xl font-semibold">{t('section1.title')}</h1>
                        <span className="text-muted-foreground text-base md:text-lg">{t('section1.subtitle')}</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 md:gap-4">
                        <Link href={"/register"}>
                            <Button variant={"default"}>{t('section1.actions.button1')}</Button>
                        </Link>
                        <Link href={"/courses"}>
                            <Button variant={"outline"}>{t('section1.actions.button2')}</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Section 2: Features */}
            <div className="w-full border-t">
                <div className="max-w-screen-xl w-full mx-auto px-4 py-16 grid gap-4 md:gap-8">
                    <h1 className="text-xl md:text-2xl text-center font-medium">{t('section2.title')}</h1>

                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex flex-col gap-4 items-center p-4 max-w-xs">
                            <div className="bg-secondary p-6 rounded-xl">
                                <Languages size={48} />
                            </div>
                            <div className="text-center">
                                <h1 className="text-xl">{t('section2.features.item1.title')}</h1>
                                <span className="text-muted-foreground">
                                    <div dangerouslySetInnerHTML={{ __html: t.raw('section2.features.item1.subtitle') }} />
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center p-4 max-w-xs">
                            <div className="bg-secondary p-6 rounded-xl">
                                <SlidersHorizontal size={48} />
                            </div>
                            <div className="text-center">
                                <h1 className="text-xl">{t('section2.features.item2.title')}</h1>
                                <span className="text-muted-foreground">
                                    <div dangerouslySetInnerHTML={{ __html: t.raw('section2.features.item2.subtitle') }} />
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center p-4 max-w-xs">
                            <div className="bg-secondary p-6 rounded-xl">
                                <ChartColumn size={48} />
                            </div>
                            <div className="text-center">
                                <h1 className="text-xl">{t('section2.features.item3.title')}</h1>
                                <span className="text-muted-foreground">
                                    <div dangerouslySetInnerHTML={{ __html: t.raw('section2.features.item3.subtitle') }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Courses */}
            <div className="w-full border-t">
                <div className="max-w-screen-xl mx-auto py-16 px-4 grid gap-4 md:gap-8">
                    <h1 className="text-xl md:text-2xl text-center font-medium">{t('section3.title')}</h1>

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full mx-auto max-w-64 xs:max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-screen-lg 2xl:max-w-screen-xl"
                    >
                        <CarouselContent>
                            {courses.map(item => (
                                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <div className="rounded-lg border overflow-hidden">
                                        <div className="aspect-video">
                                            {item.poster ?
                                                <Image
                                                    src={item.poster}
                                                    alt={item.name}
                                                    width={480} height={270}
                                                    className="w-full"
                                                />
                                                :
                                                <div className="bg-secondary w-full h-full"></div>

                                            }
                                        </div>

                                        <div className="p-4">
                                            <h1 className="text-base font-medium">{item.name}</h1>
                                            <span className="text-muted-foreground">{item.sub_category.name}</span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    <div className="flex justify-center">
                        <Link href={"/login"}>
                            <Button variant={"link"}>{t('section3.action')}</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Section 4: Blogs */}
            <div className="w-full border-t">
                <div className="max-w-screen-xl mx-auto py-16 px-4 grid grid-4 md:gap-8">
                    <h1 className="text-xl md:text-2xl text-center font-medium">{t('section4.title')}</h1>

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
                                        <span className="text-muted-foreground">{date}</span>
                                    </div>

                                    <div className="grid gap-2">
                                        <h1 className="text-base md:text-xl font-medium">{item.title}</h1>
                                        <span className="block text-muted-foreground line-clamp-3">
                                            {item.shortcut}
                                        </span>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <div className="w-5 h-5 rounded-full bg-secondary"></div>
                                        <span className="text-muted-foreground">OQU labs</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    <div className="flex justify-center">
                        <Link href={"/blog"}>
                            <Button variant={"link"}>{t('section4.action')}</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Section 5: FAQ */}
            <div className="w-full border-t">
                <div className="max-w-2xl mx-auto py-16 px-4 grid gap-8">
                    <h1 className="text-2xl font-medium text-center">FAQ</h1>

                    <Accordion type="single" collapsible>
                        {faqs.map(item => (
                            <AccordionItem key={item.id} value={`item-${item.id}`}>
                                <AccordionTrigger>{item.title}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    )
}