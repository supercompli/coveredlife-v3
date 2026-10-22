import type { Metadata } from 'next';
import { GuidesContent } from './GuidesContent';

export const metadata: Metadata = {
  title: 'Guides | CoveredLife',
  description: 'Guides to help you understand life insurance, compare policies, and choose the right cover with confidence.',
};

export default function GuidesPage() {
  return <GuidesContent />;
}
