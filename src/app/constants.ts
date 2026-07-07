import newHeroImg from "@/assest/c7892ed3-3f57-4be1-979e-87d646dc6423.jpeg";
import agpalBadge from "@/imports/AGPAL-Accredited-Email-Signature-536w.webp";
import doctorThilan from "@/imports/dr-thilan-walgamage-662w.png";
import teamDrThilan from "@/imports/team/dr-thilan-walgamage.webp";
import teamDrKishani from "@/imports/team/dr-kishani-weerasena.webp";
import teamDrHeshan from "@/imports/team/dr-heshan-dharmaratna.webp";
import teamJess from "@/imports/team/jess-lavis.webp";
import teamLarissa from "@/imports/team/larissa-noake.webp";
import teamCrystal from "@/imports/team/crystal-aitken.webp";
import teamJo from "@/imports/team/jo-ann-davis.webp";
import svcMolemax from "@/imports/services/molemax-hd.webp";
import svcSkinCheck from "@/imports/services/skin-check-dermoscopy.webp";
import svcSkinLesion from "@/imports/services/skin-cancer-lesion.webp";
import svcInjections from "@/imports/services/wrinkle-injections.webp";
import svcHifu from "@/imports/services/hifu-treatment.webp";

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
  doctorThilan,
  agpalBadge,
  // Store
  productSerums: `${U}1767256046031-743d33937c4e${q}&w=500&h=500`,
  productBasket: `${U}1780770738499-5ade63b1f6c3${q}&w=500&h=500`,
  productBottle: `${U}1722933375700-e297a7996265${q}&w=500&h=500`,
  productPerfume: `${U}1600634999623-864991678406${q}&w=500&h=500`,
  // Laser
  laserDevice: `${U}1713085085470-fba013d67e65${q}&w=700&h=500`,
  skinCheck: `${U}1676312754401-d97fe43c2c4b${q}&w=700&h=500`,
  // General Practice — service detail sections
  gpPreventive: `${U}1594824476967-48c8b964273f${q}&w=900&h=680`,
  gpFamily: `${U}1576765608535-5f04d1e3f289${q}&w=900&h=680`,
  gpChronic: `${U}1584982751601-97dcc096659c${q}&w=900&h=680`,
  gpMentalHealth: `${U}1541199249251-f713e6145474${q}&w=900&h=680`,
  gpAssessment: `${U}1559757148-5c350d0d3c56${q}&w=900&h=680`,
  gpImmunisation: `${U}1584515933487-779824d29309${q}&w=900&h=680`,
  gpOccupational: `${U}1622253692010-333f2da6031d${q}&w=900&h=680`,
  // Skin Cancer — service detail sections
  skinFullBody: `${U}1612349317150-e413f6a5b16d${q}&w=900&h=680`,
  skinMoleMonitor: svcSkinLesion,
  skinMolemax: svcMolemax,
  skinDermoscopy: svcSkinCheck,
  skinTreatment: `${U}1551601651-2a8555f1a136${q}&w=900&h=680`,
  skinSurgery: `${U}1631217868264-e5b90bb7e133${q}&w=900&h=680`,
  skinPDT: `${U}1616394584738-fc6e612e71b9${q}&w=900&h=680`,
  skinAftercare: `${U}1570172619644-dfd03ed5d881${q}&w=900&h=680`,
  // Aesthetic — service detail sections
  aestheticInjectables: svcInjections,
  aestheticRF: `${U}1612349317150-e413f6a5b16d${q}&w=900&h=680`,
  aestheticHIFU: svcHifu,
  aestheticFacelift: `${U}1746708810803-722593e53772${q}&w=900&h=680`,
  aestheticCollagen: `${U}1731514771613-991a02407132${q}&w=900&h=680`,
  aestheticPlasma: `${U}1761718210089-ba3bb5ccb54f${q}&w=900&h=680`,
  aestheticHydro: `${U}1570172619644-dfd03ed5d881${q}&w=900&h=680`,
  // Laser — service detail sections
  laserResurfacing: `${U}1700760933574-9f0f4ea9aa3b${q}&w=900&h=680`,
  laserPigmentation: `${U}1612776572997-76cc42e058c3${q}&w=900&h=680`,
  laserVascular: `${U}1616394584738-fc6e612e71b9${q}&w=900&h=680`,
  laserRejuvenation: `${U}1761718210089-ba3bb5ccb54f${q}&w=900&h=680`,
  laserScar: `${U}1731514771613-991a02407132${q}&w=900&h=680`,
  laserHair: `${U}1700760933941-3a06a28fbf47${q}&w=900&h=680`,
  // Team
  teamNurse: `${U}1559839734-2b71ea197ec2${q}&w=600&h=750`,
  teamAdmin: `${U}1573496359142-b8d87734a5a2${q}&w=600&h=750`,
  // Team — real photos (downloaded from beachroadsurgery.com.au)
  teamDrThilan,
  teamDrKishani,
  teamDrHeshan,
  teamJess,
  teamLarissa,
  teamCrystal,
  teamJo,
};

// ─── Clinic Info ──────────────────────────────────────────────────────────────
export const CLINIC = {
  name: "Beach Road Surgery & Skin Clinic",
  address: "116 Beach Road, Batemans Bay NSW 2536",
  phone: "02 4408 0777",
  fax: "02 4404 7769",
  whatsapp: "+61 466 638 666",
  email: "admin@beachroadsurgery.com.au",
  hours: "Monday – Friday: 9:00 AM – 4:30 PM · Saturday: 9:00 AM – 12:30 PM",
  hoursWeekday: "9:00 AM – 4:30 PM",
  hoursSaturday: "9:00 AM – 12:30 PM",
  bookingUrl: "https://www.hotdoc.com.au/medical-centres/batemans-bay-NSW-2536/beach-road-surgery/doctors",
  facebook: "https://www.facebook.com/Beach-Road-Surgery-Skin-Clinic-105557038525704",
  instagram: "https://www.instagram.com/beachroad.skinclinic/",
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
            { label: "Vision & Values", path: "/practice-info#values" },
            { label: "Accreditations", path: "/practice-info#accreditations" },
          ]
        },
        {
          heading: "Policies", links: [
            { label: "Fee & Payment Policy", path: "/practice-info#fees" },
            { label: "Booking & Cancellation", path: "/practice-info#booking-policy" },
            { label: "Results & Records", path: "/practice-info#results" },
            { label: "Communication Policy", path: "/practice-info#communication" },
            { label: "Zero Tolerance", path: "/practice-info#zero-tolerance" },
            { label: "Prescriptions & Referrals", path: "/practice-info#prescriptions" },
            { label: "Privacy Policy", path: "/practice-info#privacy" },
          ]
        },
      ],
      featured: { image: "clinicInterior", heading: "Our Practice", sub: "Caring for the Eurobodalla community", cta: { label: "Meet the Team", path: "/practice-info" } },
    },
  },
  {
    label: "General Practice",
    path: "/general-practice",
    mega: {
      cols: [
        {
          heading: "Services", links: [
            { label: "Children's Health & Immunisations", path: "/general-practice#childrens-health" },
            { label: "Women's Health", path: "/general-practice#womens-health" },
            { label: "Men's Health", path: "/general-practice#mens-health" },
            { label: "Mental Health", path: "/general-practice#mental-health" },
            { label: "Health Checks & Care Plans", path: "/general-practice#health-checks" },
            { label: "Occupational Health & Medicals", path: "/general-practice#occupational-health" },
            { label: "Flu & COVID Vaccinations", path: "/general-practice#vaccinations" },
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
            { label: "Skin Analysis with Scan-X", path: "/aesthetic#skin-analysis" },
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
            { label: "iPixel Skin Resurfacing", path: "/laser#laser-resurfacing" },
            { label: "Pigmentation Treatment", path: "/laser#pigmentation" },
            { label: "Vascular, Rosacea & Acne", path: "/laser#vascular-lesions" },
            { label: "ClearLift Laser Face Lift", path: "/laser#clearlift" },
            { label: "Scar & Tattoo Removal", path: "/laser#scar-reduction" },
            { label: "Laser Hair Removal", path: "/laser#hair-removal" },
          ]
        },
      ],
      featured: { image: "heroLaser", heading: "Laser Technology", sub: "State-of-the-art laser treatments", cta: { label: "Book Session", path: "/book" } },
    },
  },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];
