import type { Metadata } from 'next';
import { FaqsContent } from './FaqsContent';
import { FAQ_GROUPS } from './faqs-data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | CoveredLife',
  description: 'Answers to common questions about how CoveredLife works, getting a quote, eligibility, and making a claim.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <FaqsContent />
    </>
  );
}
