import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Cancer Life Insurance | CoveredLife',
  description: 'Compare life insurance after a cancer diagnosis, matched to specialist insurers who consider your individual outlook and history.',
};

export default function CancerLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Cancer Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance after a', highlight: 'cancer diagnosis' },
        subheadline: 'Whether newly diagnosed, in treatment, or in remission, specialist insurers can still offer cover based on your individual outlook.',
        howItWorksTitle: 'How Cover After Cancer Works',
        howItWorks: [
          { step: 'Tell us your cancer type, stage and treatment', text: 'Share your diagnosis, treatment history, and current status.' },
          { step: 'We match you with specialist insurers', text: 'Your adviser knows which insurers have experience underwriting cancer history.' },
          { step: 'Underwriting reviews prognosis and time since treatment', text: 'Insurers assess your outlook based on medical evidence and time elapsed.' },
          { step: 'Receive a personalised quote', text: 'Get a quote that reflects your individual circumstances and current health.' }
        ],
        keyFeatures: [
          { title: 'Cover considered at any stage, including remission', text: 'Applications are assessed individually, not automatically refused.' },
          { title: 'Specialist oncology-aware underwriting', text: 'Insurers experienced in interpreting cancer diagnoses and treatment outcomes.' },
          { title: 'Time since treatment can improve terms', text: 'The longer you have been in remission, the more favourable terms can become.' },
          { title: 'Options if declined for full cover', text: 'Alternative products may be available even where standard cover is not.' }
        ],
        faqs: [
          { q: 'Can I get life insurance during treatment?', a: 'It can be more difficult during active treatment, but some specialist insurers will still consider an application or may offer to review it again after treatment completes.' },
          { q: 'How long after remission can I apply?', a: 'This varies by cancer type and insurer, but many will consider applications from one to five years post-treatment, sometimes sooner.' },
          { q: 'What medical evidence is needed?', a: 'Typically your diagnosis details, treatment received, histology/pathology reports, and follow-up or oncology reports.' },
          { q: "What if I can't get standard cover?", a: 'Your adviser can explore alternative options, such as cover with a specific exclusion, a loaded premium, or guaranteed acceptance policies.' }
        ]
      }}
    />
  );
}
