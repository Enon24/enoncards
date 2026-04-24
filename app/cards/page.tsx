'use client';

import { useState, useMemo } from 'react';
import CardItem from '@/components/CardItem';
import allCards from '@/data/cards.json';

type Card = typeof allCards[0];

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [sport, setSport] = useState('all');
  const [sort, setSort] = useState('name');

  const filtered = useMemo(() => {
    let result: Card[] = [...allCards];
    if (sport !== 'all') result = result.filter(c => c.sport === sport);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(c => c.name.toLowerCase().includes(q) || c.team.toLowerCase().includes(q));
    }
    result.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'year') return b.year - a.year;
      return a.name.localeCompare(b.name);
    });
    return result;
  }, [search, sport, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-2">Kartenkatalog</h1>
      <p className="text-gray-400 mb-8">{filtered.length} Karten gefunden</p>

      <div className="flex flex-wrap gap-4 mb-8 bg-[#0D1F3C] p-4 rounded-xl">
        <input
          type="text"
          placeholder="Spieler oder Team suchen..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 min-w-48 bg-[#0A1628] text-white border border-[#1D4ED8]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#3B82F6] placeholder-gray-500"
        />
        <select
          value={sport}
          onChange={e => setSport(e.target.value)}
          className="bg-[#0A1628] text-white border border-[#1D4ED8]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#3B82F6]"
        >
          <option value="all">Alle Sportarten</option>
          <option value="baseball">Baseball</option>
          <option value="basketball">Basketball</option>
          <option value="football">Football</option>
          <option value="hockey">Hockey</option>
        </select>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="bg-[#0A1628] text-white border border-[#1D4ED8]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#3B82F6]"
        >
          <option value="name">Name (A–Z)</option>
          <option value="price-desc">Preis (hoch → niedrig)</option>
          <option value="price-asc">Preis (niedrig → hoch)</option>
          <option value="year">Jahr (neu → alt)</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-xl">Keine Karten gefunden.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(card => <CardItem key={card.id} card={card} />)}
        </div>
      )}
    </div>
  );
}
