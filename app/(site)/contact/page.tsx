import type { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | CoveredLife',
  description: 'Get in touch with CoveredLife by phone or message. Mon-Fri: 9am - 7pm.',
};

export default function ContactPage() {
  return <ContactContent />;
}
