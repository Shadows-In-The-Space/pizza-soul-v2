import { Metadata } from "next";

// JSON-LD for this page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pizza selber machen: Der komplette Guide für perfekte Pizza",
  description: "Lerne wie du zuhause eine perfekte Pizza machst. Von Teig bis Belag – alle Tipps und Tricks für Profi-Ergebnisse.",
  author: {
    "@type": "Organization",
    name: "PizzaSoul",
    url: "https://pizzasoul.shadowsinthe.space",
  },
  publisher: {
    "@type": "Organization",
    name: "PizzaSoul",
    logo: {
      "@type": "ImageObject",
      url: "https://pizzasoul.shadowsinthe.space/images/hero-pizza.png",
    },
  },
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pizzasoul.shadowsinthe.space/blog/pizza-selber-machen",
  },
};

export const metadata: Metadata = {
  title: "Pizza selber machen: Der komplette Guide für perfekte Pizza",
  description: "Lerne wie du zuhause eine perfekte Pizza machst. Von Teig bis Belag – alle Tipps und Tricks für Profi-Ergebnisse. Inkl. Video und Rezept.",
  keywords: ["Pizza selber machen", "Pizza Rezept", "Pizza Teig", "Pizza backen", "Pizza selber backen", "Pizza Anleitung"],
};

export default function BlogPizzaSelberMachen() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen pt-24 pb-20">
        {/* Article Header */}
        <section className="relative h-[50vh] flex items-end justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D1810] to-[#1A1A1A]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "url('/images/hero-pizza.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />

          <div className="relative z-10 text-center px-4 pb-12 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E85D04]/20 text-[#E85D04] text-sm font-semibold border border-[#E85D04]/30 mb-4">
              📝 Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Pizza selber machen:{" "}
              <span className="text-gradient bg-gradient-to-r from-[#E85D04] to-[#DC2F02] bg-clip-text text-transparent">
                Der komplette Guide
              </span>
            </h1>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              Von der Teigzubereitung bis zum perfekten Belag – alles was du wissen musst.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-max px-4 max-w-3xl">
            <article className="prose prose-invert prose-lg max-w-none">
              
              {/* Table of Contents */}
              <nav className="bg-[#2D2D2D] rounded-xl p-6 mb-10">
                <h2 className="text-xl font-bold mb-4">Inhaltsverzeichnis</h2>
                <ol className="space-y-2 text-[#E85D04]">
                  <li><a href="#teig" className="hover:underline">1. Der perfekte Teig</a></li>
                  <li><a href="#gare" className="hover:underline">2. Die Gare – Zeit ist alles</a></li>
                  <li><a href="#formen" className="hover:underline">3. Teig formen ohne Nudelholz</a></li>
                  <li><a href="#belag" className="hover:underline">4. Der perfekte Belag</a></li>
                  <li><a href="#ofen" className="hover:underline">5. Der richtige Ofen</a></li>
                  <li><a href="#backen" className="hover:underline">6. Backen wie ein Profi</a></li>
                </ol>
              </nav>

              {/* Section 1 */}
              <div id="teig">
                <h2 className="text-3xl font-bold mb-6 text-white">1. Der perfekte Teig</h2>
                
                <p className="text-[#9CA3AF] text-lg mb-6">
                  Der Teig ist das Herzstück jeder guten Pizza. Ein schlechter Teig kann durch noch so gute Zutaten nicht gerettet werden. Ein guter Teig braucht vor allem eines: <strong className="text-white">Zeit und Geduld</strong>.
                </p>

                <div className="bg-[#2D2D2D] rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Zutaten für 4 Pizzen (ca. 200g pro Teigkugel)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#E85D04] font-bold">500g</span>
                      <span><strong className="text-white">Tipo 00 Mehl</strong> – Das beste Mehl für Pizza (oder Manitoba)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#E85D04] font-bold">325ml</span>
                      <span><strong className="text-white">Wasser</strong> – Lauwarm, ca. 25°C, am besten gefiltert</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#E85D04] font-bold">10g</span>
                      <span><strong className="text-white">Salz</strong> – Meersalz oder Himalayasalz</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#E85D04] font-bold">3g</span>
                      <span><strong className="text-white">Trockenhefe</strong> – Oder 7g frische Hefe</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#E85D04]/10 border-l-4 border-[#E85D04] p-4 rounded-r-lg mb-6">
                  <p className="text-[#E85D04]">
                    <strong>💡 Profi-Tipp:</strong> Das Wichtigste beim Mehl ist der Proteingehalt. Tipo 00 hat ca. 11-12% Protein – das bildet das Gluten-Netzwerk, das die Pizza zusammenhält. Nudelnmehl (540) geht auch, wird aber zäher.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">Das Poolish-Verfahren (empfohlen)</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Poolish ist ein vorgegartes Mehlgemisch, das dem Teig mehr Geschmack und bessere Hüftbarkeit verleiht. So funktioniert es:
                </p>
                <ol className="space-y-2 text-[#9CA3AF] list-decimal list-inside">
                  <li>100g Mehl + 100ml Wasser (25°C) + 1g Hefe mischen</li>
                  <li>2-4 Stunden bei Raumtemperatur gehen lassen</li>
                  <li>Das Poolish mit dem Restlichen Mehl, Wasser und Salz verkneten</li>
                </ol>
              </div>

              {/* Section 2 */}
              <div id="gare" className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-white">2. Die Gare – Zeit ist alles</h2>
                
                <p className="text-[#9CA3AF] text-lg mb-6">
                  <strong className="text-white">Dies ist der wichtigste Schritt</strong> den die meisten Anfänger überspringen. Ein Teig braucht Zeit zum Gehen – je länger, desto besser der Geschmack.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#2D2D2D] rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#E85D04] mb-2">24h</div>
                    <div className="text-sm text-[#9CA3AF]">Minimum für guten Geschmack</div>
                  </div>
                  <div className="bg-[#2D2D2D] rounded-xl p-6 text-center border-2 border-[#E85D04]">
                    <div className="text-3xl font-bold text-[#E85D04] mb-2">48-72h</div>
                    <div className="text-sm text-[#9CA3AF]">Empfohlen für beste Ergebnisse</div>
                  </div>
                  <div className="bg-[#2D2D2D] rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#E85D04] mb-2">7+ Tage</div>
                    <div className="text-sm text-[#9CA3AF]">Möglich mit langer Kühlgare</div>
                  </div>
                </div>

                <div className="bg-[#DC2F02]/10 border-l-4 border-[#DC2F02] p-4 rounded-r-lg mb-6">
                  <p className="text-white">
                    <strong>❌ Falsch:</strong> "Ich hab den Teig nur 2 Stunden gehen lassen, war trotzdem gut."<br/>
                    <strong>✅ Richtig:</strong> "Nach 48 Stunden im Kühlschrank war der Teig SO VIEL besser!"
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">So gart der Teig richtig:</h3>
                <ol className="space-y-3 text-[#9CA3AF] list-decimal list-inside">
                  <li><strong className="text-white">Anfangsgare:</strong> 1-2 Stunden bei Raumtemperatur (Teig verdoppelt)</li>
                  <li><strong className="text-white">Kühlschrank:</strong> 24-72 Stunden bei 4-8°C (langsame Fermentation)</li>
                  <li><strong className="text-white">Stückgare:</strong> 1-2 Stunden Raumtemperatur vor dem Formen</li>
                </ol>
              </div>

              {/* Section 3 */}
              <div id="formen" className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-white">3. Teig formen ohne Nudelholz</h2>
                
                <p className="text-[#9CA3AF] text-lg mb-6">
                  <strong className="text-white">Nudelholz verboten!</strong> Ein Nudelholz zerstört die Luftblasen im Teig und macht die Pizza zäh. Stattdessen:
                </p>

                <ol className="space-y-4 text-[#9CA3AF] mb-6">
                  <li>
                    <strong className="text-white">Drücken:</strong> Mit den Fingern von der Mitte nach außen drücken, Rand frei lassen
                  </li>
                  <li>
                    <strong className="text-white">Heben:</strong> Den Teigling auf die Faust nehmen und vorsichtig dehnen
                  </li>
                  <li>
                    <strong className="text-white">Drehen:</strong> Den Teig immer wieder drehen und dabei hängen lassen (Gravity!)
                  </li>
                  <li>
                    <strong className="text-white">Der Rand:</strong> Mindestens 2cm Rand lassen – das wird der schöne luftige Korbrand
                  </li>
                </ol>

                <div className="bg-[#2D2D2D] rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3">💡 Das Geheimnis: Window Pane Test</h3>
                  <p className="text-[#9CA3AF]">
                    Wenn du den Teig so dünn ziehen kannst, dass du eine Zeitung durchsehen kannst ohne zu reißen, ist er perfekt. Das nennt man "WFQ" – Window Frame Quality.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div id="belag" className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-white">4. Der perfekte Belag</h2>
                
                <p className="text-[#9CA3AF] text-lg mb-6">
                  <strong className="text-white">Weniger ist mehr!</strong> Die beste Pizza hat nicht 5cm Belag, sondern maximal 2-3 Zutaten. Qualität schlägt Quantität.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[#2D2D2D] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#E85D04]">🍅 Die Sauce</h3>
                    <ul className="space-y-2 text-[#9CA3AF]">
                      <li>• San Marzano Tomaten (Dose)</li>
                      <li>• Mit der Hand zerdrücken</li>
                      <li>• Eine Prise Salz</li>
                      <li>• <strong className="text-white">NICHT kochen!</strong></li>
                    </ul>
                  </div>
                  <div className="bg-[#2D2D2D] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#E85D04]">🧀 Der Käse</h3>
                    <ul className="space-y-2 text-[#9CA3AF]">
                      <li>• Fior di Latte (Kuh)</li>
                      <li>• Oder Bufala Mozzarella (DOP!)</li>
                      <li>• Vor dem Backen gut abtropfen</li>
                      <li>• In Stücke reißen, nicht schneiden</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#22C55E]/10 border-l-4 border-[#22C55E] p-4 rounded-r-lg">
                  <h3 className="font-bold text-white mb-2">🍃 Frisches Basilikum</h3>
                  <p className="text-[#9CA3AF]">
                    Erst <strong className="text-white">NACH dem Backen</strong> auf die Pizza geben! Sonst verbrennt es und wird bitter.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div id="ofen" className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-white">5. Der richtige Ofen</h2>
                
                <p className="text-[#9CA3AF] text-lg mb-6">
                  Das Wichtigste zuerst: <strong className="text-white">Du brauchst mindestens 250°C</strong>. Im normalen Haushaltsofen ist das manchmal nicht möglich – aber du kannst tricksen.
                </p>

                <div className="bg-[#2D2D2D] rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Ofen-Typen im Vergleich</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-[#E85D04]">
                        <th className="pb-2">Ofen</th>
                        <th className="pb-2">Temperatur</th>
                        <th className="pb-2">Backzeit</th>
                        <th className="pb-2">Ergebnis</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#9CA3AF]">
                      <tr>
                        <td className="py-2">Pizzaofen (500°C)</td>
                        <td className="py-2">450-500°C</td>
                        <td className="py-2">60-90 Sek</td>
                        <td className="py-2 text-[#22C55E]">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="py-2">Backofen + Stein</td>
                        <td className="py-2">280-300°C</td>
                        <td className="py-2">8-12 min</td>
                        <td className="py-2 text-[#22C55E]">⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="py-2">Backofen Maximum</td>
                        <td className="py-2">250°C</td>
                        <td className="py-2">12-15 min</td>
                        <td className="py-2 text-[#F4A024]">⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="py-2">Normaler Backofen</td>
                        <td className="py-2">200-220°C</td>
                        <td className="py-2">18-25 min</td>
                        <td className="py-2 text-[#DC2F02]">⭐⭐</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#9CA3AF] mb-6">
                  <strong className="text-white">Unsere Pizzaofen-Empfehlungen:</strong>Für den Einstieg eignet sich der <a href="/ausruestung/ooni-koda-12" className="text-[#E85D04] hover:underline">Ooni Koda 12</a> perfekt. Er erreicht 500°C und ist in 20 Minuten einsatzbereit.
                </p>
              </div>

              {/* Section 6 */}
              <div id="backen" className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-white">6. Backen wie ein Profi</h2>
                
                <ol className="space-y-4 text-[#9CA3AF] mb-6 list-decimal list-inside">
                  <li><strong className="text-white">Vorheizen:</strong> Ofen 30-60 Minuten auf Maximum (mind. 250°C)</li>
                  <li><strong className="text-white">Pizza vorbereiten:</strong> Auf Backpapier oder Pizzaschieber legen</li>
                  <li><strong className="text-white">Einschieben:</strong> So weit unten wie möglich einschieben</li>
                  <li><strong className="text-white">Oberhitze:</strong> Bei Bedarf in den letzten 2-3 Min aktivieren</li>
                  <li><strong className="text-white">Check:</strong> Nach der Halbzeit drehen für gleichmäßiges Bräunen</li>
                  <li><strong className="text-white">Herausnehmen:</strong> Rand sollte golden/leopardiert sein, Boden knusprig</li>
                </ol>

                <div className="bg-[#E85D04]/20 border-l-4 border-[#E85D04] p-4 rounded-r-lg">
                  <h3 className="font-bold text-white mb-2">🎯 Das Leoparding</h3>
                  <p className="text-[#9CA3AF]">
                    Die kleinen schwarzen Punkte am Rand heißen "Leoparding" – sie entstehen bei über 400°C und sind ein Zeichen für eine <strong className="text-white">echte Pizza Napoletana</strong>.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 pt-12 border-t border-white/10">
                <h2 className="text-3xl font-bold mb-6 text-white">Häufige Fragen</h2>
                
                <div className="space-y-4">
                  <details className="bg-[#2D2D2D] rounded-xl p-4">
                    <summary className="font-semibold cursor-pointer">Kann ich den Teig auch ohne Kühlschrank gehen lassen?</summary>
                    <p className="text-[#9CA3AF] mt-2">Ja, aber maximal 4-6 Stunden bei Raumtemperatur. Danach wird die Hefe zu aktiv und der Teig wird ungleichmäßig. Im Kühlschrank gärt er langsamer und gleichmäßiger.</p>
                  </details>
                  <details className="bg-[#2D2D2D] rounded-xl p-4">
                    <summary className="font-semibold cursor-pointer">Warum ist mein Boden nicht knusprig?</summary>
                    <p className="text-[#9CA3AF] mt-2">Entweder ist die Temperatur zu niedrig (brauchst 250°C+), der Teig hat zu viel Wasser (trockne ihn vor), oder der Boden braucht länger. Mit einem Pizzastahl wird es deutlich besser.</p>
                  </details>
                  <details className="bg-[#2D2D2D] rounded-xl p-4">
                    <summary className="font-semibold cursor-pointer">Kann ich auch normalen Käse nehmen?</summary>
                    <p className="text-[#9CA3AF] mt-2">Du <em>kannst</em>, aber das Ergebnis ist nicht authentisch. Mozzarella gibt die typische Fädigkeit und den mildern Geschmack. Alternativen: Gouda (gut zum Schmelzen), aber keine Sahne-Produkte.</p>
                  </details>
                </div>
              </div>

            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#2D2D2D]">
          <div className="container-max px-4 text-center max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Bereit für deine erste eigene Pizza?
            </h2>
            <p className="text-[#9CA3AF] mb-6">
              Mit dem richtigen Equipment und etwas Übung wirst du zum Pizza-Profi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/rezepte/pizza-napoletana" className="btn-primary">
                Zum Napoletana Rezept
              </a>
              <a href="/ausruestung" className="btn-secondary">
                Pizzaöfen vergleichen
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
