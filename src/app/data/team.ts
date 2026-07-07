import { IMAGES } from "@/app/constants";

// Real doctor & team data sourced from beachroadsurgery.com.au

export type Doctor = {
  name: string;
  role: string;
  qualifications: string;
  registration?: string;
  bio: string;
  image: string;
  specialties: string[];
  education: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials?: string[];
};

export const doctors: Doctor[] = [
  {
    name: "Dr Thilan Walgamage",
    role: "Specialist General Practitioner",
    qualifications: "MBBS, MD, DCH, MRCS(I), Dip SCS, AFHEA, FRACGP",
    registration: "AHPRA reg. MED0001962340",
    bio: "Dr Walgamage has gained his expertise in the advanced treatment of skin cancers through extensive training and more than a decade in General, Plastic and Cardiothoracic Surgery. His areas of expertise are skin cancer checks and specialised surgical treatment including advanced skin flaps, skin grafts and reconstructive surgeries of the nose, ears and eyelids. He also performs advanced cosmetic procedures and injectables, and is a lecturer at the Australian National University and a medical educator and supervisor for GP Registrars.",
    image: IMAGES.teamDrThilan,
    specialties: ["Skin Cancer Checks", "Skin Cancer Surgery", "Reconstructive Surgery", "Aesthetic Medicine", "Cosmetic Injectables"],
    education: [
      "Fellow of The Royal Australian College of General Practitioners",
      "Diploma of Skin Cancer Surgery",
      "Advanced Certificate of Skin Cancer Surgery",
      "Professional Certificate for Skin Cancer Surgery",
      "Professional Certificate of Skin Cancer Medicine",
      "Certificate of Dermoscopy (Skin Cancer College)",
      "Professional Certificate of Dermoscopy (Healthcert)",
      "Professional Certificate of Aesthetic Medicine",
      "Associate Fellowship of the Higher Education Academy",
      "Diploma of Child Health",
      "Diploma of Family Medicine",
      "Bachelor of Medicine and Bachelor of Surgery",
    ],
  },
  {
    name: "Dr Kishani Weerasena",
    role: "General Practitioner",
    qualifications: "MBBS, MSc., Dip. Child Health, FRACGP",
    registration: "AHPRA reg. MED0001991932",
    bio: "Dr Weerasena brings more than 20 years of clinical experience to our practice, providing holistic, comprehensive and compassionate care. She has advanced qualifications and a special interest in women's health — including reproductive and sexual health — and infant and child health. She has a particular passion for caring for the elderly and extensive experience in managing chronic diseases, and is a medical educator and supervisor for general practice registrars.",
    image: IMAGES.teamDrKishani,
    specialties: ["Women's Health", "Infant & Child Health", "Chronic Disease Management", "Elderly Care", "Family Planning"],
    education: [
      "Fellow of The Royal Australian College of General Practitioners (FRACGP)",
      "Diploma of Child Health (Uni. of Sydney)",
      "FPAA — Reproductive and Sexual Health (NSW)",
      "Professional Certificate of Skin Cancer Medicine",
      "Advanced Certificate of Skin Cancer Medicine",
      "MSc Medical Toxicology",
      "Bachelor of Medicine and Bachelor of Surgery",
    ],
  },
  {
    name: "Dr Heshan Dharmaratna",
    role: "General Practitioner",
    qualifications: "MBBS",
    bio: "Dr Dharmaratna graduated in 2002 and brings more than 20 years of clinical experience across General Practice, Emergency Medicine, Ophthalmology and ENT, having worked in Canberra, Sydney and Fairfield Hospital. He is passionate about primary and preventative health care and supporting people with chronic medical conditions. He also works at Batemans Bay and Moruya Emergency Departments, keeping his emergency skills up to date while helping local hospitals and the community.",
    image: IMAGES.teamDrHeshan,
    specialties: ["Mental Health", "Men's Health", "Chronic Disease", "Geriatric Medicine", "Urgent & Emergency Medicine", "Eye & ENT"],
    education: [
      "MBBS — Bachelor of Medicine, Bachelor of Surgery",
      "Mental Health Skills Training",
      "ALS 1 & 2 Advanced Life Support",
      "Work cover & Pre-Employment Medicals",
      "Nursing Home and Aged Care Medical Services",
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Jess Lavis",
    role: "Office Manager",
    bio: "Jess oversees daily clinic operations and ensures every patient receives a warm, efficient experience from arrival to departure.",
    image: IMAGES.teamJess,
  },
  {
    name: "Larissa Noake",
    role: "Aesthetic Nurse — RN",
    bio: "Larissa is a Registered Nurse, Certified Melanographer and Dermal Therapist. She is certified in Medical Grade LASER and injectable treatments, and performs eyebrow microblading.",
    image: IMAGES.teamLarissa,
    credentials: ["Certified Melanographer", "Dermal Therapist", "Medical Grade LASER certified", "Injectable treatment certified"],
  },
  {
    name: "Crystal Aitken",
    role: "Enrolled Nurse",
    bio: "Crystal supports our doctors with procedures, wound care, immunisations and patient education across all clinical areas.",
    image: IMAGES.teamCrystal,
  },
  {
    name: "Jo-Ann Davis",
    role: "Medical Receptionist",
    bio: "Jo-Ann is your first point of contact — coordinating appointments, managing referrals, and helping patients navigate our services.",
    image: IMAGES.teamJo,
  },
];

// Practice vision & values — from beachroadsurgery.com.au/practice-vision-and-values
export const VISION =
  "Achieving exceptional health outcomes through prevention, early detection, treatments and education by providing a responsive healing environment.";

export const MISSION =
  "Our mission is to provide personalised care to our patients via prevention, early detection and treatment to improve health and wellbeing. We are passionate and committed to patient education and saving lives from skin cancers. We provide skincare backed by science.";

export const VALUES = [
  { name: "Compassionate Care", desc: "Serve humanity in the sphere of health, by providing excellent health care to our local community with the spirit of compassion." },
  { name: "Loving Kindness", desc: "We believe in providing the best physical and mental health with loving kindness." },
  { name: "Empowering Medical Staff", desc: "Committed to passing knowledge and skills to the future generation — fostering learning and growth of GP registrars, medical students, nurses and support staff." },
  { name: "Respect", desc: "Respect is mutual. We honour the individuality and dignity of patients and employees, their diverse experiences, knowledge, values and beliefs." },
  { name: "Giving Back", desc: "Each patient treated at Beach Road Surgery supports a needy patient in a developing country through our partnership with Mutual Assistance Society Sydney." },
  { name: "Sustainability", desc: "We believe in sustainable healthcare for the local community and strive to exceed industry expectations." },
];
