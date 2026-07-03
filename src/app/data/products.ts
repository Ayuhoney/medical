import { IMAGES } from "../constants";

export type Product = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
  desc: string;
  longDesc: string;
  benefits: string[];
  ingredients: string;
  size: string;
  howToUse: string;
};

export const STORE_CATEGORIES = [
  "All Products",
  "Redness Prone",
  "Wrinkles & Lines",
  "Discolouration",
  "Hydrate",
  "Cleansers",
  "Sunscreen",
  "Eye Care",
] as const;

export const products: Product[] = [
  {
    id: 1,
    slug: "brightening-vitamin-c-serum",
    name: "Brightening Vitamin C Serum",
    brand: "Cosmetic Skin Solutions",
    category: "Discolouration",
    price: 89,
    rating: 4.9,
    reviews: 124,
    image: IMAGES.productSerums,
    tag: "Best Seller",
    desc: "High-potency Vitamin C serum to brighten, even skin tone, and protect against oxidative damage.",
    longDesc:
      "A clinic-favourite antioxidant serum formulated with stabilised L-ascorbic acid and ferulic acid. Designed to visibly brighten dull skin, reduce the appearance of dark spots, and defend against environmental stressors — all while supporting collagen synthesis for a firmer, more radiant complexion.",
    benefits: [
      "Visibly brightens and evens skin tone",
      "Antioxidant protection against daily UV and pollution",
      "Supports collagen for firmer-looking skin",
      "Lightweight, fast-absorbing formula",
    ],
    ingredients: "L-Ascorbic Acid, Ferulic Acid, Vitamin E, Hyaluronic Acid, Botanical Extracts",
    size: "30ml",
    howToUse: "Apply 3–4 drops to cleansed skin each morning before moisturiser and SPF. Patch test if new to active serums.",
  },
  {
    id: 2,
    slug: "intense-hydration-moisturiser",
    name: "Intense Hydration Moisturiser",
    brand: "Cosmedix",
    category: "Hydrate",
    price: 72,
    rating: 4.8,
    reviews: 98,
    image: IMAGES.productBottle,
    tag: "New",
    desc: "Rich, nourishing moisturiser with hyaluronic acid and ceramides to restore the skin barrier.",
    longDesc:
      "This deeply hydrating moisturiser replenishes moisture levels while reinforcing the skin's natural barrier. Ideal for dry, dehydrated, or post-treatment skin, it delivers lasting comfort without heaviness — leaving skin soft, supple, and beautifully balanced.",
    benefits: [
      "Restores moisture for up to 24 hours",
      "Strengthens the skin barrier with ceramides",
      "Soothes dryness and sensitivity",
      "Non-comedogenic, suitable for daily use",
    ],
    ingredients: "Hyaluronic Acid, Ceramide Complex, Squalane, Niacinamide, Shea Butter",
    size: "50ml",
    howToUse: "Massage a pea-sized amount onto face and neck morning and evening after serums.",
  },
  {
    id: 3,
    slug: "retinol-renewal-night-cream",
    name: "Retinol Renewal Night Cream",
    brand: "Cosmetic Skin Solutions",
    category: "Wrinkles & Lines",
    price: 115,
    rating: 4.9,
    reviews: 87,
    image: IMAGES.productPerfume,
    tag: "Premium",
    desc: "Medical-grade retinol night treatment for cellular renewal, wrinkle reduction, and skin resurfacing.",
    longDesc:
      "A professional-strength retinol night cream that accelerates cell turnover while minimising irritation through an encapsulated delivery system. Fine lines, uneven texture, and early signs of ageing are visibly improved with consistent nightly use.",
    benefits: [
      "Reduces fine lines and wrinkles over time",
      "Refines skin texture and pore appearance",
      "Encourages overnight cellular renewal",
      "Encapsulated retinol for gentler delivery",
    ],
    ingredients: "Encapsulated Retinol, Peptides, Vitamin E, Squalane, Allantoin",
    size: "30ml",
    howToUse: "Apply a thin layer to cleansed skin at night only. Always use SPF the following morning. Introduce gradually over 2–3 weeks.",
  },
  {
    id: 4,
    slug: "calming-redness-relief-serum",
    name: "Calming Redness Relief Serum",
    brand: "Aspect Dr",
    category: "Redness Prone",
    price: 95,
    rating: 4.7,
    reviews: 61,
    image: IMAGES.productSerums,
    desc: "Soothing serum with niacinamide and centella to reduce redness, sensitivity, and inflammation.",
    longDesc:
      "Formulated for reactive and redness-prone skin, this calming serum combines niacinamide and centella asiatica to reduce visible redness, strengthen the skin barrier, and restore comfort to stressed, sensitised complexions.",
    benefits: [
      "Reduces visible redness and flushing",
      "Calms irritated, reactive skin",
      "Strengthens barrier function",
      "Suitable for rosacea-prone skin types",
    ],
    ingredients: "Niacinamide, Centella Asiatica, Panthenol, Bisabolol, Green Tea Extract",
    size: "30ml",
    howToUse: "Apply 2–3 pumps to clean skin morning and evening. Follow with moisturiser.",
  },
  {
    id: 5,
    slug: "spf-50-daily-sunscreen",
    name: "SPF 50+ Daily Sunscreen",
    brand: "Ultraceuticals",
    category: "Sunscreen",
    price: 58,
    rating: 5.0,
    reviews: 203,
    image: IMAGES.productBasket,
    tag: "Essential",
    desc: "Lightweight, non-greasy SPF 50+ for daily use. Broad-spectrum protection with a matte finish.",
    longDesc:
      "Australia's harsh sun demands serious protection. This broad-spectrum SPF 50+ sunscreen provides UVA and UVB defence in a lightweight, matte-finish formula that layers seamlessly under makeup — making daily sun protection effortless.",
    benefits: [
      "Broad-spectrum SPF 50+ UVA/UVB protection",
      "Lightweight, non-greasy matte finish",
      "Water-resistant for up to 4 hours",
      "Suitable for all skin types",
    ],
    ingredients: "Zinc Oxide, Titanium Dioxide, Vitamin E, Aloe Vera, Glycerin",
    size: "75ml",
    howToUse: "Apply generously 20 minutes before sun exposure. Reapply every 2 hours and after swimming or sweating.",
  },
  {
    id: 6,
    slug: "peptide-eye-cream",
    name: "Peptide Eye Cream",
    brand: "Cosmedix",
    category: "Eye Care",
    price: 88,
    rating: 4.8,
    reviews: 72,
    image: IMAGES.productBottle,
    desc: "Advanced peptide formula to firm, brighten, and hydrate the delicate eye area.",
    longDesc:
      "A targeted eye treatment powered by peptides and caffeine to address fine lines, puffiness, and dark circles. The delicate eye area receives intensive hydration and firming support without irritation.",
    benefits: [
      "Firms and smooths fine lines around the eyes",
      "Reduces appearance of dark circles",
      "De-puffs tired, swollen under-eyes",
      "Ophthalmologist-tested formula",
    ],
    ingredients: "Peptide Complex, Caffeine, Hyaluronic Acid, Vitamin K, Cucumber Extract",
    size: "15ml",
    howToUse: "Gently pat a rice-grain amount around the orbital bone morning and evening using your ring finger.",
  },
  {
    id: 7,
    slug: "clarifying-glycolic-cleanser",
    name: "Clarifying Glycolic Cleanser",
    brand: "Aspect Dr",
    category: "Cleansers",
    price: 45,
    rating: 4.6,
    reviews: 55,
    image: IMAGES.productSerums,
    desc: "Gentle exfoliating cleanser with glycolic acid to remove impurities and refine skin texture.",
    longDesc:
      "A refreshing gel cleanser with glycolic acid that gently exfoliates while removing makeup, excess oil, and daily impurities. Skin feels clean, smooth, and perfectly prepped for the rest of your routine.",
    benefits: [
      "Gently exfoliates without stripping",
      "Refines pores and skin texture",
      "Removes makeup and daily impurities",
      "Prepares skin for active treatments",
    ],
    ingredients: "Glycolic Acid, Aloe Vera, Chamomile Extract, Glycerin, Green Tea",
    size: "200ml",
    howToUse: "Massage one pump onto damp skin for 60 seconds, then rinse thoroughly. Use morning and evening.",
  },
  {
    id: 8,
    slug: "advanced-pigment-corrector",
    name: "Advanced Pigment Corrector",
    brand: "Ultraceuticals",
    category: "Discolouration",
    price: 128,
    rating: 4.9,
    reviews: 44,
    image: IMAGES.productPerfume,
    tag: "Clinical Grade",
    desc: "Professional-strength pigmentation treatment targeting dark spots, melasma, and uneven tone.",
    longDesc:
      "Our most advanced pigmentation corrector, available exclusively through medical clinics. This professional-strength formula targets stubborn hyperpigmentation, melasma, and post-inflammatory marks with a synergistic blend of tyrosinase inhibitors and brightening agents.",
    benefits: [
      "Targets stubborn dark spots and melasma",
      "Evens overall skin tone",
      "Clinic-exclusive professional formula",
      "Visible results in 4–8 weeks",
    ],
    ingredients: "Tranexamic Acid, Kojic Acid, Alpha Arbutin, Niacinamide, Licorice Root Extract",
    size: "30ml",
    howToUse: "Apply to affected areas once daily in the evening. Must be used with daily SPF. Consult our team before starting.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, limit);
}
