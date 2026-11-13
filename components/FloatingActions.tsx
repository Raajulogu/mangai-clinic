"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating quick-actions once scrolled a bit past hero
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick contact and appointment actions"
      className={`fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* WhatsApp Action */}
      <a
        href={CLINIC_INFO.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Enquire on WhatsApp with Mangai Clinic"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block pr-1">
          WhatsApp Enquiry
        </span>
      </a>

      {/* Direct Call Action */}
      <a
        href={CLINIC_INFO.contact.phoneHref}
        className="group flex items-center gap-2 bg-deep-mauve text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-deep-mauve-dark transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-deep-mauve focus:ring-offset-2"
        aria-label="Call Mangai Clinic Salem directly"
      >
        <Phone className="w-5 h-5" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block pr-1">
          Call: +91 99444 66729
        </span>
      </a>

      {/* Book Online Pill on Mobile */}
      <a
        href={CLINIC_INFO.contact.healthplixBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden flex items-center gap-2 bg-warm-charcoal text-white px-3.5 py-2 rounded-full shadow-md text-xs font-medium"
      >
        <Calendar className="w-4 h-4 text-dusty-rose" />
        <span>Book Slot</span>
      </a>
    </aside>
  );
}

