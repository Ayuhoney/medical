import { IMAGES } from "@/app/constants";
import type { ServiceDetailItem } from "@/app/components/ServiceDetailSection";

export const laserServices: ServiceDetailItem[] = [
  {
    id: "laser-resurfacing",
    tag: "RESURFACING",
    title: "Laser Skin Resurfacing",
    description:
      "Fractional laser technology to resurface skin, reduce fine lines and wrinkles, and dramatically improve overall texture and tone.",
    bullets: ["Fractional CO2 & erbium options", "Fine line reduction", "Texture refinement", "Customised depth settings"],
    image: IMAGES.laserResurfacing,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "pigmentation",
    tag: "PIGMENTATION",
    title: "Pigmentation Treatment",
    description:
      "Targeted laser therapy for sunspots, age spots, melasma, and post-inflammatory hyperpigmentation — restoring a clearer, more even complexion.",
    bullets: ["Sun spot removal", "Melasma management", "Age spot treatment", "Even skin tone restoration"],
    image: IMAGES.laserPigmentation,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "vascular-lesions",
    tag: "VASCULAR",
    title: "Vascular Lesions",
    description:
      "Laser treatment for facial redness, spider veins, rosacea, broken capillaries, and cherry angiomas — for clearer, calmer skin.",
    bullets: ["Spider vein treatment", "Rosacea management", "Facial redness reduction", "Precision targeting"],
    image: IMAGES.laserVascular,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "skin-rejuvenation",
    tag: "REJUVENATION",
    title: "Skin Rejuvenation",
    description:
      "Full-face laser rejuvenation to refresh dull, sun-damaged skin, stimulate collagen, and restore a youthful, healthy radiance.",
    bullets: ["Collagen stimulation", "Sun damage repair", "Improved luminosity", "Minimal downtime options"],
    image: IMAGES.laserRejuvenation,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "scar-reduction",
    tag: "SCARS",
    title: "Scar Reduction",
    description:
      "Laser therapy for acne scars, surgical scars, and stretch marks — smoothing texture and reducing the visibility of scar tissue over time.",
    bullets: ["Acne scar improvement", "Surgical scar revision", "Stretch mark fading", "Multiple session protocol"],
    image: IMAGES.laserScar,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "hair-removal",
    tag: "HAIR REMOVAL",
    description:
      "Medical-grade laser hair removal for long-term reduction of unwanted hair on face and body — safe for a range of skin types.",
    title: "Laser Hair Removal",
    bullets: ["Face & body areas", "Long-term hair reduction", "Medical-grade device", "Patch test included"],
    image: IMAGES.laserHair,
    cta: { label: "Book Laser Session", path: "/book" },
  },
];
