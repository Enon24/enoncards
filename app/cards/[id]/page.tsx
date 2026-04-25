import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import cards from '@/data/cards.json';
import { notFound } from 'next/navigation';
import CardItem from '@/components/CardItem';
import PriceTrend from '@/components/PriceTrend';
import { sportColors, rarityColors } from '@/lib/cardConfig';

export function generateStaticParams() {
  return cards.map(card => ({ id: card.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const card = cards.find(c => c.id === id);
  if (!card) return {};
  return {
    title: `${card.name} – ${card.year} ${card.brand}`,
    description: card.description,
    openGraph: {
      title: `${card.name} – ${card.year} ${card.brand} | ENON CARDS`,
      description: card.description,
      images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'ENON CARDS' }],
    },
  };
}

export default async function CardDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const card = cards.find(c => c.id === id);
  if (!card) notFound();

  const sportColor = sportColors[card.sport] || 'bg-blue-600';
  const rarityColor = rarityColors[card.rarity] || rarityColors.common;

  const similarCards = cards
    .filter(c => c.sport === card.sport && c.id !== card.id)
    .slice(0, 3);

  const isHighValue = card.rarity === 'rare' || card.rarity === 'legendary';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: card.name,
    description: card.description,
    brand: { '@type': 'Brand', name: card.brand },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: card.price,
      itemCondition: 'https://schema.org/UsedCondition',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/cards" className="inline-flex items-center text-[#3B82F6] hover:text-blue-300 mb-8 transition-colors font-medium text-sm">
        ← Zurück zum Katalog
      </Link>

      <div className="grid md:grid-cols-2 gap-12 bg-[#0D1F3C] rounded-2xl p-8 border border-[#1e3a6e] mb-8">
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/images/placeholder.svg"
              alt={card.name}
              width={288}
              height={288}
              className="w-72 rounded-xl border-2 border-[#2563EB]/40 shadow-2xl shadow-[#3B82F6]/10"
            />
            <span className={`absolute top-3 left-3 ${sportColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase`}>
              {card.sport}
            </span>
            {card.trending && (
              <span className="absolute top-3 right-3 bg-[#2563EB] text-white text-xs font-bold px-2 py-1 rounded-full">
                <span aria-hidden="true">📈</span> Trending
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${rarityColor}`}>
              {card.rarity}
            </span>
            <span className="text-[#94A3B8] text-sm bg-[#0A1628] px-3 py-1 rounded-full border border-[#1e3a6e]">{card.condition}</span>
          </div>

          <h1 className="text-4xl font-extrabold text-white mb-2">{card.name}</h1>
          <p className="text-[#3B82F6] text-xl font-semibold mb-1">{card.team}</p>
          <p className="text-[#94A3B8] mb-4">{card.year} · {card.brand} · {card.series}</p>

          <p className="text-[#E2E8F0] mb-6 leading-relaxed text-sm">{card.description}</p>

          {/* Price + Trend */}
          <div className="bg-[#0A1628] rounded-xl p-4 border border-[#1e3a6e] mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#94A3B8] font-medium text-sm">Marktwert (Richtwert)</span>
              <span className="text-[#3B82F6] text-3xl font-extrabold">${card.price.toLocaleString('de-DE')}</span>
            </div>
            {card.priceChange !== undefined && (
              <div className="flex items-center gap-2">
                <span className="text-[#94A3B8] text-xs">YTD Performance:</span>
                <PriceTrend priceChange={card.priceChange} />
              </div>
            )}
          </div>

          {/* eBay Button */}
          {card.ebaySearchUrl && (
            <a
              href={card.ebaySearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${card.name} Live-Preis auf eBay prüfen (öffnet in neuem Tab)`}
              className="inline-flex items-center justify-center gap-2 bg-[#162444] hover:bg-[#1a2f5e] border border-[#2563EB]/40 hover:border-[#2563EB] text-white font-semibold px-6 py-3 rounded-xl transition-all mb-4 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0A1628]"
            >
              <span aria-hidden="true">🏷️</span> Live-Preis auf eBay prüfen →
            </a>
          )}

          {isHighValue && (
            <div className="bg-[#1a2f5e] border border-[#2563EB]/40 rounded-xl p-4">
              <p className="text-[#3B82F6] font-semibold text-sm">
                <span aria-hidden="true">💎</span> {card.rarity === 'legendary' ? 'Legendäre Karte' : 'Seltene Karte'} – Hohes Wertsteigerungspotenzial
              </p>
              <p className="text-[#94A3B8] text-xs mt-1">
                Diese Karte hat aufgrund ihrer Seltenheit und des Spielers ein überdurchschnittliches Investitionspotenzial.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Marke', value: card.brand },
          { label: 'Serie', value: card.series },
          { label: 'Zustand', value: card.condition },
          { label: 'Jahr', value: String(card.year) },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[#0D1F3C] rounded-lg p-3 border border-[#1e3a6e] text-center">
            <p className="text-[#94A3B8] text-xs uppercase tracking-wide mb-1">{label}</p>
            <p className="text-white font-semibold text-sm">{value}</p>
          </div>
        ))}
      </div>

      {/* Grading Info */}
      <div className="bg-[#0D1F3C] rounded-2xl p-6 border border-[#1e3a6e] mb-8">
        <h2 className="text-xl font-bold text-white mb-4"><span aria-hidden="true">📋</span> Was bedeutet {card.condition}?</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#94A3B8]">
          <div>
            <p className="text-[#E2E8F0] font-semibold mb-1">PSA Grading System</p>
            <p>PSA (Professional Sports Authenticator) bewertet Karten auf einer Skala von 1–10. PSA 10 (Gem Mint) ist die höchste Note und beschreibt eine perfekte Karte ohne Mängel.</p>
          </div>
          <div>
            <p className="text-[#E2E8F0] font-semibold mb-1">Warum ist Grading wichtig?</p>
            <p>Eine PSA 10 Karte kann im Vergleich zu einer ungraduierten Karte den 3–10-fachen Wert haben. Das Grading schützt die Karte und bestätigt ihre Authentizität.</p>
          </div>
        </div>
      </div>

      {/* Similar Cards */}
      {similarCards.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Ähnliche Karten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {similarCards.map(c => (
              <CardItem key={c.id} card={c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
