'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, Compass, Wallet } from 'lucide-react';

export function AboutContent() {
  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')" }} />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">About CoveredLife</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Independent advice you can <br />
            <span className="text-orange-500">actually trust</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <p className="text-2xl text-slate-600 leading-relaxed font-light">
            Since 2006, CoveredLife has helped <span className="text-indigo-900 font-semibold">12K+ businesses and individuals</span> compare protection insurance from South Africa's leading insurers.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            We're an independent comparison service — not an insurer ourselves. That means we have no reason to push one product over another. Our only job is to connect you with FSCA-authorised advisers who search the whole market and find cover that's genuinely suited to your circumstances.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 py-12">
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-indigo-600">12K+</p>
              <p className="text-xs font-bold text-slate-400 uppercase">People &amp; Businesses Helped</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-indigo-600">4.9/5</p>
              <p className="text-xs font-bold text-slate-400 uppercase">Average Star Rating</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-indigo-600">2006</p>
              <p className="text-xs font-bold text-slate-400 uppercase">Helping South Africans Since</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-950">What we stand for</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Compass, title: 'Independent Advice', text: "We connect you with advisers who compare policies across the whole South African market. We're not tied to any insurer, so you see genuine options." },
              { icon: Wallet, title: 'No Fees', text: "You'll never be charged for advice. Your adviser is paid by insurers only when they find you the right cover." },
              { icon: ShieldCheck, title: 'Absolute Protection', text: 'Your policy is structured correctly and matched to your actual risk, so there are no nasty surprises when you need it most.' }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl shadow-sm flex items-center justify-center mx-auto border border-slate-100">
                  <item.icon className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold">Ready to protect what matters most?</h2>
          <Link href="/quote" className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-50 transition-colors shadow-2xl">
            Start Your Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
