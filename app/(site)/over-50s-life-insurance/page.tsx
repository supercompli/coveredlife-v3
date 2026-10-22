import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Over 50s Life Insurance | CoveredLife',
  description: 'Guaranteed acceptance life insurance for South Africans aged 50-85, with no medical exam required.',
};

export default function Over50sPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Over 50s Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80',
        headline: { lead: 'Guaranteed acceptance', highlight: 'life cover, over 50' },
        subheadline: 'No medical exam and guaranteed acceptance for South Africans aged 50-85, giving peace of mind for funeral and end-of-life costs.',
        howItWorksTitle: 'How Over 50s Cover Works',
        howItWorks: [
          { step: 'Choose your monthly cover amount', text: 'Pick a level of cover that suits your budget and needs.' },
          { step: 'Answer a few simple questions', text: 'No medical exam or health questionnaire required.' },
          { step: 'Guaranteed acceptance', text: "You can't be turned down for cover as long as you're aged 50-85." },
          { step: 'Cover starts', text: 'Your policy usually begins with a waiting period before full cover applies.' }
        ],
        keyFeatures: [
          { title: 'No medical exam required', text: 'Get covered without any medical tests or health questions.' },
          { title: 'Guaranteed acceptance 50-85', text: "You're guaranteed cover within this age range, regardless of health." },
          { title: 'Fixed premiums for life', text: 'Your monthly premium never increases once your policy starts.' },
          { title: 'Cash lump sum for funeral costs', text: 'Provides a tax-free lump sum to help cover funeral and end-of-life expenses.' }
        ],
        faqs: [
          { q: 'Is there really no medical?', a: 'Yes, guaranteed acceptance over 50s policies do not require a medical exam or health questionnaire.' },
          { q: "What's the waiting period?", a: 'Most policies have a waiting period of around 12-24 months. If you die of natural causes during this period, your premiums are usually refunded rather than the full sum assured being paid.' },
          { q: 'What if I die within the waiting period?', a: 'Cover for accidental death typically applies from day one. For death by natural causes within the waiting period, insurers commonly return the premiums paid rather than pay the full benefit.' },
          { q: 'Can my premium increase later?', a: 'No, once you take out a guaranteed acceptance policy, your premium is fixed and will not increase for the life of the policy.' }
        ]
      }}
    />
  );
}
