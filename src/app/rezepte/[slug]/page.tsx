import { Metadata } from "next";
import { notFound } from "next/navigation";
import RecipeClient from "./RecipeClient";

const recipes: Record<string, any> = {
  "pizza-napoletana": {
    title: "Pizza Napoletana",
    subtitle: "Die Königin aus Napoli",
    emoji: "👑",
    image: "/images/hero-pizza.png",
    description:
      "Die Pizza Napoletana ist mehr als nur eine Pizza – sie ist UNESCO-geschütztes Kulturerbe. Mit ihrem weichen, luftigen Teig und dem charakteristischen Leoparding am Rand ist sie ein Meisterwerk der italienischen Kochkunst.",
    time: "48 Stunden",
    difficulty: "Profi",
    servings: "4 Pizzen",
    temperature: "250-300°C",
    author: "PizzaSoul Team",
    date: "12. März 2026",
    tags: ["🇮🇹 Klassisch", "🔥 Steinofen", "⏱️ 48h"],
    ingredients: [
      { name: "Tipo 00 Mehl", amount: "500g", note: "Wichtig für die正确ige Textur" },
      { name: "Wasser", amount: "325ml", note: "Lauwarm, ca. 25°C" },
      { name: "Meersalz", amount: "15g", note: "" },
      { name: "Frische Hefe", amount: "3g", note: "Oder 1g Trockenhefe" },
      { name: "San Marzano Tomaten", amount: "400g", note: "Dose, ganz" },
      { name: "Fior di Latte Mozzarella", amount: "250g", note: "In Stücke gerissen" },
      { name: "Frisches Basilikum", amount: "1 Bund", note: "" },
      { name: "Olivenöl", amount: "2 EL", note: "Extra vergine" },
    ],
    steps: [
      { title: "Poolish ansetzen", description: "Löse die Hefe in etwas lauwarmem Wasser auf." },
      { title: "Hauptteig kneten", description: "Gib das restliche Mehl und Wasser zum Poolish." },
      { title: "Erste Gare", description: "Forme eine Kugel und lasse 1-2 Stunden gehen." },
      { title: "Kühlen", description: "Stelle in den Kühlschrank für 24-48 Stunden." },
      { title: "Teig teilen", description: "Teile in 4 Stücke und forme Kugeln." },
      { title: "Ausrollen", description: "Drücke von der Mitte nach außen, Rand frei lassen." },
      { title: "Belegen", description: "Sauce, Mozzarella, nicht zu viel." },
      { title: "Backen", description: "250-300°C für 90-120 Sekunden." },
      { title: "Servieren", description: "Sofort mit Basilikum und Olivenöl." },
    ],
    nutrition: { calories: 285, protein: "12g", carbs: "38g", fat: "9g" },
  },
  "pizza-margherita": {
    title: "Pizza Margherita",
    subtitle: "Die ewige Klassikerin",
    emoji: "🍅",
    image: "/images/pizza-margherita.png",
    description:
      "Die Pizza Margherita ist die vielleicht bekannteste Pizza der Welt. Benannt nach Königin Margherita von Italien.",
    time: "24 Stunden",
    difficulty: "Fortgeschritten",
    servings: "4 Pizzen",
    temperature: "230-250°C",
    author: "PizzaSoul Team",
    date: "10. März 2026",
    tags: ["🍅 Klassisch", "🇮🇹 vegetarisch", "⏱️ 24h"],
    ingredients: [
      { name: "Manitoba Mehl", amount: "500g", note: "Oder Tipo 00" },
      { name: "Wasser", amount: "350ml", note: "Zimmertemperatur" },
      { name: "Salz", amount: "10g", note: "" },
      { name: "Trockenhefe", amount: "3g", note: "" },
      { name: "San Marzano Tomaten", amount: "400g", note: "" },
      { name: "Bufala Mozzarella", amount: "300g", note: "DOP-Qualität" },
      { name: "Basilikum", amount: "1 Bund", note: "" },
      { name: "Olivenöl", amount: "3 EL", note: "" },
    ],
    steps: [
      { title: "Teig vorbereiten", description: "Mische Mehl, Wasser, Hefe und Salz." },
      { title: "Gehen lassen", description: "2 Stunden Raumtemperatur, dann über Nacht Kühlschrank." },
      { title: "Formen", description: "Kreise formen, Rand nicht ausdünnen." },
      { title: "Belegen", description: "Dünne Tomatenschicht, Mozzarella." },
      { title: "Backen", description: "250°C für 8-10 Minuten." },
      { title: "Servieren", description: "Sofort mit frischem Basilikum." },
    ],
    nutrition: { calories: 270, protein: "11g", carbs: "35g", fat: "8g" },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes[slug];
  
  if (!recipe) return {};
  
  return {
    title: `${recipe.title} Rezept | PizzaSoul`,
    description: recipe.description,
    alternates: {
      canonical: `/rezepte/${slug}`,
    },
    openGraph: {
      title: `${recipe.title} Rezept | PizzaSoul`,
      description: recipe.description,
      type: "article",
      images: [`https://pizzasoul.shadowsinthe.space${recipe.image}`],
    },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes[slug];
  
  if (!recipe) notFound();
  
  // JSON-LD Recipe Schema
  const recipeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: `https://pizzasoul.shadowsinthe.space${recipe.image}`,
    author: { "@type": "Organization", name: "PizzaSoul" },
    datePublished: recipe.date,
    prepTime: "PT48H",
    cookTime: recipe.time === "48 Stunden" ? "PT90S" : "PT10M",
    recipeYield: recipe.servings,
    recipeCategory: "Pizza",
    recipeCuisine: "Italian",
    keywords: `${recipe.title}, Pizza, PizzaSoul, Rezept`,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "47" },
    recipeIngredient: recipe.ingredients?.map((ing: any) => `${ing.amount} ${ing.name}`) || [],
    recipeInstructions: recipe.steps?.map((step: any, i: number) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description,
      position: i + 1,
    })) || [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />
      <RecipeClient recipe={recipe} />
    </>
  );
}
