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
  Activity,
  Smile,
  Award,
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

      <main id="main-content" className="flex-1 pb-24 sm:pb-0">
        {/* HERO SECTION (Spacious, Serene, Doctor-Led) */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 bg-gradient-to-b from-warm-ivory via-warm-ivory-light to-warm-ivory">
          {/* Subtle Atmospheric Blurs */}
          <div
            className="absolute top-0 right-0 -mr-24 -mt-24 w-96 sm:w-[480px] h-96 sm:h-[480px] rounded-full bg-dusty-rose/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-sage-green/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Reassuring Healthcare Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
                {/* Location & Specialty Eyebrow */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-warm-border text-deep-mauve text-xs sm:text-sm font-medium shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-deep-mauve animate-pulse" />
                  <span>Salem, Tamil Nadu • Consultant Obstetrician &amp; Gynecologist</span>
                </div>

                {/* Primary Editorial Headline */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-warm-charcoal font-normal tracking-tight leading-[1.2]">
                  Compassionate Care for Every Stage of{" "}
                  <span className="italic text-deep-mauve font-medium">Womanhood.</span>
                </h1>

                {/* Reassuring Healthcare Body Copy with Breathing Room */}
                <p className="text-base sm:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Your health, comfort and well-being deserve thoughtful attention. Experience personal, compassionate women&apos;s healthcare in Salem with a focus on listening, understanding and supporting you.
                </p>

                {/* Verified Doctor Byline Pill */}
                <div className="inline-flex items-center gap-3.5 p-3 sm:p-3.5 bg-white rounded-2xl border border-warm-border/80 shadow-xs text-left max-w-md mx-auto lg:mx-0">
                  <div className="w-11 h-11 rounded-xl bg-dusty-rose-light flex items-center justify-center text-deep-mauve shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-sm font-semibold text-warm-charcoal">
                      Dr. R. M. Sornam Chokkalingam
                    </h2>
                    <p className="text-xs text-deep-mauve font-medium">
                      MBBS, MD (Obstetrics &amp; Gynecology), DNB (OBG)
                    </p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 justify-center lg:justify-start pt-2">
                  <a
                    href="#book-appointment"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-deep-mauve hover:bg-deep-mauve-dark text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all group"
                  >
                    <Calendar className="w-4 h-4 text-dusty-rose transition-transform group-hover:scale-110" />
                    <span>Book an Appointment</span>
                  </a>

                  <a
                    href={CLINIC_INFO.contact.phoneHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white border border-warm-border hover:border-deep-mauve text-warm-charcoal hover:text-deep-mauve font-medium text-sm sm:text-base shadow-xs transition-all"
                  >
                    <Phone className="w-4 h-4 text-deep-mauve" />
                    <span>Call: +91 99444 66729</span>
                  </a>
                </div>

                {/* Key Clinic Assurances with Plenty of Air */}
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-warm-border/70 text-xs text-warm-gray text-left">
                  <div className="flex items-center gap-2.5 bg-white/60 p-2.5 rounded-xl border border-warm-border/50">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0" />
                    <span className="font-medium text-warm-charcoal">Unhurried Consultations</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/60 p-2.5 rounded-xl border border-warm-border/50">
                    <ShieldCheck className="w-4 h-4 text-sage-green-dark shrink-0" />
                    <span className="font-medium text-warm-charcoal">Strict Patient Privacy</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/60 p-2.5 rounded-xl border border-warm-border/50">
                    <MapPin className="w-4 h-4 text-sage-green-dark shrink-0" />
                    <span className="font-medium text-warm-charcoal">Angammal Colony, Salem</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Clinic Monograph Card (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-healthcare border border-warm-border space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-5 border-b border-warm-border/70">
                      <div className="space-y-0.5">
                        <span className="font-serif text-base font-semibold text-deep-mauve block">
                          Mangai Clinic
                        </span>
                        <span className="text-[11px] text-warm-gray">
                          Obstetrics, Gynecology &amp; Fertility
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-sage-green-dark bg-sage-green-light px-3 py-1 rounded-full">
                        Angammal Colony, Salem
                      </span>
                    </div>

                    {/* Mission Quote */}
                    <div className="p-5 rounded-2xl bg-warm-ivory border border-warm-border/80 space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-deep-mauve">
                        Consultation Philosophy
                      </span>
                      <p className="font-serif text-base sm:text-lg text-warm-charcoal leading-snug">
                        &ldquo;Every woman who steps into our clinic is met with respect, unhurried time, and clear answers.&rdquo;
                      </p>
                      <p className="text-xs text-warm-gray pt-1 font-medium">
                        — Dr. R. M. Sornam Chokkalingam
                      </p>
                    </div>

                    {/* 4 Specialties Quick Highlights */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 bg-dusty-rose-light/50 rounded-2xl border border-dusty-rose/40 space-y-1">
                        <Heart className="w-4 h-4 text-deep-mauve" />
                        <h3 className="font-semibold text-warm-charcoal">Antenatal Care</h3>
                        <p className="text-[11px] text-warm-gray">Maternal journeys</p>
                      </div>
                      <div className="p-3.5 bg-sage-green-light/50 rounded-2xl border border-sage-green/40 space-y-1">
                        <Activity className="w-4 h-4 text-sage-green-dark" />
                        <h3 className="font-semibold text-warm-charcoal">Gynecology</h3>
                        <p className="text-[11px] text-warm-gray">PCOS &amp; pelvic health</p>
                      </div>
                      <div className="p-3.5 bg-sage-green-light/50 rounded-2xl border border-sage-green/40 space-y-1">
                        <Sparkles className="w-4 h-4 text-sage-green-dark" />
                        <h3 className="font-semibold text-warm-charcoal">Fertility Care</h3>
                        <p className="text-[11px] text-warm-gray">Honest evaluations</p>
                      </div>
                      <div className="p-3.5 bg-dusty-rose-light/50 rounded-2xl border border-dusty-rose/40 space-y-1">
                        <ShieldCheck className="w-4 h-4 text-deep-mauve" />
                        <h3 className="font-semibold text-warm-charcoal">Screening</h3>
                        <p className="text-[11px] text-warm-gray">Pap smear &amp; checks</p>
                      </div>
                    </div>

                    {/* Footer inside card */}
                    <div className="pt-2 flex items-center justify-between text-xs text-warm-gray border-t border-warm-border/70">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-deep-mauve" />
                        <span>Mon – Sat Sessions</span>
                      </span>
                      <a
                        href={CLINIC_INFO.contact.healthplixBookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-deep-mauve hover:underline"
                      >
                        Book Online Slot →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL SERVICES OVERVIEW (Spacious & Clean) */}
        <section className="py-20 sm:py-28 lg:py-32 bg-white border-y border-warm-border/70">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16 sm:mb-20">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Clinical Services • Salem
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-charcoal font-normal">
                Dedicated Care for Every Stage of Life
              </h2>
              <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                From adolescent menstrual health to pregnancy, fertility counseling, and menopause support, our clinical services are designed around your comfort, safety, and dignity.
              </p>
            </div>

            {/* 4 Cards Grid with Generous Gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {SERVICES_DATA.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* DOCTOR SPOTLIGHT SECTION */}
        <DoctorSpotlight />

        {/* PATIENT CARE JOURNEY (How a consultation feels) */}
        <section className="py-20 sm:py-28 bg-warm-ivory border-y border-warm-border/70">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16 sm:mb-20">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Consultation Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-warm-charcoal font-normal">
                What Visiting Mangai Clinic Feels Like
              </h2>
              <p className="text-base text-warm-gray leading-relaxed">
                Designed specifically to remove anxiety and provide a peaceful, dignified healthcare experience for women in Salem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-white rounded-3xl p-7 border border-warm-border shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center font-serif font-bold text-lg">
                  01
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Serene Intake
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  A peaceful, welcoming reception in Angammal Colony where you are received with courtesy and minimal waiting time.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-warm-border shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center font-serif font-bold text-lg">
                  02
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Unhurried Time
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  Dr. Sornam listens to your entire story without interrupting, reviewing your lifestyle, history, and concerns thoroughly.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-warm-border shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center font-serif font-bold text-lg">
                  03
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Gentle Dignity
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  Ultrasounds and clinical exams are conducted with female nursing chaperones in an atmosphere of strict modesty and hygiene.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-7 border border-warm-border shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center font-serif font-bold text-lg">
                  04
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Transparent Care
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  Receive a clear medical explanation in everyday language with zero unnecessary tests or commercial pressures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY PATIENTS CHOOSE MANGAI CLINIC (Values) */}
        <section className="py-20 sm:py-28 bg-warm-ivory-light">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                  Our Practice Values
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-warm-charcoal font-normal leading-tight">
                  Why Women and Families in Salem Trust Mangai Clinic
                </h2>
                <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
                  We believe medical consultations should never feel rushed or intimidating. At Mangai Clinic, we blend scientific excellence with deep human warmth so that every patient feels empowered about their body and healthcare choices.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-deep-mauve hover:text-deep-mauve-dark transition-colors"
                  >
                    <span>Learn more about Dr. Sornam&apos;s approach</span>
                    <ArrowRight className="w-4 h-4 text-dusty-rose" />
                  </Link>
                </div>
              </div>

              {/* Right: Values Cards Grid (7 cols) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {CLINIC_VALUES.map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-7 border border-warm-border shadow-xs space-y-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center font-serif font-bold text-sm">
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

        {/* PATIENT TESTIMONIALS */}
        <TestimonialSection />

        {/* SALEM CLINIC LOCATION & DIRECTIONS */}
        <SalemLocationSection />

        {/* APPOINTMENT BOOKING SECTION */}
        <AppointmentSection />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
