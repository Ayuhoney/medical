import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  ArrowLeft, ArrowRight, Check, ChevronRight, Shield, ShoppingBag,
  Star, Truck, Zap,
} from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/app/data/products";
import { ProductCard } from "@/app/components/store/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"details" | "ingredients" | "usage">("details");
  const [purchased, setPurchased] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

  if (!product) {
    return (
      <section className="section-py section-white min-h-[50vh]">
        <div className="site-container text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <p className="body-text mb-8">This product may no longer be available.</p>
          <Link to="/store" className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E]">
            <ArrowLeft size={14} /> Back to Store
          </Link>
        </div>
      </section>
    );
  }

  const related = getRelatedProducts(product);
  const total = product.price * qty;

  const handleBuyNow = () => {
    setPurchased(true);
    setTimeout(() => setPurchased(false), 4000);
  };

  const handleAddToCart = () => {
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2500);
  };

  return (
    <>
      <section className="product-detail-hero">
        <div className="site-container">
          <nav className="product-breadcrumb" aria-label="Breadcrumb">
            <Link to="/store">Store</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span>{product.category}</span>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-[#0D1F2D]">{product.name}</span>
          </nav>

          <div className="product-detail-grid">
            <div className="product-detail-gallery">
              <div className="product-detail-image-wrap">
                <img src={product.image} alt={product.name} className="product-detail-image" />
                {product.tag && <span className="store-card-tag !top-6 !left-6">{product.tag}</span>}
              </div>
              <div className="product-detail-trust">
                <span><Shield size={14} /> Doctor recommended</span>
                <span><Truck size={14} /> Free shipping $150+</span>
                <span><Check size={14} /> Clinic dispensed</span>
              </div>
            </div>

            <div className="product-detail-info">
              <button
                type="button"
                onClick={() => navigate("/store")}
                className="product-back-link"
              >
                <ArrowLeft size={14} /> Back to all products
              </button>

              <p className="ref-label mb-4">{product.brand}</p>
              <h1 className="product-detail-title">{product.name}</h1>

              <div className="product-detail-rating">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className={s <= Math.round(product.rating) ? "text-[#E8A838] fill-[#E8A838]" : "text-[#E8ECF0] fill-[#E8ECF0]"}
                    />
                  ))}
                </div>
                <span>{product.rating} · {product.reviews} verified reviews</span>
              </div>

              <p className="product-detail-desc">{product.longDesc}</p>

              <ul className="product-benefits">
                {product.benefits.map((b) => (
                  <li key={b}>
                    <Check size={14} className="text-[#0A7E94] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="product-purchase-box">
                <div className="product-price-row">
                  <span className="product-price">${product.price}</span>
                  <span className="product-size-label">{product.size}</span>
                </div>

                <div className="product-qty-row">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#5C7A8A] font-sans">Quantity</span>
                  <div className="product-qty-control">
                    <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
                    <span>{qty}</span>
                    <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
                  </div>
                  <span className="product-total">Total: <strong>${total}</strong></span>
                </div>

                <div className="product-actions">
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className={`product-btn-buy ${purchased ? "is-success" : ""}`}
                  >
                    {purchased ? (
                      <><Check size={16} /> Order Confirmed!</>
                    ) : (
                      <><Zap size={16} /> Buy Now — ${total}</>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={`product-btn-cart ${cartAdded ? "is-added" : ""}`}
                  >
                    <ShoppingBag size={16} />
                    {cartAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>

                {purchased && (
                  <p className="product-success-note">
                    Thank you! Our clinic team will contact you shortly to complete your secure order.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py-sm section-white border-t border-[rgba(10,126,148,0.06)]">
        <div className="site-container">
          <div className="product-tabs">
            {(["details", "ingredients", "usage"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`product-tab ${activeTab === tab ? "is-active" : ""}`}
              >
                {tab === "details" ? "Details" : tab === "ingredients" ? "Ingredients" : "How to Use"}
              </button>
            ))}
          </div>
          <div className="product-tab-panel">
            {activeTab === "details" && (
              <p className="body-text max-w-3xl">{product.longDesc}</p>
            )}
            {activeTab === "ingredients" && (
              <p className="body-text max-w-3xl">{product.ingredients}</p>
            )}
            {activeTab === "usage" && (
              <p className="body-text max-w-3xl">{product.howToUse}</p>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-py-sm section-muted border-t border-[rgba(10,126,148,0.06)]">
          <div className="site-container">
            <div className="section-header-split !mb-8">
              <div>
                <p className="ref-label">You May Also Like</p>
                <h2 className="heading-section text-2xl md:text-3xl">
                  Related <em className="heading-accent">Products</em>
                </h2>
              </div>
              <Link to="/store" className="btn-outline hidden md:inline-flex">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section-py-sm section-white border-t border-[rgba(10,126,148,0.06)]">
        <div className="site-container-narrow text-center">
          <h3 className="font-serif text-[#0D1F2D] text-xl mb-2">Need a Personalised Recommendation?</h3>
          <p className="body-text-sm mb-5 max-w-lg mx-auto">
            Book a Skin Analysis with our medical team and receive a tailored skincare plan using clinic-approved products.
          </p>
          <Link to="/book" className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E]">
            Book Skin Analysis <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
