import Link from "next/link";
import { Baby, HeartPulse, Sparkles, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { ServiceItem } from "@/lib/clinic-data";

interface ServiceCardProps {
  service: ServiceItem;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Baby: Baby,
  HeartPulse: HeartPulse,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || HeartPulse;

  return (
    <article className="group bg-white rounded-3xl p-7 sm:p-9 border border-warm-border shadow-xs hover:shadow-healthcare-hover hover:border-dusty-rose transition-all flex flex-col justify-between">
      <div className="space-y-5">
        {/* Card Header with Icon */}
        <div className="flex items-center justify-between gap-4">
          <div className="p-4 rounded-2xl bg-dusty-rose-light text-deep-mauve group-hover:bg-deep-mauve group-hover:text-white transition-colors">
            <IconComponent className="w-7 h-7 transition-transform group-hover:scale-105" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose-light/70 px-3.5 py-1 rounded-full">
            Specialized Care
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-charcoal group-hover:text-deep-mauve transition-colors">
            <Link href={`/${service.slug}`} className="focus:outline-none">
              {service.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm font-medium text-deep-mauve/80 mt-1">
            {service.tagline}
          </p>
        </div>

        {/* Description with Breathing Room */}
        <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Key Offerings highlights */}
        <div className="space-y-2.5 pt-4 border-t border-warm-border/60">
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-charcoal">
            Key Care Highlights:
          </p>
          <ul className="space-y-2">
            {service.keyOfferings.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-gray">
                <Check className="w-4 h-4 text-sage-green-dark shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Link with Comfortable Touch Target */}
      <div className="pt-6 mt-6 border-t border-warm-border/60">
        <Link
          href={`/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-deep-mauve group-hover:text-deep-mauve-dark transition-colors py-1"
        >
          <span>View Detailed Clinical Care</span>
          <ArrowRight className="w-4 h-4 text-dusty-rose transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
