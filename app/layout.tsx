import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BASE_URL = 'https://enon24.github.io/enoncards';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ENON CARDS – Sports Card Kollektion',
    template: '%s | ENON CARDS',
  },
  description: 'Entdecke seltene Baseball, Basketball, Football und Hockey Sammelkarten. Marktanalysen, Preis-Guide und persönliche Sammlung.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: BASE_URL,
    siteName: 'ENON CARDS',
    title: 'ENON CARDS – Sports Card Kollektion',
    description: 'Entdecke seltene Baseball, Basketball, Football und Hockey Sammelkarten. Marktanalysen, Preis-Guide und persönliche Sammlung.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENON CARDS – Sports Card Kollektion',
    description: 'Entdecke seltene Baseball, Basketball, Football und Hockey Sammelkarten.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#0A1628] text-white min-h-screen flex flex-col" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
