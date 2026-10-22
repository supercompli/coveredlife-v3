'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, Clock } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER_FORMATTED } from '@/lib/data';

export function ContactContent() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Something went wrong. Please try again.');
      }

      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80')" }} />
          <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
        </div>
        <div className="max-w-[980px] mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-400/30 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">Contact Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            We're here to <br />
            <span className="text-orange-500">help, however suits you</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[980px] mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-950">Message us on WhatsApp</h3>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-indigo-600 hover:text-orange-600 transition-colors block">{WHATSAPP_NUMBER_FORMATTED}</a>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                Mon-Fri: 9am - 7pm
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              For the fastest response, message us on WhatsApp. For general enquiries, feedback, or anything that isn't urgent, send us a message and we'll get back to you.
            </p>
          </div>

          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 space-y-6">
            <h3 className="text-2xl font-bold text-indigo-950">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                <input id="name" name="name" type="text" required maxLength={200} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                <input id="email" name="email" type="email" required maxLength={200} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                <textarea id="message" name="message" required maxLength={5000} rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'sent' && (
                <p className="text-sm font-semibold text-green-600">Thanks — your message has been sent. We'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="text-sm font-semibold text-orange-600">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
