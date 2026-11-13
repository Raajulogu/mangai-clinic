import { Quote, Heart, CheckCircle2 } from "lucide-react";
import { PATIENT_EXPERIENCES } from "@/lib/clinic-data";

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
            Patient Voices &amp; Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-warm-charcoal font-normal">
            Reflections of Care, Compassion &amp; Dignity
          </h2>
          <p className="text-base text-warm-gray leading-relaxed">
            Real experiences from women and families who have visited Mangai Clinic in Salem.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATIENT_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-xs border border-warm-border flex flex-col justify-between relative hover:shadow-sm transition-shadow"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-dusty-rose-light rounded-xl text-deep-mauve">
                  <Quote className="w-5 h-5 text-deep-mauve" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sage-green-light text-sage-green-dark">
                  {exp.highlight}
                </span>
              </div>

              {/* Quote Body */}
              <blockquote className="text-sm text-warm-charcoal/90 leading-relaxed italic mb-6">
                &ldquo;{exp.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="pt-4 border-t border-warm-border/60 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-semibold text-warm-charcoal">
                    {exp.author}
                  </h3>
                  <p className="text-xs text-warm-gray">
                    {exp.location} • {exp.context}
                  </p>
                </div>
                <div className="flex items-center text-deep-mauve/80" title="Verified Patient Review">
                  <CheckCircle2 className="w-4 h-4 text-sage-green-dark" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 p-6 bg-white/70 rounded-2xl border border-warm-border max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-6 text-xs text-warm-gray text-center">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-dusty-rose-dark" />
            <span>Strict Patient Privacy &amp; Dignity</span>
          </div>
          <span className="hidden sm:inline text-warm-border">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sage-green-dark" />
            <span>Zero Commercial Pressure or Unneeded Tests</span>
          </div>
          <span className="hidden sm:inline text-warm-border">•</span>
          <div className="flex items-center gap-2">
            <Quote className="w-4 h-4 text-deep-mauve" />
            <span>Dedicated Time for Every Patient Question</span>
          </div>
        </div>
      </div>
    </section>
  );
}

