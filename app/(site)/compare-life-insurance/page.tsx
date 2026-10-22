import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Compare Life Insurance | CoveredLife',
  description: "Compare life insurance quotes from South Africa's leading FSCA-authorised insurers side-by-side, with no obligation to buy.",
};

export default function CompareLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Compare Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
        headline: { lead: 'Compare life insurance', highlight: "from South Africa's leading insurers" },
        subheadline: 'See side-by-side quotes from multiple FSCA-authorised insurers in minutes, with no obligation to buy.',
        howItWorksTitle: 'How Comparing Life Insurance Works',
        howItWorks: [
          { step: 'Tell us about you', text: 'Share your age, health, and the amount of cover you need.' },
          { step: 'We search the market', text: "Your adviser compares policies from South Africa's leading insurers." },
          { step: 'Review your options', text: 'See side-by-side quotes so you can compare price and cover.' },
          { step: 'Choose with confidence', text: 'Select the policy that best suits your needs and budget.' }
        ],
        keyFeatures: [
          { title: 'Whole-of-market comparison', text: 'Access policies from multiple insurers, not just one.' },
          { title: 'No obligation', text: 'Compare quotes for free with no pressure to buy.' },
          { title: 'Impartial advice', text: "Advisers aren't tied to any single insurer." },
          { title: 'Fast turnaround', text: 'Get comparable quotes in minutes, not days.' }
        ],
        faqs: [
          { q: 'Does comparing quotes affect my credit score?', a: 'No, getting a life insurance quote does not involve a credit check or affect your credit score.' },
          { q: 'How many insurers do you compare?', a: "Our advisers work with a panel of South Africa's leading FSCA-regulated insurers to find suitable cover." },
          { q: 'Is it really free to compare?', a: 'Yes, our comparison service is completely free. Advisers are paid by insurers only if you take out a policy.' },
          { q: 'How long does a comparison take?', a: 'Most customers can get comparable quotes within a few minutes.' }
        ]
      }}
    />
  );
}
