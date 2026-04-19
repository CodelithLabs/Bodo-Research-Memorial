import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import Script from 'next/script';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Bodo Research Memorial',
    template: '%s | Bodo Research Memorial',
  },
  applicationName: 'Bodo Research Memorial',
  keywords: [
    'Bodo history',
    'Bodo leaders',
    'Bodo culture',
    'Bodo religion',
    'Bodo archive',
    'Northeast India history',
    'digital memorial',
  ],
  description:
    'A digital scholarly archive documenting the history, leadership, culture, and movements of the Bodo people of Northeast India.',
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Bodo Research Memorial',
    url: '/',
    title: 'Bodo Research Memorial',
    description:
      'A digital scholarly archive documenting the history, leadership, culture, and movements of the Bodo people of Northeast India.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bodo Research Memorial',
    description:
      'Digital scholarly archive for Bodo history, leadership, culture, and movements.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="relative bg-navy-950 text-cream antialiased min-h-screen flex flex-col">
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(201,146,42,0.14), transparent 22%), radial-gradient(circle at 80% 10%, rgba(110,91,211,0.18), transparent 24%), radial-gradient(circle at 50% 90%, rgba(32,180,255,0.08), transparent 26%)',
          }}
        />
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.06] mix-blend-screen"
          style={{
            backgroundImage:
              'linear-gradient(rgba(237,232,220,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(237,232,220,0.25) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <Script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          strategy="afterInteractive"
        />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
