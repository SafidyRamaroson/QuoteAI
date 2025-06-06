import { Logo } from "../atoms/Logo";
import { MyGithubLink } from "../atoms/MyGithubLink";
import { LanguageSwitcher } from "../molecules/LanguageSwitcher";


export function Header() {
    return (
        <nav className="flex flex-row items-center justify-between p-2">
            <Logo />
            <div className="flex flex-row gap-3 items-center">
                <LanguageSwitcher />
                <MyGithubLink />
            </div>
        </nav>
    )
}