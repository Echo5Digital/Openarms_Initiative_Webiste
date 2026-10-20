export const metadata = {
  title: 'Trauma & Mental Health Training for Nonprofits and Community Organizations | Open Arms Initiative',
  description:
    'Frontline staff see the effects of trauma every day, often without training for it. Jamie James, LPC leads foundational trauma and mental health training for nonprofits, coalitions, and community organizations across Oklahoma City and beyond.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/trauma-mental-health-training',
  },
  openGraph: {
    title: 'Trauma & Mental Health Training for Nonprofits and Community Organizations | Open Arms Initiative',
    description:
      'Frontline staff see the effects of trauma every day, often without training for it. Jamie James, LPC leads foundational trauma and mental health training for nonprofits, coalitions, and community organizations across Oklahoma City and beyond.',
    url: 'https://www.openarmsinitiative.com/trauma-mental-health-training',
    type: 'website',
  },
};

const SCHEMA_TRAUMA_TRAINING = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.openarmsinitiative.com/trauma-mental-health-training#webpage',
      url: 'https://www.openarmsinitiative.com/trauma-mental-health-training',
      name: 'Trauma & Mental Health Training for Nonprofits and Community Organizations | Open Arms Initiative',
      description: 'Frontline staff see the effects of trauma every day, often without training for it. Jamie James, LPC leads foundational trauma and mental health training for nonprofits, coalitions, and community organizations across Oklahoma City and beyond.',
      isPartOf: { '@id': 'https://www.openarmsinitiative.com/#website' },
      about: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      mainEntity: { '@id': 'https://www.openarmsinitiative.com/trauma-mental-health-training#course' },
      breadcrumb: { '@id': 'https://www.openarmsinitiative.com/trauma-mental-health-training#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.openarmsinitiative.com/trauma-mental-health-training#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
        { '@type': 'ListItem', position: 2, name: 'Training & Speaking', item: 'https://www.openarmsinitiative.com/training/jamie-james' },
        { '@type': 'ListItem', position: 3, name: 'Trauma & Mental Health Training', item: 'https://www.openarmsinitiative.com/trauma-mental-health-training' },
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
      '@id': 'https://www.openarmsinitiative.com/trauma-mental-health-training#service',
      serviceType: 'Trauma & Mental Health Training for Nonprofits and Community Organizations',
      name: 'Trauma & Mental Health Training',
      url: 'https://www.openarmsinitiative.com/trauma-mental-health-training',
      provider: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      areaServed: { '@type': 'City', name: 'Oklahoma City', containedInPlace: { '@type': 'State', name: 'Oklahoma' } },
      description: 'Foundational trauma and mental health training for nonprofits, coalitions, and community organizations, led by a licensed professional counselor.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.openarmsinitiative.com/trauma-mental-health-training#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's the difference between this and Trauma-Informed Care Training?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Trauma & Mental Health Training is our broader foundational offering. It covers everything from recognizing warning signs to supporting grief and building staff resilience. Trauma-Informed Care Training is our flagship program, focused specifically on the core principles of trauma-informed practice. Many organizations start with the flagship and then add topics from this page as needed.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can this training work for a mixed-role staff day, with case workers, volunteers, and admin staff all in the same room?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, this is one of the more common formats organizations request, and sessions are built to be useful across roles rather than assuming everyone has the same background.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this appropriate for volunteers, not just paid staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, this training is regularly built for mixed staff-and-volunteer audiences.',
          },
        },
      ],
    },
    {
      '@type': 'Course',
      '@id': 'https://www.openarmsinitiative.com/trauma-mental-health-training#course',
      name: 'Trauma & Mental Health Training for Nonprofits and Community Organizations',
      description: 'Foundational, practical training in trauma and mental health for community and nonprofit teams, covering recognizing warning signs, understanding trauma-driven behavior, grief support, staff resilience, and communication skills.',
      provider: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      instructor: { '@id': 'https://www.openarmsinitiative.com/about-us#jamie-james' },
      courseMode: ['onsite', 'online'],
      educationalLevel: 'Beginner to Intermediate',
      teaches: [
        'Recognizing Signs of Trauma and Mental Health Concerns',
        'Understanding Human Behavior Through a Trauma Lens',
        'Staff Resilience and Self-Care',
        'Grief and Emotional Support Skills',
        'Communication and Conflict Skills for Human-Service Teams',
      ],
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: ['onsite', 'online'],
        location: {
          '@type': 'Place',
          name: 'Oklahoma City, OK',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Oklahoma City',
            addressRegion: 'OK',
            addressCountry: 'US',
          },
        },
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.openarmsinitiative.com/about-us#jamie-james',
      name: 'Jamie James',
      jobTitle: 'President & Founder',
      url: 'https://www.openarmsinitiative.com/about-us',
      worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' },
      knowsAbout: [
        'Trauma-Informed Care',
        'Mental Health Training',
        'Nonprofit Staff Development',
        'Grief and Loss Counseling',
        'Compassion Fatigue',
      ],
    },
  ],
};

export default function TraumaMentalHealthTrainingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_TRAUMA_TRAINING) }}
      />
      {children}
    </>
  );
}
