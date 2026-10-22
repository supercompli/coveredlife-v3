import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Life Insurance Quotes | CoveredLife',
  description: 'Get a personalised life insurance quote in minutes from FSCA-authorised advisers, with no obligation to buy.',
};

export default function LifeInsuranceQuotesPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Life Insurance Quotes',
        heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
        headline: { lead: 'Get your life insurance quote', highlight: 'in minutes, not days' },
        subheadline: 'Answer a few quick questions and get a personalised life insurance quote from FSCA-authorised advisers.',
        howItWorksTitle: 'How Getting a Quote Works',
        howItWorks: [
          { step: 'Answer a few questions', text: 'Tell us your age, health, and the amount of cover you need.' },
          { step: 'Get matched with an adviser', text: 'We connect you with an FSCA-authorised adviser suited to your needs.' },
          { step: 'Receive your personalised quote', text: 'Your adviser searches the market and presents your options.' },
          { step: "Apply when you're ready", text: 'Take out cover online or over the phone, with no pressure to buy.' }
        ],
        keyFeatures: [
          { title: 'No-obligation quotes', text: 'Get a quote with zero pressure or commitment to purchase.' },
          { title: 'Personalised to your circumstances', text: 'Quotes reflect your age, health, and cover requirements.' },
          { title: 'Free adviser support', text: 'Speak to a real adviser to talk through your options at no cost.' },
          { title: 'Apply online or by phone', text: 'Choose whichever way suits you best to complete your application.' }
        ],
        faqs: [
          { q: 'What information do I need to get a quote?', a: 'Typically your age, smoker status, general health, occupation, and the amount and length of cover you want.' },
          { q: 'How accurate is an online quote?', a: 'Quotes are a strong estimate based on the details you provide, but your final premium is confirmed after underwriting.' },
          { q: 'Will my quote change after underwriting?', a: 'It can change if a medical or lifestyle factor comes to light during underwriting that wasn\'t captured in your initial quote.' },
          { q: 'How long is a quote valid for?', a: 'Most quotes remain valid for around 30 days, though this can vary by insurer.' }
        ]
      }}
    />
  );
}
