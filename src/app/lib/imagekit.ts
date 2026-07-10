/** ImageKit CDN helpers for Beach Road Surgery website */

export const IMAGEKIT_URL_ENDPOINT =
  import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT?.toString() ||
  "https://ik.imagekit.io/fzmztwj7s";

/** Build a CDN URL from a path under the beach-road media root. */
export function ik(path: string, transforms?: string): string {
  const clean = path.replace(/^\/+/, "");
  const base = `${IMAGEKIT_URL_ENDPOINT}/${clean}`;
  return transforms ? `${base}?tr=${transforms}` : base;
}

/** Optional responsive image transform shorthand. */
export function ikThumb(path: string, width = 800): string {
  return ik(path, `w-${width},q-80`);
}
