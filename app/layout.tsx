import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import Nav from "@/components/nav/nav";

const roboto = Inter({
  weight: ["200", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tensum Solutions | Software Development Services in London",
    template: "%s | Tensum Solutions London",
  },
  description:
    "Leading software development company serving North London and Greater London areas. Expert IT services in Camden, Islington, Barnet, and across all London boroughs.",
  keywords: [
    "software development London",
    "IT services North London",
    "web development Camden",
    "software company Islington",
    "tech solutions Barnet",
    "mobile app development London",
    "IT consulting Greater London",
    "software engineers London",
    "North London tech company",
    "London software house",
  ],
  authors: [{ name: "Tensum Solutions" }],
  creator: "Tensum Solutions",
  publisher: "Tensum Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://tensumsolutions.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://tensumsolutions.com",
    siteName: "Tensum Solutions London",
    title: "Software Development & IT Services in London | Tensum Solutions",
    description:
      "Professional software development and IT services across London. Serving businesses in Camden, Islington, Barnet, and all London areas with custom tech solutions.",
    images: [
      {
        url: "/og-image-london.jpg",
        width: 1200,
        height: 630,
        alt: "Tensum Solutions - London Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development & IT Services in London | Tensum Solutions",
    description:
      "Professional software development and IT services across London. Serving businesses in Camden, Islington, Barnet, and all London areas.",
    images: ["/twitter-image-london.jpg"],
    creator: "@tensumsolutions",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
  classification: "Business & Technology",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.5074;-0.1278",
    ICBM: "51.5074, -0.1278",
  },
};

// Separate viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://tensumsolutions.co.uk" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
      </head>
      <body className={roboto.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
