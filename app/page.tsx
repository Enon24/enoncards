import Link from "next/link";
import CardItem from "@/components/CardItem";
import cards from "@/data/cards.json";
import { enrichCard } from "@/lib/ai-lite";

// 🧠 AI ENGINE APPLY
const aiCards = cards.map(enrichCard);

// 🔥 Trending Cards (AI-based)
const trendingCards = aiCards
  .filter((c) => c.trending)
  .slice(0, 4);

// 📦 Latest Cards (AI sorted)
const latestCards = [...aiCards]
  .sort((a, b) => b.year - a.year)
  .slice(0, 6);

// 📊 Market Index (static UI data)
const marketIndex = [
  { label: "Basketball Index", change: "+29%", icon: "🏀", sport: "basketball" },
  { label: "Baseball Index", change: "+17%", icon: "⚾", sport: "baseball" },
  { label: "Hockey Index", change: "+2.98%", icon: "🏒", sport: "hockey" },
  { label: "Football Index", change: "+0.61%", icon: "🏈", sport: "football" },
];

// 📈 Market Stats
const marketStats = [
  { label: "Marktgröße 2025", value: "$13,5 Mrd.", icon: "🌍" },
  { label: "eBay-Umsatz", value: "$1,78 Mrd.", icon: "🏷️" },
  { label: "Sammler weltweit", value: "30 Mio+", icon: "👥" },
  { label: "Wachstum p.a.", value: "9,8%", icon: "📈" },
];

// 🏆 Top Sellers
const ebaySellers = [
  { rank: 1, name: "Michael Jordan", sport: "🏀", volume: "$70,5 Mio." },
  { rank: 2, name: "Shohei Ohtani", sport: "⚾", volume: "$57,9 Mio." },
  { rank: 3, name: "LeBron James", sport: "🏀", volume: "$30,5 Mio." },
  { rank: 4, name: "Kobe Bryant", sport: "🏀", volume: "$30,4 Mio." },
  { rank: 5, name: "Victor Wembanyama", sport: "🏀", volume: "$30,0 Mio." },
  { rank: 6, name: "Jayden Daniels", sport: "🏈", volume: "$20,0 Mio." },
  { rank: 7, name: "Caitlin Clark", sport: "🏀", volume: "$15,0 Mio." },
  { rank: 8, name: "Mickey Mantle", sport: "⚾", volume: "$13,0 Mio." },
];

// 💡 AI Investment Reasons
const whyInvest = [
  {
    icon: "📈",
    title: "Bewiesene Wertsteigerung",
    text: "Basketball +29%, Baseball +17% – der Markt wächst konstant und stabil.",
  },
  {
    icon: "💎",
    title: "PSA 10 Multiplikator",
    text: "Top-graded cards erzielen 3–10x höhere Preise als ungradierte Karten.",
  },
  {
    icon: "🚀",
    title: "Starkes Marktwachstum",
    text: "Der Sammelkartenmarkt wächst jährlich stark durch globale Nachfrage.",
  },
];

export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <section className="relative bg-[#0A1628] py-24 px-4 text-center overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-[#3B82F6] text-sm font-semibold uppercase mb-4">
            0€ AI Sports Cards
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4">
            ENON <span className="text-[#3B82F6]">CARDS</span>
          </h1>

          <p className="text-[#E2E8F0] text-xl md:text-2xl mb-8">
            AI-powered Sports Card Intelligence (FREE)
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/cards"
              className="bg-[#2563EB] text-white px-8 py-3 rounded-xl"
            >
              Katalog →
            </Link>

            <Link
              href="/markt"
              className="bg-[#162444] text-white px-8 py-3 rounded-xl"
            >
              Markt Analyse
            </Link>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          🔥 AI Trending Cards
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingCards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="bg-[#0D1F3C] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Markt Übersicht
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#162444] rounded-xl p-6 text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-xl text-[#3B82F6] font-bold">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          📦 Neueste Karten
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestCards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Warum investieren?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {whyInvest.map((item) => (
            <div
              key={item.title}
              className="bg-[#162444] p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
