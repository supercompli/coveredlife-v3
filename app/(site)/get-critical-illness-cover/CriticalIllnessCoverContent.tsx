'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, Star, X, CheckCircle2, Compass, Wallet, Clock, ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER_FORMATTED } from '@/lib/data';
import { CRITICAL_ILLNESS_FAQS } from './faqs-data';

export function CriticalIllnessCoverContent() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>

        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Critical Illness Cover Quote</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Ready to compare <br />
            <span className="text-orange-500">Critical Illness Cover</span> policies?
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
            We can find you the most suitable <span className="text-indigo-900 font-semibold">Critical Illness Cover Policy</span> that protects you and your family — with expert guidance and no fees.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 py-12 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-indigo-600">387,296</p>
              <p className="text-xs font-bold text-slate-400 uppercase">People Helped</p>
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

      {/* Selection Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-950">Are you looking for...</h2>
            <p className="text-slate-600">Explore the best medical protection for your circumstances.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Critical Illness Cover',
                subtitle: '(includes free Life Insurance) 🎯',
                text: 'One-off tax-free lump-sum in the event of serious illness like cancer, permanent disability, or death. The most popular choice.',
                href: '#'
              },
              {
                title: 'Critical Illness Cover Only',
                text: 'One-off tax-free lump-sum payment in the event of serious illness like cancer or permanent disability caused by injury.',
                href: '#'
              },
              {
                title: 'Income Protection Insurance',
                text: 'Monthly tax-free payments if you cannot work due to long-term sickness. Payments can last until retirement.',
                href: '#'
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6 hover:shadow-xl transition-all flex flex-col h-full">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-indigo-950">{item.title}</h3>
                  {item.subtitle && <p className="text-sm font-bold text-orange-600 uppercase tracking-widest">{item.subtitle}</p>}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">{item.text}</p>
                <div className="space-y-4 pt-6">
                  <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4 block">Read more</button>
                  <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors">Select {item.title}</button>
                  <button className="text-xs font-bold text-orange-600 hover:text-orange-700 mx-auto block">Calculate your cover</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
            <p className="text-indigo-900 font-medium">Can't decide? For free advice, message a South African based adviser on WhatsApp</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-indigo-600 block mt-2 hover:text-orange-600 transition-colors">{WHATSAPP_NUMBER_FORMATTED}</a>
            <p className="text-xs text-indigo-400 mt-2">The quotation service is provided by an FSCA-authorised insurance specialist</p>
          </div>
        </div>
      </section>

      {/* Financial Hardship Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[980px] mx-auto px-4 grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-indigo-950 leading-tight">Protect your family from financial hardship</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A heart attack, stroke or cancer diagnosis changes everything, and without proper Critical Illness Cover in place, families face impossible choices about everyday expenses. You risk:
              </p>
            </div>

            <ul className="grid gap-6">
              {[
                { title: 'Mortgage Arrears', text: 'Repayments falling into arrears while you focus on recovery.' },
                { title: 'Unmanageable Bills', text: 'Household bills and living costs becoming unmanageable on reduced income.' },
                { title: 'Financial Struggle', text: 'You and your loved ones struggling financially at the worst possible time.' }
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
            <h3 className="text-3xl font-bold">What is Critical Illness Cover?</h3>
            <p className="text-indigo-100 leading-relaxed">
              If you're diagnosed with a serious illness such as cancer, have a heart attack or stroke, the insurer will pay a tax-free cash lump sum.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-sm">Pay off your mortgage in full</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-sm">Cover medical treatments and daily expenses</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <p className="text-sm">Maintain your family's standard of living</p>
              </div>
            </div>
            <Link href="/quote" className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-all">
              Start Your Quote Today
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-16 text-center">Key features at a glance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Tax-free cash lump sum', text: 'On diagnosis, receive a one-off payment for mortgage repayment, bills, or rehabilitation.' },
              { title: 'Cover for major conditions', text: 'Includes heart attack, stroke, cancer, kidney failure and MS. Terminal illness cover is often included.' },
              { title: 'Support & Wellbeing', text: 'Access to medical second opinions, mental health support, and accommodation benefits.' },
              { title: 'Optional Add-ons', text: "Add life cover in a joint policy or include children's Critical Illness Cover." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 space-y-4 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-8 h-8 text-indigo-600" />
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-16 text-center">How Critical Illness Cover works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: 'Policy set-up', text: 'Take out cover for a fixed term, aligned with your mortgage or retirement age.' },
              { step: 'Premiums paid', text: 'Monthly payments based on age, medical history and lifestyle factors.' },
              { step: 'Diagnosis', text: 'If diagnosed with a covered condition, the insurer reviews medical evidence.' },
              { step: 'Lump sum paid', text: 'Agreed tax-free lump sum paid directly to you. Use it however you wish.' }
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

      {/* Speed Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Clock className="w-4 h-4" />
              Get Insured within 20 Minutes
            </div>
            <h2 className="text-4xl font-bold text-indigo-950">Now's the time to protect your loved ones...</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              It is possible to be protected with a life insurance or critical illness policy within 20 minutes provided the insurer does not require a GP report or medical.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
            <h3 className="text-2xl font-bold text-indigo-950">Calculate Your Cover</h3>
            <p className="text-slate-500">Find out how much cover you might need. It takes into account your outstanding mortgage, loans, and family needs.</p>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">Calculate your cover here</button>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-950">The CoveredLife promise</h2>
            <p className="text-slate-600">For peace of mind, ensure you have the following:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Compass, title: 'Whole-Market access', text: 'We connect you with FSCA-authorised advisers who will secure Critical Illness Cover from leading providers.' },
              { icon: Wallet, title: 'No Hidden Fees', text: "You'll never pay for our service. Advisers are only compensated by insurers once cover is secured." },
              { icon: ShieldCheck, title: 'Clear guidance', text: "We ensure you understand what's covered, what triggers a valid claim and what you will receive." }
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

      {/* Quote Section */}
      <section className="py-24 bg-indigo-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <div className="w-24 h-24 bg-indigo-800 rounded-full flex items-center justify-center mx-auto text-4xl">"</div>
          <p className="text-3xl font-light italic leading-relaxed">
            "Every insurer has their own list of covered illnesses and definitions. We understand it can be challenging to find impartial guidance. That's why CoveredLife connects you with advisers who help you understand what triggers a valid claim."
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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-indigo-950 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {CRITICAL_ILLNESS_FAQS.map((item, i) => (
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
