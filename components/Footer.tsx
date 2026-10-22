import { Phone } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER_FORMATTED } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-200 py-24">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center text-white font-bold">CL</div>
              <span className="text-xl font-bold text-white">CoveredLife</span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">Independent comparison service helping South African residents find the most suitable protection since 2006.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Business</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/get-key-person-insurance" className="hover:text-white transition-colors">Key Person Insurance</a></li>
              <li><a href="/get-executive-income-protection" className="hover:text-white transition-colors">Executive Income Protection</a></li>
              <li><a href="/get-business-health-insurance" className="hover:text-white transition-colors">Business Health</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Personal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/get-life-insurance" className="hover:text-white transition-colors">Life Insurance</a></li>
              <li><a href="/get-critical-illness-cover" className="hover:text-white transition-colors">Critical Illness</a></li>
              <li><a href="/get-income-protection" className="hover:text-white transition-colors">Income Protection</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp {WHATSAPP_NUMBER_FORMATTED}</a></li>
              <li className="opacity-70">Mon-Fri: 9am - 7pm</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-indigo-900/50 text-xs opacity-50 space-y-4">
          <p>Covered Life is a division of Covered Financial Services (Pty) Ltd, an authorised Financial Services Provider (FSP 54871).</p>
          <p>CoveredLife.co.za is an independent website created to help customers find the most suitable protection insurance policy. We do not provide financial advice ourselves. We work with FSCA Regulated Businesses who search and compare policies from leading South African insurers.</p>
          <p>T&amp;Cs apply. Benefits, eligibility, underwriting, limits, exclusions, and cashback conditions are subject to the applicable policy terms and conditions. EduCare is a Capital Legacy solution.</p>
          <p>© CoveredLife 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
