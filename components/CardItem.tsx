import Link from 'next/link';

interface Card {
  id: string;
  name: string;
  sport: string;
  team: string;
  year: number;
  brand: string;
  series: string;
  condition: string;
  price: number;
  description: string;
  rarity: string;
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

export default function CardItem({ card }: { card: Card }) {
  const sportColor = sportColors[card.sport] || 'bg-gray-600';
  const rarityColor = rarityColors[card.rarity] || 'bg-gray-600 text-gray-200';

  return (
    <Link href={`/enoncards/cards/${card.id}`}>
      <div className="bg-[#0D1F3C] border border-[#1D4ED8]/20 rounded-xl overflow-hidden hover:border-[#3B82F6]/60 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all duration-300 cursor-pointer group">
        <div className="relative">
          <img
            src="/enoncards/images/placeholder.svg"
            alt={card.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`absolute top-2 left-2 ${sportColor} text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide`}>
            {card.sport}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-white font-bold text-lg truncate">{card.name}</h3>
          <p className="text-gray-400 text-sm mb-1">{card.team}</p>
          <p className="text-gray-500 text-xs mb-3">{card.year} · {card.brand} · {card.series}</p>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${rarityColor}`}>
              {card.rarity}
            </span>
            <span className="text-[#3B82F6] font-bold text-lg">${card.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
