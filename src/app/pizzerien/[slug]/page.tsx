import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Star, Clock, Phone, ExternalLink, ArrowLeft, Globe, Quote } from "lucide-react";
import { pizzerias, getPizzeriaBySlug, pizzeriaReviews } from "../data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pizzeria = getPizzeriaBySlug(slug);
  
  if (!pizzeria) return {};
  
  return {
    title: `${pizzeria.name} | PizzaSoul Pizzerien`,
    description: `${pizzeria.name} in ${pizzeria.location}: ${pizzeria.description}`,
    alternates: {
      canonical: `/pizzerien/${slug}`,
    },
  };
}

function ReviewSourceBadge({ source }: { source: "google" | "tripadvisor" }) {
  if (source === "google") {
    return (
      <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-md text-xs font-medium">
        <svg className="w-3 h-3" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-gray-700">Google</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-[#00AF87] rounded-md text-xs font-medium text-white">
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z"/>
      </svg>
      <span>TripAdvisor</span>
    </div>
  );
}

export default async function PizzeriaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pizzeria = getPizzeriaBySlug(slug);
  
  if (!pizzeria) notFound();
  
  const reviews = pizzeriaReviews[slug] || [];
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : pizzeria.rating.toString();
  
  const relatedPizzerias = pizzerias.filter((p) => p.slug !== slug).slice(0, 3);
  
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className={`h-[40vh] bg-gradient-to-br ${pizzeria.gradient} flex items-center justify-center relative`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <span className="text-8xl block mb-4">{pizzeria.emoji}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{pizzeria.name}</h1>
          <p className="text-white/80 text-xl">{pizzeria.specialty}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max px-4 max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/pizzerien" className="inline-flex items-center gap-2 text-[#E85D04] hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" /> Zurück zu allen Pizzerien
          </Link>

          {/* Rating Summary with Source Badges */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < Math.floor(Number(averageRating)) ? "text-[#F4A024] fill-[#F4A024]" : "text-[#3D3D3D]"}`} />
                ))}
              </div>
              <span className="text-2xl font-bold">{averageRating}</span>
              <span className="text-[#9CA3AF]">({reviews.length} Bewertungen)</span>
            </div>
            
            {/* Source Ratings */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#2D2D2D] rounded-lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-bold">{pizzeria.googleRating}</span>
                <span className="text-[#9CA3AF] text-sm">Google</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#00AF87]/20 rounded-lg">
                <svg className="w-5 h-5 text-[#00AF87]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z"/>
                </svg>
                <span className="font-bold text-[#00AF87]">{pizzeria.tripadvisorRating}</span>
                <span className="text-[#00AF87] text-sm">TripAdvisor</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-[#9CA3AF] mb-8">{pizzeria.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {pizzeria.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-[#2D2D2D] rounded-full text-[#9CA3AF]">
                {tag}
              </span>
            ))}
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#2D2D2D] rounded-xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#E85D04]" /> Adresse
              </h3>
              <p className="text-[#9CA3AF]">{pizzeria.address}</p>
              <a 
                href={pizzeria.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#E85D04] hover:underline mt-2"
              >
                <Globe className="w-4 h-4" /> Google Maps
              </a>
            </div>

            <div className="bg-[#2D2D2D] rounded-xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E85D04]" /> Öffnungszeiten
              </h3>
              <p className="text-[#9CA3AF]">{pizzeria.hours}</p>
            </div>

            <div className="bg-[#2D2D2D] rounded-xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#E85D04]" /> Telefon
              </h3>
              <a href={`tel:${pizzeria.phone}`} className="text-[#9CA3AF] hover:text-[#E85D04]">
                {pizzeria.phone}
              </a>
            </div>

            <div className="bg-[#2D2D2D] rounded-xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-[#E85D04]">💰</span> Preisklasse
              </h3>
              <p className="text-[#9CA3AF] text-2xl">{pizzeria.priceRange}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href={pizzeria.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Website besuchen <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href={pizzeria.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" /> Route planen
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-[#2D2D2D]">
        <div className="container-max px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Quote className="w-6 h-6 text-[#E85D04]" />
            Kundenbewertungen
          </h2>
          
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{review.title}</h3>
                        <ReviewSourceBadge source={review.source} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#9CA3AF] text-sm">{review.author}</span>
                        <span className="text-[#3D3D3D]">•</span>
                        <span className="text-[#9CA3AF] text-sm">{new Date(review.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-[#F4A024] fill-[#F4A024]" : "text-[#3D3D3D]"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#9CA3AF] leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#9CA3AF]">Noch keine Bewertungen vorhanden.</p>
          )}
        </div>
      </section>

      {/* Related Pizzerias */}
      <section className="section-padding">
        <div className="container-max px-4">
          <h2 className="text-2xl font-bold mb-8">Weitere Pizzerien</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPizzerias.map((p) => (
              <Link 
                key={p.slug} 
                href={`/pizzerien/${p.slug}`}
                className="bg-[#2D2D2D] rounded-xl p-6 hover:bg-[#3D3D3D] transition-colors"
              >
                <span className="text-4xl block mb-4">{p.emoji}</span>
                <h3 className="font-bold mb-1">{p.name}</h3>
                <p className="text-[#9CA3AF] text-sm mb-2">{p.location}</p>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-[#F4A024] fill-[#F4A024]" />
                  <span className="font-medium">{p.rating}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
