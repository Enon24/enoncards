'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCollectionCount } from '@/lib/collection';

export default function Header() {
  const count = useCollectionCount();
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/');
  }

  const linkClass = (href: string) =>
    `transition-colors ${isActive(href) ? 'text-[#3B82F6] font-semibold' : 'text-[#E2E8F0] hover:text-[#3B82F6]'}`;

  return (
    <header className="bg-[#0A1628] border-b border-[#1e3a6e] sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm font-semibold z-50 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Zum Hauptinhalt springen
      </a>
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-bold text-[#3B82F6] tracking-widest hover:text-blue-300 transition-colors">
          <span aria-hidden="true">★</span> ENON CARDS
        </Link>
        <nav aria-label="Hauptnavigation" className="flex flex-wrap gap-6 text-sm font-medium">
          <Link href="/cards" className={linkClass('/cards')} aria-current={isActive('/cards') ? 'page' : undefined}>
            Katalog
          </Link>
          <Link href="/sammlung" className={`${linkClass('/sammlung')} relative`} aria-current={isActive('/sammlung') ? 'page' : undefined}>
            Meine Sammlung
            {count > 0 && (
              <span
                className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                aria-label={`${count} Karten in der Sammlung`}
              >
                {count > 9 ? '9+' : count}
              </span>
            )}
          </Link>
          <Link href="/markt" className={linkClass('/markt')} aria-current={isActive('/markt') ? 'page' : undefined}>
            Markt-Analyse
          </Link>
          <Link href="/guide" className={linkClass('/guide')} aria-current={isActive('/guide') ? 'page' : undefined}>
            Preis-Guide
          </Link>
        </nav>
      </div>
    </header>
  );
}
