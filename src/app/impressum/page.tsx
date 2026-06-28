import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-max px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-[#9CA3AF]">
          <p>
            <strong className="text-white">Angaben gemäß § 5 TMG:</strong>
          </p>

          <div className="bg-[#2D2D2D] rounded-xl p-6">
            <p className="text-white font-semibold">PizzaSoul</p>
            <p>c/o Marc-Dennis Habeland</p>
            <p>Adaptive-Ai-Solutions</p>
            <p>c/o IP-Management #10391</p>
            <p>Ludwig-Erhard-Straße 18</p>
            <p>20459 Hamburg</p>
            <p>Deutschland</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:hallo@pizzasoul.de" className="text-[#E85D04] hover:underline">hallo@pizzasoul.de</a>
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Umsatzsteuer-ID</h2>
          <p>
            USt-IdNr.: DE461893928
            <br />
            <span className="text-sm">(gemäß § 27 a Umsatzsteuergesetz)</span>
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Marc-Dennis Habeland<br />
            Adaptive-Ai-Solutions<br />
            c/o IP-Management #10391<br />
            Ludwig-Erhard-Straße 18<br />
            20459 Hamburg
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Haftungsausschluss</h2>

          <h3 className="text-xl font-semibold text-white">Haftung für Inhalte</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
            keine Gewähr übernehmen.
          </p>

          <h3 className="text-xl font-semibold text-white">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
            wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber verantwortlich.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
            gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">Energiewende</h2>
          <p>
            Wir sind ein digitales Projekt und tragen aktiv zur Energiewende bei. Unsere
            Server nutzen 100% erneuerbare Energien.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10">
            <Link href="/" className="text-[#E85D04] hover:underline">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
