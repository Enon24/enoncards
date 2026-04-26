// lib/ai.ts

export type Card = {
  id: string;
  name: string;
  sport: string;
  year: number;
  price: number;
  priceChange: number;
};

export type EnrichedCard = Card & {
  trending: boolean;
  rarity: "common" | "rare" | "legendary";
  aiInsight: string;
};

export function enrichCard(card: Card): EnrichedCard {
  return {
    ...card,
    trending: isTrending(card),
    rarity: getRarity(card),
    aiInsight: generateInsight(card),
  };
}

/**
 * 🔥 Trending-Logik (Autopilot)
 */
function isTrending(card: Card): boolean {
  return card.priceChange >= 10;
}

/**
 * 💎 Rarity automatisch berechnen
 */
function getRarity(card: Card): "common" | "rare" | "legendary" {
  if (card.price >= 5000) return "legendary";
  if (card.price >= 500) return "rare";
  return "common";
}

/**
 * 🧠 AI Insight Generator (Rule-based AI)
 */
function generateInsight(card: Card): string {
  if (card.priceChange >= 20) {
    return "Strong upward momentum – high demand detected";
  }

  if (card.priceChange >= 10) {
    return "Positive growth trend in market value";
  }

  if (card.priceChange < 0) {
    return "Market correction phase – potential entry point";
  }

  return "Stable market behavior with low volatility";
}
