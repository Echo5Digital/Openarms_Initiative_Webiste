export const metadata = {
  title: 'Corporate Mental Health Training for Leadership Teams | Open Arms Initiative',
  description:
    'Burnout, turnover, and quiet conflict don\'t resolve themselves. Jamie James, LPC leads practical leadership and workplace mental health training for teams in Oklahoma City and beyond, built around your organization, not a fixed curriculum.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/corporate-business-training',
  },
  openGraph: {
    title: 'Corporate Mental Health Training for Leadership Teams | Open Arms Initiative',
    description:
      'Burnout, turnover, and quiet conflict don\'t resolve themselves. Jamie James, LPC leads practical leadership and workplace mental health training for teams in Oklahoma City and beyond.',
    url: 'https://www.openarmsinitiative.com/corporate-business-training',
    type: 'website',
  },
};

const SCHEMA_CORPORATE_TRAINING = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.openarmsinitiative.com/corporate-business-training#webpage',
      url: 'https://www.openarmsinitiative.com/corporate-business-training',
      name: 'Corporate Mental Health Training for Leadership Teams | Open Arms Initiative',
      description: 'Burnout, turnover, and quiet conflict don\'t resolve themselves. Jamie James, LPC leads practical leadership and workplace mental health training for teams in Oklahoma City and beyond, built around your organization, not a fixed curriculum.',
      isPartOf: { '@id': 'https://www.openarmsinitiative.com/#website' },
      about: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      mainEntity: { '@id': 'https://www.openarmsinitiative.com/corporate-business-training#service' },
      breadcrumb: { '@id': 'https://www.openarmsinitiative.com/corporate-business-training#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.openarmsinitiative.com/corporate-business-training#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
        { '@type': 'ListItem', position: 2, name: 'Training & Speaking', item: 'https://www.openarmsinitiative.com/training/jamie-james' },
        { '@type': 'ListItem', position: 3, name: 'Leadership & Workplace Wellness', item: 'https://www.openarmsinitiative.com/corporate-business-training' },
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
      '@type': 'Service',
      '@id': 'https://www.openarmsinitiative.com/corporate-business-training#service',
      serviceType: 'Corporate Mental Health & Leadership Training',
      name: 'Leadership & Workplace Wellness Training',
      url: 'https://www.openarmsinitiative.com/corporate-business-training',
      provider: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      areaServed: { '@type': 'City', name: 'Oklahoma City', containedInPlace: { '@type': 'State', name: 'Oklahoma' } },
      description: 'Leadership and workplace mental health training for HR directors, executives, and managers, led by a licensed professional counselor.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.openarmsinitiative.com/corporate-business-training#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can this training be customized for our organization?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, sessions are built around your team\'s specific situation rather than a fixed curriculum.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is this training designed for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anyone responsible for leading people through stress, HR directors, executives, department leaders, and managers, in businesses, nonprofits, and other organizations.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is this different from a generic corporate wellness workshop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "It's led by a licensed clinician who also currently leads two organizations, so the training is grounded in a clinical understanding of stress and behavior, not just leadership theory.",
          },
        },
      ],
    },
  ],
};

export default function CorporateTrainingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_CORPORATE_TRAINING) }}
      />
      {children}
    </>
  );
}
