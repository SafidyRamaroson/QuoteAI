import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'FR' | 'EN';

interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('FR');

  const toggleLang = () => {
    setLang((prev) => (prev === 'FR' ? 'EN' : 'FR'));
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
