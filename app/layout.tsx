import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SchemaMarkup } from "./components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lumbini Province Police Hackathon 2083 | Jestha 30-31, 2083 |",
  description:
    "The inaugural hackathon ever organized by Nepal Police, and the first by any governmental body in the country. Join the Lumbini Province Police Hackathon 2083 at Butwal, Rupandehi - a 36-hour innovation sprint building Cyber Forensic AI, IoT Public Safety, and Citizen-Police Tech solutions. NPR 1,00,000 prize pool. Free registration for developers across Nepal.",
  keywords: [
    "Lumbini Province Police Hackathon 2083",
    "Nepal Police Hackathon",
    "Butwal Hackathon",
    "Cyber Forensic AI",
    "IoT Public Safety",
    "Citizen Police Tech",
    "Lumbini Province Technology",
    "Nepal Developer Competition",
    "Police Innovation Challenge",
    "Digital Public Safety Nepal",
  ].join(", "),
  authors: [{ name: "Lumbini Province Police" }],
  creator: "Lumbini Province Police",
  publisher: "Lumbini Province Police",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackathon.nepalpolice.gov.np",
    title: "Lumbini Province Police Hackathon 2083",
    description:
      "Nepal Police proudly leads the nation as the first governmental body to organize a hackathon - a defining moment for public sector innovation in Nepal. A 36-hour sprint at Police Training Centre, Butwal, building Cyber Forensic AI, IoT Public Safety, and Citizen-Police Tech solutions. NPR 1,00,000 prize pool. Free registration.",
    siteName: "Lumbini Province Police Hackathon",
    images: [
      {
        url: "https://hackathon.nepalpolice.gov.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumbini Province Police Hackathon 2083 - 36-hour innovation sprint",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumbini Province Police Hackathon 2083",
    description:
      "The first hackathon ever by Nepal Police - and the first by any governmental body in the country. 36-hour sprint at Butwal. Free registration. NPR 1,00,000 prize pool.",
    images: ["https://hackathon.nepalpolice.gov.np/og-image.png"],
  },
  alternates: {
    languages: {
      en: "https://hackathon.nepalpolice.gov.np",
      ne: "https://hackathon.nepalpolice.gov.np/ne",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <SchemaMarkup />
        <meta
          name="google-site-verification"
          content="verification-code-here"
        />
        <meta name="msvalidate.01" content="verification-code-here" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
