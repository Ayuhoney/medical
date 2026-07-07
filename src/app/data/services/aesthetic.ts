import { IMAGES } from "@/app/constants";
import type { ServiceDetailItem } from "@/app/components/ServiceDetailSection";

// Content sourced from beachroadsurgery.com.au aesthetic pages

export const aestheticServices: ServiceDetailItem[] = [
  {
    id: "cosmetic-injectables",
    tag: "INJECTABLES",
    title: "Cosmetic Injectables",
    description:
      "Anti-wrinkle injectables and dermal fillers to soften expression wrinkles, forehead creases, crow's feet and frown lines. Full effect appears within 3–7 days and lasts around 4–6 months. A consultation with our experienced cosmetic clinician is always required first.",
    bullets: ["Anti-wrinkle injections — from $250", "Dermal fillers — from $700/ml", "Under-eye & smile line treatment", "Double chin fat dissolving (Belkyra®)"],
    image: IMAGES.aestheticInjectables,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "fractional-rf",
    tag: "RF MICRONEEDLING",
    title: "Fractional RF / Microneedling RF",
    description:
      "TGA-approved medical grade device combining microneedling with radiofrequency for skin resurfacing, acne scars, fine lines, large pores and skin tightening. Gold-coated microneedles reduce irritation, and it's safe on all skin types with little risk of hyperpigmentation.",
    bullets: ["From $450 per session", "6 treatments, 4–6 weeks apart recommended", "30–45 minute treatment", "Downtime only 3–5 days"],
    image: IMAGES.aestheticRF,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "hifu",
    tag: "ULTRASOUND",
    title: "HIFU Therapy",
    description:
      "High-Intensity Focused Ultrasound — a noninvasive, painless alternative to face lifts that uses ultrasound energy to boost collagen. It penetrates deeper and lasts longer than fractional laser or radio-frequency technology, with no damage to the skin's upper layers.",
    bullets: ["From $200 per session", "Neck, jawline, brows & décolletage", "Tightens abdomen, arms & thighs", "30–45 minute treatment"],
    image: IMAGES.aestheticHIFU,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "led-phototherapy",
    tag: "LED LIGHT",
    title: "LED Phototherapy",
    description:
      "Low-level light therapy (LLLT) with the Lumina LED energises, corrects and restores healthy skin function. Effective for acne, rosacea, psoriasis, keloid scars, wound healing and pain relief — and speeds up healing after surgical or aesthetic treatments.",
    bullets: ["From $99 per session", "Free session with every 5 pre-booked", "10 pre-booked sessions — $500", "Collagen boosting & acne clearing"],
    image: IMAGES.aestheticMask,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "non-surgical-facelift",
    tag: "THREAD LIFTING",
    title: "Non-Surgical Face Lifts",
    description:
      "MINT PDO thread lifting — a minimally invasive, quick alternative to a surgical facelift. Threads reposition and tighten sagging tissue while stimulating collagen. Threads dissolve and are completely absorbed by the body in around 6–9 months.",
    bullets: ["MINT PDO & mono threads", "Jawline, cheeks, brow & neck", "No incisions or scarring", "Under 45 minute procedure"],
    image: IMAGES.aestheticFacelift,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "collagen-induction",
    tag: "MICRONEEDLING",
    title: "Collagen Induction Therapy",
    description:
      "Skin needling with the Astrapen microneedling pen creates controlled micro-injuries that boost collagen and elastin production — improving acne scarring, stretch marks, fine lines and pigmentation. Priming skin with Vitamin A, B and C serums 2–4 weeks prior gives best results.",
    bullets: ["From $299 per session", "3–4 treatments, 4–8 weeks apart", "Face, neck, décolleté & stretch marks", "Topical anaesthetic for comfort"],
    image: IMAGES.aestheticCollagen,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "fibroblast-plasma",
    tag: "PLASMA",
    title: "Fibroblast Plasma",
    description:
      "Plasma Pen soft-surgery targeting loss of elasticity, sagging and wrinkles — including non-surgical blepharoplasty for eyelids, skin tag removal and stretch marks. Most patients need only one treatment, with results lasting 2–4 years.",
    bullets: ["From $200 per session", "Eyelid tightening (non-surgical blepharoplasty)", "No scalpel, stitches or scars", "Results improve over 3–4 weeks"],
    image: IMAGES.aestheticPlasma,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "hydro-microdermabrasion",
    tag: "HYDRA FACIAL",
    title: "HydroMicrodermabrasion",
    description:
      "The Hydra-Plus 8-in-1 advanced hydra facial device combines hydrodermabrasion, microdermabrasion, micro-current, bipolar radio-frequency, nano spray and ultrasound energy — actively infusing products into the skin while exfoliating for smoother, even-toned skin.",
    bullets: ["From $200 per session", "Clears blackheads & whiteheads", "Deep hydration & oxygen facial", "Boosts collagen production"],
    image: IMAGES.aestheticHydro,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "skin-analysis",
    tag: "SKIN ANALYSIS",
    title: "Skin Analysis with Scan-X",
    description:
      "Before treating your skin, an in-depth examination is the essential first step. Scan-X detects and analyses 15 major skin conditions and can even predict how your skin may look in the next 5–7 years — so we can give you the best possible advice and treatment options.",
    bullets: ["$50 per session", "Complimentary with skin consult", "Detects 15 major skin conditions", "5–7 year skin projection"],
    image: IMAGES.facialTreat,
    cta: { label: "Book Consultation", path: "/book" },
  },
];
