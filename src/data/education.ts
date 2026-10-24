import { SAMPLE, sample } from './sample';
import type { L10n } from '../i18n/locales';

export interface EducationEntry {
  institution: L10n;
  degree: L10n;
  field?: L10n;
  /** 'YYYY' or 'YYYY-MM'. */
  start?: string;
  /** Empty / undefined = present. */
  end?: string;
  description?: L10n;
  url?: string;
}

/** Add verified entries here. Empty array => section hidden. */
const NYCU = { en: 'National Yang Ming Chiao Tung University', 'zh-tw': '國立陽明交通大學' };
// Only dates that were provided are shown. Add `start` / `end` to the first entry when you want them.
const real: EducationEntry[] = [
  {
    institution: NYCU,
    degree: { en: 'Department of Industrial Engineering and Management', 'zh-tw': '工業工程與管理學系' },
  },
  {
    institution: NYCU,
    degree: { en: "Institute of Communications Engineering (Master's Program)", 'zh-tw': '電信工程研究所碩士班' },
    start: '2026-09',
  },
];

export const education: EducationEntry[] = SAMPLE ? sample.education : real;
