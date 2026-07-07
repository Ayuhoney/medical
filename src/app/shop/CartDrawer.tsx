import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, ChevronRight, Minus, Plus, ShoppingBag, Trash2, Truck, X } from "lucide-react";
import { lockBodyScroll, unlockBodyScroll, useShop } from "./ShopContext";

const FREE_SHIPPING_AT = 150;

export function CartDrawer() {
  const { items, subtotal, cartOpen, closeCart, setQty, removeItem, requestCheckout, orderPlaced, resetOrder, user } = useShop();
  const [promo, setPromo] = useState("");

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    lockBodyScroll();
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockBodyScroll();
    };
  }, [cartOpen, closeCart]);

  const remaining = FREE_SHIPPING_AT - subtotal;

  return (
    <div className={`fixed inset-0 z-[90] ${cartOpen ? "" : "pointer-events-none"}`} aria-hidden={!cartOpen}>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-[#0D1F2D]/45 transition-opacity duration-[400ms] ease-out ${cartOpen ? "opacity-100" : "opacity-0"}`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 h-full w-full max-w-[420px] bg-white shadow-2xl flex flex-col will-change-transform transition-transform duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(10,126,148,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EDF8FB] flex items-center justify-center">
              <ShoppingBag size={16} className="text-[#0A7E94]" />
            </div>
            <div>
              <h2 className="font-serif text-[#0D1F2D] text-lg leading-none">Shopping Cart</h2>
              <p className="text-[#5C7A8A] text-[11px] font-sans mt-1">
                {items.reduce((n, i) => n + i.qty, 0)} item{items.reduce((n, i) => n + i.qty, 0) !== 1 ? "s" : ""}
                {user ? ` · ${user.name.split(" ")[0]}` : ""}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#5C7A8A] hover:bg-[#EDF8FB] hover:text-[#0A7E94] transition-colors"
          >
            <X size={17} />
          </button>
        </div>

        {orderPlaced ? (
          /* Order success */
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#EDF8FB] flex items-center justify-center mb-5">
              <CheckCircle size={30} className="text-[#0A7E94]" />
            </div>
            <h3 className="font-serif text-[#0D1F2D] text-xl mb-2">Order Request Received!</h3>
            <p className="body-text-sm mb-6">
              Thank you{user ? `, ${user.name.split(" ")[0]}` : ""}. Our clinic team will contact you shortly to confirm your order, payment and delivery.
            </p>
            <button type="button" onClick={() => { resetOrder(); closeCart(); }} className="btn-primary-sm">
              Continue Shopping <ArrowRight size={13} />
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#F4F8FA] flex items-center justify-center mb-5">
              <ShoppingBag size={26} className="text-[#9AB0BA]" />
            </div>
            <h3 className="font-serif text-[#0D1F2D] text-lg mb-2">Your cart is empty</h3>
            <p className="body-text-sm mb-6">Browse our clinical skin care range to get started.</p>
            <Link to="/store" onClick={closeCart} className="btn-primary-sm">
              Visit the Store <ArrowRight size={13} />
            </Link>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="px-6 pt-4">
              <div className="flex items-center gap-2 text-[11px] font-sans text-[#2A4A5A] mb-2">
                <Truck size={13} className="text-[#0A7E94]" />
                {remaining > 0 ? (
                  <span>
                    Add <strong className="text-[#0A7E94]">${remaining.toFixed(2)}</strong> more for free shipping
                  </span>
                ) : (
                  <span className="text-[#0A7E94] font-semibold">You've unlocked free shipping! 🎉</span>
                )}
              </div>
              <div className="h-1.5 rounded-full bg-[#EDF8FB] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0A7E94] to-[#7EC8D8] transition-all duration-500"
                  style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_AT) * 100)}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={item.slug} className="flex gap-4 p-3 rounded-2xl border border-[rgba(10,126,148,0.08)] bg-white hover:border-[rgba(10,126,148,0.2)] transition-colors">
                  <Link to={`/store/${item.slug}`} onClick={closeCart} className="w-[72px] h-[72px] rounded-xl bg-[#F4F8FA] overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link to={`/store/${item.slug}`} onClick={closeCart} className="text-[#0D1F2D] text-[12.5px] font-semibold font-sans leading-snug hover:text-[#0A7E94] transition-colors line-clamp-2">
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[#9AB0BA] hover:text-red-500 transition-colors shrink-0 mt-0.5"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-[#9AB0BA] text-[10px] font-sans mt-0.5">{item.size}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center rounded-full border border-[rgba(10,126,148,0.15)] overflow-hidden">
                        <button type="button" onClick={() => setQty(item.slug, item.qty - 1)} aria-label="Decrease quantity" className="w-7 h-7 flex items-center justify-center text-[#5C7A8A] hover:bg-[#EDF8FB] transition-colors">
                          <Minus size={11} />
                        </button>
                        <span className="w-7 text-center text-[12px] font-semibold text-[#0D1F2D] font-sans">{item.qty}</span>
                        <button type="button" onClick={() => setQty(item.slug, item.qty + 1)} aria-label="Increase quantity" className="w-7 h-7 flex items-center justify-center text-[#5C7A8A] hover:bg-[#EDF8FB] transition-colors">
                          <Plus size={11} />
                        </button>
                      </div>
                      <div className="text-right">
                        {item.originalPrice != null && item.originalPrice > item.price && (
                          <span className="text-[#9AB0BA] text-[10px] line-through mr-1 font-sans">${(item.originalPrice * item.qty).toFixed(2)}</span>
                        )}
                        <span className="text-[#0D1F2D] text-[13px] font-bold font-sans">${(item.price * item.qty).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[rgba(10,126,148,0.1)] px-6 py-5 space-y-4 bg-[#FBFDFE]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Promo code"
                  className="flex-1 h-10 px-4 rounded-full border border-[rgba(10,126,148,0.15)] bg-white text-[12px] font-sans focus:outline-none focus:border-[#0A7E94] transition-colors"
                />
                <button type="button" className="h-10 px-4 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#0A7E94] hover:bg-[#EDF8FB] transition-colors font-sans">
                  Apply
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5C7A8A] text-[12px] font-sans">Subtotal</span>
                <span className="font-serif text-[#0D1F2D] text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[#9AB0BA] text-[10.5px] font-sans">Shipping & taxes calculated at checkout. {!user && "Sign in required to check out."}</p>
              <button
                type="button"
                onClick={requestCheckout}
                className="w-full h-12 rounded-full bg-[#0A7E94] hover:bg-[#086B7E] text-white text-[13px] font-semibold font-sans flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-[#0A7E94]/20"
              >
                Checkout <ChevronRight size={15} />
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
