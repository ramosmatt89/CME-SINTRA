import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CME SINTRA – Igreja em Sintra | Catedral da Esperança',
  description: 'Uma igreja moderna em Sintra focada em fé, família e esperança. Visita a CME SINTRA e encontra um lugar para recomeçar.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className={`${inter.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="bg-brand-graphite overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
