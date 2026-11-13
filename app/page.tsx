import Link from "next/link";
import {
  Calendar,
  Phone,
  Heart,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Smile,
  Activity,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import DoctorSpotlight from "@/components/DoctorSpotlight";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSection from "@/components/TestimonialSection";
import SalemLocationSection from "@/components/SalemLocationSection";
import AppointmentSection from "@/components/AppointmentSection";
import { ClinicJsonLd } from "@/components/JsonLd";
import { CLINIC_INFO, SERVICES_DATA, CLINIC_VALUES } from "@/lib/clinic-data";

export default function HomePage() {
  return (
    <>
      <ClinicJsonLd />
      <Header />

      <main id="main-content" className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28 bg-gradient-to-b from-warm-ivory via-warm-ivory-light to-warm-ivory">
          {/* Subtle Ambient Background Shapes */}
          <div
            className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-dusty-rose/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sage-green/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Hero Copy (7 cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
                {/* Geographic & Specialty Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dusty-rose/40 border border-dusty-rose/70 text-deep-mauve text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-deep-mauve animate-pulse" />
                  <span>Salem, Tamil Nadu • Obstetrician & Gynecologist</span>
                </div>

                {/* Primary Editorial Headline */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-warm-charcoal font-medium tracking-tight leading-[1.15]">
                  Compassionate Care for Every Stage of{" "}
                  <span className="italic text-deep-mauve">Womanhood.</span>
                </h1>

                {/* Emotionally Reassuring Supporting Text */}
                <p className="text-base sm:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Your health, comfort and well-being deserve thoughtful attention. Experience personal, compassionate women&apos;s healthcare in Salem with a focus on listening, understanding and supporting you.
                </p>

                {/* Doctor Verification Badge */}
                <div className="flex items-center gap-3 justify-center lg:justify-start pt-1 text-xs sm:text-sm text-warm-charcoal">
                  <div className="p-2 rounded-full bg-sage-green-light text-sage-green-dark">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-deep-mauve">
                      Dr. R. M. Sornam Chokkalingam
                    </span>
                    <span className="text-warm-gray block text-xs">
                      MBBS, MD (Obstetrics & Gynecology), DNB (OBG)
                    </span>
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                  <a
                    href="#book-appointment"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-deep-mauve hover:bg-deep-mauve-dark text-white font-medium shadow-md hover:shadow-lg transition-all group"
                  >
                    <Calendar className="w-4 h-4 text-dusty-rose transition-transform group-hover:scale-110" />
                    <span>Book an Appointment</span>
                  </a>

                  <a
                    href={CLINIC_INFO.contact.phoneHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-warm-border hover:border-deep-mauve text-warm-charcoal hover:text-deep-mauve font-medium shadow-xs transition-all"
                  >
                    <Phone className="w-4 h-4 text-deep-mauve" />
                    <span>Call: +91 99444 66729</span>
                  </a>
                </div>

                {/* Quick Trust Attributes */}
                <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-warm-border/60 text-xs text-warm-gray text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0" />
                    <span>Unhurried Consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0" />
                    <span>Strict Patient Privacy</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0" />
                    <span>Angammal Colony, Salem</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual Card (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Outer Frame */}
                  <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-warm-border overflow-hidden">
                    {/* Top Decorative Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-warm-border/60">
                      <div className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full bg-dusty-rose" />
                        <span className="font-serif text-sm font-semibold text-deep-mauve uppercase tracking-wider">
                          Mangai Clinic • Salem
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-sage-green-dark bg-sage-green-light px-2.5 py-0.5 rounded-full">
                        Open for Consultations
                      </span>
                    </div>

                    {/* Editorial Content Card */}
                    <div className="py-6 space-y-5">
                      <div className="p-4 rounded-2xl bg-warm-ivory border border-warm-border/60 space-y-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-deep-mauve">
                          Our Commitment
                        </span>
                        <p className="font-serif text-lg text-warm-charcoal leading-snug">
                          &ldquo;Every woman who steps into our clinic is met with respect, unhurried time, and clear answers.&rdquo;
                        </p>
                        <p className="text-xs text-warm-gray pt-1 font-medium">
                          — Dr. R. M. Sornam Chokkalingam
                        </p>
                      </div>

                      {/* Clinical Pillars Grid */}
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 bg-dusty-rose-light/50 rounded-xl border border-dusty-rose/30 space-y-1">
                          <Heart className="w-4 h-4 text-deep-mauve" />
                          <h2 className="font-semibold text-warm-charcoal">Antenatal Care</h2>
                          <p className="text-[11px] text-warm-gray">
                            Safe maternal journeys
                          </p>
                        </div>
                        <div className="p-3 bg-sage-green-light/50 rounded-xl border border-sage-green/30 space-y-1">
                          <Activity className="w-4 h-4 text-sage-green-dark" />
                          <h2 className="font-semibold text-warm-charcoal">Gynecology</h2>
                          <p className="text-[11px] text-warm-gray">
                            PCOS &amp; pelvic wellness
                          </p>
                        </div>
                        <div className="p-3 bg-sage-green-light/50 rounded-xl border border-sage-green/30 space-y-1">
                          <Sparkles className="w-4 h-4 text-sage-green-dark" />
                          <h2 className="font-semibold text-warm-charcoal">Fertility Guidance</h2>
                          <p className="text-[11px] text-warm-gray">
                            Honest evaluations
                          </p>
                        </div>
                        <div className="p-3 bg-dusty-rose-light/50 rounded-xl border border-dusty-rose/30 space-y-1">
                          <ShieldCheck className="w-4 h-4 text-deep-mauve" />
                          <h2 className="font-semibold text-warm-charcoal">Screening</h2>
                          <p className="text-[11px] text-warm-gray">
                            Pap smear &amp; prevention
                          </p>
                        </div>
                      </div>

                      {/* Location snippet */}
                      <div className="pt-2 text-xs text-warm-gray flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-deep-mauve" />
                          <span>Guptha Nagar, Angammal Colony</span>
                        </span>
                        <a
                          href={CLINIC_INFO.contact.healthplixBookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-deep-mauve hover:underline"
                        >
                          Book Slot →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CLINICAL SERVICES OVERVIEW */}
        <section className="py-16 sm:py-24 bg-white border-y border-warm-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Clinical Services • Salem
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-warm-charcoal font-normal">
                Dedicated Care for Every Stage of Life
              </h2>
              <p className="text-base text-warm-gray leading-relaxed">
                From adolescent menstrual health to pregnancy, fertility counseling, and menopause support, our clinical services are designed around your comfort, safety, and dignity.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES_DATA.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: DOCTOR INTRODUCTION SPOTLIGHT */}
        <DoctorSpotlight />

        {/* SECTION: WHY PATIENTS CHOOSE MANGAI CLINIC */}
        <section className="py-16 sm:py-24 bg-warm-ivory-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left description (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                  Our Practice Philosophy
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-warm-charcoal font-normal leading-tight">
                  Why Women and Families in Salem Trust Mangai Clinic
                </h2>
                <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
                  We believe that medical consultations should never feel rushed or intimidating. At Mangai Clinic, we blend scientific excellence with deep human warmth so that every patient feels empowered about their body and healthcare choices.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-deep-mauve hover:text-deep-mauve-dark transition-colors"
                  >
                    <span>Learn more about our consultation philosophy</span>
                    <ArrowRight className="w-4 h-4 text-dusty-rose" />
                  </Link>
                </div>
              </div>

              {/* Right: Values Cards Grid (7 cols) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {CLINIC_VALUES.map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-warm-border shadow-xs space-y-2.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-dusty-rose-light text-deep-mauve flex items-center justify-center font-serif font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-warm-charcoal">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PATIENT TESTIMONIALS */}
        <TestimonialSection />

        {/* SECTION: SALEM CLINIC LOCATION & HOURS */}
        <SalemLocationSection />

        {/* SECTION: APPOINTMENT SCHEDULER & BOOKING FORM */}
        <AppointmentSection />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
