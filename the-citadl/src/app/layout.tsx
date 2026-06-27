import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

const siteTitle = 'The Citadl: Bespoke Real Estate Websites';
const siteDescription = 'A boutique studio building custom real estate websites with MLS-synced listings, agent portals, and automation. One of one, never a template.';

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL('https://thecitadl.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: 'https://thecitadl.com',
    siteName: 'The Citadl',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Citadl, bespoke real estate websites.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'The Citadl',
              'url': 'https://thecitadl.com',
              'logo': 'https://thecitadl.com/favicon-32x32.png',
              'image': 'https://thecitadl.com/og-image.png',
              'description': 'A boutique studio building bespoke real estate websites with MLS-synced listings, agent portals, and automation.',
              'email': 'hello@thecitadl.com',
              'priceRange': '$$$',
              'areaServed': 'US',
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'US'
              }
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-citadl-bg text-citadl-text-primary selection:bg-citadl-accent selection:text-citadl-light">
        {/* Global Grain Overlay */}
        <svg className="grain-overlay" aria-hidden="true">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
