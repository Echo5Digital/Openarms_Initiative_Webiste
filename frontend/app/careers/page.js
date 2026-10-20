import CareersClient from './CareersClient';

export const metadata = {
  title: 'Careers at Open Arms Initiative | Therapist Jobs in Oklahoma City (OKC)',
  description: 'Join the Open Arms Initiative team in Oklahoma City. We are hiring Licensed Therapists for full-time and part-time roles in a trauma-informed, mission-driven organization.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/careers' },
};

const SCHEMA_CAREERS = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.openarmsinitiative.com/careers#webpage',
      url: 'https://www.openarmsinitiative.com/careers',
      name: 'Careers at Open Arms Initiative | Therapist Jobs in Oklahoma City (OKC)',
      description: 'Join the Open Arms Initiative team in Oklahoma City. We are hiring Licensed Therapists for full-time and part-time roles in a trauma-informed, mission-driven organization.',
      isPartOf: { '@id': 'https://www.openarmsinitiative.com/#website' },
      about: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      mainEntity: { '@id': 'https://www.openarmsinitiative.com/careers#job' },
      breadcrumb: { '@id': 'https://www.openarmsinitiative.com/careers#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.openarmsinitiative.com/careers#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
        { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://www.openarmsinitiative.com/careers' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.openarmsinitiative.com/#website',
      url: 'https://www.openarmsinitiative.com/',
      name: 'Open Arms Initiative',
    },
    {
      '@type': 'JobPosting',
      '@id': 'https://www.openarmsinitiative.com/careers#job',
      title: 'Licensed Therapist',
      description: 'Open Arms Initiative is hiring Licensed Therapists (LPC, LCSW, or LMFT, or actively working toward licensure) for full-time and part-time roles in Oklahoma City. Responsibilities include providing trauma-informed therapy for individuals, children, and families, supporting clients through life transitions, grief, and family dynamics, maintaining clinical documentation, and collaborating with a multidisciplinary team in a mission-driven organization. Supervision for licensure is provided.',
      identifier: {
        '@type': 'PropertyValue',
        name: 'Open Arms Initiative',
        value: 'careers-licensed-therapist',
      },
      datePosted: '2026-10-20',
      employmentType: ['FULL_TIME', 'PART_TIME'],
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Open Arms Initiative',
        sameAs: 'https://www.openarmsinitiative.com/',
        logo: 'https://www.openarmsinitiative.com/images/logo-full.png',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1101 Sovereign Row, Unit A',
          addressLocality: 'Oklahoma City',
          addressRegion: 'OK',
          postalCode: '73108',
          addressCountry: 'US',
        },
      },
      directApply: true,
      applicantLocationRequirements: { '@type': 'Country', name: 'USA' },
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
  ],
};

export default function CareersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_CAREERS) }} />
      <CareersClient />
    </>
  );
}
