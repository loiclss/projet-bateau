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
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body
        className={`${inter.className} min-h-full flex flex-col bg-[#0a1628] text-slate-100`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
