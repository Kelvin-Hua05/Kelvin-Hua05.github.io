/** Prefix a site-internal path with the configured Astro base. Keeps the trailing slash of routes. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}

/** Absolute URL (uses `site` from astro.config.mjs). */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(withBase(path), site ?? 'http://localhost:4321').href;
}
