import { Link } from "react-router";
import { ArrowUpRight, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/app/api/types";
import { useShop } from "@/app/shop/ShopContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useShop();
  const outOfStock = product.inStock === false;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (outOfStock) return;
    addItem(product, 1);
  };

  return (
    <Link to={`/store/${product.slug}`} className="store-card group block">
      <div className="store-card-media">
        <img
          src={product.image}
          alt={product.name}
          className="store-card-img"
          style={outOfStock ? { filter: "grayscale(0.7)", opacity: 0.75 } : undefined}
        />
        <div className="store-card-media-overlay" aria-hidden />
        {outOfStock ? (
          <span className="store-card-tag" style={{ background: "#B42318", color: "#fff" }}>
            Out of Stock
          </span>
        ) : (
          product.tag && <span className="store-card-tag">{product.tag}</span>
        )}
        <span className="store-card-view">
          View Details <ArrowUpRight size={14} />
        </span>
      </div>

      <div className="store-card-body">
        <div className="store-card-brand">
          <span className="store-card-brand-line" aria-hidden />
          {product.brand}
        </div>
        <h3 className="store-card-title">{product.name}</h3>
        <p className="store-card-desc">{product.desc}</p>

        {product.rating != null && (
          <div className="store-card-rating">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={11}
                  className={s <= Math.round(product.rating!) ? "text-[#E8A838] fill-[#E8A838]" : "text-[#E8ECF0] fill-[#E8ECF0]"}
                />
              ))}
            </div>
            <span className="store-card-reviews">{product.rating} · {product.reviews ?? 0} reviews</span>
          </div>
        )}

        <div className="store-card-footer">
          <div>
            {product.originalPrice != null && product.originalPrice > product.price && (
              <span className="text-[#9AB0BA] text-xs line-through mr-1.5 font-sans">${product.originalPrice}</span>
            )}
            <span className="store-card-price">${product.price}</span>
            <span className="store-card-size">{product.size}</span>
          </div>
          <button
            type="button"
            onClick={handleQuickAdd}
            className="store-card-add"
            disabled={outOfStock}
            style={outOfStock ? { opacity: 0.45, cursor: "not-allowed" } : undefined}
            aria-label={outOfStock ? `${product.name} is out of stock` : `Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} />
            <span>{outOfStock ? "Out of Stock" : "Add to Cart"}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
