import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Over 60s Life Insurance | CoveredLife',
  description: 'Straightforward, guaranteed-acceptance life insurance designed for South Africans in their 60s, 70s and beyond.',
};

export default function Over60sPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Over 60s Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
        headline: { lead: "Life cover that's", highlight: 'never too late to start' },
        subheadline: 'Straightforward, guaranteed-acceptance cover designed for South Africans in their 60s, 70s and beyond.',
        howItWorksTitle: 'How Over 60s Cover Works',
        howItWorks: [
          { step: 'Choose your cover level', text: 'Pick a monthly cover amount that fits your budget.' },
          { step: 'Answer simple eligibility questions', text: 'No medical exam, just a few basic questions about your age and residency.' },
          { step: 'Guaranteed acceptance up to 85', text: "You can't be turned down for cover if you're within the eligible age range." },
          { step: 'Cover confirmed', text: 'Your policy usually starts with a waiting period before full cover applies.' }
        ],
        keyFeatures: [
          { title: 'No medical exam', text: 'Apply without any health checks or medical questionnaires.' },
          { title: 'Fixed premiums for life', text: 'Your monthly payment is locked in and will never increase.' },
          { title: 'Cover up to age 85 entry', text: "It's never too late to take out a policy, right up to 85." },
          { title: 'Cash sum for family or funeral costs', text: 'Provides a tax-free lump sum to ease the financial burden on your family.' }
        ],
        faqs: [
          { q: 'Am I too old for life insurance?', a: "No — guaranteed acceptance policies are specifically designed to accept applicants well into their 60s, 70s and 80s." },
          { q: 'How is this different from Over 50s cover?', a: 'The products work the same way, but Over 60s cover is priced and positioned for slightly older applicants, often with a higher starting premium.' },
          { q: 'Is there a maximum cover amount?', a: 'Yes, guaranteed acceptance policies typically cap cover at a lower amount than fully underwritten policies, since no medical is required.' },
          { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your policy at any time, though premiums already paid are not usually refunded outside of the waiting period rules.' }
        ]
      }}
    />
  );
}
