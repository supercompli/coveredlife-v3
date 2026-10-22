import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Shareholder Protection Insurance | CoveredLife',
  description: "Compare shareholder protection insurance that funds a share buyback if a business partner dies, keeping control with existing owners.",
};

export default function ShareholderProtectionPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Shareholder Protection Insurance',
        heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
        headline: { lead: 'Keep control in the', highlight: 'right hands' },
        subheadline: "If a shareholder or business partner dies, shareholder protection insurance funds the remaining owners to buy their shares — keeping control where it belongs.",
        howItWorksTitle: 'How Shareholder Protection Works',
        howItWorks: [
          { step: "Value the business and each shareholder's stake", text: 'Agree on the current value of the business and each ownership share.' },
          { step: 'Take out a policy per shareholder', text: "Each shareholder is covered for the value of their own stake." },
          { step: 'Set up a cross-option agreement', text: 'A legal agreement gives surviving shareholders the option to buy, and the estate the option to sell.' },
          { step: 'Payout funds the share buyback', text: "On death, the policy pays out, funding the purchase of the deceased's shares." }
        ],
        keyFeatures: [
          { title: 'Keeps control with existing owners', text: 'Prevents shares passing to family members uninvolved in the business.' },
          { title: 'Funds a fair buyback at agreed value', text: "Ensures the deceased's family receive fair value without a forced sale." },
          { title: 'Written in trust outside the estate', text: 'Speeds up payout and keeps proceeds outside of estate duty calculations.' },
          { title: 'Reviewed as share values change', text: 'Cover can be adjusted over time as the business grows in value.' }
        ],
        faqs: [
          { q: 'What happens without shareholder protection?', a: "Without it, a deceased shareholder's shares could pass to family members, potentially disrupting management or forcing a sale of business assets to buy them out." },
          { q: 'What is a cross-option agreement?', a: "It's a legal agreement giving surviving shareholders the option to buy the deceased's shares, and their estate the option to sell them, at an agreed price." },
          { q: 'Who owns the policy?', a: 'This depends on the structure used — commonly each shareholder owns a policy on the life of the others, or the company owns policies on each shareholder.' },
          { q: 'How is the cover amount worked out?', a: "Cover is usually based on the current value of each shareholder's stake in the business, reviewed periodically as that value changes." }
        ]
      }}
    />
  );
}
