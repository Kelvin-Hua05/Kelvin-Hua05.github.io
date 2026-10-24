import { SAMPLE, sample } from './sample';
import type { L10n } from '../i18n/locales';

export interface SkillGroupData {
  category: L10n;
  items: { name: string; description?: L10n }[];
  order?: number;
}

/**
 * Technical skills. Names only — no percentages or proficiency scores.
 * Example group to copy into the array below:
 *   { category: { en: 'EDA Tools', 'zh-tw': 'EDA 工具' }, items: [{ name: 'Your tool' }] }
 */
const real: SkillGroupData[] = [
  {
    order: 1,
    category: { en: 'Semiconductor & Circuits', 'zh-tw': '半導體與電路' },
    items: [{ name: 'CFET TCAD Simulation' }, { name: 'IC Design' }],
  },
  {
    order: 2,
    category: { en: 'AI & Data', 'zh-tw': '人工智慧與數據' },
    items: [{ name: 'AI' }, { name: 'Machine Learning' }, { name: 'Deep Learning' }, { name: 'Design of Experiments' }],
  },
  {
    order: 3,
    category: { en: 'Financial Markets', 'zh-tw': '金融市場' },
    items: [{ name: 'Market Trading' }],
  },
];

const source: SkillGroupData[] = SAMPLE ? sample.skills : real;
export const skills: SkillGroupData[] = source
  .slice()
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
