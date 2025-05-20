import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import MainLayout from '@/layouts/main-layout';
import { ChartColumn, Languages, SlidersHorizontal } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';


export default function HomePage() {
    const t = useTranslations('MainPage');

    return (
        <MainLayout>
            {/* Section 1 */}
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
                        <h1 className="text-3xl md:text-4xl font-bold">{t('section1.title')}</h1>
                        <span className="text-muted-foreground md:text-base">{t('section1.subtitle')}</span>
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


            {/* Section 2 */}
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
                                    <div dangerouslySetInnerHTML={{__html: t.raw('section2.features.item1.subtitle')}} />
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
                                    <div dangerouslySetInnerHTML={{__html: t.raw('section2.features.item2.subtitle')}} />
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
                                    <div dangerouslySetInnerHTML={{__html: t.raw('section2.features.item3.subtitle')}} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
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
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <div className="rounded-lg border overflow-hidden">
                                        <div className="aspect-video bg-secondary">
                                        </div>

                                        <div className="p-4">
                                            <h1 className="text-base font-medium">HTML5 негіздері</h1>
                                            <span className="text-muted-foreground">Веб программалау</span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    <div className="flex justify-center">
                        <Link href={"/"}>
                            <Button variant={"default"}>{t('section3.action')}</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Section 4 */}
            <div className="w-full border-t">
                <div className="max-w-screen-xl mx-auto py-16 px-4 grid grid-4 md:gap-8">
                    <h1 className="text-xl md:text-2xl text-center font-medium">{t('section4.title')}</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Items */}
                        <div className="grid gap-4 p-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Платформа</span>
                                <span className="text-muted-foreground">19 мамыр</span>
                            </div>

                            <div className="grid gap-2">
                                <h1 className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, autem?</h1>
                                <span className="block text-muted-foreground line-clamp-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Totam, dicta. Incidunt iste sequi corrupti ipsa dolorem quisquam magni ex quia?
                                </span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 rounded-full bg-secondary"></div>
                                <span className="text-muted-foreground">OQU labs</span>
                            </div>
                        </div>

                        <div className="grid gap-4 p-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Платформа</span>
                                <span className="text-muted-foreground">16 мамыр</span>
                            </div>

                            <div className="grid gap-2">
                                <h1 className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, autem?</h1>
                                <span className="block text-muted-foreground line-clamp-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Totam, dicta. Incidunt iste sequi corrupti ipsa dolorem quisquam magni ex quia?
                                </span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 rounded-full bg-secondary"></div>
                                <span className="text-muted-foreground">OQU labs</span>
                            </div>
                        </div>

                        <div className="grid gap-4 p-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Платформа</span>
                                <span className="text-muted-foreground">14 мамыр</span>
                            </div>

                            <div className="grid gap-2">
                                <h1 className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, autem?</h1>
                                <span className="block text-muted-foreground line-clamp-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Totam, dicta. Incidunt iste sequi corrupti ipsa dolorem quisquam magni ex quia?
                                </span>
                            </div>

                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 rounded-full bg-secondary"></div>
                                <span className="text-muted-foreground">OQU labs</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Link href={"/"}>
                            <Button variant={"default"}>{t('section4.action')}</Button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Section 5 */}
            <div className="w-full border-t">
                <div className="max-w-2xl mx-auto py-16 px-4 grid gap-8">
                    <h1 className="text-2xl font-medium text-center">FAQ</h1>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>OQU платформасы қашан іске қосылады?</AccordionTrigger>
                            <AccordionContent>
                                Қазіргі кезде біз әзірлеу кезеңіндеміз. Платформаның алғашқы нұсқасы 2025 жылдың ішінде іске қосылады. 
                                Қызығушылық білдірушілерді алдын ала тіркеуге шақырамыз.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Курстар тегін бола ма?</AccordionTrigger>
                            <AccordionContent>
                                Кейбір курстар тегін ұсынылады. Толық курстар мен арнайы бағыттар — қолжетімді бағамен беріледі. 
                                Толық баға жоспары кейінірек жарияланады.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Қай жастағы қолданушыларға арналған?</AccordionTrigger>
                            <AccordionContent>
                                Платформа мектеп оқушыларына, ҰБТ тапсырушыларға және өз бетімен білім алғысы келетіндерге арналған. 
                                Көптеген курс 12 жастан жоғары оқушыларға сай келеді.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Платформаны қолдану үшін арнайы қосымша керек пе?</AccordionTrigger>
                            <AccordionContent>
                                Жоқ. Платформа веб арқылы жұмыс істейді. Браузерден кірсеңіз жеткілікті. Кейін мобильді қосымша да жоспарлануда.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Курстар қазақ тілінде бола ма?</AccordionTrigger>
                            <AccordionContent>
                                Иә. Барлық негізгі курстар қазақ тілінде жасалады. Бұл — біздің басты басымдылығымыз.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>Жаңалықтан қалай хабардар бола аламын?</AccordionTrigger>
                            <AccordionContent>
                                Басты беттегі жазылу формасы арқылы email қалдырсаңыз — жаңалықтарды бірінші болып аласыз.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
        </MainLayout>
    );
}