export function enrichCard(card: any) {
  return {
    ...card,
    trending: card.priceChange > 10,
    rarity:
      card.price > 5000
        ? "legendary"
        : card.price > 500
        ? "rare"
        : "common",
    aiInsight:
      card.priceChange > 20
        ? "Strong growth trend"
        : "Stable market behavior",
  };
}
