import type { Metadata } from 'next';
import { ExecutiveIncomeProtectionContent } from './ExecutiveIncomeProtectionContent';

export const metadata: Metadata = {
  title: 'Executive Income Protection Quotes | CoveredLife',
  description: 'Compare Executive Income Protection policies for company directors. Cover salary, bonuses and dividends with FSCA-authorised advisers.',
};

export default function ExecutiveIncomeProtectionPage() {
  return <ExecutiveIncomeProtectionContent />;
}
