import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Diabetes Life Insurance | CoveredLife',
  description: "Compare life insurance for people living with Type 1 or Type 2 diabetes, matched to insurers who understand your condition.",
};

export default function DiabetesLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Diabetes Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance for people', highlight: 'living with diabetes' },
        subheadline: "Whether Type 1 or Type 2, well-managed diabetes doesn't have to mean sky-high premiums or automatic decline.",
        howItWorksTitle: 'How Cover With Diabetes Works',
        howItWorks: [
          { step: 'Tell us your diabetes type and control', text: 'Share whether you have Type 1 or Type 2, and how well it is managed.' },
          { step: 'We match you with diabetes-friendly insurers', text: 'Your adviser knows which insurers rate diabetes most favourably.' },
          { step: 'Underwriting reviews your HbA1c and history', text: 'Insurers assess your recent blood sugar control and any complications.' },
          { step: 'Receive a personalised quote', text: 'Get a quote that reflects your actual level of control, not a blanket rate.' }
        ],
        keyFeatures: [
          { title: 'Type 1 and Type 2 both considered', text: 'Both types of diabetes can be covered, with terms based on individual risk.' },
          { title: 'Well-controlled diabetes rated more favourably', text: 'Good HbA1c results and management can significantly improve your terms.' },
          { title: 'No automatic loading or exclusion', text: 'Every application is individually underwritten rather than blanket-refused.' },
          { title: 'Specialist insurer panel', text: 'Access insurers experienced in assessing diabetes risk fairly.' }
        ],
        faqs: [
          { q: 'Will I be refused because of diabetes?', a: 'Not usually. Most insurers will offer cover to people with diabetes, though your premium may reflect your type and control.' },
          { q: 'What details will I need to provide?', a: 'Typically your diagnosis date, type, treatment, recent HbA1c readings, and any related complications.' },
          { q: 'Does insulin use affect my premium?', a: 'It can be a factor, but well-controlled insulin-treated diabetes is still commonly accepted by specialist insurers.' },
          { q: 'Can my premium improve if my control improves?', a: 'Some policies allow you to request a review if your HbA1c and overall management improve significantly over time.' }
        ]
      }}
    />
  );
}
