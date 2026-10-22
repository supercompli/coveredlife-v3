import type { Metadata } from 'next';
import { QuoteForm } from './QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Quote | CoveredLife',
  description:
    'Get a personalised life insurance quote from CoveredLife in a few quick steps. Compare cover for individuals and businesses, with no obligation to buy.',
  alternates: {
    canonical: '/quote',
  },
};

export default function QuotePage() {
  return <QuoteForm />;
}
