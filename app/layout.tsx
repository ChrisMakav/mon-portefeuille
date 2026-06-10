import type { Metadata } from "next";
import { Barlow_Condensed, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachide Mabila — Ingénieur Chef de Projet & Expert Digital | MAKAV Service Digital",
  description:
    "Ingénieur avec 15 ans d'expérience industrielle (GE Energy, Total E&P, Wabtec, Zodiac Aerospace). Expert en transformation digitale, IA, automatisation et développement web. Basé en France, disponible à distance.",
  openGraph: {
    title: "Rachide Mabila — Ingénieur Chef de Projet & Expert Digital",
    description:
      "15 ans d'expérience industrielle, expert digital. Transformation, IA, automatisation, développement web. 50+ projets livrés.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${barlowCondensed.variable} ${outfit.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-fg">
        {children}
      </body>
    </html>
  );
}
