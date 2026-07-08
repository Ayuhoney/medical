import { apiFetch } from "./http";
import type { OrderItem, OrderResponse, Product, ShopUser, TokenResponse } from "./types";
import { resolveProductImage } from "./resolveProductImage";

function normalizeProduct(p: Product): Product {
  return { ...p, image: resolveProductImage(p.image) };
}

export const api = {
  products: {
    list: (params?: { category?: string; q?: string }) => {
      const qs = new URLSearchParams();
      if (params?.category) qs.set("category", params.category);
      if (params?.q) qs.set("q", params.q);
      const suffix = qs.toString() ? `?${qs.toString()}` : "";
      return apiFetch<Product[]>(`/api/products${suffix}`).then((arr) => arr.map(normalizeProduct));
    },
    bySlug: (slug: string) =>
      apiFetch<Product>(`/api/products/${encodeURIComponent(slug)}`).then(normalizeProduct),
  },
  auth: {
    register: (body: { name: string; email: string; password: string }) =>
      apiFetch<TokenResponse>(`/api/auth/register`, { method: "POST", body: JSON.stringify(body) }),
    login: (body: { email: string; password: string }) =>
      apiFetch<TokenResponse>(`/api/auth/login`, { method: "POST", body: JSON.stringify(body) }),
    me: (token: string) => apiFetch<ShopUser>(`/api/auth/me`, { method: "GET", token }),
  },
  orders: {
    create: (token: string, items: OrderItem[]) =>
      apiFetch<OrderResponse>(`/api/orders`, { method: "POST", token, body: JSON.stringify({ items }) }),
  },
  contact: {
    submit: (body: { name: string; email: string; phone?: string; subject?: string; message: string }) =>
      apiFetch<{ ok: true; id: string }>(`/api/contact`, { method: "POST", body: JSON.stringify(body) }),
  },
  track: (path: string) => {
    const KEY = "brssc-visitor-id";
    let visitorId = "";
    try {
      visitorId = localStorage.getItem(KEY) || "";
      if (!visitorId) {
        visitorId = `v_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
        localStorage.setItem(KEY, visitorId);
      }
    } catch {
      visitorId = "anon";
    }
    return apiFetch(`/api/track`, {
      method: "POST",
      body: JSON.stringify({ path, referrer: document.referrer || "", visitorId }),
      keepalive: true,
    }).catch(() => undefined); // analytics must never break the site
  },
  appointments: {
    submit: (body: {
      service: string;
      doctor: string;
      date: string;
      time: string;
      name: string;
      email?: string;
      phone: string;
      dob?: string;
      notes?: string;
    }) => apiFetch<{ ok: true; id: string }>(`/api/appointments`, { method: "POST", body: JSON.stringify(body) }),
  },
};

