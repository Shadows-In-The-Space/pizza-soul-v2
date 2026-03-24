import { Metadata } from "next";
import RezepteClient from "./RezepteClient";

export const metadata: Metadata = {
  title: "Pizza Rezepte | PizzaSoul – Von Napoletana bis Detroit Style",
  description: "Authentische Pizza Rezepte zum Nachbacken: Pizza Napoletana, Margherita, New York Style, Chicago Deep Dish, Detroit Style und mehr.",
  alternates: {
    canonical: "/rezepte",
  },
  openGraph: {
    title: "Pizza Rezepte | PizzaSoul",
    description: "Authentische Pizza Rezepte zum Nachbacken.",
    images: ["https://pizzasoul.shadowsinthe.space/images/pizza-margherita.png"],
  },
};

export default function RezeptePage() {
  return <RezepteClient />;
}
