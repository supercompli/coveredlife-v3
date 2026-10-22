import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Individual Life Cover | CoveredLife',
  description: 'Compare individual life cover policies sized to your own circumstances and budget, with a tax-free lump-sum payout.',
};

export default function IndividualLifeCoverPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Individual Life Cover',
        heroImage: 'https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&q=80',
        headline: { lead: 'Life cover built', highlight: 'around just you' },
        subheadline: 'A single policy that pays a tax-free lump sum to your loved ones, sized to your own circumstances and budget.',
        howItWorksTitle: 'How Individual Life Cover Works',
        howItWorks: [
          { step: 'Choose your cover amount', text: 'Decide how much you want your loved ones to receive.' },
          { step: 'Choose your term', text: 'Pick how long you need cover for, such as until your mortgage is paid off.' },
          { step: 'Pass underwriting', text: 'Answer some health and lifestyle questions to confirm your premium.' },
          { step: 'Policy pays out tax-free', text: 'If you die during the term, your beneficiaries receive a tax-free lump sum.' }
        ],
        keyFeatures: [
          { title: 'Cover from R100,000+', text: 'Choose a sum assured that matches your mortgage, debts and family needs.' },
          { title: 'Level or decreasing cover', text: 'Keep your payout amount fixed, or reduce it in line with a repayment mortgage.' },
          { title: 'Optional critical illness add-on', text: 'Add a payout for serious illness diagnosis alongside your life cover.' },
          { title: 'Written in trust for fast payout', text: 'Ensures your payout reaches your loved ones quickly, outside of your estate.' }
        ],
        faqs: [
          { q: 'How much individual cover do I need?', a: 'A common approach is to cover outstanding debts (like your mortgage) plus enough to replace your income for your family. Your adviser can help you calculate this.' },
          { q: 'Can I add my partner later?', a: 'Individual policies cover one person. If you want to add your partner, you would typically take out a joint or second individual policy.' },
          { q: 'What happens if I stop paying premiums?', a: 'Your cover will usually lapse if premiums stop, meaning your policy will no longer pay out. Contact your adviser before cancelling if your circumstances change.' },
          { q: 'Is the payout really tax-free?', a: 'Yes, when a policy is correctly written in trust, the payout is generally free of income tax and does not form part of your estate.' }
        ]
      }}
    />
  );
}
