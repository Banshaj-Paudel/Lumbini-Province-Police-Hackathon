export function SchemaMarkup() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Lumbini Province Police Hackathon 2083",
    description:
      "The inaugural hackathon ever organized by Nepal Police, and the first by any governmental body in the country. The Lumbini Province Police Hackathon 2083 is a 36-hour innovation sprint at Police Training Centre, Butwal, Rupandehi, where developers build Cyber Forensic AI, IoT Public Safety, and Citizen-Police Tech solutions.",
    startDate: "2083-06-30",
    endDate: "2083-07-01",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Police Training Centre, Butwal, Rupandehi",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Butwal",
        addressRegion: "Rupandehi",
        postalCode: "32900",
        addressCountry: "NP",
      },
    },
    image: "https://hackathon.nepalpolice.gov.np/og-image.png",
    url: "https://hackathon.nepalpolice.gov.np",
    offers: {
      "@type": "Offer",
      name: "Hackathon Registration",
      price: "0",
      priceCurrency: "NPR",
      url: "https://hackathon.nepalpolice.gov.np#register",
      availability: "https://schema.org/PreOrder",
      validFrom: "2083-05-15",
    },
    organizer: {
      "@type": "Organization",
      name: "Lumbini Province Police Office",
      url: "https://lumbini.nepalpolice.gov.np",
      logo: "https://hackathon.nepalpolice.gov.np/logo.png",
      sameAs: ["https://www.facebook.com/lppodang"],
    },
    awardWon: {
      "@type": "MonetaryAmount",
      currency: "NPR",
      amount: "100000",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lumbini Province Police Office",
    description:
      "Lumbini Province Police Office - proudly leading the nation as the first governmental body to organize a hackathon, a defining moment for public sector innovation in Nepal. Advancing digital public safety and citizen-police innovation across Lumbini Province.",
    url: "https://lumbini.nepalpolice.gov.np",
    telephone: "+977-71-1234567",
    email: "ujjwalkhadka@nepalpolice.gov.np",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Butwal",
      addressRegion: "Rupandehi",
      postalCode: "32900",
      addressCountry: "NP",
    },
    sameAs: ["https://www.facebook.com/lppodang"],
    areaServed: "Lumbini Province",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who can participate in Lumbini Province Police Hackathon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The hackathon is Open to innovators across Nepal and tech enthusiasts. Teams of 3-4 members are required.",
        },
      },
      {
        "@type": "Question",
        name: "What is the registration fee for the hackathon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The hackathon is completely FREE to participate! There is no registration charge.",
        },
      },
      {
        "@type": "Question",
        name: "What are the hackathon tracks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three tracks: Cyber Forensic AI (digital investigation tools), IoT Public Safety (sensor networks), and Citizen-Police Tech (community platforms).",
        },
      },
      {
        "@type": "Question",
        name: "When is the Lumbini Police Hackathon happening?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The hackathon is scheduled for Jestha 30-31, 2083 (June 13-14, 2026) at Police Training Centre, Butwal, Rupandehi.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hackathon.nepalpolice.gov.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hackathon",
        item: "https://hackathon.nepalpolice.gov.np#tracks",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Register",
        item: "https://hackathon.nepalpolice.gov.np#register",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
