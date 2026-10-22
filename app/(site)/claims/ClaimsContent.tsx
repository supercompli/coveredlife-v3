'use client';

import { motion } from 'motion/react';
import { ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';

export function ClaimsContent() {
  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80')" }} />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Claims</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Making a claim <br />
            <span className="text-orange-500">shouldn't add to your stress</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-16 text-center">How a claim works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: 'Contact your adviser or insurer', text: 'Let them know as soon as possible so they can guide you through the process.' },
              { step: 'Submit required documents', text: 'Provide documents such as a death or medical certificate, and your policy details.' },
              { step: 'Insurer reviews the claim', text: 'The insurer assesses the claim against your policy terms and the evidence provided.' },
              { step: 'Payout made', text: 'Once approved, the agreed payout is made to your beneficiaries or to you directly.' }
            ].map((item, i) => (
              <div key={i} className="relative space-y-4">
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Step {i + 1}</div>
                <h4 className="font-bold text-slate-900">{item.step}</h4>
                <p className="text-sm text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-12 text-center">What you'll need</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Your policy number',
              'Proof of identity (ID document)',
              'Death certificate or medical evidence',
              'Bank account details for the payout'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                <p className="text-sm font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-12 text-center">Claims FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'How long do claims take?', a: 'This varies by insurer and the complexity of the claim, but straightforward claims are often settled within a few weeks.' },
              { q: 'What if a claim is declined?', a: 'If a claim is declined, your adviser can help you understand why and, where appropriate, support you through the insurer\'s complaints process.' },
              { q: 'Who do I actually contact?', a: 'Your original adviser is a good first point of contact, or you can contact your insurer directly using the details on your policy documents.' }
            ].map((item, i) => (
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
      </section>
    </div>
  );
}
