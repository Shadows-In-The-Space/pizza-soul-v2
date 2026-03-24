import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navigation, Footer } from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pizzasoul.shadowsinthe.space"),
  title: {
    default: "PizzaSoul 🍕 | The Perfect Slice",
    template: "%s | PizzaSoul",
  },
  description:
    "Der beste Pizza Blog im Ruhrgebiet. Authentische Rezepte, professionelle Workshops und die besten Pizzerien – für Liebhaber, nicht für Touristen.",
  authors: [{ name: "PizzaSoul Team" }],
  creator: "PizzaSoul",
  publisher: "PizzaSoul",
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "https://pizzasoul.shadowsinthe.space/",
      "de-AT": "https://pizzasoul.shadowsinthe.space/",
      "de-CH": "https://pizzasoul.shadowsinthe.space/",
      "x-default": "https://pizzasoul.shadowsinthe.space/",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://pizzasoul.shadowsinthe.space",
    siteName: "PizzaSoul",
    title: "PizzaSoul 🍕 | The Perfect Slice",
    description: "Der beste Pizza Blog im Ruhrgebiet. Rezepte, Workshops und Pizzerien.",
    images: [
      {
        url: "https://pizzasoul.shadowsinthe.space/images/hero-pizza.png",
        width: 1200,
        height: 630,
        alt: "PizzaSoul - The Perfect Slice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PizzaSoul 🍕 | The Perfect Slice",
    description: "Der beste Pizza Blog im Ruhrgebiet.",
    images: ["https://pizzasoul.shadowsinthe.space/images/hero-pizza.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema for GEO/Local SEO
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PizzaSoul",
    description: "Der beste Pizza Blog im Ruhrgebiet. Rezepte, Workshops und die besten Pizzerien.",
    url: "https://pizzasoul.shadowsinthe.space",
    areaServed: {
      "@type": "Place",
      name: "Ruhrgebiet, Deutschland",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bochum",
      addressRegion: "NRW",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4833,
      longitude: 7.2167,
    },
    sameAs: [
      "https://www.instagram.com/pizzasoul",
      "https://facebook.com/pizzasoul"
    ],
  };

  // WebSite Schema with SearchAction for Google SGE
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PizzaSoul",
    url: "https://pizzasoul.shadowsinthe.space",
    description: "Der beste Pizza Blog im Ruhrgebiet.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://pizzasoul.shadowsinthe.space/rezepte?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="de" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessJsonLd, websiteJsonLd]) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[#1A1A1A] text-[#F5F5F5] min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
