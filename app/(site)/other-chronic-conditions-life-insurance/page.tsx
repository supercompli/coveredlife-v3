import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Chronic Conditions Life Insurance | CoveredLife',
  description: 'Compare life insurance for a wide range of chronic conditions, matched to insurers experienced in your specific circumstances.',
};

export default function OtherChronicConditionsLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Chronic Conditions Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance for any', highlight: 'chronic condition' },
        subheadline: "Asthma, epilepsy, kidney disease, arthritis and more — whatever you're managing, there's likely an insurer who understands it.",
        howItWorksTitle: 'How Cover With a Chronic Condition Works',
        howItWorks: [
          { step: 'Tell us about your condition and treatment', text: 'Share your diagnosis, current treatment, and how it affects your daily life.' },
          { step: 'We match you with insurers experienced in your condition', text: 'Your adviser knows which insurers regularly underwrite similar cases.' },
          { step: 'Underwriting reviews severity and control', text: 'Insurers assess how well-managed and stable your condition is.' },
          { step: 'Receive a personalised quote', text: 'Get a quote based on your specific circumstances, not assumptions.' }
        ],
        keyFeatures: [
          { title: 'Wide range of conditions considered', text: 'From asthma and epilepsy to kidney disease, arthritis, and beyond.' },
          { title: 'Matched to insurers with relevant expertise', text: 'Work with insurers who have experience assessing your specific condition.' },
          { title: 'Severity and control assessed individually', text: 'A well-managed mild condition is treated differently from a severe one.' },
          { title: 'Second opinions if declined', text: "If one insurer declines, we can explore other options before ruling out cover." }
        ],
        faqs: [
          { q: 'What conditions count as chronic?', a: 'Any long-term condition requiring ongoing management, such as asthma, epilepsy, kidney disease, arthritis, or inflammatory bowel disease.' },
          { q: 'Will I need a specialist report?', a: 'For some conditions, insurers may request a report from your treating specialist to fully understand your circumstances.' },
          { q: 'What if my condition is rare?', a: "Rarer conditions can take longer to assess, but your adviser will still work to find a suitable insurer willing to consider your application." },
          { q: 'Can I still get standard rates?', a: 'It depends on the condition and how well it is controlled — many well-managed chronic conditions are still offered close to standard rates.' }
        ]
      }}
    />
  );
}
