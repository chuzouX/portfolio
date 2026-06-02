export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

/** Server-render default. The provider upgrades this on mount from
 *  localStorage / navigator.language. */
export const defaultLocale: Locale = "zh";

/** A piece of content available in every supported language. */
export type Localized<T = string> = Record<Locale, T>;
