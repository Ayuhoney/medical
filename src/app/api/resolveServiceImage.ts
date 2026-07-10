import { IMAGES } from "@/app/constants";
import type { ServiceDetailItem } from "@/app/components/ServiceDetailSection";
import type { ServiceItem } from "@/app/api/types";

type ImageMap = Record<string, string>;

const imageMap = IMAGES as unknown as ImageMap;

/** Resolve a DB imageKey to a bundled asset URL. */
export function resolveImageKey(key: string | undefined | null): string {
  if (!key) return imageMap.clinicInterior || "";
  return imageMap[key] || imageMap.clinicInterior || "";
}

/** Map API service docs → ServiceDetailSection items. */
export function mapServicesToDetailItems(services: ServiceItem[]): ServiceDetailItem[] {
  return services
    .filter((s) => s.category !== "booking")
    .map((s) => ({
      id: s.serviceId,
      tag: s.tag,
      title: s.title,
      description: s.description,
      bullets: s.bullets,
      image: resolveImageKey(s.imageKey),
      cta: s.ctaLabel && s.ctaPath ? { label: s.ctaLabel, path: s.ctaPath } : undefined,
    }));
}
