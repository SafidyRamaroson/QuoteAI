import { Switch } from "@/components/ui/switch";
import { useLang } from "@/hooks/useLang";
import { useEffect } from "react";


export function LanguageSwitcher() {
    const { lang, toggleLang } = useLang();

    // useEffect(() =>{
    //     alert(lang)
    // }, [toggleLang])
    return (
        <p className="flex gap-2">
            <span className="font-medium text-sm">EN</span>
            <Switch
                checked={lang === 'FR'}
                onCheckedChange={toggleLang}
            />
            <span className="font-medium text-sm">FR</span>
        </p>
    )
}