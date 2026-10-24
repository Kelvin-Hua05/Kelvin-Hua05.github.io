import { SAMPLE, sample } from './sample';
import type { L10n } from '../i18n/locales';

/**
 * Profile data. Empty strings / empty objects / empty arrays are hidden on the public site.
 * The placeholder headline below is NOT a verified credential — edit it.
 */
const real = {
  /** English display name. */
  nameEn: 'Yu-Hua, Wu',
  /** Optional Chinese name, e.g. '王小明'. */
  nameZh: '吳昱樺',
  headline: {
    en: 'Graduate Student | TCAD Simulation · Circuit Design · Design of Experiments',
    'zh-tw': '碩士研究生｜TCAD 模擬・電路設計・實驗設計',
  } as L10n,
  shortBio: {
    en: "Master's student at the Institute of Communications Engineering, National Yang Ming Chiao Tung University. Research directions: TCAD simulation, circuit design and design of experiments.",
    'zh-tw': '國立陽明交通大學電信工程研究所碩士班研究生，目前研究方向為 TCAD 模擬、電路設計與實驗設計。',
  } as L10n,
  longBio: {} as L10n,
  /** Path relative to /public, e.g. 'images/profile.webp'. Leave '' to hide the photo. */
  image: '',
  location: {} as L10n,
  /** Research interests: add / remove items freely. */
  interests: [
    { en: 'TCAD Simulation', 'zh-tw': 'TCAD 模擬' },
    { en: 'Circuit Design', 'zh-tw': '電路設計' },
    { en: 'Design of Experiments', 'zh-tw': '實驗設計' },
  ] as L10n[],
  /** Optional About-page sections (hidden when empty). */
  about: {
    technicalInterests: {} as L10n,
    problemSolving: {} as L10n,
    learning: {} as L10n,
    currentFocus: {} as L10n,
    futureDirection: {} as L10n,
  },
};

export const profile = SAMPLE
  ? { ...real, shortBio: sample.shortBio, longBio: sample.longBio }
  : real;

/** Display name for a locale (Chinese name appended when present). */
export const displayName = profile.nameEn;
