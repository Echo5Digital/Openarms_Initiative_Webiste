import LocationClient from './LocationClient';

export const metadata = {
  title: 'Counseling & Family Support Oklahoma City | Open Arms',
  description: 'Visit Open Arms Initiative in Oklahoma City for compassionate counseling, family support, foster care services, parenting support, and community programs.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/location' },
};

const SCHEMA_LOCATION = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.openarmsinitiative.com/location#webpage',
      url: 'https://www.openarmsinitiative.com/location',
      name: 'Counseling & Family Support Oklahoma City | Open Arms',
      description: 'Visit Open Arms Initiative in Oklahoma City for compassionate counseling, family support, foster care services, parenting support, and community programs.',
      isPartOf: { '@id': 'https://www.openarmsinitiative.com/#website' },
      about: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      mainEntity: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      breadcrumb: { '@id': 'https://www.openarmsinitiative.com/location#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.openarmsinitiative.com/location#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
        { '@type': 'ListItem', position: 2, name: 'Location', item: 'https://www.openarmsinitiative.com/location' },
      ],
    },
    {
      '@type': ['MedicalClinic', 'NGO'],
      '@id': 'https://www.openarmsinitiative.com/#organization',
      name: 'Open Arms Initiative',
      url: 'https://www.openarmsinitiative.com/',
      telephone: '+1-405-920-8934',
      email: 'info@openarmsinitiative.com',
      image: { '@id': 'https://www.openarmsinitiative.com/#logo' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1101 Sovereign Row, Unit A',
        addressLocality: 'Oklahoma City',
        addressRegion: 'OK',
        postalCode: '73108',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 35.4553146, longitude: -97.5991007 },
      hasMap: 'https://maps.google.com/?cid=11493076692460582253',
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '17:00',
      }],
      areaServed: { '@type': 'City', name: 'Oklahoma City', containedInPlace: { '@type': 'State', name: 'Oklahoma' } },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.openarmsinitiative.com/#website',
      url: 'https://www.openarmsinitiative.com/',
      name: 'Open Arms Initiative',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.openarmsinitiative.com/location#faq',
      mainEntity: [
        { '@type': 'Question', name: 'Where is Open Arms Initiative located in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Open Arms Initiative is located at 1101 Sovereign Row, Unit A, Oklahoma City, OK 73108.' } },
        { '@type': 'Question', name: 'What are your Oklahoma City office hours?', acceptedAnswer: { '@type': 'Answer', text: 'Our listed office hours are Monday through Friday, 8:30 AM to 5:00 PM. Contact Open Arms Initiative directly if you need to confirm availability for a specific service or appointment.' } },
        { '@type': 'Question', name: 'Do you provide both in-person and online services?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative offers in-person and online service options. Availability may vary depending on the particular service and your circumstances.' } },
        { '@type': 'Question', name: 'What counseling services are available in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Open Arms Initiative provides counseling services for adults, individuals, children, adolescents, couples, and families, along with grief support and other specialized services.' } },
        { '@type': 'Question', name: 'Do you support foster and adoptive families?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative provides foster-family support that includes training, ongoing guidance, placement support, and trauma-focused counseling. Support is also available for foster and adoptive families.' } },
        { '@type': 'Question', name: 'Do you offer pro bono counseling in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative provides pro bono counseling intended to improve access to mental health support. Availability and applicable program requirements may vary, so contact our team for current information.' } },
        { '@type': 'Question', name: 'What if I’m not sure which service I need?', acceptedAnswer: { '@type': 'Answer', text: "You don't have to decide before contacting us. Tell our team what you're experiencing or what kind of support you're looking for, and we can help you understand the available options." } },
      ],
    },
  ],
};

export default function LocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LOCATION) }} />
      <LocationClient />
    </>
  );
}
