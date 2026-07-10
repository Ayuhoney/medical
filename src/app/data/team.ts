import { IMAGES } from "@/app/constants";

// Fallback only — live data comes from GET /api/team

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
    bio: "Dr Walgamage has gained his expertise in the advanced treatment of skin cancers through extensive training and more than a decade in General, Plastic and Cardiothoracic Surgery.",
    image: IMAGES.teamDrThilan,
    specialties: ["Skin Cancer Checks", "Skin Cancer Surgery", "Reconstructive Surgery", "Aesthetic Medicine", "Cosmetic Injectables"],
    education: ["Fellow of The Royal Australian College of General Practitioners"],
  },
  {
    name: "Dr Kishani Weerasena",
    role: "General Practitioner",
    qualifications: "MBBS, MSc., Dip. Child Health, FRACGP",
    registration: "AHPRA reg. MED0001991932",
    bio: "Dr Weerasena brings more than 20 years of clinical experience to our practice.",
    image: IMAGES.teamDrKishani,
    specialties: ["Women's Health", "Infant & Child Health", "Chronic Disease Management"],
    education: ["Fellow of The Royal Australian College of General Practitioners (FRACGP)"],
  },
  {
    name: "Dr Heshan Dharmaratna",
    role: "General Practitioner",
    qualifications: "MBBS",
    bio: "Dr Dharmaratna graduated in 2002 and brings more than 20 years of clinical experience.",
    image: IMAGES.teamDrHeshan,
    specialties: ["Mental Health", "Men's Health", "Chronic Disease"],
    education: ["MBBS — Bachelor of Medicine, Bachelor of Surgery"],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Jess Lavis",
    role: "Office Manager",
    bio: "Jess oversees daily clinic operations.",
    image: IMAGES.teamJess,
  },
  {
    name: "Larissa Noake",
    role: "Aesthetic Nurse — RN",
    bio: "Larissa is a Registered Nurse, Certified Melanographer and Dermal Therapist.",
    image: IMAGES.teamLarissa,
    credentials: ["Certified Melanographer", "Dermal Therapist"],
  },
  {
    name: "Crystal Aitken",
    role: "Enrolled Nurse",
    bio: "Crystal supports our doctors with procedures and patient education.",
    image: IMAGES.teamCrystal,
  },
  {
    name: "Jo-Ann Davis",
    role: "Medical Receptionist",
    bio: "Jo-Ann is your first point of contact at reception.",
    image: IMAGES.teamJo,
  },
];
