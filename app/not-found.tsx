import Link from "next/link";
import { Home, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { CLINIC_INFO } from "@/lib/clinic-data";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 sm:py-32 px-5 sm:px-6 bg-warm-ivory pb-28 sm:pb-24">
        <div className="max-w-xl text-center space-y-7 bg-white p-8 sm:p-14 rounded-3xl border border-warm-border shadow-healthcare">
          <span className="font-serif text-6xl font-semibold text-deep-mauve block">
            404
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-warm-charcoal">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-warm-gray leading-relaxed max-w-md mx-auto">
            The page you are looking for may have moved or is temporarily unavailable. Let us help guide you back to safety and care.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-deep-mauve text-white text-sm font-medium hover:bg-deep-mauve-dark transition-all shadow-xs"
            >
              <Home className="w-4 h-4 text-dusty-rose" />
              <span>Back to Homepage</span>
            </Link>

            <a
              href={CLINIC_INFO.contact.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-warm-ivory text-warm-charcoal border border-warm-border hover:border-deep-mauve text-sm font-medium transition-all"
            >
              <Phone className="w-4 h-4 text-deep-mauve" />
              <span>Call Clinic</span>
            </a>
          </div>

          <div className="pt-6 border-t border-warm-border/60 text-xs text-warm-gray">
            <p className="font-serif font-semibold text-deep-mauve text-sm">
              Mangai Clinic • Angammal Colony, Salem
            </p>
            <p className="mt-1">+91 99444 66729 • Mon – Sat Consultation</p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
