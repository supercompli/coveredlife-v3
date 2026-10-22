'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, Compass, Wallet } from 'lucide-react';
import { WHATSAPP_NUMBER_FORMATTED } from '@/lib/data';

export function HowItWorksContent() {
  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')" }} />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">How It Works</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            How CoveredLife works <br />
            <span className="text-orange-500">in 3 simple steps</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4 space-y-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-6xl font-black text-indigo-50">01</div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-indigo-950">Start your quote</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Tell us a bit about yourself and the cover you're looking for. It takes a few minutes online, or you can message us directly on WhatsApp at {WHATSAPP_NUMBER_FORMATTED}.</p>
              <p className="text-slate-500">We'll match you with an FSCA-authorised adviser who specialises in your specific needs, whether that's personal life cover, a health condition, or business protection.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 text-6xl font-black text-indigo-50">02</div>
            <div className="space-y-4 lg:order-1">
              <h2 className="text-3xl font-bold text-indigo-950">Secure your policy</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Your adviser searches the whole market on your behalf, comparing policies from South Africa's leading insurers to find suitable, competitively priced cover.</p>
              <p className="text-slate-500">Most customers can complete this step within a single call, though more complex cases (like pre-existing conditions) may take a little longer while insurers assess your application.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-6xl font-black text-indigo-50">03</div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-indigo-950">Be confident</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Once your policy is in place, you can rest easy knowing your family or business is protected. Your adviser remains on hand if your circumstances change.</p>
              <p className="text-slate-500">There's no obligation at any stage, and our service is completely free — we're only paid by insurers once suitable cover is secured.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-950">Why people choose us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Compass, title: 'Whole-of-Market Access', text: 'We compare policies across South Africa\'s leading insurers, not just one.' },
              { icon: Wallet, title: 'No Fees', text: 'Our advice is completely free. Insurers pay us only once cover is secured.' },
              { icon: ShieldCheck, title: 'FSCA-Authorised Advisers', text: 'Every adviser we work with is fully regulated and authorised.' }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto border border-slate-100">
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
          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <Link href="/quote" className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-50 transition-colors shadow-2xl">
            Start Your Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
