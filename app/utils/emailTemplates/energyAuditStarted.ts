function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function energyAuditStarted(name: string): string {
  const safeName = escapeHtml(name || "there");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style type="text/css">
      .cta-button:hover {
        background-color: #25682a !important;
        box-shadow: 0 8px 20px rgba(46, 125, 50, 0.24) !important;
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background-color:#F3F4F6; font-family:Arial, Helvetica, sans-serif; color:#111827;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F3F4F6; margin:0; padding:32px 12px;">
      <tr>
        <td align="center" style="padding:0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:100%; max-width:600px; background-color:#FFFFFF; border:1px solid #E5E7EB; border-collapse:collapse;">
            <tr>
              <td style="padding:32px 30px 24px 30px; text-align:center;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                  <tr>
                    <td style="font-size:28px; line-height:34px; font-weight:700; color:#2E7D32; letter-spacing:0.2px; text-align:center;">
                      EcoRetrofit-AI
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 40px 36px 40px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                  <tr>
                    <td style="font-size:19px; line-height:30px; font-weight:500; color:#111827; text-align:center; padding-bottom:14px;">
                      Hi ${safeName}. Your energy audit has officially started.
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size:16px; line-height:27px; color:#111827; text-align:center; padding-bottom:28px;">
                      Our AI has begun ingesting your building data and evaluating operational, structural, and usage signals to identify the highest-impact retrofit opportunities.
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="320" style="width:320px; max-width:100%; border-collapse:separate;">
                        <tr>
                          <td style="background-color:#2E7D32; border-radius:999px; text-align:center;">
                            <a href="{{DASHBOARD_URL}}" class="cta-button" style="display:block; width:100%; box-sizing:border-box; padding:15px 24px; color:#FFFFFF; font-size:14px; line-height:16px; text-decoration:none; font-weight:700; letter-spacing:0.3px; background-color:#2E7D32; border-radius:999px;">Access Energy Dashboard</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 30px 24px 30px; border-top:1px solid #E5E7EB; background-color:#FFFFFF;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                  <tr>
                    <td style="font-size:11px; line-height:17px; color:#9CA3AF; text-align:center;">
                      Durham College Capstone Project<br />
                      EcoRetrofit-AI, Faculty of Science, Engineering and Information Technology<br />
                      Oshawa, Ontario, Canada
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
