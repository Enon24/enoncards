export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-[#1D4ED8]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p className="text-[#3B82F6]/60 font-semibold tracking-widest mb-1">★ ENON CARDS ★</p>
        <p>© {new Date().getFullYear()} ENON CARDS. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
