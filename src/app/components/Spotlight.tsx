import { useCallback } from "react";

type SpotlightHandlers = {
  onPointerMove: React.PointerEventHandler<HTMLElement>;
  onPointerLeave: React.PointerEventHandler<HTMLElement>;
};

/**
 * Adds CSS variables for a cursor-following spotlight:
 * --spot-x / --spot-y are in percentages (0–100).
 */
export function useSpotlight(): SpotlightHandlers {
  const onPointerMove = useCallback<React.PointerEventHandler<HTMLElement>>((e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / Math.max(1, r.width)) * 100;
    const y = ((e.clientY - r.top) / Math.max(1, r.height)) * 100;
    el.style.setProperty("--spot-x", `${x.toFixed(2)}%`);
    el.style.setProperty("--spot-y", `${y.toFixed(2)}%`);
    el.style.setProperty("--spot-on", "1");
  }, []);

  const onPointerLeave = useCallback<React.PointerEventHandler<HTMLElement>>((e) => {
    const el = e.currentTarget;
    el.style.setProperty("--spot-on", "0");
  }, []);

  return { onPointerMove, onPointerLeave };
}

