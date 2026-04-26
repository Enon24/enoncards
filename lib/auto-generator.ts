export function generateNewCard() {
  const players = [
    "Rising Star Player",
    "Future MVP",
    "Rookie Sensation",
    "Breakout Talent",
    "Next Gen Prospect",
  ];

  const sports = ["basketball", "baseball", "football", "hockey"];

  const rarityPool = ["common", "rare", "legendary"];

  return {
    id: Date.now().toString(),
    name: players[Math.floor(Math.random() * players.length)],
    sport: sports[Math.floor(Math.random() * sports.length)],
    team: "Generated Team",
    year: 2025,
    brand: "AI Generated",
    series: "Auto Series",
    condition: "PSA 10",
    price: Math.floor(Math.random() * 1000),
    priceChange: 0,
    rarity: rarityPool[Math.floor(Math.random() * rarityPool.length)],
    trending: true,
    description: "Auto-generated card by Enon AI system.",
  };
}
