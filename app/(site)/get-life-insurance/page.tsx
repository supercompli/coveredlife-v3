import type { Metadata } from 'next';
import { GetLifeInsuranceContent } from './GetLifeInsuranceContent';

export const metadata: Metadata = {
  title: 'Life Insurance Quotes | CoveredLife',
  description: 'Compare life insurance policies from South Africa\'s leading insurers. Free, no-obligation quotes with advice from FSCA-authorised advisers.',
};

export default function GetLifeInsurancePage() {
  return <GetLifeInsuranceContent />;
}
