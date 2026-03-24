import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ | PizzaSoul – Häufige Fragen zur Pizza",
  description: "Häufige Fragen zur Pizza: Wie macht man perfekte Pizza? Welcher Pizzaofen ist der beste? Wie lange muss Pizzateig gehen?",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | PizzaSoul – Häufige Fragen zur Pizza",
    description: "Häufige Fragen zur Pizza beantwortet.",
    images: ["https://pizzasoul.shadowsinthe.space/images/hero-pizza.png"],
  },
};

// JSON-LD for FAQ Page - must be in head
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie macht man eine perfekte Pizza zuhause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die perfekte Pizza braucht drei Dinge: 1) Einen heißen Ofen (mindestens 250°C, besser 400-500°C). 2) Einen gut gereiften Teig (mindestens 24 Stunden Kühlgare). 3) Qualitätszutaten (Tipo 00 Mehl, San Marzano Tomaten, echter Mozzarella).",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Pizza Napoletana und Pizza Margherita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technisch gesehen IST die Pizza Margherita eine Pizza Napoletana. Die Margherita ist eine spezielle Variante mit Tomaten, Mozzarella und Basilikum – benannt nach Königin Margherita von Italien.",
      },
    },
    {
      "@type": "Question",
      name: "Welcher Pizzaofen ist der beste für zuhause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ooni Koda 12 (€299) – Bester Einstieg, kompakt, Gas, 500°C. Ooni Fyra 12 (€379) – Für Holzpellet-Liebhaber. Gozney Roccbox (€499) – Premium-Qualität, Dual-Fuel.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange muss Pizzateig gehen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mindestens 24 Stunden bei Kühlschranktemperatur (4-8°C). Für optimale Ergebnisse: 48-72 Stunden. Je länger die Gare, desto besser der Geschmack.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Temperatur braucht eine Pizza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für Neapolitanische Pizza: 400-500°C (Backzeit 60-90 Sekunden). Für домаusbacken im Ofen: 250-300°C (Backzeit 8-12 Minuten).",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQClient />
    </>
  );
}
