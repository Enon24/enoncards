export function updateTrending(cards: any[]) {
  return cards.map((card) => {
    const trendingScore =
      (card.priceChange || 0) * 2 +
      (card.price > 1000 ? 10 : 0);

    return {
      ...card,
      trending: trendingScore > 8,
    };
  });
}
