import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#0A1628] border-b border-[#1D4ED8]/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/enoncards/" className="text-2xl font-bold text-[#3B82F6] tracking-widest hover:text-blue-300 transition-colors">
          ★ ENON CARDS
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/enoncards/sport/baseball" className="text-gray-300 hover:text-[#3B82F6] transition-colors">Baseball</Link>
          <Link href="/enoncards/sport/basketball" className="text-gray-300 hover:text-[#3B82F6] transition-colors">Basketball</Link>
          <Link href="/enoncards/sport/football" className="text-gray-300 hover:text-[#3B82F6] transition-colors">Football</Link>
          <Link href="/enoncards/sport/hockey" className="text-gray-300 hover:text-[#3B82F6] transition-colors">Hockey</Link>
        </nav>
      </div>
    </header>
  );
}
