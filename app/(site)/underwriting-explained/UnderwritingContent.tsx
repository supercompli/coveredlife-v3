'use client';

import { motion } from 'motion/react';
import { ShieldCheck, ChevronDown } from 'lucide-react';

export function UnderwritingContent() {
  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80')" }} />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Learn</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Underwriting, <br />
            <span className="text-orange-500">explained simply</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <p className="text-2xl text-slate-600 leading-relaxed font-light">
            Underwriting is how an insurer decides <span className="text-indigo-900 font-semibold">whether to offer you cover, and on what terms</span>, based on your individual risk.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every applicant is different, so insurers ask about your health, lifestyle and occupation to price your policy fairly — rather than charging everyone the same amount regardless of risk.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-16 text-center">How underwriting works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: 'Application', text: 'You apply for cover and provide basic details like age and the amount you need.' },
              { step: 'Medical & lifestyle questions', text: 'You answer questions about your health, family history, occupation and hobbies.' },
              { step: 'Insurer assessment', text: 'The insurer reviews your answers, and may request medical evidence for larger amounts of cover.' },
              { step: 'Terms confirmed', text: 'You receive confirmed terms — standard rates, an adjusted premium, or in some cases an exclusion.' }
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

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-bold text-indigo-950 text-center mb-8">Why full disclosure matters</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            You have a duty to answer underwriting questions honestly and completely. This isn't just a formality — if information is missed or misrepresented, it can result in a claim being reduced or refused later, at the worst possible time for your family or business.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            If you're ever unsure whether something is relevant, disclose it. Your adviser can help you understand what insurers need to know and how it's likely to be assessed.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-12 text-center">Underwriting FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "What if I don't disclose something?", a: 'Non-disclosure, even unintentional, can lead to a claim being reduced or declined. Always disclose fully and let the insurer decide what is relevant.' },
              { q: 'Will I need a medical exam?', a: 'This depends on your age, health, and the amount of cover you are applying for. Larger amounts of cover are more likely to require a medical.' },
              { q: 'Can my terms change after underwriting?', a: 'Yes, if new information comes to light during underwriting that wasn\'t part of your initial application, your terms may be adjusted before the policy is confirmed.' }
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
