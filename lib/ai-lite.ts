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
  score: number;
};

export function enrichCard(card: Card): EnrichedCard {
  const score = calculateScore(card);

  return {
    ...card,
    score,
    trending: score >= 70,
    rarity: getRarity(score),
    aiInsight: generateInsight(card, score),
  };
}

function calculateScore(card: Card): number {
  let score = 50;

  score += card.priceChange * 2;

  if (card.price > 1000) score += 15;
  if (card.price > 5000) score += 25;

  const age = 2026 - card.year;
  if (age > 20) score += 10;
  if (age > 40) score += 20;

  if (card.sport === "basketball") score += 5;
  if (card.sport === "football") score += 4;
  if (card.sport === "baseball") score += 3;

  return Math.max(0, Math.min(100, score));
}

function getRarity(score: number): "common" | "rare" | "legendary" {
  if (score >= 85) return "legendary";
  if (score >= 65) return "rare";
  return "common";
}

function generateInsight(card: Card, score: number): string {
  if (score >= 85) {
    return "🔥 Elite Card – high demand and strong collector interest";
  }

  if (card.priceChange > 20) {
    return "📈 Strong upward market momentum detected";
  }

  if (card.priceChange < 0) {
    return "📉 Market correction phase – potential opportunity";
  }

  if (card.price > 1000) {
    return "💎 High-value stable collector asset";
  }

  return "📊 Stable market behavior with moderate demand";
}
