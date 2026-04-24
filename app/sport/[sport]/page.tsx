import CardItem from '@/components/CardItem';
import cards from '@/data/cards.json';
import { notFound } from 'next/navigation';

const sports = ['baseball', 'basketball', 'football', 'hockey'];

const sportConfig: Record<string, { label: string; color: string; bg: string; border: string; icon: string }> = {
  baseball: {
    label: 'Baseball',
    color: 'text-blue-400',
    bg: 'bg-[#0D1F3C]',
    border: 'border-blue-700',
    icon: '⚾',
  },
  basketball: {
    label: 'Basketball',
    color: 'text-blue-300',
    bg: 'bg-[#0D1F3C]',
    border: 'border-blue-500',
    icon: '🏀',
  },
  football: {
    label: 'Football',
    color: 'text-blue-400',
    bg: 'bg-[#0D1F3C]',
    border: 'border-blue-600',
    icon: '🏈',
  },
  hockey: {
    label: 'Hockey',
    color: 'text-blue-200',
    bg: 'bg-[#0D1F3C]',
    border: 'border-blue-800',
    icon: '🏒',
  },
};

export function generateStaticParams() {
  return sports.map(sport => ({ sport }));
}

export default async function SportPage({ params }: { params: Promise<{ sport: string }> }) {
  const { sport } = await params;
  if (!sports.includes(sport)) notFound();

  const config = sportConfig[sport];
  const sportCards = cards.filter(c => c.sport === sport);

  const maxPrice = Math.max(...sportCards.map(c => c.price));
  const avgPrice = sportCards.reduce((sum, c) => sum + c.price, 0) / sportCards.length;
  const topCard = sportCards.find(c => c.price === maxPrice);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className={`${config.bg} border ${config.border} rounded-2xl p-10 mb-8 text-center`}>
        <div className="text-6xl mb-3">{config.icon}</div>
        <h1 className={`text-5xl font-extrabold ${config.color} mb-2`}>{config.label}</h1>
        <p className="text-[#94A3B8]">{sportCards.length} Karten in dieser Kategorie</p>
      </div>

      {/* Stat Bar */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5 text-center">
          <div className="text-2xl font-extrabold text-[#3B82F6] mb-1">{sportCards.length}</div>
          <div className="text-[#94A3B8] text-sm">Karten</div>
        </div>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5 text-center">
          <div className="text-2xl font-extrabold text-[#3B82F6] mb-1">${maxPrice.toFixed(0)}</div>
          <div className="text-[#94A3B8] text-sm">Teuerste Karte</div>
          {topCard && <div className="text-[#94A3B8]/60 text-xs mt-1 truncate">{topCard.name}</div>}
        </div>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5 text-center">
          <div className="text-2xl font-extrabold text-[#3B82F6] mb-1">${avgPrice.toFixed(0)}</div>
          <div className="text-[#94A3B8] text-sm">Ø Preis</div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sportCards.map(card => <CardItem key={card.id} card={card} />)}
      </div>
    </div>
  );
}
