'use client';

import { motion } from 'motion/react';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import { FAQ_GROUPS } from './faqs-data';

export function FaqsContent() {
  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')" }} />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Help Centre</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Frequently Asked <br />
            <span className="text-orange-500">Questions</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-16">
          {FAQ_GROUPS.map((group) => (
            <div key={group.title} className="space-y-6">
              <h2 className="text-2xl font-bold text-indigo-950">{group.title}</h2>
              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <details key={i} className="group border-b border-slate-100 pb-6">
                    <summary className="flex justify-between items-center font-bold text-indigo-950 cursor-pointer list-none">
                      {item.q}
                      <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
