import Link from 'next/link';
import CardItem from '@/components/CardItem';
import cards from '@/data/cards.json';

const trendingCards = cards.filter(c => c.trending);
const latestCards = [...cards].slice(-6).reverse();

const stats = [
  { label: 'Karten im Katalog', value: '24', icon: '🃏' },
  { label: 'Sportarten', value: '4', icon: '🏆' },
  { label: 'Ø PSA 10 Wert', value: '$680', icon: '💰' },
  { label: 'Rookie Cards', value: '8', icon: '⭐' },
];

const whyCards = [
  {
    icon: '📈',
    title: 'Wertsteigerung',
    text: 'Sportkarten haben sich als stabile Wertanlage etabliert. Rookie Cards von Superstars können über Jahre deutlich an Wert gewinnen.',
  },
  {
    icon: '💎',
    title: 'Seltenheit',
    text: 'Limitierte Auflagen, Serial Numbers und Prizm-Varianten machen bestimmte Karten extrem selten und begehrt.',
  },
  {
    icon: '❤️',
    title: 'Leidenschaft',
    text: 'Mehr als nur eine Investition – Sportkarten verbinden Fans mit ihren Lieblingsspielern und unvergesslichen Momenten.',
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
          <p className="text-[#E2E8F0] text-xl md:text-2xl font-light">Dein Sportkarten-Universum</p>
        </div>
      </section>

      {/* Top 3 Trending */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">📈</span>
          <h2 className="text-3xl font-bold text-white">Top Trending Karten</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {trendingCards.map(card => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* Markt-Snapshot */}
      <section className="bg-[#0D1F3C] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Markt-Snapshot</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(stat => (
              <div key={stat.label} className="bg-[#162444] border border-[#1e3a6e] rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-[#3B82F6] mb-1">{stat.value}</div>
                <div className="text-[#94A3B8] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neueste Karten */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Neueste Karten</h2>
          <Link href="/enoncards/cards" className="text-[#3B82F6] hover:text-blue-300 font-medium transition-colors text-sm">
            Alle anzeigen →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestCards.map(card => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* Warum Sportkarten? */}
      <section className="bg-[#0D1F3C] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Warum Sportkarten?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map(item => (
              <div key={item.title} className="bg-[#162444] border border-[#1e3a6e] rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
