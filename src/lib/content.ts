import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/locales';

export type Project = CollectionEntry<'projects'>;
export type Post = CollectionEntry<'blog'>;

/** Slug = file name without extension (id looks like "en/my-post"). */
export const slugOf = (e: { id: string }) => e.id.split('/').slice(1).join('/');

const showDrafts = import.meta.env.DEV;

export async function getProjects(locale: Locale): Promise<Project[]> {
  const all = await getCollection('projects', (p) => p.data.locale === locale && (showDrafts || !p.data.draft));
  return all.sort((a, b) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPosts(locale: Locale): Promise<Post[]> {
  const all = await getCollection('blog', (p) => p.data.locale === locale && (showDrafts || !p.data.draft));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Find the other-locale entry sharing a translationKey. */
export async function findTranslation(
  collection: 'projects' | 'blog',
  translationKey: string,
  target: Locale,
): Promise<{ slug: string } | undefined> {
  const list = await getCollection(collection, (e) => e.data.locale === target && e.data.translationKey === translationKey && (showDrafts || !e.data.draft));
  return list[0] ? { slug: slugOf(list[0]) } : undefined;
}

/**
 * Reading-time estimate: Latin words at 200 wpm + CJK characters at 400 cpm,
 * code blocks excluded, minimum 1 minute. Documented in README.
 */
export function estimateReadingTime(body: string | undefined): number {
  if (!body) return 1;
  const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`]*`/g, ' ');
  const cjk = (text.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length;
  const words = (text.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, ' ').match(/[A-Za-z0-9_'’-]+/g) ?? []).length;
  return Math.max(1, Math.ceil(words / 200 + cjk / 400));
}
export const readingTimeOf = (p: Post) => p.data.readingTime ?? estimateReadingTime(p.body);

export function formatDate(d: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'zh-TW', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(d);
}

/** 'YYYY' or 'YYYY-MM' -> readable text. */
export function formatPeriodPart(v: string | undefined, locale: Locale): string {
  if (!v) return '';
  const m = v.match(/^(\d{4})(?:-(\d{2}))?$/);
  if (!m) return v;
  if (!m[2] || m[2] === '00') return m[1]!;
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'zh-TW', { year: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(Date.UTC(+m[1]!, +m[2] - 1, 1)));
}
