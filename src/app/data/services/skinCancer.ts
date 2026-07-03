import { IMAGES } from "../../constants";
import type { ServiceDetailItem } from "../../components/ServiceDetailSection";

export const skinCancerServices: ServiceDetailItem[] = [
  {
    id: "full-body-skin-check",
    tag: "DETECTION",
    title: "Full Body Skin Check",
    description:
      "A thorough head-to-toe skin examination by our trained skin cancer doctors — the gold standard for early detection in Australia's high-risk climate.",
    bullets: ["Complete lesion mapping", "Dermoscopic examination", "Digital record keeping", "Same-day concern management"],
    image: IMAGES.skinFullBody,
    cta: { label: "Book Skin Check", path: "/book" },
  },
  {
    id: "mole-monitoring",
    tag: "MONITORING",
    title: "Mole Monitoring",
    description:
      "Scheduled follow-up appointments to track changes in moles and lesions over time — catching problems early when treatment is most effective.",
    bullets: ["Serial photography comparison", "Change detection alerts", "Personalised recall schedule", "Ongoing surveillance plans"],
    image: IMAGES.skinMoleMonitor,
    cta: { label: "Book Skin Check", path: "/book" },
  },
  {
    id: "molemax-hd",
    tag: "TECHNOLOGY",
    title: "MoleMax HD Photography",
    description:
      "Total body photography using the MoleMax HD system — high-resolution imaging for precise mole mapping and long-term change tracking.",
    bullets: ["Full body baseline imaging", "HD dermoscopic capture", "AI-assisted comparison", "Comprehensive documentation"],
    image: IMAGES.skinMolemax,
    cta: { label: "Book Skin Check", path: "/book" },
  },
  {
    id: "dermoscopy",
    tag: "DIAGNOSIS",
    title: "Dermoscopy",
    description:
      "Advanced magnified skin surface microscopy allowing our doctors to examine structures beneath the skin surface for accurate lesion diagnosis.",
    bullets: ["Non-invasive examination", "Improved diagnostic accuracy", "Reduces unnecessary biopsies", "Performed in-clinic"],
    image: IMAGES.skinDermoscopy,
    cta: { label: "Book Skin Check", path: "/book" },
  },
  {
    id: "skin-cancer-treatment",
    tag: "TREATMENT",
    title: "Skin Cancer Treatments",
    description:
      "Comprehensive treatment pathways for basal cell carcinoma, squamous cell carcinoma, and melanoma — from topical therapies to surgical excision.",
    bullets: ["Surgical excision", "Cryotherapy", "Topical field therapy", "Multidisciplinary coordination"],
    image: IMAGES.skinTreatment,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "minor-surgery",
    tag: "PROCEDURES",
    title: "Minor Surgical Procedures",
    description:
      "In-clinic minor surgery for biopsy, excision of suspicious lesions, and skin cancer treatment in a sterile, comfortable environment.",
    bullets: ["Local anaesthesia", "Sterile procedure room", "Pathology coordination", "Wound care instructions"],
    image: IMAGES.skinSurgery,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "photodynamic-therapy",
    tag: "NON-SURGICAL",
    title: "Photodynamic Therapy (PDT)",
    description:
      "Light-activated treatment for superficial skin cancers, sun-damaged skin, and actinic keratoses — effective with minimal scarring.",
    bullets: ["Treats sun damage & AKs", "Non-surgical option", "Targeted light therapy", "Minimal downtime"],
    image: IMAGES.skinPDT,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "post-treatment-care",
    tag: "AFTERCARE",
    title: "Post-Treatment Care",
    description:
      "Dedicated follow-up care after skin cancer treatment — wound management, scar monitoring, and ongoing surveillance to protect your long-term skin health.",
    bullets: ["Wound review appointments", "Scar management advice", "Sun protection education", "Ongoing skin surveillance"],
    image: IMAGES.skinAftercare,
    cta: { label: "Book Follow-Up", path: "/book" },
  },
];
