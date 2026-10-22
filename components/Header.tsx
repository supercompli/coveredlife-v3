import { ChevronDown, Menu } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK, WHATSAPP_NUMBER_FORMATTED } from '@/lib/data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">CL</div>
              <span className="text-2xl font-bold tracking-tight text-indigo-900">CoveredLife</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors py-8">
                  {item.label}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                {item.groups ? (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white border border-slate-100 shadow-2xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    <div className="grid grid-cols-2 gap-8">
                      {item.groups.map((group) => (
                        <div key={group.title} className="space-y-1">
                          <h4 className="px-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">{group.title}</h4>
                          {group.options.map((opt) => (
                            <a key={opt.title} href={opt.href} className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                              {opt.title}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    {item.options?.map((opt) => (
                      <a key={opt.title} href={opt.href} className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                        {opt.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">We're Here to Help</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with us on WhatsApp at ${WHATSAPP_NUMBER_FORMATTED} (opens in a new tab)`}
                className="inline-flex items-center gap-1.5 text-lg font-bold text-indigo-900 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
                {WHATSAPP_NUMBER_FORMATTED}
              </a>
            </div>
            <a href="/quote" className="bg-gradient-to-br from-orange-400 to-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all hover:-translate-y-0.5 active:translate-y-0">
              Get a Quote
            </a>
          </div>

          <details className="lg:hidden">
            <summary className="list-none cursor-pointer p-2 text-slate-600" aria-label="Open menu">
              <Menu />
            </summary>
            <div className="fixed inset-0 z-40 overflow-y-auto bg-white pt-24 px-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="py-4 border-b border-slate-50">
                  <h3 className="font-bold text-indigo-900 mb-2">{item.label}</h3>
                  {item.groups ? (
                    <div className="space-y-4">
                      {item.groups.map((group) => (
                        <div key={group.title} className="grid gap-2">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{group.title}</p>
                          {group.options.map((opt) => (
                            <a key={opt.title} href={opt.href} className="text-sm text-slate-500 py-1">{opt.title}</a>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-2">
                      {item.options?.map((opt) => (
                        <a key={opt.title} href={opt.href} className="text-sm text-slate-500 py-1">{opt.title}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-8 space-y-6 pb-8">
                <div className="text-center">
                  <p className="text-xs text-slate-400 mb-1">MESSAGE US ON WHATSAPP</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with us on WhatsApp at ${WHATSAPP_NUMBER_FORMATTED} (opens in a new tab)`}
                    className="inline-flex items-center gap-2 text-xl font-bold text-indigo-900 hover:text-[#25D366] transition-colors"
                  >
                    <WhatsAppIcon className="w-6 h-6 text-[#25D366] shrink-0" />
                    {WHATSAPP_NUMBER_FORMATTED}
                  </a>
                </div>
                <a href="/quote" className="block w-full text-center bg-indigo-600 text-white py-4 rounded-xl font-bold">Start Your Quote</a>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
