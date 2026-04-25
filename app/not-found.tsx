import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-8xl mb-6">🃏</div>
      <h1 className="text-5xl font-extrabold text-white mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#3B82F6] mb-4">Seite nicht gefunden</h2>
      <p className="text-[#94A3B8] mb-8 leading-relaxed">
        Diese Karte ist nicht in unserem Katalog. Vielleicht wurde die URL falsch eingegeben oder die Seite wurde verschoben.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Zur Startseite
        </Link>
        <Link
          href="/cards"
          className="bg-[#162444] hover:bg-[#1a2f5e] text-white font-semibold px-8 py-3 rounded-xl border border-[#1e3a6e] transition-colors"
        >
          Kartenkatalog
        </Link>
      </div>
    </div>
  );
}
