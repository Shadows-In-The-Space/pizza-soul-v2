"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Wie macht man eine perfekte Pizza zuhause?",
    answer:
      "Die perfekte Pizza braucht drei Dinge: 1) Einen heißen Ofen (mindestens 250°C, besser 400-500°C). 2) Einen gut gereiften Teig (mindestens 24 Stunden Kühlgare). 3) Qualitätszutaten (Tipo 00 Mehl, San Marzano Tomaten, echter Mozzarella). Der Teig sollte mit Poolish oder langer Kalte Gäre entwickelt werden – das gibt den komplexen Geschmack.",
    category: "rezepte",
  },
  {
    question: "Was ist der Unterschied zwischen Pizza Napoletana und Pizza Margherita?",
    answer:
      "Technisch gesehen IST die Pizza Margherita eine Pizza Napoletana. Die Margherita ist eine spezielle Variante mit Tomaten, Mozzarella und Basilikum – benannt nach Königin Margherita von Italien. Eine 'Pizza Napoletana' kann aber auch andere Beläge haben. Das DOC-Siegel für Pizza Napoletana erlaubt nur diese drei Zutaten plus Olivenöl und Salz.",
    category: "rezepte",
  },
  {
    question: "Welcher Pizzaofen ist der beste für zuhause?",
    answer:
      "Für den Hausgebrauch empfehlen wir: 1) Ooni Koda 12 (€299) – Bester Einstieg, kompakt, Gas, 500°C. 2) Ooni Fyra 12 (€379) – Für Holzpellet-Liebhaber mit echtem Raucharoma. 3) Gozney Roccbox (€499) – Premium-Qualität, Dual-Fuel. Entscheidend ist, dass der Ofen mindestens 400°C erreichen kann – nur so entsteht das charakteristische Leoparding.",
    category: "ausruestung",
  },
  {
    question: "Wie lange muss Pizzateig gehen?",
    answer:
      "Mindestens 24 Stunden bei Kühlschranktemperatur (4-8°C). Für optimale Ergebnisse: 48-72 Stunden. Je länger die Gare, desto besser der Geschmack und die Verdaulichkeit. Der Teig sollte sich mindestens verdoppeln und Blasen werfen.",
    category: "rezepte",
  },
  {
    question: "Welche Temperatur braucht eine Pizza?",
    answer:
      "Für Neapolitanische Pizza: 400-500°C (Backzeit 60-90 Sekunden). Für домаusbacken im Ofen: 250-300°C (Backzeit 8-12 Minuten). Wichtig: Der Ofen sollte 30-60 Minuten Vorheizen haben. Mit Pizzastein oder Stahl wird das Ergebnis deutlich besser.",
    category: "rezepte",
  },
  {
    question: "Was ist Tipo 00 Mehl?",
    answer:
      "Tipo 00 ist ein extrem fein gemahlenes italienisches Weizenmehl mit sehr niedrigem Ascheanteil. Das '00' bedeutet die höchste Mahlfeinheit – kein anderes Mehl ist so glatt und seidig. Ideal für Pizza Napoletana, da es viel Wasser aufnimmt und einen weichen, luftigen Teig ergibt.",
    category: "rezepte",
  },
  {
    question: "Warum ist meine Pizza am Rand nicht knusprig?",
    answer:
      "Drei mögliche Ursachen: 1) Zu wenig Hitze – der Rand braucht 400°C+ um zu 'leoparden'. 2) Zu viel Wasser im Teig – gare ihn länger oder reduziere die Hydration. 3) Der Teig ist zu dick am Rand – beim Formen den Rand deutlich dicker lassen als die Mitte.",
    category: "rezepte",
  },
  {
    question: "Kann man Pizza auf dem Grill machen?",
    answer:
      "Ja! Der Gasgrill ist ideal für Pizza: 1) Den Grill auf Maximum aufheizen. 2) Einen Pizzastein oder Stahl auflegen. 3) Nach 20-30 Minuten sollte der Stein 250-300°C haben. 4) Pizza direkt auf den Stein – Backzeit 4-8 Minuten je nach Hitze.",
    category: "rezepte",
  },
  {
    question: "Was sind die besten Pizzerien im Ruhrgebiet?",
    answer:
      "Unsere Top-Empfehlungen: 1) Pizzeria Da Michele (Essen) – Authentische Napoletana. 2) Bigoli (Bochum) – Moderne italienische Küche. 3) Tren理解 (Bochum) – Tradition trifft Moderne. 4) Luigi's Pizza Station (Dortmund) – Bester NY Style.",
    category: "pizzerien",
  },
  {
    question: "Wie funktioniert ein Pizza Workshop?",
    answer:
      "Unsere Workshops sind praktische 3-6 Stunden-Events in kleinen Gruppen (4-8 Personen). Du lernst: Teigherstellung, Knettechniken, Garprozesse, Formen, Belegen, Ofenmanagement. Mitmachen ist Pflicht! Einsteiger (€89), Fortgeschrittene (€129), Profi (€249).",
    category: "workshops",
  },
  {
    question: "Was ist der Unterschied zwischen NY Style und Neapolitanischer Pizza?",
    answer:
      "NY Style: Dicke, knusprige Kruste (ca. 3-4mm), faltbar, groß (18-24 Zoll). Neapolitanisch: Dünne, weiche Mitte, hoher Rand (2-3cm), nur mit Hand oder Gabel essen, offene Flamme bei 400-500°C.",
    category: "rezepte",
  },
  {
    question: "Warum brodelt der Käse nicht auf meiner Pizza?",
    answer:
      "Zu wenig Hitze oder zu kurze Backzeit. Der Käse braucht direkte Strahlungshitze. Tipps: 1) Ofen auf Maximum (280-300°C). 2) Oberhitze aktivieren in den letzten 2 Minuten. 3) Den Käse erst in den letzten 3-4 Minuten auflegen.",
    category: "rezepte",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1810] to-[#1A1A1A]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/hero-pizza.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 pb-12 max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#E85D04]/20 text-[#E85D04] text-sm font-semibold border border-[#E85D04]/30 mb-6">
            ❓ FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-[#E85D04] to-[#DC2F02] bg-clip-text text-transparent">
              Häufige Fragen
            </span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Alles was du über Pizza wissen willst – von Experten beantwortet.
          </p>
        </motion.div>
      </section>

      {/* FAQ List */}
      <section className="section-padding">
        <div className="container-max px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-[#2D2D2D] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-[#E85D04] flex-shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#9CA3AF] flex-shrink-0 mt-1" />
                  )}
                </button>
                
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-[#9CA3AF] leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </p>
                    <div className="mt-4">
                      <span className="text-xs text-[#E85D04] bg-[#E85D04]/10 px-3 py-1 rounded-full">
                        {faq.category === "rezepte" && "🍕 Rezept"}
                        {faq.category === "ausruestung" && "🔥 Ausrüstung"}
                        {faq.category === "pizzerien" && "📍 Pizzerien"}
                        {faq.category === "workshops" && "👨‍🍳 Workshops"}
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2D2D2D]">
        <div className="container-max px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Hast du noch Fragen?
          </h2>
          <p className="text-[#9CA3AF] mb-6">
            Schreib uns oder schau dir unsere Rezepte und Workshops an!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/rezepte" className="btn-primary">
              Zu den Rezepten
            </a>
            <a href="/workshops" className="btn-secondary">
              Workshops
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
