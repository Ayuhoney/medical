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

export type ClinicSettings = {
  name: string;
  address: string;
  phone: string;
  fax: string;
  whatsapp: string;
  email: string;
  hoursWeekday: string;
  hoursSaturday: string;
  bookingUrl: string;
  facebook: string;
  instagram: string;
  announcement: string;
  popupEnabled: boolean;
  popupEyebrow: string;
  popupTitle: string;
  popupBody: string;
  vision?: string;
  mission?: string;
  values?: { name: string; desc: string }[];
  storeCategories?: string[];
  timeSlots?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  body: string[];
};

export type TeamMember = {
  id: string;
  kind: "doctor" | "staff";
  name: string;
  role: string;
  qualifications?: string;
  registration?: string;
  bio: string;
  image: string;
  specialties?: string[];
  education?: string[];
  credentials?: string[];
};

export type ServiceItem = {
  id: string;
  category: string;
  serviceId: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  imageKey: string;
  sortOrder: number;
  ctaLabel?: string | null;
  ctaPath?: string | null;
  bookingDesc?: string | null;
  icon?: string | null;
  status?: string;
};

export type OrderItemPayload = {
  slug: string;
  qty: number;
};

