const nodemailer = require('nodemailer');

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === 'true'
    : Number(SMTP_PORT) === 465;

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function buildNotificationHtml({ heading, intro, rows, footerNote }) {
  const visibleRows = rows.filter((row) => row && row.value);
  const rowsHtml = visibleRows
    .map(
      ({ label, value }, i) => `
        <tr style="background:${i % 2 === 0 ? '#ffffff' : '#f7f9fc'};">
          <td style="padding:13px 10px 13px 20px;font-size:11.5px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#7c8794;width:170px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:13px 20px 13px 10px;font-size:15px;line-height:1.5;color:#1a1f29;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Chicago',
  });

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#eef2f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f7;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 28px rgba(16,24,40,0.10);">
            <tr>
              <td style="background:linear-gradient(135deg,#0170ED 0%,#00AFF7 100%);padding:30px 32px 26px;">
                <p style="margin:0 0 10px;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,0.75);">Open Arms Initiative &middot; Website Lead</p>
                <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#ffffff;line-height:1.3;">${escapeHtml(heading)}</h1>
                <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.92);line-height:1.5;">${escapeHtml(intro)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 0 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:4px 32px 26px;">
                <p style="margin:18px 0 0;padding-top:16px;border-top:1px solid #eef0f3;font-size:12.5px;color:#9aa1b0;">Submitted ${escapeHtml(timestamp)} CT${footerNote ? ` &middot; ${escapeHtml(footerNote)}` : ''}</p>
              </td>
            </tr>
          </table>
          <p style="margin:20px 0 0;font-size:11.5px;color:#9aa5b1;">Automated notification from the Open Arms Initiative website.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendTeamNotification({ subject, text, html }) {
  const to = (process.env.TEAM_NOTIFICATION_EMAIL || '')
    .split(',')
    .map((addr) => addr.trim())
    .filter(Boolean);
  const cc = (process.env.TEAM_NOTIFICATION_CC || '')
    .split(',')
    .map((addr) => addr.trim())
    .filter(Boolean);
  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
  const fromName = process.env.SMTP_FROM_NAME;
  const from = fromName ? `"${fromName}" <${fromAddress}>` : fromAddress;
  const t = getTransporter();

  if (!t || to.length === 0) {
    console.warn('[mailer] Skipping notification — SMTP or TEAM_NOTIFICATION_EMAIL not configured:', subject);
    return;
  }

  try {
    await t.sendMail({
      from,
      to,
      cc: cc.length ? cc : undefined,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error('[mailer] Failed to send notification:', err.message);
  }
}

module.exports = { sendTeamNotification, buildNotificationHtml };
