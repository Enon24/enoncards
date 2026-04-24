import CardItem from '@/components/CardItem';
import cards from '@/data/cards.json';
import { notFound } from 'next/navigation';

const sports = ['baseball', 'basketball', 'football', 'hockey'];

const sportConfig: Record<string, { label: string; color: string; bg: string; icon: string }> = {
  baseball: { label: 'Baseball', color: 'text-red-400', bg: 'bg-red-900/20', icon: '⚾' },
  basketball: { label: 'Basketball', color: 'text-orange-400', bg: 'bg-orange-900/20', icon: '🏀' },
  football: { label: 'Football', color: 'text-green-400', bg: 'bg-green-900/20', icon: '🏈' },
  hockey: { label: 'Hockey', color: 'text-blue-400', bg: 'bg-blue-900/20', icon: '🏒' },
};

export function generateStaticParams() {
  return sports.map(sport => ({ sport }));
}

export default async function SportPage({ params }: { params: Promise<{ sport: string }> }) {
  const { sport } = await params;
  if (!sports.includes(sport)) notFound();

  const config = sportConfig[sport];
  const sportCards = cards.filter(c => c.sport === sport);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className={`${config.bg} rounded-2xl p-10 mb-10 text-center border border-white/10`}>
        <div className="text-6xl mb-3">{config.icon}</div>
        <h1 className={`text-5xl font-extrabold ${config.color} mb-2`}>{config.label}</h1>
        <p className="text-gray-400">{sportCards.length} Karten in dieser Kategorie</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sportCards.map(card => <CardItem key={card.id} card={card} />)}
      </div>
    </div>
  );
}
