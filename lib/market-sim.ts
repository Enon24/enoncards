import cards from "@/data/cards.json";

export type Card = (typeof cards)[number];

export function simulateMarket(): Card[] {
  return cards.map((card) => {
    const volatility = getVolatility(card);

    const change = randomChange(volatility);

    return {
      ...card,
      price: Math.max(1, Math.round(card.price * (1 + change / 100))),
      priceChange: parseFloat(change.toFixed(2)),
    };
  });
}

function getVolatility(card: Card): number {
  if (card.rarity === "legendary") return 1.2;
  if (card.rarity === "rare") return 2.5;
  return 4;
}

function randomChange(volatility: number): number {
  return (Math.random() - 0.5) * volatility * 2;
}
