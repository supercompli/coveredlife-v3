import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'HIV Life Insurance | CoveredLife',
  description: 'Compare life insurance for people living with HIV, matched to insurers experienced in underwriting stable, well-managed HIV.',
};

export default function HivLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'HIV Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance for people', highlight: 'living with HIV' },
        subheadline: 'With modern treatment, many people living with HIV can now access life insurance — our advisers know exactly which insurers to approach.',
        howItWorksTitle: 'How Cover With HIV Works',
        howItWorks: [
          { step: 'Tell us about your diagnosis and treatment', text: 'Share your diagnosis date, current treatment, and general health.' },
          { step: 'We match you with HIV-experienced insurers', text: 'Your adviser knows which insurers have clear underwriting criteria for HIV.' },
          { step: 'Underwriting reviews your viral load and CD4 count', text: 'Insurers assess how well-managed and stable your condition is.' },
          { step: 'Receive a personalised quote', text: 'Get a quote reflecting your actual health status and treatment stability.' }
        ],
        keyFeatures: [
          { title: 'Insurers experienced with HIV underwriting', text: 'Work with insurers who have clear, established criteria rather than blanket refusals.' },
          { title: 'Stable, well-managed HIV rated favourably', text: 'An undetectable viral load and stable CD4 count can significantly improve your terms.' },
          { title: 'Confidential, judgement-free process', text: 'Your medical information is handled with complete discretion throughout.' },
          { title: 'No automatic decline', text: 'Every application is assessed individually based on your specific circumstances.' }
        ],
        faqs: [
          { q: 'Can I really get life insurance with HIV?', a: 'Yes. A number of insurers now offer cover to people living with HIV, particularly where treatment is stable and effective.' },
          { q: 'What medical evidence will be needed?', a: 'Typically your diagnosis date, current treatment, recent viral load and CD4 count results, and confirmation from your treating doctor.' },
          { q: 'Is my application kept confidential?', a: 'Yes, all medical information you share is treated as strictly confidential throughout the application process.' },
          { q: 'How long does underwriting take?', a: 'It varies by insurer, but expect a more detailed medical underwriting process than a standard application, often a few weeks.' }
        ]
      }}
    />
  );
}
