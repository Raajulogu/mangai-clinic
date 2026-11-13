import { CLINIC_INFO } from "@/lib/clinic-data";

export function ClinicJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://mangaiclinic.com/#clinic",
        name: CLINIC_INFO.name,
        alternateName: CLINIC_INFO.tamilName,
        url: "https://mangaiclinic.com",
        logo: "https://mangaiclinic.com/logo.png",
        telephone: "+919944466729",
        priceRange: "₹₹",
        medicalSpecialty: [
          "Obstetrics",
          "Gynecology",
          "ReproductiveHealth",
          "PublicHealth",
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Antenatal & High-Risk Pregnancy Care",
          },
          {
            "@type": "MedicalProcedure",
            name: "Gynecological Consultation & Menstrual Health",
          },
          {
            "@type": "MedicalProcedure",
            name: "Fertility Evaluation & Preconception Counseling",
          },
          {
            "@type": "MedicalProcedure",
            name: "Cervical Cancer Screening (Pap Smear)",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC_INFO.contact.address.street,
          addressLocality: CLINIC_INFO.contact.address.locality,
          addressRegion: CLINIC_INFO.contact.address.state,
          postalCode: CLINIC_INFO.contact.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CLINIC_INFO.seo.geo.latitude,
          longitude: CLINIC_INFO.seo.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "13:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "17:30",
            closes: "20:30",
          },
        ],
        founder: {
          "@id": "https://mangaiclinic.com/#physician",
        },
      },
      {
        "@type": "Physician",
        "@id": "https://mangaiclinic.com/#physician",
        name: CLINIC_INFO.doctor.name,
        medicalSpecialty: [
          "Obstetrics",
          "Gynecology",
          "Fertility",
        ],
        jobTitle: CLINIC_INFO.doctor.title,
        description:
          "Dr. R. M. Sornam Chokkalingam is a Consultant Obstetrician, Gynecologist and Fertility Specialist in Salem, Tamil Nadu, holding MBBS, MD (Obstetrics & Gynecology), and DNB (OBG).",
        worksFor: {
          "@id": "https://mangaiclinic.com/#clinic",
        },
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "MBBS, MD (Obstetrics & Gynecology), DNB (OBG)",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC_INFO.contact.address.street,
          addressLocality: CLINIC_INFO.contact.address.locality,
          addressRegion: CLINIC_INFO.contact.address.state,
          postalCode: CLINIC_INFO.contact.address.postalCode,
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://mangaiclinic.com/#website",
        url: "https://mangaiclinic.com",
        name: "Mangai Clinic Salem",
        description:
          "Compassionate, evidence-based obstetrics, gynecology, fertility and women's health care in Salem, Tamil Nadu.",
        publisher: {
          "@id": "https://mangaiclinic.com/#clinic",
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

