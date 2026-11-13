import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  CheckCircle,
  ShieldCheck,
  Calendar,
  Phone,
  HelpCircle,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentSection from "@/components/AppointmentSection";
import { FaqJsonLd } from "@/components/JsonLd";
import { CLINIC_INFO, SERVICES_DATA } from "@/lib/clinic-data";

const service = SERVICES_DATA.find((s) => s.id === "fertility-care")!;

export const metadata: Metadata = {
  title: "Compassionate Fertility Care & Preconception in Salem | Dr. R. M. Sornam",
  description:
    "Compassionate, medically grounded fertility assessments and preconception guidance in Salem. Ovulation tracking, hormonal evaluation, and ethical care by Dr. R. M. Sornam Chokkalingam.",
  keywords: [
    "Fertility doctor in Salem",
    "Fertility clinic in Salem",
    "Preconception counseling Salem",
    "Ovulation tracking Salem",
    "Infertility guidance Salem",
    "Dr. R. M. Sornam Chokkalingam",
    "PCOS fertility Salem",
  ],
  alternates: {
    canonical: "https://mangaiclinic.com/fertility-care",
  },
  openGraph: {
    title: "Compassionate Fertility Care in Salem | Mangai Clinic",
    description:
      "Ethical, gentle fertility evaluations and preconception planning with Dr. R. M. Sornam Chokkalingam in Salem. No false promises, just compassionate science.",
    url: "https://mangaiclinic.com/fertility-care",
  },
};

export default function FertilityCarePage() {
  return (
    <>
      <FaqJsonLd faqs={service.faqs} />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-warm-ivory border-b border-warm-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Fertility Care & Preconception", href: "/fertility-care" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-warm-ivory via-warm-ivory-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Preconception &amp; Fertility • Salem
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-warm-charcoal font-normal leading-tight">
                Compassionate, Medically Grounded Fertility Guidance
              </h1>
              <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                The path toward growing your family should be guided by empathy, clarity, and scientific integrity. At Mangai Clinic in Salem, Dr. R. M. Sornam Chokkalingam provides couples with thoughtful preliminary evaluations, clear diagnostic pathways, and steady emotional support—without false promises or commercial pressure.
              </p>

              {/* Ethical Medical Disclaimer Banner */}
              <div className="p-4 rounded-2xl bg-dusty-rose-light/50 border border-dusty-rose/60 flex items-start gap-3 text-xs text-warm-charcoal">
                <ShieldCheck className="w-5 h-5 text-deep-mauve shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Our Medical Commitment:</strong> We practice honest, evidence-based medicine. We never guarantee pregnancy or promote aggressive treatments prematurely. Our role is to identify physiological factors, optimize your health, and provide realistic, supportive medical care.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#book-appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deep-mauve text-white text-sm font-medium hover:bg-deep-mauve-dark transition-all shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-dusty-rose" />
                  <span>Book Couple Consultation</span>
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

        {/* Step-by-Step Diagnostic Roadmap */}
        <section className="py-16 bg-white border-y border-warm-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                A Step-by-Step Approach
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-charcoal mt-1">
                How We Approach Fertility Assessment
              </h2>
              <p className="text-sm text-warm-gray mt-2 leading-relaxed">
                We start with simple, non-invasive investigations before considering complex procedures, keeping care accessible and transparent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-warm-ivory rounded-3xl p-6 border border-warm-border space-y-3">
                <span className="text-xs font-bold text-deep-mauve tracking-wider uppercase">
                  Step 01
                </span>
                <h3 className="font-serif text-lg font-semibold text-warm-charcoal">
                  Couple History &amp; Lifestyle
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Understanding menstrual cycles, coital timing, stress levels, nutrition, sleep, and previous health history for both partners.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-warm-ivory rounded-3xl p-6 border border-warm-border space-y-3">
                <span className="text-xs font-bold text-deep-mauve tracking-wider uppercase">
                  Step 02
                </span>
                <h3 className="font-serif text-lg font-semibold text-warm-charcoal">
                  Ovulation &amp; Ovarian Reserve
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Follicular ultrasound scans to observe egg maturity and endometrial lining, complemented by basic hormonal profiling (AMH, FSH, Thyroid).
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-warm-ivory rounded-3xl p-6 border border-warm-border space-y-3">
                <span className="text-xs font-bold text-deep-mauve tracking-wider uppercase">
                  Step 03
                </span>
                <h3 className="font-serif text-lg font-semibold text-warm-charcoal">
                  Uterine &amp; Male Factors
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Pelvic scans to rule out fibroids or polyps, along with routine semen analysis referral to assess count and motility.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-warm-ivory rounded-3xl p-6 border border-warm-border space-y-3">
                <span className="text-xs font-bold text-deep-mauve tracking-wider uppercase">
                  Step 04
                </span>
                <h3 className="font-serif text-lg font-semibold text-warm-charcoal">
                  Guided Medical Support
                </h3>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Gentle cycle regulation, ovulation induction, timed intercourse guidance, or ethical referral to specialized centers when appropriate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preconception Health & Wellness */}
        <section className="py-16 bg-warm-ivory-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                  Planning Ahead
                </span>
                <h2 className="font-serif text-3xl font-semibold text-warm-charcoal leading-tight">
                  Preconception Counseling for Healthy Pregnancies
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Planning a pregnancy before conception significantly reduces risks of birth defects, gestational diabetes, and complications. During a preconception consultation in Salem, Dr. Sornam assists couples with:
                </p>

                <div className="space-y-2.5 text-xs text-warm-gray pt-2">
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-warm-border">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Folic acid supplementation &amp; micronutrient optimization</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-warm-border">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Screening for rubella immunity, anemia, blood group typing, and thyroid levels</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-warm-border">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Optimizing chronic conditions (diabetes, hypertension, thyroid disorders) before pregnancy</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-warm-border">
                    <CheckCircle className="w-4 h-4 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Healthy weight targets, lifestyle modifications, and stress reduction</span>
                  </div>
                </div>
              </div>

              {/* Emotional Support Callout */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-8 border border-warm-border shadow-xs space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                    Guilt-Free, Respectful Care
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    Societal pressures and intrusive questions can make trying to conceive deeply taxing for both partners. At Mangai Clinic, we create a sanctuary where couples are treated with dignity, kindness, and non-judgmental reassurance.
                  </p>
                  <p className="text-xs text-warm-gray/90 italic pt-1 border-t border-warm-border/60">
                    &ldquo;You are never a case or a statistic to us. We partner with you with scientific honesty and compassion.&rdquo;
                  </p>
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
                Couples&apos; Questions
              </span>
              <h2 className="font-serif text-3xl font-normal text-warm-charcoal">
                Frequently Asked Fertility Questions
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
          heading="Schedule a Preconception or Fertility Evaluation"
          subheading="Confidential consultations for couples at Mangai Clinic, Angammal Colony, Salem."
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

