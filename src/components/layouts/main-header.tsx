"use client"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { AlignLeft } from "lucide-react";
import { usePathname } from "next/navigation";


export function MainHeader() {
    const t = useTranslations("MainLayout.header");
    const pathname = usePathname();
    const locale = useLocale();
    

    return (
        <div className="sticky top-0 z-40 w-full border-b bg-white/70 dark:bg-black/70 backdrop-blur-2xl">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <Link href={"/"}>
                        <Image
                            src={`/full-light.svg`}
                            width={329} height={105}
                            alt="OQU platforms logo"
                            className="w-20 dark:hidden"
                        />
                        <Image
                            src={`/full-dark.svg`}
                            width={329} height={105}
                            alt="OQU platforms logo"
                            className="w-20 hidden dark:block"
                        />
                    </Link>

                    <nav className="hidden lg:flex gap-1">
                        <Link href={"/"}>
                            <Button variant={pathname === `/${locale}` ? "secondary" : "ghost"} className="text-muted-foreground">{t("nav.home")}</Button>
                        </Link>
                        <Link href={"/courses"}>
                            <Button variant={pathname === `/${locale}/courses` ? "secondary" : "ghost"} className="text-muted-foreground">{t("nav.courses")}</Button>
                        </Link>
                        <Link href={"/news"}>
                            <Button variant={pathname === `/${locale}/news` ? "secondary" : "ghost"} className="text-muted-foreground">{t("nav.news")}</Button>
                        </Link>
                    </nav>
                </div>


                <div className="hidden lg:flex gap-2">
                    <Link href={"/login"}>
                        <Button variant={"outline"}>{t("auth.login")}</Button>
                    </Link>
                    <Link href={"/register"}>
                        <Button variant={"default"}>{t("auth.signup")}</Button>
                    </Link>
                </div>

                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={"ghost"} size={"icon"}>
                                <AlignLeft strokeWidth={1.5} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={"top"}>
                            <SheetHeader>
                                <SheetTitle>
                                    <Link href={"/"}>
                                        <Image
                                            src={`/full-light.svg`}
                                            width={329} height={105}
                                            alt="OQU platforms logo"
                                            className="w-16 dark:hidden"
                                        />
                                        <Image
                                            src={`/full-dark.svg`}
                                            width={329} height={105}
                                            alt="OQU platforms logo"
                                            className="w-16 hidden dark:block"
                                        />
                                    </Link>
                                </SheetTitle>
                                <SheetDescription asChild>
                                    <div className="grid gap-2 pt-4">
                                        <nav className="grid gap-1">
                                            <Link href={"/"} >
                                                <Button variant={"ghost"} className="text-muted-foreground w-full justify-start">{t("nav.home")}</Button>
                                            </Link>
                                            <Link href={"/"}>
                                                <Button variant={"ghost"} className="text-muted-foreground w-full justify-start">{t("nav.courses")}</Button>
                                            </Link>
                                            <Link href={"/"}>
                                                <Button variant={"ghost"} className="text-muted-foreground w-full justify-start">{t("nav.news")}</Button>
                                            </Link>
                                        </nav>

                                        <div className="grid gap-2">
                                            <Link href={"/"}>
                                                <Button variant={"outline"} className="w-full">{t("auth.login")}</Button>
                                            </Link>
                                            <Link href={"/"}>
                                                <Button variant={"default"} className="w-full">{t("auth.signup")}</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}
