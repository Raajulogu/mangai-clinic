import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Calendar, Heart, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { CLINIC_INFO, SERVICES_DATA } from "@/lib/clinic-data";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-warm-charcoal text-white/90 pt-16 pb-10 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" />
            <p className="text-sm text-white/70 leading-relaxed pt-2">
              Mangai Clinic is a dedicated women&apos;s healthcare practice in Salem, Tamil Nadu. Led by Dr. R. M. Sornam Chokkalingam, we provide patient-centered obstetrics, gynecology, and fertility guidance in a gentle, unhurried, and reassuring atmosphere.
            </p>
            <div className="pt-2 text-xs text-white/60 space-y-1">
              <p className="font-medium text-dusty-rose">
                Dr. R. M. Sornam Chokkalingam
              </p>
              <p>MBBS, MD (Obstetrics & Gynecology), DNB (OBG)</p>
              <p className="text-white/50">Consultant Obstetrician & Gynecologist</p>
            </div>
          </div>

          {/* Col 2: Clinical Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              Clinical Care
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-white/70 hover:text-dusty-rose transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-dusty-rose/60 text-xs">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-dusty-rose transition-colors flex items-center gap-1.5"
                >
                  <span className="text-dusty-rose/60 text-xs">›</span>
                  <span>Meet Dr. Sornam Chokkalingam</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-dusty-rose transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-dusty-rose transition-colors">
                  About the Doctor
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-dusty-rose transition-colors">
                  Contact & Map
                </Link>
              </li>
              <li>
                <a
                  href={CLINIC_INFO.contact.healthplixBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dusty-rose hover:text-white font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Online</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Salem Clinic Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide">
              Salem Clinic
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-dusty-rose shrink-0 mt-0.5" />
                <span>
                  188/M1, Guptha Nagar, Angammal Colony, Salem, Tamil Nadu 636009
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-dusty-rose shrink-0" />
                <a
                  href={CLINIC_INFO.contact.phoneHref}
                  className="hover:text-dusty-rose transition-colors"
                >
                  +91 99444 66729 / 0427-4300678
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sage-green-light shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <p className="text-white/80 font-medium">Consultation Timings:</p>
                  <p>Mon – Sat: 10:00 AM – 1:30 PM</p>
                  <p>Evening: 5:30 PM – 8:30 PM</p>
                  <p className="text-white/50 pt-0.5">Prior appointment advised</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Medical Notice & Legal Disclaimer */}
        <div className="py-6 border-b border-white/10 text-xs text-white/60 space-y-2">
          <div className="flex items-center gap-2 text-dusty-rose font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Healthcare Notice & Medical Information Disclaimer</span>
          </div>
          <p className="leading-relaxed">
            The information published on this website is for educational and general patient awareness purposes only. It is not intended as medical advice, clinical diagnosis, or treatment guarantees. Every individual&apos;s health condition requires direct evaluation by a qualified medical practitioner. If you are experiencing acute medical distress or an obstetric emergency, please visit the emergency department of the nearest hospital immediately.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Location Tags */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} Mangai Clinic (மங்கை கிளினிக்), Salem. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/40">
            <span>Salem, Tamil Nadu</span>
            <span>•</span>
            <span>Angammal Colony</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-dusty-rose/80">
              <Heart className="w-3 h-3 fill-current" /> Women&apos;s Health
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
