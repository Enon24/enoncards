'use client';

import { useState, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CardItem from '@/components/CardItem';
import allCards from '@/data/cards.json';
import type { Card } from '@/types/card';

const DEFAULT_SPORT = 'all';
const DEFAULT_RARITY = 'all';
const DEFAULT_CONDITION = 'all';
const DEFAULT_SORT = 'name';

function CatalogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [sport, setSport] = useState(searchParams.get('sport') || DEFAULT_SPORT);
  const [rarity, setRarity] = useState(searchParams.get('rarity') || DEFAULT_RARITY);
  const [condition, setCondition] = useState(searchParams.get('condition') || DEFAULT_CONDITION);
  const [sort, setSort] = useState(searchParams.get('sort') || DEFAULT_SORT);
  const [trending, setTrending] = useState(searchParams.get('trending') === 'true');

  function updateUrl(updates: Record<string, string>) {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => {
      const defaults: Record<string, string> = { sport: DEFAULT_SPORT, rarity: DEFAULT_RARITY, condition: DEFAULT_CONDITION, sort: DEFAULT_SORT, trending: 'false', q: '' };
      if (v && v !== defaults[k]) {
        params.set(k, v);
      } else {
        params.delete(k);
      }
    });
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  function handleSearch(v: string) { setSearch(v); updateUrl({ q: v }); }
  function handleSport(v: string) { setSport(v); updateUrl({ sport: v }); }
  function handleRarity(v: string) { setRarity(v); updateUrl({ rarity: v }); }
  function handleCondition(v: string) { setCondition(v); updateUrl({ condition: v }); }
  function handleSort(v: string) { setSort(v); updateUrl({ sort: v }); }
  function handleTrending(v: boolean) { setTrending(v); updateUrl({ trending: String(v) }); }

  function resetFilters() {
    setSearch('');
    setSport(DEFAULT_SPORT);
    setRarity(DEFAULT_RARITY);
    setCondition(DEFAULT_CONDITION);
    setSort(DEFAULT_SORT);
    setTrending(false);
    router.replace('?', { scroll: false });
  }

  const filtered = useMemo(() => {
    let result: Card[] = [...allCards];
    if (sport !== 'all') result = result.filter(c => c.sport === sport);
    if (rarity !== 'all') result = result.filter(c => c.rarity === rarity);
    if (condition !== 'all') result = result.filter(c => c.condition === condition);
    if (trending) result = result.filter(c => c.trending);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.team.toLowerCase().includes(q) ||
        c.brand.toLowerCase().includes(q)
      );
    }
    result.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'year-desc') return b.year - a.year;
      if (sort === 'year-asc') return a.year - b.year;
      return a.name.localeCompare(b.name);
    });
    return result;
  }, [search, sport, rarity, condition, sort, trending]);

  const conditions = [...new Set(allCards.map(c => c.condition))].sort();

  const focusClasses = 'focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0A1628]';

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-2">Kartenkatalog</h1>
      <p className="text-[#94A3B8] mb-8">{filtered.length} Karten gefunden</p>

      <div className="flex flex-wrap gap-3 mb-8 bg-[#0D1F3C] p-4 rounded-xl border border-[#1e3a6e]">
        <input
          type="text"
          placeholder="Spieler, Team oder Brand suchen..."
          value={search}
          onChange={e => handleSearch(e.target.value)}
          className={`flex-1 min-w-48 bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:border-[#3B82F6] placeholder-[#94A3B8]/50 text-sm ${focusClasses}`}
        />
        <select
          value={sport}
          onChange={e => handleSport(e.target.value)}
          className={`bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:border-[#3B82F6] text-sm ${focusClasses}`}
        >
          <option value="all">Alle Sportarten</option>
          <option value="baseball">⚾ Baseball</option>
          <option value="basketball">🏀 Basketball</option>
          <option value="football">🏈 Football</option>
          <option value="hockey">🏒 Hockey</option>
        </select>
        <select
          value={rarity}
          onChange={e => handleRarity(e.target.value)}
          className={`bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:border-[#3B82F6] text-sm ${focusClasses}`}
        >
          <option value="all">Alle Raritäten</option>
          <option value="common">Common</option>
          <option value="rare">Rare</option>
          <option value="legendary">Legendary</option>
        </select>
        <select
          value={condition}
          onChange={e => handleCondition(e.target.value)}
          className={`bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:border-[#3B82F6] text-sm ${focusClasses}`}
        >
          <option value="all">Alle Zustände</option>
          {conditions.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={e => handleSort(e.target.value)}
          className={`bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:border-[#3B82F6] text-sm ${focusClasses}`}
        >
          <option value="name">Name A–Z</option>
          <option value="price-desc">Preis ↓</option>
          <option value="price-asc">Preis ↑</option>
          <option value="year-desc">Jahr (neu → alt)</option>
          <option value="year-asc">Jahr (alt → neu)</option>
        </select>
        <button
          onClick={() => handleTrending(!trending)}
          aria-pressed={trending}
          className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${focusClasses} ${
            trending
              ? 'bg-[#2563EB] text-white border-[#2563EB]'
              : 'bg-[#0A1628] text-[#94A3B8] border-[#1e3a6e] hover:border-[#3B82F6]'
          }`}
        >
          <span aria-hidden="true">📈</span> Trending
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#94A3B8]">
          <p className="text-5xl mb-4" aria-hidden="true">🔍</p>
          <p className="text-xl">Keine Karten gefunden.</p>
          <button
            onClick={resetFilters}
            className={`mt-4 text-[#3B82F6] hover:text-blue-300 underline text-sm ${focusClasses}`}
            aria-label="Alle Filter zurücksetzen"
          >
            Filter zurücksetzen
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(card => <CardItem key={card.id} card={card} />)}
        </div>
      )}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-[#94A3B8]">Laden…</div>}>
      <CatalogContent />
    </Suspense>
  );
}
