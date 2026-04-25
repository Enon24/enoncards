import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kartenkatalog',
  description: 'Entdecke alle 30 Sportkarten: Baseball, Basketball, Football und Hockey – mit Filterung nach Sportart, Seltenheit und Zustand.',
  openGraph: {
    title: 'Kartenkatalog | ENON CARDS',
    description: 'Entdecke alle 30 Sportkarten: Baseball, Basketball, Football und Hockey – mit Filterung nach Sportart, Seltenheit und Zustand.',
  },
};

export default function CardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
