"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Calendar, Users, Clock, ChefHat, Flame, Award } from "lucide-react";

const workshops = [
  {
    id: "pizza-einsteiger",
    title: "Pizza Einsteiger",
    subtitle: "Der perfekte Start",
    emoji: "🌱",
    gradient: "from-[#22C55E] to-[#16A34A]",
    duration: "3 Stunden",
    maxParticipants: 8,
    price: 89,
    level: "Anfänger",
    description:
      "Lerne die Grundlagen der Pizzaherstellung. Von der Teigherstellung bis zum perfekten Belegen.",
    includes: [
      "Teig Grundlagen (Mehl, Wasser, Hefe, Salz)",
      "Kneten und Kühlen",
      "Belegen wie ein Profi",
      "Ofen-Know-how",
      "1 Pizza zum Mitnehmen",
      "Rezeptbuch digital",
    ],
    next: "15. April 2026",
    spots: 3,
  },
  {
    id: "pizza-fortgeschritten",
    title: "Pizza Fortgeschritten",
    subtitle: "Zeit für Perfektion",
    emoji: "🔥",
    gradient: "from-[#E85D04] to-[#DC2F02]",
    duration: "4 Stunden",
    maxParticipants: 6,
    price: 129,
    level: "Fortgeschritten",
    description:
      "Meistere den perfekten Teig und lerne verschiedene Falttechniken. 48h Gare, hohe Temperaturen, authentischer Geschmack.",
    includes: [
      "Poolish und Pre-Fermentation",
      "Temperature und Feuchtigkeit",
      "Neapolitanischer Teig",
      "Leoparding-Muster",
      "3 verschiedene Pizzen",
      "Wein-Pairing",
      "Rezeptbuch gedruckt",
    ],
    next: "22. April 2026",
    spots: 5,
  },
  {
    id: "pizza-profi",
    title: "Pizza Profi Workshop",
    subtitle: "Werde zum Meister",
    emoji: "👨‍🍳",
    gradient: "from-[#DC2F02] to-[#9D0208]",
    duration: "6 Stunden",
    maxParticipants: 4,
    price: 249,
    level: "Profi",
    description:
      "Der intensive Workshop für echte Enthusiasten. Alles über Mehltypen, Fermentation, WFQ und mehr.",
    includes: [
      "Mehl-Knowledge (Tipo 00, Manitoba, Whole Wheat)",
      "72h Fermentation",
      "Teighydratation verstehen",
      "WFQ (Window Frame Method)",
      "San Marzano Tomaten",
      "5 verschiedene Pizzen",
      "Champagner-Pairing",
      "Zertifikat",
      "1 Monat Nachbetreuung",
    ],
    next: "6. Mai 2026",
    spots: 2,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Der Einsteiger-Workshop war perfekt! Jetzt mache ich jede Woche meine eigene Pizza. Besser als viele Restaurants!",
    rating: 5,
    workshop: "Pizza Einsteiger",
  },
  {
    name: "Thomas K.",
    text: "Der Profi-Workshop hat mein Leben verändert. Endlich kann ich eine echte Napoletana hinbekommen!",
    rating: 5,
    workshop: "Pizza Profi",
  },
  {
    name: "Lisa R.",
    text: "Super Atmosphäre, mega Wissen, leckere Pizzen. Weihnachtsgeschenk war ein voller Erfolg!",
    rating: 5,
    workshop: "Pizza Einsteiger",
  },
];

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1810] to-[#1A1A1A]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/images/workshop-pizzaiolo.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />

        {/* Floating Pizzas */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🍕
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-32 right-20 text-7xl opacity-15"
        >
          👨‍🍳
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#E85D04]/20 text-[#E85D04] text-sm font-semibold border border-[#E85D04]/30 mb-6">
            👨‍🍳 Workshops
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pizza{" "}
            <span className="text-gradient bg-gradient-to-r from-[#E85D04] to-[#DC2F02] bg-clip-text text-transparent">
              Workshops
            </span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-8">
            Vom Anfänger zum Profi. Lerne in kleinen Gruppen, mit viel Praxis und
            echtem italianischem Know-how.
          </p>
          <Link href="#workshops" className="btn-primary text-lg">
            Workshop wählen <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Workshop Cards */}
      <section id="workshops" className="section-padding">
        <div className="container-max px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {workshops.map((workshop, i) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Popular Badge */}
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-[#E85D04] text-white text-xs font-bold px-4 py-1 rounded-full">
                    BELIEBT
                  </div>
                )}

                <div className="h-full rounded-2xl bg-[#2D2D2D] border border-white/5 overflow-hidden flex flex-col">
                  {/* Header */}
                  <div
                    className={`h-40 bg-gradient-to-br ${workshop.gradient} flex items-center justify-center relative`}
                  >
                    <span className="text-8xl">{workshop.emoji}</span>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {workshop.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-1">{workshop.title}</h3>
                    <p className="text-[#9CA3AF] text-sm mb-4">
                      {workshop.subtitle}
                    </p>
                    <p className="text-[#9CA3AF] text-sm mb-6">
                      {workshop.description}
                    </p>

                    {/* Meta */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <Clock className="w-5 h-5 mx-auto text-[#E85D04] mb-1" />
                        <div className="text-xs text-[#9CA3AF]">{workshop.duration}</div>
                      </div>
                      <div>
                        <Users className="w-5 h-5 mx-auto text-[#E85D04] mb-1" />
                        <div className="text-xs text-[#9CA3AF]">
                          {workshop.maxParticipants} Pers.
                        </div>
                      </div>
                      <div>
                        <Calendar className="w-5 h-5 mx-auto text-[#E85D04] mb-1" />
                        <div className="text-xs text-[#9CA3AF]">Nächster Termin</div>
                      </div>
                    </div>

                    {/* Includes */}
                    <div className="space-y-2 mb-6 flex-1">
                      <h4 className="text-sm font-semibold text-[#9CA3AF]">
                        Inklusive:
                      </h4>
                      {workshop.includes.slice(0, 4).map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                          <span className="text-[#9CA3AF]">{item}</span>
                        </div>
                      ))}
                      {workshop.includes.length > 4 && (
                        <div className="text-sm text-[#E85D04]">
                          +{workshop.includes.length - 4} mehr
                        </div>
                      )}
                    </div>

                    {/* Price + CTA */}
                    <div className="pt-4 border-t border-white/5">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <span className="text-3xl font-bold">€{workshop.price}</span>
                          <span className="text-[#9CA3AF] text-sm">/Person</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-[#22C55E] font-medium">
                            {workshop.spots} Plätze frei
                          </div>
                          <div className="text-xs text-[#9CA3AF]">
                            {workshop.next}
                          </div>
                        </div>
                      </div>
                      <button className="w-full btn-primary">
                        Platz reservieren
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#2D2D2D]">
        <div className="container-max px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Was unsere Teilnehmer sagen
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1A1A1A] rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#F4A024] fill-[#F4A024]"
                    />
                  ))}
                </div>
                <p className="text-[#9CA3AF] mb-4 italic">"{t.text}"</p>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-[#E85D04]">{t.workshop}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-max px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Häufige Fragen
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                q: "Was soll ich mitbringen?",
                a: "Nichts! Alle Zutaten, Equipment und Schürzen werden gestellt. Du gehst nur mit Wissen und vollem Bauch nach Hause.",
              },
              {
                q: "Kann ich einen Workshop verschenken?",
                a: "Ja! Du kannst Gutscheine kaufen. Einfach im Checkout 'Als Geschenk verpacken' auswählen.",
              },
              {
                q: "Gibt es Alternativen für Allergiker?",
                a: "Ja, wir können auf Gluten-unverträglichkeit und Lactose-Intoleranz eingehen. Bitte vorher Bescheid sagen.",
              },
              {
                q: "Wie groß sind die Gruppen?",
                a: "Maximal 8 Personen beim Einsteiger, 6 beim Fortgeschrittenen, 4 beim Profi-Workshop. So bleibt es persönlich.",
              },
              {
                q: "Was passiert wenn ich absagen muss?",
                a: "Bis 48h vorher kostenlos. Danach berechnen wir 50%. Bei kurzfristigen Notfällen finden wir immer eine Lösung.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#2D2D2D] rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-[#9CA3AF] text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#E85D04] to-[#DC2F02]">
        <div className="container-max px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Bereit, Pizza zu meistern?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Wähle deinen Workshop und werde Teil der PizzaSoul Community.
            </p>
            <Link
              href="#workshops"
              className="inline-flex items-center gap-2 bg-white text-[#E85D04] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-lg"
            >
              Jetzt anmelden <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Star({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}
