import type { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'About CoveredLife | CoveredLife',
  description: 'CoveredLife is an independent comparison service that has helped 12K+ South African businesses and individuals find suitable protection insurance since 2006.',
};

export default function AboutPage() {
  return <AboutContent />;
}
