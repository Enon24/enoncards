'use client';

import { useState, useMemo } from 'react';
import CardItem from '@/components/CardItem';
import allCards from '@/data/cards.json';

type Card = typeof allCards[0];

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [sport, setSport] = useState('all');
  const [rarity, setRarity] = useState('all');
  const [condition, setCondition] = useState('all');
  const [sort, setSort] = useState('name');

  const filtered = useMemo(() => {
    let result: Card[] = [...allCards];
    if (sport !== 'all') result = result.filter(c => c.sport === sport);
    if (rarity !== 'all') result = result.filter(c => c.rarity === rarity);
    if (condition !== 'all') result = result.filter(c => c.condition === condition);
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
  }, [search, sport, rarity, condition, sort]);

  const conditions = [...new Set(allCards.map(c => c.condition))].sort();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-2">Kartenkatalog</h1>
      <p className="text-[#94A3B8] mb-8">{filtered.length} Karten gefunden</p>

      <div className="flex flex-wrap gap-3 mb-8 bg-[#0D1F3C] p-4 rounded-xl border border-[#1e3a6e]">
        <input
          type="text"
          placeholder="Spieler, Team oder Brand suchen..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 min-w-48 bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#3B82F6] placeholder-[#94A3B8]/50 text-sm"
        />
        <select
          value={sport}
          onChange={e => setSport(e.target.value)}
          className="bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#3B82F6] text-sm"
        >
          <option value="all">Alle Sportarten</option>
          <option value="baseball">⚾ Baseball</option>
          <option value="basketball">🏀 Basketball</option>
          <option value="football">🏈 Football</option>
          <option value="hockey">🏒 Hockey</option>
        </select>
        <select
          value={rarity}
          onChange={e => setRarity(e.target.value)}
          className="bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#3B82F6] text-sm"
        >
          <option value="all">Alle Raritäten</option>
          <option value="common">Common</option>
          <option value="rare">Rare</option>
          <option value="legendary">Legendary</option>
        </select>
        <select
          value={condition}
          onChange={e => setCondition(e.target.value)}
          className="bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#3B82F6] text-sm"
        >
          <option value="all">Alle Zustände</option>
          {conditions.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="bg-[#0A1628] text-white border border-[#1e3a6e] rounded-lg px-4 py-2 focus:outline-none focus:border-[#3B82F6] text-sm"
        >
          <option value="name">Name A–Z</option>
          <option value="price-desc">Preis ↓</option>
          <option value="price-asc">Preis ↑</option>
          <option value="year-desc">Jahr (neu → alt)</option>
          <option value="year-asc">Jahr (alt → neu)</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#94A3B8]">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-xl">Keine Karten gefunden.</p>
          <button
            onClick={() => { setSearch(''); setSport('all'); setRarity('all'); setCondition('all'); }}
            className="mt-4 text-[#3B82F6] hover:text-blue-300 underline text-sm"
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
