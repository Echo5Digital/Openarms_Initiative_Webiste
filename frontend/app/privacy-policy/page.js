import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy | Open Arms Initiative',
  description: 'How Open Arms Initiative collects, uses, and protects your information when you visit our website, request an appointment, or contact our Oklahoma City team.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/privacy-policy' },
};

const sections = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    body: [
      'Open Arms Initiative is an Oklahoma City nonprofit providing trauma-informed counseling, foster and adoptive family support, parenting education, training, and community outreach. This Privacy Policy explains how we handle information collected through openarmsinitiative.com (the “Site”).',
      'By using the Site, you agree to the practices described here. If you do not agree, please do not use the Site or submit information through it.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: [
      'Information you give us. When you use a form on the Site, we collect what you choose to submit, which may include:',
      [
        'Your name, phone number, and email address.',
        'The service you are interested in (for example child counseling, foster care support, marriage counseling, grief counseling, or pro bono services) and any message you write.',
        'Insurance or payment information, such as your insurance provider and member ID, if you complete our insurance and eligibility steps.',
        'Date of birth, address, and details about a child or dependent when you are requesting services for them, including a parent or guardian’s name and relationship.',
        'Referral details if you refer someone to us through the Local Referrals form.',
        'Resume, cover letter, and contact details if you apply for a position through our Careers page or email us.',
      ],
      'Information collected automatically. Like most websites, we and our service providers may collect technical data such as your IP address, browser type, device, pages viewed, the page that referred you, and the date and time of your visit. This is gathered through cookies and similar technologies.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    body: [
      'We use the information we collect to:',
      [
        'Respond to your questions and appointment requests, and schedule services.',
        'Verify insurance benefits and determine eligibility for services or our pro bono program.',
        'Match you or your family with an appropriate counselor or program.',
        'Process applications and evaluate candidates for open positions.',
        'Process donations and communicate about our mission and events, where you have asked us to.',
        'Protect the Site from spam and abuse, and keep it secure.',
        'Understand how the Site is used so we can improve it and measure our advertising.',
        'Comply with legal obligations.',
      ],
      'We do not sell your personal information.',
    ],
  },
  {
    id: 'health-information',
    title: 'Health Information and Confidentiality',
    body: [
      'Information you submit through website forms is intended to help us contact you and arrange care. Please keep form messages brief and do not include detailed health or clinical information. Website forms and email are not a secure channel for sensitive clinical details, and they are not a substitute for a confidential conversation with your counselor.',
      'Once you become a client, information about your care is protected by applicable federal and state law, including HIPAA where it applies, and by professional ethics standards. Our Notice of Privacy Practices, provided at intake, explains how your clinical information is used and disclosed.',
      'If you are in crisis or experiencing an emergency, please do not use our website forms. Call 911, or call or text 988 to reach the Suicide & Crisis Lifeline.',
    ],
  },
  {
    id: 'sharing-information',
    title: 'How We Share Information',
    body: [
      'We share information only as needed and only in the following situations:',
      [
        'Service providers. Companies that help us run the Site and our operations, such as website hosting, email and form delivery, spam protection, analytics and advertising measurement, and donation processing. They may use your information only to provide services to us.',
        'Insurance and payers. To verify benefits and process claims when you request services covered by insurance.',
        'Legal and safety reasons. When required by law, subpoena, or court order, or when needed to protect the safety of a child or another person, such as mandatory reporting of suspected abuse or neglect.',
        'Organizational changes. If Open Arms Initiative merges with or transfers programs to another organization, information may be transferred as part of that change.',
        'With your permission. In any other case where you have asked or authorized us to share it.',
      ],
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services on Our Site',
    body: [
      [
        'Google reCAPTCHA protects our forms from spam. It collects hardware and software information and sends it to Google. Its use is subject to the Google Privacy Policy (policies.google.com/privacy) and Terms of Service (policies.google.com/terms).',
        'Google Ads and Google tag help us measure how visitors find and use the Site and how our advertising performs. They use cookies and similar technologies.',
        'Donorbox processes donations made through our donation pages. Payment details are entered on Donorbox’s secure pages and are not stored by us. Donorbox’s own privacy policy applies to that information.',
        'YouTube and other embedded video may set cookies or collect information when you play a video on our pages.',
        'Social media links (Instagram, Facebook, YouTube) take you to sites we do not control. Their privacy practices are their own.',
      ],
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking',
    body: [
      'Cookies are small files stored on your device. We and our providers use them to keep the Site working, understand traffic, and measure advertising. You can block or delete cookies in your browser settings, and you can opt out of Google’s ad personalization at adssettings.google.com. Blocking cookies may affect how some parts of the Site work.',
      'Some browsers offer a “Do Not Track” setting. The Site does not currently respond to these signals.',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security and Retention',
    body: [
      'We use reasonable administrative, technical, and physical safeguards to protect the information we collect, including restricted access to submitted form data. No method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.',
      'We keep information only as long as needed for the purposes described above, including meeting legal, accounting, and record-keeping requirements. Clinical records are retained as required by Oklahoma law and professional standards.',
    ],
  },
  {
    id: 'your-choices',
    title: 'Your Choices and Rights',
    body: [
      'You may contact us at any time to ask what information we hold about you, correct it, or ask us to delete information you submitted through the Site. We will honor these requests to the extent permitted by law. Information that is part of a client’s clinical record may be subject to retention requirements.',
      'You can also unsubscribe from any marketing emails by using the link in the message or by contacting us.',
    ],
  },
  {
    id: 'children',
    title: 'Children’s Privacy',
    body: [
      'The Site is intended for adults, including parents, guardians, and foster and adoptive caregivers. We do not knowingly collect personal information directly from children under 13. When services are requested for a child, we ask that a parent or legal guardian submit the information. If you believe a child has submitted information to us directly, please contact us so we can delete it.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The “Last updated” date at the top shows when it was last revised. Continued use of the Site after a change means you accept the updated policy.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 30, 2026"
      intro="Your trust matters to us. This policy explains what information we collect through our website, how we use and protect it, and the choices you have."
      sections={sections}
    />
  );
}
