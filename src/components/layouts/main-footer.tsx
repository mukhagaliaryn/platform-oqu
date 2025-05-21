import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme-swicher";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "../locale-swicher";


export function MainFooter() {
    const t = useTranslations("MainLayout.footer");

    return (
        <div className="border-t">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8 flex gap-4 flex-wrap items-start justify-between">
                <div className="grid gap-2 max-w-48">
                    <Link href={"/"}>
                        <Image
                            src={`/full-light.svg`}
                            width={329} height={105}
                            alt="OQU platforms logo"
                            className="w-16 md:w-20 dark:hidden"
                        />
                        <Image
                            src={`/full-dark.svg`}
                            width={329} height={105}
                            alt="OQU platforms logo"
                            className="w-16 md:w-20 hidden dark:block"
                        />
                    </Link>
                    <span className="text-muted-foreground">{t("shortcut")}</span>
                </div>

                <div className="flex-1 flex items-start justify-between md:justify-around">
                    <div className="grid gap-2">
                        <h1 className="text-base font-medium ml-4">{t("nav.resources.title")}</h1>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    <Button variant={"link"} className="text-muted-foreground">{t("nav.resources.l1")}</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/courses"}>
                                    <Button variant={"link"} className="text-muted-foreground">{t("nav.resources.l2")}</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid gap-2">
                        <h1 className="text-base font-medium ml-4">{t("nav.about.title")}</h1>
                        <ul>
                            <li>
                                <Link href={"/blog"}>
                                    <Button variant={"link"} className="text-muted-foreground">{t("nav.about.l1")}</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <Button variant={"link"} className="text-muted-foreground">{t("nav.about.l2")}</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <Button variant={"link"} className="text-muted-foreground">{t("nav.about.l3")}</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid gap-2">
                        <h1 className="text-base font-medium ml-4">{t("nav.contact.title")}</h1>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    <Button variant={"link"} className="text-muted-foreground">YouTube</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <Button variant={"link"} className="text-muted-foreground">Instagram</Button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <Button variant={"link"} className="text-muted-foreground">WA Business</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-2">
                    <LocaleSwitcher />
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}