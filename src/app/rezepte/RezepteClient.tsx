"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Flame, Users } from "lucide-react";

const recipes = [
  {
    slug: "pizza-napoletana",
    title: "Pizza Napoletana",
    subtitle: "Die Königin aus Napoli",
    emoji: "👑",
    image: "/images/hero-pizza.png",
    time: "48h+",
    difficulty: "Profi",
    region: "🇮🇹 Italien",
    description:
      "UNESCO-geschütztes Kulturerbe. Weicher, luftiger Teig mit charakteristischem Leoparding.",
    gradient: "from-[#DC2F02] to-[#E85D04]",
  },
  {
    slug: "pizza-margherita",
    title: "Pizza Margherita",
    subtitle: "Die Klassikerin",
    emoji: "🍅",
    image: "/images/pizza-margherita.png",
    time: "24h",
    difficulty: "Fortgeschritten",
    region: "🇮🇹 Italien",
    description:
      "Der ewige Klassiker. Tomate, Mozzarella, Basilikum – perfekt in seiner Einfachheit.",
    gradient: "from-[#E85D04] to-[#F4A024]",
  },
  {
    slug: "pizza-marinara",
    title: "Pizza Marinara",
    subtitle: "Ohne Mozzarella",
    emoji: "🧄",
    image: "/images/pizza-margherita.png",
    time: "24h",
    difficulty: "Fortgeschritten",
    region: "🇮🇹 Italien",
    description:
      "Die älteste Pizza Napoletana. Nur Tomaten, Knoblauch, Oregano und Olivenöl.",
    gradient: "from-[#DC2F02] to-[#9D0208]",
  },
  {
    slug: "pizza-quattro-formaggi",
    title: "Quattro Formaggi",
    subtitle: "Vier Käse, eine Liebe",
    emoji: "🧀",
    image: "/images/pizza-margherita.png",
    time: "24h",
    difficulty: "Mittel",
    region: "🇮🇹 Italien",
    description:
      "Cremig, würzig, himmlisch. Eine Käseexplosion für Liebhaber.",
    gradient: "from-[#F4A024] to-[#FFBA08]",
  },
  {
    slug: "pizza-new-york-style",
    title: "New York Style",
    subtitle: "Big Apple, Big Slices",
    emoji: "🗽",
    image: "/images/pizza-new-york.png",
    time: "24h",
    difficulty: "Einsteiger",
    region: "🇺🇸 USA",
    description:
      "Knuspriger Rand, faltbar, groß. Die Pizza die niemals ausgeht.",
    gradient: "from-[#E85D04] to-[#6A040F]",
  },
  {
    slug: "pizza-chicago-deep-dish",
    title: "Chicago Deep Dish",
    subtitle: "Das Schwergewicht",
    emoji: "🏙️",
    image: "/images/pizza-deep-dish.png",
    time: "6h",
    difficulty: "Profi",
    region: "🇺🇸 USA",
    description:
      "Kuchenförmig, tief, üppig. Mit reichlich Käse und Sauce oben drauf.",
    gradient: "from-[#6A040F] to-[#370617]",
  },
  {
    slug: "pizza-detroit-style",
    title: "Detroit Style",
    subtitle: "Quadrate statt Kreise",
    emoji: "🔲",
    image: "/images/pizza-detroit.png",
    time: "24h",
    difficulty: "Mittel",
    region: "🇺🇸 USA",
    description:
      "Quadratisch, knusprige Käsekanten, frittierte Basis. Ein Geheimtipp.",
    gradient: "from-[#370617] to-[#DC2F02]",
  },
  {
    slug: "pizza-calzone",
    title: "Calzone",
    subtitle: "Die gefüllte Pizza",
    emoji: "🥟",
    image: "/images/pizza-calzone.png",
    time: "24h",
    difficulty: "Mittel",
    region: "🇮🇹 Italien",
    description:
      "Halbmondförmig, prall gefüllt, manchmal flambiert. Pizza als Tasche.",
    gradient: "from-[#E85D04] to-[#DC2F02]",
  },
  {
    slug: "pizza-focaccia",
    title: "Focaccia",
    subtitle: "Der Vorfahre",
    emoji: "🫒",
    image: "/images/pizza-margherita.png",
    time: "24h",
    difficulty: "Einsteiger",
    region: "🇮🇹 Italien",
    description:
      "Dick, flauschig, getränkt in Olivenöl. Pizza avant la lettre.",
    gradient: "from-[#F4A024] to-[#E85D04]",
  },
];

export default function RezepteClient() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/hero-pizza.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#E85D04]/20 text-[#E85D04] text-sm font-semibold border border-[#E85D04]/30 mb-6">
            🍕 Rezepte
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Pizza{" "}
            <span className="text-gradient bg-gradient-to-r from-[#E85D04] to-[#DC2F02] bg-clip-text text-transparent">
              Rezepte
            </span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Von der klassischen Margherita bis zum Detroit Style – authentische
            Rezepte für zuhause.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-40 bg-[#1A1A1A]/90 backdrop-blur-lg border-b border-white/5">
        <div className="container-max px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Alle",
              "🇮🇹 Italienisch",
              "🇺🇸 American",
              "⏱️ Schnell",
              "🧑‍🍳 Für Profis",
            ].map((tab, i) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="section-padding">
        <div className="container-max px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, i) => (
              <motion.div
                key={recipe.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={`/rezepte/${recipe.slug}`}
                  className="block group relative overflow-hidden rounded-2xl bg-[#2D2D2D] border border-white/5 card-hover"
                >
                  {/* Image Header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${recipe.gradient} relative overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${recipe.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-4 left-4 text-4xl z-10">{recipe.emoji}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-[#9CA3AF]">{recipe.region}</span>
                      <span className="w-1 h-1 rounded-full bg-[#E85D04]" />
                      <span className="text-xs text-[#9CA3AF]">{recipe.difficulty}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-[#E85D04] transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm mb-4">{recipe.subtitle}</p>
                    <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-2">
                      {recipe.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-[#9CA3AF]">
                        <Clock className="w-4 h-4" />
                        {recipe.time}
                      </div>
                      <span className="text-[#E85D04] flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                        Rezept <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#2D2D2D]">
        <div className="container-max px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lerne von den Besten
            </h2>
            <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
              Unsere Workshops machen dich zum Pizza-Profi. Vom Teig bis zum
              perfekten Schnitt.
            </p>
            <Link href="/workshops" className="btn-primary">
              Workshops entdecken <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
