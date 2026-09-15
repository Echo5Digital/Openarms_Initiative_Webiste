const ECHO5_API_URL = process.env.ECHO5_API_URL;
const ECHO5_TENANT_KEY = process.env.ECHO5_TENANT_KEY;

export async function POST(request) {
  const body = await request.json();

  const fullName = body.name || `${body.firstName || ''} ${body.lastName || ''}`.trim();
  const [firstName, ...rest] = fullName.split(' ');

  const payload = {
    first_name: body.firstName || firstName || undefined,
    last_name: body.lastName || rest.join(' ') || undefined,
    email: body.email,
    phone: body.phone,
    campaign_name: body.service || body.topic,
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

  return Response.json({ id: data.leadId });
}
