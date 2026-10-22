import type { Metadata } from 'next';
import { UnderwritingContent } from './UnderwritingContent';

export const metadata: Metadata = {
  title: 'Underwriting Explained | CoveredLife',
  description: 'A plain-English guide to how life insurance underwriting works, and why full disclosure matters.',
};

export default function UnderwritingExplainedPage() {
  return <UnderwritingContent />;
}
