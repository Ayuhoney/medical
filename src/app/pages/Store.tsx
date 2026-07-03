import { useState } from "react";
import { ShoppingCart, Star, ArrowRight, Search, Filter } from "lucide-react";
import { IMAGES } from "../constants";
import { PageHero } from "../components/ui";
import { Link } from "react-router";

const categories = ["All Products", "Redness Prone", "Wrinkles & Lines", "Discolouration", "Hydrate", "Cleansers", "Sunscreen", "Eye Care"];

const products = [
  { id: 1, name: "Brightening Vitamin C Serum", brand: "Cosmetic Skin Solutions", category: "Discolouration", price: 89, rating: 4.9, reviews: 124, image: IMAGES.productSerums, tag: "Best Seller", desc: "High-potency Vitamin C serum to brighten, even skin tone, and protect against oxidative damage." },
  { id: 2, name: "Intense Hydration Moisturiser", brand: "Cosmedix", category: "Hydrate", price: 72, rating: 4.8, reviews: 98, image: IMAGES.productBottle, tag: "New", desc: "Rich, nourishing moisturiser with hyaluronic acid and ceramides to restore the skin barrier." },
  { id: 3, name: "Retinol Renewal Night Cream", brand: "Cosmetic Skin Solutions", category: "Wrinkles & Lines", price: 115, rating: 4.9, reviews: 87, image: IMAGES.productPerfume, tag: "Premium", desc: "Medical-grade retinol night treatment for cellular renewal, wrinkle reduction, and skin resurfacing." },
  { id: 4, name: "Calming Redness Relief Serum", brand: "Aspect Dr", category: "Redness Prone", price: 95, rating: 4.7, reviews: 61, image: IMAGES.productSerums, desc: "Soothing serum with niacinamide and centella to reduce redness, sensitivity, and inflammation." },
  { id: 5, name: "SPF 50+ Daily Sunscreen", brand: "Ultraceuticals", category: "Sunscreen", price: 58, rating: 5.0, reviews: 203, image: IMAGES.productBasket, tag: "Essential", desc: "Lightweight, non-greasy SPF 50+ for daily use. Broad-spectrum protection with a matte finish." },
  { id: 6, name: "Peptide Eye Cream", brand: "Cosmedix", category: "Eye Care", price: 88, rating: 4.8, reviews: 72, image: IMAGES.productBottle, desc: "Advanced peptide formula to firm, brighten, and hydrate the delicate eye area." },
  { id: 7, name: "Clarifying Glycolic Cleanser", brand: "Aspect Dr", category: "Cleansers", price: 45, rating: 4.6, reviews: 55, image: IMAGES.productSerums, desc: "Gentle exfoliating cleanser with glycolic acid to remove impurities and refine skin texture." },
  { id: 8, name: "Advanced Pigment Corrector", brand: "Ultraceuticals", category: "Discolouration", price: 128, rating: 4.9, reviews: 44, image: IMAGES.productPerfume, tag: "Clinical Grade", desc: "Professional-strength pigmentation treatment targeting dark spots, melasma, and uneven tone." },
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[rgba(10,126,148,0.1)] hover:border-[rgba(10,126,148,0.25)] hover:shadow-xl hover:shadow-[rgba(10,126,148,0.1)] transition-all duration-300 flex flex-col">
      <div className="relative h-56 bg-[#F0F6F8] overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {product.tag && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#0A7E94] text-white text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ fontFamily: "'Outfit',sans-serif" }}>
              {product.tag}
            </span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[#0A7E94] text-[10px] font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'Outfit',sans-serif" }}>{product.brand}</p>
        <h3 className="text-[#0D1F2D] font-semibold text-base mb-1.5 leading-snug" style={{ fontFamily: "'Outfit',sans-serif" }}>{product.name}</h3>
        <p className="text-[#5A7A8A] text-xs leading-relaxed mb-3 flex-1" style={{ fontFamily: "'Outfit',sans-serif" }}>{product.desc}</p>
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={11} className={s <= Math.round(product.rating) ? "text-[#F59E0B] fill-[#F59E0B]" : "text-gray-200 fill-gray-200"} />
            ))}
          </div>
          <span className="text-[#5A7A8A] text-xs" style={{ fontFamily: "'Outfit',sans-serif" }}>({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#0D1F2D] font-bold text-xl" style={{ fontFamily: "'DM Serif Display',serif" }}>${product.price}</span>
          <button
            onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1800); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${added ? "bg-green-500 text-white" : "bg-[#0A7E94] text-white hover:bg-[#096B7E]"}`}
            style={{ fontFamily: "'Outfit',sans-serif" }}
          >
            <ShoppingCart size={13} />
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All Products" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <PageHero image={IMAGES.aestheticMask} tag="ONLINE STORE" title={<>Clinical Skin Care <br /><em>Products</em></>} subtitle="Medical-grade skincare recommended and dispensed by our clinic." />

      {/* Intro */}
      <section className="py-12 bg-[#EDF8FB] border-b border-[rgba(10,126,148,0.1)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-[#0D1F2D] text-xl mb-1" style={{ fontFamily: "'DM Serif Display',serif" }}>Cosmetic Skin Solutions Australia</h2>
              <p className="text-[#5A7A8A] text-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>Select from our curated Clinical Skin Care Range — doctor-approved, medical grade products.</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#5A7A8A]" style={{ fontFamily: "'Outfit',sans-serif" }}>
              <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-[rgba(10,126,148,0.15)]">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Free shipping over $150
              </span>
              <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-[rgba(10,126,148,0.15)]">
                🔒 Secure checkout
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A7A8A]" />
              <input
                type="text"
                placeholder="Search products or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[rgba(10,126,148,0.2)] bg-[#F8FCFD] text-[#0D1F2D] text-sm outline-none focus:border-[#0A7E94] focus:ring-2 focus:ring-[rgba(10,126,148,0.15)] transition-all"
                style={{ fontFamily: "'Outfit',sans-serif" }}
              />
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeCategory === cat ? "bg-[#0A7E94] text-white shadow-md shadow-[rgba(10,126,148,0.25)]" : "bg-[#F0F6F8] text-[#2A4A5A] hover:bg-[#EDF8FB] hover:text-[#0A7E94]"}`}
                style={{ fontFamily: "'Outfit',sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-[#5A7A8A] text-sm mb-6" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All Products" ? ` in ${activeCategory}` : ""}
          </p>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-[#5A7A8A] text-lg" style={{ fontFamily: "'DM Serif Display',serif" }}>No products found</p>
              <p className="text-[#5A7A8A] text-sm mt-2" style={{ fontFamily: "'Outfit',sans-serif" }}>Try a different search or category</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("All Products"); }} className="mt-4 text-[#0A7E94] text-sm font-semibold hover:underline" style={{ fontFamily: "'Outfit',sans-serif" }}>Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* Professional advice CTA */}
      <section className="py-12 bg-[#F8FCFD] border-t border-[rgba(10,126,148,0.1)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-[#0D1F2D] text-xl mb-2" style={{ fontFamily: "'DM Serif Display',serif" }}>Not Sure What Your Skin Needs?</h3>
          <p className="text-[#5A7A8A] text-sm mb-5" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Book a Skin Analysis with Scan-X and let our medical team recommend a personalised skincare routine tailored to your specific concerns.
          </p>
          <Link to="/book" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A7E94] text-white text-sm font-semibold rounded-xl hover:bg-[#096B7E] transition-colors" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Book Skin Analysis <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
