'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, HeartPulse, Wallet, Briefcase, Building2, House, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { QUOTE_EDUCATION_LEVELS, type QuoteRequest } from '@/lib/quote';

type QuoteState = QuoteRequest;
type Product = QuoteState['products'][number];
type Gender = QuoteState['gender'];
type Education = QuoteState['education'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PRODUCTS: { id: Product; icon: typeof ShieldCheck; text: string }[] = [
  { id: 'Life Cover', icon: ShieldCheck, text: 'A lump sum for your loved ones if you pass away.' },
  { id: 'Critical Illness', icon: HeartPulse, text: 'A lump sum if you are diagnosed with a covered serious illness.' },
  { id: 'Disability Cover', icon: Wallet, text: 'Financial protection if illness or injury leaves you disabled.' },
  { id: 'Bond Protection', icon: House, text: 'Cover designed to help settle your home loan after a covered event.' },
  { id: 'Key Person', icon: Briefcase, text: 'A payout for your business if a key employee dies or becomes disabled.' },
  { id: 'Business Assurance', icon: Building2, text: 'Cover that helps protect business ownership, debts, and continuity.' }
];

const EDUCATION_OPTIONS: readonly Education[] = QUOTE_EDUCATION_LEVELS;

function OptionButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`px-5 py-3 rounded-xl border-2 font-bold transition-colors ${
        selected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-200 text-slate-600 hover:border-indigo-200'
      }`}
    >
      {label}
    </button>
  );
}

export function QuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3 | 'done'>(1);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState<QuoteState>({
    products: [],
    age: 30,
    gender: 'Man',
    smoker: false,
    married: true,
    monthlyIncome: 15000,
    education: 'Matric',
    fullName: '',
    phone: '',
    email: ''
  });

  const canSubmit = data.fullName.trim().length > 0 && data.phone.trim().length > 0 && EMAIL_RE.test(data.email.trim());

  function update<K extends keyof QuoteState>(key: K, value: QuoteState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function submitQuote() {
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Something went wrong. Please try again.');
      }

      setStatus('idle');
      setStep('done');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  function toggleProduct(product: Product) {
    setData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product]
    }));
  }

  const productList = data.products.length ? data.products.join(', ') : 'cover';

  const whatsAppMessage = [
    `Hi CoveredLife, I'd like a quote for ${productList}.`,
    `My name is ${data.fullName}, phone ${data.phone}, email ${data.email}.`,
    `I am a ${data.age} year old ${data.gender} who ${data.smoker ? 'Smokes' : "Doesn't smoke"} and is ${data.married ? 'Married' : 'Not married'}.`,
    `I earn R${data.monthlyIncome.toLocaleString('en-ZA')} per month before tax.`,
    `My highest level of education is ${data.education}.`
  ].join(' ');

  const whatsAppHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {step !== 'done' && (
          <div className="mb-8 space-y-2">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Step {step} of 3</p>
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-1.5 flex-1 rounded-full ${step >= s ? 'bg-indigo-600' : 'bg-indigo-100'}`} />
              ))}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-indigo-950">Estimate details</h1>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">What would you like to protect?</h2>
                <p className="text-sm text-slate-400">Select all that apply.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {PRODUCTS.map((p) => {
                    const selected = data.products.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleProduct(p.id)}
                        className={`relative text-left p-6 rounded-2xl border-2 transition-all space-y-3 ${
                          selected ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 bg-white hover:border-indigo-200'
                        }`}
                      >
                        {selected && <CheckCircle2 className="absolute top-4 right-4 w-5 h-5 text-indigo-600" />}
                        <p.icon className={`w-7 h-7 ${selected ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <p className="font-bold text-slate-900">{p.id}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{p.text}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                disabled={data.products.length === 0}
                onClick={() => setStep(2)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                Continue <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-950">Personal details</h1>
                <p className="text-slate-500">Tell us about yourself</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">How old are you?</h2>
                <input
                  type="number"
                  value={data.age}
                  onChange={(e) => update('age', Number(e.target.value))}
                  className="w-full max-w-[10rem] px-4 py-3 rounded-xl border border-slate-200 text-xl font-bold text-indigo-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">Are you a man or a woman?</h2>
                <div className="flex flex-wrap gap-3">
                  {(['Man', 'Woman'] as Gender[]).map((g) => (
                    <OptionButton key={g} label={g} selected={data.gender === g} onClick={() => update('gender', g)} />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">Do you smoke?</h2>
                <div className="flex flex-wrap gap-3">
                  <OptionButton label="Doesn't smoke" selected={!data.smoker} onClick={() => update('smoker', false)} />
                  <OptionButton label="Smokes" selected={data.smoker} onClick={() => update('smoker', true)} />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">What is your marital status?</h2>
                <div className="flex flex-wrap gap-3">
                  <OptionButton label="Married" selected={data.married} onClick={() => update('married', true)} />
                  <OptionButton label="Not married" selected={!data.married} onClick={() => update('married', false)} />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">How much do you earn per month before tax?</h2>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-slate-400">R</span>
                  <input
                    type="number"
                    step={500}
                    value={data.monthlyIncome}
                    onChange={(e) => update('monthlyIncome', Number(e.target.value))}
                    className="w-full max-w-xs px-4 py-3 rounded-xl border border-slate-200 text-xl font-bold text-indigo-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">What is your highest level of education?</h2>
                <div className="flex flex-wrap gap-3">
                  {EDUCATION_OPTIONS.map((edu) => (
                    <OptionButton key={edu} label={edu} selected={data.education === edu} onClick={() => update('education', edu)} />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold px-4 py-4"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all"
                >
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-indigo-950">Contact details</h1>
                <p className="text-slate-500">Where should we send your quote?</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">What's your full name?</h2>
                <input
                  type="text"
                  value={data.fullName}
                  onChange={(e) => update('fullName', e.target.value)}
                  placeholder="Jane Dlamini"
                  className="w-full max-w-sm px-4 py-3 rounded-xl border border-slate-200 text-lg font-bold text-indigo-950 placeholder:font-normal placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">What's your phone number?</h2>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="083 575 6352"
                  className="w-full max-w-sm px-4 py-3 rounded-xl border border-slate-200 text-lg font-bold text-indigo-950 placeholder:font-normal placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-bold text-slate-800">What's your email address?</h2>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full max-w-sm px-4 py-3 rounded-xl border border-slate-200 text-lg font-bold text-indigo-950 placeholder:font-normal placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold px-4 py-4"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button
                  type="button"
                  disabled={!canSubmit || status === 'sending'}
                  onClick={submitQuote}
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all"
                >
                  {status === 'sending' ? 'Sending...' : 'Get My Quote'} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              {!canSubmit && (
                <p className="text-sm text-slate-400">Please fill in your name, phone number, and a valid email to continue.</p>
              )}
              {status === 'error' && (
                <p role="alert" className="text-sm font-semibold text-orange-600">{errorMessage}</p>
              )}
            </motion.div>
          )}

          {step === 'done' && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8 py-12"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-indigo-950">You're all set!</h1>
              <p className="text-slate-500 max-w-md mx-auto">
                Send your details to one of our FSCA-authorised advisers on WhatsApp and they'll come back to you with your personalised quote.
              </p>
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc59] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-green-950/10"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Get My Quote on WhatsApp
              </a>
              <div>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-sm font-bold text-slate-400 hover:text-indigo-600"
                >
                  Edit my details
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
