import type { L10n } from '../i18n/locales';

/** CV-only lists. Empty arrays => the section is hidden. Add ONLY verified entries. */
export interface CvEntry { title: L10n; detail?: L10n; year?: string; url?: string }

export const publications: CvEntry[] = [];
export const awards: CvEntry[] = [];
export const certifications: CvEntry[] = [];
/** e.g. { title: { en: 'Mandarin Chinese', 'zh-tw': '華語' }, detail: { en: 'Native', 'zh-tw': '母語' } } */
export const languages: CvEntry[] = [];
