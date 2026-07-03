import { Link } from "react-router";
import { useId } from "react";

type LogoProps = {
  light?: boolean;
  showWordmark?: boolean;
  markSize?: "sm" | "md" | "lg";
  layout?: "horizontal" | "stacked";
  className?: string;
};

const markSizes = { sm: 34, md: 40, lg: 48 };

/** Cross-axis petals + centre starburst — matches src/assest/Logo.png */
function LogoMarkSvg({ uid, size = 40 }: { uid: string; size?: number }) {
  const petalA = `logo-pa-${uid}`;
  const petalB = `logo-pb-${uid}`;
  const core = `logo-core-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id={petalA} x1="32" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7EC8D8" />
          <stop offset="55%" stopColor="#0A7E94" />
          <stop offset="100%" stopColor="#086B7E" />
        </linearGradient>
        <linearGradient id={petalB} x1="8" y1="32" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7EC8D8" />
          <stop offset="55%" stopColor="#0A7E94" />
          <stop offset="100%" stopColor="#086B7E" />
        </linearGradient>
        <radialGradient
          id={core}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(32 32) scale(14)"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#B8E8F0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0A7E94" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="17" rx="10.5" ry="15" fill={`url(#${petalA})`} />
      <ellipse cx="32" cy="47" rx="10.5" ry="15" fill={`url(#${petalA})`} />
      <ellipse cx="17" cy="32" rx="15" ry="10.5" fill={`url(#${petalB})`} />
      <ellipse cx="47" cy="32" rx="15" ry="10.5" fill={`url(#${petalB})`} />
      <circle cx="32" cy="32" r="13" fill={`url(#${core})`} />
      <g stroke="#FFFFFF" strokeLinecap="round">
        <line x1="32" y1="32" x2="32" y2="14" strokeWidth="1.15" opacity="0.95" />
        <line x1="32" y1="32" x2="32" y2="50" strokeWidth="1.15" opacity="0.95" />
        <line x1="32" y1="32" x2="14" y2="32" strokeWidth="1.15" opacity="0.95" />
        <line x1="32" y1="32" x2="50" y2="32" strokeWidth="1.15" opacity="0.95" />
        <line x1="32" y1="32" x2="24" y2="24" strokeWidth="0.65" opacity="0.55" />
        <line x1="32" y1="32" x2="40" y2="24" strokeWidth="0.65" opacity="0.55" />
        <line x1="32" y1="32" x2="24" y2="40" strokeWidth="0.65" opacity="0.55" />
        <line x1="32" y1="32" x2="40" y2="40" strokeWidth="0.65" opacity="0.55" />
        <line x1="32" y1="32" x2="27" y2="20" strokeWidth="0.45" opacity="0.35" />
        <line x1="32" y1="32" x2="37" y2="20" strokeWidth="0.45" opacity="0.35" />
        <line x1="32" y1="32" x2="27" y2="44" strokeWidth="0.45" opacity="0.35" />
        <line x1="32" y1="32" x2="37" y2="44" strokeWidth="0.45" opacity="0.35" />
        <line x1="32" y1="32" x2="20" y2="27" strokeWidth="0.45" opacity="0.35" />
        <line x1="32" y1="32" x2="20" y2="37" strokeWidth="0.45" opacity="0.35" />
        <line x1="32" y1="32" x2="44" y2="27" strokeWidth="0.45" opacity="0.35" />
        <line x1="32" y1="32" x2="44" y2="37" strokeWidth="0.45" opacity="0.35" />
      </g>
    </svg>
  );
}

function LogoWordmark({ light = false, align = "left" }: { light?: boolean; align?: "left" | "center" }) {
  const color = light ? "text-white" : "text-[#0D1F2D]";
  const sub = light ? "text-white/95" : "text-[#0D1F2D]";
  return (
    <div
      className={`flex flex-col leading-[1.2] ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      <span
        className={`font-sans font-bold text-[13px] sm:text-[14px] tracking-[-0.01em] whitespace-nowrap ${color}`}
      >
        Beach Road Surgery
      </span>
      <span
        className={`font-sans font-normal text-[11.5px] sm:text-[12.5px] tracking-[-0.01em] whitespace-nowrap ${sub}`}
      >
        &amp; Skin Clinic
      </span>
    </div>
  );
}

export function LogoMarkIcon({ size = 36, className = "" }: { size?: number; className?: string }) {
  const uid = useId().replace(/:/g, "");
  return (
    <span className={className}>
      <LogoMarkSvg uid={uid} size={size} />
    </span>
  );
}

export function Logo({
  light = false,
  showWordmark = true,
  markSize = "md",
  layout = "horizontal",
  className = "",
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const size = markSizes[markSize];

  if (layout === "stacked") {
    return (
      <Link
        to="/"
        className={`inline-flex flex-col items-center gap-2 group shrink-0 ${className}`}
        aria-label="Beach Road Surgery & Skin Clinic"
      >
        <LogoMarkSvg uid={uid} size={markSizes.lg} />
        {showWordmark && <LogoWordmark light={light} align="center" />}
      </Link>
    );
  }

  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 group shrink-0 min-w-0 ${className}`}
      aria-label="Beach Road Surgery & Skin Clinic"
    >
      <LogoMarkSvg uid={uid} size={size} />
      {showWordmark && <LogoWordmark light={light} align="left" />}
    </Link>
  );
}

export function LogoStacked({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return <Logo light={light} layout="stacked" showWordmark className={className} />;
}
