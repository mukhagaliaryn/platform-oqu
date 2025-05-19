"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { routing } from '@/i18n/routing';
import { Locale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { startTransition } from "react";
import { useTranslations } from "use-intl";


export function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations("Switchers");

    function handleLocaleChange(nextLocale: Locale) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known params
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size={"icon"}>
                    <Languages strokeWidth={1.5} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup
                    value={locale}
                    onValueChange={handleLocaleChange}
                >
                    {routing.locales.map(locale => (
                        <DropdownMenuRadioItem
                            key={locale}
                            value={locale}
                        >
                            {t("locale", { locale })}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}