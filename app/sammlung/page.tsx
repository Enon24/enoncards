'use client';

import Link from 'next/link';
import allCards from '@/data/cards.json';
import { useCollection, removeFromCollection } from '@/lib/collection';

const sportLabels: Record<string, string> = {
  baseball: '⚾ Baseball',
  basketball: '🏀 Basketball',
  football: '🏈 Football',
  hockey: '🏒 Hockey',
};

export default function SammlungPage() {
  const collectionIds = useCollection();

  const collectionCards = collectionIds
    .map(id => allCards.find(c => c.id === id))
    .filter((c): c is typeof allCards[0] => c !== undefined);

  const totalValue = collectionCards.reduce((sum, c) => sum + c.price, 0);

  const bySport = collectionCards.reduce<Record<string, number>>((acc, c) => {
    acc[c.sport] = (acc[c.sport] || 0) + 1;
    return acc;
  }, {});

  if (collectionCards.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Meine Sammlung</h1>
        <p className="text-[#94A3B8] mb-12">Deine persönliche Kartensammlung</p>
        <div className="text-center py-24 bg-[#0D1F3C] rounded-2xl border border-[#1e3a6e]">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-white mb-3">Deine Sammlung ist leer</h2>
          <p className="text-[#94A3B8] mb-6">Füge Karten aus dem Katalog hinzu, um deine Sammlung aufzubauen.</p>
          <Link
            href="/cards"
            className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Zum Katalog →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-2">Meine Sammlung</h1>
      <p className="text-[#94A3B8] mb-8">{collectionCards.length} Karten</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-6 text-center">
          <div className="text-3xl font-extrabold text-[#3B82F6] mb-1">{collectionCards.length}</div>
          <div className="text-[#94A3B8] text-sm">Karten gesamt</div>
        </div>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-6 text-center">
          <div className="text-3xl font-extrabold text-[#3B82F6] mb-1">${totalValue.toFixed(0)}</div>
          <div className="text-[#94A3B8] text-sm">Gesamtwert (Richtwert)</div>
        </div>
        <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-6 text-center">
          <div className="text-3xl font-extrabold text-[#3B82F6] mb-1">${(totalValue / collectionCards.length).toFixed(0)}</div>
          <div className="text-[#94A3B8] text-sm">Ø Wert pro Karte</div>
        </div>
      </div>

      {/* Sport Breakdown */}
      <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">Aufschlüsselung nach Sportart</h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(bySport).map(([sport, count]) => (
            <div key={sport} className="bg-[#162444] border border-[#1e3a6e] rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="text-white font-medium">{sportLabels[sport] || sport}</span>
              <span className="bg-[#2563EB] text-white text-xs font-bold px-2 py-0.5 rounded-full">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {collectionCards.map(card => (
          <div key={card.id} className="relative">
            <Link href={`/cards/${card.id}`}>
              <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl overflow-hidden hover:border-[#3B82F6]/60 transition-all duration-300 cursor-pointer group">
                <div className="relative">
                  <img
                    src="/enoncards/images/placeholder.svg"
                    alt={card.name}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                    {card.sport}
                  </span>
                  {card.trending && (
                    <span className="absolute top-2 right-2 bg-[#2563EB] text-white text-xs font-bold px-2 py-1 rounded-full">
                      📈
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold truncate">{card.name}</h3>
                  <p className="text-[#94A3B8] text-sm">{card.team}</p>
                  <p className="text-[#94A3B8]/60 text-xs mt-1">{card.year} · {card.condition}</p>
                  <p className="text-[#3B82F6] font-bold text-lg mt-2">${card.price.toFixed(0)}</p>
                </div>
              </div>
            </Link>
            <button
              onClick={() => removeFromCollection(card.id)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-full transition-colors z-10"
              aria-label={`${card.name} aus Sammlung entfernen`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
