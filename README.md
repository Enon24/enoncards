# ★ ENON CARDS

Eine moderne Sports Card Sammlung, gebaut mit **Next.js**, **TypeScript** und **Tailwind CSS**.

## 🌐 Live-URL

**[https://enon24.github.io/enoncards/](https://enon24.github.io/enoncards/)**

## 📦 Sportarten

| Sport | Karten |
|-------|--------|
| ⚾ Baseball | 6+ Karten |
| 🏀 Basketball | 6+ Karten |
| 🏈 Football | 6+ Karten |
| 🏒 Hockey | 6+ Karten |

## 🚀 Setup

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build
```

## 📁 Projektstruktur

```
enoncards/
├── app/
│   ├── page.tsx           # Startseite
│   ├── layout.tsx         # Root Layout
│   ├── not-found.tsx      # Custom 404 Seite
│   ├── sitemap.ts         # Sitemap (SEO)
│   ├── globals.css        # Globale Styles
│   ├── cards/
│   │   ├── layout.tsx     # Katalog-Metadaten
│   │   ├── page.tsx       # Kartenkatalog
│   │   └── [id]/
│   │       └── page.tsx   # Karten-Detailseite
│   ├── markt/
│   │   └── page.tsx       # Markt-Analyse
│   ├── guide/
│   │   └── page.tsx       # Preis-Guide
│   ├── sammlung/
│   │   ├── layout.tsx     # Sammlung-Metadaten
│   │   └── page.tsx       # Persönliche Sammlung
│   └── sport/
│       └── [sport]/
│           └── page.tsx   # Sportart-Seite
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CardItem.tsx
│   └── PriceTrend.tsx
├── lib/
│   └── collection.ts      # Sammlung-Hook & Utilities
├── types/
│   └── card.ts            # Zentrale Card-Typdefinition
├── data/
│   └── cards.json         # Kartendaten
└── public/
    ├── robots.txt
    └── images/
        └── placeholder.svg
```

## ➕ Neue Karte hinzufügen

Öffne `data/cards.json` und füge ein neues Objekt hinzu:

```json
{
  "id": "31",
  "name": "Spielername",
  "sport": "baseball",
  "team": "Teamname",
  "year": 2024,
  "brand": "Topps",
  "series": "Serie",
  "condition": "PSA 10",
  "price": 100.00,
  "description": "Beschreibung der Karte.",
  "rarity": "rare"
}
```

**Mögliche Werte für `sport`:** `baseball`, `basketball`, `football`, `hockey`  
**Mögliche Werte für `rarity`:** `common`, `rare`, `legendary`

## 🎨 Tech Stack

- [Next.js 16](https://nextjs.org/) – React Framework
- [TypeScript](https://www.typescriptlang.org/) – Type Safety
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [GitHub Pages](https://pages.github.com/) – Hosting
