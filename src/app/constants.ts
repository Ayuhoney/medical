import newHeroImg from "../assest/c7892ed3-3f57-4be1-979e-87d646dc6423.jpeg";

// ─── Image URLs (Unsplash) ────────────────────────────────────────────────────
const U = "https://images.unsplash.com/photo-";
const q = "?fit=crop&auto=format";

export const IMAGES = {
  // Hero / feature
  heroMain: `${U}1767439566981-bd8949a5b574${q}&w=1800&h=1000`,
  heroPortrait: newHeroImg,
  heroWoman: `${U}1674932668403-33398b81c92f${q}&w=900&h=1100`,
  heroWomanWarm: `${U}1771919005587-d49d985daa0b${q}&w=1200&h=800`,
  // Service pages
  heroAesthetic: `${U}1570172619644-dfd03ed5d881${q}&w=1600&h=800`,
  heroSkinCancer: `${U}1676312754401-d97fe43c2c4b${q}&w=1600&h=800`,
  heroGP: `${U}1631217868264-e5b90bb7e133${q}&w=1600&h=800`,
  heroLaser: `${U}1700760933574-9f0f4ea9aa3b${q}&w=1600&h=800`,
  // Cards
  cardGP: `${U}1638202993928-7267aad84c31${q}&w=700&h=520`,
  cardSkin: `${U}1676312754401-d97fe43c2c4b${q}&w=700&h=520`,
  cardAesthetic: `${U}1746708810803-722593e53772${q}&w=700&h=520`,
  cardLaser: `${U}1700760933941-3a06a28fbf47${q}&w=700&h=520`,
  // About / clinic
  clinicInterior: `${U}1758448721162-0c77cf477d6f${q}&w=900&h=680`,
  clinicLobby: `${U}1758448721205-8465cebc26af${q}&w=900&h=680`,
  // Aesthetic / treatments
  aestheticFace: `${U}1761718210089-ba3bb5ccb54f${q}&w=700&h=500`,
  aestheticMask: `${U}1616394584738-fc6e612e71b9${q}&w=700&h=500`,
  facialTreat: `${U}1731514771613-991a02407132${q}&w=700&h=500`,
  // Doctor
  doctorFemale: `${U}1638202993928-7267aad84c31${q}&w=600&h=750`,
  // Store
  productSerums: `${U}1767256046031-743d33937c4e${q}&w=500&h=500`,
  productBasket: `${U}1780770738499-5ade63b1f6c3${q}&w=500&h=500`,
  productBottle: `${U}1722933375700-e297a7996265${q}&w=500&h=500`,
  productPerfume: `${U}1600634999623-864991678406${q}&w=500&h=500`,
  // Laser
  laserDevice: `${U}1713085085470-fba013d67e65${q}&w=700&h=500`,
  skinCheck: `${U}1676312754401-d97fe43c2c4b${q}&w=700&h=500`,
};

// ─── Clinic Info ──────────────────────────────────────────────────────────────
export const CLINIC = {
  name: "Beach Road Surgery & Skin Clinic",
  address: "116 Beach Road, Batemans Bay NSW 2536",
  phone: "02 4408 0777",
  email: "reception@beachroadsurgery.com.au",
  hours: "Monday – Friday: 9:00 AM – 4:30 PM",
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "Practice Info",
    path: "/practice-info",
    mega: {
      cols: [
        {
          heading: "About", links: [
            { label: "About Us", path: "/practice-info" },
            { label: "Meet Our Doctors", path: "/practice-info#doctors" },
            { label: "Our Team", path: "/practice-info#team" },
            { label: "Accreditations", path: "/practice-info#accreditations" },
          ]
        },
        {
          heading: "Policies", links: [
            { label: "Fee & Payment Policy", path: "/practice-info#fees" },
            { label: "Prescriptions", path: "/practice-info#prescriptions" },
            { label: "Specialist Referrals", path: "/practice-info#referrals" },
            { label: "Privacy Policy", path: "/practice-info#privacy" },
          ]
        },
      ],
      featured: { image: "clinicInterior", heading: "Our Practice", sub: "20+ years serving Batemans Bay", cta: { label: "Meet the Team", path: "/practice-info" } },
    },
  },
  {
    label: "General Practice",
    path: "/general-practice",
    mega: {
      cols: [
        {
          heading: "Services", links: [
            { label: "Preventive Healthcare", path: "/general-practice" },
            { label: "Family Medicine", path: "/general-practice" },
            { label: "Chronic Disease Management", path: "/general-practice" },
            { label: "Mental Health Care", path: "/general-practice" },
            { label: "Health Assessments", path: "/general-practice" },
            { label: "Immunisations", path: "/general-practice" },
          ]
        },
      ],
      featured: { image: "heroGP", heading: "Family Medicine", sub: "Comprehensive care for all ages", cta: { label: "Book GP Visit", path: "/book" } },
    },
  },
  {
    label: "Skin Cancer",
    path: "/skin-cancer",
    mega: {
      cols: [
        {
          heading: "Detection", links: [
            { label: "Full Body Skin Check", path: "/skin-cancer" },
            { label: "Mole Monitoring", path: "/skin-cancer" },
            { label: "MoleMax HD Photography", path: "/skin-cancer" },
            { label: "Dermoscopy", path: "/skin-cancer" },
          ]
        },
        {
          heading: "Treatment", links: [
            { label: "Skin Cancer Treatments", path: "/skin-cancer" },
            { label: "Minor Surgical Procedures", path: "/skin-cancer" },
            { label: "Photodynamic Therapy", path: "/skin-cancer" },
            { label: "Post-Treatment Care", path: "/skin-cancer" },
          ]
        },
      ],
      featured: { image: "heroSkinCancer", heading: "Skin Cancer Clinic", sub: "Early detection saves lives", cta: { label: "Book Skin Check", path: "/book" } },
    },
  },
  {
    label: "Aesthetic Medicine",
    path: "/aesthetic",
    mega: {
      cols: [
        {
          heading: "Injectables & Energy", links: [
            { label: "Cosmetic Injectables", path: "/aesthetic" },
            { label: "Fractional RF / Microneedling", path: "/aesthetic" },
            { label: "HIFU Therapy", path: "/aesthetic" },
            { label: "LED Phototherapy", path: "/aesthetic" },
          ]
        },
        {
          heading: "Skin Treatments", links: [
            { label: "Non-Surgical Face Lifts", path: "/aesthetic" },
            { label: "Collagen Induction Therapy", path: "/aesthetic" },
            { label: "Fibroblast Plasma", path: "/aesthetic" },
            { label: "HydroMicrodermabrasion", path: "/aesthetic" },
          ]
        },
      ],
      featured: { image: "heroAesthetic", heading: "Aesthetic Medicine", sub: "Medical-grade skin treatments", cta: { label: "Book Consultation", path: "/book" } },
    },
  },
  {
    label: "Laser",
    path: "/laser",
    mega: {
      cols: [
        {
          heading: "Laser Treatments", links: [
            { label: "Laser Skin Resurfacing", path: "/laser" },
            { label: "Pigmentation Treatment", path: "/laser" },
            { label: "Vascular Lesions", path: "/laser" },
            { label: "Skin Rejuvenation", path: "/laser" },
            { label: "Scar Reduction", path: "/laser" },
            { label: "Hair Removal", path: "/laser" },
          ]
        },
      ],
      featured: { image: "heroLaser", heading: "Laser Technology", sub: "State-of-the-art laser treatments", cta: { label: "Book Session", path: "/book" } },
    },
  },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];
