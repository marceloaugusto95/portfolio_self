"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { dictionary, type Dict, type Lang } from "@/content/dictionary";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translations for the active language. */
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "portfolio-lang";

// localStorage is an external store, so it's read through useSyncExternalStore
// rather than mirrored into state inside an effect. The `storage` event only
// fires in *other* tabs, so our own writes notify this set directly.
const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "pt" ? stored : "en";
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
    return "en";
  }
}

// The server — and the hydrating client — always render "en"; React swaps in
// the stored preference right after hydration, with no mismatch.
const getServerSnapshot = (): Lang => "en";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readStoredLang, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = (next: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures; the language just won't persist.
    }
    listeners.forEach((listener) => listener());
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
