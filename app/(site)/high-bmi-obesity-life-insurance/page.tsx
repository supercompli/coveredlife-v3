import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'High BMI Life Insurance | CoveredLife',
  description: 'Compare life insurance for people with a high BMI, matched to insurers who assess your overall health, not just one number.',
};

export default function HighBmiObesityLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'High BMI Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance that looks', highlight: 'beyond your BMI' },
        subheadline: 'A high BMI alone rarely means automatic decline — insurers weigh your overall health, not just one number.',
        howItWorksTitle: 'How Cover With a High BMI Works',
        howItWorks: [
          { step: 'Tell us your height, weight and general health', text: 'Share your BMI along with any related health conditions.' },
          { step: 'We match you with insurers who assess BMI fairly', text: 'Your adviser knows which insurers look at the full health picture.' },
          { step: 'Underwriting reviews related health markers', text: 'Insurers consider blood pressure, cholesterol, and other relevant factors.' },
          { step: 'Receive a personalised quote', text: 'Get a quote based on your overall health, not a single measurement.' }
        ],
        keyFeatures: [
          { title: 'BMI assessed alongside overall health', text: "Insurers look at the complete picture, not weight in isolation." },
          { title: 'No single cut-off for automatic decline', text: 'Different insurers have different thresholds, so options usually exist.' },
          { title: 'Considers related conditions', text: 'Factors like blood pressure and cholesterol are assessed alongside BMI.' },
          { title: 'Weight loss can improve future terms', text: 'A reduced BMI over time may open the door to better rates on review.' }
        ],
        faqs: [
          { q: 'Is there a BMI cut-off for cover?', a: 'Different insurers set different thresholds, and very few apply a single hard cut-off — your adviser will find the most suitable insurer for your BMI.' },
          { q: 'Will I be loaded automatically for a high BMI?', a: 'Not always. Some insurers apply a rating only above certain thresholds, and your overall health can offset this.' },
          { q: 'Do I need a medical exam?', a: 'This depends on your age, cover amount, and BMI — some applications require a medical, including height and weight measurement.' },
          { q: 'Can my premium reduce if I lose weight?', a: 'Some insurers allow a review of your terms if your BMI and related health markers improve significantly.' }
        ]
      }}
    />
  );
}
