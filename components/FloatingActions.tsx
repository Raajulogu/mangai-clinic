"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating quick-actions once scrolled a bit past hero
      setIsVisible(window.scrollY > 240);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MOBILE FIXED BOTTOM ACTION BAR (Touch-friendly, thumb-zone, 0 clutter) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-warm-border p-3 sm:hidden shadow-lg transition-transform duration-300">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
          {/* Quick Call */}
          <a
            href={CLINIC_INFO.contact.phoneHref}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-warm-ivory border border-warm-border text-deep-mauve font-semibold text-xs active:bg-dusty-rose-light transition-colors"
            aria-label="Call Mangai Clinic Salem"
          >
            <Phone className="w-4 h-4 text-deep-mauve shrink-0" />
            <span>Call Clinic</span>
          </a>

          {/* Quick Book */}
          <a
            href={CLINIC_INFO.contact.healthplixBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-deep-mauve text-white font-semibold text-xs active:bg-deep-mauve-dark shadow-sm transition-colors"
            aria-label="Book Appointment Online"
          >
            <Calendar className="w-4 h-4 text-dusty-rose shrink-0" />
            <span>Book Appointment</span>
          </a>
        </div>
      </div>

      {/* DESKTOP / TABLET REFINED FLOATING ACTIONS */}
      <aside
        aria-label="Quick contact and appointment actions"
        className={`hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp Direct Chat */}
        <a
          href={CLINIC_INFO.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          aria-label="Enquire on WhatsApp with Mangai Clinic"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-semibold tracking-wide pr-1">
            WhatsApp Doctor Enquiry
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={CLINIC_INFO.contact.phoneHref}
          className="group flex items-center gap-2.5 bg-deep-mauve text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-deep-mauve-dark transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-deep-mauve focus:ring-offset-2"
          aria-label="Call Mangai Clinic Salem directly"
        >
          <Phone className="w-4 h-4 text-dusty-rose" />
          <span className="text-xs font-semibold tracking-wide pr-1">
            +91 99444 66729
          </span>
        </a>
      </aside>
    </>
  );
}
