import Link from 'next/link';

const gradingTable = [
  { grade: 'PSA 1', name: 'Poor', desc: 'Stark beschädigt, kaum erkennbar', multiplier: '2%' },
  { grade: 'PSA 2', name: 'Good', desc: 'Erhebliche Schäden sichtbar', multiplier: '5%' },
  { grade: 'PSA 3', name: 'Very Good', desc: 'Deutliche Abnutzung', multiplier: '10%' },
  { grade: 'PSA 4', name: 'VG-EX', desc: 'Leichtere Abnutzungserscheinungen', multiplier: '20%' },
  { grade: 'PSA 5', name: 'Excellent', desc: 'Leichte Gebrauchsspuren', multiplier: '30%' },
  { grade: 'PSA 6', name: 'EX-MT', desc: 'Minimale Mängel', multiplier: '50%' },
  { grade: 'PSA 7', name: 'Near Mint', desc: 'Fast tadellos, kleine Ecken', multiplier: '65%' },
  { grade: 'PSA 8', name: 'NM-MT', desc: 'Sehr guter Zustand, minimale Imperfektionen', multiplier: '85%' },
  { grade: 'PSA 9', name: 'Mint', desc: 'Nahezu perfekt, kaum Mängel erkennbar', multiplier: '150%' },
  { grade: 'PSA 10', name: 'Gem Mint', desc: 'Perfekte Karte – schärfste Ecken, lupenreine Oberfläche', multiplier: '300%+' },
];

const tips = [
  {
    icon: '🏆',
    title: 'Rookie Cards im Draft-Jahr kaufen',
    text: 'Die wertvollsten Karten sind die ersten offiziellen Rookie Cards eines Spielers. Je früher du investierst, desto besser das Preis-Leistungs-Verhältnis.',
  },
  {
    icon: '✨',
    title: 'Prizm und Chrome bevorzugen',
    text: 'Panini Prizm und Topps Chrome sind die begehrtesten Serien. Ihre Refractor-Varianten erzielen regelmäßig die höchsten Preise auf dem Markt.',
  },
  {
    icon: '💎',
    title: 'PSA 10 anstreben',
    text: 'Eine PSA-10-Note kann den Wert einer Karte verdrei- bis verzehnfachen. Karten in Top-Zustand kaufen oder professionell einschicken lassen.',
  },
  {
    icon: '📊',
    title: 'Trend-Spieler beobachten',
    text: 'Spieler wie Victor Wembanyama, Patrick Mahomes und Shohei Ohtani sind aktuell im Aufwind. Frühes Investieren zahlt sich aus.',
  },
];

const glossary = [
  { term: 'Rookie Card', def: 'Erste offizielle Sammelkarte eines Spielers in seiner Debütsaison.' },
  { term: 'Prizm', def: 'Beliebte Panini-Kartenserie mit Chromoberfläche und Regenborgen-Effekten.' },
  { term: 'Refractor', def: 'Karte mit reflektierender Metalloberfläche, meistens aus der Topps-Chrome-Serie.' },
  { term: 'Serial Number', def: 'Limitierte Auflage – z. B. /99 bedeutet nur 99 Stück weltweit.' },
  { term: 'PSA', def: 'Professional Sports Authenticator – führender Grading-Dienst für Sportkarten.' },
  { term: 'BGS', def: 'Beckett Grading Services – zweiter großer Grading-Anbieter mit Subgrades.' },
  { term: 'Gem Mint', def: 'PSA 10 – höchste Bewertung. Karte ist in absolutem Topzustand.' },
  { term: 'Print Run', def: 'Gesamtzahl gedruckter Exemplare einer Karten-Variante.' },
  { term: 'Base Card', def: 'Standard-Karte ohne besondere Refraktor- oder Parallel-Varianten.' },
  { term: 'Auto / Autograph', def: 'Karte mit originalem Autogramm des Spielers – meist deutlich mehr wert.' },
];

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-2">Preis-Guide</h1>
      <p className="text-[#94A3B8] mb-12">Alles was du über den Wert von Sportkarten wissen musst</p>

      {/* Was bestimmt den Wert */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">💡 Was bestimmt den Wert einer Karte?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Rookie Cards vs. normale Karten', text: 'Rookie Cards (erste Saison) sind fast immer wertvoller als Karten aus späteren Jahren – besonders wenn der Spieler zum Superstar wird.' },
            { title: 'Grading (PSA 10 > PSA 9 > ...)', text: 'Der Zustand ist entscheidend. Eine PSA-10-Karte kann 5–10× den Wert einer ungraduierten Karte erzielen.' },
            { title: 'Seltenheit / Print Run', text: 'Je kleiner die Auflage, desto begehrter. Parallel-Varianten mit Serial Numbers (/25, /10, /1) sind besonders wertvoll.' },
            { title: 'Spieler-Popularität', text: 'Performances, Meisterschaften, MVP-Titel und mediale Präsenz treiben den Wert direkt nach oben.' },
          ].map(item => (
            <div key={item.title} className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5">
              <h3 className="text-[#3B82F6] font-semibold mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grading Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">📊 PSA Grading-Tabelle</h2>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#162444] text-[#94A3B8] text-xs uppercase tracking-wide">
                  <th className="px-4 py-3 text-left">Note</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Beschreibung</th>
                  <th className="px-4 py-3 text-right">Wert-Multiplikator</th>
                </tr>
              </thead>
              <tbody>
                {gradingTable.map((row, i) => (
                  <tr
                    key={row.grade}
                    className={`border-t border-[#1e3a6e] ${row.grade === 'PSA 10' ? 'bg-[#1a2f5e]' : i % 2 === 0 ? 'bg-[#0D1F3C]' : 'bg-[#0A1628]'}`}
                  >
                    <td className={`px-4 py-3 font-bold ${row.grade === 'PSA 10' ? 'text-[#3B82F6]' : 'text-white'}`}>{row.grade}</td>
                    <td className="px-4 py-3 text-[#E2E8F0]">{row.name}</td>
                    <td className="px-4 py-3 text-[#94A3B8]">{row.desc}</td>
                    <td className={`px-4 py-3 text-right font-semibold ${row.grade === 'PSA 10' ? 'text-[#3B82F6]' : 'text-[#E2E8F0]'}`}>{row.multiplier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-[#162444] text-[#94A3B8] text-xs">
            * Multiplikator bezogen auf den Basiswert einer ungraduierten Karte (Richtwerte)
          </div>
        </div>
      </section>

      {/* Investment Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">🚀 Top Investitions-Tipps 2025</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tips.map(tip => (
            <div key={tip.title} className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5 flex gap-4">
              <span className="text-2xl flex-shrink-0">{tip.icon}</span>
              <div>
                <h3 className="text-white font-semibold mb-1">{tip.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">📖 Glossar</h2>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl divide-y divide-[#1e3a6e]">
          {glossary.map(entry => (
            <div key={entry.term} className="px-5 py-4 flex gap-4 items-start">
              <span className="text-[#3B82F6] font-bold text-sm min-w-[130px]">{entry.term}</span>
              <span className="text-[#94A3B8] text-sm">{entry.def}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/enoncards/cards"
          className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Zum Kartenkatalog →
        </Link>
      </div>
    </div>
  );
}
