'use client'

import { Switch } from "@/components/ui/switch";
import { useLang } from "@/hooks/useLang";

export function LanguageSwitcher() {
  const { lang, toggleLang } = useLang();

  return (
    <div className="flex items-center gap-2">
      <span className={`text-sm ${lang === 'en' ? 'font-bold' : 'opacity-50'}`}>EN</span>
      <Switch
        checked={lang === 'fr'}
        onCheckedChange={toggleLang}
      />
      <span className={`text-sm ${lang === 'fr' ? 'font-bold' : 'opacity-50'}`}>FR</span>
    </div>
  );
}