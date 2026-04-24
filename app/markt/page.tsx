import Link from 'next/link';

const marketIndex = [
  { label: 'Basketball Index', change: '+29%', icon: '🏀', sport: 'basketball', detail: 'Stärkste Sportart 2025' },
  { label: 'Baseball Index', change: '+17%', icon: '⚾', sport: 'baseball', detail: 'Solides Wachstum' },
  { label: 'Hockey Index', change: '+2.98%', icon: '🏒', sport: 'hockey', detail: 'Stabiler Markt' },
  { label: 'Football Index', change: '+0.61%', icon: '🏈', sport: 'football', detail: 'Rookie-getrieben' },
];

const ebaySellers = [
  { rank: 1, name: 'Michael Jordan', sport: '🏀', volume: '$70,5 Mio.', note: '#1 seit Jahren' },
  { rank: 2, name: 'Shohei Ohtani', sport: '⚾', volume: '$57,9 Mio.', note: 'Dodgers-Boom' },
  { rank: 3, name: 'LeBron James', sport: '🏀', volume: '$30,5 Mio.', note: 'GOAT-Status' },
  { rank: 4, name: 'Kobe Bryant', sport: '🏀', volume: '$30,4 Mio.', note: 'Mamba Forever' },
  { rank: 5, name: 'Victor Wembanyama', sport: '🏀', volume: '$30,0 Mio.', note: 'Rookie-Explosion' },
  { rank: 6, name: 'Jayden Daniels', sport: '🏈', volume: '$20,0 Mio.', note: 'NFL Rookie 2024' },
  { rank: 7, name: 'Caitlin Clark', sport: '🏀', volume: '$15,0 Mio.', note: 'WNBA-Sensation' },
  { rank: 8, name: 'Mickey Mantle', sport: '⚾', volume: '$13,0 Mio.', note: 'Vintage-Grail' },
];

const mostSearched = {
  basketball: ['Michael Jordan', 'Victor Wembanyama', 'Kobe Bryant', 'LeBron James', 'Cooper Flagg'],
  baseball: ['Shohei Ohtani', 'Ken Griffey Jr.', 'Mickey Mantle', 'Paul Skenes', 'Mike Trout'],
  football: ['Jayden Daniels', 'Patrick Mahomes', 'JJ McCarthy', 'Caleb Williams', 'Josh Allen'],
  hockey: ['Wayne Gretzky', 'Connor Bedard', 'Sidney Crosby', 'Connor McDavid', 'Auston Matthews'],
};

const insights = [
  { icon: '🏀', title: 'Basketball dominiert', text: 'Basketball macht den größten Teil des Sportkarten-Markts aus. +29% YTD – angetrieben von Jordan, Wembanyama, LeBron und Cooper Flagg.' },
  { icon: '🌟', title: 'Rookie Cards = höchstes Potenzial', text: 'Cooper Flagg +180%, Jayden Daniels +95%, Victor Wembanyama +52%: Rookie Cards in der Debütsaison bieten das höchste Wertsteigerungspotenzial.' },
  { icon: '💎', title: 'PSA 10 = 3–10× Wert', text: 'Nur 38% des Sekundärmarkts sind graduiert. Eine PSA 10 kann 3–10× den Wert einer ungraduierten Karte erzielen.' },
  { icon: '📊', title: 'Vintage + Seltenheit = sichere Anlage', text: 'Mickey Mantle 1952, Wayne Gretzky 1979, Michael Jordan 1986 Fleer – diese Karten haben über Jahrzehnte an Wert gewonnen und gelten als sichere Langzeitanlage.' },
  { icon: '🔮', title: 'Prognose bis 2034', text: 'Grand View Research prognostiziert 9,8% CAGR. Der Markt soll von $13,5 Mrd. (2025) auf $271 Mrd. (2034) wachsen.' },
  { icon: '🌐', title: 'Globaler Markt boomt', text: 'eBay allein erzielte $1,78 Mrd. Umsatz mit Sportkarten-Singles in 2025. 30+ Mio. Sammler weltweit treiben die Nachfrage.' },
];

const sources = [
  { name: 'CardLadder.com', desc: 'Marktindizes (CL50, Sport-Indizes)', url: 'https://www.cardladder.com' },
  { name: 'eBay Collected Report 2025', desc: 'Umsatzdaten nach Spieler', url: 'https://www.ebay.com' },
  { name: 'Grand View Research', desc: 'Marktgröße & CAGR-Prognose', url: 'https://www.grandviewresearch.com' },
  { name: 'Sports Collectors Daily', desc: 'Aktuelle Verkaufsdaten', url: 'https://www.sportscollectorsdaily.com' },
];

export default function MarktPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-2">Markt-Analyse 2025</h1>
      <p className="text-[#94A3B8] mb-12">Reale Marktdaten aus der Tiefenanalyse – Stand April 2026</p>

      {/* CardLadder Market Index */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold text-white">📈 CardLadder Market Index 2025</h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-6">CL50 Gesamtmarkt: <span className="text-[#10B981] font-bold">↑ +28%</span> · Quelle: CardLadder.com (2025)</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {marketIndex.map(item => (
            <Link key={item.sport} href={`/enoncards/sport/${item.sport}`}>
              <div className="bg-[#162444] border border-[#1e3a6e] hover:border-[#3B82F6]/60 rounded-xl p-6 text-center transition-colors cursor-pointer group">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-[#10B981] text-3xl font-extrabold mb-1">↑ {item.change}</div>
                <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-[#94A3B8] text-xs">{item.detail}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Marktgröße */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">💰 Marktgröße &amp; Wachstum</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Globaler Markt 2025', value: '$13,5 – 14,8 Mrd.', icon: '🌍', sub: 'Grand View Research' },
            { label: 'eBay-Umsatz Sportkarten', value: '$1,78 Mrd.', icon: '🏷️', sub: 'eBay Report 2025' },
            { label: 'CAGR 2025–2034', value: '9,8%', icon: '📊', sub: 'Prognose' },
            { label: 'Prognose 2034', value: '$271 Mrd.', icon: '🚀', sub: 'Grand View Research' },
          ].map(stat => (
            <div key={stat.label} className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-[#3B82F6] text-xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-white text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-[#94A3B8] text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top eBay Sellers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">🏆 Top eBay-Verkäufer 2025</h2>
        <p className="text-[#94A3B8] text-sm mb-6">Quelle: eBay Collected Report 2025 – Jahresumsatz nach Spieler</p>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-4 bg-[#162444] px-6 py-3 text-xs text-[#94A3B8] font-semibold uppercase tracking-wide">
            <span>Rang</span>
            <span className="col-span-2">Spieler</span>
            <span className="text-right">eBay-Umsatz 2025</span>
          </div>
          {ebaySellers.map((seller, i) => (
            <div
              key={seller.name}
              className={`grid grid-cols-4 items-center px-6 py-4 ${i < ebaySellers.length - 1 ? 'border-b border-[#1e3a6e]' : ''} ${i === 0 ? 'bg-[#1a2f5e]' : ''}`}
            >
              <span className={`text-lg font-extrabold ${i === 0 ? 'text-[#3B82F6]' : 'text-[#94A3B8]'}`}>#{seller.rank}</span>
              <span className="col-span-2">
                <span className="text-white font-semibold">{seller.sport} {seller.name}</span>
                <span className="block text-[#94A3B8] text-xs mt-0.5">{seller.note}</span>
              </span>
              <span className="text-[#10B981] font-bold text-right">{seller.volume}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Most Searched */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">🔍 Meistgesuchte Spieler auf eBay 2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(mostSearched).map(([sport, players]) => {
            const icons: Record<string, string> = { basketball: '🏀', baseball: '⚾', football: '🏈', hockey: '🏒' };
            const labels: Record<string, string> = { basketball: 'Basketball', baseball: 'Baseball', football: 'Football', hockey: 'Hockey' };
            return (
              <div key={sport} className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{icons[sport]}</span>
                  <span className="text-white font-bold">{labels[sport]}</span>
                </div>
                <ol className="space-y-2">
                  {players.map((player, idx) => (
                    <li key={player} className="flex items-center gap-2 text-sm">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${idx === 0 ? 'bg-[#2563EB] text-white' : 'bg-[#162444] text-[#94A3B8]'}`}>
                        {idx + 1}
                      </span>
                      <span className={idx === 0 ? 'text-white font-medium' : 'text-[#94A3B8]'}>{player}</span>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </section>

      {/* Investment Insights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">💡 Investitions-Insights 2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map(item => (
            <div key={item.title} className="bg-[#162444] border border-[#1e3a6e] rounded-xl p-5">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Sources */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">📚 Datenquellen</h2>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl divide-y divide-[#1e3a6e]">
          {sources.map(source => (
            <div key={source.name} className="px-5 py-4 flex items-center gap-4">
              <div className="flex-1">
                <span className="text-[#3B82F6] font-semibold">{source.name}</span>
                <span className="text-[#94A3B8] text-sm ml-3">{source.desc}</span>
              </div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#3B82F6] text-xs transition-colors"
              >
                → Besuchen
              </a>
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
          href="/enoncards/guide"
          className="inline-block bg-[#162444] hover:bg-[#1a2f5e] border border-[#1e3a6e] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Preis-Guide →
        </Link>
      </div>
    </div>
  );
}
