import type { Metadata } from 'next';
import { KeyPersonInsuranceContent } from './KeyPersonInsuranceContent';

export const metadata: Metadata = {
  title: 'Key Person Insurance Quotes | CoveredLife',
  description: 'Compare Key Person Insurance policies to protect your business from the financial impact of losing a vital team member. Free advice from FSCA-authorised advisers.',
};

export default function KeyPersonInsurancePage() {
  return <KeyPersonInsuranceContent />;
}
