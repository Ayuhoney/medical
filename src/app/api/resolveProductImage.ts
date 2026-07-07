const storeImages = import.meta.glob("@/imports/store/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const byFile = new Map<string, string>(
  Object.entries(storeImages).map(([p, url]) => [p.split("/").pop() || p, url]),
);

export function resolveProductImage(image: string): string {
  // Backend currently returns `/imports/store/<file>.webp` which is not a public URL.
  // In the Vite app, the real URL is produced by importing the asset.
  if (image?.startsWith("/imports/store/")) {
    const file = image.split("/").pop() || "";
    return byFile.get(file) || image;
  }
  return image;
}

