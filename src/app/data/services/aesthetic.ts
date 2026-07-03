import { IMAGES } from "../../constants";
import type { ServiceDetailItem } from "../../components/ServiceDetailSection";

export const aestheticServices: ServiceDetailItem[] = [
  {
    id: "cosmetic-injectables",
    tag: "INJECTABLES",
    title: "Cosmetic Injectables",
    description:
      "Anti-wrinkle injections and dermal fillers administered by our AHPRA-registered aesthetic physician for natural, refreshed results.",
    bullets: ["Anti-wrinkle treatments", "Dermal fillers", "Lip & cheek enhancement", "Medical consultation required"],
    image: IMAGES.aestheticInjectables,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "fractional-rf",
    tag: "RF MICRONEEDLING",
    title: "Fractional RF / Microneedling",
    description:
      "Radiofrequency microneedling for skin tightening, collagen stimulation, and improvement of texture, pores, acne scars, and fine lines.",
    bullets: ["Collagen induction", "Pore & texture refinement", "Minimal downtime", "Series treatments recommended"],
    image: IMAGES.aestheticRF,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "hifu",
    tag: "ULTRASOUND",
    title: "HIFU Therapy",
    description:
      "High-Intensity Focused Ultrasound for non-surgical lifting and tightening — targeting deep tissue layers without damaging the skin surface.",
    bullets: ["Non-surgical face lift", "Jawline definition", "Brow & neck tightening", "Gradual collagen remodelling"],
    image: IMAGES.aestheticHIFU,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "led-phototherapy",
    tag: "LED LIGHT",
    title: "LED Phototherapy",
    description:
      "Medical-grade LED light therapy for acne, inflammation, rosacea, and overall skin rejuvenation — relaxing with no downtime.",
    bullets: ["Blue light for acne", "Red light for anti-ageing", "Calms inflammation", "Suitable for sensitive skin"],
    image: IMAGES.aestheticMask,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "non-surgical-facelift",
    tag: "LIFTING",
    title: "Non-Surgical Face Lifts",
    description:
      "Combination aesthetic protocols to lift, contour, and rejuvenate the face without surgery — customised to your anatomy and goals.",
    bullets: ["Multi-modality plans", "Jawline & mid-face focus", "Natural-looking outcomes", "Progressive results"],
    image: IMAGES.aestheticFacelift,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "collagen-induction",
    tag: "MICRONEEDLING",
    title: "Collagen Induction Therapy",
    description:
      "Medical microneedling to stimulate collagen and elastin — improving fine lines, acne scars, stretch marks, and overall skin quality.",
    bullets: ["Medical-grade depth control", "Improves scar appearance", "Enhances product absorption", "Series of 3–6 sessions"],
    image: IMAGES.aestheticCollagen,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "fibroblast-plasma",
    tag: "PLASMA",
    title: "Fibroblast Plasma",
    description:
      "Advanced plasma fibroblast treatment for skin tightening, wrinkle reduction, and lifting of hooded eyelids and other delicate areas.",
    bullets: ["Eyelid tightening", "Wrinkle softening", "Skin resurfacing", "Consultation essential"],
    image: IMAGES.aestheticPlasma,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "hydro-microdermabrasion",
    tag: "HYDRATION",
    title: "HydroMicrodermabrasion",
    description:
      "Deep cleansing, exfoliation, and serum infusion in one treatment — revealing instantly brighter, hydrated, and smoother skin.",
    bullets: ["Deep pore cleansing", "Hydrating serum infusion", "No downtime", "Ideal pre-event glow"],
    image: IMAGES.aestheticHydro,
    cta: { label: "Book Consultation", path: "/book" },
  },
];
