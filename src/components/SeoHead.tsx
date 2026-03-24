"use client";

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export default function SeoHead({
  title = "PizzaSoul 🍕 | The Perfect Slice",
  description = "Der beste Pizza Blog im Ruhrgebiet. Authentische Rezepte, professionelle Workshops und die besten Pizzerien.",
  canonical,
  ogImage = "https://pizzasoul.shadowsinthe.space/images/hero-pizza.png",
  ogType = "website",
  noindex = false,
}: SeoHeadProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://pizzasoul.shadowsinthe.space${canonical}`} />
      <link rel="alternate" hrefLang="de-DE" href="https://pizzasoul.shadowsinthe.space" />
      <link rel="alternate" hrefLang="de-AT" href="https://pizzasoul.shadowsinthe.space" />
      <link rel="alternate" hrefLang="de-CH" href="https://pizzasoul.shadowsinthe.space" />
      <link rel="alternate" hrefLang="x-default" href="https://pizzasoul.shadowsinthe.space" />
      
      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`https://pizzasoul.shadowsinthe.space${canonical}`} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PizzaSoul" />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </>
  );
}
