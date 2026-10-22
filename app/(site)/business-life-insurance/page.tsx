import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Business Life Insurance | CoveredLife',
  description: 'Compare business life insurance to protect key people, shareholders and directors, keeping your company financially resilient.',
};

export default function BusinessLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Business Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance built', highlight: 'for your business' },
        subheadline: 'Whether protecting a key person, a shareholder, or the business itself, business life insurance keeps your company financially resilient.',
        howItWorksTitle: 'How Business Life Insurance Works',
        howItWorks: [
          { step: 'Identify what the business needs to protect', text: 'Consider key individuals, ownership structure, and outstanding loans.' },
          { step: 'Choose the right structure', text: 'Key person, shareholder protection, or relevant life insurance for directors.' },
          { step: 'Value the cover needed', text: 'Calculate cover based on profit contribution, share value, or loan amounts.' },
          { step: 'Policy pays out on death', text: 'The business or a nominated party receives a tax-efficient payout to stabilise operations.' }
        ],
        keyFeatures: [
          { title: 'Covers key people, shareholders and directors', text: 'A range of structures to protect the people who matter most to your business.' },
          { title: 'Premiums often tax-deductible', text: 'Many business protection premiums qualify as an allowable business expense.' },
          { title: 'Structured to suit your company type', text: 'Options for sole traders, partnerships, and limited companies alike.' },
          { title: 'Whole-of-market business insurer access', text: 'Advisers compare business protection specialists across the market.' }
        ],
        faqs: [
          { q: "What's the difference between the business cover types?", a: 'Key person insurance protects against losing a vital employee, shareholder protection funds a share buyback, and relevant life insurance provides tax-efficient personal life cover for directors.' },
          { q: 'Can premiums be paid by the company?', a: 'Yes, in many structures the company pays the premiums, and these can often be treated as a deductible business expense.' },
          { q: 'Do sole traders need business life insurance?', a: 'Sole traders may still benefit from cover to protect income or fund a smooth handover, though the structures used can differ from limited companies.' },
          { q: 'How much cover does a business typically need?', a: "This depends on the purpose — key person cover is often based on profit contribution, while shareholder protection is based on the value of each person's stake." }
        ]
      }}
    />
  );
}
