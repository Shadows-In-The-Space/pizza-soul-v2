export const pizzerias = [
  {
    slug: "pizzeria-da-michele",
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
    address: "Hauptstraße 42, 45123 Essen",
    mapUrl: "https://maps.google.com/?q=Essen+Hauptstraße+42",
    googleRating: 4.8,
    tripadvisorRating: 4.9,
  },
  {
    slug: "bigoli",
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
    address: "Kortumstraße 15, 44787 Bochum",
    mapUrl: "https://maps.google.com/?q=Bochum+Kortumstraße+15",
    googleRating: 4.6,
    tripadvisorRating: 4.7,
  },
  {
    slug: "luigis-pizza-station",
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
    address: "Königswall 1, 44137 Dortmund",
    mapUrl: "https://maps.google.com/?q=Dortmund+Königswall+1",
    googleRating: 4.5,
    tripadvisorRating: 4.6,
  },
  {
    slug: "trentre",
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
    address: "Unterstraße 23, 44787 Bochum",
    mapUrl: "https://maps.google.com/?q=Bochum+Unterstraße+23",
    googleRating: 4.7,
    tripadvisorRating: 4.8,
  },
  {
    slug: "pizza-planet",
    name: "Pizza Planet",
    location: "Duisburg, Ruhr",
    specialty: "Creative Pizzen",
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
    address: "Königstraße 55, 47051 Duisburg",
    mapUrl: "https://maps.google.com/?q=Duisburg+Königstraße+55",
    googleRating: 4.4,
    tripadvisorRating: 4.5,
  },
  {
    slug: "casa-della-pizza",
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
    address: "Bahnhofstraße 12, 45879 Gelsenkirchen",
    mapUrl: "https://maps.google.com/?q=Gelsenkirchen+Bahnhofstraße+12",
    googleRating: 4.8,
    tripadvisorRating: 4.6,
  },
];

export function getPizzeriaBySlug(slug: string) {
  return pizzerias.find((p) => p.slug === slug);
}

export type ReviewSource = "google" | "tripadvisor";

export const pizzeriaReviews: Record<string, Array<{
  author: string;
  rating: number;
  date: string;
  text: string;
  title: string;
  source: ReviewSource;
}>> = {
  "pizzeria-da-michele": [
    {
      author: "Thomas R.",
      rating: 5,
      date: "2026-02-28",
      title: "Die beste Pizza im Ruhrgebiet!",
      text: "Seit Jahren unser Stammrestaurant. Der Teig ist perfekt - dünn, luftig und mit dem richtigen Biss. Die Margherita ist ein Traum. Hinzu kommt das freundliche Personal und die gemütliche Atmosphäre.",
      source: "google"
    },
    {
      author: "Maria S.",
      rating: 5,
      date: "2026-02-15",
      title: "Wie in Neapel!",
      text: "Wir haben hier schon viele Pizzen gegessen, aber die Pizza Napoletana hier ist etwas Besonderes. Der Steinofen macht den Unterschied. Absolut empfehlenswert für Pizza-Liebhaber.",
      source: "tripadvisor"
    },
    {
      author: "Klaus B.",
      rating: 4,
      date: "2026-01-20",
      title: "Super Pizza, etwas Wartezeit",
      text: "Die Pizza war hervorragend! Allerdings mussten wir fast eine Stunde auf einen Tisch warten. Also lieber vorher reservieren. Ansonsten: Top!",
      source: "google"
    },
  ],
  "bigoli": [
    {
      author: "Julia K.",
      rating: 5,
      date: "2026-03-01",
      title: "Italienisches Flair in Bochum",
      text: "Die Pasta ist hier der absolute Hit - hausgemacht und so lecker! Aber auch die Pizza kann sich sehen lassen. Modern interpretiert, aber trotzdem authentisch. Das Ambiente ist wunderschön.",
      source: "tripadvisor"
    },
    {
      author: "Michael H.",
      rating: 5,
      date: "2026-02-22",
      title: "Truffelpizza ist der Wahnsinn!",
      text: "Die Pizza mit Trüffel war unglaublich! Dazu ein gutes Glas Wein und der Abend war perfekt. Zwar nicht ganz günstig, aber die Qualität rechtfertigt den Preis.",
      source: "google"
    },
    {
      author: "Sandra M.",
      rating: 4,
      date: "2026-02-10",
      title: "Sehr gutes Restaurant",
      text: "Super Entdeckung! Die Pizza-Brutti sind ein Gedicht. Das Personal ist aufmerksam und die Atmosphäre sehr einladend. Werde auf jeden Fall wiederkommen.",
      source: "google"
    },
  ],
  "luigis-pizza-station": [
    {
      author: "Felix W.",
      rating: 5,
      date: "2026-03-08",
      title: "Bester Late-Night-Spot im Ruhrgebiet",
      text: "Nach dem Kino oder Party geht hier nichts über eine faltbare New York Style Pizza! Riesige Portionen, super Geschmack und das für einen fairen Preis. Mein absoluter Favorit.",
      source: "google"
    },
    {
      author: "Anna L.",
      rating: 4,
      date: "2026-02-25",
      title: "Authentischer NY Style",
      text: "Die Pizza schmeckt wirklich wie in Manhattan. Knuspriger Rand, cheesig und perfekt zum Falten. Die Cheeseburger Pizza muss man unbedingt probieren!",
      source: "tripadvisor"
    },
    {
      author: "Chris P.",
      rating: 5,
      date: "2026-02-14",
      title: "Schnell, lecker, günstig!",
      text: "Perfect für unterwegs oder wenn es schnell gehen muss. Die Pizza kommt in under 10 Minuten und schmeckt fantastisch. Der Lieferservice funktioniert auch einwandfrei.",
      source: "google"
    },
  ],
  "trentre": [
    {
      author: "Nina F.",
      rating: 5,
      date: "2026-03-05",
      title: "Bio und unglaublich lecker!",
      text: "Endlich ein Restaurant, das Bio-Qualität bietet, ohne beim Geschmack zu sparen! Die Pizza mit Rucola und Parmaschinken war perfekt abgeschmeckt. Dazu ein tollerService.",
      source: "google"
    },
    {
      author: "Oliver V.",
      rating: 5,
      date: "2026-02-20",
      title: "Familienfreundlich und mega lecker",
      text: "Unsere Kinder lieben dieses Restaurant! Die Pizza für Kinder ist genau richtig portioniert und das Personal ist super geduldig. Die Atmosphäre ist warm und einladend.",
      source: "tripadvisor"
    },
    {
      author: "Katrin H.",
      rating: 4,
      date: "2026-01-30",
      title: "Gut, aber nicht besonders",
      text: "Die Pizza war gut, das Ambiente schön. Für den Preis könnte ich allerdings auch woanders essen. Trotzdem ein solides Restaurant mit Charme.",
      source: "google"
    },
  ],
  "pizza-planet": [
    {
      author: "David M.",
      rating: 5,
      date: "2026-03-10",
      title: "Kreative Küche vom Feinsten!",
      text: "Die BBQ Chicken Pizza war der absolute Wahnsinn! So etwas habe ich noch nie gegessen. Wer открыт для экспериментов und Abenteuer beim Essen sucht, ist hier genau richtig.",
      source: "tripadvisor"
    },
    {
      author: "Sandra K.",
      rating: 4,
      date: "2026-02-24",
      title: "Mal was ganz anderes",
      text: "Andere Pizza, anderer Geschmack - aber definitiv gut! Die internationalen Twists sind mutig und gut umgesetzt. Die Portionen sind riesig.",
      source: "google"
    },
    {
      author: "Patrick R.",
      rating: 5,
      date: "2026-02-12",
      title: "Surf & Turf Pizza - Incredible!",
      text: "Meeresfrüchte auf Pizza klingt erstmal ungewöhnlich, aber es funktioniert! Die Kombination aus Garnelen, Jakobsmuscheln und Knoblauch ist unglaublich lecker.",
      source: "google"
    },
  ],
  "casa-della-pizza": [
    {
      author: "Giovanni D.",
      rating: 5,
      date: "2026-03-12",
      title: "Wie in Napoli - wirklich!",
      text: "Als gebürtiger Neapolitaner kann ich sagen: Die Pizza ist authentisch! San Marzano Tomaten, echte Bufala aus Kampanien, 400°C im Steinofen - das ist echte Handwerkskunst.",
      source: "tripadvisor"
    },
    {
      author: "Claudia B.",
      rating: 5,
      date: "2026-02-28",
      title: "DOC-zertifizierte Perfektion",
      text: "Die DOC-Zertifizierung sieht man. Selten so eine gute Pizza in Deutschland gegessen. Die Zutaten sind erstklassig und der Teig hat die perfekte Konsistenz.",
      source: "google"
    },
    {
      author: "Ralf S.",
      rating: 4,
      date: "2026-02-16",
      title: "Hochwertig aber begrenzte Zeiten",
      text: "Die Pizza war fantastisch - beste Zutaten, perfekte Zubereitung. Das Preis-Leistungs-Verhältnis stimmt. Schade nur, dass die Öffnungszeiten etwas eingeschränkt sind.",
      source: "google"
    },
  ],
};
