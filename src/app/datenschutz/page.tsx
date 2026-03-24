import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-max px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-[#9CA3AF]">
          <p>
            <strong className="text-white">Stand:</strong> März 2026
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">1. Datenschutz auf einen Blick</h2>
          
          <div className="bg-[#2D2D2D] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Wir erheben nur minimal notwendige Daten</li>
              <li>Kein Tracking ohne Zustimmung</li>
              <li>Cookies nur für essenzielle Funktionen</li>
              <li>Kein Verkauf von Daten</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8">2. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-xl font-semibold text-white">Verantwortliche</h3>
          <p>
            Marc-Dennis Haberland<br />
            Adaptive AI Solutions<br />
            Ruhrgebiet, Deutschland<br />
            E-Mail: <a href="mailto:hallo@pizzasoul.de" className="text-[#E85D04] hover:underline">hallo@pizzasoul.de</a>
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">Ihre Rechte</h3>
          <p>
            Sie haben jederzeit das Recht:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Deren Berichtigung oder Löschung zu verlangen</li>
            <li>Der Verarbeitung zu widersprechen</li>
            <li>Datenübertragbarkeit zu fordern</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8">3. Datenerfassung auf dieser Website</h2>

          <h3 className="text-xl font-semibold text-white">Server-Logfiles</h3>
          <p>
            Bei jedem Besuch unserer Website werden automatisch Daten erfasst:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p className="mt-4">
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen
            nur statistischen Auswertungen zur Fehleranalyse.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular kontaktieren, werden Ihre Angaben inklusive
            der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">4. Externe Dienste</h2>

          <h3 className="text-xl font-semibold text-white">Google Fonts</h3>
          <p>
            Wir nutzen Google Fonts für die Darstellung von Schriftarten. Diese werden
            von Google bereitgestellt und unterliegen deren Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6">YouTube</h3>
          <p>
            Eingebettete YouTube-Videos dienen nur der Information. Bei Wiedergabe werden
            Daten gemäß der YouTube-Datenschutzerklärung verarbeitet.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">5. Hosting</h2>
          <p>
            Diese Website wird auf Servern in Deutschland gehostet. Der Hosting-Anbieter
            ist Hetzner Online GmbH. Die Serverstandorte befinden sich in Falkenstein,
            Deutschland.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">6. SSL-Verschlüsselung</h2>
          <p>
            Diese Website nutzt SSL-Verschlüsselung (HTTPS). Alle übertragenen Daten
            werden verschlüsselt übertragen.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">7. Cookies</h2>
          <p>
            Wir verwenden nur technisch notwendige Cookies. Diese dienen der
            Benutzerfreundlichkeit und werden nach Ende der Sitzung gelöscht.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">8. Änderungen</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets
            den aktuellen rechtlichen Anforderungen entspricht.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10">
            <Link href="/impressum" className="text-[#E85D04] hover:underline mr-4">
              Impressum
            </Link>
            <Link href="/" className="text-[#E85D04] hover:underline">
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
