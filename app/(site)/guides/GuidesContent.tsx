'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const GUIDES = [
  { title: 'Understanding Life Insurance', text: 'The basics of how life insurance works, and why it matters for your family.', href: '/get-life-insurance' },
  { title: 'Comparing Policies', text: "How to compare quotes across insurers and find the right fit for you.", href: '/compare-life-insurance' },
  { title: 'Life Insurance With a Health Condition', text: 'What to expect when applying for cover with a pre-existing condition.', href: '/pre-existing-conditions-life-insurance' },
  { title: 'How Much Cover Do You Need', text: 'What shapes your premium, and how to size your cover to your budget.', href: '/life-insurance-cost' },
  { title: 'Protecting Your Business', text: 'An overview of key person, shareholder, and business life insurance.', href: '/business-life-insurance' },
  { title: 'Understanding Underwriting', text: 'A plain-English explanation of how insurers assess your application.', href: '/underwriting-explained' }
];

export function GuidesContent() {
  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')" }} />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Guides</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Guides to help you <br />
            <span className="text-orange-500">choose with confidence</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GUIDES.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6 hover:shadow-xl transition-all flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-indigo-950 group-hover:text-indigo-600 transition-colors">{guide.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{guide.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
