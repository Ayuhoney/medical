import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/app/data/products";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  qty: number;
};

export type ShopUser = {
  name: string;
  email: string;
};

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
  login: (user: ShopUser) => void;
  logout: () => void;
  authOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
  checkoutPending: boolean;
  requestCheckout: () => void;
  orderPlaced: boolean;
  resetOrder: () => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

const CART_KEY = "brssc-cart";
const USER_KEY = "brssc-user";

// Shared body scroll lock with scrollbar-width compensation (prevents layout jump)
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

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readJSON<CartItem[]>(CART_KEY, []));
  const [user, setUser] = useState<ShopUser | null>(() => readJSON<ShopUser | null>(USER_KEY, null));
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [checkoutPending, setCheckoutPending] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_KEY);
  }, [user]);

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

  const placeOrder = useCallback(() => {
    setOrderPlaced(true);
    setItems([]);
    setCheckoutPending(false);
  }, []);

  const requestCheckout = useCallback(() => {
    if (user) {
      placeOrder();
    } else {
      setCheckoutPending(true);
      setAuthOpen(true);
    }
  }, [user, placeOrder]);

  const login = useCallback(
    (u: ShopUser) => {
      setUser(u);
      setAuthOpen(false);
      if (checkoutPending) placeOrder();
    },
    [checkoutPending, placeOrder],
  );

  const logout = useCallback(() => setUser(null), []);

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
      login,
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
  }, [items, cartOpen, user, authOpen, checkoutPending, orderPlaced, addItem, removeItem, setQty, clearCart, login, logout, requestCheckout]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
