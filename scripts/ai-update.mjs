import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardsPath = path.join(__dirname, '../data/cards.json');
const cards = JSON.parse(fs.readFileSync(cardsPath, 'utf-8'));

console.log(`📦 ${cards.length} Karten geladen. Starte Markt-Update...`);

// Deterministischer Seed basierend auf Datum (gleicher Tag = gleiche Werte)
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getDateSeed() {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

// Sport-Saison-Boost
function getSeasonBoost(sport) {
  const month = new Date().getMonth() + 1; // 1-12
  const boosts = {
    basketball: [1,2,3,4,5,6,10,11,12].includes(month) ? 1.8 : 0.8,  // NBA Okt-Jun
    football:   [9,10,11,12,1,2].includes(month) ? 2.0 : 0.6,         // NFL Sep-Feb
    baseball:   [4,5,6,7,8,9,10].includes(month) ? 1.5 : 0.9,         // MLB Apr-Okt
    hockey:     [10,11,12,1,2,3,4,5,6].includes(month) ? 1.4 : 0.7,  // NHL Okt-Jun
  };
  return boosts[sport] || 1.0;
}

const dateSeed = getDateSeed();

const updatedCards = cards.map((card, index) => {
  const seed = dateSeed + index * 137; // Eindeutiger Seed pro Karte pro Tag
  const rand = seededRandom(seed);
  const rand2 = seededRandom(seed + 999);

  // Schwankungsbreite nach Rarität
  const volatility = card.rarity === 'legendary' ? 8 : card.rarity === 'rare' ? 18 : 25;

  // Basis-Änderung: -volatility bis +volatility
  const baseChange = (rand * 2 - 1) * volatility;

  // Saison-Boost anwenden
  const seasonBoost = getSeasonBoost(card.sport);
  const seasonAdjusted = baseChange * seasonBoost;

  // Rookie-Bonus: neuere Karten (nach 2020) schwanken stärker nach oben
  const rookieBonus = card.year >= 2020 ? rand2 * 15 : 0;

  // Finaler priceChange: gerundet auf 1 Dezimalstelle
  const priceChange = Math.round((seasonAdjusted + rookieBonus) * 10) / 10;

  // Clamp: zwischen -30 und +150
  const clampedChange = Math.max(-30, Math.min(150, priceChange));

  return {
    ...card,
    priceChange: clampedChange,
    trending: clampedChange > 20,
  };
});

// Validierung
if (updatedCards.length !== cards.length) {
  console.error(`❌ Kartenanzahl stimmt nicht! Vorher: ${cards.length}, Nachher: ${updatedCards.length}`);
  process.exit(1);
}

// Alle IDs müssen erhalten bleiben
const originalIds = cards.map(c => c.id).sort();
const updatedIds = updatedCards.map(c => c.id).sort();
if (JSON.stringify(originalIds) !== JSON.stringify(updatedIds)) {
  console.error('❌ Karten-IDs haben sich verändert!');
  process.exit(1);
}

fs.writeFileSync(cardsPath, JSON.stringify(updatedCards, null, 2));

const trendingCards = updatedCards.filter(c => c.trending).map(c => c.name);
console.log(`✅ Erfolgreich! ${updatedCards.length} Karten aktualisiert.`);
console.log(`📈 Trending (${trendingCards.length}): ${trendingCards.join(', ') || 'keine'}`);
console.log(`🗓️  Datum-Seed: ${dateSeed}`);
