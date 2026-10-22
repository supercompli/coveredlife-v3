import type { Metadata } from 'next';
import { Compass, Wallet, ShieldCheck } from 'lucide-react';
import { POLICIES } from '@/lib/data';
import { HomeHero } from '@/components/HomeHero';
import { PolicyCard } from '@/components/PolicyCard';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="py-20 bg-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Think life insurance will be too expensive? Check first.
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you're healthy, living with a chronic condition, have previously been declined, or simply think you're paying too much, CoveredLife helps you find a better-fit life insurance option.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                <Compass className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-indigo-950">Independent Advice</h2>
              <p className="text-slate-500 leading-relaxed">We don't push products - we help you understand them. Always tailored to your specific needs and budget.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
                <Wallet className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-indigo-950">No Fees</h2>
              <p className="text-slate-500 leading-relaxed">You'll never be charged for our advice. If we don't help you find the right cover, we don't get paid.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-indigo-950">Absolute Protection</h2>
              <p className="text-slate-500 leading-relaxed">We make sure your cover matches your actual risk, avoiding any nasty surprises when you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-950 tracking-tight">3 Steps to Confidence</h2>
            <p className="text-slate-600">Getting protected is easier — and more important — than you might think.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 hidden lg:block" />
            {[
              { step: '1', title: 'Start your quote', text: 'Fill in basic details and speak with one of our FSCA-authorised advisers.' },
              { step: '2', title: 'Secure your policy', text: 'We research the whole market and present tailored, impartial options.' },
              { step: '3', title: 'Be confident', text: 'Assurance that you have made the best decision for your future.' }
            ].map((item) => (
              <div key={item.step} className="relative z-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">{item.step}</div>
                <h3 className="text-xl font-bold text-indigo-950">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-indigo-950 mb-12">Insurance for you or your business...</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {POLICIES.map((policy) => (
              <div key={policy.title}>
                <PolicyCard policy={policy} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-950 tracking-tight">The Covered Life Promise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: '🧭',
                title: 'Independent Advice',
                text: "We connect you with advisers who compare life insurance providers across the whole South African market. We're not tied to any insurer, so you see genuine options."
              },
              {
                icon: '💰',
                title: 'No Fees',
                text: "You'll never be charged for advice. Your adviser is paid by insurers only when they find you the right cover."
              },
              {
                icon: '🛡️',
                title: 'Absolute Protection',
                text: 'Your policy is structured correctly and matched to your actual risk, so there are no nasty surprises when you need it most.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto border border-slate-100 text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-950">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
