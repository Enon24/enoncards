import type { Metadata } from 'next';
import CardItem from '@/components/CardItem';
import cards from '@/data/cards.json';
import { notFound } from 'next/navigation';

const sports = ['baseball', 'basketball', 'football', 'hockey'];

const sportConfig: Record<string, { label: string; color: string; bg: string; border: string; icon: string; marketIndex: string; indexNote: string }> = {
  baseball: {
    label: 'Baseball',
    color: 'text-blue-400',
    bg: 'bg-[#0D1F3C]',
    border: 'border-blue-700',
    icon: '⚾',
    marketIndex: '+17%',
    indexNote: 'CardLadder Baseball Index 2025',
  },
  basketball: {
    label: 'Basketball',
    color: 'text-blue-300',
    bg: 'bg-[#0D1F3C]',
    border: 'border-blue-500',
    icon: '🏀',
    marketIndex: '+29%',
    indexNote: 'CardLadder Basketball Index 2025 – stärkste Sportart',
  },
  football: {
    label: 'Football',
    color: 'text-blue-400',
    bg: 'bg-[#0D1F3C]',
    border: 'border-blue-600',
    icon: '🏈',
    marketIndex: '+0.61%',
    indexNote: 'CardLadder Football Index 2025 – Rookie-getrieben',
  },
  hockey: {
    label: 'Hockey',
    color: 'text-blue-200',
    bg: 'bg-[#0D1F3C]',
    border: 'border-blue-800',
    icon: '🏒',
    marketIndex: '+2.98%',
    indexNote: 'CardLadder Hockey Index 2025',
  },
};

export function generateStaticParams() {
  return sports.map(sport => ({ sport }));
}

export async function generateMetadata({ params }: { params: Promise<{ sport: string }> }): Promise<Metadata> {
  const { sport } = await params;
  const config = sportConfig[sport];
  if (!config) return {};
  return {
    title: `${config.icon} ${config.label} Karten`,
    description: `Alle ${config.label} Sammelkarten im Überblick. Market Index 2025: ${config.marketIndex}. ${config.indexNote}.`,
    openGraph: {
      title: `${config.icon} ${config.label} Karten | ENON CARDS`,
      description: `Alle ${config.label} Sammelkarten im Überblick. Market Index 2025: ${config.marketIndex}.`,
      images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'ENON CARDS' }],
    },
  };
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
        <div className="text-6xl mb-3" aria-hidden="true">{config.icon}</div>
        <h1 className={`text-5xl font-extrabold ${config.color} mb-2`}>{config.label}</h1>
        <p className="text-[#94A3B8]">{sportCards.length} Karten in dieser Kategorie</p>
      </div>

      {/* Market Index Banner */}
      <div className="bg-[#162444] border border-[#1e3a6e] rounded-xl p-4 mb-8 flex items-center justify-between flex-wrap gap-2">
        <div>
          <span className="text-[#94A3B8] text-sm">Market Index 2025: </span>
          <span className="text-[#10B981] font-extrabold text-xl">↑ {config.marketIndex}</span>
        </div>
        <span className="text-[#94A3B8] text-xs">{config.indexNote}</span>
      </div>

      {/* Stat Bar */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5 text-center">
          <div className="text-2xl font-extrabold text-[#3B82F6] mb-1">{sportCards.length}</div>
          <div className="text-[#94A3B8] text-sm">Karten</div>
        </div>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-5 text-center">
          <div className="text-2xl font-extrabold text-[#3B82F6] mb-1">${maxPrice.toLocaleString('de-DE')}</div>
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
