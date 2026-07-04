import { useState } from "react";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { IMAGES } from "@/app/constants";
import { PageHero } from "@/app/components/ui";
import { Link } from "react-router";
import { products, STORE_CATEGORIES } from "@/app/data/products";
import { ProductCard } from "@/app/components/store/ProductCard";

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All Products" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <PageHero
        image={IMAGES.aestheticMask}
        tag="ONLINE STORE"
        title={<>Clinical Skin Care <br /><em>Products</em></>}
        subtitle="Medical-grade skincare recommended and dispensed by our clinic."
      />

      <section className="store-banner">
        <div className="site-container">
          <div className="store-banner-inner">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-[#0A7E94]" />
                <span className="ref-label !mb-0">Clinic Exclusive</span>
              </div>
              <h2 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-1">
                Cosmetic Skin Solutions Australia
              </h2>
              <p className="body-text-sm max-w-xl">
                Doctor-approved, medical-grade products — curated for results you can trust.
              </p>
            </div>
            <div className="store-banner-badges">
              <span className="store-banner-badge">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Free shipping over $150
              </span>
              <span className="store-banner-badge">🔒 Secure checkout</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py-sm section-white min-h-[60vh]">
        <div className="site-container">
          <div className="store-toolbar">
            <div className="store-search">
              <Search size={16} className="store-search-icon" />
              <input
                type="text"
                placeholder="Search products or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="store-search-input"
              />
            </div>
            <p className="store-count">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="store-filters">
            {STORE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`store-filter-chip ${activeCategory === cat ? "is-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="store-grid">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-[#5A7A8A] text-lg">No products found</p>
              <p className="body-text-sm mt-2">Try a different search or category</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(""); setActiveCategory("All Products"); }}
                className="link-arrow mt-4"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section-py-sm section-muted border-t border-[rgba(10,126,148,0.08)]">
        <div className="site-container-narrow text-center">
          <h3 className="font-serif text-[#0D1F2D] text-xl mb-2">Not Sure What Your Skin Needs?</h3>
          <p className="body-text-sm mb-5 max-w-lg mx-auto">
            Book a Skin Analysis with Scan-X and let our medical team recommend a personalised skincare routine tailored to your specific concerns.
          </p>
          <Link to="/book" className="btn-primary-sm">
            Book Skin Analysis <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
