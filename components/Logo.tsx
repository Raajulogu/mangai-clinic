import Link from "next/link";

interface LogoProps {
  className?: string;
  showTamilSubtitle?: boolean;
  variant?: "header" | "footer" | "hero";
}

export default function Logo({
  className = "",
  showTamilSubtitle = true,
  variant = "header",
}: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-mauve focus-visible:ring-offset-2 rounded-xl ${className}`}
      aria-label="Mangai Clinic Salem - Home"
    >
      {/* Custom Designed Brand Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width="48"
          height="48"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`emblemMauve-${variant}`} x1="20" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isFooter ? "#E8C7C4" : "#845D6D"} />
              <stop offset="60%" stopColor={isFooter ? "#F2D8D6" : "#654653"} />
              <stop offset="100%" stopColor={isFooter ? "#FFFFFF" : "#49303A"} />
            </linearGradient>
            <linearGradient id={`emblemRose-${variant}`} x1="30" y1="20" x2="90" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isFooter ? "#F7EFEB" : "#F2D8D6"} />
              <stop offset="100%" stopColor={isFooter ? "#C99692" : "#C99692"} />
            </linearGradient>
            <linearGradient id={`emblemSage-${variant}`} x1="40" y1="30" x2="80" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isFooter ? "#E4ECE2" : "#C5D3C1"} />
              <stop offset="100%" stopColor={isFooter ? "#A9B9A4" : "#7B9375"} />
            </linearGradient>
            <radialGradient id={`emblemHalo-${variant}`} cx="60" cy="60" r="54" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={isFooter ? "#4A333E" : "#FBF5EF"} stopOpacity={isFooter ? "0.95" : "0.95"} />
              <stop offset="85%" stopColor={isFooter ? "#3C2932" : "#F5EAE6"} stopOpacity={isFooter ? "0.8" : "0.7"} />
              <stop offset="100%" stopColor={isFooter ? "#2E2026" : "#EADBCE"} stopOpacity={isFooter ? "0.6" : "0.5"} />
            </radialGradient>
          </defs>

          {/* Outer Protective Warm Canvas */}
          <circle
            cx="60"
            cy="60"
            r="56"
            fill={`url(#emblemHalo-${variant})`}
            stroke={isFooter ? "#654653" : "#E8DDD2"}
            strokeWidth="1.5"
          />
          <circle
            cx="60"
            cy="60"
            r="51"
            fill="none"
            stroke={isFooter ? "#845D6D" : "#E8C7C4"}
            strokeWidth="0.8"
            strokeDasharray="2 3"
            opacity={isFooter ? "0.4" : "0.6"}
          />

          {/* Botanical Sage Leaves (Flanking Base - Healing & Vitality) */}
          <path
            d="M60 88 C45 84 32 72 34 58 C36 48 46 54 52 64 C56 72 59 82 60 88 Z"
            fill={`url(#emblemSage-${variant})`}
            opacity="0.85"
          />
          <path
            d="M60 88 C75 84 88 72 86 58 C84 48 74 54 68 64 C64 72 61 82 60 88 Z"
            fill={`url(#emblemSage-${variant})`}
            opacity="0.85"
          />

          {/* Outer Flowing Embrace Petals (The 'M' of Mangai & Maternal Protective Arms) */}
          <path
            d="M60 92 C46 90 28 78 28 54 C28 36 44 26 52 38 C56 44 58 54 60 62 C56 50 50 36 42 36 C34 36 34 48 36 58 C38 72 50 82 60 84 Z"
            fill={`url(#emblemMauve-${variant})`}
          />
          <path
            d="M60 92 C74 90 92 78 92 54 C92 36 76 26 68 38 C64 44 62 54 60 62 C64 50 70 36 78 36 C86 36 86 48 84 58 C82 72 70 82 60 84 Z"
            fill={`url(#emblemMauve-${variant})`}
          />

          {/* Inner Blooming Petals / Mother-Child Arc (Dusty Rose) */}
          <path
            d="M60 76 C52 74 42 66 42 52 C42 40 50 34 56 42 C58 45 59 52 60 58 C57 50 54 42 50 42 C46 42 46 48 48 54 C50 62 56 68 60 70 Z"
            fill={`url(#emblemRose-${variant})`}
          />
          <path
            d="M60 76 C68 74 78 66 78 52 C78 40 70 34 64 42 C62 45 61 52 60 58 C63 50 66 42 70 42 C74 42 74 48 72 54 C70 62 64 68 60 70 Z"
            fill={`url(#emblemRose-${variant})`}
          />

          {/* Central Seed of Life / Delicate Blooming Bud */}
          <path
            d="M60 30 C58 38 54 48 56 56 C57 60 60 63 60 63 C60 63 63 60 64 56 C66 48 62 38 60 30 Z"
            fill={`url(#emblemMauve-${variant})`}
          />

          {/* Nurturing Center Spark */}
          <circle cx="60" cy="46" r="2.5" fill={isFooter ? "#4A333E" : "#FFFFFF"} />
          <circle cx="60" cy="27" r="1.5" fill={isFooter ? "#E8C7C4" : "#654653"} />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif tracking-[0.14em] font-semibold uppercase leading-tight ${
              isFooter ? "text-white text-xl sm:text-2xl" : "text-deep-mauve text-xl sm:text-2xl"
            }`}
          >
            Mangai
          </span>
          <span
            className={`font-serif text-xs sm:text-sm uppercase tracking-[0.2em] font-normal ${
              isFooter ? "text-dusty-rose" : "text-warm-gray"
            }`}
          >
            Clinic
          </span>
        </div>

        <span
          className={`text-[10.5px] sm:text-[11px] font-semibold tracking-normal mt-0.5 ${
            isFooter ? "text-sage-green-light" : "text-deep-mauve/85"
          }`}
        >
          Women&apos;s Health &amp; Maternity • Salem
        </span>

        {showTamilSubtitle && (
          <span
            className={`text-[10px] tracking-wide font-normal ${
              isFooter ? "text-white/60" : "text-warm-gray/80"
            }`}
          >
            மங்கை கிளினிக் • சேலம்
          </span>
        )}
      </div>
    </Link>
  );
}
