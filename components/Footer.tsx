export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#F59E0B]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p className="text-[#F59E0B]/60 font-semibold tracking-widest mb-1">★ ENON CARDS ★</p>
        <p>© {new Date().getFullYear()} ENON CARDS. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
