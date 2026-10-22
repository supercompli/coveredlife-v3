'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';

export interface ProductPageContent {
  badge: string;
  heroImage: string;
  headline: { lead: string; highlight: string };
  subheadline: string;
  howItWorksTitle: string;
  howItWorks: { step: string; text: string }[];
  keyFeatures: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

const CROSS_SELL = [
  {
    title: 'Life Insurance',
    text: 'A one-off tax-free lump-sum payment for your loved ones in the event of your death.',
    href: '/get-life-insurance'
  },
  {
    title: 'Critical Illness Cover',
    text: 'A tax-free lump sum if you are diagnosed with a serious illness like cancer, heart attack or stroke.',
    href: '/get-critical-illness-cover'
  },
  {
    title: 'Income Protection',
    text: 'Monthly tax-free payments if you are unable to work due to long-term sickness or injury.',
    href: '/get-income-protection'
  }
];

export function ProductPageTemplate({ content }: { content: ProductPageContent }) {
  const { badge, heroImage, headline, subheadline, howItWorksTitle, howItWorks, keyFeatures, faqs } = content;

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>

        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">{badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            {headline.lead} <br />
            <span className="text-orange-500">{headline.highlight}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-indigo-100 text-lg max-w-xl">{subheadline}</p>
            <Link href="/quote" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-orange-950/40">
              Start Your Quote
            </Link>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              FSCA-Authorised Advisers | Whole-of-Market Access
            </p>
          </motion.div>
        </div>
      </header>

      {/* Explore Your Options */}
      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-950">Explore Your Options</h2>
            <p className="text-slate-600">Whatever you need to protect, we'll help you compare the right cover.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CROSS_SELL.map((item) => (
              <div key={item.title} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6 hover:shadow-xl transition-all flex flex-col h-full">
                <h3 className="text-xl font-bold text-indigo-950">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{item.text}</p>
                <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-16 text-center">{howItWorksTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative space-y-4">
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Step {i + 1}</div>
                <h4 className="font-bold text-slate-900">{item.step}</h4>
                <p className="text-sm text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features at a glance */}
      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-16 text-center">Key features at a glance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-8 h-8 text-indigo-600" />
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <details key={i} className="group border-b border-slate-200 pb-6">
                <summary className="flex justify-between items-center font-bold text-indigo-950 cursor-pointer list-none">
                  {item.q}
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
