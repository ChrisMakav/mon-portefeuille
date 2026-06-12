"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { type Lang, t } from "@/lib/i18n/translations";

type Tr = typeof t.fr;

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  tr: Tr;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "fr",
  toggle: () => {},
  tr: t.fr as Tr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, tr: t[lang] as Tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
