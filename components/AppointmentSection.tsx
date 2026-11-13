"use client";

import { useState } from "react";
import {
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Send,
} from "lucide-react";
import { CLINIC_INFO, SERVICES_DATA } from "@/lib/clinic-data";

export default function AppointmentSection({
  heading = "Book Your Consultation with Dr. R. M. Sornam Chokkalingam",
  subheading = "Choose the most convenient way to schedule your visit at Mangai Clinic in Angammal Colony, Salem.",
}: {
  heading?: string;
  subheading?: string;
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Pregnancy Care",
    timePreference: "Morning (10:00 AM - 1:30 PM)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your name and phone number.");
      return;
    }
    setFormSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Mangai Clinic, I would like to request an appointment.%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Service:* ${encodeURIComponent(
      formData.service
    )}%0A*Preferred Time:* ${encodeURIComponent(
      formData.timePreference
    )}${
      formData.notes
        ? `%0A*Notes:* ${encodeURIComponent(formData.notes)}`
        : ""
    }`;
    return `https://wa.me/919944466729?text=${text}`;
  };

  return (
    <section
      id="book-appointment"
      className="py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-warm-ivory via-dusty-rose-light/20 to-warm-ivory scroll-mt-20 border-t border-warm-border/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header with Breathing Room */}
        <div className="max-w-3xl mx-auto text-center space-y-3.5 mb-14 sm:mb-18">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
            Patient Appointments • Salem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-charcoal font-normal leading-tight">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Fast Booking Options (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* HealthPlix Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xs border border-warm-border space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3.5 bg-dusty-rose-light rounded-2xl text-deep-mauve">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-deep-mauve">
                    Direct Slot Booking
                  </h3>
                  <p className="text-xs text-warm-gray mt-0.5">
                    Instant calendar selection via HealthPlix portal
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
                Choose your preferred date and time slot directly on Dr. R. M. Sornam Chokkalingam&apos;s verified appointment schedule.
              </p>

              <a
                href={CLINIC_INFO.contact.healthplixBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-deep-mauve text-white font-medium hover:bg-deep-mauve-dark transition-all shadow-xs group"
              >
                <span>Book Slot on HealthPlix</span>
                <span className="text-dusty-rose transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Quick Call & WhatsApp Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xs border border-warm-border space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3.5 bg-sage-green-light rounded-2xl text-sage-green-dark">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-warm-charcoal">
                    Speak with Reception
                  </h3>
                  <p className="text-xs text-warm-gray mt-0.5">
                    For questions, same-day inquiries, or guidance
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <a
                  href={CLINIC_INFO.contact.phoneHref}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-warm-border hover:border-deep-mauve hover:bg-dusty-rose-light/20 transition-all text-sm font-medium text-warm-charcoal"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-deep-mauve" />
                    <span>Call: +91 99444 66729</span>
                  </span>
                  <span className="text-xs text-deep-mauve font-semibold">Tap to Call</span>
                </a>

                <a
                  href={CLINIC_INFO.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all text-sm font-medium text-warm-charcoal"
                >
                  <span className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-[#20bd5a]" />
                    <span>WhatsApp Consultation Request</span>
                  </span>
                  <span className="text-xs text-[#1e9e4f] font-semibold">Message Us</span>
                </a>
              </div>

              <div className="pt-3 text-xs sm:text-sm text-warm-gray space-y-1.5 border-t border-warm-border/60">
                <div className="flex items-center gap-2 text-deep-mauve font-semibold">
                  <Clock className="w-4 h-4 text-deep-mauve shrink-0" />
                  <span>Clinic Consultation Hours</span>
                </div>
                <p>Monday – Saturday: 10:00 AM – 1:30 PM &amp; 5:30 PM – 8:30 PM</p>
                <p className="text-warm-gray-light text-xs">Sunday: Closed / Prior appointment for emergency guidance</p>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-healthcare border border-warm-border">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-deep-mauve">
                    Send an Appointment Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-warm-gray mt-1.5 leading-relaxed">
                    Fill in your details below and our clinic staff in Salem will get in touch to confirm your consultation time.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="patient-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-warm-charcoal mb-2"
                    >
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      required
                      placeholder="e.g. Priya Sundaram"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-warm-border bg-warm-ivory/30 text-sm sm:text-base text-warm-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-deep-mauve focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="patient-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-warm-charcoal mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-warm-border bg-warm-ivory/30 text-sm sm:text-base text-warm-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-deep-mauve focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-semibold uppercase tracking-wider text-warm-charcoal mb-2"
                    >
                      Service Required
                    </label>
                    <select
                      id="service-select"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-warm-border bg-warm-ivory/30 text-sm sm:text-base text-warm-charcoal focus:outline-none focus:ring-2 focus:ring-deep-mauve focus:bg-white transition-all"
                    >
                      <option value="Pregnancy Care">Pregnancy Care &amp; Antenatal Checkup</option>
                      <option value="High Risk Pregnancy">High-Risk Pregnancy Guidance</option>
                      <option value="PCOD / PCOS Care">PCOD / PCOS &amp; Menstrual Issues</option>
                      <option value="Gynecological Consultation">General Gynecological Care</option>
                      <option value="Fertility Evaluation">Fertility &amp; Preconception Counseling</option>
                      <option value="Pap Smear & Screening">Pap Smear &amp; Cervical Screening</option>
                      <option value="Menopause Support">Perimenopause &amp; Menopause Support</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="time-select"
                      className="block text-xs font-semibold uppercase tracking-wider text-warm-charcoal mb-2"
                    >
                      Preferred Consultation Slot
                    </label>
                    <select
                      id="time-select"
                      value={formData.timePreference}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          timePreference: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-2xl border border-warm-border bg-warm-ivory/30 text-sm sm:text-base text-warm-charcoal focus:outline-none focus:ring-2 focus:ring-deep-mauve focus:bg-white transition-all"
                    >
                      <option value="Morning (10:00 AM - 1:30 PM)">
                        Morning Session (10:00 AM – 1:30 PM)
                      </option>
                      <option value="Evening (5:30 PM - 8:30 PM)">
                        Evening Session (5:30 PM – 8:30 PM)
                      </option>
                      <option value="Any Available Slot">
                        Any Convenient Slot
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-xs font-semibold uppercase tracking-wider text-warm-charcoal mb-2"
                  >
                    Any specific queries or details (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Briefly mention if you have any existing reports, trimester week, or questions..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl border border-warm-border bg-warm-ivory/30 text-sm sm:text-base text-warm-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-deep-mauve focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-warm-gray">
                    <ShieldCheck className="w-4 h-4 text-sage-green-dark shrink-0" />
                    <span>Your medical details remain strictly private.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-deep-mauve hover:bg-deep-mauve-dark text-white font-medium text-sm sm:text-base shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4 text-dusty-rose" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-green-light text-sage-green-dark">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-deep-mauve">
                  Thank You, {formData.name}
                </h3>
                <p className="text-sm sm:text-base text-warm-gray max-w-md mx-auto leading-relaxed">
                  We have received your appointment enquiry for{" "}
                  <strong className="text-warm-charcoal">{formData.service}</strong> (
                  {formData.timePreference}). Our clinic staff will review the schedule and confirm your consultation time via phone ({formData.phone}).
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                  <a
                    href={constructWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bd5a] transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Forward Details via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        service: "Pregnancy Care",
                        timePreference: "Morning (10:00 AM - 1:30 PM)",
                        notes: "",
                      });
                    }}
                    className="px-5 py-2.5 text-sm text-warm-gray hover:text-deep-mauve"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
