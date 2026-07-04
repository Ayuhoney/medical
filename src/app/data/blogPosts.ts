import { IMAGES } from "@/app/constants";

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "annual-skin-check-australia",
    category: "Skin Cancer",
    title: "Why Every Australian Should Get an Annual Skin Check",
    excerpt:
      "Australia has one of the highest rates of skin cancer in the world. Here's everything you need to know about why regular skin checks are essential, what to expect, and how MoleMax HD technology makes a difference.",
    image: IMAGES.heroSkinCancer,
    author: "Dr Heshan Dharmarama",
    date: "15 June 2024",
    readTime: "5 min read",
    featured: true,
    body: [
      "With two in three Australians diagnosed with skin cancer before age 70, annual skin checks are not optional — they are essential preventive healthcare.",
      "At Beach Road Surgery, our skin cancer doctors use dermoscopy and MoleMax HD total body photography to detect changes early, when treatment is most effective.",
      "A full body skin check typically takes 20–30 minutes. We examine every lesion, document findings, and discuss any areas of concern with you on the spot.",
      "If you have a personal or family history of melanoma, fair skin, or significant sun exposure, we may recommend more frequent monitoring.",
      "Book your skin check today — early detection truly saves lives.",
    ],
  },
  {
    slug: "anti-wrinkle-vs-fillers",
    category: "Aesthetic Medicine",
    title: "The Difference Between Anti-Wrinkle Injections and Dermal Fillers",
    excerpt:
      "Many patients are unsure about the difference between these two popular treatments. Our aesthetic physician explains how each works, what to expect, and how to choose the right treatment for your goals.",
    image: IMAGES.heroAesthetic,
    author: "Dr Kishani Weerasena",
    date: "8 June 2024",
    readTime: "4 min read",
    body: [
      "Anti-wrinkle injections relax targeted muscles to soften dynamic lines — think forehead, frown, and crow's feet. Results appear within days and last 3–4 months.",
      "Dermal fillers restore volume and contour — cheeks, lips, jawline, and under-eye hollows. Fillers use hyaluronic acid and results typically last 6–18 months depending on the product and area.",
      "The two treatments complement each other beautifully. Many patients combine both for a refreshed, natural look without surgery.",
      "A medical consultation is always required before any injectable treatment to assess your anatomy, goals, and medical history.",
    ],
  },
  {
    slug: "chronic-disease-management-plan",
    category: "General Practice",
    title: "Understanding Your Chronic Disease Management Plan",
    excerpt:
      "If you live with a chronic condition such as diabetes, asthma, or heart disease, a GP Management Plan can help you get more from your healthcare. Here's how it works and what benefits are available.",
    image: IMAGES.heroGP,
    author: "Dr Heshan Dharmarama",
    date: "1 June 2024",
    readTime: "6 min read",
    body: [
      "A GP Management Plan (GPMP) is a structured approach to managing chronic conditions. It outlines your health goals, treatment steps, and review schedule.",
      "Eligible patients may also access Team Care Arrangements (TCAs), allowing Medicare rebates for allied health services like physiotherapy, dietetics, and psychology.",
      "Plans are reviewed regularly — typically every 3–6 months — to ensure your care stays on track as your needs change.",
      "Speak to your GP at your next visit to discuss whether a management plan is right for you.",
    ],
  },
  {
    slug: "laser-vs-ipl",
    category: "Laser",
    title: "Laser vs IPL: Which Treatment is Right for Your Skin?",
    excerpt:
      "Both laser and IPL (intense pulsed light) are used for skin rejuvenation and pigmentation, but they work differently and suit different skin types. Our team breaks down the key differences.",
    image: IMAGES.heroLaser,
    author: "Dr Kishani Weerasena",
    date: "22 May 2024",
    readTime: "5 min read",
    body: [
      "Medical lasers emit a single wavelength of light, allowing precise targeting of specific chromophores — melanin in pigmentation, haemoglobin in blood vessels, or water in resurfacing treatments.",
      "IPL uses a broad spectrum of light filtered for particular applications. It is versatile but generally less precise than dedicated laser devices.",
      "For stubborn pigmentation, vascular lesions, or scar revision, laser technology often delivers superior results with fewer sessions.",
      "A skin consultation is essential to determine the safest and most effective option for your skin type and concern.",
    ],
  },
  {
    slug: "medical-grade-skincare-routine",
    category: "Skincare",
    title: "Building a Medical-Grade Skincare Routine for Australian Skin",
    excerpt:
      "The Australian sun is harsh on skin. Here's how to build a daily skincare routine using medical-grade products that will protect, repair, and maintain healthy skin all year round.",
    image: IMAGES.productSerums,
    author: "Dr Kishani Weerasena",
    date: "14 May 2024",
    readTime: "7 min read",
    body: [
      "Daily SPF 50+ is non-negotiable in Australia — even on cloudy days. UV damage is cumulative and drives premature ageing and skin cancer risk.",
      "A simple morning routine: cleanser, antioxidant serum (vitamin C), moisturiser, and broad-spectrum sunscreen.",
      "Evening: gentle cleanser, targeted treatment (retinoid or AHA/BHA as advised), and nourishing moisturiser.",
      "Visit our in-clinic store for medical-grade products selected by our doctors, or ask at your next appointment for personalised recommendations.",
    ],
  },
  {
    slug: "photodynamic-therapy-explained",
    category: "Skin Cancer",
    title: "What is Photodynamic Therapy (PDT) and Is It Right for You?",
    excerpt:
      "Photodynamic therapy is a highly effective, non-surgical treatment for certain types of skin cancer and sun-damaged skin. Learn how it works, what to expect, and who is a good candidate.",
    image: IMAGES.aestheticFace,
    author: "Dr Heshan Dharmarama",
    date: "5 May 2024",
    readTime: "5 min read",
    body: [
      "PDT uses a light-sensitive medication applied to the skin, which is then activated by a specific wavelength of light. The activated medication destroys abnormal cells while sparing healthy tissue.",
      "It is commonly used for superficial basal cell carcinoma, actinic keratoses, and field treatment of sun-damaged skin.",
      "Treatment involves application of the cream, a waiting period, then light exposure. Some redness and peeling is normal in the days following.",
      "Your skin cancer doctor will assess whether PDT is the right option based on the type, location, and depth of your lesion.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
