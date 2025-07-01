"use client";
import { useState } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "vi" : "en";
    setLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm text-neutral-700 dark:text-neutral-300 hover:underline px-3 py-1 rounded"
    >
      {lang === "en" ? "EN" : "VI"}
    </button>
  );
}
