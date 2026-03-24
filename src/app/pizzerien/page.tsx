"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Star, Clock, ExternalLink, Phone, ArrowRight } from "lucide-react";

const pizzerias = [
  {
    name: "Pizzeria Da Michele",
    location: "Essen, Ruhr",
    specialty: "Pizza Napoletana",
    rating: 4.9,
    reviews: 847,
    priceRange: "€€",
    emoji: "🍕",
    description:
      "Authentische Pizza Napoletana nach altem Familienrezept. Steinofen aus Neapel.",
    gradient: "from-[#DC2F02] to-[#E85D04]",
    tags: ["🇮🇹 Authentisch", "⏱️ 48h Teig", "🔥 Steinofen"],
    hours: "Di-So 18:00-23:00",
    phone: "0201 123 4567",
    website: "https://damichele.de",
  },
  {
    name: "Bigoli",
    location: "Bochum, Ruhr",
    specialty: "Venezianische Pasta & Pizza",
    rating: 4.7,
    reviews: 523,
    priceRange: "€€",
    emoji: "🍝",
    description:
      "Italienische Küche mit venezianischen Wurzeln. Hauseigene Pasta und moderne Pizza.",
    gradient: "from-[#E85D04] to-[#F4A024]",
    tags: ["🇮🇹 Modern", "🍝 Pasta", "👨‍🍳 Chef"],
    hours: "Mo-So 11:30-22:00",
    phone: "0234 123 4567",
    website: "https://bigoli.de",
  },
  {
    name: "Luigi's Pizza Station",
    location: "Dortmund, Ruhr",
    specialty: "NY Style Pizza",
    rating: 4.6,
    reviews: 1203,
    priceRange: "€",
    emoji: "🗽",
    description:
      "New York Style für unterwegs. Große, faltbare Slices. Bester Late-Night-Spot.",
    gradient: "from-[#6A040F] to-[#DC2F02]",
    tags: ["🇺🇸 NY Style", "🍕 Faltbar", "🌙 Late Night"],
    hours: "So-Do 11:00-02:00, Fr-Sa 11:00-04:00",
    phone: "0231 123 4567",
    website: "https://luigis-dortmund.de",
  },
  {
    name: "Tren理解",
    location: "Bochum, Ruhr",
    specialty: "Pizza & Pasta",
    rating: 4.8,
    reviews: 312,
    priceRange: "€€",
    emoji: "🇮🇹",
    description:
      "Gemütliche Atmosphäre, beste Zutaten. Handarbeit und Leidenschaft.",
    gradient: "from-[#370617] to-[#6A040F]",
    tags: ["🇮🇹 Tradition", "🌿 Bio", "👨‍👩‍👧‍👦 Familienfreundlich"],
    hours: "Di-So 17:00-22:30",
    phone: "0234 987 6543",
    website: "https://trentatre.de",
  },
  {
    name: "Pizza Planet",
    location: "Duisburg, Ruhr",
    specialty: "Creatve Pizzen",
    rating: 4.5,
    reviews: 678,
    priceRange: "€€",
    emoji: "🌍",
    description:
      "Kreative Pizzen mit internationalen Twist. BBQ Chicken, Truffel, Surf & Turf.",
    gradient: "from-[#F4A024] to-[#E85D04]",
    tags: ["✨ Kreativ", "🌍 International", "🔥 BBQ"],
    hours: "Mo-So 12:00-23:00",
    phone: "0203 123 4567",
    website: "https://pizzaplanet.de",
  },
  {
    name: "Casa della Pizza",
    location: "Gelsenkirchen, Ruhr",
    specialty: "Pizza Napoletana DOC",
    rating: 4.7,
    reviews: 445,
    priceRange: "€€",
    emoji: "🏆",
    description:
      "DOC-zertifiziert. San Marzano Tomaten, Bufala Mozzarella, 400°C Steinofen.",
    gradient: "from-[#DC2F02] to-[#9D0208]",
    tags: ["🏆 DOC", "🧀 Bufala", "🔥 400°C"],
    hours: "Mi-Mo 18:00-22:00",
    phone: "0209 123 4567",
    website: "https://casadellapizza.de",
  },
];

export default function PizzerienPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1810] to-[#1A1A1A]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/images/pizzeria-interior.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#E85D04]/20 text-[#E85D04] text-sm font-semibold border border-[#E85D04]/30 mb-6">
            📍 Pizzerien
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Beste{" "}
            <span className="text-gradient bg-gradient-to-r from-[#E85D04] to-[#DC2F02] bg-clip-text text-transparent">
              Pizzerien
            </span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Die besten Pizza-Spots im Ruhrgebiet – von authentisch bis kreativ,
            von traditionell bis modern.
          </p>
        </motion.div>
      </section>

      {/* Filter + Sort */}
      <section className="sticky top-16 z-40 bg-[#1A1A1A]/90 backdrop-blur-lg border-b border-white/5">
        <div className="container-max px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {["Alle", "Ruhrgebiet", "Italienisch", "American", "Geheimtipp"].map(
                (tab, i) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      i === 0
                        ? "bg-[#E85D04] text-white"
                        : "bg-[#2D2D2D] text-[#9CA3AF] hover:bg-[#3D3D3D] hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
              <span>Sortiert nach:</span>
              <select className="bg-[#2D2D2D] px-3 py-2 rounded-lg text-white border-none outline-none">
                <option>Rating</option>
                <option>Bewertungen</option>
                <option>Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Pizzerias Grid */}
      <section className="section-padding">
        <div className="container-max px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pizzerias.map((pizzeria, i) => (
              <motion.div
                key={pizzeria.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <article className="block group relative overflow-hidden rounded-2xl bg-[#2D2D2D] border border-white/5 card-hover">
                  {/* Header with gradient */}
                  <div
                    className={`h-32 bg-gradient-to-br ${pizzeria.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <span className="text-7xl relative z-10">{pizzeria.emoji}</span>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {pizzeria.priceRange}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(pizzeria.rating)
                                ? "text-[#F4A024] fill-[#F4A024]"
                                : "text-[#3D3D3D]"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-[#F4A024]">
                        {pizzeria.rating}
                      </span>
                      <span className="text-sm text-[#9CA3AF]">
                        ({pizzeria.reviews} Bewertungen)
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-[#E85D04] transition-colors">
                      {pizzeria.name}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm mb-3">
                      {pizzeria.specialty}
                    </p>
                    <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-2">
                      {pizzeria.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pizzeria.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#3D3D3D] rounded-md text-xs text-[#9CA3AF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Info */}
                    <div className="space-y-2 text-sm text-[#9CA3AF] mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#E85D04]" />
                        {pizzeria.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#E85D04]" />
                        {pizzeria.hours}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#E85D04]" />
                        {pizzeria.phone}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <a
                        href={pizzeria.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-[#E85D04] hover:underline"
                      >
                        Website <ExternalLink className="w-3 h-3" />
                      </a>
                      <Link
                        href={`/pizzerien/${pizzeria.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-center gap-1 text-sm font-medium text-[#E85D04] group-hover:gap-2 transition-all"
                      >
                        Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="section-padding bg-[#2D2D2D]">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E85D04]/20 to-[#DC2F02]/20 p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Finde deine nächste Lieblingspizza
            </h2>
            <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
              Alle Pizzerien auf einer Karte. Navigiere direkt zum nächsten
              Pizza-Spot.
            </p>
            <button className="btn-primary">
              <MapPin className="w-5 h-5" /> Karte öffnen
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding">
        <div className="container-max px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Weißt du einen besseren Spot?
          </h2>
          <p className="text-[#9CA3AF] mb-8">
            Schlag uns eine Pizzas worth ahead vor!
          </p>
          <Link href="/kontakt" className="btn-secondary">
            Vorschlag einreichen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
