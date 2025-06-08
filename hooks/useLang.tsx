// hooks/useLang.ts
'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Lang = 'fr' | 'en';
interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const langFromUrl = pathname.split('/')[1] as Lang;
    if (['fr', 'en'].includes(langFromUrl)) {
      setLang(langFromUrl);
    }
  }, [pathname]);

  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    setLang(newLang);
    
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLang}`);
    router.push(newPath);
  };

  const value: LangContextValue = {
    lang,
    toggleLang,
  };

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
};

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
}