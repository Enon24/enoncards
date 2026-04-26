import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const cardsPath = path.join(__dirname, '../data/cards.json');
const cards = JSON.parse(fs.readFileSync(cardsPath, 'utf-8'));

console.log(`📦 ${cards.length} Karten geladen. Starte KI-Update...`);

async function updateCards() {
  const today = new Date().toLocaleDateString('de-DE', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `Du bist ein Sportkarten-Marktexperte (Stand: ${today}).
        Aktualisiere die priceChange-Werte (YTD % Veränderung) und das trending-Feld
        basierend auf realistischen Markttrends ${new Date().getFullYear()}.
        Regeln:
        - priceChange: Zahl zwischen -30 und +150 (Prozent)
        - trending: true wenn priceChange > 20
        - Behalte ALLE anderen Felder EXAKT bei (id, name, price, etc.)
        - Antworte NUR mit dem reinen JSON-Array, ohne Markdown, ohne Erklärung.`
      },
      {
        role: 'user',
        content: JSON.stringify(cards, null, 2)
      }
    ],
    // Low temperature for more consistent, deterministic price updates
    temperature: 0.3
  });

  if (!response.choices || response.choices.length === 0 || response.choices[0].message.content === null) {
    throw new Error('❌ KI hat keine gültige Antwort zurückgegeben.');
  }

  const rawContent = response.choices[0].message.content.trim();

  const jsonMatch = rawContent.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error('❌ KI hat kein gültiges JSON zurückgegeben:\n' + rawContent);
  }

  let updatedCards;
  try {
    updatedCards = JSON.parse(jsonMatch[0]);
  } catch (parseError) {
    throw new Error(`❌ KI hat ungültiges JSON zurückgegeben:\n${jsonMatch[0].slice(0, 200)}`);
  }

  if (updatedCards.length !== cards.length) {
    throw new Error(`❌ Kartenanzahl stimmt nicht! Vorher: ${cards.length}, Nachher: ${updatedCards.length}`);
  }

  fs.writeFileSync(cardsPath, JSON.stringify(updatedCards, null, 2));

  console.log(`✅ Erfolgreich! ${updatedCards.length} Karten aktualisiert.`);
  console.log(`📈 Trending Karten: ${updatedCards.filter(c => c.trending).map(c => c.name).join(', ')}`);
}

updateCards().catch(err => {
  console.error(err);
  process.exit(1);
});
