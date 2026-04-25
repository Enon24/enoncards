export interface Card {
  id: string;
  name: string;
  sport: string;
  team: string;
  year: number;
  brand: string;
  series: string;
  condition: string;
  price: number;
  priceChange?: number;
  description: string;
  rarity: string;
  trending?: boolean;
  ebaySearchUrl?: string;
}
