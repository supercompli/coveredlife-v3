'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, Star, X, CheckCircle2, Compass, Wallet, Building2, Users, Clock, Download } from 'lucide-react';

export function KeyPersonInsuranceContent() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>

        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Key Person Insurance Quote</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Ready to compare <br />
            <span className="text-orange-500">Key Person Insurance</span> policies?
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <Link href="/quote" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-orange-950/40">
              Start Your Quote
            </Link>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              FSCA-Authorised Advisers | Whole-of-Market Access
            </p>
          </motion.div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
          <p className="text-2xl text-slate-600 leading-relaxed font-light">
            We can find you the most suitable <span className="text-indigo-900 font-semibold">Key Person Insurance Policy</span> that protects your employees and their families — with expert guidance and no fees.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 py-12 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-indigo-600">25,392</p>
              <p className="text-xs font-bold text-slate-400 uppercase">Businesses Helped</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center text-orange-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase">Average Star Rating</p>
            </div>
            <div className="space-y-2 flex items-center justify-center">
              <p className="text-slate-500 italic text-sm">"We would love to do the same for you..."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4 grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-indigo-950 leading-tight">Protect your business from losing its most valuable people</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Losing a key person can devastate a business, as revenue streams dry up, lenders recall loans, and customers drift away. Without proper Key Person Protection, you risk:
              </p>
            </div>

            <ul className="grid gap-6">
              {[
                { title: 'Financial Losses', text: 'Missed sales, delayed projects, and diminished profits while you search for a replacement.' },
                { title: 'Loan Obligations', text: "Inability to repay business loans or meet financial obligations without your key person's contribution." },
                { title: 'Business Closure', text: 'Closure if lenders or investors lose confidence in your ability to continue trading.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <X className="w-6 h-6 text-orange-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-900 rounded-[3rem] p-12 text-white space-y-8 sticky top-24 shadow-2xl">
            <h3 className="text-3xl font-bold">What is a Key Person Insurance Policy?</h3>
            <p className="text-indigo-100 leading-relaxed">
              Key Person Insurance is life cover your business takes out on a key individual whose loss would cause significant financial strain.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-sm">Replace lost profits during transition</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-sm">Repay business loans and overdrafts</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-sm">Cover recruitment and training costs</p>
              </div>
            </div>
            <div className="pt-8 border-t border-indigo-800">
              <p className="text-sm font-medium text-indigo-300 italic">"Gives South African businesses time and resources to recover from losing someone vital to their success."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-950">The CoveredLife promise</h2>
            <p className="text-slate-600">With CoveredLife, you get expert support and absolute transparency.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Compass, title: 'Whole-Market Access', text: 'We connect you with FSCA-authorised advisers who secure protection from leading SA providers.' },
              { icon: Wallet, title: 'No Hidden Fees', text: 'You never pay for our service. Insurers compensate our advisers only when they secure suitable cover.' },
              { icon: ShieldCheck, title: 'Business Protection Expertise', text: 'Advisers consider lost profits, recruitment costs, and business loan protection.' }
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

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-16 text-center">Comparison of Key Person Protection providers in South Africa</h2>
          <p className="text-center max-w-3xl mx-auto text-slate-600 mb-16">
            CoveredLife connects you with FSCA-authorised advisers who specialise in Key Person Protection across South Africa. They work with leading insurers to secure policies that properly compensate businesses for the loss of a key individual.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Wallet, title: 'Lump Sum Payment', text: 'Immediate funds to stabilise operations during a difficult transition period.' },
              { icon: Building2, title: 'Tax Relief', text: 'Premiums may qualify for corporation tax relief if structured correctly.' },
              { icon: Users, title: 'Flexible Cover', text: 'Calculate based on profit contribution, replacement costs, or debt levels.' },
              { icon: ShieldCheck, title: 'Multiple Key Personnel', text: 'Take out separate policies on several vital members of your business.' },
              { icon: Clock, title: 'Terminal Illness Benefit', text: 'Pays out if the insured person is diagnosed with a condition likely to result in death within 12 months.' }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 hover:shadow-xl transition-all">
                <item.icon className="w-8 h-8 text-indigo-600" />
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-indigo-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <div className="w-24 h-24 bg-indigo-800 rounded-full flex items-center justify-center mx-auto text-4xl">"</div>
          <p className="text-3xl font-light italic leading-relaxed">
            "Most business owners underestimate how vulnerable they are without a Key Person Insurance plan. We understand the financial strain that occurs if these key people develop a serious illness or die."
          </p>
          <div className="space-y-2">
            <h5 className="text-xl font-bold text-orange-500">James Stait</h5>
            <p className="text-sm text-indigo-300 uppercase tracking-widest">CoveredLife</p>
          </div>
          <Link href="/quote" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all">
            Start Your Quote Today
          </Link>
        </div>
      </section>

      {/* Free Guide Banner */}
      <section className="py-24 bg-orange-50 border-y border-orange-100">
        <div className="max-w-[980px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-bold text-indigo-950">Free Guide: The Business Leader's Guide to Financial Protection</h2>
            <p className="text-slate-600">Get a clear, jargon-free overview of how to protect your income, business and family in one place.</p>
          </div>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-colors whitespace-nowrap">
            <Download className="w-5 h-5" />
            DOWNLOAD YOUR FREE GUIDE
          </button>
        </div>
      </section>
    </div>
  );
}
