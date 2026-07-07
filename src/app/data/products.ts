// Real store products from beachroadsurgery.com.au/store (Cosmetic Skin Solutions Australia)
import imgSupremeSerumCe from "@/imports/store/supreme-serum-ce.webp";
import imgCopperPeptideGelMasque from "@/imports/store/copper-peptide-gel-masque.webp";
import imgDayMoisturizingCreme from "@/imports/store/day-moisturizing-creme.webp";
import imgExfoliatingGelCleanser from "@/imports/store/exfoliating-gel-cleanser.webp";
import imgHydraB5Masque from "@/imports/store/hydra-b5-masque.webp";
import imgPhytoCorrectiveGelMasque from "@/imports/store/phyto-corrective-gel-masque.webp";
import imgResurfacingSerum from "@/imports/store/resurfacing-serum.webp";
import imgRetinol10Creme from "@/imports/store/retinol-1-0-creme.webp";
import imgSupremeEyeReversalCreme from "@/imports/store/supreme-eye-reversal-creme.webp";
import imgSupremeHydraB5Gel from "@/imports/store/supreme-hydra-b5-gel.webp";
import imgSupremeOliveSerum from "@/imports/store/supreme-olive-serum.webp";
import imgSupremePhytoGel from "@/imports/store/supreme-phyto-gel.webp";
import imgSupremeRetinolCrystal from "@/imports/store/supreme-retinol-crystal.webp";
import imgSupremeSerumB315 from "@/imports/store/supreme-serum-b3-15.webp";
import imgSupremeSerumPhloretin from "@/imports/store/supreme-serum-phloretin.webp";
import imgTripleLipidRestore242Ant from "@/imports/store/triple-lipid-restore-242-anti-ageing-moisturiser.webp";

export type Product = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
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
  "Antioxidant",
  "Moisturizer",
  "Antiaging",
  "Exfoliate",
] as const;

export const products: Product[] = [
  {
    id: 1,
    slug: "supreme-serum-ce",
    name: "SUPREME SERUM CE",
    brand: "Cosmetic Skin Solutions",
    category: "Antioxidant",
    price: 83,
    originalPrice: 92,
    image: imgSupremeSerumCe,
    desc: "This patent-pending Vitamin C combination antioxidant utilises 15% stabilised Vitamin C (L-Ascorbic acid), Vitamin E, and Asiatic acid Glutathione to…",
    longDesc: "This patent-pending Vitamin C combination antioxidant utilises 15% stabilised Vitamin C (L-Ascorbic acid), Vitamin E, and Asiatic acid Glutathione to protect skin from oxidising agents caused by free radicals. Combined with SUPERLOWpH™ technology, this Vitamin C Serum is the most effective on the market. This formulation also uniquely combines antioxidants clinically proven to provide autoxidation-preventative properties against environmental pollutants and UV radiation. Additional properties include increasing natural collagen synthesis, strengthening the skin, and promoting firmness and elasticity. It repairs and improves the appearance of photodamaged skin, blotchy skin types, and those experiencing uneven skin tones. With consistent, ongoing use, skin imperfections will be lightened for a brighter, more radiant, even-toned, healthier, youthful-looking complexion.",
    benefits: ["Provides photo-aging protection against free radicals", "Repairs and improves the appearance of sun-damaged skin", "Lightens age spots and improves skin discoloration", "Softens fine lines and wrinkles for a smoother appearance", "Fast-absorbing antioxidants provide photoprotection all day"],
    ingredients: "SUPERIOR ANTIOXIDANT VITAMIN C 15% + E SUPERDEFENSEC™ | SUPERLOW HM | SUPERANTIOXIDANT™. Full ingredient list available from our clinic team.",
    size: "30ml",
    howToUse: "Apply 5-6 drop  daily to the face, neck, and décolleté, avoiding the eye . For optimal re ult , follow with a Co metic Skin Solution  product for the eye, hydrate and lighten, and moi turi e categorie .",
  },  {
    id: 2,
    slug: "copper-peptide-gel-masque",
    name: "COPPER PEPTIDE GEL MASQUE",
    brand: "Cosmetic Skin Solutions",
    category: "Redness Prone",
    price: 79,
    originalPrice: 88,
    image: imgCopperPeptideGelMasque,
    desc: "Highly concentrated copper peptide gel masque with high amounts of hyaluronic acid helps to repair and heal skin for a rejuvenated appearance! Highly…",
    longDesc: "Highly concentrated copper peptide gel masque with high amounts of hyaluronic acid helps to repair and heal skin for a rejuvenated appearance! Highly concentrated hyaluronic acid gel masque with copper peptides provides the skin with the most effective cellular regeneration and renewal properties. It remodels skin tissues, rebuilding the collagen matrix. When used post-treatment, it diminishes visible signs of aging and speeds up the recovery process of skin cells. This micro wound healing Copper Peptide GHK-Cu gel masque is an exceptional treatment method clinically designed to repair damaged skin cells through a process of cellular regeneration and renewal. When used post-laser treatment, vitamin B5 diminishes visible signs of aging and speeds up the recovery process of skin cells.",
    benefits: ["Copper peptide GHK-Cu repairs damaged skin cells through cellular regeneration", "High amounts of hyaluronic acid help repair and heal skin", "Remodels skin tissues and rebuilds collagen", "Ideal post-laser — vitamin B5 speeds up skin recovery"],
    ingredients: "REMODELING SKIN TISSUES, COPPER PEPTIDE GHK-Cu SUPERREGENERATIVE™. Full ingredient list available from our clinic team.",
    size: "50 ml",
    howToUse: "Apply a generou  coat on clean  kin. Gently ma age into damp facial area  in upward, circular motion , avoiding the immediate eye area. Allow the ma k to remain on for 5-7 minute . Rin e thoroughly or remove exce  with a damp face wa h. U e two to three time  a week or daily for inten ive hydration.",
  },  {
    id: 3,
    slug: "day-moisturizing-creme",
    name: "DAY MOISTURIZING CRÈME",
    brand: "Cosmetic Skin Solutions",
    category: "Moisturizer",
    price: 79,
    originalPrice: 88,
    image: imgDayMoisturizingCreme,
    desc: "This moisturising crème is specifically formulated with marine and sea algae, which provide minerals and amino acids with soothing, anti-inflammatory, and…",
    longDesc: "This moisturising crème is specifically formulated with marine and sea algae, which provide minerals and amino acids with soothing, anti-inflammatory, and nourishing properties. In addition, botanical extracts with vitamins A and E soothe and protect against free radicals. This product is ideal for normal, dry, or oily skin types. This unique formula has pore-minimizing properties. It uses a blend of cinnamon, ginger, and natural astringents, witch hazel, willow bark, and horsetail extracts to get rid of worn-out skin cells and thoroughly clean and keep the skin clear. An exclusive combination of plant extracts, chamomile, cucumber, and aloe, provides additional soothing, calming, conditioning, and anti-inflammatory properties.",
    benefits: ["Vitamin A soothes the skin's surface with powerful antioxidants", "Vitamin E fights free radicals and protects the skin.", "Quick to absorb and facilitates antioxidants and vitamins to the skin", "Pore-minimising properties with 8 plant extracts"],
    ingredients: "PORE-MINIMIZING ANTIOXIDANT CRÈME SUPERMOISTURIZE™. Full ingredient list available from our clinic team.",
    size: "50 ml",
    howToUse: "Apply liberally in a circular motion twice daily to the face, neck, and décolleté. For optimal re ult , apply after a Co metic Skin Solution  antioxidant and follow up with a Co metic Skin Solution   un creen. It can al o be applied to other dehydrated area .",
  },  {
    id: 4,
    slug: "exfoliating-gel-cleanser",
    name: "EXFOLIATING GEL CLEANSER",
    brand: "Cosmetic Skin Solutions",
    category: "Wrinkles & Lines",
    price: 81,
    originalPrice: 90,
    image: imgExfoliatingGelCleanser,
    desc: "MEDIUM LEVEL HYDROXY ACID BLEND - SUPEREXFOLIATE This luxurious pore-refining, alpha hydroxy acid gel cleanser combines 5 botanical extracts containing…",
    longDesc: "MEDIUM LEVEL HYDROXY ACID BLEND - SUPEREXFOLIATE This luxurious pore-refining, alpha hydroxy acid gel cleanser combines 5 botanical extracts containing alpha hydroxy acids to gently provide SUPEREXFOLIATE™ properties to remove excess oil, residue, sebum, and make-up. Additionally, botanicals chamomile, cucumber, and aloe provide soothing and calming skin properties to prep skin in order to properly receive antioxidant delivery.",
    benefits: ["Luxurious cleansing properties gently and safely exfoliate the skin", "Botanicals chamomile, cucumber, and aloe provide soothing and calming", "Contains a natural blend of hydroxy fruit acids to facilitate exfoliation, Ideal for normal, combination, or oily skin types"],
    ingredients: "MEDIUM LEVEL HYDROXY ACID BLEND - SUPEREXFOLIATE. Full ingredient list available from our clinic team.",
    size: "240ml",
    howToUse: "Twice Daily, gently ma age u ing a circular motion onto a wet face and décolletage. Rin e with warm water. For optimal re ult , in the morning, follow with a co metic  kin  olution  antioxidant.",
  },  {
    id: 5,
    slug: "hydra-b5-masque",
    name: "Hydra B5 Masque",
    brand: "Cosmetic Skin Solutions",
    category: "Hydrate",
    price: 90,
    originalPrice: 100,
    image: imgHydraB5Masque,
    desc: "This highly concentrated vitamin B5 masque supplies high amounts of hyaluronic acid (1%) to replenish depleted moisture levels associated with dry, cracked,…",
    longDesc: "This highly concentrated vitamin B5 masque supplies high amounts of hyaluronic acid (1%) to replenish depleted moisture levels associated with dry, cracked, dehydrated, and stressed skin. This SUPERHYDRATE™ vitamin B5 masque is essential to restoring the skin's optimal moisture balance by combining naturally occurring humectants to bind moisture, and to improve form and function of the skin. Hyaluronic acid is the skin's natural moisturizing factor (NMF) responsible for tissue hydration and immediate water attracting and binding attributes. Ideal for all skin types.",
    benefits: ["Contains 1% Hyaluronic acid (the skin's natural moisturizing factor, NMF)", "Hyaluronic acid molecules attract, bind, and retain water molecules for Replenishes, maintains, and balances proper moisture levels needed for Panthenol and glycerin provide extra lubrication, emollience, and moisturizing"],
    ingredients: "This highly concentrated vitamin B 5 masque supplies high amounts of. Full ingredient list available from our clinic team.",
    size: "50 ml",
    howToUse: "Apply a generou  coat on clear  kin Gently ma age into a damp facial area in upward, circular motion , avoiding the immediate eye area. Allow the ma k to remain on for 5-7 minute . Rin e thoroughly or remove exce  with a damp face wa h. U e two or three time  a week or daily for inten ive hydration.",
  },  {
    id: 6,
    slug: "phyto-corrective-gel-masque",
    name: "PHYTO + CORRECTIVE GEL MASQUE",
    brand: "Cosmetic Skin Solutions",
    category: "Discolouration",
    price: 79,
    originalPrice: 88,
    image: imgPhytoCorrectiveGelMasque,
    desc: "It is highly concentrated with hyaluronic acid to hydrate and replenish moisture.",
    longDesc: "It is highly concentrated with hyaluronic acid to hydrate and replenish moisture. Cucumber and thyme provide soothing properties by reducing redness and irritation. Depigmenting agents kojic acid and alpha-arbutin, combined with botanicals bearberry, uva ursi, and licorice, provide lighting properties. It contains dipeptide-1, a tranquillity messenger peptide that calms, relaxes, and relieves facial tension. It is highly concentrated with hyaluronic acid to soothe, moisturise, and replenish moisture. Cucumbers and thyme help reduce skin redness and irritation. Kojic acid, alpha-arbutin, and botanicals bearberry, uva ursi, and licorice provide lightening properties.",
    benefits: ["Highly concentrated hyaluronic acid hydrates and replenishes moisture", "Cucumber and thyme soothe redness and irritation", "Kojic acid helps correct discolouration", "Dipeptide-1 calms and relieves facial tension"],
    ingredients: "4 POWERFUL LIGHTENING ANTIOXIDANTS SUPERLIGHTEN™. Full ingredient list available from our clinic team.",
    size: "50 ml",
    howToUse: "Apply a generou  coat on clean  kin. Gently ma age into damp facial area  in upward, circular motion , avoiding the immediate eye area. Allow the ma k to remain on for 5-7 minute . Rin e thoroughly or remove exce  with a damp face wa h. U e two to three time  a week or daily for inten ive hydration.",
  },  {
    id: 7,
    slug: "resurfacing-serum",
    name: "RESURFACING SERUM",
    brand: "Cosmetic Skin Solutions",
    category: "Exfoliate",
    price: 69,
    originalPrice: 78,
    image: imgResurfacingSerum,
    desc: "This exfoliating serum retextures the skin's outer surface by activating enzymes to replenish smoother, softer skin for a refreshed and regenerated new you.",
    longDesc: "This exfoliating serum retextures the skin's outer surface by activating enzymes to replenish smoother, softer skin for a refreshed and regenerated new you. SUPERCELLRENEWAL™ process is accelerated, followed by perpetual cell-to-cell turnover to produce a smooth, retextured, new layer of skin revealed beneath. Your skin will experience a smoother, healthier, brighter, younger-looking appearance. A combination of naturally occurring alpha hydroxy acids (AHAs), lactic and glycolic acids helps promote even cell-to-cell differentiation and exfoliation through cellular turnover through desquamation and apoptosis. Enzymes are activated to force a renewed, smooth epidermal surface.",
    benefits: ["Exfoliating and replenishing to retexture skin's outer surface", "Activation of enzymes promotes smoother, softer skin", "Naturally occurring alpha hydroxy acids promote cell differentiation", "Kombucha contain enzymes and amino acids"],
    ingredients: "ALPHA HYDROXY ACIDS 1.5% GLYCOLIC + 1.5% LACTIC SUPEREXFOLIATE™. Full ingredient list available from our clinic team.",
    size: "1 oz",
    howToUse: "At night after clean ing, apply 5-6 drop  to a dry face, neck and décolleté, or a  directed by a Dermatologi t. For optimal re ult , apply after a Co metic Skin Solution  antioxidant. Follow up with a Co metic Skin Solution  moi turi er.",
  },  {
    id: 8,
    slug: "retinol-1-0-creme",
    name: "RETINOL 1.0 CRÈME",
    brand: "Cosmetic Skin Solutions",
    category: "Exfoliate",
    price: 82,
    originalPrice: 91,
    image: imgRetinol10Creme,
    desc: "This high-strength retinol provides skin renewal and maximum strength benefits to reverse fine lines and wrinkles associated with aging.",
    longDesc: "This high-strength retinol provides skin renewal and maximum strength benefits to reverse fine lines and wrinkles associated with aging. Skin will become firmer, brighter, and smoother, and it will have a more youthful-looking complexion. This pharmaceutical-grade retinol offers SUPERREPAIRTM properties for a maximum reversal of skin aging. Often used in professional treatments, it will make your skin noticeably blemish-free for a firmer, brighter, healthier, beautifully even, younger-looking complexion. Vitamin A provides powerful anti-aging benefits, regenerating skin cells to improve blemishes, blotchiness, and pigmentation. It also provides corrective benefits, reducing fine lines, wrinkles, and problematic skin imperfections. Chamomile and cucumber botanical extracts provide soothing and calming benefits. Often used in professional treatments, this retinol offers intensive repair and reversal for signs of aging. Photo-aging protection against UV radiation Includes 2 extracts to prevent skin irritation and discomfort Treats by lightening age and brown spots.",
    benefits: ["Powerful Vitamin A to reverse signs of aging"],
    ingredients: "1.0% VITAMIN A + 1% VITAMIN E NIGHTTIME CRÈME SUPERCORRECTIVE™. Full ingredient list available from our clinic team.",
    size: "1 oz",
    howToUse: "At night after clean ing,  paringly apply 2 to 3 pump  to a dry face, neck and décolleté, or a  directed by a Dermatologi t. For optimal re ult , follow with a Co metic Skin Solution  moi turi er.",
  },  {
    id: 9,
    slug: "supreme-eye-reversal-creme",
    name: "SUPREME EYE REVERSAL CRÈME",
    brand: "Cosmetic Skin Solutions",
    category: "Wrinkles & Lines",
    price: 69,
    originalPrice: 78,
    image: imgSupremeEyeReversalCreme,
    desc: "This clinical-grade SUPREME EYE REVERSAL CRÈME™ provides SUPERCORRECTIVE™ action against dark circles, bags, and puffiness utilizing SUPERREGENERATIVE™…",
    longDesc: "This clinical-grade SUPREME EYE REVERSAL CRÈME™ provides SUPERCORRECTIVE™ action against dark circles, bags, and puffiness utilizing SUPERREGENERATIVE™ peptides to stimulate microcirculation of skin cells.",
    benefits: ["SUPERCORRECTIVE™ action against dark circles, bags and puffiness", "SUPERREGENERATIVE™ peptides stimulate microcirculation", "Clinical-grade eye treatment", "Ideal for the delicate eye area"],
    ingredients: "POWERFUL INGREDIENTS TO REVERSE DARK CIRCLES, PUFFINESS, EYE BAGS | SUPERCORRECTIVE™. Full ingredient list available from our clinic team.",
    size: ".5 oz",
    howToUse: "After moi turi ing, gently dab cream around the upper and lower eye area with your ring finger in the morning and at night a  needed or a  directed by a Dermatologi t. Apply  paringly, u ing a  mall amount to cover the  kin adjacent to and beneath the orbital of the eye  up to the brow bone.",
  },  {
    id: 10,
    slug: "supreme-hydra-b5-gel",
    name: "SUPREME HYDRA B5 GEL",
    brand: "Cosmetic Skin Solutions",
    category: "Hydrate",
    price: 79,
    originalPrice: 88,
    image: imgSupremeHydraB5Gel,
    desc: "This oil-free, moisture-binding gel brings immediate hydration to the skin.",
    longDesc: "This oil-free, moisture-binding gel brings immediate hydration to the skin. This gel attracts and binds water molecules, leaving skin feeling supple, plump, hydrated, and healthy-looking! Low molecular weight hyaluronic acid technology penetrates deep into the dermal layer of skin, naturally binding moisture and restoring optimal levels. Delivered in an oil-free, lightweight, crystal-clear formulation, this hydrating gel enhances antioxidant delivery, improving the skin's smoothness, suppleness, firmness, and texture. Utilises water-binding capabilities to nourish hydration to the skin. Contains Vitamin-B5 (Pantothenic Acid) to assist in cellular tissue repair and to heal wounds. Helps boost the efficacy of Vitamin C antioxidants.",
    benefits: ["Moisture-binding hydration", "Contains Vitamin B5 Pantothenic acid for tissue repair, wound healing", "Skin will feel hydrated, healthy, and plump", "Water-binding capabilities nourish hydration to the skin", "Boosts performance of topical vitamin C"],
    ingredients: "ANTIOXIDANT VITAMIN B5 + HYALURONIC ACID SUPERHYDRATE™. Full ingredient list available from our clinic team.",
    size: "1 oz",
    howToUse: "Each morning after clean ing, apply 5-6 drop  to a dry face, neck and décolleté, or a  directed by a Dermatologi t. For optimal re ult , apply after a Co metic Skin Solution  antioxidant Vitamin C. Follow up with a Co metic Skin Solution  moi turi er and  un creen.",
  },  {
    id: 11,
    slug: "supreme-olive-serum",
    name: "SUPREME OLIVE SERUM",
    brand: "Cosmetic Skin Solutions",
    category: "Redness Prone",
    price: 69,
    originalPrice: 78,
    image: imgSupremeOliveSerum,
    desc: "Clinically tested and clinically approved, this superior antioxidant provides SUPERREPAIR™ dermal wound healing properties for post-laser and microneedling…",
    longDesc: "Clinically tested and clinically approved, this superior antioxidant provides SUPERREPAIR™ dermal wound healing properties for post-laser and microneedling procedures. Skin will feel calm, relieved, and repaired for wonderfully beautiful-looking skin! Utilising a SUPERPEPTIDE™ combination, representative of clinical studies, this powerful SUPERANTIOXIDANT™ formula facilitates collagen production, wound healing of scars and stretch marks, and reversing cell damage. In addition, this formula supplies the skin with anti-inflammatory, astringent, and purifying properties, which relieve the symptoms of rosacea, eczema, and psoriasis. A revolutionary and proven amino acid peptide formulation promotes wound healing, improving symptoms caused by rosacea, psoriasis, and eczema. Skin will feel calm, relieved, and repaired for wonderfully beautiful-looking skin! This exceptional wound-healing serum provides the amino acids L-glutamine, Taurine, and L-arginine to provide wound-healing and cellular rejuvenation properties. These reverse cell damage, thus rebuilding the skin's cellular structural matrix. Skin will become strengthened and repaired. Peptides Palmitoyl Tetrapeptide-7, Palmitoyl Oligopeptide (Matrixyl 3000), and Palmitoyl Pentapeptide-3 (Matrixyl) are clinically tested peptide ingredients documented to provide wound healing properties, thus reducing fine lines and wrinkles.",
    benefits: ["Promotes wound healing properties", "Improves skin symptoms associated with rosacea, eczema, and psoriasis", "Peptide complex clinically documented to reduce fine lines and fine wrinkles", "The amino acid complex promotes the rebuilding of the cellular structural matrix", "Vitamin B5 (Pantothenic Acid) repairs skin cells, providing antioxidant protection"],
    ingredients: "POWERFUL WOUND HEALING ANTIOXIDANTS SUPERREPAIR™. Full ingredient list available from our clinic team.",
    size: "1 oz",
    howToUse: "Each morning after clean ing, apply 5-6 drop  to a dry face, neck and décolleté, or a  directed by a Dermatologi t. For optimal re ult , apply after a Co metic Skin Solution  antioxidant Vitamin C or following IPL La er. Follow up with a Co metic Skin Solution  moi turi er and  un creen.",
  },  {
    id: 12,
    slug: "supreme-phyto-gel",
    name: "SUPREME PHYTO + GEL",
    brand: "Cosmetic Skin Solutions",
    category: "Antioxidant",
    price: 79,
    originalPrice: 88,
    image: imgSupremePhytoGel,
    desc: "Botanical extracts of cucumber and thyme calm skin redness and irritation, thus promoting healing, soothing, anti-inflammatory, and antiseptic properties.",
    longDesc: "Botanical extracts of cucumber and thyme calm skin redness and irritation, thus promoting healing, soothing, anti-inflammatory, and antiseptic properties. SUPERLIGHTENTM ingredients kojic acid, alpha-arbutin, and uva ursi provide depigmenting properties, promoting a clear skin tone. Clinically tested and clinically approved, this botanically-based lightening gel treats hyperpigmentation to reveal the real you. It evens out skin tones for a healthier, younger-looking skin you will love! This lightening gel treats hyperpigmentation by evening the skin's tone, diminishing age spots and improving the appearance of discoloured skin. Kojic acid, uva ursi bearberry extract, and alpha-arbutin safely lighten and brighten the skin by inducing depigmenting properties. Botanical extracts of cucumber and thyme soothe to reduce redness and irritation. In addition, this botanical gel provides calming, anti-inflammatory, antibacterial, anti-fungal, and antiseptic properties.",
    benefits: ["Evens skin tone with advanced and safe lightening ingredients", "Diminishes brown spots and age spots", "Safe lightening ingredients. No hydroquinone.", "Hydrates, lightens, calms, and soothes in one step", "Cucumber and thyme reduce redness and irritation"],
    ingredients: "POWERFUL LIGHTENING ANTIOXIDANTS SUPERLIGHTEN™. Full ingredient list available from our clinic team.",
    size: "1 oz",
    howToUse: "Each morning after clean ing, apply 5-6 drop  to a dry face, neck and décolleté, or a  directed by a Dermatologi t. For optimal re ult , apply after a Co metic Skin Solution  antioxidant Vitamin C. Follow up with a Co metic Skin Solution  moi turi er and  un creen.",
  },  {
    id: 13,
    slug: "supreme-retinol-crystal",
    name: "SUPREME RETINOL CRYSTAL",
    brand: "Cosmetic Skin Solutions",
    category: "Antiaging",
    price: 69,
    originalPrice: 78,
    image: imgSupremeRetinolCrystal,
    desc: "This professional, high-strength liquid retinol treatment will deliver maximum reparative power and reverse the signs of skin aging with cumulative use,…",
    longDesc: "This professional, high-strength liquid retinol treatment will deliver maximum reparative power and reverse the signs of skin aging with cumulative use, resulting in a blemish-free, smooth, hydrated, youthful-looking skin complexion and appearance.",
    benefits: ["Professional high-strength liquid retinol treatment", "Delivers maximum reparative power", "Reverses signs of skin aging with cumulative use", "Promotes blemish-free, smooth, hydrated skin"],
    ingredients: "2.0% VITAMIN A + C + E, MAXIMUM STRENGTH ANTIOXIDANT SUPERCORRECTIVE™. Full ingredient list available from our clinic team.",
    size: "1 oz",
    howToUse: "At night after clean ing,  paringly apply 5-6 drop  to a dry face, neck and décolleté, or a  directed by a Dermatologi t. For optimal re ult , follow with a Co metic Skin Solution  moi turi er.",
  },  {
    id: 14,
    slug: "supreme-serum-b3-15",
    name: "SUPREME SERUM B3 15",
    brand: "Cosmetic Skin Solutions",
    category: "Hydrate",
    price: 69,
    originalPrice: 78,
    tag: "Out of Stock",
    image: imgSupremeSerumB315,
    desc: "SUPERCELLRENEWAL™ properties promote skin smoothness and youthfulness.",
    longDesc: "SUPERCELLRENEWAL™ properties promote skin smoothness and youthfulness. This unique formula is clinically designed to reduce the depth of fine wrinkles and lines, thus diminishing redness, pore size, acne, and rosacea for an improved, wonderfully hydrated, healthy-looking skin complexion.",
    benefits: ["15% Vitamin B3 with probiotics for maximum effectiveness", "Reduces the depth of fine wrinkles and lines", "Diminishes redness, pore size, acne and rosacea", "Promotes a hydrated, healthy-looking complexion"],
    ingredients: "15.0% VITAMIN B3 + PROBIOTICS, MAXIMUM EFFECTIVENESS SUPERCELLRENEWAL™. Full ingredient list available from our clinic team.",
    size: "1 oz",
    howToUse: "Each morning after clean ing, apply 5-6 drop  to a dry face, neck and décolleté, or a  directed by a Dermatologi t. For optimal re ult , apply after a Co metic Skin Solution  antioxidant Vitamin C. Follow up with a Co metic Skin Solution  moi turi er and  un creen.",
  },  {
    id: 15,
    slug: "supreme-serum-phloretin",
    name: "SUPREME SERUM PHLORETIN",
    brand: "Cosmetic Skin Solutions",
    category: "Antioxidant",
    price: 79,
    originalPrice: 88,
    tag: "Out of Stock",
    image: imgSupremeSerumPhloretin,
    desc: "This SUPREMESERUM™ provides a SYNERGISTICINTERACTION™ between antioxidants which boosts broad-spectrum SUPERPROTECT™ properties against free radicals and…",
    longDesc: "This SUPREMESERUM™ provides a SYNERGISTICINTERACTION™ between antioxidants which boosts broad-spectrum SUPERPROTECT™ properties against free radicals and ultraviolet radiation, preventing cellular damage. Fast absorbing, penetration-enhancing with SUPERLOWPH™ technology speeds antioxidant delivery for maximum effectiveness This bio-diverse antioxidant prevents and corrects signs of sun damage providing broad-spectrum protection against UV radiation and free radicals. Strengthens cells to increase protection against future damage from the sun letting the real you shine through. This antioxidant formula contains preventative and corrective properties combining Phloretin with 10% stabilised vitamin C (L-Ascorbic acid), Asiatic acid, and Glutathione. Provides broad-spectrum protection against UV radiation and free radicals. Erases signs of photo-aged and photodamaged skin. This combination of antioxidants fades sun and age spots, diminishes hyperpigmentation, improves discolouration, and promotes even skin tone. On a cellular level, DNA strands are strengthened by synthesising collagen and elastin, resulting in a strengthened cellular support system. The powerful combination of phloretin, Asiatic acid, Glutathione, Vitamin C",
    benefits: ["Provides broad-spectrum protection against sunlight and free radicals", "Erases signs of photo-aged and photodamaged skin", "Improves skin discolourations, promoting an even tone", "Fast-absorbing antioxidants provide photoprotection all-day", "Boosts the performance and effectiveness of skincare routine"],
    ingredients: "SUPERIOR ANTIOXIDANT VITAMIN C 10% SUPERDEFENSEC™ | SUPERLOWpH™ | SUPERANTIOXIDANT™. Full ingredient list available from our clinic team.",
    size: "1 oz",
    howToUse: "Twice daily, apply 5-6 drop  to the face, neck, and décolleté, avoiding the eye . For optimal re ult , follow with a Co metic Skin Solution  product for the eye, hydrate & lighten, and moi turi e category.",
  },  {
    id: 16,
    slug: "triple-lipid-restore-242-anti-ageing-moisturiser",
    name: "Triple Lipid Restore 242 Anti-Ageing Moisturiser",
    brand: "SkinCeuticals",
    category: "Moisturizer",
    price: 200,
    originalPrice: 215,
    image: imgTripleLipidRestore242Ant,
    desc: "SkinCeuticals Triple Lipid Restore 2:4:2 is an anti-aging cream for dry skin formulated in an optimised concentration of lipids: 2% pure ceramides, 4%…",
    longDesc: "SkinCeuticals Triple Lipid Restore 2:4:2 is an anti-aging cream for dry skin formulated in an optimised concentration of lipids: 2% pure ceramides, 4% natural cholesterol, and 2% fatty acids. This unique anti-aging cream for the face contains a 2:4:2 cholesterol-dominant ratio to help restore the external moisture barrier of the skin and support natural self-repair, while potently nourishing aging skin for improvement in visible signs of accelerated aging.",
    benefits: ["2% pure ceramides, 4% natural cholesterol, 2% fatty acids", "Restores the skin's external moisture barrier", "Supports natural self-repair", "Nourishes aging skin against visible signs of accelerated aging"],
    ingredients: "SkinCeuticals Triple Lipid Restore 2:4:2 is an anti-aging cream for dry skin formulated in an optimised concentration of lipids: 2% pure ceramides, 4% natural cholesterol, and 2% fatty acids.. Full ingredient list available from our clinic team.",
    size: "48 ml",
    howToUse: "Apply a  mall amount of the SkinCeutical  Triple Lipid Re tore moi turi er between fingertip , warm, and melt the cream in circular motion . You may apply the anti-aging cream twice daily to the face, neck, and che t. With a pea- ized amount daily, thi  cream will la t 1-2 month .* *Individual re ult  may vary depending on the frequency of u e and the amount of product applied per application.",
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
