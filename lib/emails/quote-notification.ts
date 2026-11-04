import type { QuoteRequest } from '../quote';
import { escapeHtml, renderEmailButton, renderEmailDetails, renderEmailLink, renderEmailShell } from './layout';

export function renderQuoteNotificationEmail(quote: QuoteRequest) {
  const firstName = quote.fullName.split(/\s+/)[0] || quote.fullName;
  const income = `R${quote.monthlyIncome.toLocaleString('en-ZA')} per month`;
  const smoker = quote.smoker ? 'Smokes' : "Doesn't smoke";
  const marital = quote.married ? 'Married' : 'Not married';
  const receivedAt = new Date().toLocaleString('en-ZA', {
    timeZone: 'Africa/Johannesburg',
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const productSummary = quote.products.length <= 2 ? quote.products.join(' & ') : `${quote.products.length} products`;
  const subject = `New quote request from ${quote.fullName.replace(/[\r\n]/g, ' ')} (${productSummary})`;

  const text = `New quote request from the CoveredLife website

Products: ${quote.products.join(', ')}

Name: ${quote.fullName}
Phone: ${quote.phone}
Email: ${quote.email}

Age: ${quote.age}
Gender: ${quote.gender}
Smoker: ${smoker}
Marital status: ${marital}
Monthly income (before tax): ${income}
Education: ${quote.education}
Received: ${receivedAt} (SAST)

Reply to this email to respond to ${quote.fullName} directly.`;

  const products = quote.products
    .map(
      (product) =>
        `<span style="display:inline-block;margin:0 6px 6px 0;padding:4px 12px;border-radius:999px;background-color:#eef2ff;color:#4338ca;font-size:13px;font-weight:bold;">${escapeHtml(product)}</span>`,
    )
    .join('');

  const content = `<p style="margin:0 0 8px;font-size:12px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#ea580c;">New quote request</p>
                <h1 style="margin:0 0 24px;font-size:22px;color:#1e1b4b;">${escapeHtml(quote.fullName)} wants a quote.</h1>
                ${renderEmailDetails([
                  { label: 'Interested in', html: products },
                  { label: 'Name', html: escapeHtml(quote.fullName) },
                  { label: 'Phone', html: renderEmailLink({ href: `tel:${quote.phone.replace(/[^\d+]/g, '')}`, label: quote.phone }) },
                  { label: 'Email', html: renderEmailLink({ href: `mailto:${quote.email}`, label: quote.email }) },
                  { label: 'Age', html: String(quote.age) },
                  { label: 'Gender', html: escapeHtml(quote.gender) },
                  { label: 'Smoker', html: smoker },
                  { label: 'Marital status', html: marital },
                  { label: 'Monthly income', html: `${escapeHtml(income)} <span style="color:#64748b;">(before tax)</span>` },
                  { label: 'Education', html: escapeHtml(quote.education) },
                  { label: 'Received', html: `${escapeHtml(receivedAt)} SAST` },
                ])}
                ${renderEmailButton({
                  href: `mailto:${quote.email}?subject=${encodeURIComponent('Your CoveredLife quote')}`,
                  label: `Reply to ${firstName}`,
                })}`;

  const html = renderEmailShell({
    preheader: `${quote.fullName} requested a quote for ${productSummary}.`,
    content,
    footer: `Sent from the quote form at coveredlife.co.za. Replying to this email goes straight to ${escapeHtml(quote.fullName)}.`,
  });

  return { subject, html, text };
}
