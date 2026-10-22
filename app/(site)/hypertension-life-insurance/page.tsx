import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Hypertension Life Insurance | CoveredLife',
  description: 'Compare life insurance for people with high blood pressure, matched to insurers who understand well-controlled hypertension.',
};

export default function HypertensionLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Hypertension Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance for people', highlight: 'with high blood pressure' },
        subheadline: 'Hypertension is one of the most common conditions insurers deal with — well-controlled blood pressure rarely stands in the way of cover.',
        howItWorksTitle: 'How Cover With Hypertension Works',
        howItWorks: [
          { step: 'Tell us your blood pressure readings and medication', text: 'Share your recent readings and any medication you take to manage it.' },
          { step: 'We match you with suitable insurers', text: 'Your adviser knows which insurers rate controlled hypertension most fairly.' },
          { step: 'Underwriting reviews your control and any related conditions', text: 'Insurers assess how well your blood pressure is managed over time.' },
          { step: 'Receive a personalised quote', text: 'Get a quote that reflects your actual control, not a blanket assumption.' }
        ],
        keyFeatures: [
          { title: 'Common condition, well understood by insurers', text: 'Hypertension is one of the most frequently underwritten conditions in South Africa.' },
          { title: 'Controlled hypertension rated favourably', text: 'Stable readings on medication can lead to standard or near-standard rates.' },
          { title: 'Considers medication and lifestyle factors', text: 'Insurers look at your full picture, not just a single reading.' },
          { title: 'No automatic loading', text: 'Well-managed hypertension does not automatically mean a higher premium.' }
        ],
        faqs: [
          { q: 'Does high blood pressure mean higher premiums?', a: 'Not necessarily. Well-controlled hypertension with stable readings is often accepted at or near standard rates.' },
          { q: 'What if I have other conditions alongside hypertension?', a: 'Your adviser will consider your full medical history together, as combined conditions can affect underwriting outcomes.' },
          { q: 'Will medication affect my application?', a: 'Being on medication and well-controlled is generally viewed positively, as it shows the condition is being actively managed.' },
          { q: 'What if my blood pressure improves?', a: 'Some insurers allow you to request a review of your terms if your readings and overall control improve significantly.' }
        ]
      }}
    />
  );
}
