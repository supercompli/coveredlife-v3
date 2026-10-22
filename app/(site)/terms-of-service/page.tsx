import type { Metadata } from 'next';
import { TermsOfServiceContent } from './TermsOfServiceContent';

export const metadata: Metadata = {
  title: 'Terms of Service | CoveredLife',
  description: 'The terms that govern your use of the CoveredLife website and our free, no-obligation life insurance quote service.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
