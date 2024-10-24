import type { Metadata } from 'next';
import './globals.scss';
import { Navbar } from '@/components/main/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Pizza',
  description: 'Pizza shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
