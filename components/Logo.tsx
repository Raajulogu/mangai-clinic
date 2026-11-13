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
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-mauve focus-visible:ring-offset-2 rounded-lg ${className}`}
      aria-label="Mangai Clinic - Back to homepage"
    >
      {/* Brand Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width="44"
          height="44"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Subtle Outer Halo */}
          <circle
            cx="24"
            cy="24"
            r="22"
            fill={isFooter ? "#49303A" : "#F6EBE9"}
            stroke={isFooter ? "#654653" : "#E8C7C4"}
            strokeWidth="1.2"
          />

          {/* Central Blooming Petals / Motherhood Embrace Motif */}
          <path
            d="M24 10C24 10 20 18 20 23C20 26.3137 21.7909 29 24 29C26.2091 29 28 26.3137 28 23C28 18 24 10 24 10Z"
            fill={isFooter ? "#E8C7C4" : "#654653"}
            opacity="0.95"
          />
          <path
            d="M17.5 16.5C17.5 16.5 14 22 15.5 26.5C16.8 30.5 20.5 32 24 32C20.5 32 18.5 28 18.5 24C18.5 20.5 17.5 16.5 17.5 16.5Z"
            fill={isFooter ? "#A9B9A4" : "#A9B9A4"}
            opacity="0.85"
          />
          <path
            d="M30.5 16.5C30.5 16.5 34 22 32.5 26.5C31.2 30.5 27.5 32 24 32C27.5 32 29.5 28 29.5 24C29.5 20.5 30.5 16.5 30.5 16.5Z"
            fill={isFooter ? "#E8C7C4" : "#C99692"}
            opacity="0.85"
          />
          
          {/* Reassuring Inner Seed of Life / Protective Dot */}
          <circle cx="24" cy="22" r="2.2" fill="#FFFFFF" />

          {/* Calming Base Arc */}
          <path
            d="M16 35C19 37.5 29 37.5 32 35"
            stroke={isFooter ? "#E8C7C4" : "#654653"}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif tracking-wider font-semibold uppercase leading-tight ${
              isFooter ? "text-white text-xl" : "text-deep-mauve text-xl"
            }`}
          >
            Mangai
          </span>
          <span
            className={`font-serif text-sm uppercase tracking-widest font-normal ${
              isFooter ? "text-dusty-rose" : "text-warm-gray"
            }`}
          >
            Clinic
          </span>
        </div>

        <span
          className={`text-[11px] font-medium tracking-normal ${
            isFooter ? "text-sage-green-light" : "text-deep-mauve/80"
          }`}
        >
          Women’s Health & Maternity • Salem
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

