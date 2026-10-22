import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Life Insurance Cost | CoveredLife',
  description: 'See what shapes the cost of life insurance in South Africa, and how to find affordable cover that suits your budget.',
};

export default function LifeInsuranceCostPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Life Insurance Cost',
        heroImage: 'https://images.unsplash.com/photo-1543699565-003b8adda5fc?auto=format&fit=crop&q=80',
        headline: { lead: 'How much does', highlight: 'life insurance really cost?' },
        subheadline: 'Premiums vary by age, health and cover amount — see what shapes your price and how to keep it affordable.',
        howItWorksTitle: 'What Shapes Your Premium',
        howItWorks: [
          { step: 'Your age and health', text: 'Younger, healthier applicants typically pay lower monthly premiums.' },
          { step: 'Amount and length of cover', text: 'Larger sums assured and longer terms increase your monthly cost.' },
          { step: 'Type of policy', text: 'Level, decreasing, and whole-of-life policies are priced differently.' },
          { step: 'Lifestyle factors', text: 'Smoking, high-risk occupations and hobbies can raise your premium.' }
        ],
        keyFeatures: [
          { title: 'Fixed vs reviewable premiums', text: 'Choose premiums that stay level or ones that may be reviewed over time.' },
          { title: 'Guaranteed premiums for the full term', text: 'Lock in your rate so it never increases for the length of your policy.' },
          { title: 'Ways to reduce your cost', text: 'Your adviser can suggest ways to structure cover to fit your budget.' },
          { title: 'No hidden fees', text: 'Our advice is free — insurers only pay your adviser once cover is secured.' }
        ],
        faqs: [
          { q: "What's the average cost of life insurance in South Africa?", a: 'It varies widely by age, health, and cover amount, so the only accurate way to know your cost is to get a personalised quote.' },
          { q: 'Does smoking increase my premium?', a: 'Yes, smokers typically pay significantly more than non-smokers due to the higher associated health risk.' },
          { q: 'Can my premium go up later?', a: 'This depends on your policy type. Guaranteed premium policies stay fixed, while reviewable premiums can change over time.' },
          { q: 'Does the cover amount affect cost the most?', a: 'It is one of the biggest factors, alongside your age and health, since it directly determines the size of any payout.' }
        ]
      }}
    />
  );
}
