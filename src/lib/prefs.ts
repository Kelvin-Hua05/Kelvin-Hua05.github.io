/** Client-only helpers. Versioned key; every storage access is guarded. */
export const PREFS_KEY = 'cdp:v1:preferences';
export const accents = ['dual', 'violet', 'cyan'] as const;
export type Accent = (typeof accents)[number];
export type Theme = 'dark' | 'light';
export interface Prefs { theme?: Theme; accent?: Accent }

export const isAccent = (v: unknown): v is Accent => (accents as readonly unknown[]).includes(v);

export function readPrefs(): Prefs {
  try { return JSON.parse(localStorage.getItem(PREFS_KEY) ?? '{}') as Prefs; } catch { return {}; }
}
export function savePrefs(patch: Prefs): void {
  try { localStorage.setItem(PREFS_KEY, JSON.stringify({ ...readPrefs(), ...patch })); } catch { /* storage unavailable */ }
}

export function syncAccentButtons(): void {
  const cur = document.documentElement.dataset.accent ?? 'dual';
  document.querySelectorAll<HTMLButtonElement>('.accent-switch [data-accent]').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.dataset.accent === cur)));
}

export function setAccent(a: Accent): void {
  document.documentElement.dataset.accent = a;
  savePrefs({ accent: a });
  syncAccentButtons();
  const btn = document.querySelector<HTMLElement>(`.accent-switch [data-accent="${a}"]`);
  const status = document.getElementById('accent-status');
  if (status && btn?.dataset.announce) status.textContent = btn.dataset.announce;
}
