import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Morbihan Nautic — Location de Bateaux dans le Golfe du Morbihan",
  description:
    "Louez voiliers, semi-rigides et bateaux à moteur auprès de professionnels agréés dans le Golfe du Morbihan. Départ Vannes, Arradon, Le Crouesty. Devis sous 24 h.",
  keywords:
    "location bateau golfe du morbihan, louer bateau vannes, voilier arradon, semi-rigide crouesty, nautisme bretagne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Morbihan Nautic",
    "description": "Plateforme locale de réservation et location de bateaux (voiliers, semi-rigides, bateaux à moteur) dans le Golfe du Morbihan.",
    "url": "https://projet-bateaulevrai.pages.dev",
    "telephone": "+33695275422",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vannes",
      "addressRegion": "Morbihan",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6559,
      "longitude": -2.7603
    },
    "areaServed": "Golfe du Morbihan",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    }
  };

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} min-h-full flex flex-col bg-[var(--color-vasiere)] text-[var(--color-ecume)]`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
