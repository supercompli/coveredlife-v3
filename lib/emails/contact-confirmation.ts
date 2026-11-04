import { escapeHtml } from './layout';

export function renderContactConfirmationEmail({ name }: { name: string }) {
  const safeName = escapeHtml(name.split(/\s+/)[0] || name);
  const subject = "We've received your message | CoveredLife";

  const text = `Hi ${safeName},

Thanks for reaching out to CoveredLife. We've received your message and one of our FSCA-authorised advisers will get back to you within one business day.

In the meantime, feel free to browse our guides at https://coveredlife.co.za/guides.

Kind regards,
The CoveredLife Team`;

  const html = `<!doctype html>
<html lang="en-ZA">
  <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
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
                <h1 style="margin:0 0 16px;font-size:22px;color:#1e1b4b;">Hi ${safeName}, thanks for reaching out.</h1>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#334155;">
                  We've received your message and one of our <strong>FSCA-authorised advisers</strong> will get back to you within one business day.
                </p>
                <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#334155;">
                  In the meantime, feel free to browse our guides to compare South African life insurance options.
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-radius:10px;background:linear-gradient(135deg,#fb923c,#ea580c);">
                      <a href="https://coveredlife.co.za/guides" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">
                        Browse our guides
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-size:13px;color:#64748b;">
                  CoveredLife &middot; coveredlife.co.za &middot; Independent South African life insurance comparison
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}
