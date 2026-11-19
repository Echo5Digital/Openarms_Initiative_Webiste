const { sendTeamNotification, buildNotificationHtml } = require('@/lib/mailer');

const ECHO5_API_URL = process.env.ECHO5_API_URL;
const ECHO5_TENANT_KEY = process.env.ECHO5_TENANT_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

async function verifyRecaptcha(token, remoteIp) {
  if (!RECAPTCHA_SECRET_KEY) {
    console.error('RECAPTCHA_SECRET_KEY is not configured; rejecting submission.');
    return false;
  }
  if (!token || typeof token !== 'string') return false;

  try {
    const params = new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY,
      response: token,
    });
    if (remoteIp) params.set('remoteip', remoteIp);

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const verifyData = await verifyRes.json();

    return Boolean(verifyData.success) && (typeof verifyData.score !== 'number' || verifyData.score >= RECAPTCHA_SCORE_THRESHOLD);
  } catch (err) {
    console.error('reCAPTCHA verification request failed:', err);
    return false;
  }
}

export async function POST(request) {
  const body = await request.json();

  const remoteIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const isHuman = await verifyRecaptcha(body.recaptchaToken, remoteIp);
  if (!isHuman) {
    return Response.json({ error: 'CAPTCHA verification failed. Please try again.' }, { status: 403 });
  }

  const fullName = body.name || `${body.firstName || ''} ${body.lastName || ''}`.trim();
  const [firstName, ...rest] = fullName.split(' ');

  const payload = {
    first_name: body.firstName || firstName || undefined,
    last_name: body.lastName || rest.join(' ') || undefined,
    email: body.email,
    phone: body.phone,
    campaign_name: body.topic || body.service,
    source: 'website',
    form_id: 'oai-nextjs',
  };

  const res = await fetch(`${ECHO5_API_URL}/api/ingest/lead`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Tenant-Key': ECHO5_TENANT_KEY,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    return Response.json({ error: data.error || 'Something went wrong. Please try again.' }, { status: res.status });
  }

  const leadId = data.leadId;

  const noteLines = [
    body.insurance && `Insurance / Payment: ${body.insurance}`,
    body.contactMethod && `Preferred Contact Method: ${body.contactMethod}`,
    body.message && `Message: ${body.message}`,
  ].filter(Boolean);

  if (leadId && noteLines.length > 0) {
    await fetch(`${ECHO5_API_URL}/api/leads/${leadId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Tenant-Key': ECHO5_TENANT_KEY,
      },
      body: JSON.stringify({ notes: noteLines.join('\n') }),
    }).catch(() => {});
  }

  {
    const displayName = fullName || body.email;
    const rows = [
      { label: 'Name', value: displayName },
      { label: 'Email', value: body.email },
      { label: 'Phone', value: body.phone },
      { label: 'Service', value: body.topic || body.service },
      { label: 'Payment/Insurance', value: body.insurance },
      { label: 'Preferred Contact Method', value: body.contactMethod },
      { label: 'Message', value: body.message },
    ];

    sendTeamNotification({
      subject: `New Lead Submitted — ${displayName}`,
      text: [
        `A new lead was submitted on the website.`,
        ``,
        ...rows.map((r) => `${r.label}: ${r.value || '—'}`),
      ].join('\n'),
      html: buildNotificationHtml({
        heading: 'New Lead Submitted',
        intro: 'A new lead was submitted through the website.',
        rows,
      }),
    }).catch(() => {});
  }

  return Response.json({ id: leadId });
}
