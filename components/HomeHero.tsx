'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/data';

export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image
          src={HERO_SLIDES[currentSlide].url}
          fill
          sizes="100vw"
          quality={55}
          className="object-cover opacity-50"
          alt="Hero background"
          priority={currentSlide === 0}
          loading={currentSlide === 0 ? undefined : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      <div className="relative h-full max-w-[980px] mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Life Insurance. <span className="text-orange-500">Quoted Instantly.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            Get an instant life insurance quote and compare cover designed around your health, your needs and your budget.
          </p>
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/quote" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-orange-950/20">
                Get My Instant Quote
              </a>
              <div className="flex items-center gap-3 px-4">
                <div className="flex text-orange-400">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <div className="text-white">
                  <p className="font-bold leading-none">4.9/5</p>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">Independent Reviews</p>
                </div>
              </div>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              No obligation &bull; Takes a few minutes &bull; Chronic conditions welcome
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
