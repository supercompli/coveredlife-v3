export function PrivacyPolicyContent() {
  return (
    <div className="bg-white">
      <header className="bg-slate-950 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 mt-4">Last updated: 2026</p>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-slate-600 leading-relaxed">
          <p>
            Covered Life is a division of Covered Financial Services (Pty) Ltd, an authorised Financial Services Provider (FSP 54871) ("CoveredLife", "we", "us"). This policy explains how we collect, use and protect your personal information when you use this website or request a quote, in line with the Protection of Personal Information Act (POPIA).
          </p>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Information we collect</h2>
            <p>
              When you request a quote or contact us, we may collect details such as your name, contact number, email address, age, health and lifestyle information, and income — only what's needed to match you with suitable cover.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">How we use your information</h2>
            <p>
              We use your information to connect you with FSCA-authorised advisers, generate and follow up on quotes, respond to enquiries, and improve our service. We do not sell your information to third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Sharing your information</h2>
            <p>
              We share your details only with the FSCA-regulated advisers and insurers involved in preparing your quote or policy, and with service providers who help us operate this website, all under appropriate confidentiality obligations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Your rights</h2>
            <p>
              Under POPIA, you can ask us what personal information we hold about you, request corrections, or ask us to delete it, subject to any legal or regulatory retention requirements. Contact us using the details on our{' '}
              <a href="/contact" className="text-indigo-600 font-bold hover:underline">Contact page</a> to exercise these rights.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-indigo-950">Contact us</h2>
            <p>
              If you have questions about this policy or how your information is handled, please get in touch via our{' '}
              <a href="/contact" className="text-indigo-600 font-bold hover:underline">Contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
