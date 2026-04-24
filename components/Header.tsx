'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

function getCollectionCount(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const col = JSON.parse(localStorage.getItem('enoncards-collection') || '[]');
    return Array.isArray(col) ? col.length : 0;
  } catch {
    return 0;
  }
}

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCollectionCount());
    const handler = () => setCount(getCollectionCount());
    window.addEventListener('collection-changed', handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('collection-changed', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  return (
    <header className="bg-[#0A1628] border-b border-[#1e3a6e] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/enoncards/" className="text-2xl font-bold text-[#3B82F6] tracking-widest hover:text-blue-300 transition-colors">
          ★ ENON CARDS
        </Link>
        <nav className="flex flex-wrap gap-6 text-sm font-medium">
          <Link href="/enoncards/cards" className="text-[#E2E8F0] hover:text-[#3B82F6] transition-colors">
            Katalog
          </Link>
          <Link href="/enoncards/sammlung" className="text-[#E2E8F0] hover:text-[#3B82F6] transition-colors relative">
            Meine Sammlung
            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {count > 9 ? '9+' : count}
              </span>
            )}
          </Link>
          <Link href="/enoncards/guide" className="text-[#E2E8F0] hover:text-[#3B82F6] transition-colors">
            Preis-Guide
          </Link>
        </nav>
      </div>
    </header>
  );
}
