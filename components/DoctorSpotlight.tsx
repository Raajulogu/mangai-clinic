import Link from "next/link";
import { Award, CheckCircle, Heart, Stethoscope, ArrowRight, Clock, MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function DoctorSpotlight() {
  const doctor = CLINIC_INFO.doctor;

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-y border-warm-border/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Doctor Monograph & Credentials (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Subtle Ambient Aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-dusty-rose/30 via-warm-ivory to-sage-green/20 rounded-3xl transform -rotate-1 blur-xs" />

              {/* Card Container */}
              <div className="relative bg-warm-ivory rounded-3xl p-7 sm:p-9 border border-warm-border shadow-healthcare text-center space-y-6">
                {/* Doctor Avatar Badge with Generous Margins */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto rounded-full bg-gradient-to-b from-dusty-rose-light to-white p-2.5 border-2 border-dusty-rose/60 shadow-inner flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-dusty-rose-light flex items-center justify-center text-deep-mauve mb-2">
                      <Stethoscope className="w-7 h-7 text-deep-mauve" />
                    </div>
                    <span className="font-serif text-xs font-semibold text-deep-mauve uppercase tracking-wider">
                      Consultant
                    </span>
                    <span className="text-[10px] text-warm-gray mt-0.5">
                      Obstetrics &amp; Gynecology
                    </span>
                  </div>
                </div>

                {/* Name & Verified Degrees */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-charcoal">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-semibold text-deep-mauve">
                    {doctor.qualifications}
                  </p>
                  <p className="text-xs text-warm-gray">
                    {doctor.title}
                  </p>
                </div>

                {/* Verified Medical Council Notice */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-green-light text-sage-green-dark text-xs font-medium">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{doctor.registrationNotice}</span>
                </div>

                {/* Consultation Details */}
                <div className="pt-5 border-t border-warm-border/80 text-xs text-warm-gray grid grid-cols-2 gap-3 text-left">
                  <div className="bg-white p-3 rounded-2xl border border-warm-border/60 space-y-0.5">
                    <span className="flex items-center gap-1 font-semibold text-deep-mauve">
                      <MapPin className="w-3 h-3 text-deep-mauve" />
                      <span>Clinic</span>
                    </span>
                    <span className="text-warm-gray text-[11px] block">Angammal Colony, Salem</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-warm-border/60 space-y-0.5">
                    <span className="flex items-center gap-1 font-semibold text-deep-mauve">
                      <Clock className="w-3 h-3 text-deep-mauve" />
                      <span>Visits</span>
                    </span>
                    <span className="text-warm-gray text-[11px] block">Unhurried &amp; Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Practice (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center sm:text-left">
            <div className="space-y-3">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Meet Your Doctor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-charcoal font-normal leading-tight">
                A Reassuring, Patient-First Approach to Women&apos;s Health
              </h2>
            </div>

            <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
              At Mangai Clinic in Salem, medical care begins with listening. <strong>Dr. R. M. Sornam Chokkalingam</strong> believes that understanding a woman&apos;s unique bodily rhythms, concerns, family context, and anxieties is essential to delivering truly effective clinical care.
            </p>

            {/* Doctor's Philosophy Quote Box with Breathing Room */}
            <blockquote className="border-l-4 border-deep-mauve pl-6 py-4 italic text-sm sm:text-base text-warm-charcoal bg-dusty-rose-light/40 rounded-r-3xl">
              &ldquo;{doctor.philosophy}&rdquo;
            </blockquote>

            {/* Key Clinical Focus Areas */}
            <div className="space-y-3.5 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-charcoal flex items-center justify-center sm:justify-start gap-2">
                <Heart className="w-4 h-4 text-deep-mauve" />
                <span>Core Areas of Clinical Practice</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-warm-gray text-left">
                {doctor.areasOfPractice.slice(0, 4).map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-warm-ivory/60 p-3.5 rounded-2xl border border-warm-border/50">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0 mt-0.5" />
                    <span className="font-medium text-warm-charcoal/90">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-deep-mauve hover:bg-deep-mauve-dark text-white text-sm font-medium transition-all shadow-xs group"
              >
                <span>Read Full Doctor Profile</span>
                <ArrowRight className="w-4 h-4 text-dusty-rose transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={CLINIC_INFO.contact.healthplixBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-warm-border hover:border-deep-mauve text-warm-charcoal hover:text-deep-mauve text-sm font-medium transition-all shadow-xs"
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
