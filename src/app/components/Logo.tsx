import { Link } from "react-router";
import logoPng from "../../assest/Logo.png";

type LogoProps = {
  light?: boolean;
  showWordmark?: boolean;
  markSize?: "sm" | "md" | "lg";
  layout?: "horizontal" | "stacked";
  className?: string;
};

const markSizes = { sm: 34, md: 40, lg: 48 };

function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src={logoPng}
      alt=""
      width={size}
      height={size}
      aria-hidden
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

function LogoWordmark({ light = false, align = "left" }: { light?: boolean; align?: "left" | "center" }) {
  const color = light ? "text-white" : "text-[#0D1F2D]";
  const sub = light ? "text-white/95" : "text-[#0D1F2D]";
  return (
    <div
      className={`flex flex-col leading-[1.2] logo-wordmark ${align === "center" ? "items-center text-center" : "items-start"}`}
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
  return <LogoMark size={size} className={className} />;
}

export function Logo({
  light = false,
  showWordmark = true,
  markSize = "md",
  layout = "horizontal",
  className = "",
}: LogoProps) {
  const size = markSizes[markSize];

  if (layout === "stacked") {
    return (
      <Link
        to="/"
        className={`inline-flex flex-col items-center gap-2 group shrink-0 ${className}`}
        aria-label="Beach Road Surgery & Skin Clinic"
      >
        <LogoMark size={markSizes.lg} />
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
      <LogoMark size={size} />
      {showWordmark && <LogoWordmark light={light} align="left" />}
    </Link>
  );
}

export function LogoStacked({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return <Logo light={light} layout="stacked" showWordmark className={className} />;
}
