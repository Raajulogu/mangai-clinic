"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu, X, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import { CLINIC_INFO } from "@/lib/clinic-data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Doctor" },
  { href: "/pregnancy-care", label: "Pregnancy Care" },
  { href: "/gynecology", label: "Gynecology" },
  { href: "/fertility-care", label: "Fertility Care" },
  { href: "/womens-health", label: "Women’s Health" },
  { href: "/contact", label: "Contact & Location" },
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
      {/* Top Notification Bar for Local Presence */}
      <div className="bg-deep-mauve text-soft-white text-xs py-2 px-4 border-b border-deep-mauve-dark/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-dusty-rose-light">
              <MapPin className="w-3.5 h-3.5 text-sage-green-light shrink-0" />
              <span>Angammal Colony, Salem, Tamil Nadu 636009</span>
            </span>
            <span className="hidden md:inline-block text-white/30">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/90">
              <Clock className="w-3.5 h-3.5 text-sage-green-light shrink-0" />
              <span>Mon – Sat: 10:00 AM – 1:30 PM & 5:30 PM – 8:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CLINIC_INFO.contact.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-dusty-rose transition-colors"
              aria-label="Call Mangai Clinic Salem"
            >
              <Phone className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
              <span>{CLINIC_INFO.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-warm-ivory/95 backdrop-blur-md shadow-sm border-b border-warm-border/60 py-3"
            : "bg-warm-ivory border-b border-warm-border/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Logo variant="header" />

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                      isActive
                        ? "text-deep-mauve font-semibold bg-dusty-rose-light/70"
                        : "text-warm-charcoal/90 hover:text-deep-mauve hover:bg-dusty-rose-light/40"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-deep-mauve rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={CLINIC_INFO.contact.phoneHref}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-deep-mauve bg-white border border-warm-border rounded-full hover:border-deep-mauve hover:bg-dusty-rose-light/30 transition-all shadow-xs"
                title="Call Mangai Clinic"
              >
                <Phone className="w-4 h-4 text-deep-mauve" />
                <span className="hidden xl:inline">Call Clinic</span>
              </a>

              <a
                href={CLINIC_INFO.contact.healthplixBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-deep-mauve hover:bg-deep-mauve-dark rounded-full shadow-sm hover:shadow transition-all group"
              >
                <Calendar className="w-4 h-4 text-dusty-rose transition-transform group-hover:scale-110" />
                <span>Book Appointment</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-deep-mauve hover:bg-dusty-rose-light focus:outline-none focus:ring-2 focus:ring-deep-mauve"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-out Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-warm-ivory shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden border-l border-warm-border ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="p-5 flex flex-col h-full overflow-y-auto">
          {/* Drawer Top */}
          <div className="flex items-center justify-between pb-4 border-b border-warm-border">
            <span className="font-serif text-lg font-semibold text-deep-mauve">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full text-warm-charcoal hover:bg-dusty-rose-light focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-4 space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-deep-mauve font-semibold bg-dusty-rose-light"
                      : "text-warm-charcoal hover:text-deep-mauve hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Direct Action Buttons */}
          <div className="pt-4 border-t border-warm-border space-y-3 mt-auto">
            <a
              href={CLINIC_INFO.contact.healthplixBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-deep-mauve text-white font-medium hover:bg-deep-mauve-dark transition-colors shadow-sm"
            >
              <Calendar className="w-5 h-5 text-dusty-rose" />
              <span>Book Appointment Online</span>
            </a>

            <a
              href={CLINIC_INFO.contact.phoneHref}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-warm-border text-deep-mauve font-medium hover:bg-dusty-rose-light/50 transition-colors"
            >
              <Phone className="w-4 h-4 text-deep-mauve" />
              <span>Call Clinic (+91 99444 66729)</span>
            </a>

            <div className="p-3 bg-white/80 rounded-xl border border-warm-border/70 text-xs text-warm-gray space-y-1">
              <p className="font-medium text-warm-charcoal">
                Dr. R. M. Sornam Chokkalingam
              </p>
              <p>MBBS, MD, DNB (Obstetrics & Gynecology)</p>
              <p className="pt-1 text-deep-mauve">188/M1, Guptha Nagar, Angammal Colony, Salem 636009</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

