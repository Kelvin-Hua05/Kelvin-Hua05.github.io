import { SAMPLE, sample } from './sample';
import type { L10n } from '../i18n/locales';

export interface ExperienceEntry {
  organization: L10n;
  role: L10n;
  start?: string;
  end?: string;
  description?: L10n;
  achievements?: L10n[];
  url?: string;
  /** Lets the CV page split research vs work experience. Default 'work'. */
  kind?: 'research' | 'work';
}

/** Add verified entries here. Empty array => section hidden. */
const real: ExperienceEntry[] = [];

export const experience: ExperienceEntry[] = SAMPLE ? sample.experience : real;
