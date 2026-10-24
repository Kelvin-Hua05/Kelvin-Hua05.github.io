import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const locale = z.enum(['zh-tw', 'en']);

/**
 * Content lives in locale folders:  src/content/<collection>/<locale>/<slug>.md
 * Translations of the same item share `translationKey`. The URL slug is the file name.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    locale,
    translationKey: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
    order: z.number().default(100),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string().optional(),
    githubUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    /** translationKeys of related projects */
    relatedProjectIds: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    locale,
    translationKey: z.string(),
    title: z.string(),
    description: z.string(),
    excerpt: z.string().optional(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
    coverImage: z.string().optional(),
    author: z.string().optional(),
    /** Minutes. If omitted it is estimated automatically (see src/lib/content.ts). */
    readingTime: z.number().int().positive().optional(),
  }),
});

export const collections = { projects, blog };
