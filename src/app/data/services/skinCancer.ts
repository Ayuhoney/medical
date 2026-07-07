import { IMAGES } from "@/app/constants";
import type { ServiceDetailItem } from "@/app/components/ServiceDetailSection";

// Content sourced from beachroadsurgery.com.au skin cancer pages

export const skinCancerServices: ServiceDetailItem[] = [
  {
    id: "full-body-skin-check",
    tag: "DETECTION",
    title: "Full Body Skin Check",
    description:
      "Many skin cancers go unnoticed by the patient — a full-body skin check is a comprehensive head-to-toe assessment taking 15–30 minutes. Avoid nail polish, make-up or fake tan on the day, as these can disguise spots and make them harder to find.",
    bullets: ["Complete head-to-toe examination", "Dermatoscope examination — painless", "Cryotherapy of sunspots on the day", "Simple shave biopsies where needed"],
    image: IMAGES.skinFullBody,
    cta: { label: "Book Skin Check", path: "/book" },
  },
  {
    id: "mole-monitoring",
    tag: "MONITORING",
    title: "Mole Monitoring",
    description:
      "Melanoma changes its appearance — early changes can only be detected by comparing images taken 3 to 6 months apart. Research shows 99% of lesions that do not change over three months are benign, while 96% of melanomas show subtle changes within 3 months.",
    bullets: ["Serial imaging 3–6 months apart", "Digital change detection", "Reduces unnecessary biopsies", "Personalised recall schedule"],
    image: IMAGES.skinMoleMonitor,
    cta: { label: "Book Skin Check", path: "/book" },
  },
  {
    id: "molemax-hd",
    tag: "TECHNOLOGY",
    title: "MoleMax HD & Total Body Photography",
    description:
      "The MoleMax HD PRO high-definition mole mapping system magnifies dermoscopic images up to 100 times and stores them for comparison at successive check-ups. Total Body Photography creates a complete photographic record — ideal if you have 50+ moles, a personal or family history of melanoma, or are developing new moles.",
    bullets: ["Dermoscopic magnification up to 100×", "Full body baseline imaging — $350", "Side-by-side comparison at follow-ups", "Early detection when most treatable"],
    image: IMAGES.skinMolemax,
    cta: { label: "Book Skin Check", path: "/book" },
  },
  {
    id: "dermoscopy",
    tag: "DIAGNOSIS",
    title: "Dermoscopy",
    description:
      "A dermatoscope is a special skin microscope that allows the doctor to look deep into your skin, beyond its surface layers. The procedure is completely painless and greatly improves diagnostic accuracy for suspicious lesions.",
    bullets: ["Non-invasive & painless", "Views internal mole structure", "Reduces unnecessary biopsies", "Certified dermoscopy-trained doctors"],
    image: IMAGES.skinDermoscopy,
    cta: { label: "Book Skin Check", path: "/book" },
  },
  {
    id: "skin-cancer-treatment",
    tag: "TREATMENT",
    title: "Skin Cancer Treatments",
    description:
      "Surgery is the most common treatment for skin cancer, usually performed under local anaesthetic in our purpose-built rooms. Dr Walgamage is highly skilled in all cutaneous surgeries — including complex flap repairs, skin grafts and reconstructive surgeries of the nose, ears, lips and eyelids.",
    bullets: ["Simple & complex skin surgeries", "Flap repairs & skin grafts", "Curettage, cryotherapy & topical therapy", "Individualised treatment decisions"],
    image: IMAGES.skinTreatment,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "minor-surgery",
    tag: "PROCEDURES",
    title: "Minor Surgical Procedures",
    description:
      "A range of procedures performed in our treatment room with nurse assistance — from suturing and mole removal to Implanon insertion, joint injections, and lumps and cyst removal.",
    bullets: ["Mole removal & skin biopsies", "Implanon insertion & removal", "Joint injections & cryotherapy", "Ingrown toenails, lumps & cysts"],
    image: IMAGES.skinSurgery,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "photodynamic-therapy",
    tag: "NON-SURGICAL",
    title: "Photodynamic Therapy (PDT)",
    description:
      "PDT combines a medication (ALA/Levulan) with special blue light to target superficial skin cancers and actinic (solar) keratoses — especially over large areas like the full face, scalp and chest. Approximately 80% of actinic keratoses clear with one episode of PDT.",
    bullets: ["~80% clearance for solar keratoses", "Ideal for face, scalp & chest", "Face & scalp treatment — $375", "Less downtime than other field treatments"],
    image: IMAGES.skinPDT,
    cta: { label: "Book Consultation", path: "/book" },
  },
  {
    id: "post-treatment-care",
    tag: "AFTERCARE",
    title: "Post-Treatment Care",
    description:
      "Dedicated follow-up after skin cancer treatment — wound management, scar monitoring, and ongoing surveillance. Skin cancers on the scalp and nose need particular care, with recurrences typically occurring within the first two years after surgery.",
    bullets: ["Wound review appointments", "Scar management advice", "Slip, Slop, Slap, Seek, Slide education", "Ongoing skin surveillance"],
    image: IMAGES.skinAftercare,
    cta: { label: "Book Follow-Up", path: "/book" },
  },
];
