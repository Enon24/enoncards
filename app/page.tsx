import Link from "next/link";
import CardItem from "@/components/CardItem";
import cards from "@/data/cards.json";

import { updateTrending } from "@/lib/trend-engine";
import { generateNewCard } from "@/lib/auto-generator";

// 🔁 AI Layer: Karten erweitern + optional neue Karte hinzufügen
const baseCards = [...cards];

// OPTIONAL: 1 neue AI-Karte hinzufügen (Simulation)
const aiInjectedCards = [...baseCards, generateNewCard()];

// 🔥 Trending + AI Processing
const processedCards = updateTrending(aiInjectedCards);

// 🔥 Trending Cards
const trendingCards = processedCards
  .filter((c) => c.trending)
  .slice(0, 4);

// 🆕 Latest Cards (nach Jahr sortiert)
const latestCards = [...processedCards]
  .sort((a, b) => b.year - a.year)
  .slice(0, 6);

// 📊 Market Index (unverändert)
const marketIndex = [
  { label: "Basketball Index", change: "+29%", icon: "🏀", sport: "basketball" },
  { label: "Baseball Index", change: "+17%", icon: "⚾", sport: "baseball" },
  { label: "Hockey Index", change: "+2.98%", icon: "🏒", sport: "hockey" },
  { label: "Football Index", change: "+0.61%", icon: "🏈", sport: "football" },
];

// 📊 Stats
const marketStats = [
  { label: "Marktgröße 2025", value: "$13,5 Mrd.", icon: "🌍" },
  { label: "eBay-Umsatz", value: "$1,78 Mrd.", icon: "🏷️" },
  { label: "Sammler weltweit", value: "30 Mio+", icon: "👥" },
  { label: "Wachstum p.a.", value: "9,8%", icon: "📈" },
];

// 🏆 Sellers
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

// 💡 Why Invest
const whyInvest = [
  {
    icon: "📈",
    title: "Bewiesene Wertsteigerung",
    text: "Basketball +29%, Baseball +17% – starke Marktdynamik 2025.",
  },
  {
    icon: "💎",
    title: "PSA 10 Multiplikator",
    text: "Graded Cards erzielen 3–10x höhere Preise als Raw Cards.",
  },
  {
    icon: "🚀",
    title: "Marktwachstum",
    text: "9,8% CAGR Prognose bis 2034 laut Marktanalysen.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-[#0A1628] py-24 px-4 text-center">
        <h1 className="text-6xl font-bold text-white">
          ENON <span className="text-blue-500">CARDS</span>
        </h1>
        <p className="text-gray-300 mt-4 text-xl">
          Dein Sportkarten AI Universum
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/cards"
            className="bg-blue-600 px-6 py-3 rounded-xl text-white"
          >
            Katalog
          </Link>
          <Link
            href="/markt"
            className="bg-gray-700 px-6 py-3 rounded-xl text-white"
          >
            Markt
          </Link>
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl text-white font-bold mb-6">
          🔥 Trending Cards (AI)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {trendingCards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* LATEST */}
      <section className="bg-[#0D1F3C] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-6">
            🆕 Latest AI Cards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestCards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-white text-2xl font-bold mb-6">
          📊 Market Stats
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketStats.map((s) => (
            <div key={s.label} className="bg-gray-800 p-4 rounded-xl">
              <div className="text-2xl">{s.icon}</div>
              <div className="text-blue-400 font-bold">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY INVEST */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-white text-2xl font-bold mb-6">
          💡 Why Invest
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {whyInvest.map((w) => (
            <div key={w.title} className="bg-gray-800 p-6 rounded-xl">
              <div className="text-3xl">{w.icon}</div>
              <h3 className="text-white font-bold mt-2">{w.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{w.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
