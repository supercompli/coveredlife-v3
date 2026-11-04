export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const DEFAULT_FOOTER = 'CoveredLife &middot; coveredlife.co.za &middot; Independent South African life insurance comparison';

export function renderEmailLink({ href, label }: { href: string; label: string }) {
  return `<a href="${escapeHtml(href)}" style="color:#4338ca;text-decoration:none;">${escapeHtml(label)}</a>`;
}

export function renderEmailButton({ href, label }: { href: string; label: string }) {
  return `<table role="presentation" cellpadding="0" cellspacing="0">
  <tr>
    <td style="border-radius:10px;background:linear-gradient(135deg,#fb923c,#ea580c);">
      <a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">
        ${escapeHtml(label)}
      </a>
    </td>
  </tr>
</table>`;
}

// Row values are trusted HTML, so callers must escape any user input before passing it in.
export function renderEmailDetails(rows: { label: string; html: string }[]) {
  const body = rows
    .map((row, i) => {
      const border = i < rows.length - 1 ? 'border-bottom:1px solid #e2e8f0;' : '';
      return `<tr>
    <td style="padding:14px 18px;width:130px;font-size:13px;color:#64748b;vertical-align:top;${border}">${escapeHtml(row.label)}</td>
    <td style="padding:14px 18px;font-size:15px;color:#1e293b;${border}">${row.html}</td>
  </tr>`;
    })
    .join('\n  ');

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border:1px solid #e2e8f0;border-radius:12px;">
  ${body}
</table>`;
}

// `content` and `footer` are trusted HTML; `preheader` is plain text and is escaped here.
export function renderEmailShell({ preheader, content, footer = DEFAULT_FOOTER }: { preheader: string; content: string; footer?: string }) {
  return `<!doctype html>
<html lang="en-ZA">
  <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${escapeHtml(preheader)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#4338ca 100%);padding:32px 40px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#4f46e5);text-align:center;vertical-align:middle;">
                      <span style="color:#ffffff;font-size:20px;font-weight:bold;line-height:44px;">&#10003;</span>
                    </td>
                    <td style="padding-left:14px;">
                      <span style="color:#ffffff;font-size:22px;font-weight:bold;">CoveredLife</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:40px;">
                ${content}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-size:13px;color:#64748b;">
                  ${footer}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
