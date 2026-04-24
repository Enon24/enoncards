import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#0F172A] border-b border-[#F59E0B]/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/enoncards/" className="text-2xl font-bold text-[#F59E0B] tracking-widest hover:text-yellow-300 transition-colors">
          ★ ENON CARDS
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/enoncards/" className="text-gray-300 hover:text-[#F59E0B] transition-colors">Home</Link>
          <Link href="/enoncards/cards" className="text-gray-300 hover:text-[#F59E0B] transition-colors">Katalog</Link>
          <Link href="/enoncards/sport/baseball" className="text-red-400 hover:text-red-300 transition-colors">Baseball</Link>
          <Link href="/enoncards/sport/basketball" className="text-orange-400 hover:text-orange-300 transition-colors">Basketball</Link>
          <Link href="/enoncards/sport/football" className="text-green-400 hover:text-green-300 transition-colors">Football</Link>
          <Link href="/enoncards/sport/hockey" className="text-blue-400 hover:text-blue-300 transition-colors">Hockey</Link>
        </nav>
      </div>
    </header>
  );
}
