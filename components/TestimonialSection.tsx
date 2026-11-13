import { Quote, Heart, CheckCircle2 } from "lucide-react";
import { PATIENT_EXPERIENCES } from "@/lib/clinic-data";

export default function TestimonialSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-warm-ivory border-t border-warm-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
            Patient Voices &amp; Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-charcoal font-normal">
            Reflections of Care, Compassion &amp; Dignity
          </h2>
          <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
            Real experiences from women and families who have visited Mangai Clinic in Salem.
          </p>
        </div>

        {/* Testimonials Grid with Spacious Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATIENT_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-xs border border-warm-border flex flex-col justify-between relative hover:shadow-healthcare-hover transition-all"
            >
              {/* Quote Icon & Highlight Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 bg-dusty-rose-light rounded-2xl text-deep-mauve">
                  <Quote className="w-5 h-5 text-deep-mauve" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sage-green-light text-sage-green-dark">
                  {exp.highlight}
                </span>
              </div>

              {/* Quote Body with Generous Line-Height */}
              <blockquote className="text-sm sm:text-base text-warm-charcoal/90 leading-relaxed italic mb-8">
                &ldquo;{exp.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="pt-5 border-t border-warm-border/70 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-semibold text-warm-charcoal">
                    {exp.author}
                  </h3>
                  <p className="text-xs text-warm-gray mt-0.5">
                    {exp.location} • {exp.context}
                  </p>
                </div>
                <div className="flex items-center text-deep-mauve/80" title="Verified Patient Review">
                  <CheckCircle2 className="w-5 h-5 text-sage-green-dark" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 p-6 sm:p-7 bg-white/80 rounded-3xl border border-warm-border max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-5 text-xs sm:text-sm text-warm-gray text-center">
          <div className="flex items-center gap-2.5">
            <Heart className="w-4 h-4 text-dusty-rose-dark shrink-0" />
            <span>Strict Patient Privacy &amp; Dignity</span>
          </div>
          <span className="hidden sm:inline text-warm-border">•</span>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-sage-green-dark shrink-0" />
            <span>Zero Commercial Pressure or Unneeded Tests</span>
          </div>
          <span className="hidden sm:inline text-warm-border">•</span>
          <div className="flex items-center gap-2.5">
            <Quote className="w-4 h-4 text-deep-mauve shrink-0" />
            <span>Dedicated Time for Every Patient Question</span>
          </div>
        </div>
      </div>
    </section>
  );
}
