import { WHATSAPP_LINK } from '../data';
import { escapeHtml, renderEmailButton, renderEmailShell } from './layout';

const NEXT_STEPS = [
  'One of our FSCA-authorised advisers reviews your details.',
  'They compare South African cover options that suit your situation.',
  'You receive a personalised quote, with no obligation to buy.',
];

export function renderQuoteConfirmationEmail({ name, products }: { name: string; products: string[] }) {
  const firstName = name.split(/\s+/)[0] || name;
  const subject = "We've received your quote request | CoveredLife";

  const text = `Hi ${firstName},

Thanks for requesting a quote from CoveredLife. We've received your details and one of our FSCA-authorised advisers will come back to you within one business day.

You asked about: ${products.join(', ')}

What happens next:
${NEXT_STEPS.map((step, i) => `${i + 1}. ${step}`).join('\n')}

Prefer to chat now? Message us on WhatsApp: ${WHATSAPP_LINK}

Kind regards,
The CoveredLife Team`;

  const productPills = products
    .map(
      (product) =>
        `<span style="display:inline-block;margin:0 6px 6px 0;padding:4px 12px;border-radius:999px;background-color:#eef2ff;color:#4338ca;font-size:13px;font-weight:bold;">${escapeHtml(product)}</span>`,
    )
    .join('');

  const steps = NEXT_STEPS.map(
    (step, i) => `<tr>
                    <td style="width:36px;vertical-align:top;padding:0 0 14px;">
                      <span style="display:inline-block;width:26px;height:26px;border-radius:13px;background-color:#4f46e5;color:#ffffff;font-size:13px;font-weight:bold;line-height:26px;text-align:center;">${i + 1}</span>
                    </td>
                    <td style="vertical-align:top;padding:2px 0 14px;font-size:15px;line-height:1.5;color:#334155;">${escapeHtml(step)}</td>
                  </tr>`,
  ).join('\n');

  const content = `<h1 style="margin:0 0 16px;font-size:22px;color:#1e1b4b;">Hi ${escapeHtml(firstName)}, your quote request is in.</h1>
                <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#334155;">
                  Thanks for requesting a quote. One of our <strong>FSCA-authorised advisers</strong> will come back to you within one business day.
                </p>
                <p style="margin:0 0 8px;font-size:13px;color:#64748b;">You asked about</p>
                <div style="margin:0 0 28px;">${productPills}</div>
                <p style="margin:0 0 14px;font-size:13px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#ea580c;">What happens next</p>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 16px;">
                  ${steps}
                </table>
                <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#334155;">
                  Prefer to chat now? Send us a message and we'll pick it up from there.
                </p>
                ${renderEmailButton({ href: WHATSAPP_LINK, label: 'Message us on WhatsApp' })}`;

  const html = renderEmailShell({
    preheader: "We've received your details and an adviser will be in touch within one business day.",
    content,
  });

  return { subject, html, text };
}
