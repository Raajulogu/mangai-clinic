import Link from "next/link";
import { Award, CheckCircle, Heart, Stethoscope, ArrowRight } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function DoctorSpotlight() {
  const doctor = CLINIC_INFO.doctor;

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-warm-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Doctor Portrait & Credential Badge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Subtle Background Aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-dusty-rose/40 via-warm-ivory to-sage-green/20 rounded-3xl transform -rotate-1 blur-xs" />

              {/* Card Container */}
              <div className="relative bg-warm-ivory rounded-3xl p-6 sm:p-8 border border-warm-border shadow-sm text-center">
                {/* Doctor Avatar / Portrait Graphic */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full bg-gradient-to-b from-dusty-rose-light to-white p-2 border-2 border-dusty-rose/60 shadow-inner flex items-center justify-center overflow-hidden">
                  {/* Clean, respectful medical professional silhouette / badge */}
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-dusty-rose-light/70 flex items-center justify-center text-deep-mauve mb-2">
                      <Stethoscope className="w-8 h-8 text-deep-mauve" />
                    </div>
                    <span className="font-serif text-xs font-semibold text-deep-mauve uppercase tracking-wider">
                      Consultant
                    </span>
                    <span className="text-[10px] text-warm-gray mt-0.5">
                      Obstetrics & Gynecology
                    </span>
                  </div>
                </div>

                {/* Name & Verified Degrees */}
                <div className="mt-6 space-y-1">
                  <h3 className="font-serif text-2xl font-semibold text-warm-charcoal">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-medium text-deep-mauve">
                    {doctor.qualifications}
                  </p>
                  <p className="text-xs text-warm-gray">
                    {doctor.title}
                  </p>
                </div>

                {/* Verified Medical Council Registration Notice */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-green-light/80 text-sage-green-dark text-xs font-medium">
                  <Award className="w-3.5 h-3.5" />
                  <span>{doctor.registrationNotice}</span>
                </div>

                {/* Fast Consultation Info */}
                <div className="mt-6 pt-5 border-t border-warm-border/80 text-xs text-warm-gray grid grid-cols-2 gap-3 text-left">
                  <div className="bg-white/80 p-2.5 rounded-xl border border-warm-border/50">
                    <span className="block font-semibold text-deep-mauve">Location</span>
                    <span>Angammal Colony, Salem</span>
                  </div>
                  <div className="bg-white/80 p-2.5 rounded-xl border border-warm-border/50">
                    <span className="block font-semibold text-deep-mauve">Consultation</span>
                    <span>Unhurried &amp; Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Practice (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Meet Your Doctor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-warm-charcoal font-normal leading-tight">
                A Reassuring, Patient-First Approach to Women&apos;s Health
              </h2>
            </div>

            <p className="text-base text-warm-gray leading-relaxed">
              At Mangai Clinic in Salem, medical care begins with listening. <strong>Dr. R. M. Sornam Chokkalingam</strong> believes that understanding a woman&apos;s unique bodily rhythms, concerns, family context, and anxieties is essential to delivering truly effective clinical care.
            </p>

            {/* Doctor's Philosophy Quote Box */}
            <blockquote className="border-l-3 border-deep-mauve pl-5 py-2 italic text-sm text-warm-charcoal/90 bg-dusty-rose-light/30 rounded-r-2xl">
              &ldquo;{doctor.philosophy}&rdquo;
            </blockquote>

            {/* Key Clinical Focus Areas */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-charcoal flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-deep-mauve" />
                <span>Core Areas of Clinical Practice</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-warm-gray">
                {doctor.areasOfPractice.slice(0, 4).map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-warm-ivory/50 p-2.5 rounded-lg border border-warm-border/40">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0 mt-0.5" />
                    <span className="font-medium text-warm-charcoal/90">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deep-mauve hover:bg-deep-mauve-dark text-white text-sm font-medium transition-all shadow-xs group"
              >
                <span>Read Full Doctor Profile</span>
                <ArrowRight className="w-4 h-4 text-dusty-rose transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={CLINIC_INFO.contact.healthplixBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-warm-border hover:border-deep-mauve text-warm-charcoal hover:text-deep-mauve text-sm font-medium transition-all"
              >
                <span>Schedule a Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

