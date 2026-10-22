import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const SITE_URL = 'https://coveredlife.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CoveredLife | Life Insurance. Quoted Instantly.',
    template: '%s | CoveredLife',
  },
  description: 'Get an instant life insurance quote and compare cover designed around your health, your needs and your budget. No obligation, chronic conditions welcome.',
  openGraph: {
    siteName: 'CoveredLife',
    title: 'Life Insurance. Quoted Instantly. | CoveredLife',
    description: 'Get an instant life insurance quote and compare cover designed around your health, your needs and your budget. No obligation, chronic conditions welcome.',
    type: 'website',
    url: '/',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Insurance. Quoted Instantly. | CoveredLife',
    description: 'Get an instant life insurance quote and compare cover designed around your health, your needs and your budget. No obligation, chronic conditions welcome.',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'CoveredLife',
  alternateName: 'Covered Financial Services (Pty) Ltd',
  url: SITE_URL,
  description:
    'Independent South African comparison service connecting customers with FSCA-authorised advisers for life, critical illness, income protection, and business insurance.',
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-100">
        {children}
      </body>
    </html>
  );
}
