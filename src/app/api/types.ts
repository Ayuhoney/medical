export type Product = {
  id: string;
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
  status?: "active" | "inactive";
  inStock?: boolean;
  inventory?: number | null;
};

export type ShopUser = {
  id: string;
  name: string;
  email: string;
};

export type TokenResponse = { accessToken: string };

export type OrderItem = {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  qty: number;
};

export type OrderResponse = {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  status: string;
  createdAt: string;
};

