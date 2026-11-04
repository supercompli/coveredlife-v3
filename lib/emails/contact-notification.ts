import { escapeHtml, renderEmailButton, renderEmailDetails, renderEmailLink, renderEmailShell } from './layout';

export function renderContactNotificationEmail({ name, email, message }: { name: string; email: string; message: string }) {
  const firstName = name.split(/\s+/)[0] || name;
  const receivedAt = new Date().toLocaleString('en-ZA', {
    timeZone: 'Africa/Johannesburg',
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const subject = `New enquiry from ${name.replace(/[\r\n]/g, ' ')} via CoveredLife contact form`;

  const text = `New enquiry from the CoveredLife contact form

Name: ${name}
Email: ${email}
Received: ${receivedAt} (SAST)

Message:
${message}

Reply to this email to respond to ${name} directly.`;

  const content = `<p style="margin:0 0 8px;font-size:12px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#ea580c;">New enquiry</p>
                <h1 style="margin:0 0 24px;font-size:22px;color:#1e1b4b;">${escapeHtml(name)} got in touch.</h1>
                ${renderEmailDetails([
                  { label: 'Name', html: escapeHtml(name) },
                  { label: 'Email', html: renderEmailLink({ href: `mailto:${email}`, label: email }) },
                  { label: 'Received', html: `${escapeHtml(receivedAt)} SAST` },
                ])}
                <p style="margin:0 0 8px;font-size:13px;color:#64748b;">Message</p>
                <div style="margin:0 0 28px;padding:18px 20px;background-color:#f8fafc;border-left:4px solid #6366f1;border-radius:8px;font-size:16px;line-height:1.6;color:#334155;white-space:pre-wrap;">${escapeHtml(message)}</div>
                ${renderEmailButton({
                  href: `mailto:${email}?subject=${encodeURIComponent('Re: your CoveredLife enquiry')}`,
                  label: `Reply to ${firstName}`,
                })}`;

  const html = renderEmailShell({
    preheader: `${name} (${email}) sent a new enquiry via the contact form.`,
    content,
    footer: `Sent from the contact form at coveredlife.co.za. Replying to this email goes straight to ${escapeHtml(name)}.`,
  });

  return { subject, html, text };
}
