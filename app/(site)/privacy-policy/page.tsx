import type { Metadata } from 'next';
import { PrivacyPolicyContent } from './PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | CoveredLife',
  description: 'How CoveredLife collects, uses and protects your personal information when you request a quote or use this website, in line with POPIA.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
