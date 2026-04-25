import Link from 'next/link';
import CardItem from '@/components/CardItem';
import cards from '@/data/cards.json';

const trendingCards = cards.filter(c => c.trending).slice(0, 4);
const latestCards = [...cards].sort((a, b) => b.year - a.year).slice(0, 6);

const marketIndex = [
  { label: 'Basketball Index', change: '+29%', icon: '🏀', sport: 'basketball' },
  { label: 'Baseball Index', change: '+17%', icon: '⚾', sport: 'baseball' },
  { label: 'Hockey Index', change: '+2.98%', icon: '🏒', sport: 'hockey' },
  { label: 'Football Index', change: '+0.61%', icon: '🏈', sport: 'football' },
];

const marketStats = [
  { label: 'Marktgröße 2025', value: '$13,5 Mrd.', icon: '🌍' },
  { label: 'eBay-Umsatz', value: '$1,78 Mrd.', icon: '🏷️' },
  { label: 'Sammler weltweit', value: '30 Mio+', icon: '👥' },
  { label: 'Wachstum p.a.', value: '9,8%', icon: '📈' },
];

const ebaySellers = [
  { rank: 1, name: 'Michael Jordan', sport: '🏀', volume: '$70,5 Mio.' },
  { rank: 2, name: 'Shohei Ohtani', sport: '⚾', volume: '$57,9 Mio.' },
  { rank: 3, name: 'LeBron James', sport: '🏀', volume: '$30,5 Mio.' },
  { rank: 4, name: 'Kobe Bryant', sport: '🏀', volume: '$30,4 Mio.' },
  { rank: 5, name: 'Victor Wembanyama', sport: '🏀', volume: '$30,0 Mio.' },
  { rank: 6, name: 'Jayden Daniels', sport: '🏈', volume: '$20,0 Mio.' },
  { rank: 7, name: 'Caitlin Clark', sport: '🏀', volume: '$15,0 Mio.' },
  { rank: 8, name: 'Mickey Mantle', sport: '⚾', volume: '$13,0 Mio.' },
];

const whyInvest = [
  {
    icon: '📈',
    title: 'Bewiesene Wertsteigerung',
    text: 'Basketball +29%, Baseball +17% – der CardLadder Market Index 2025 belegt die starke Performance. Der Gesamtmarkt (CL50) legte +28% zu.',
  },
  {
    icon: '💎',
    title: 'PSA 10 = 3–10× Wertmultiplikator',
    text: 'Nur 38% des Sekundärmarkts sind graduiert. Eine PSA-10-Karte erzielt regelmäßig das 3- bis 10-fache einer ungraduierten Karte.',
  },
  {
    icon: '🚀',
    title: 'Prognose $271 Mrd. bis 2034',
    text: 'Grand View Research prognostiziert 9,8% CAGR. Rookie Cards von aktuellen Stars wie Cooper Flagg (+180%) zeigen das enorme Potenzial.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A1628] py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#1D4ED8] rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#2563EB] rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase mb-4">Premium Sports Cards</p>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-4">
            ENON <span className="text-[#3B82F6]">CARDS</span>
          </h1>
          <p className="text-[#E2E8F0] text-xl md:text-2xl font-light mb-8">Dein Sportkarten-Universum</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/cards"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Katalog entdecken →
            </Link>
            <Link
              href="/markt"
              className="bg-[#162444] hover:bg-[#1a2f5e] text-white font-semibold px-8 py-3 rounded-xl border border-[#1e3a6e] transition-colors"
            >
              Markt-Analyse 2025
            </Link>
          </div>
        </div>
      </section>

      {/* Live Market Index Banner */}
      <section className="bg-[#0D1F3C] border-y border-[#1e3a6e] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#10B981] font-bold text-sm">● LIVE</span>
            <span className="text-white font-semibold">CardLadder Market Index 2025</span>
            <span className="text-[#94A3B8] text-xs ml-auto">Quelle: CardLadder.com</span>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {marketIndex.map(item => (
            <Link key={item.sport} href={`/sport/${item.sport}`}>
                <div className="bg-[#162444] border border-[#1e3a6e] hover:border-[#3B82F6]/50 rounded-xl p-4 text-center transition-colors cursor-pointer">
                  <div className="text-2xl mb-1" aria-hidden="true">{item.icon}</div>
                  <div className="text-[#10B981] text-xl font-extrabold">↑ {item.change}</div>
                  <div className="text-[#94A3B8] text-xs mt-1">{item.label}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 text-center">
            <span className="text-[#94A3B8] text-sm">CL50 Gesamtmarkt: </span>
            <span className="text-[#10B981] font-bold">↑ +28%</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl" aria-hidden="true">🔥</span>
          <h2 className="text-3xl font-bold text-white">Top Trending Karten 2025</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCards.map(card => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-[#0D1F3C] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Markt-Snapshot 2025</h2>
          <p className="text-[#94A3B8] text-center text-sm mb-8">Quellen: Grand View Research, eBay Collected Report 2025</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketStats.map(stat => (
              <div key={stat.label} className="bg-[#162444] border border-[#1e3a6e] rounded-xl p-6 text-center">
                <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
                <div className="text-2xl font-extrabold text-[#3B82F6] mb-1">{stat.value}</div>
                <div className="text-[#94A3B8] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top eBay Sellers 2025 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl" aria-hidden="true">🏆</span>
          <h2 className="text-3xl font-bold text-white">Top eBay-Verkäufer 2025</h2>
        </div>
        <p className="text-[#94A3B8] text-sm mb-8">Quelle: eBay Collected Report 2025 – Jahresumsatz nach Spieler</p>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-2xl overflow-hidden">
          {ebaySellers.map((seller, i) => (
            <div
              key={seller.name}
              className={`flex items-center gap-4 px-6 py-4 ${i < ebaySellers.length - 1 ? 'border-b border-[#1e3a6e]' : ''} ${i === 0 ? 'bg-[#1a2f5e]' : ''}`}
            >
              <span className={`text-lg font-extrabold w-8 text-center ${i === 0 ? 'text-[#3B82F6]' : 'text-[#94A3B8]'}`}>
                #{seller.rank}
              </span>
              <span className="text-xl" aria-hidden="true">{seller.sport}</span>
              <span className="text-white font-semibold flex-1">{seller.name}</span>
              <span className="text-[#10B981] font-bold">{seller.volume}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Cards */}
      <section className="bg-[#0D1F3C] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Neueste Karten</h2>
            <Link href="/cards" className="text-[#3B82F6] hover:text-blue-300 font-medium transition-colors text-sm">
              Alle {cards.length} anzeigen →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestCards.map(card => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Warum in Sportkarten investieren?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyInvest.map(item => (
            <div key={item.title} className="bg-[#162444] border border-[#1e3a6e] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
