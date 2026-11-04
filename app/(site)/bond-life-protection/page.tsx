import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Bond Life Protection | CoveredLife',
  description: 'Compare bond life protection that settles your home loan if you die, so your family keeps the home. Free quotes from FSCA-authorised advisers.',
};

export default function BondLifeProtectionPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Bond Life Protection',
        heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
        headline: { lead: 'Keep the home,', highlight: 'clear the bond' },
        subheadline: 'Bond life protection pays out a lump sum to settle your home loan if you die, so your family is never forced to sell the home to pay the bank.',
        howItWorksTitle: 'How Bond Life Protection Works',
        howItWorks: [
          { step: 'Match cover to your bond', text: 'Set your cover amount and term to your outstanding home loan balance and repayment period.' },
          { step: 'Choose how cover behaves', text: 'Pick cover that reduces as your bond is paid down, or stays level if you want a buffer.' },
          { step: 'Pass underwriting', text: 'Answer health and lifestyle questions so the insurer can confirm your premium.' },
          { step: 'Bond is settled on a claim', text: 'If a covered event happens, the payout is used to settle the outstanding bond.' }
        ],
        keyFeatures: [
          { title: 'Sized to your home loan', text: 'Cover amount and term are set around your bond, so you are not paying for more cover than you need.' },
          { title: 'Decreasing cover available', text: 'Cover that reduces in line with your bond balance often costs less than level cover.' },
          { title: 'Cover for joint bonds', text: 'Protect both borrowers on a joint bond, through a joint policy or two separate policies.' },
          { title: 'Optional illness and disability cover', text: 'Add severe illness or permanent disability cover so the bond can be settled after a serious diagnosis, not only on death.' }
        ],
        faqs: [
          { q: 'What is the difference between bond life protection and homeowner\'s insurance?', a: 'Bond life protection settles your home loan if you die (or suffer a covered illness or disability, if you add that cover). Homeowner\'s insurance protects the building itself against damage such as fire. You generally need both.' },
          { q: 'Do I have to take the cover my bank offers?', a: 'Banks often offer their own home loan protection and may ask for life cover as security for the loan, sometimes by having a policy ceded to them. You can compare independent cover before you decide. Your adviser can explain your options and what your bank requires.' },
          { q: 'Should I choose decreasing or level cover?', a: 'Decreasing cover falls as your bond balance falls, which usually keeps premiums lower. Level cover keeps the payout fixed, which leaves a surplus after the bond is settled and can help if you plan to extend or increase your bond. Your adviser can model both.' },
          { q: 'What happens to my cover if I sell the home or pay off the bond early?', a: 'Your policy is usually separate from the property, so it does not end automatically. Depending on the policy, you can keep it, reduce the cover, or cancel it. Speak to your adviser before making changes.' }
        ]
      }}
    />
  );
}
