import ScrollReveal from '@/components/ScrollReveal';
import ReferralRequestForm from '@/components/ReferralRequestForm';

export const metadata = { title: 'Local Referrals | Open Arms Initiative', description: 'Know someone who could benefit from therapy or family counseling? Refer a friend or community member to Open Arms Initiative in Oklahoma City.', alternates: { canonical: 'https://www.openarmsinitiative.com/local-referrals' } };

const SCHEMA_LOCAL_REFERRALS = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.openarmsinitiative.com/local-referrals#webpage',
      url: 'https://www.openarmsinitiative.com/local-referrals',
      name: 'Local Referrals | Open Arms Initiative',
      description: 'Know someone who could benefit from therapy or family counseling? Refer a friend or community member to Open Arms Initiative in Oklahoma City.',
      isPartOf: { '@id': 'https://www.openarmsinitiative.com/#website' },
      about: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      breadcrumb: { '@id': 'https://www.openarmsinitiative.com/local-referrals#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.openarmsinitiative.com/local-referrals#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
        { '@type': 'ListItem', position: 2, name: 'Local Referrals', item: 'https://www.openarmsinitiative.com/local-referrals' },
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
  ],
};

export default function LocalReferralsPage() { return <main className="fs-page referral-only-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_LOCAL_REFERRALS) }} />
  <ScrollReveal />

  <section className="fs-hero"><div className="fs-hero-split-inner referral-only-inner">
    <div className="fs-hero-form-card reveal reveal-from-bottom" id="referral-form"><div className="fs-hero-form-body"><h1>Referral Bonus</h1><span className="fs-hero-form-underline" /><p className="fs-hero-form-sub">Do you know someone who could benefit from therapy or family counseling? Refer a friend or community member to Open Arms Initiative and help us extend our mission of healing and hope. How awesome is that?</p><ReferralRequestForm /></div><div className="fs-hero-form-photo"><img src="/local-referrals_openarmsinitiative.jpg" alt="Community members supporting one another" /></div></div>
  </div></section>
</main>}
