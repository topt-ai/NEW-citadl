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

export const metadata = {
  title: 'The Citadl — Web Design & Local SEO for Service Businesses',
  description: 'We build high-performance, conversion-focused websites and drive local SEO for HVAC, roofing, plumbing, and other US service businesses. No long contracts.',
  metadataBase: new URL('https://thecitadl.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Citadl — Web Design & Local SEO for Service Businesses',
    description: 'We build high-performance, conversion-focused websites and drive local SEO for HVAC, roofing, plumbing, and other US service businesses. No long contracts.',
    url: 'https://thecitadl.com',
    siteName: 'The Citadl',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'The Citadl Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Citadl — Web Design & Local SEO for Service Businesses',
    description: 'We build high-performance, conversion-focused websites and drive local SEO for HVAC, roofing, plumbing, and other US service businesses. No long contracts.',
    images: ['/favicon.png'],
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'The Citadl',
              'url': 'https://thecitadl.com',
              'logo': 'https://thecitadl.com/favicon.png',
              'image': 'https://thecitadl.com/favicon.png',
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
