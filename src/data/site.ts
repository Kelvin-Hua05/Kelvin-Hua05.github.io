import fs from 'node:fs';
import path from 'node:path';
import type { Locale, L10n } from '../i18n/locales';
import { withBase } from '../lib/url';

/** Site-wide configuration. Edit freely. */
export const site = {
  title: { en: 'Portfolio & Academic CV', 'zh-tw': '作品集與學術履歷' } as L10n,
  description: {
    en: 'Personal website of Yu-Hua, Wu — graduate student working on TCAD simulation, circuit design and design of experiments.',
    'zh-tw': '吳昱樺（Yu-Hua, Wu）的個人網站：TCAD 模擬、電路設計與實驗設計。',
  } as L10n,
  /** Social sharing image, relative to /public. */
  ogImage: 'images/og-cover.png',
  /** Optional privacy note displayed in the footer. Leave empty to hide. */
  privacyNote: {
    en: 'This site is static, sets no tracking cookies and uses no analytics.',
    'zh-tw': '本站為靜態網站，不使用追蹤 Cookie，也未啟用分析工具。',
  } as L10n,
};

/** CV PDF paths relative to /public. A link is only shown if the file really exists. */
export const cvFiles: Record<Locale, string> = {
  en: 'files/cv-en.pdf',
  'zh-tw': 'files/cv-zh-tw.pdf',
};

export function getCvUrl(locale: Locale): string | undefined {
  const rel = cvFiles[locale];
  if (!rel) return undefined;
  return fs.existsSync(path.resolve('public', rel)) ? withBase(rel) : undefined;
}
