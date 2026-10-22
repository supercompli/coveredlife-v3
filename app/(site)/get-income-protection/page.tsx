import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Income Protection Insurance | CoveredLife',
  description: 'Compare Income Protection Insurance quotes and get monthly tax-free payments if illness or injury stops you from working.',
};

export default function IncomeProtectionPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Income Protection Quote',
        heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
        headline: { lead: 'Protect your income', highlight: "if you can't work" },
        subheadline: 'Monthly tax-free payments to replace your salary if illness or injury stops you from working.',
        howItWorksTitle: 'How Income Protection Works',
        howItWorks: [
          { step: 'Policy set-up', text: 'Choose a monthly benefit amount and deferred period that matches your sick pay or savings.' },
          { step: 'Premiums paid', text: 'Pay a monthly premium based on your age, occupation and health.' },
          { step: 'Unable to work', text: "If illness or injury stops you from working, you submit a claim with medical evidence." },
          { step: 'Monthly benefit paid', text: 'Once approved, you receive a regular tax-free income until you return to work or the policy ends.' }
        ],
        keyFeatures: [
          { title: 'Replace up to 70% of income', text: 'Cover a significant portion of your salary so bills and commitments are still met.' },
          { title: 'Own-occupation cover', text: "Pays out if you can't do your own job, not just any job." },
          { title: 'Flexible deferred periods', text: 'Choose how long you wait before payments start, based on sick pay or savings.' },
          { title: 'Cover until retirement', text: 'Payments can continue until you return to work or reach your chosen retirement age.' }
        ],
        faqs: [
          { q: 'How much cover do I need?', a: 'Most people cover 50-70% of their gross income, enough to cover essential bills and commitments without over-insuring.' },
          { q: "What counts as being unable to work?", a: "This depends on your policy's definition. \"Own occupation\" cover pays out if you can't do your specific job, while stricter definitions require you to be unable to do any work at all." },
          { q: 'How is this different from Critical Illness Cover?', a: 'Critical Illness Cover pays a one-off lump sum on diagnosis of a specific serious illness. Income Protection pays a regular monthly income for as long as you are unable to work, for a much wider range of illnesses and injuries.' },
          { q: 'Are payments taxed?', a: 'Personally-owned Income Protection policies pay out tax-free. Your adviser will confirm how this applies to your specific circumstances.' }
        ]
      }}
    />
  );
}
