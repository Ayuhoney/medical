import { useEffect, useRef, type ReactNode } from "react";

/** Reference video: overflow-mask line reveal — translateY(110%)→0, expo-out, no opacity fade */
export function MaskReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "span",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "span" | "div" | "p";
}) {
  return (
    <Tag className={`ref-mask ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      <span className="ref-mask-inner">{children}</span>
    </Tag>
  );
}

/** Triggers reference load sequence on hero + header */
export function useRefEntrance(active = true) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;

    const run = () => {
      requestAnimationFrame(() => {
        el.classList.add("ref-entered");
      });
    };

    /* Match reference: hero sequence starts ~60ms after paint */
    const t = window.setTimeout(run, 60);
    return () => clearTimeout(t);
  }, [active]);

  return ref;
}
