import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "@/app/api";
import type { Product, ShopUser } from "@/app/api/types";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  qty: number;
};

type CartPersist = { slug: string; qty: number };

type ShopContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, qty?: number) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clearCart: () => void;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  user: ShopUser | null;
  token: string | null;
  loginWithToken: (token: string) => Promise<void>;
  logout: () => void;
  authOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
  checkoutPending: boolean;
  requestCheckout: () => Promise<void>;
  orderPlaced: boolean;
  resetOrder: () => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

const CART_KEY = "brssc-cart";
const TOKEN_KEY = "brssc-token";
const LEGACY_USER_KEY = "brssc-user";

let scrollLocks = 0;
export function lockBodyScroll() {
  if (++scrollLocks === 1) {
    const sw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (sw > 0) document.body.style.paddingRight = `${sw}px`;
  }
}
export function unlockBodyScroll() {
  if (scrollLocks > 0 && --scrollLocks === 0) {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
}

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/** Persist only slug+qty — never prices/PII in localStorage. */
function readCartPersist(): CartPersist[] {
  const raw = readJSON<unknown>(CART_KEY, []);
  if (!Array.isArray(raw)) return [];
  return raw
    .map((row) => {
      if (!row || typeof row !== "object") return null;
      const r = row as Record<string, unknown>;
      const slug = typeof r.slug === "string" ? r.slug : "";
      const qty = typeof r.qty === "number" ? r.qty : 0;
      if (!slug || qty < 1) return null;
      return { slug, qty };
    })
    .filter((x): x is CartPersist => !!x);
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<ShopUser | null>(null);
  const [token, setToken] = useState<string | null>(() => readJSON<string | null>(TOKEN_KEY, null));
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [checkoutPending, setCheckoutPending] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Strip legacy PII from localStorage once
  useEffect(() => {
    try {
      localStorage.removeItem(LEGACY_USER_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  // Hydrate cart from API using slug+qty only
  useEffect(() => {
    let alive = true;
    const persisted = readCartPersist();
    if (!persisted.length) {
      setHydrated(true);
      return;
    }
    api.products
      .list()
      .then((products) => {
        if (!alive) return;
        const bySlug = new Map(products.map((p) => [p.slug, p]));
        const next: CartItem[] = [];
        for (const row of persisted) {
          const p = bySlug.get(row.slug);
          if (!p) continue;
          next.push({
            slug: p.slug,
            name: p.name,
            price: p.price,
            originalPrice: p.originalPrice,
            image: p.image,
            size: p.size,
            qty: row.qty,
          });
        }
        setItems(next);
      })
      .catch(() => {
        if (alive) setItems([]);
      })
      .finally(() => {
        if (alive) setHydrated(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const slim: CartPersist[] = items.map((i) => ({ slug: i.slug, qty: i.qty }));
    localStorage.setItem(CART_KEY, JSON.stringify(slim));
  }, [items, hydrated]);

  useEffect(() => {
    if (token) localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    else localStorage.removeItem(TOKEN_KEY);
  }, [token]);

  // Session restore — user profile always from API, never LS
  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }
    api.auth
      .me(token)
      .then((me) => setUser(me))
      .catch(() => {
        setToken(null);
        setUser(null);
      });
  }, [token]);

  const addItem = useCallback((product: Product, qty = 1) => {
    setOrderPlaced(false);
    setItems((prev) => {
      const found = prev.find((i) => i.slug === product.slug);
      if (found) {
        return prev.map((i) => (i.slug === product.slug ? { ...i, qty: i.qty + qty } : i));
      }
      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          size: product.size,
          qty,
        },
      ];
    });
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.slug !== slug) : prev.map((i) => (i.slug === slug ? { ...i, qty } : i)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const placeOrderLocal = useCallback(() => {
    setOrderPlaced(true);
    setItems([]);
    setCheckoutPending(false);
  }, []);

  const requestCheckout = useCallback(async () => {
    if (!token) {
      setCheckoutPending(true);
      setAuthOpen(true);
      return;
    }
    await api.orders.create(
      token,
      items.map((i) => ({ slug: i.slug, qty: i.qty })),
    );
    placeOrderLocal();
  }, [token, items, placeOrderLocal]);

  const loginWithToken = useCallback(
    async (t: string) => {
      setToken(t);
      const me = await api.auth.me(t);
      setUser(me);
      setAuthOpen(false);
      if (checkoutPending) {
        await api.orders.create(
          t,
          items.map((i) => ({ slug: i.slug, qty: i.qty })),
        );
        placeOrderLocal();
      }
    },
    [checkoutPending, items, placeOrderLocal],
  );

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo<ShopContextValue>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0);
    return {
      items,
      count,
      subtotal,
      addItem,
      removeItem,
      setQty,
      clearCart,
      cartOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      user,
      token,
      loginWithToken,
      logout,
      authOpen,
      openAuth: () => setAuthOpen(true),
      closeAuth: () => {
        setAuthOpen(false);
        setCheckoutPending(false);
      },
      checkoutPending,
      requestCheckout,
      orderPlaced,
      resetOrder: () => setOrderPlaced(false),
    };
  }, [
    items,
    cartOpen,
    user,
    token,
    authOpen,
    checkoutPending,
    orderPlaced,
    addItem,
    removeItem,
    setQty,
    clearCart,
    loginWithToken,
    logout,
    requestCheckout,
  ]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
