import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms of Service | Open Arms Initiative',
  description: 'The terms that apply when you use the Open Arms Initiative website, request an appointment, submit a form, or donate online.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/terms-of-service' },
};

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of These Terms',
    body: [
      'These Terms of Service (“Terms”) govern your use of openarmsinitiative.com (the “Site”), operated by Open Arms Initiative (“Open Arms,” “we,” “us”). By accessing or using the Site, you agree to these Terms and to our Privacy Policy. If you do not agree, please do not use the Site.',
    ],
  },
  {
    id: 'emergencies',
    title: 'Not for Emergencies',
    body: [
      'The Site and its forms are not monitored around the clock and are not intended for emergencies. If you or someone else is in immediate danger, call 911. If you are thinking about suicide or are in emotional crisis, call or text 988 to reach the Suicide & Crisis Lifeline.',
    ],
  },
  {
    id: 'informational-content',
    title: 'Informational Content Only',
    body: [
      'The content on the Site, including service pages, blog articles, videos, and FAQs, is provided for general educational and informational purposes. It is not medical, mental health, legal, or other professional advice, and it does not create a counselor-client relationship.',
      'A counselor-client relationship begins only after you complete our intake process and agree to services with one of our licensed clinicians. Do not rely on the Site as a substitute for professional advice, diagnosis, or treatment.',
    ],
  },
  {
    id: 'appointment-requests',
    title: 'Appointment Requests and Forms',
    body: [
      'Submitting an appointment request, eligibility form, referral, or contact form does not guarantee an appointment or acceptance as a client. Availability, insurance participation, and clinical fit are confirmed by our team after we review your request.',
      'When you submit a form, you agree that the information you give is accurate and complete, and that you are authorized to provide it. If you are requesting services for a child or dependent, you confirm that you are their parent or legal guardian, or otherwise legally authorized to seek services for them.',
      'Please keep form messages brief and do not include detailed clinical or sensitive health information. See our Privacy Policy for more.',
    ],
  },
  {
    id: 'insurance-payment',
    title: 'Insurance and Payment',
    body: [
      'We accept a number of insurance plans and offer private pay options. Information on the Site about accepted plans is general and may change. Coverage depends on your specific plan, and you are responsible for understanding your benefits, copays, and any amounts your plan does not cover. We will verify benefits where we can, but verification is not a guarantee of payment.',
      'Our pro bono program is limited and is offered to qualifying individuals and families based on eligibility and availability.',
    ],
  },
  {
    id: 'donations',
    title: 'Donations',
    body: [
      'Donations made through the Site are processed by a third-party provider, Donorbox, and are subject to that provider’s terms and privacy policy. Donations support the mission and programs of Open Arms Initiative. Unless stated otherwise at the time of the gift, donations are voluntary and non-refundable. If you believe a gift was made in error, contact us and we will work with you to resolve it.',
      'Event pages, such as our gala, may have their own ticketing or sponsorship terms shown at the time you register.',
    ],
  },
  {
    id: 'careers',
    title: 'Careers',
    body: [
      'Applications submitted through the Careers page are used only to evaluate candidates. Posting a role on the Site is not an offer of employment, and we may change or close a position at any time.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    body: [
      'You agree not to:',
      [
        'Use the Site for any unlawful purpose or in a way that violates these Terms.',
        'Submit false, misleading, or harassing information, or submit information on behalf of someone else without their permission.',
        'Attempt to gain unauthorized access to the Site, its servers, or any admin or submission area.',
        'Interfere with or disrupt the Site, including by introducing malware, sending spam, or using bots or scrapers that place unreasonable load on it.',
        'Circumvent security features, including reCAPTCHA protections on our forms.',
      ],
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: [
      'The Site’s content, including text, graphics, logos, images, videos, blog articles, and design, belongs to Open Arms Initiative or its licensors and is protected by copyright, trademark, and other laws. You may view and share links to the Site for personal, non-commercial use. You may not copy, reproduce, modify, or distribute our content for commercial purposes without our written permission.',
      'Names and logos of insurance providers and other organizations shown on the Site belong to their respective owners and appear only to identify them.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links and Services',
    body: [
      'The Site may link to or embed websites and services we do not own or control, such as social media, video hosting, donation processing, and community resources listed in our local referrals. We are not responsible for their content, availability, or practices, and a link is not an endorsement.',
    ],
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    body: [
      'The Site is provided “as is” and “as available.” To the fullest extent permitted by law, we make no warranties of any kind, express or implied, including about accuracy, completeness, availability, or fitness for a particular purpose. We do not guarantee that the Site will be uninterrupted or error-free, or that any particular outcome will result from counseling or from using the Site.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Open Arms Initiative and its directors, staff, volunteers, and affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site. Nothing in these Terms limits liability that cannot be limited under applicable law.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body: [
      'These Terms are governed by the laws of the State of Oklahoma, without regard to conflict-of-law rules. Any dispute arising from these Terms or your use of the Site will be brought in the state or federal courts located in Oklahoma County, Oklahoma, and you consent to their jurisdiction.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    body: [
      'We may update these Terms from time to time. The “Last updated” date at the top shows the latest revision. Your continued use of the Site after changes are posted means you accept the updated Terms.',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="September 30, 2026"
      intro="Please read these terms before using our website. They explain what you can expect from us and what we ask of you when you visit, request an appointment, or donate."
      sections={sections}
    />
  );
}
