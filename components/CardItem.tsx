'use client';

import Image from 'next/image';
import Link from 'next/link';
import PriceTrend from './PriceTrend';
import { useCollection, toggleInCollection } from '@/lib/collection';
import { sportColors, rarityColors } from '@/lib/cardConfig';
import type { Card } from '@/types/card';

export default function CardItem({ card }: { card: Card }) {
  const collection = useCollection();
  const saved = collection.includes(card.id);

  const sportColor = sportColors[card.sport] || 'bg-blue-600';
  const rarityColor = rarityColors[card.rarity] || rarityColors.common;

  return (
    <article className="bg-[#0D1F3C] border border-[#1e3a6e] rounded-xl overflow-hidden hover:border-[#3B82F6]/60 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all duration-300 group flex flex-col h-full">
      <Link href={`/cards/${card.id}`} className="flex flex-col flex-1">
        <div className="relative">
          <Image
            src="/images/placeholder.svg"
            alt={card.name}
            width={400}
            height={192}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`absolute top-2 left-2 ${sportColor} text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide`}>
            {card.sport}
          </span>
          {card.trending && (
            <span className="absolute top-2 right-2 bg-[#2563EB] text-white text-xs font-bold px-2 py-1 rounded-full">
              <span aria-hidden="true">📈</span> Trending
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
        </div>
      </Link>
      <div className="px-4 pb-4 flex flex-col gap-2">
        {card.ebaySearchUrl && (
          <a
            href={card.ebaySearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${card.name} Live-Preis auf eBay prüfen (öffnet in neuem Tab)`}
            className="w-full text-center text-xs font-semibold py-1.5 rounded-lg bg-[#0A1628] border border-[#1e3a6e] text-[#94A3B8] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
          >
            <span aria-hidden="true">🏷️</span> eBay Live-Preis
          </a>
        )}
        <button
          onClick={() => toggleInCollection(card.id)}
          aria-pressed={saved}
          aria-label={saved ? 'Aus Sammlung entfernen' : 'Zur Sammlung hinzufügen'}
          className={`w-full text-sm font-semibold py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0A1628] ${
            saved
              ? 'bg-[#1e3a6e] text-[#3B82F6] border border-[#2563EB]'
              : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
          }`}
        >
          {saved ? '✓ In Sammlung' : '+ Zur Sammlung'}
        </button>
      </div>
    </article>
  );
}
