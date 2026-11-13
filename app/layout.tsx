import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#654653",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mangaiclinic.com"),
  title: {
    template: "%s | Mangai Clinic Salem",
    default: "Mangai Clinic | Compassionate Women's Healthcare in Salem",
  },
  description:
    "Mangai Clinic in Angammal Colony, Salem, offers compassionate, personalized obstetric, gynecological, fertility, and women's health care led by Dr. R. M. Sornam Chokkalingam, MBBS, MD, DNB (OBG).",
  keywords: [
    "Gynecologist in Salem",
    "Obstetrician in Salem",
    "Women's health clinic in Salem",
    "Pregnancy care in Salem",
    "Fertility doctor in Salem",
    "Gynecology clinic in Salem",
    "Dr. R. M. Sornam Chokkalingam",
    "Mangai Clinic Salem",
    "Angammal Colony Gynecologist",
    "PCOD treatment Salem",
    "High risk pregnancy Salem",
  ],
  authors: [{ name: "Dr. R. M. Sornam Chokkalingam", url: "https://mangaiclinic.com/about" }],
  creator: "Mangai Clinic",
  publisher: "Mangai Clinic",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mangaiclinic.com",
    siteName: "Mangai Clinic Salem",
    title: "Mangai Clinic | Compassionate Women's Healthcare in Salem",
    description:
      "Personalized, trustworthy obstetrics, gynecology, and fertility care led by Dr. R. M. Sornam Chokkalingam in Angammal Colony, Salem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mangai Clinic | Compassionate Women's Healthcare in Salem",
    description:
      "Compassionate, evidence-based care for every stage of womanhood in Salem, Tamil Nadu.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-warm-ivory text-warm-charcoal font-sans antialiased selection:bg-dusty-rose selection:text-deep-mauve">
        {children}
      </body>
    </html>
  );
}
