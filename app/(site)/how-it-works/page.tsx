import type { Metadata } from 'next';
import { HowItWorksContent } from './HowItWorksContent';

export const metadata: Metadata = {
  title: 'How It Works | CoveredLife',
  description: 'See how CoveredLife works in 3 simple steps: start your quote, secure your policy, and be confident your family or business is protected.',
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
