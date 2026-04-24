import Link from 'next/link';
import CardItem from '@/components/CardItem';
import cards from '@/data/cards.json';

const sports = [
  { name: 'Baseball', slug: 'baseball', color: '#DC2626', bg: 'bg-red-700', icon: '⚾' },
  { name: 'Basketball', slug: 'basketball', color: '#EA580C', bg: 'bg-orange-600', icon: '🏀' },
  { name: 'Football', slug: 'football', color: '#16A34A', bg: 'bg-green-700', icon: '🏈' },
  { name: 'Hockey', slug: 'hockey', color: '#2563EB', bg: 'bg-blue-700', icon: '🏒' },
];

export default function HomePage() {
  const latestCards = [...cards].slice(-8).reverse();

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A1628] py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#1D4ED8] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#1D4ED8] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#3B82F6] text-sm font-semibold tracking-widest uppercase mb-4">Premium Sports Cards</p>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-6">
            ENON <span className="text-[#3B82F6]">CARDS</span>
          </h1>
        </div>
      </section>

      {/* Sport Tiles */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Sportarten</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sports.map((sport) => (
            <Link key={sport.slug} href={`/enoncards/sport/${sport.slug}`}>
              <div className={`${sport.bg} rounded-2xl p-8 text-center hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer`}>
                <div className="text-5xl mb-3">{sport.icon}</div>
                <h3 className="text-white font-bold text-xl">{sport.name}</h3>
                <p className="text-white/70 text-sm mt-1">
                  {cards.filter(c => c.sport === sport.slug).length} Karten
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Neueste Karten</h2>
          <Link href="/enoncards/cards" className="text-[#3B82F6] hover:text-blue-300 font-medium transition-colors">
            Alle anzeigen →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestCards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}
