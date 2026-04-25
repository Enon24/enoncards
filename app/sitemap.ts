import type { MetadataRoute } from 'next';
import cards from '@/data/cards.json';

export const dynamic = 'force-static';

const BASE_URL = 'https://enon24.github.io/enoncards';

export default function sitemap(): MetadataRoute.Sitemap {
  const cardUrls: MetadataRoute.Sitemap = cards.map(card => ({
    url: `${BASE_URL}/cards/${card.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/cards`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/markt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/sammlung`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/sport/baseball`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sport/basketball`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sport/football`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sport/hockey`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...cardUrls,
  ];
}
