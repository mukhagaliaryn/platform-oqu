"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"


export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [position, setPosition] = useState(theme);
    const t = useTranslations("Switchers");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem onClick={() => setTheme("light")} value="light">
                        {t("theme.light")}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem onClick={() => setTheme("dark")} value="dark">
                        {t("theme.dark")}
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem onClick={() => setTheme("system")} value="system">
                        {t("theme.system")}
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
