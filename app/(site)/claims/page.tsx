import type { Metadata } from 'next';
import { ClaimsContent } from './ClaimsContent';

export const metadata: Metadata = {
  title: 'Making a Claim | CoveredLife',
  description: "Step-by-step guide to making an insurance claim, what you'll need, and answers to common claims questions.",
};

export default function ClaimsPage() {
  return <ClaimsContent />;
}
