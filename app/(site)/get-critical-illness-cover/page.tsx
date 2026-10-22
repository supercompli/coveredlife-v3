import type { Metadata } from 'next';
import { CriticalIllnessCoverContent } from './CriticalIllnessCoverContent';
import { CRITICAL_ILLNESS_FAQS } from './faqs-data';

export const metadata: Metadata = {
  title: 'Critical Illness Cover Quotes | CoveredLife',
  description: 'Compare Critical Illness Cover policies from South Africa\'s leading insurers. Tax-free lump-sum protection, free expert advice, no hidden fees.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CRITICAL_ILLNESS_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function CriticalIllnessCoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <CriticalIllnessCoverContent />
    </>
  );
}
