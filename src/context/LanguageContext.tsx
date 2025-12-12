
import  { createContext, useState, useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
      setLanguage(storedLang);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setLanguage(newLang); 
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
