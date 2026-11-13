import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  CheckCircle,
  Calendar,
  Phone,
  Activity,
  Smile,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentSection from "@/components/AppointmentSection";
import { FaqJsonLd } from "@/components/JsonLd";
import { CLINIC_INFO, SERVICES_DATA } from "@/lib/clinic-data";

const service = SERVICES_DATA.find((s) => s.id === "womens-health")!;

export const metadata: Metadata = {
  title: "Women's Health & Preventive Screenings in Salem | Pap Smear & Menopause",
  description:
    "Comprehensive preventive women's healthcare in Salem by Dr. R. M. Sornam Chokkalingam. Routine Pap smears, cervical cancer screening, breast health, and menopause support.",
  keywords: [
    "Women's health clinic in Salem",
    "Pap smear test Salem",
    "Cervical cancer screening Salem",
    "Menopause doctor Salem",
    "Preventive gynecologist Salem",
    "Dr. R. M. Sornam Chokkalingam",
    "Angammal Colony Women Clinic",
  ],
  alternates: {
    canonical: "https://mangaiclinic.com/womens-health",
  },
  openGraph: {
    title: "Women's Health & Preventive Screenings | Mangai Clinic Salem",
    description:
      "Empowering women across Salem with proactive health checks, Pap smears, bone density guidance, and menopause management.",
    url: "https://mangaiclinic.com/womens-health",
  },
};

export default function WomensHealthPage() {
  return (
    <>
      <FaqJsonLd faqs={service.faqs} />
      <Header />

      <main id="main-content" className="flex-1 pb-24 sm:pb-0">
        {/* Breadcrumb Bar */}
        <div className="bg-warm-ivory border-b border-warm-border/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Women’s Health & Prevention", href: "/womens-health" }]} />
          </div>
        </div>

        {/* Hero Section with Breathing Room */}
        <section className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-warm-ivory via-warm-ivory-light to-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Preventive Care • Salem
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-warm-charcoal font-normal leading-tight">
                Proactive Women&apos;s Health &amp; Preventive Screenings
              </h1>
              <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                True healthcare is proactive, not merely reactive. At Mangai Clinic in Salem, Dr. R. M. Sornam Chokkalingam champions regular preventive checkups, cervical cancer screening (Pap smears), breast health exams, and compassionate perimenopause care to protect your health across every decade of life.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#book-appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-deep-mauve text-white text-sm font-medium hover:bg-deep-mauve-dark transition-all shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-dusty-rose" />
                  <span>Book Wellness Checkup</span>
                </a>
                <a
                  href={CLINIC_INFO.contact.phoneHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white border border-warm-border text-warm-charcoal text-sm font-medium hover:border-deep-mauve transition-all"
                >
                  <Phone className="w-4 h-4 text-deep-mauve" />
                  <span>Call: +91 99444 66729</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Preventive Pillars */}
        <section className="py-20 sm:py-28 bg-white border-y border-warm-border/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14 sm:mb-18">
              <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                Screening Programs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-warm-charcoal mt-1.5">
                Essential Screenings for Every Woman
              </h2>
              <p className="text-base text-warm-gray mt-2 leading-relaxed">
                Simple, routine diagnostic checks performed in a comfortable, sterile, and reassuring clinic environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pap Smear */}
              <div className="bg-warm-ivory rounded-3xl p-7 sm:p-9 border border-warm-border space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-warm-charcoal">
                  Pap Smear &amp; Cervical Health
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  Cervical cancer is almost completely preventable when detected early. We provide gentle Pap smear sampling and HPV counseling to catch abnormal cell changes long before they turn cancerous.
                </p>
                <div className="pt-2 text-xs sm:text-sm text-deep-mauve font-semibold">
                  Recommended every 3 years for women aged 21–65
                </div>
              </div>

              {/* Breast Health */}
              <div className="bg-warm-ivory rounded-3xl p-7 sm:p-9 border border-warm-border space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sage-green-light text-sage-green-dark flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-warm-charcoal">
                  Clinical Breast Examination
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  Clinical palpation, evaluation of lumps or nipple changes, guidance on self-breast examination techniques, and referrals for screening mammography for women aged 40 and above.
                </p>
                <div className="pt-2 text-xs sm:text-sm text-sage-green-dark font-semibold">
                  Gentle, private evaluation by Dr. Sornam
                </div>
              </div>

              {/* Menopause Care */}
              <div className="bg-warm-ivory rounded-3xl p-7 sm:p-9 border border-warm-border space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-warm-charcoal">
                  Perimenopause &amp; Menopause
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  Support through midlife hormonal transitions—addressing hot flashes, mood fluctuations, sleep disruption, bone density (osteoporosis prevention), and vaginal comfort.
                </p>
                <div className="pt-2 text-xs sm:text-sm text-deep-mauve font-semibold">
                  Personalized symptom relief &amp; vitality support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Life-Stage Health Focus */}
        <section className="py-20 sm:py-28 bg-warm-ivory-light">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                  Health Through the Decades
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-warm-charcoal leading-tight">
                  Proactive Care Across Every Age
                </h2>
                <p className="text-base text-warm-gray leading-relaxed">
                  A woman&apos;s biological needs evolve significantly across different decades. Our preventive checkups are structured around your specific age bracket and lifestyle demands:
                </p>

                <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-warm-charcoal">
                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-warm-border">
                    <strong className="text-deep-mauve block font-serif text-base">
                      20s &amp; 30s: Reproductive &amp; Metabolic Vitality
                    </strong>
                    <span className="text-warm-gray mt-1.5 block">
                      Routine Pap smears, PCOD screening, premarital health counseling, and hemoglobin/thyroid monitoring.
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-warm-border">
                    <strong className="text-deep-mauve block font-serif text-base">
                      40s: Perimenopause Transition &amp; Screening
                    </strong>
                    <span className="text-warm-gray mt-1.5 block">
                      Screening mammograms, pelvic ultrasounds for fibroids or heavy bleeding, lipid profiling, and blood pressure checks.
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-warm-border">
                    <strong className="text-deep-mauve block font-serif text-base">
                      50s &amp; Beyond: Healthy Longevity &amp; Bone Health
                    </strong>
                    <span className="text-warm-gray mt-1.5 block">
                      Bone mineral density screening, evaluation of postmenopausal bleeding, cardiovascular protection, and pelvic floor care.
                    </span>
                  </div>
                </div>
              </div>

              {/* Preventive Reminder Card */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-warm-border shadow-xs space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-sage-green-light text-sage-green-dark flex items-center justify-center">
                    <Smile className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-warm-charcoal">
                    Annual Well-Woman Checkup
                  </h3>
                  <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
                    Most women in Salem prioritize the health of their children, spouses, and parents while putting their own wellness on the back burner. An annual 45-minute well-woman checkup ensures you remain healthy, vibrant, and safeguarded.
                  </p>
                  <div className="p-5 bg-warm-ivory rounded-2xl text-xs sm:text-sm text-warm-gray border border-warm-border/60">
                    <strong className="text-deep-mauve block mb-1 font-serif text-sm">
                      Did you know?
                    </strong>
                    <span className="leading-relaxed block">
                      Routine cervical screening takes only 5 minutes in clinic and reduces the incidence of cervical cancer by over 80%.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 sm:py-28 bg-white border-t border-warm-border">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center space-y-3.5 mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-deep-mauve">
                Health Questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-warm-charcoal">
                Frequently Asked Preventive Health Questions
              </h2>
            </div>

            <div className="space-y-5">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-warm-ivory/60 rounded-3xl p-7 sm:p-8 border border-warm-border space-y-2.5"
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

        {/* Booking */}
        <AppointmentSection
          heading="Schedule Your Preventive Health Checkup"
          subheading="Visit Dr. R. M. Sornam Chokkalingam at Mangai Clinic, Angammal Colony, Salem."
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
