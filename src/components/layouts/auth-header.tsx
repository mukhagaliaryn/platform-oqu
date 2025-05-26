"use client"

import Image from "next/image";
import { LocaleSwitcher } from "../locale-swicher";
import { ModeToggle } from "../theme-swicher";


export function AuthHeader() {

    return (
        <div className="sticky top-0 z-40 w-full backdrop-blur-2xl">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-center lg:justify-between">
                <div className="flex py-2 md:py-0">
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
                </div>


                <div className="hidden lg:flex gap-2">
                    <LocaleSwitcher />
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}
