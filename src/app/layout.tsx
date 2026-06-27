import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import './globals.css';

export const metadata: Metadata = {
  title: 'KENICHI SHINAGAWA - AI Product Systems Architect',
  description:
    'Portfolio for Kenichi Shinagawa, an AI Product Systems Architect bridging design systems, frontend engineering, developer experience, and AI-native product development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
