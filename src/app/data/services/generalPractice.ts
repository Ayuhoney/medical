import { IMAGES } from "@/app/constants";
import type { ServiceDetailItem } from "@/app/components/ServiceDetailSection";

export const generalPracticeServices: ServiceDetailItem[] = [
  {
    id: "preventive-healthcare",
    tag: "PREVENTION",
    title: "Preventive Healthcare",
    description:
      "Stay ahead of illness with proactive screenings, lifestyle counselling, and evidence-based preventive care tailored to your age and risk profile.",
    bullets: ["Health screenings & cancer checks", "Lifestyle & nutrition advice", "Travel health planning", "Vaccination reviews"],
    image: IMAGES.gpPreventive,
  },
  {
    id: "family-medicine",
    tag: "FAMILY CARE",
    title: "Family Medicine",
    description:
      "Continuity of care for every generation — from childhood immunisations to elderly health management, all under one trusted family practice.",
    bullets: ["Paediatric & adolescent care", "Women's & men's health", "Care for chronic conditions", "Same GP, ongoing relationship"],
    image: IMAGES.gpFamily,
  },
  {
    id: "chronic-disease",
    tag: "ONGOING CARE",
    title: "Chronic Disease Management",
    description:
      "Structured GP Management Plans and Team Care Arrangements for diabetes, hypertension, asthma, heart disease, and other long-term conditions.",
    bullets: ["Personalised care plans", "Regular monitoring & reviews", "Allied health coordination", "Medication optimisation"],
    image: IMAGES.gpChronic,
  },
  {
    id: "mental-health",
    tag: "WELLBEING",
    title: "Mental Health Care",
    description:
      "Compassionate GP support for anxiety, depression, stress, and other mental health concerns — including Mental Health Care Plans and referrals.",
    bullets: ["Mental Health Care Plans", "Counselling & referral pathways", "Medication management", "Confidential, supportive environment"],
    image: IMAGES.gpMentalHealth,
  },
  {
    id: "health-assessments",
    tag: "ASSESSMENTS",
    title: "Health Assessments",
    description:
      "Comprehensive 45–75 minute health assessments for patients aged 45–49, 75+, and Aboriginal & Torres Strait Islander patients — often bulk billed.",
    bullets: ["45–49 year health check", "Over 75 health assessment", "Aboriginal health assessment", "Preventive screening bundle"],
    image: IMAGES.gpAssessment,
  },
  {
    id: "immunisations",
    tag: "VACCINATION",
    title: "Immunisations",
    description:
      "Complete vaccination services for children, adults, and travellers — including influenza, COVID-19 boosters, and childhood schedule vaccines.",
    bullets: ["Childhood immunisation schedule", "Flu & COVID-19 vaccines", "Travel vaccinations", "Workplace & school vaccines"],
    image: IMAGES.gpImmunisation,
  },
];
