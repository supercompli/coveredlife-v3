import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Family Life Cover | CoveredLife',
  description: 'Compare joint and family life cover policies that pay a tax-free lump sum to keep your family financially secure.',
};

export default function FamilyLifeCoverPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Family Life Cover',
        heroImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80',
        headline: { lead: 'Protect the whole', highlight: 'family, together' },
        subheadline: "Joint or family life cover pays out a tax-free lump sum to help your family stay financially secure, whoever it happens to.",
        howItWorksTitle: 'How Family Life Cover Works',
        howItWorks: [
          { step: 'Cover one or both parents', text: 'Choose a joint policy covering both partners, or two linked single policies.' },
          { step: 'Choose cover amount and term', text: 'Size your cover to your mortgage, debts, and your family\'s living costs.' },
          { step: 'Pass underwriting', text: 'Both partners answer health and lifestyle questions to confirm premiums.' },
          { step: 'Pays out on first death or diagnosis', text: 'A tax-free lump sum is paid to support the surviving family members.' }
        ],
        keyFeatures: [
          { title: 'Joint-life or two single policies', text: 'Choose the structure that best suits how you want cover to pay out.' },
          { title: 'Cover for both partners', text: 'Protect your household income and shared financial commitments.' },
          { title: "Children's critical illness add-on", text: "Add cover for your children's serious illness diagnosis to the same plan." },
          { title: 'Guaranteed insurability options', text: 'Increase cover in future life events, like having another child, without new medical checks.' }
        ],
        faqs: [
          { q: "Joint policy vs two single policies — what's better?", a: 'A joint policy is often cheaper but only pays out once (on the first death or serious illness). Two single policies cost more but both can pay out separately.' },
          { q: 'Does it cover both partners fully?', a: 'A joint life first-death policy pays out once, on the first claim. If you want full separate cover for both partners, two single life policies are usually better.' },
          { q: 'Can we add our children?', a: "Yes, many family policies allow you to add children's critical illness cover as an optional extra at an additional cost." },
          { q: 'What happens after the first claim on a joint policy?', a: 'A standard joint-life policy ends after the first payout, so the surviving partner is left without cover — worth discussing with your adviser.' }
        ]
      }}
    />
  );
}
