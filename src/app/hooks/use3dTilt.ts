import { useRef } from "react";

export function use3dTilt(intensity = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02) translateZ(6px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0)";
    }
  };

  return { ref, onMouseMove, onMouseLeave };
}
