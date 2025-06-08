'use client'

import { useScrolled } from "@/hooks/useScrolled";
import { Logo } from "../atoms/Logo";
import { MyGithubLink } from "../atoms/MyGithubLink";
import { LanguageSwitcher } from "../molecules/LanguageSwitcher";
import { cn } from "@/lib/utils";


export function Header() {
    const scrolled = useScrolled(30);
    return (
        <nav className={cn("flex flex-row items-center justify-between py-2 fixed top-0 w-4/5 backdrop-blur-sm duration-200 ease-in transition-all z-50",
            { "shadow-blue-50 translate-y-1": scrolled }
        )}>
            <Logo />
            <div className="flex flex-row gap-3 items-center">
                <LanguageSwitcher />
                <MyGithubLink />
            </div>
        </nav>
    )
}