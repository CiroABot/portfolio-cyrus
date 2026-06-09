'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { translations } from './data';
import { Content, Language } from './types';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/* Language now lives in the URL (/pt, /en). The active language is passed in
   from the route (initialLang); toggling navigates to the other locale,
   preserving the current scroll position. */
export const LanguageProvider: React.FC<{ children: ReactNode; initialLang: Language }> = ({ children, initialLang }) => {
  const router = useRouter();
  const pathname = usePathname();
  const lang = initialLang;

  const toggleLang = () => {
    const next: Language = lang === 'pt' ? 'en' : 'pt';
    const newPath = pathname.replace(/^\/(pt|en)/, `/${next}`);
    router.push(newPath, { scroll: false });
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
