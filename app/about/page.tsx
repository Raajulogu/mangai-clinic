import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Stethoscope,
  Heart,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentSection from "@/components/AppointmentSection";
import { FaqJsonLd } from "@/components/JsonLd";
import { CLINIC_INFO } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "About Dr. R. M. Sornam Chokkalingam | Gynecologist in Salem",
  description:
    "Learn about Dr. R. M. Sornam Chokkalingam, MBBS, MD, DNB (Obstetrics & Gynecology), Consultant at Mangai Clinic in Angammal Colony, Salem. Compassionate, unhurried women's healthcare.",
  keywords: [
    "Dr. R. M. Sornam Chokkalingam",
    "Gynecologist in Salem",
    "Obstetrician in Salem",
    "Mangai Clinic Salem Doctor",
    "Pregnancy doctor Salem",
    "PCOS doctor Salem",
    "Lady Gynecologist Angammal Colony",
  ],
  alternates: {
    canonical: "https://mangaiclinic.com/about",
  },
  openGraph: {
    title: "Dr. R. M. Sornam Chokkalingam | Consultant Gynecologist Salem",
    description:
      "Compassionate, evidence-based obstetrics and gynecology care in Salem by Dr. R. M. Sornam Chokkalingam, MBBS, MD, DNB (OBG).",
    url: "https://mangaiclinic.com/about",
  },
};

const DOCTOR_FAQS = [
  {
    question: "What are Dr. R. M. Sornam Chokkalingam's medical qualifications?",
    answer:
      "Dr. R. M. Sornam Chokkalingam holds MBBS, MD in Obstetrics & Gynecology, and DNB in Obstetrics & Gynecology. She is a registered medical practitioner with the Tamil Nadu Medical Council.",
  },
  {
    question: "Where does Dr. Sornam Chokkalingam consult patients in Salem?",
    answer:
      "Dr. Sornam consults at Mangai Clinic, located at 188/M1, Guptha Nagar, Angammal Colony, Salem, Tamil Nadu 636009.",
  },
  {
    question: "How long is a typical consultation session?",
    answer:
      "Dr. Sornam believes in unhurried consultations. Unlike rushed assembly-line clinics, appointments at Mangai Clinic allow ample time to discuss your medical history, review scans, explain findings, and address every personal question.",
  },
  {
    question: "How can I book an appointment with Dr. Sornam?",
    answer:
      "You can book directly via the HealthPlix portal online, call the clinic at +91 99444 66729, or message via WhatsApp for prompt assistance.",
  },
];

export default function AboutPage() {
  const doctor = CLINIC_INFO.doctor;

  return (
    <>
      <FaqJsonLd faqs={DOCTOR_FAQS} />
      <Header />

      <main id="main-content" className="flex-1 pb-24 sm:pb-0">
        {/* Top Breadcrumb Bar */}
        <div className="bg-warm-ivory border-b border-warm-border/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "About the Doctor", href: "/about" }]} />
          </div>
        </div>

        {/* Hero Section with Generous Breathing Space */}
        <section className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-warm-ivory via-warm-ivory-light to-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Doctor Visual Frame (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="bg-white rounded-3xl p-8 border border-warm-border shadow-healthcare text-center space-y-6">
                    {/* Portrait Placeholder Graphic */}
                    <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto rounded-full bg-gradient-to-tr from-dusty-rose-light to-warm-ivory p-3 border-2 border-dusty-rose/70 shadow-inner flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center p-4">
                        <div className="w-14 h-14 rounded-full bg-dusty-rose-light flex items-center justify-center text-deep-mauve mb-2">
                          <Stethoscope className="w-7 h-7" />
                        </div>
                        <span className="font-serif text-sm font-semibold text-deep-mauve">
                          Dr. R. M. Sornam
                        </span>
                        <span className="text-[11px] text-warm-gray mt-0.5">
                          Obstetrician &amp; Gynecologist
                        </span>
                      </div>
                    </div>

                    {/* Name & Credentials */}
                    <div className="space-y-1.5">
                      <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-charcoal">
                        {doctor.name}
                      </h1>
                      <p className="text-sm font-semibold text-deep-mauve">
                        {doctor.qualifications}
                      </p>
                      <p className="text-xs text-warm-gray">
                        {doctor.title}
                      </p>
                    </div>

                    {/* Verified Badges */}
                    <div className="flex flex-col gap-2.5 pt-2 text-xs">
                      <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-sage-green-light text-sage-green-dark font-medium">
                        <Award className="w-4 h-4 shrink-0" />
                        <span>Registered with Tamil Nadu Medical Council</span>
                      </div>
                      <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-dusty-rose-light text-deep-mauve font-medium">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>Practicing in Salem, Tamil Nadu</span>
                      </div>
                    </div>

                    {/* Fast Consultation Actions */}
                    <div className="pt-5 border-t border-warm-border space-y-3">
                      <a
                        href={CLINIC_INFO.contact.healthplixBookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-deep-mauve text-white text-sm font-medium hover:bg-deep-mauve-dark transition-colors shadow-xs"
                      >
                        <Calendar className="w-4 h-4 text-dusty-rose" />
                        <span>Book Online Consultation</span>
                      </a>
                      <a
                        href={CLINIC_INFO.contact.phoneHref}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-warm-ivory text-warm-charcoal text-xs font-semibold hover:bg-dusty-rose-light/50 transition-colors border border-warm-border"
                      >
                        <Phone className="w-3.5 h-3.5 text-deep-mauve" />
                        <span>Call Clinic: +91 99444 66729</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Biography & Philosophy (7 cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-7">
                <div className="space-y-3">
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                    About Dr. Sornam Chokkalingam
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-charcoal font-normal leading-tight">
                    Compassionate Clinical Excellence Rooted in Active Listening
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                  <strong>Dr. R. M. Sornam Chokkalingam</strong> is a consultant obstetrician, gynecologist, and fertility specialist based in Salem, Tamil Nadu. Having completed her MBBS followed by postgraduate specialization (MD in Obstetrics &amp; Gynecology and Diplomate of National Board - DNB), she brings rigorous clinical standards and deep diagnostic insight to women&apos;s healthcare.
                </p>

                <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
                  Throughout her medical career, Dr. Sornam observed that many women feel intimidated, rushed, or unheard during traditional clinic visits. She established <strong>Mangai Clinic</strong> in Salem with a clear mission: to provide an unhurried, reassuring sanctuary where women can speak freely about their reproductive health, pregnancy journeys, menstrual concerns, and hormonal well-being.
                </p>

                {/* Medical Philosophy Callout */}
                <div className="p-7 rounded-3xl bg-warm-ivory border-l-4 border-deep-mauve space-y-2.5">
                  <h3 className="font-serif text-lg font-semibold text-deep-mauve flex items-center gap-2">
                    <Heart className="w-4 h-4 text-deep-mauve" />
                    <span>Her Consultation Philosophy</span>
                  </h3>
                  <p className="text-sm sm:text-base italic text-warm-charcoal leading-relaxed">
                    &ldquo;{doctor.philosophy}&rdquo;
                  </p>
                </div>

                {/* Verified Qualifications List */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-warm-charcoal">
                    Verified Medical Qualifications &amp; Accreditations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="bg-white p-4 rounded-2xl border border-warm-border">
                      <span className="font-serif font-bold text-deep-mauve text-base block">MBBS</span>
                      <span className="text-warm-gray text-xs">Bachelor of Medicine &amp; Surgery</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-warm-border">
                      <span className="font-serif font-bold text-deep-mauve text-base block">MD (OBG)</span>
                      <span className="text-warm-gray text-xs">Doctor of Medicine (Obstetrics &amp; Gynecology)</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-warm-border">
                      <span className="font-serif font-bold text-deep-mauve text-base block">DNB (OBG)</span>
                      <span className="text-warm-gray text-xs">Diplomate of National Board (OBG)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Clinical Focus & Approach */}
        <section className="py-20 sm:py-28 bg-warm-ivory border-y border-warm-border/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Practice Areas
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-warm-charcoal font-normal">
                Areas of Clinical Focus
              </h2>
              <p className="text-base text-warm-gray leading-relaxed">
                Comprehensive healthcare tailored for each stage of a woman&apos;s life journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {doctor.areasOfPractice.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-warm-border shadow-xs space-y-3 hover:border-dusty-rose transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-deep-mauve" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-warm-charcoal">
                    {area}
                  </h3>
                  <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                    Personalized protocols emphasizing safety, medical accuracy, and compassionate support.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        <section className="py-20 sm:py-28 bg-warm-ivory-light border-t border-warm-border">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center space-y-3.5 mb-14">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Consultation Queries
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-warm-charcoal font-normal">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-5">
              {DOCTOR_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-warm-border shadow-xs space-y-2.5"
                >
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-deep-mauve">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment CTA */}
        <AppointmentSection
          heading="Schedule a Consultation with Dr. Sornam Chokkalingam"
          subheading="Experience compassionate, patient-centered women's healthcare at Mangai Clinic in Salem."
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
