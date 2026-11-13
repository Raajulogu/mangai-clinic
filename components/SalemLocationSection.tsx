import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function SalemLocationSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-warm-border/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <div className="space-y-3">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-deep-mauve bg-dusty-rose/40 rounded-full">
                Visit Us in Salem
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-charcoal font-normal leading-tight">
                Convenient Location in Angammal Colony, Salem
              </h2>
              <p className="text-sm sm:text-base text-warm-gray leading-relaxed pt-1">
                Mangai Clinic is centrally situated in Angammal Colony, Salem, providing a peaceful, quiet, and easily accessible setting for expecting mothers and women seeking medical care.
              </p>
            </div>

            {/* Address Details Card with Breathing Space */}
            <div className="bg-warm-ivory rounded-3xl p-6 sm:p-8 border border-warm-border shadow-xs space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl text-deep-mauve shadow-xs shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-deep-mauve" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-warm-charcoal uppercase tracking-wider">
                    Full Clinic Address
                  </h3>
                  <p className="text-sm sm:text-base text-warm-gray leading-relaxed mt-1.5">
                    {CLINIC_INFO.contact.address.street},<br />
                    {CLINIC_INFO.contact.address.locality},<br />
                    {CLINIC_INFO.contact.address.city}, {CLINIC_INFO.contact.address.state} – {CLINIC_INFO.contact.address.postalCode}
                  </p>
                  <p className="text-xs text-deep-mauve font-medium mt-1.5">
                    Landmark: {CLINIC_INFO.contact.address.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-warm-border/60">
                <div className="p-3 bg-white rounded-2xl text-deep-mauve shadow-xs shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-deep-mauve" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-warm-charcoal uppercase tracking-wider">
                    Consultation Hours
                  </h3>
                  <div className="text-xs sm:text-sm text-warm-gray space-y-1 mt-1.5">
                    <p><strong className="text-warm-charcoal">Morning:</strong> 10:00 AM – 1:30 PM (Mon – Sat)</p>
                    <p><strong className="text-warm-charcoal">Evening:</strong> 5:30 PM – 8:30 PM (Mon – Sat)</p>
                    <p className="text-warm-gray-light pt-0.5">Sunday: Closed / Prior inquiry for emergencies</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-warm-border/60">
                <div className="p-3 bg-white rounded-2xl text-deep-mauve shadow-xs shrink-0">
                  <Phone className="w-5 h-5 text-deep-mauve" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-warm-charcoal uppercase tracking-wider">
                    Reception &amp; Inquiries
                  </h3>
                  <a
                    href={CLINIC_INFO.contact.phoneHref}
                    className="text-sm sm:text-base font-semibold text-deep-mauve hover:underline block mt-0.5"
                  >
                    +91 99444 66729 / 0427-4300678
                  </a>
                </div>
              </div>
            </div>

            {/* Accessibility points */}
            <div className="space-y-2.5 text-xs sm:text-sm text-warm-gray">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sage-green-dark shrink-0" />
                <span>Comfortable private waiting area with gentle ambient lighting</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sage-green-dark shrink-0" />
                <span>Easily reachable from 5 Roads, Fairlands, and Salem Junction</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sage-green-dark shrink-0" />
                <span>Sterile, private ultrasound &amp; consultation examination room</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-deep-mauve text-white text-sm font-medium hover:bg-deep-mauve-dark transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-dusty-rose" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed / Preview (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-warm-ivory rounded-3xl p-3 sm:p-4 border border-warm-border shadow-healthcare">
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-warm-ivory-dark">
                <iframe
                  title="Mangai Clinic Location in Salem"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.3995577312384!2d78.1437!3d11.6643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf05555555555%3A0x0!2sAngammal+Colony%2C+Salem%2C+Tamil+Nadu+636009!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-90 contrast-95"
                />
                
                {/* Floating Map Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-warm-border text-xs">
                  <p className="font-serif text-sm font-semibold text-deep-mauve">
                    Mangai Clinic (மங்கை கிளினிக்)
                  </p>
                  <p className="text-warm-gray mt-1 leading-snug">
                    188/M1, Guptha Nagar, Angammal Colony, Salem 636009
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={CLINIC_INFO.contact.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-deep-mauve font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Open Navigation in Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
