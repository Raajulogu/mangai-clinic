import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Calendar,
  MessageCircle,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import AppointmentSection from "@/components/AppointmentSection";
import SalemLocationSection from "@/components/SalemLocationSection";
import { ClinicJsonLd } from "@/components/JsonLd";
import { CLINIC_INFO } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Contact & Location | Mangai Clinic Salem | Angammal Colony",
  description:
    "Contact Mangai Clinic in Salem. Phone: +91 99444 66729. Address: 188/M1, Guptha Nagar, Angammal Colony, Salem, Tamil Nadu 636009. Directions, consultation hours, and online booking.",
  keywords: [
    "Mangai Clinic Salem contact",
    "Gynecologist phone number Salem",
    "Mangai Clinic address Angammal Colony",
    "Book appointment Dr. R. M. Sornam",
    "Salem gynecologist clinic location",
  ],
  alternates: {
    canonical: "https://mangaiclinic.com/contact",
  },
  openGraph: {
    title: "Contact & Location | Mangai Clinic Salem",
    description:
      "Find location, consult timings, phone numbers, and book an appointment with Dr. R. M. Sornam Chokkalingam in Salem.",
    url: "https://mangaiclinic.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ClinicJsonLd />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-warm-ivory border-b border-warm-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Contact & Location", href: "/contact" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-warm-ivory via-warm-ivory-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Reach Mangai Clinic
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-warm-charcoal font-normal leading-tight">
                Contact &amp; Clinic Directions
              </h1>
              <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                We are here to assist you with scheduling your visit, answering consultation questions, and guiding you to our clinic in Angammal Colony, Salem.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Quick Cards Grid */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Phone */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-dusty-rose-light text-deep-mauve flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                    Call Reception
                  </h3>
                  <p className="text-xs text-warm-gray mt-1">
                    Direct assistance &amp; same-day inquiries
                  </p>
                </div>
                <div className="space-y-1.5 pt-1 text-sm font-medium text-deep-mauve">
                  <p>
                    <a href="tel:+919944466729" className="hover:underline">
                      +91 99444 66729
                    </a>
                  </p>
                  <p>
                    <a href="tel:+914274300678" className="hover:underline">
                      0427-4300678
                    </a>
                  </p>
                </div>
                <a
                  href="tel:+919944466729"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-deep-mauve text-white text-xs font-semibold hover:bg-deep-mauve-dark transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Tap to Call Clinic</span>
                </a>
              </div>

              {/* Card 2: WhatsApp */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#20bd5a] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                    WhatsApp Enquiry
                  </h3>
                  <p className="text-xs text-warm-gray mt-1">
                    Fast messaging for appointment slots
                  </p>
                </div>
                <p className="text-sm font-medium text-warm-charcoal pt-1">
                  +91 99444 66729
                </p>
                <a
                  href={CLINIC_INFO.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Card 3: Consultation Timings */}
              <div className="bg-warm-ivory rounded-3xl p-6 sm:p-7 border border-warm-border space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sage-green-light text-sage-green-dark flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                    Consultation Hours
                  </h3>
                  <p className="text-xs text-warm-gray mt-1">
                    Monday through Saturday
                  </p>
                </div>
                <div className="space-y-1 text-xs text-warm-gray pt-1">
                  <p><strong className="text-warm-charcoal">Morning:</strong> 10:00 AM – 1:30 PM</p>
                  <p><strong className="text-warm-charcoal">Evening:</strong> 5:30 PM – 8:30 PM</p>
                  <p className="text-deep-mauve font-medium pt-1">Sunday: By prior consultation</p>
                </div>
                <a
                  href={CLINIC_INFO.contact.healthplixBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-warm-border text-deep-mauve text-xs font-semibold hover:bg-dusty-rose-light/50 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Online via HealthPlix</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <SalemLocationSection />

        {/* Emergency Notice Callout */}
        <section className="py-8 bg-warm-ivory border-y border-warm-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-5 rounded-2xl bg-white border border-warm-border flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-deep-mauve shrink-0 mt-0.5" />
              <div className="text-xs text-warm-gray leading-relaxed space-y-1">
                <h2 className="font-serif text-sm font-semibold text-deep-mauve">
                  Emergency Medical Notice
                </h2>
                <p>
                  Mangai Clinic is an outpatient consultation and diagnostic center. If you are experiencing acute medical trauma, severe sudden abdominal pain, continuous unmanageable bleeding, or active obstetric labor complications, please proceed directly to the nearest hospital emergency department with tertiary obstetric facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Form */}
        <AppointmentSection
          heading="Send Us a Consultation Message"
          subheading="We will confirm your appointment slot at Mangai Clinic, Salem."
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

