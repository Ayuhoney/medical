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
  cardLaser: `${U}1700760933941-3a06a28fbf47${q}&w=800&h=1100`,
  cardSkinCare: `${U}1767256046031-743d33937c4e${q}&w=800&h=1100`,
  cardSkinPortrait: `${U}1674932668403-33398b81c92f${q}&w=800&h=1100`,
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
  // General Practice — service detail sections
  gpPreventive: `${U}1576091160399-04c2edc265d1c69a732c163f2a314306${q}&w=900&h=680`,
  gpFamily: `${U}1519494189937-5c78c1d5c177${q}&w=900&h=680`,
  gpChronic: `${U}1579683736860-4fe7b407c564${q}&w=900&h=680`,
  gpMentalHealth: `${U}1505750573807-89e55ac79367${q}&w=900&h=680`,
  gpAssessment: `${U}1559757148-5c350d0d3c56${q}&w=900&h=680`,
  gpImmunisation: `${U}1584515930687-775938d8b803${q}&w=900&h=680`,
  // Skin Cancer — service detail sections
  skinFullBody: `${U}1612349317150-e413f6a5b16d${q}&w=900&h=680`,
  skinMoleMonitor: `${U}1556228572-0d85b1a4d571${q}&w=900&h=680`,
  skinMolemax: `${U}1576091160550-217cde24a2cc${q}&w=900&h=680`,
  skinDermoscopy: `${U}1629909613656-3e4c309fe59a${q}&w=900&h=680`,
  skinTreatment: `${U}1582750433389-44b77a0fb1c5${q}&w=900&h=680`,
  skinSurgery: `${U}1631217868264-e5b90bb7e133${q}&w=900&h=680`,
  skinPDT: `${U}1616394584738-fc6e612e71b9${q}&w=900&h=680`,
  skinAftercare: `${U}1570172619644-dfd03ed5d881${q}&w=900&h=680`,
  // Aesthetic — service detail sections
  aestheticInjectables: `${U}1515379379991-0f2027a01340${q}&w=900&h=680`,
  aestheticRF: `${U}1612349317150-e413f6a5b16d${q}&w=900&h=680`,
  aestheticHIFU: `${U}1598440947619-726608653ffa${q}&w=900&h=680`,
  aestheticFacelift: `${U}1746708810803-722593e53772${q}&w=900&h=680`,
  aestheticCollagen: `${U}1731514771613-991a02407132${q}&w=900&h=680`,
  aestheticPlasma: `${U}1761718210089-ba3bb5ccb54f${q}&w=900&h=680`,
  aestheticHydro: `${U}1570172619644-dfd03ed5d881${q}&w=900&h=680`,
  // Laser — service detail sections
  laserResurfacing: `${U}1700760933574-9f0f4ea9aa3b${q}&w=900&h=680`,
  laserPigmentation: `${U}1598440947619-726608653ffa${q}&w=900&h=680`,
  laserVascular: `${U}1616394584738-fc6e612e71b9${q}&w=900&h=680`,
  laserRejuvenation: `${U}1761718210089-ba3bb5ccb54f${q}&w=900&h=680`,
  laserScar: `${U}1731514771613-991a02407132${q}&w=900&h=680`,
  laserHair: `${U}1700760933941-3a06a28fbf47${q}&w=900&h=680`,
  // Team
  teamNurse: `${U}1559839734-2b71ea197ec2${q}&w=600&h=750`,
  teamReception: `${U}1607746889951-0ba55a93e9b4${q}&w=600&h=750`,
  teamAdmin: `${U}1573496359142-b8d87734a5a2${q}&w=600&h=750`,
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
            { label: "About Us", path: "/practice-info#about" },
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
            { label: "Preventive Healthcare", path: "/general-practice#preventive-healthcare" },
            { label: "Family Medicine", path: "/general-practice#family-medicine" },
            { label: "Chronic Disease Management", path: "/general-practice#chronic-disease" },
            { label: "Mental Health Care", path: "/general-practice#mental-health" },
            { label: "Health Assessments", path: "/general-practice#health-assessments" },
            { label: "Immunisations", path: "/general-practice#immunisations" },
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
            { label: "Full Body Skin Check", path: "/skin-cancer#full-body-skin-check" },
            { label: "Mole Monitoring", path: "/skin-cancer#mole-monitoring" },
            { label: "MoleMax HD Photography", path: "/skin-cancer#molemax-hd" },
            { label: "Dermoscopy", path: "/skin-cancer#dermoscopy" },
          ]
        },
        {
          heading: "Treatment", links: [
            { label: "Skin Cancer Treatments", path: "/skin-cancer#skin-cancer-treatment" },
            { label: "Minor Surgical Procedures", path: "/skin-cancer#minor-surgery" },
            { label: "Photodynamic Therapy", path: "/skin-cancer#photodynamic-therapy" },
            { label: "Post-Treatment Care", path: "/skin-cancer#post-treatment-care" },
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
            { label: "Cosmetic Injectables", path: "/aesthetic#cosmetic-injectables" },
            { label: "Fractional RF / Microneedling", path: "/aesthetic#fractional-rf" },
            { label: "HIFU Therapy", path: "/aesthetic#hifu" },
            { label: "LED Phototherapy", path: "/aesthetic#led-phototherapy" },
          ]
        },
        {
          heading: "Skin Treatments", links: [
            { label: "Non-Surgical Face Lifts", path: "/aesthetic#non-surgical-facelift" },
            { label: "Collagen Induction Therapy", path: "/aesthetic#collagen-induction" },
            { label: "Fibroblast Plasma", path: "/aesthetic#fibroblast-plasma" },
            { label: "HydroMicrodermabrasion", path: "/aesthetic#hydro-microdermabrasion" },
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
            { label: "Laser Skin Resurfacing", path: "/laser#laser-resurfacing" },
            { label: "Pigmentation Treatment", path: "/laser#pigmentation" },
            { label: "Vascular Lesions", path: "/laser#vascular-lesions" },
            { label: "Skin Rejuvenation", path: "/laser#skin-rejuvenation" },
            { label: "Scar Reduction", path: "/laser#scar-reduction" },
            { label: "Hair Removal", path: "/laser#hair-removal" },
          ]
        },
      ],
      featured: { image: "heroLaser", heading: "Laser Technology", sub: "State-of-the-art laser treatments", cta: { label: "Book Session", path: "/book" } },
    },
  },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];
