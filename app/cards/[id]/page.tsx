import Link from 'next/link';
import cards from '@/data/cards.json';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return cards.map(card => ({ id: card.id }));
}

const sportColors: Record<string, string> = {
  baseball: 'bg-red-600',
  basketball: 'bg-orange-600',
  football: 'bg-green-700',
  hockey: 'bg-blue-600',
};

const rarityColors: Record<string, string> = {
  common: 'bg-gray-600 text-gray-200',
  uncommon: 'bg-green-700 text-green-100',
  rare: 'bg-blue-700 text-blue-100',
  legendary: 'bg-blue-600 text-blue-100',
};

export default async function CardDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const card = cards.find(c => c.id === id);
  if (!card) notFound();

  const sportColor = sportColors[card.sport] || 'bg-gray-600';
  const rarityColor = rarityColors[card.rarity] || 'bg-gray-600 text-gray-200';

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/enoncards/cards" className="inline-flex items-center text-[#3B82F6] hover:text-blue-300 mb-8 transition-colors font-medium">
        ← Zurück zum Katalog
      </Link>

      <div className="grid md:grid-cols-2 gap-12 bg-[#0D1F3C] rounded-2xl p-8 border border-[#1D4ED8]/20">
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/enoncards/images/placeholder.svg"
              alt={card.name}
              className="w-72 rounded-xl border-2 border-[#3B82F6]/40 shadow-2xl shadow-[#3B82F6]/10"
            />
            <span className={`absolute top-3 left-3 ${sportColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}>
              {card.sport}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${rarityColor}`}>
              {card.rarity}
            </span>
            <span className="text-gray-500 text-sm">{card.condition}</span>
          </div>

          <h1 className="text-4xl font-extrabold text-white mb-2">{card.name}</h1>
          <p className="text-[#3B82F6] text-xl font-semibold mb-1">{card.team}</p>
          <p className="text-gray-400 mb-6">{card.year}</p>

          <p className="text-gray-300 mb-8 leading-relaxed">{card.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Marke', value: card.brand },
              { label: 'Serie', value: card.series },
              { label: 'Zustand', value: card.condition },
              { label: 'Jahr', value: String(card.year) },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#0A1628] rounded-lg p-3">
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{label}</p>
                <p className="text-white font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between bg-[#0A1628] rounded-xl p-4 border border-[#1D4ED8]/30">
            <span className="text-gray-400 font-medium">Preis</span>
            <span className="text-[#3B82F6] text-3xl font-extrabold">${card.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
