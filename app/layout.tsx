import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `BORD - Máxima ciencia y verdad en formato digital`,
  description:
    'WebApp para seguir e interactuar con los contenidos de Rebord y H.A.G.O.V.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={jost.className}>{children}</body>
    </html>
  );
}
