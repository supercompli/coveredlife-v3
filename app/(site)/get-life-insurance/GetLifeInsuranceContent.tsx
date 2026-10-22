'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, Star, Clock, Users } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER_FORMATTED } from '@/lib/data';

export function GetLifeInsuranceContent() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>

        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Personal Protection Quote</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Find the best Life Insurance policy <br />
            <span className="text-orange-500">and save money too!</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-indigo-100 text-lg max-w-xl">
              The quotation service is completely FREE & you are under no obligation to purchase.
            </p>
            <Link href="/quote" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-orange-950/40">
              Start Your Quote
            </Link>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              FSCA-Authorised Advisers | Whole-of-Market Access
            </p>
          </motion.div>
        </div>
      </header>

      {/* Social Proof */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
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
            <p className="text-slate-600">Choose the cover that matches your family's needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Life Insurance',
                text: 'This provides a one-off tax-free lump-sum payment in the event of your death during the fixed term of the policy.',
                href: '/get-life-insurance'
              },
              {
                title: 'Combined Life & Critical Illness Cover',
                text: 'This provides a one-off tax-free lump-sum payment in the event of your death or a serious illness like cancer or permanent disability.',
                href: '/get-life-critical-illness'
              },
              {
                title: 'Over 50s Life Insurance',
                text: 'Guaranteed acceptance with no medical examination for people over 50, providing peace of mind for funeral costs.',
                href: '/get-over-50s-life-insurance'
              },
              {
                title: 'Critical Illness Cover Only',
                text: 'Provides a tax-free lump-sum in the event of a serious illness or permanent disability caused by injury.',
                href: '/get-critical-illness-cover'
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-indigo-950">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.text}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href={item.href} className="text-sm font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4">Read more</Link>
                  <Link href={item.href} className="bg-white px-6 py-2 rounded-xl text-xs font-bold text-indigo-900 border border-slate-200 hover:bg-indigo-50 transition-colors">Select {item.title}</Link>
                  <button className="text-xs font-bold text-orange-600 hover:text-orange-700">Calculate your cover</button>
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
            <p className="text-sm text-slate-500 italic">
              A GP report or medical is normally required for large amounts of cover (over R4,000,000), or if your BMI is over 30, or you have significant medical history.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
            <h3 className="text-2xl font-bold text-indigo-950">Calculate Your Cover</h3>
            <p className="text-slate-500">Find out how much cover you might need by using our simple online calculator. It takes into account your outstanding mortgage, loans, and family needs.</p>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors">Calculate your cover here</button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-indigo-950">Personal Service</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We have tracked down the very best protection insurance advisers in South Africa to ensure you have access to great advice and the best products from the leading insurers.
              </p>
              <p className="text-slate-500">Instead of pushy sales people, our advisers offer a more personalised service to guide you through the process.</p>
            </div>
            <div className="bg-slate-950 p-12 rounded-[3rem] text-white space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold text-orange-500">The Service You'll Receive</h3>
              <div className="flex text-orange-400 gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-indigo-100 italic leading-relaxed">
                "Outstanding service and knowledgeable customer service rep. I received a call as promised in my email. Marie was very knowledgeable in her subject matter, she took some basic details and was very polite and courteous in her manner."
              </p>
              <div>
                <p className="font-bold">N Marsden</p>
                <p className="text-xs text-indigo-400 uppercase tracking-widest">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
