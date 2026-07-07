import { API_BASE_URL } from "./config";

export type ApiErrorPayload = { detail?: string } | { message?: string } | unknown;

export class ApiError extends Error {
  status: number;
  payload: ApiErrorPayload;
  constructor(status: number, message: string, payload: ApiErrorPayload) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

export async function apiFetch<T>(
  path: string,
  init: RequestInit & { token?: string } = {},
): Promise<T> {
  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (init.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  if (init.token) headers.set("Authorization", `Bearer ${init.token}`);

  const res = await fetch(url, { ...init, headers });
  const text = await res.text();
  const payload = text ? (safeJson(text) ?? text) : null;
  if (!res.ok) {
    const msg =
      (payload && typeof payload === "object" && payload && "detail" in payload && (payload as any).detail) ||
      `Request failed (${res.status})`;
    throw new ApiError(res.status, String(msg), payload);
  }
  return (payload ?? null) as T;
}

function safeJson(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

