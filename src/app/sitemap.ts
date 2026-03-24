import { MetadataRoute } from "next";

type Changefreq = "daily" | "weekly" | "monthly" | "yearly";

interface Page {
  path: string;
  priority: number;
  changefreq: Changefreq;
}

const pages: Page[] = [
  { path: "", priority: 1.0, changefreq: "daily" },
  { path: "/rezepte", priority: 0.9, changefreq: "weekly" },
  { path: "/rezepte/pizza-napoletana", priority: 0.8, changefreq: "monthly" },
  { path: "/rezepte/pizza-margherita", priority: 0.8, changefreq: "monthly" },
  { path: "/pizzerien", priority: 0.8, changefreq: "weekly" },
  { path: "/workshops", priority: 0.8, changefreq: "weekly" },
  { path: "/ausruestung", priority: 0.9, changefreq: "weekly" },
  { path: "/faq", priority: 0.9, changefreq: "monthly" },
  { path: "/blog/pizza-selber-machen", priority: 0.8, changefreq: "monthly" },
  { path: "/ueber", priority: 0.6, changefreq: "monthly" },
  { path: "/impressum", priority: 0.3, changefreq: "yearly" },
  { path: "/datenschutz", priority: 0.3, changefreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pizzasoul.shadowsinthe.space";

  return pages.map(({ path, priority, changefreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changefreq,
    priority,
  }));
}
