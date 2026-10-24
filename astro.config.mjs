// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import rehypeFigure from './src/lib/rehype-figure.mjs';

// Deployment target. For a GitHub *user* site (YOUR_USERNAME.github.io) the base is "/".
// Override with env vars (also used by the GitHub Actions workflow):
//   SITE_URL=https://YOUR_USERNAME.github.io   BASE_PATH=/
// For a project site use e.g. SITE_URL=https://USER.github.io BASE_PATH=/repo-name/
const site = process.env.SITE_URL ?? 'https://YOUR_USERNAME.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    processor: unified({ rehypePlugins: [[rehypeFigure, { base }]] }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-default' },
      defaultColor: false,
      wrap: false,
    },
  },
});
