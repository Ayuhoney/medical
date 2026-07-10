import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { X } from "lucide-react";
import { useClinic } from "@/app/clinic/ClinicContext";
import { LogoMarkIcon } from "./Logo";
import { FIRST_VISIT_KEY, openFirstVisitGate } from "@/app/hooks/useFirstVisitGate";

type Step = "intro" | "modal";

export default function FirstVisitExperience() {
  const { pathname } = useLocation();
  const { clinic: CLINIC } = useClinic();
  const [active, setActive] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [closing, setClosing] = useState(false);
  const settings = CLINIC;

  useEffect(() => {
    if (sessionStorage.getItem(FIRST_VISIT_KEY)) {
      openFirstVisitGate();
      return;
    }
    if (pathname !== "/") {
      openFirstVisitGate();
      return;
    }

    setActive(true);
    setStep("intro");
    setClosing(false);
    document.body.classList.add("first-visit-active");
    document.body.style.overflow = "hidden";

    const toModal = window.setTimeout(() => setStep("modal"), 2400);
    return () => {
      clearTimeout(toModal);
      document.body.classList.remove("first-visit-active");
      document.body.style.overflow = "";
    };
  }, [pathname]);

  const dismiss = useCallback(() => {
    if (closing) return;
    setClosing(true);
    sessionStorage.setItem(FIRST_VISIT_KEY, "1");
    document.body.classList.remove("first-visit-active");
    openFirstVisitGate();

    window.setTimeout(() => {
      setActive(false);
      document.body.style.overflow = "";
    }, 700);
  }, [closing]);

  useEffect(() => {
    if (!active || step !== "modal" || closing) return;

    // Auto-dismiss if we loaded settings and popup is disabled
    if (settings && !settings.popupEnabled) {
      dismiss();
      return;
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step, closing, dismiss, settings]);

  if (!active) return null;

  return (
    <div
      className={`first-visit-layer${closing ? " first-visit-layer--closing" : ""}`}
      data-step={step}
      aria-hidden={closing}
    >
      <div className="first-visit-backdrop" />

      <div className={`first-visit-intro${step === "modal" ? " first-visit-intro--out" : ""}`}>
        <div className="first-visit-intro-glow" />
        <LogoMarkIcon size={56} className="first-visit-logo" />
        <div className="first-visit-wordmark">
          <span className="first-visit-name">Beach Road Surgery</span>
          <span className="first-visit-sub">&amp; Skin Clinic</span>
        </div>
        <div className="first-visit-bar" role="progressbar" aria-label="Loading">
          <span className="first-visit-bar-fill" />
        </div>
      </div>

      <div
        className={`first-visit-modal${step === "modal" ? " first-visit-modal--in" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        onClick={step === "modal" ? dismiss : undefined}
      >
        <div
          className="first-visit-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="first-visit-close"
            onClick={dismiss}
            aria-label="Close announcement"
          >
            <X size={16} strokeWidth={1.75} />
          </button>

          <p className="first-visit-eyebrow">
            {settings?.popupEyebrow || "New Patients Welcome"}
          </p>

          <h2 id="welcome-title" className="first-visit-title">
            {settings?.popupTitle || "We are now accepting new patients for a limited time"}
          </h2>

          <p className="first-visit-body" style={{ whiteSpace: "pre-wrap" }}>
            {settings?.popupBody || (
              <>
                To secure your place, call our reception on{" "}
                <a href={`tel:${(settings.phone || "").replace(/\s/g, "")}`} className="first-visit-link">
                  {settings.phone}
                </a>{" "}
                or email us at{" "}
                <a href={`mailto:${settings.email}`} className="first-visit-link">
                  {settings.email}
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
