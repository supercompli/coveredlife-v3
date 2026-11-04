import Link from 'next/link';
import { WHATSAPP_LINK, WHATSAPP_NUMBER_FORMATTED } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="border-b border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">CL</div>
            <span className="text-2xl font-bold tracking-tight text-indigo-900">CoveredLife</span>
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with us on WhatsApp at ${WHATSAPP_NUMBER_FORMATTED} (opens in a new tab)`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-indigo-900 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
            <span className="hidden sm:inline">{WHATSAPP_NUMBER_FORMATTED}</span>
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-100 bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-xs text-slate-400 space-y-2">
          <p>Covered Life is a div of Covered Financial Services (Pty) Ltd, an authorised Financial Services Provider (FSP 54871).</p>
          <p>T&amp;Cs apply. Benefits, eligibility, underwriting, limits, exclusions, and cashback conditions are subject to the applicable policy terms and conditions. EduCare is a Capital Legacy solution.</p>
          <p>© CoveredLife 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
