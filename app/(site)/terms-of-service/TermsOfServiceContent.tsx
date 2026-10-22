export function TermsOfServiceContent() {
  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Terms of Service</h1>
          <p className="text-slate-400 mt-4">Last updated: 2026</p>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-slate-600 leading-relaxed">
          <p>
            These terms govern your use of this website, operated by Covered Life, a division of Covered Financial Services (Pty) Ltd, an authorised Financial Services Provider (FSP 54871) ("CoveredLife", "we", "us"). By using this site or submitting a quote request, you agree to these terms.
          </p>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Who we are</h2>
            <p>
              CoveredLife.co.za is an independent website created to help customers find the most suitable protection insurance policy. We do not provide financial advice ourselves. We work with FSCA-regulated businesses who search and compare policies from leading South African insurers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Our quotation service</h2>
            <p>
              Requesting a quote through this website is free and places you under no obligation to purchase any policy. Quotes and information provided through the site are estimates; final terms, premiums and underwriting decisions are set by the relevant insurer and confirmed FSCA-authorised adviser.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Accuracy of information</h2>
            <p>
              You agree to provide accurate and complete information when requesting a quote. Inaccurate information may affect the cover, premiums, or claims decisions offered by an insurer.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Policy terms and conditions</h2>
            <p>
              Benefits, eligibility, underwriting, limits, exclusions, and cashback conditions are subject to the applicable policy terms and conditions issued by the relevant insurer, not by CoveredLife.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Continued use of this website after changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Contact us</h2>
            <p>
              If you have questions about these terms, please get in touch via our{' '}
              <a href="/contact" className="text-indigo-600 font-bold hover:underline">Contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
