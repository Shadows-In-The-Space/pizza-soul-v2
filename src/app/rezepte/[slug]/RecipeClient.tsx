"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Flame, ChefHat, Check, Printer, Share2, Bookmark } from "lucide-react";

export default function RecipeClient({ recipe }: { recipe: any }) {
  return (
    <main className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <section
        className={`relative h-[50vh] flex items-end justify-center overflow-hidden bg-gradient-to-br ${recipe.gradient}`}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 pb-12 max-w-4xl"
        >
          <Link
            href="/rezepte"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zu Rezepten
          </Link>
          <span className="text-8xl block mb-4">{recipe.emoji}</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            {recipe.title}
          </h1>
          <p className="text-white/80 text-xl">{recipe.subtitle}</p>
        </motion.div>
      </section>

      {/* Meta Bar */}
      <section className="bg-[#2D2D2D] border-b border-white/5">
        <div className="container-max px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <Clock className="w-5 h-5 text-[#E85D04]" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <ChefHat className="w-5 h-5 text-[#E85D04]" />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <Users className="w-5 h-5 text-[#E85D04]" />
                <span>{recipe.servings}</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <Flame className="w-5 h-5 text-[#E85D04]" />
                <span>{recipe.temperature}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-[#3D3D3D] hover:bg-[#4D4D4D] transition-colors">
                <Printer className="w-5 h-5 text-[#9CA3AF]" />
              </button>
              <button className="p-2 rounded-lg bg-[#3D3D3D] hover:bg-[#4D4D4D] transition-colors">
                <Share2 className="w-5 h-5 text-[#9CA3AF]" />
              </button>
              <button className="p-2 rounded-lg bg-[#3D3D3D] hover:bg-[#4D4D4D] transition-colors">
                <Bookmark className="w-5 h-5 text-[#9CA3AF]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar - Ingredients */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24"
              >
                <div className="bg-[#2D2D2D] rounded-2xl p-6">
                  <h2 className="text-xl font-bold mb-6">Zutaten</h2>
                  <div className="space-y-4">
                    {recipe.ingredients?.map((ing: any, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#E85D04]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#E85D04]" />
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-medium">{ing.amount}</span>
                            <span>{ing.name}</span>
                          </div>
                          {ing.note && (
                            <p className="text-sm text-[#9CA3AF]">{ing.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Nutrition */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <h3 className="font-semibold mb-4">Nährwerte (pro Pizza)</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center bg-[#1A1A1A] rounded-lg p-3">
                        <div className="text-[#E85D04] text-lg font-bold">{recipe.nutrition.calories}</div>
                        <div className="text-[#9CA3AF]">kcal</div>
                      </div>
                      <div className="text-center bg-[#1A1A1A] rounded-lg p-3">
                        <div className="text-[#E85D04] text-lg font-bold">{recipe.nutrition.protein}</div>
                        <div className="text-[#9CA3AF]">Protein</div>
                      </div>
                      <div className="text-center bg-[#1A1A1A] rounded-lg p-3">
                        <div className="text-[#E85D04] text-lg font-bold">{recipe.nutrition.carbs}</div>
                        <div className="text-[#9CA3AF]">Kohlenhydr.</div>
                      </div>
                      <div className="text-center bg-[#1A1A1A] rounded-lg p-3">
                        <div className="text-[#E85D04] text-lg font-bold">{recipe.nutrition.fat}</div>
                        <div className="text-[#9CA3AF]">Fett</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Content - Steps */}
            <div className="lg:col-span-2">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
              >
                <p className="text-lg text-[#9CA3AF] leading-relaxed">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {recipe.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#2D2D2D] rounded-full text-sm text-[#9CA3AF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Steps */}
              <div className="space-y-8">
                {recipe.steps?.map((step: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-6"
                  >
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#E85D04] flex items-center justify-center text-white font-bold text-xl">
                        {i + 1}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 bg-[#2D2D2D] rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-[#9CA3AF]">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Author & Date */}
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#9CA3AF]">Rezept von</p>
                  <p className="font-medium">{recipe.author}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#9CA3AF]">Veröffentlicht</p>
                  <p className="font-medium">{recipe.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Recipes */}
      <section className="section-padding bg-[#2D2D2D]">
        <div className="container-max px-4">
          <h2 className="text-2xl font-bold mb-8">Weitere Rezepte</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["pizza-margherita"].map((slug) => (
              <Link
                key={slug}
                href={`/rezepte/${slug}`}
                className="bg-[#1A1A1A] rounded-xl p-6 hover:bg-[#3D3D3D] transition-colors"
              >
                <h3 className="font-bold">{recipes[slug]?.title || slug}</h3>
                <p className="text-sm text-[#9CA3AF]">
                  {recipes[slug]?.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Local recipes reference for related links
const recipes: Record<string, any> = {
  "pizza-margherita": {
    title: "Pizza Margherita",
    subtitle: "Die ewige Klassikerin",
  },
};
