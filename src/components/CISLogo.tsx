import Image from "next/image";

interface CISLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  compact?: boolean;
  className?: string;
}

/**
 * Dynamic recreation of the IEEE Computational Intelligence Society
 * VIT Pune chapter logo — faithfully matching the original branding.
 *
 * compact = true  → Horizontal navbar-friendly layout
 * compact = false → Full stacked layout (footer, hero, etc.)
 */
export default function CISLogo({
  variant = "dark",
  size = "md",
  compact = false,
  className = "",
}: CISLogoProps) {
  const isLight = variant === "light";

  const sizeConfig = {
    sm: { imgH: 60, s: 0.65 },
    md: { imgH: 82, s: 0.82 },
    lg: { imgH: 104, s: 1 },
  };
  const cfg = sizeConfig[size];

  // Specific colors mapped from original image for text
  const colors = {
    textDark: isLight ? "#ffffff" : "#1a1a2e",
    textBlue: isLight ? "#ffffff" : "#00629B",
    textCyan: isLight ? "rgba(255,255,255,0.9)" : "#00AEEF",
    textGray: isLight ? "rgba(255,255,255,0.7)" : "#666666",
  };

  /* ── Image Logo ────────────────────────────────────────── */
  const LogoImage = (
    <div
      className={`relative shrink-0 transition-transform duration-300 hover:-translate-y-0.5 ${
        isLight ? "brightness-0 invert" : ""
      }`}
      style={{
        height: cfg.imgH,
        width: Math.round(cfg.imgH * 0.55), // Aspect ratio approx (w/h)
      }}
    >
      <Image
        src="/logo-icon.png"
        alt="VIT & CIS Logo Marks"
        fill
        className="object-contain"
        priority
      />
    </div>
  );

  /* ── COMPACT layout (for navbar) ──────────────────────── */
  if (compact) {
    return (
      <div className={`flex items-center ${className}`} style={{ gap: cfg.s * 12 }}>
        {LogoImage}
        <div className="flex flex-col justify-center leading-none" style={{ gap: cfg.s * 2, height: cfg.imgH }}>
          {/* Line 1: VIT Pune */}
          <span
            className="font-medium uppercase tracking-[0.08em]"
            style={{ fontSize: Math.max(cfg.s * 7.5, 6) }}
          >
            <span className={isLight ? "text-white/60" : "text-gray-400"}>
              Vishwakarma Institute of Technology, Pune
            </span>
          </span>
          {/* Line 2: IEEE Computational Intelligence Society */}
          <div className="flex items-baseline flex-wrap mt-0.5" style={{ gap: cfg.s * 4 }}>
            <span
              className="font-heading font-bold tracking-tight"
              style={{ fontSize: cfg.s * 16, lineHeight: 1, color: colors.textBlue }}
            >
              IEEE
            </span>
            <span
              className="font-heading font-bold tracking-tight"
              style={{ fontSize: cfg.s * 13, lineHeight: 1, color: colors.textDark }}
            >
              Computational Intelligence{" "}
              <span style={{ color: colors.textCyan }}>
                Society
              </span>
              <sup
                className="font-normal border border-current rounded-full px-[1px] ml-0.5"
                style={{ fontSize: cfg.s * 6, color: colors.textGray }}
              >
                R
              </sup>
            </span>
          </div>
        </div>
      </div>
    );
  }

  /* ── FULL layout (footer, about, etc.) ────────────────── */
  return (
    <div className={`flex items-start ${className}`} style={{ gap: cfg.s * 14 }}>
      {LogoImage}
      <div className="flex flex-col leading-none pt-4" style={{ gap: cfg.s * 2 }}>
        {/* VIT Pune sub-header */}
        <span
          className="font-medium uppercase tracking-[0.06em] mb-2"
          style={{ fontSize: cfg.s * 8, lineHeight: 1.3 }}
        >
          <span className={isLight ? "text-white/70" : "text-gray-500"}>
            Vishwakarma Institute of Technology, Pune
          </span>
        </span>
        {/* IEEE */}
        <span
          className="font-heading font-bold tracking-tight mb-1"
          style={{ fontSize: cfg.s * 22, lineHeight: 1, color: colors.textBlue }}
        >
          IEEE
        </span>
        {/* Computational */}
        <span
          className="font-heading font-extrabold tracking-tight"
          style={{ fontSize: cfg.s * 20, lineHeight: 1.05, color: colors.textDark }}
        >
          Computational
        </span>
        {/* Intelligence */}
        <span
          className="font-heading font-extrabold tracking-tight"
          style={{ fontSize: cfg.s * 20, lineHeight: 1.05, color: colors.textDark }}
        >
          Intelligence
        </span>
        {/* Society® */}
        <div className="flex items-start">
          <span
            className="font-heading font-bold tracking-tight"
            style={{ fontSize: cfg.s * 20, lineHeight: 1.05, color: colors.textCyan }}
          >
            Society
          </span>
          <span 
            className="border border-current rounded-full px-1 ml-1 font-medium mt-1" 
            style={{ fontSize: cfg.s * 7, color: colors.textGray }}
          >
            R
          </span>
        </div>
      </div>
    </div>
  );
}
