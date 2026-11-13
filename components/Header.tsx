"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu, X, MapPin, Clock, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { CLINIC_INFO } from "@/lib/clinic-data";

// Streamlined, single-line desktop navigation labels (prevents multi-line text wrapping)
const NAV_LINKS = [
  { href: "/", label: "Home", fullLabel: "Home" },
  { href: "/about", label: "About", fullLabel: "About Dr. Sornam Chokkalingam" },
  { href: "/pregnancy-care", label: "Pregnancy", fullLabel: "Pregnancy & Antenatal Care" },
  { href: "/gynecology", label: "Gynecology", fullLabel: "Gynecological Health & PCOD" },
  { href: "/fertility-care", label: "Fertility", fullLabel: "Fertility & Preconception" },
  { href: "/womens-health", label: "Women’s Health", fullLabel: "Women’s Health & Prevention" },
  { href: "/contact", label: "Contact", fullLabel: "Contact & Clinic Location" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Reassuring Clinic Notice Bar */}
      <div className="bg-deep-mauve text-soft-white text-xs py-2 px-4 border-b border-deep-mauve-dark/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-dusty-rose-light text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-sage-green-light shrink-0" />
              <span className="truncate">Angammal Colony, Salem 636009</span>
            </span>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/90 text-xs">
              <Clock className="w-3.5 h-3.5 text-sage-green-light shrink-0" />
              <span>Mon – Sat: 10 AM – 1:30 PM & 5:30 PM – 8:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.contact.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-dusty-rose text-[11px] sm:text-xs transition-colors"
              aria-label="Call Mangai Clinic Salem"
            >
              <Phone className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
              <span>+91 99444 66729</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-warm-ivory/95 backdrop-blur-md shadow-sm border-b border-warm-border/80 py-2.5 sm:py-3"
            : "bg-warm-ivory border-b border-warm-border/50 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Clinic Logo */}
            <Logo variant="header" />

            {/* Desktop Navigation (visible on xl: 1280px and wider, strictly single-line, zero wrapping) */}
            <nav
              className="hidden xl:flex items-center gap-1 2xl:gap-2"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                      isActive
                        ? "text-deep-mauve font-semibold bg-dusty-rose-light/80 shadow-xs"
                        : "text-warm-charcoal/85 hover:text-deep-mauve hover:bg-white/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Call Button (visible on tablet and desktop) */}
              <a
                href={CLINIC_INFO.contact.phoneHref}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-deep-mauve bg-white border border-warm-border rounded-full hover:border-deep-mauve hover:bg-dusty-rose-light/30 transition-all shadow-xs whitespace-nowrap"
                title="Call Mangai Clinic"
              >
                <Phone className="w-3.5 h-3.5 text-deep-mauve shrink-0" />
                <span className="hidden 2xl:inline">0427-4300678</span>
                <span className="2xl:hidden">Call</span>
              </a>

              {/* Book Appointment CTA (visible on tablet and desktop) */}
              <a
                href={CLINIC_INFO.contact.healthplixBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs font-semibold text-white bg-deep-mauve hover:bg-deep-mauve-dark rounded-full shadow-sm hover:shadow transition-all group whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-dusty-rose transition-transform group-hover:scale-110 shrink-0" />
                <span>Book Appointment</span>
              </a>

              {/* Mobile Quick Phone Tap (visible on small mobile only) */}
              <a
                href={CLINIC_INFO.contact.phoneHref}
                className="sm:hidden inline-flex items-center justify-center p-2 rounded-xl text-deep-mauve bg-white border border-warm-border"
                aria-label="Call Clinic"
              >
                <Phone className="w-4 h-4 text-deep-mauve" />
              </a>

              {/* Mobile & Tablet Hamburger Button (shown on < xl: up to 1279px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden inline-flex items-center justify-center p-2 rounded-xl text-deep-mauve bg-white border border-warm-border hover:bg-dusty-rose-light focus:outline-none focus:ring-2 focus:ring-deep-mauve shrink-0"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-warm-charcoal/40 backdrop-blur-xs xl:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile & Tablet Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs sm:max-w-sm bg-warm-ivory shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out xl:hidden border-l border-warm-border ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          {/* Top Bar of Drawer */}
          <div className="flex items-center justify-between pb-5 border-b border-warm-border">
            <span className="font-serif text-lg font-semibold text-deep-mauve">
              Mangai Clinic Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-warm-charcoal bg-white border border-warm-border hover:bg-dusty-rose-light focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links with Breathing Space & Full Descriptive Titles */}
          <nav className="py-6 space-y-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm sm:text-base font-medium transition-all ${
                    isActive
                      ? "text-deep-mauve font-semibold bg-white shadow-xs border border-warm-border/80"
                      : "text-warm-charcoal/90 hover:text-deep-mauve hover:bg-white/60"
                  }`}
                >
                  <span>{link.fullLabel}</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isActive ? "text-deep-mauve" : "text-warm-border"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Drawer Actions & Clinic Info */}
          <div className="pt-6 border-t border-warm-border space-y-3 mt-auto">
            <a
              href={CLINIC_INFO.contact.healthplixBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-full bg-deep-mauve text-white font-semibold text-sm hover:bg-deep-mauve-dark transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 text-dusty-rose" />
              <span>Book Appointment Online</span>
            </a>

            <a
              href={CLINIC_INFO.contact.phoneHref}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white border border-warm-border text-deep-mauve font-semibold text-sm hover:bg-dusty-rose-light/50 transition-colors"
            >
              <Phone className="w-4 h-4 text-deep-mauve" />
              <span>Call: +91 99444 66729</span>
            </a>

            <div className="p-4 bg-white/90 rounded-2xl border border-warm-border/80 text-xs text-warm-gray space-y-1.5 mt-2">
              <p className="font-serif font-semibold text-warm-charcoal text-sm">
                Dr. R. M. Sornam Chokkalingam
              </p>
              <p className="text-deep-mauve font-medium">MBBS, MD, DNB (Obstetrics &amp; Gynecology)</p>
              <p className="text-warm-gray/80 pt-1">188/M1, Guptha Nagar, Angammal Colony, Salem 636009</p>
              <p className="text-warm-charcoal/70 text-[11px] pt-0.5">மங்கை கிளினிக் • சேலம்</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
