'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PriceTrend from './PriceTrend';

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
  priceChange?: number;
  description: string;
  rarity: string;
  trending?: boolean;
  ebaySearchUrl?: string;
}

const sportColors: Record<string, string> = {
  baseball: 'bg-blue-700',
  basketball: 'bg-blue-500',
  football: 'bg-blue-600',
  hockey: 'bg-blue-800',
};

const rarityColors: Record<string, string> = {
  common: 'bg-[#1e3a6e] text-[#94A3B8]',
  rare: 'bg-[#1D4ED8] text-blue-100',
  legendary: 'bg-[#2563EB] text-white',
};

function getCollection(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem('enoncards-collection') || '[]');
  } catch {
    return [];
  }
}

function setCollection(ids: string[]) {
  localStorage.setItem('enoncards-collection', JSON.stringify(ids));
  window.dispatchEvent(new Event('collection-changed'));
}

export default function CardItem({ card }: { card: Card }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(getCollection().includes(card.id));
    const handler = () => setSaved(getCollection().includes(card.id));
    window.addEventListener('collection-changed', handler);
    return () => window.removeEventListener('collection-changed', handler);
  }, [card.id]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const col = getCollection();
    if (col.includes(card.id)) {
      setCollection(col.filter(id => id !== card.id));
    } else {
      setCollection([...col, card.id]);
    }
  };

  const sportColor = sportColors[card.sport] || 'bg-blue-600';
  const rarityColor = rarityColors[card.rarity] || rarityColors.common;

  return (
    <Link href={`/enoncards/cards/${card.id}`}>
      <div className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl overflow-hidden hover:border-[#3B82F6]/60 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all duration-300 cursor-pointer group flex flex-col h-full">
        <div className="relative">
          <img
            src="/enoncards/images/placeholder.svg"
            alt={card.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`absolute top-2 left-2 ${sportColor} text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide`}>
            {card.sport}
          </span>
          {card.trending && (
            <span className="absolute top-2 right-2 bg-[#2563EB] text-white text-xs font-bold px-2 py-1 rounded-full">
              📈 Trending
            </span>
          )}
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-white font-bold text-lg truncate">{card.name}</h3>
          <p className="text-[#94A3B8] text-sm mb-1">{card.team}</p>
          <p className="text-[#94A3B8]/60 text-xs mb-3">{card.year} · {card.brand} · {card.condition}</p>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${rarityColor}`}>
              {card.rarity}
            </span>
            <span className="text-[#3B82F6] font-bold text-lg">${card.price.toLocaleString('de-DE')}</span>
          </div>
          {card.priceChange !== undefined && (
            <div className="mb-3">
              <PriceTrend priceChange={card.priceChange} />
            </div>
          )}
          <div className="mt-auto flex flex-col gap-2">
            {card.ebaySearchUrl && (
              <a
                href={card.ebaySearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="w-full text-center text-xs font-semibold py-1.5 rounded-lg bg-[#0A1628] border border-[#1e3a6e] text-[#94A3B8] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
              >
                🏷️ eBay Live-Preis
              </a>
            )}
            <button
              onClick={toggleSave}
              aria-pressed={saved}
              aria-label={saved ? 'Aus Sammlung entfernen' : 'Zur Sammlung hinzufügen'}
              className={`w-full text-sm font-semibold py-2 rounded-lg transition-all duration-200 ${
                saved
                  ? 'bg-[#1e3a6e] text-[#3B82F6] border border-[#2563EB]'
                  : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
              }`}
            >
              {saved ? '✓ In Sammlung' : '+ Zur Sammlung'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
