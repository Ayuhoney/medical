import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "@/app/api";
import type { ClinicSettings } from "@/app/api/types";

const FALLBACK: ClinicSettings = {
  name: "Beach Road Surgery & Skin Clinic",
  address: "",
  phone: "",
  fax: "",
  whatsapp: "",
  email: "",
  hoursWeekday: "",
  hoursSaturday: "",
  bookingUrl: "",
  facebook: "",
  instagram: "",
  announcement: "",
  popupEnabled: false,
  popupEyebrow: "",
  popupTitle: "",
  popupBody: "",
  vision: "",
  mission: "",
  values: [],
  storeCategories: ["All Products"],
  timeSlots: [],
};

type ClinicContextValue = {
  clinic: ClinicSettings;
  loading: boolean;
  hours: string;
};

const ClinicContext = createContext<ClinicContextValue>({
  clinic: FALLBACK,
  loading: true,
  hours: "",
});

export function ClinicProvider({ children }: { children: React.ReactNode }) {
  const [clinic, setClinic] = useState<ClinicSettings>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    api.clinic
      .get()
      .then((data) => {
        if (!alive || !data) return;
        setClinic({ ...FALLBACK, ...data });
      })
      .catch(() => {
        /* keep fallback — never block the site */
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  const value = useMemo(() => {
    const hours =
      clinic.hoursWeekday || clinic.hoursSaturday
        ? `Monday – Friday: ${clinic.hoursWeekday || "—"}${clinic.hoursSaturday ? ` · Saturday: ${clinic.hoursSaturday}` : ""}`
        : "";
    return { clinic, loading, hours };
  }, [clinic, loading]);

  return <ClinicContext.Provider value={value}>{children}</ClinicContext.Provider>;
}

export function useClinic() {
  return useContext(ClinicContext);
}
