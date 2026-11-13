import { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  Heart,
  CheckCircle,
  ShieldCheck,
  Calendar,
  Phone,
  HelpCircle,
  Check,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentSection from "@/components/AppointmentSection";
import { FaqJsonLd } from "@/components/JsonLd";
import { CLINIC_INFO, SERVICES_DATA } from "@/lib/clinic-data";

const service = SERVICES_DATA.find((s) => s.id === "gynecology")!;

export const metadata: Metadata = {
  title: "Gynecological Care in Salem | PCOD, Menstrual & Pelvic Health",
  description:
    "Confidential, comprehensive gynecological care in Salem. PCOD/PCOS management, irregular periods, pelvic pain, fibroids, and adolescent gynecology by Dr. R. M. Sornam Chokkalingam.",
  keywords: [
    "Gynecologist in Salem",
    "Gynecology clinic in Salem",
    "PCOD treatment Salem",
    "PCOS specialist Salem",
    "Irregular period doctor Salem",
    "Dr. R. M. Sornam Chokkalingam",
    "Pelvic pain doctor Salem",
  ],
  alternates: {
    canonical: "https://mangaiclinic.com/gynecology",
  },
  openGraph: {
    title: "Gynecological Care in Salem | Mangai Clinic",
    description:
      "Compassionate, evidence-based gynecological care for menstrual disorders, PCOD/PCOS, and pelvic health in Salem.",
    url: "https://mangaiclinic.com/gynecology",
  },
};

export default function GynecologyPage() {
  return (
    <>
      <FaqJsonLd faqs={service.faqs} />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-warm-ivory border-b border-warm-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Gynecological Care", href: "/gynecology" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-warm-ivory via-warm-ivory-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Gynecological Wellness • Salem
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-warm-charcoal font-normal leading-tight">
                Empathetic, Confidential Gynecological Care
              </h1>
              <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                Gynecological health is essential to every woman&apos;s daily comfort, confidence, and peace of mind. At Mangai Clinic in Angammal Colony, Salem, Dr. R. M. Sornam Chokkalingam provides an unhurried, private environment to understand and treat menstrual pain, hormonal imbalances, PCOD, and pelvic disorders.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#book-appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deep-mauve text-white text-sm font-medium hover:bg-deep-mauve-dark transition-all shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-dusty-rose" />
                  <span>Book Gynecological Visit</span>
                </a>
                <a
                  href={CLINIC_INFO.contact.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-warm-border text-warm-charcoal text-sm font-medium hover:border-deep-mauve transition-all"
                >
                  <Phone className="w-4 h-4 text-deep-mauve" />
                  <span>Call: +91 99444 66729</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Gynecological Focus Areas */}
        <section className="py-16 bg-white border-y border-warm-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                Clinical Expertise
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-charcoal mt-1">
                Conditions We Diagnose and Manage
              </h2>
              <p className="text-sm text-warm-gray mt-2 leading-relaxed">
                We combine scientific diagnostic precision with empathetic listening, always prioritizing conservative medical treatments and lifestyle adjustments first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: PCOD / PCOS */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-3">
                <div className="w-10 h-10 rounded-xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  PCOD / PCOS Care
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Tailored management addressing irregular cycles, androgen excess (acne, unwanted facial hair), insulin resistance, and weight challenges through customized medical and dietary plans.
                </p>
              </div>

              {/* Card 2: Menstrual Disorders */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-3">
                <div className="w-10 h-10 rounded-xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Menstrual Irregularities &amp; AUB
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Comprehensive assessment for heavy menstrual bleeding, prolonged periods, intermenstrual spotting, and severe dysmenorrhea (painful cramps).
                </p>
              </div>

              {/* Card 3: Pelvic Pain & Fibroids */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-3">
                <div className="w-10 h-10 rounded-xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Fibroids &amp; Endometriosis
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Diagnostic evaluation of uterine fibroids, adenomyosis, ovarian cysts, and chronic pelvic discomfort using pelvic imaging and targeted symptom relief.
                </p>
              </div>

              {/* Card 4: Adolescent Gynecology */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage-green-light text-sage-green-dark flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Adolescent Health &amp; Puberty
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  A gentle, reassuring consultation for teenage girls navigating early menstruation, severe cramps, irregular cycles, or emotional shifts, with comforting guidance.
                </p>
              </div>

              {/* Card 5: Vaginal & Urinary Infections */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage-green-light text-sage-green-dark flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Infections &amp; Pelvic Hygiene
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Confidential care for recurrent yeast infections, bacterial vaginosis, urinary tract infections (UTIs), and pelvic inflammatory disease (PID).
                </p>
              </div>

              {/* Card 6: Pelvic Floor Wellness */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage-green-light text-sage-green-dark flex items-center justify-center">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Pelvic Floor &amp; Prolapse
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Screening for pelvic organ prolapse, stress urinary incontinence, and restorative exercises for postpartum and mature women.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Expectations & Confidentiality */}
        <section className="py-16 bg-warm-ivory-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-border shadow-xs">
              <div className="max-w-3xl space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                  Confidentiality Guarantee
                </span>
                <h2 className="font-serif text-3xl font-semibold text-warm-charcoal">
                  Your Privacy and Modesty Are Sacred
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  We recognize that visiting a gynecologist can feel vulnerable. At Mangai Clinic, consultations are conducted behind closed doors with strict medical confidentiality. You are always given time to ask every question without embarrassment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
                  <div className="p-4 bg-warm-ivory rounded-2xl border border-warm-border/60">
                    <strong className="text-deep-mauve block font-serif text-sm mb-1">
                      Private Chaperone
                    </strong>
                    <span className="text-warm-gray">
                      All clinical examinations are supported by a trained female nursing chaperone.
                    </span>
                  </div>
                  <div className="p-4 bg-warm-ivory rounded-2xl border border-warm-border/60">
                    <strong className="text-deep-mauve block font-serif text-sm mb-1">
                      No Judgment
                    </strong>
                    <span className="text-warm-gray">
                      Non-judgmental discussions about intimate wellness, contraception, and personal habits.
                    </span>
                  </div>
                  <div className="p-4 bg-warm-ivory rounded-2xl border border-warm-border/60">
                    <strong className="text-deep-mauve block font-serif text-sm mb-1">
                      Clear Reports
                    </strong>
                    <span className="text-warm-gray">
                      Every ultrasound and lab result is translated into plain, reassuring language.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white border-t border-warm-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                Common Concerns
              </span>
              <h2 className="font-serif text-3xl font-normal text-warm-charcoal">
                Frequently Asked Gynecology Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-warm-ivory/50 rounded-2xl p-6 border border-warm-border space-y-2"
                >
                  <h3 className="font-serif text-lg font-semibold text-deep-mauve">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <AppointmentSection
          heading="Schedule a Confidential Gynecological Consultation"
          subheading="Consult Dr. R. M. Sornam Chokkalingam at Mangai Clinic in Salem."
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

