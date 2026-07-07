import { IMAGES } from "@/app/constants";
import type { ServiceDetailItem } from "@/app/components/ServiceDetailSection";

// Content sourced from beachroadsurgery.com.au — Alma Harmony XL PRO Special Edition
// Class IV Medical Grade LASER with over 72 FDA-cleared indications

export const laserServices: ServiceDetailItem[] = [
  {
    id: "laser-resurfacing",
    tag: "iPIXEL",
    title: "Laser Skin Resurfacing — iPixel",
    description:
      "The iPixel (Er:YAG 2940nm) is ablative resurfacing technology that improves the overall texture, tone and elasticity of the skin. Indicated for acne scars, stretch marks, skin resurfacing, and benign moles and lesions.",
    bullets: ["$450 per area", "2–4 sessions recommended", "Social downtime 5–7 days", "Maximum results 6 weeks after protocol"],
    image: IMAGES.laserResurfacing,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "pigmentation",
    tag: "DYE VL",
    title: "Pigmentation Treatment",
    description:
      "The DYE VL handpiece (600–900nm) with In-Motion technology targets both melanin and haemoglobin — much more powerful than IPL for epidermal pigmentation. Large areas can be treated quickly with virtually no pain and usually no downtime.",
    bullets: ["$450 per area", "2–6 sessions typically needed", "Results visible ~1 week post treatment", "Sun spots, age spots & melasma"],
    image: IMAGES.laserPigmentation,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "vascular-lesions",
    tag: "VASCULAR",
    title: "Vascular Lesions, Rosacea & Acne",
    description:
      "DYE VL and ND:YAG Long Pulse lasers treat facial redness, vascular lesions, rosacea and acne. For Medicare-eligible rosacea/acne patients we heavily discount the fee — $400 upfront with a Medicare rebate of $141.95, leaving you only $258 out of pocket.",
    bullets: ["Dual-laser rosacea treatment", "Medicare rebate for eligible patients", "Broken capillaries & redness", "In-Motion comfort technology"],
    image: IMAGES.laserVascular,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "clearlift",
    tag: "CLEARLIFT",
    title: "ClearLift Laser Face Lift",
    description:
      "The award-winning ClearLift (Q-Switched 1064/532nm) is heralded as a nonsurgical 'lunchtime facelift'. It promotes collagen remodelling for fine lines, wrinkles and skin laxity — creating microscopic dermal injuries without damaging the outer epidermis, so there's usually no downtime.",
    bullets: ["$500 per area", "3–6 sessions recommended", "Painless, true lunchtime procedure", "Packages: 4 sessions $1700, 6 for $2300"],
    image: IMAGES.laserRejuvenation,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "scar-reduction",
    tag: "SCARS & TATTOOS",
    title: "Scar Reduction & Tattoo Removal",
    description:
      "Laser therapy for acne scars, surgical scars and stretch marks — plus Q-switched tattoo removal. Tattoo removal pricing depends on size, body area, colour and ink type; 10% off when you pre-pay 5+ sessions.",
    bullets: ["Scar removal from $150 (size dependent)", "Small tattoos $150–$200", "Medium to large $200–$500", "Extra large $550–$1000"],
    image: IMAGES.laserScar,
    cta: { label: "Book Laser Session", path: "/book" },
  },
  {
    id: "hair-removal",
    tag: "HAIR REMOVAL",
    title: "Laser Hair Removal — Speed AFT",
    description:
      "Alma's Super Hair Remover (SHR, AFT 700–950nm) gradually heats the dermis to damage hair follicles and prevent re-growth while avoiding injury to surrounding tissue. In-Motion delivery with contact cooling makes treatment safe, quick and virtually painless for all skin types.",
    bullets: ["Face $90 · Under arms $70", "Full arms $190 · Full legs $220", "Chest or full back $170–$220", "10% off pre-paid 5+ sessions"],
    image: IMAGES.laserHair,
    cta: { label: "Book Laser Session", path: "/book" },
  },
];
