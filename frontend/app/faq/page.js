import FaqClient from './FaqClient';

export const metadata = {
  title: 'Frequently Asked Questions | Open Arms Initiative',
  description: 'Find answers to common questions about counseling, clinical workshops, foster parent support, and appointment logistics at Open Arms Initiative.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/faq' },
};

const SCHEMA_FAQ_PAGE = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.openarmsinitiative.com/faq#webpage',
      url: 'https://www.openarmsinitiative.com/faq',
      name: 'Frequently Asked Questions | Open Arms Initiative',
      description: 'Find answers to common questions about counseling, clinical workshops, foster parent support, and appointment logistics at Open Arms Initiative.',
      isPartOf: { '@id': 'https://www.openarmsinitiative.com/#website' },
      about: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      mainEntity: { '@id': 'https://www.openarmsinitiative.com/faq#faq' },
      breadcrumb: { '@id': 'https://www.openarmsinitiative.com/faq#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.openarmsinitiative.com/faq#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.openarmsinitiative.com/faq' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.openarmsinitiative.com/#website',
      url: 'https://www.openarmsinitiative.com/',
      name: 'Open Arms Initiative',
    },
    {
      '@type': ['MedicalClinic', 'NGO'],
      '@id': 'https://www.openarmsinitiative.com/#organization',
      name: 'Open Arms Initiative',
      url: 'https://www.openarmsinitiative.com/',
      telephone: '+1-405-920-8934',
      image: { '@id': 'https://www.openarmsinitiative.com/#logo' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1101 Sovereign Row, Unit A',
        addressLocality: 'Oklahoma City',
        addressRegion: 'OK',
        postalCode: '73108',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.openarmsinitiative.com/faq#faq',
      mainEntity: [
        { '@type': 'Question', name: 'How long does the counseling process usually last?', acceptedAnswer: { '@type': 'Answer', text: 'Your counseling journey is unique. Some individuals benefit from 6 to 8 targeted sessions, while others continue working on evolving long-term goals. We establish goals and evaluate progress together during your initial sessions.' } },
        { '@type': 'Question', name: 'How frequently should I attend counseling sessions?', acceptedAnswer: { '@type': 'Answer', text: 'We recommend weekly sessions at the beginning to build momentum and establish therapeutic trust. As progress is made, session frequency can be adjusted to bi-weekly or monthly maintenance.' } },
        { '@type': 'Question', name: 'What is the typical length of a counseling session?', acceptedAnswer: { '@type': 'Answer', text: 'Standard individual counseling sessions are 50 to 55 minutes. Extended 90-minute family or intake sessions are also available upon request.' } },
        { '@type': 'Question', name: 'Can I switch counselors if it is not the right fit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, absolutely. Therapeutic rapport is vital for effective care. If you feel another counselor on our team would be a better fit, we support a seamless and supportive transition.' } },
        { '@type': 'Question', name: 'What support is available for foster parents?', acceptedAnswer: { '@type': 'Answer', text: 'We provide specialized trauma-informed parenting workshops, 24/7 emergency support guidance, placement support, and peer support groups for foster families across Oklahoma.' } },
        { '@type': 'Question', name: 'How do Pro Bono Therapy Services work?', acceptedAnswer: { '@type': 'Answer', text: 'Our non-profit pro bono program provides no-cost counseling to qualifying low-income individuals and families facing financial barriers. You can inquire about eligibility through our intake contact form.' } },
        { '@type': 'Question', name: 'How can our organization host a clinical workshop?', acceptedAnswer: { '@type': 'Answer', text: 'We customize clinical training for schools, churches, and corporate businesses. Reach out via our contact page to request a speaking engagement or workshop outline.' } },
        { '@type': 'Question', name: 'Where is your clinic located in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Our clinic is located at 1101 Sovereign Row, Unit A, Oklahoma City, OK 73108 with dedicated client parking.' } },
        { '@type': 'Question', name: 'Do you offer telehealth or virtual sessions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer HIPAA-compliant virtual telehealth sessions for residents throughout Oklahoma.' } },
        { '@type': 'Question', name: 'How do I book my first counseling appointment?', acceptedAnswer: { '@type': 'Answer', text: 'You can submit an appointment request through our Contact page or call our office directly at +1 (405) 920-8934.' } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ_PAGE) }} />
      <FaqClient />
    </>
  );
}
