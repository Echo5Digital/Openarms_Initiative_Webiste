const ECHO5_API_URL = process.env.ECHO5_API_URL;
const ECHO5_TENANT_KEY = process.env.ECHO5_TENANT_KEY;

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  const lines = [
    `Date of Birth: ${body.dob || '-'}`,
    `Services For: ${body.servicesFor || '-'}`,
    body.parentGuardianName && `Parent/Guardian Name: ${body.parentGuardianName}`,
    body.relationshipToClient && `Relationship to Client: ${body.relationshipToClient}`,
    `Address: ${body.address || '-'}`,
    `City: ${body.city || '-'}`,
    `State: ${body.state || '-'}`,
    `ZIP: ${body.zip || '-'}`,
    body.memberId && `Insurance/Medicaid Member ID: ${body.memberId}`,
  ].filter(Boolean);

  const res = await fetch(`${ECHO5_API_URL}/api/leads/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Tenant-Key': ECHO5_TENANT_KEY,
    },
    body: JSON.stringify({
      city: body.city,
      notes: `Eligibility Information\n${lines.join('\n')}`,
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    return Response.json({ error: data.error || 'Something went wrong. Please try again.' }, { status: res.status });
  }

  return Response.json({ ok: true });
}
