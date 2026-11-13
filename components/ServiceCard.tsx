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
    <article className="group bg-white rounded-3xl p-7 sm:p-8 border border-warm-border shadow-xs hover:shadow-md hover:border-dusty-rose transition-all flex flex-col justify-between">
      <div>
        {/* Card Header with Icon */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="p-3.5 rounded-2xl bg-dusty-rose-light text-deep-mauve group-hover:bg-deep-mauve group-hover:text-white transition-colors">
            <IconComponent className="w-7 h-7 transition-transform group-hover:scale-105" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose-light/60 px-3 py-1 rounded-full">
            Specialized Care
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-serif text-2xl font-semibold text-warm-charcoal group-hover:text-deep-mauve transition-colors">
          <Link href={`/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>
        <p className="text-xs font-medium text-deep-mauve/80 mt-1 mb-3">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-warm-gray leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Key Offerings highlights */}
        <div className="space-y-2 mb-6 pt-4 border-t border-warm-border/60">
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-charcoal">
            Key Care Highlights:
          </p>
          <ul className="space-y-1.5">
            {service.keyOfferings.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-warm-gray">
                <Check className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-4 border-t border-warm-border/60">
        <Link
          href={`/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-deep-mauve group-hover:text-deep-mauve-dark transition-colors"
        >
          <span>View Detailed Clinical Care</span>
          <ArrowRight className="w-4 h-4 text-dusty-rose transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

