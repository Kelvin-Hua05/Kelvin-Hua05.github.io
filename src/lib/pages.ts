import { locales, type Locale } from '../i18n/locales';
export const staticPaths = () => locales.map((locale) => ({ params: { locale } }));
/** Alternates for pages that exist identically in both locales. */
export const altFor = (section: string): Partial<Record<Locale, string>> =>
  Object.fromEntries(locales.map((l) => [l, `/${l}/${section ? section + '/' : ''}`])) as Partial<Record<Locale, string>>;
