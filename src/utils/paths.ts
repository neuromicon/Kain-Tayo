/**
 * Returns the correct URL for static assets located in the public directory,
 * respecting Vite's base path on GitHub Pages (e.g. /Kain-Tayo/).
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
