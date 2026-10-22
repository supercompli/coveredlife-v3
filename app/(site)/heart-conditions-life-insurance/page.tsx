import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Heart Conditions Life Insurance | CoveredLife',
  description: 'Compare life insurance after a heart condition diagnosis, matched to insurers experienced in assessing cardiac risk.',
};

export default function HeartConditionsLifeInsurancePage() {
  return (
    <ProductPageTemplate
      content={{
        badge: 'Heart Conditions Life Insurance',
        heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80',
        headline: { lead: 'Life insurance after a', highlight: 'heart condition diagnosis' },
        subheadline: 'From high cholesterol to a previous heart attack, insurers assess heart conditions individually — recovery and lifestyle matter.',
        howItWorksTitle: 'How Cover With a Heart Condition Works',
        howItWorks: [
          { step: 'Tell us your diagnosis and treatment history', text: 'Share details of your condition, any procedures, and current medication.' },
          { step: 'We match you with insurers experienced in cardiac risk', text: 'Your adviser knows which insurers assess heart conditions most fairly.' },
          { step: 'Underwriting reviews test results and recovery', text: 'Insurers look at recent test results and how well you have recovered.' },
          { step: 'Receive a personalised quote', text: 'Get a quote that reflects your current health, not just your diagnosis.' }
        ],
        keyFeatures: [
          { title: 'Covers a range of conditions', text: 'From high cholesterol and arrhythmia to a previous heart attack or bypass surgery.' },
          { title: 'Recovery and lifestyle changes considered', text: 'Positive lifestyle changes can help improve the terms you are offered.' },
          { title: 'Cardiac-experienced underwriting', text: 'Work with insurers who understand how to assess cardiac risk fairly.' },
          { title: 'Reviewable terms as your health improves', text: 'Some policies allow a review if your heart health improves over time.' }
        ],
        faqs: [
          { q: 'What heart conditions can be covered?', a: 'A wide range, including high cholesterol, high blood pressure, arrhythmia, angina, a previous heart attack, or bypass surgery.' },
          { q: 'How soon after a heart attack can I apply?', a: 'This varies by insurer and severity, but many will consider applications from around 6-12 months after the event, sometimes sooner.' },
          { q: 'Will lifestyle changes help my application?', a: 'Yes, improvements like quitting smoking, losing weight, or better cholesterol control are often viewed favourably.' },
          { q: 'What tests might insurers ask for?', a: 'Common requests include recent ECG results, cholesterol levels, blood pressure readings, and cardiologist reports.' }
        ]
      }}
    />
  );
}
