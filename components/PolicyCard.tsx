import { ArrowRight } from 'lucide-react';
import { Policy } from '@/lib/types';

export function PolicyCard({ policy }: { policy: Policy }) {
  return (
    <div className="group relative bg-slate-50 rounded-[2rem] p-8 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
      <div className="space-y-6">
        <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-widest rounded-full">
          {policy.category}
        </span>
        <h3 className="text-xl font-bold text-indigo-950 leading-tight group-hover:text-indigo-600 transition-colors">
          {policy.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {policy.description}
        </p>

        <div className="flex items-center justify-between pt-4">
          <details className="group/details">
            <summary className="cursor-pointer list-none text-xs font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Read more
            </summary>
            <ul className="absolute left-8 right-8 mt-4 space-y-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              {policy.detailedDescription.map((desc, i) => (
                <li key={i} className="flex gap-2 text-xs text-slate-600">
                  <span className="text-green-500 font-bold">✓</span>
                  {desc}
                </li>
              ))}
            </ul>
          </details>
          <a
            href={policy.href}
            aria-label={`Learn more about ${policy.title}`}
            className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
