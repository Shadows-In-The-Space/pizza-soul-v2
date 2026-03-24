"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Target, Users, MapPin } from "lucide-react";

const team = [
  {
    name: "Marco",
    role: "Pizza Historian",
    emoji: "👨‍🍳",
    description:
      "10 Jahre in Neapel verbracht. Kennt jede Pizza-Variante und ihre Geschichte.",
  },
  {
    name: "Sofia",
    role: "Recipe Developer",
    emoji: "🍕",
    description:
      "Testet und perfektioniert jedes Rezept. Kein Ofen bleibt kalt.",
  },
  {
    name: "Luca",
    role: "Photo & Video",
    emoji: "📸",
    description:
      "Macht die Pizza so gut aussehen wie sie schmeckt. Food Photography Experte.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Leidenschaft",
    description:
      "Pizza ist mehr als nur Essen. Es ist Kultur, Tradition und Liebe zum Handwerk.",
  },
  {
    icon: Target,
    title: "Qualität",
    description:
      "Wir testen jeden Ofen, jedes Mehl, jede Tomate. Nur das Beste schafft es auf PizzaSoul.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Wir sind eine Community von Pizza-Liebhabern. Von Anfängern bis Profis – jeder ist willkommen.",
  },
  {
    icon: MapPin,
    title: "Local Love",
    description:
      "Wir lieben das Ruhrgebiet. Deshalb starten wir hier – mit den besten Pizzerien vor der Haustür.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1810] to-[#1A1A1A]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1920')`,
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
            🍕 Über uns
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Wir lieben{" "}
            <span className="text-gradient bg-gradient-to-r from-[#E85D04] to-[#DC2F02] bg-clip-text text-transparent">
              Pizza
            </span>
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            PizzaSoul ist das Projekt von Pizza-Enthusiasten im Ruhrgebiet. Wir
            teilen Rezepte, Workshops und unsere Lieblingspizzerien.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-max px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#E85D04] font-semibold">Unsere Geschichte</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">
                Von der Leidenschaft zum Projekt
              </h2>
              <div className="space-y-4 text-[#9CA3AF]">
                <p>
                  Alles begann in einer kleinen Küche in Bochum. Ein Team von Freunden,
                  die Pizza lieben und nach dem perfekten Rezept suchten.
                </p>
                <p>
                  Nach unzähligen Versuchen, Research in Neapel, und Besuchen in den
                  besten Pizzerien des Ruhrgebiets, entstand PizzaSoul.
                </p>
                <p>
                  Wir wollen unser Wissen teilen. Mit dir. Mit allen Pizza-Liebhabern da
                  draußen.
                </p>
                <p>
                  <strong className="text-white">
                    The Perfect Slice – für Liebhaber, nicht für Touristen.
                  </strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E85D04] to-[#DC2F02] rounded-3xl blur-2xl opacity-20" />
              <div
                className="relative rounded-2xl overflow-hidden h-96 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800')`,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#2D2D2D]">
        <div className="container-max px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Was uns wichtig ist
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#E85D04]/20 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#E85D04]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-[#9CA3AF] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-max px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Das Team
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#2D2D2D] rounded-2xl p-8 text-center"
              >
                <span className="text-6xl block mb-4">{member.emoji}</span>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[#E85D04] text-sm mb-4">{member.role}</p>
                <p className="text-[#9CA3AF] text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-gradient-to-br from-[#E85D04] to-[#DC2F02]">
        <div className="container-max px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unsere Mission
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto mb-10">
              Wir wollen die beste Pizza-Resource im deutschsprachigen Raum sein.
              Rezepte die funktionieren. Pizzerien die sich lohnen. Workshops die
              begeistern.
            </p>
            <Link
              href="/rezepte"
              className="inline-flex items-center gap-2 bg-white text-[#E85D04] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-lg"
            >
              Entdecke die Rezepte <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-max px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
          <p className="text-[#9CA3AF] mb-8">
            Du hast Fragen, Anregungen oder möchtest mit uns zusammenarbeiten? Wir
            freuen uns von dir zu hören!
          </p>
          <a
            href="mailto:hallo@pizzasoul.de"
            className="btn-primary"
          >
            hallo@pizzasoul.de
          </a>
        </div>
      </section>
    </main>
  );
}
