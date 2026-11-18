const { sendTeamNotification, buildNotificationHtml } = require('@/lib/mailer');

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

  const eligibilityNote = `Eligibility Information\n${lines.join('\n')}`;

  let existingNotes = '';
  try {
    const getRes = await fetch(`${ECHO5_API_URL}/api/leads/${id}`, {
      headers: { 'X-Tenant-Key': ECHO5_TENANT_KEY },
    });
    if (getRes.ok) {
      const getData = await getRes.json();
      existingNotes = getData.lead?.notes || '';
    }
  } catch {}

  const combinedNotes = existingNotes ? `${existingNotes}\n\n${eligibilityNote}` : eligibilityNote;

  const res = await fetch(`${ECHO5_API_URL}/api/leads/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Tenant-Key': ECHO5_TENANT_KEY,
    },
    body: JSON.stringify({
      city: body.city,
      notes: combinedNotes,
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    return Response.json({ error: data.error || 'Something went wrong. Please try again.' }, { status: res.status });
  }

  {
    const isDependent = body.servicesFor && body.servicesFor !== 'Myself';
    const rows = [
      { label: 'Date of Birth', value: body.dob },
      { label: 'Services For', value: body.servicesFor },
      isDependent && { label: 'Parent/Guardian', value: `${body.parentGuardianName || ''} (${body.relationshipToClient || ''})` },
      { label: 'Address', value: `${body.address || ''}, ${body.city || ''}, ${body.state || ''} ${body.zip || ''}` },
      { label: 'Insurance/Medicaid Member ID', value: body.memberId },
    ].filter(Boolean);

    sendTeamNotification({
      subject: `Eligibility Information Completed — Lead ${id}`,
      text: [
        `Step 2 (Eligibility Information) has been completed for an existing lead.`,
        ``,
        ...rows.map((r) => `${r.label}: ${r.value || '—'}`),
      ].join('\n'),
      html: buildNotificationHtml({
        heading: 'Eligibility Information Completed',
        intro: 'Step 2 (Eligibility Information) has been completed for an existing lead.',
        rows,
      }),
    }).catch(() => {});
  }

  return Response.json({ ok: true });
}
