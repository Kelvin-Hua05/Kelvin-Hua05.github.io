import { SAMPLE, sample } from './sample';

/** Contact / social links. Leave '' to hide. Never invent handles. */
const real = {
  email: 'yuhua.ee15@nycu.edu.tw',
  github: 'https://github.com/Kelvin-Hua05',
  linkedin: '',
  website: '',
  others: [] as { label: string; url: string }[],
};

export const social: typeof real = SAMPLE ? { ...real, ...sample.social } : real;

export interface ContactLink { id: string; label: string; href: string; external: boolean }

export function contactLinks(): ContactLink[] {
  const out: ContactLink[] = [];
  if (social.email) out.push({ id: 'email', label: 'Email', href: `mailto:${social.email}`, external: false });
  if (social.github) out.push({ id: 'github', label: 'GitHub', href: social.github, external: true });
  if (social.linkedin) out.push({ id: 'linkedin', label: 'LinkedIn', href: social.linkedin, external: true });
  if (social.website) out.push({ id: 'website', label: 'Website', href: social.website, external: true });
  for (const o of social.others) if (o.url) out.push({ id: o.label, label: o.label, href: o.url, external: true });
  return out;
}
