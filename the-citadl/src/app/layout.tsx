import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

const siteTitle = 'The Citadl: Web Design & Local SEO for Service Businesses';
const siteDescription = 'We build high-performance, conversion-focused websites and drive local SEO for HVAC, roofing, plumbing, and other US service businesses. No long contracts.';

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
        alt: 'The Citadl, web design and local SEO for service businesses.',
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
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
              'description': 'Web design and local SEO agency targeting US service businesses.',
              'email': 'hello@thecitadl.com',
              'priceRange': '$$',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Austin',
                'addressRegion': 'TX',
                'addressCountry': 'US'
              }
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-citadl-bg text-citadl-text-primary selection:bg-citadl-lime selection:text-citadl-dark">
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
