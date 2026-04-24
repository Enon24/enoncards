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
    icon: '🏀',
    title: 'Basketball dominiert 2025 (+29%)',
    text: 'Der CardLadder Basketball Index legte +29% zu. Cooper Flagg Refractor PSA 10: +180%. Victor Wembanyama PSA 10: +52%. Jetzt einsteigen lohnt sich noch.',
  },
  {
    icon: '⚾',
    title: 'Baseball im Aufschwung (+17%)',
    text: 'Baseball Index +17%. Shohei Ohtani: $57,9 Mio. eBay-Umsatz 2025. Paul Skenes 1st Chrome PSA 10: +45%. Der Ohtani-Boom macht Baseball wieder spannend.',
  },
  {
    icon: '💎',
    title: 'PSA 10 anstreben',
    text: 'Nur 38% des Sekundärmarkts sind graduiert. Eine PSA-10-Note kann den Wert einer Karte verdrei- bis verzehnfachen. Immer in Top-Zustand kaufen oder einschicken.',
  },
  {
    icon: '🚀',
    title: 'Rookie Cards im Draft-Jahr kaufen',
    text: 'Jayden Daniels +95%, Cooper Flagg +180%: Die ersten offiziellen Rookie Cards im Debütjahr zu kaufen ist die bewährteste Strategie. Je früher, desto besser.',
  },
  {
    icon: '✨',
    title: 'Prizm und Chrome bevorzugen',
    text: 'Panini Prizm und Topps Chrome sind die begehrtesten Serien. Refractor-Varianten erzielen regelmäßig die höchsten Preise – Patrick Mahomes Silver PSA 10: $6.500.',
  },
  {
    icon: '📊',
    title: 'Vintage als sichere Anlage',
    text: 'Mickey Mantle 1952 PSA 6: $85.000. Wayne Gretzky 1979 PSA 7: $6.500. Michael Jordan 1986 Fleer PSA 8: $28.000. Vintage-Karten als Langzeitinvestition sind bewährt.',
  },
];

const glossary = [
  { term: 'Rookie Card', def: 'Erste offizielle Sammelkarte eines Spielers in seiner Debütsaison.' },
  { term: 'Prizm', def: 'Beliebte Panini-Kartenserie mit Chromoberfläche und Regenbogen-Effekten.' },
  { term: 'Refractor', def: 'Karte mit reflektierender Metalloberfläche, meistens aus der Topps-Chrome-Serie.' },
  { term: 'Serial Number', def: 'Limitierte Auflage – z. B. /99 bedeutet nur 99 Stück weltweit.' },
  { term: 'PSA', def: 'Professional Sports Authenticator – führender Grading-Dienst für Sportkarten.' },
  { term: 'BGS', def: 'Beckett Grading Services – zweiter großer Grading-Anbieter mit Subgrades.' },
  { term: 'Gem Mint', def: 'PSA 10 – höchste Bewertung. Karte ist in absolutem Topzustand.' },
  { term: 'Print Run', def: 'Gesamtzahl gedruckter Exemplare einer Karten-Variante.' },
  { term: 'Base Card', def: 'Standard-Karte ohne besondere Refraktor- oder Parallel-Varianten.' },
  { term: 'Auto / Autograph', def: 'Karte mit originalem Autogramm des Spielers – meist deutlich mehr wert.' },
  { term: 'Young Guns', def: 'Upper Deck Rookie Card-Serie für NHL-Spieler – Standard im Hockey-Segment.' },
  { term: 'Superfractor', def: 'Extrem seltene Karte – nur 1 Exemplar weltweit (1/1). Höchste Sammlerwertigkeit.' },
];

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-2">Preis-Guide 2025</h1>
      <p className="text-[#94A3B8] mb-12">Alles was du über den Wert von Sportkarten wissen musst – mit echten Marktdaten</p>

      {/* Market Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">🔥 Markt-Highlights 2025</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Basketball Index', value: '+29%', color: 'text-[#10B981]' },
            { label: 'Baseball Index', value: '+17%', color: 'text-[#10B981]' },
            { label: 'Cooper Flagg RC', value: '+180%', color: 'text-[#10B981]' },
            { label: 'Jayden Daniels RC', value: '+95%', color: 'text-[#10B981]' },
          ].map(item => (
            <div key={item.label} className="bg-[#162444] border border-[#1e3a6e] rounded-xl p-4 text-center">
              <div className={`text-2xl font-extrabold ${item.color} mb-1`}>{item.value}</div>
              <div className="text-[#94A3B8] text-xs">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Was bestimmt den Wert */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">💡 Was bestimmt den Wert einer Karte?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Rookie Cards vs. normale Karten', text: 'Rookie Cards (erste Saison) sind fast immer wertvoller. Cooper Flagg +180%, Jayden Daniels +95% – das Debut-Jahr ist entscheidend.' },
            { title: 'Grading (PSA 10 > PSA 9 > ...)', text: 'Der Zustand ist entscheidend. Nur 38% des Sekundärmarkts sind graduiert. Eine PSA-10-Karte kann 3–10× den Wert einer ungraduierten Karte erzielen.' },
            { title: 'Seltenheit / Print Run', text: 'Je kleiner die Auflage, desto begehrter. Parallel-Varianten (/25, /10, /1) – Cooper Flagg Superfractor 1/1 wurde für $180.000 verkauft.' },
            { title: 'Spieler-Popularität', text: 'Michael Jordan: $70,5 Mio. eBay-Umsatz 2025. Caitlin Clark: $366.000 für eine Karte. Performances und mediale Präsenz treiben den Wert direkt hoch.' },
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
              <span className="text-[#3B82F6] font-bold text-sm min-w-[140px]">{entry.term}</span>
              <span className="text-[#94A3B8] text-sm">{entry.def}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/enoncards/cards"
          className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Zum Kartenkatalog →
        </Link>
        <Link
          href="/enoncards/markt"
          className="inline-block bg-[#162444] hover:bg-[#1a2f5e] border border-[#1e3a6e] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Markt-Analyse →
        </Link>
      </div>
    </div>
  );
}
