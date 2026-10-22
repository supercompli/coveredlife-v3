import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Pre-existing Conditions Life Insurance | CoveredLife',
  description: 'Specialist life insurance advisers who know which insurers accept pre-existing conditions like diabetes, heart disease, or past cancer.',
};

export default function PreExistingConditionsPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Pre-existing Conditions Cover',
        heroImage: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance, even with', highlight: 'a pre-existing condition' },
        subheadline: "Specialist advisers who know which insurers accept conditions like diabetes, heart disease, or past cancer — so you're not turned away.",
        howItWorksTitle: 'How Cover With a Pre-existing Condition Works',
        howItWorks: [
          { step: 'Tell us your medical history', text: 'Share details of your condition, treatment, and current health.' },
          { step: 'We match you with specialist insurers', text: 'Your adviser knows which insurers are most likely to accept your circumstances.' },
          { step: 'Underwriting reviews your condition', text: 'Insurers assess your medical history to confirm terms and pricing.' },
          { step: 'Receive a tailored quote', text: 'Get a quote that reflects your true risk, not a blanket refusal.' }
        ],
        keyFeatures: [
          { title: 'Specialist insurer panel', text: 'Access insurers who specialise in covering pre-existing conditions.' },
          { title: 'No condition automatically excluded', text: 'Every application is assessed on its individual merits.' },
          { title: 'Honest, upfront underwriting', text: 'Clear guidance on what to disclose and how it affects your cover.' },
          { title: 'Cover reviewed as your health changes', text: 'Options to review your policy if your condition improves over time.' }
        ],
        faqs: [
          { q: 'Will I be refused cover?', a: "It's less likely than you might think. Many insurers accept common conditions like diabetes or hypertension, sometimes with an adjusted premium or exclusion." },
          { q: 'Do I have to disclose everything?', a: 'Yes, full and honest disclosure is essential. Non-disclosure can result in a claim being refused later.' },
          { q: 'Will my premium be much higher?', a: 'It depends on the condition, how well managed it is, and the insurer. Your adviser will find the most competitively priced option for your circumstances.' },
          { q: 'Can I get cover after being declined elsewhere?', a: 'Often yes — different insurers assess risk differently, so a decline from one does not mean you will be declined by all.' }
        ]
      }}
    />
  );
}
