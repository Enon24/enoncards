import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meine Sammlung',
  description: 'Deine persönliche Sportkarten-Sammlung – Gesamtwert und Übersicht deiner gespeicherten Karten.',
  openGraph: {
    title: 'Meine Sammlung | ENON CARDS',
    description: 'Deine persönliche Sportkarten-Sammlung – Gesamtwert und Übersicht deiner gespeicherten Karten.',
  },
};

export default function SammlungLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
