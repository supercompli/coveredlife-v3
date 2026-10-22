import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Previously Declined Life Insurance | CoveredLife',
  description: "Been declined for life insurance before? Every insurer assesses risk differently — we help you find a better fit.",
};

export default function PreviouslyDeclinedPage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Previously Declined Cover',
        heroImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80',
        headline: { lead: 'Turned down before?', highlight: "That doesn't mean no forever" },
        subheadline: "Every insurer assesses risk differently — a decline from one doesn't mean you'll be declined by all. We know where to look next.",
        howItWorksTitle: 'How We Help After a Decline',
        howItWorks: [
          { step: 'Tell us who declined you and why', text: 'Share the details of your previous application and outcome.' },
          { step: 'We identify insurers with a better fit', text: "Your adviser knows which insurers take a more favourable view of your circumstances." },
          { step: 'Re-apply with full disclosure', text: 'We guide you through disclosing your full medical and application history correctly.' },
          { step: 'Get a fresh decision', text: 'Receive a new assessment from an insurer better suited to your risk profile.' }
        ],
        keyFeatures: [
          { title: 'Access to a wider insurer panel', text: 'Reach insurers beyond the one that originally declined you.' },
          { title: "Guidance on what changed insurers' minds", text: "Learn what factors are more likely to lead to acceptance." },
          { title: 'Support with full, honest disclosure', text: 'Get it right the first time to avoid issues further down the line.' },
          { title: 'Alternative cover options if declined again', text: 'Explore guaranteed acceptance or specialist policies if needed.' }
        ],
        faqs: [
          { q: 'Why was I declined in the first place?', a: 'Common reasons include health conditions, high-risk occupations or hobbies, or incomplete information on your application.' },
          { q: 'Do I have to disclose the previous decline?', a: 'Yes, insurers will typically ask if you have been declined before, and this must be disclosed honestly to avoid future claim issues.' },
          { q: 'Will this decline follow me everywhere?', a: "No formal shared record follows you between insurers in South Africa, but you must still disclose it truthfully when asked." },
          { q: "What if I'm declined again?", a: 'There are still options, including guaranteed acceptance policies that don\'t require underwriting, which your adviser can discuss with you.' }
        ]
      }}
    />
  );
}
