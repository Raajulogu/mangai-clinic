import { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  Heart,
  CheckCircle,
  Clock,
  ShieldCheck,
  Calendar,
  Phone,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentSection from "@/components/AppointmentSection";
import { FaqJsonLd } from "@/components/JsonLd";
import { CLINIC_INFO, SERVICES_DATA } from "@/lib/clinic-data";

const service = SERVICES_DATA.find((s) => s.id === "pregnancy-care")!;

export const metadata: Metadata = {
  title: "Pregnancy Care & Antenatal Clinic in Salem | Dr. R. M. Sornam",
  description:
    "Compassionate antenatal care, high-risk pregnancy monitoring, painless normal delivery counseling, and postnatal support in Salem by Dr. R. M. Sornam Chokkalingam.",
  keywords: [
    "Pregnancy care in Salem",
    "Obstetrician in Salem",
    "High risk pregnancy Salem",
    "Painless normal delivery Salem",
    "Antenatal checkup Angammal Colony",
    "Dr. R. M. Sornam Chokkalingam",
    "Maternity clinic Salem",
  ],
  alternates: {
    canonical: "https://mangaiclinic.com/pregnancy-care",
  },
  openGraph: {
    title: "Pregnancy & Antenatal Care in Salem | Mangai Clinic",
    description:
      "Comprehensive, gentle pregnancy care from positive test to postnatal recovery led by Dr. R. M. Sornam Chokkalingam in Salem.",
    url: "https://mangaiclinic.com/pregnancy-care",
  },
};

export default function PregnancyCarePage() {
  return (
    <>
      <FaqJsonLd faqs={service.faqs} />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-warm-ivory border-b border-warm-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Pregnancy Care", href: "/pregnancy-care" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-warm-ivory via-warm-ivory-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Obstetric Care • Salem
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-warm-charcoal font-normal leading-tight">
                Compassionate Pregnancy &amp; Antenatal Care
              </h1>
              <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                Every pregnancy is a precious and unique journey. At Mangai Clinic in Salem, Dr. R. M. Sornam Chokkalingam provides thoughtful, evidence-based obstetric care that nurtures both mother and baby with calm reassurance and rigorous clinical vigilance.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#book-appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deep-mauve text-white text-sm font-medium hover:bg-deep-mauve-dark transition-all shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-dusty-rose" />
                  <span>Book Pregnancy Consultation</span>
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

        {/* Trimester-by-Trimester Care Plan */}
        <section className="py-16 bg-white border-y border-warm-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                Structured Care Pathway
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-charcoal mt-1">
                Your Journey Through Each Trimester
              </h2>
              <p className="text-sm text-warm-gray mt-2 leading-relaxed">
                From early viability confirmation through postpartum recovery, we ensure every test, ultrasound, and consultation is clearly explained.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Trimester 1 */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-deep-mauve">
                    Weeks 1 – 12
                  </span>
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-dusty-rose-light text-deep-mauve">
                    First Trimester
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Foundation &amp; Viability
                </h3>
                <ul className="space-y-2 text-xs text-warm-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Dating scan &amp; intrauterine heartbeat confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Baseline blood investigations, thyroid &amp; hemoglobin checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Nausea, morning sickness &amp; dietary micronutrient support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>NT scan &amp; early genetic screening counseling</span>
                  </li>
                </ul>
              </div>

              {/* Trimester 2 */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-deep-mauve">
                    Weeks 13 – 27
                  </span>
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-sage-green-light text-sage-green-dark">
                    Second Trimester
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Growth &amp; Anomaly Scan
                </h3>
                <ul className="space-y-2 text-xs text-warm-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Targeted anomaly scan (TIFFA) evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Gestational diabetes screening (GTT / OGTT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Fetal movement tracking &amp; maternal blood pressure monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Calcium, iron, and protein intake counseling</span>
                  </li>
                </ul>
              </div>

              {/* Trimester 3 */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-deep-mauve">
                    Weeks 28 – 40+
                  </span>
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-dusty-rose-light text-deep-mauve">
                    Third Trimester
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                  Birth Planning &amp; Delivery
                </h3>
                <ul className="space-y-2 text-xs text-warm-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Fetal growth, presentation &amp; Doppler evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Painless normal delivery counseling &amp; breathing exercises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Delivery hospital coordination in Salem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-green-dark shrink-0 mt-0.5" />
                    <span>Labor signs education &amp; emergency preparedness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* High Risk Pregnancy Focus */}
        <section className="py-16 bg-warm-ivory-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                  High-Risk Obstetrics
                </span>
                <h2 className="font-serif text-3xl font-semibold text-warm-charcoal leading-tight">
                  Vigilant, Individualized Care for High-Risk Pregnancies
                </h2>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Certain medical factors require closer clinical surveillance. With postgraduate qualification in obstetrics and gynecology, Dr. R. M. Sornam Chokkalingam provides experienced monitoring for conditions such as:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-warm-charcoal pt-2">
                  {service.conditionsAddressed.map((cond, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-warm-border"
                    >
                      <ShieldCheck className="w-4 h-4 text-deep-mauve shrink-0" />
                      <span>{cond}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reassurance Notice */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-7 border border-warm-border shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-sage-green-light rounded-xl text-sage-green-dark">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-warm-charcoal">
                        Painless Normal Delivery Guidance
                      </h3>
                      <p className="text-xs text-warm-gray">
                        Empowering mothers with confidence and medical choices
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-warm-gray leading-relaxed">
                    At Mangai Clinic, we advocate for safe natural birth whenever clinically appropriate. Dr. Sornam educates parents on modern labor pain management options (including epidural analgesia), pelvic readiness, and relaxation techniques, removing fear from the childbirth experience.
                  </p>

                  <div className="p-4 bg-warm-ivory rounded-xl text-xs text-warm-gray space-y-1">
                    <strong className="text-deep-mauve block">
                      Salem Delivery Support
                    </strong>
                    <span>
                      Dr. Sornam coordinates closely with reputable multispecialty hospitals in Salem for your delivery, ensuring full continuity of care.
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
                Patient Questions
              </span>
              <h2 className="font-serif text-3xl font-normal text-warm-charcoal">
                Frequently Asked Pregnancy Care Questions
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
          heading="Schedule Your Pregnancy Care Consultation"
          subheading="Visit Dr. R. M. Sornam Chokkalingam at Mangai Clinic, Angammal Colony, Salem."
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

