"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { ArrowRight, Play, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects for stopmotion feel
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  // Smooth spring for buttery animation
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <main ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Stopmotion Video Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1810] to-[#1A1A1A]">
          {/* Stopmotion Frames */}
          <div className="stopmotion-container">
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-01.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-02.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-03.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-04.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-05.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-06.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-07.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-08.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-09.png')" }} />
            <div className="stopmotion-frame" style={{ backgroundImage: "url('/images/stopmotion/frame-10.png')" }} />
          </div>
          
          {/* Animated Grain Overlay for Stopmotion Feel */}
          <div className="absolute inset-0 opacity-[0.03] stopmotion-grain" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-[#1A1A1A]/30" />
          
          {/* Animated Light Rays */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{ 
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(232, 93, 4, 0.4) 0%, transparent 60%)"
            }}
          />
        </div>

        {/* Stopmotion Floating Elements - Frame by Frame Feel */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
             // Step easing for stopmotion feel
          }}
          className="absolute top-24 left-[10%] text-7xl opacity-15"
        >
          🍕
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            
          }}
          className="absolute top-40 right-[15%] text-5xl opacity-10"
        >
          🌿
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            
          }}
          className="absolute bottom-40 left-[20%] text-6xl opacity-12"
        >
          🔥
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 4.5, 
            repeat: Infinity, 
            delay: 0.5
          }}
          className="absolute bottom-32 right-[25%] text-4xl opacity-10"
        >
          🧄
        </motion.div>

        {/* Main Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8,  }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E85D04]/20 text-[#E85D04] text-sm font-semibold border border-[#E85D04]/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Pizza Lifestyle
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2,  }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-bold mb-6 leading-tight tracking-tight"
          >
            The Perfect{" "}
            <span className="text-gradient bg-gradient-to-r from-[#E85D04] via-[#DC2F02] to-[#F4A024] bg-clip-text text-transparent">
              Slice
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4,  }}
            className="text-lg md:text-xl text-[#9CA3AF] mb-10 max-w-2xl mx-auto"
          >
            Der beste Pizza Blog im Ruhrgebiet. Rezepte, Workshops und die
            besten Pizzerien – für Liebhaber, nicht für Touristen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6,  }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/rezepte" className="btn-primary text-lg group">
              Entdecken 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 ml-1 inline-block" />
              </motion.span>
            </Link>
            <Link href="/workshops" className="btn-secondary text-lg">
              <Play className="w-5 h-5" /> Workshops
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Stopmotion Bounce */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity,  }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#9CA3AF] tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-6 h-6 text-[#E85D04]" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section - Stopmotion Reveal */}
      <section className="py-20 bg-[#2D2D2D] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#E85D04]/5 via-transparent to-[#DC2F02]/5"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="container-max px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "47+", label: "Pizzerien" },
              { number: "25+", label: "Rezepte" },
              { number: "12", label: "Städte" },
              { number: "3", label: "Workshops" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1,  }}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-[#E85D04] mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#9CA3AF]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid - Stopmotion Scroll Animation */}
      <section className="section-padding relative">
        <div className="container-max px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{  }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Entdecke die Welt der{" "}
            <span className="text-gradient">Pizza</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2,  }}
            className="text-[#9CA3AF] text-center text-lg mb-16 max-w-2xl mx-auto"
          >
            Von Napoli bis Detroit – wir haben alles, was du über Pizza wissen musst.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1,  }}
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href={cat.href}
                  className="block group relative overflow-hidden rounded-2xl bg-[#2D2D2D] border border-white/5 card-hover"
                >
                  <div className="aspect-[4/3] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E85D04]/20 to-[#DC2F02]/20 group-hover:from-[#E85D04]/30 group-hover:to-[#DC2F02]/30 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center text-8xl">
                      {cat.emoji}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#E85D04] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm">{cat.description}</p>
                  </div>
                  <motion.div 
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#E85D04] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipe - Stopmotion Slide */}
      <section className="section-padding bg-[#2D2D2D]">
        <div className="container-max px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{  }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-[#E85D04] to-[#DC2F02] rounded-3xl blur-2xl opacity-30"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="relative aspect-square rounded-3xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/pizza-margherita.png')" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2,  }}
            >
              <span className="text-[#E85D04] font-semibold">Featured Recipe</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Pizza Napoletana
              </h2>
              <p className="text-[#9CA3AF] text-lg mb-6">
                Die Königin der Pizzen. Weicher, luftiger Teig mit
                charakteristischem Leoparding am Rand. DOC-zertifiziert und
                UNESCO-geschützt.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "48 Stunden Teig-Gare",
                  "Tipo 00 Mehl",
                  "San Marzano Tomaten",
                  "250°C+ im Ofen",
                ].map((item, i) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className="w-6 h-6 rounded-full bg-[#E85D04]/20 flex items-center justify-center text-[#E85D04] text-sm">
                      ✓
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/rezepte/pizza-napoletana" className="btn-primary">
                Zum Rezept <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{  }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E85D04] to-[#DC2F02] p-12 md:p-20 text-center"
          >
            {/* Animated Background Rays */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{
                background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.1) 10deg, transparent 20deg)"
              }}
            />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Bereit für deine erste Pizza?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Starte mit unseren Workshops – vom Anfänger zum Profi in 4 Wochen.
              </p>
              <Link
                href="/workshops"
                className="inline-flex items-center gap-2 bg-white text-[#E85D04] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-lg"
              >
                Jetzt starten <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container-max px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">
              Pizza<span className="text-[#E85D04]">Soul</span>
            </div>
            <div className="text-[#9CA3AF] text-sm">
              © 2026 PizzaSoul – Made with 🍕 in the Ruhrgebiet
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const categories = [
  {
    title: "Rezepte",
    description: "Von Margherita bis Detroit Style – authentische Rezepte",
    emoji: "🍕",
    href: "/rezepte",
  },
  {
    title: "Workshops",
    description: "Lerne Pizza backen wie ein Profi – Schritt für Schritt",
    emoji: "👨‍🍳",
    href: "/workshops",
  },
  {
    title: "Pizzerien",
    description: "Die besten Pizzerien im Ruhrgebiet – getestet und bewertet",
    emoji: "📍",
    href: "/pizzerien",
  },
  {
    title: "Italienisch",
    description: "Authentische Rezepte direkt aus Napoli",
    emoji: "🇮🇹",
    href: "/rezepte/italienisch",
  },
  {
    title: "American",
    description: "NY Style, Chicago Deep Dish, Detroit und mehr",
    emoji: "🇺🇸",
    href: "/rezepte/american",
  },
  {
    title: "Top 10",
    description: "Die besten Pizzerien im Ruhrgebiet – unser Ranking",
    emoji: "🏆",
    href: "/top-10",
  },
];
