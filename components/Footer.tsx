import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-[#1e3a6e] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-[#3B82F6] font-bold tracking-widest mb-2">★ ENON CARDS</p>
            <p className="text-[#94A3B8] text-sm">Dein Sportkarten-Universum</p>
          </div>
          <div>
            <p className="text-[#E2E8F0] font-semibold mb-2 text-sm">Navigation</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/enoncards/cards" className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">Katalog</Link></li>
              <li><Link href="/enoncards/markt" className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">Markt-Analyse</Link></li>
              <li><Link href="/enoncards/guide" className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">Preis-Guide</Link></li>
              <li><Link href="/enoncards/sammlung" className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">Meine Sammlung</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[#E2E8F0] font-semibold mb-2 text-sm">Sportarten</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/enoncards/sport/baseball" className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">⚾ Baseball</Link></li>
              <li><Link href="/enoncards/sport/basketball" className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">🏀 Basketball</Link></li>
              <li><Link href="/enoncards/sport/football" className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">🏈 Football</Link></li>
              <li><Link href="/enoncards/sport/hockey" className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors">🏒 Hockey</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1e3a6e] pt-4 text-center text-sm text-[#94A3B8]">
          <p>ENON CARDS © 2025 · Preise sind recherchierte Richtwerte (Stand April 2026). Keine Anlageberatung. Quellen: CardLadder, eBay, Grand View Research.</p>
        </div>
      </div>
    </footer>
  );
}
