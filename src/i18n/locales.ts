export const locales = ['zh-tw', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; htmlLang: string; ogLocale: string; hreflang: string }> = {
  'zh-tw': { label: '繁體中文', htmlLang: 'zh-Hant-TW', ogLocale: 'zh_TW', hreflang: 'zh-TW' },
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_US', hreflang: 'en' },
};

export function isLocale(v: string | undefined): v is Locale {
  return !!v && (locales as readonly string[]).includes(v);
}
export const otherLocale = (l: Locale): Locale => (l === 'en' ? 'zh-tw' : 'en');

/** Localized text container. A missing locale simply renders nothing. */
export type L10n = Partial<Record<Locale, string>>;
export const pick = (t: L10n | undefined, l: Locale): string => t?.[l] ?? '';
