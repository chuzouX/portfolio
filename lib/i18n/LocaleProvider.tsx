"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { locales, defaultLocale, type Locale, type Localized } from "./config";
import { dictionaries, type Dictionary } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  /** Pick the active-language value out of a { en, zh } object. */
  t: <T>(value: Localized<T>) => T;
  /** UI string dictionary for the active language. */
  dict: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // On mount, prefer a stored choice, then the browser language.
  useEffect(() => {
    let next: Locale | null = null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && locales.includes(stored)) next = stored;
    } catch {
      /* ignore */
    }
    if (!next) {
      const nav =
        typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "";
      next = nav.startsWith("zh") ? "zh" : "en";
    }
    setLocaleState(next);
  }, []);

  // Keep <html lang> in sync (drives the :lang(zh) typography rules too).
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(
    () => setLocale(locale === "zh" ? "en" : "zh"),
    [locale, setLocale],
  );

  const t = useCallback(
    <T,>(value: Localized<T>): T => value[locale],
    [locale],
  );

  const value: LocaleContextValue = {
    locale,
    setLocale,
    toggle,
    t,
    dict: dictionaries[locale],
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
