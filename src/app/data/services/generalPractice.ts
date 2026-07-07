import { IMAGES } from "@/app/constants";
import type { ServiceDetailItem } from "@/app/components/ServiceDetailSection";

// Content sourced from beachroadsurgery.com.au general practice pages

export const generalPracticeServices: ServiceDetailItem[] = [
  {
    id: "childrens-health",
    tag: "CHILDREN",
    title: "Children's Health & Immunisations",
    description:
      "Good health is an important element in a child's quality of life. Our doctors treat children with acute medical problems and offer health checks and childhood vaccinations across the full immunisation schedule.",
    bullets: ["Childhood immunisation schedule", "Feeding & sleeping problems", "Childhood behavioural issues", "Childhood obesity management"],
    image: IMAGES.gpFamily,
  },
  {
    id: "womens-health",
    tag: "WOMEN'S HEALTH",
    title: "Women's Health",
    description:
      "Health requirements vary from woman to woman depending on your stage of life — puberty, pregnancy, menopause or mature age. 'Well Women's Health Checks' specific to these stages can be arranged with early interventions put in place.",
    bullets: ["Cervical screening (Pap Smear)", "Breast health & contraception", "Pregnancy care & pre-pregnancy counselling", "Menopause & osteoporosis"],
    image: IMAGES.gpPreventive,
  },
  {
    id: "mens-health",
    tag: "MEN'S HEALTH",
    title: "Men's Health",
    description:
      "Accidents, cancer and heart disease account for the majority of male deaths. Our doctors recognise prevention is vital to improve men's health outcomes, and encourage men to return for regular checkups.",
    bullets: ["Cardiovascular health", "Prostate health (BPH)", "Erectile dysfunction", "STD testing & osteoporosis"],
    image: IMAGES.gpChronic,
  },
  {
    id: "mental-health",
    tag: "WELLBEING",
    title: "Mental Health",
    description:
      "Our doctors are trained in mental health care for people of all ages. We provide GP Mental Health Care Plans for eligible patients — Medicare benefits are available for up to ten services per calendar year under the Better Access initiative.",
    bullets: ["GP Mental Health Care Plans", "Mental health assessments", "Psychologist referral pathways", "Confidential, supportive environment"],
    image: IMAGES.gpMentalHealth,
  },
  {
    id: "health-checks",
    tag: "ASSESSMENTS",
    title: "Health Checks & Care Plans",
    description:
      "Regular health checks are an important preventative health component. Free Medicare-funded health assessments are available if you're aged 45–49 or 75 and above — approximately one hour including 30 minutes with a practice nurse and 30 minutes with your GP.",
    bullets: ["Free 45–49 health check", "Over 75 annual assessment", "Diabetes & cholesterol screening", "Chronic disease care plans"],
    image: IMAGES.gpAssessment,
  },
  {
    id: "occupational-health",
    tag: "OCCUPATIONAL",
    title: "Occupational Health & Medicals",
    description:
      "Pre-employment medicals, driver licence medicals (private and commercial), and active management of work-related injuries with full Workers Compensation support and a team approach to return-to-work rehabilitation.",
    bullets: ["Pre-employment medicals", "Driver licence medicals", "Hearing, lung function & vision testing", "Workers compensation & injury care"],
    image: IMAGES.gpOccupational,
  },
  {
    id: "vaccinations",
    tag: "VACCINATION",
    title: "Flu & COVID Vaccinations",
    description:
      "Annual flu vaccination protects you and your family from the influenza virus. Government-funded flu vaccines are free for eligible patients; private flu vaccines are $30. We also provide COVID-19 vaccination information and referrals.",
    bullets: ["Private flu vaccine — $30", "Government-funded for eligible patients", "Children, pregnant women & 65+ eligible", "Travel vaccinations"],
    image: IMAGES.gpImmunisation,
  },
];
