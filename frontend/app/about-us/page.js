import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Open Arms Initiative | Oklahoma City',
  description: 'Meet Open Arms Initiative, an Oklahoma City nonprofit providing trauma-informed counseling, foster family support, education, and compassionate community care.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/about-us' },
};

const SCHEMA_ABOUT = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.openarmsinitiative.com/about-us#webpage',
      url: 'https://www.openarmsinitiative.com/about-us',
      name: 'About Open Arms Initiative | Oklahoma City',
      description: 'Our mission is to provide compassionate, trauma-informed support that recognizes the whole person.',
      isPartOf: { '@id': 'https://www.openarmsinitiative.com/#website' },
      about: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      mainEntity: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      breadcrumb: { '@id': 'https://www.openarmsinitiative.com/about-us#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.openarmsinitiative.com/about-us#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.openarmsinitiative.com/about-us' },
      ],
    },
    {
      '@type': ['MedicalClinic', 'NGO'],
      '@id': 'https://www.openarmsinitiative.com/#organization',
      name: 'Open Arms Initiative',
      url: 'https://www.openarmsinitiative.com/',
      founder: { '@id': 'https://www.openarmsinitiative.com/about-us#jamie-james' },
      employee: [
        { '@id': 'https://www.openarmsinitiative.com/about-us#jamie-james' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#dfawn-downs' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#brandon-martin' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#stephanie-caldwell' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#amber-price' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#chloe-burke' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#destinee-curry' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#kamryn-bass' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#stephanie-vaughn' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#jessena-varghese' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#henri-jo-ball' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#emeka-nnaka' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#brenda-mitchell' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#karli-burch' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#lori-baker' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#breanna-white' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#rebekah-thomas' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#jamira-alexander' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#victori-swinford' },
        { '@id': 'https://www.openarmsinitiative.com/about-us#mattea-lear' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.openarmsinitiative.com/#website',
      url: 'https://www.openarmsinitiative.com/',
      name: 'Open Arms Initiative',
    },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#jamie-james', name: 'Jamie James', jobTitle: 'President & Founder', image: 'https://www.openarmsinitiative.com/Jamie%20James%20-%20LPC.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#dfawn-downs', name: "D'Fawn Downs", jobTitle: 'Corporate Compliance Officer & Clinical Director', image: "https://www.openarmsinitiative.com/D%27Fawn%20Downs%20-%20LPC.jpg", worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#brandon-martin', name: 'Brandon Martin', jobTitle: 'Chief Financial Officer', image: 'https://www.openarmsinitiative.com/Brandon%20Martin.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#stephanie-caldwell', name: 'Stephanie Caldwell', jobTitle: 'Parent Relations Director', image: 'https://www.openarmsinitiative.com/Stephanie%20Caldwell.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#amber-price', name: 'Amber Price', jobTitle: 'Director of Foster Care', image: 'https://www.openarmsinitiative.com/Amber%20Price.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#chloe-burke', name: 'Chloe Burke', jobTitle: 'Lead Admin', image: 'https://www.openarmsinitiative.com/Chloe%20Burke.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#destinee-curry', name: 'Destinee Curry', jobTitle: 'Administrative Assistant', image: 'https://www.openarmsinitiative.com/Destinee%20Curry.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#kamryn-bass', name: 'Kamryn Bass', jobTitle: 'Administrative Assistant', image: 'https://www.openarmsinitiative.com/Kamryn-Bass.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#stephanie-vaughn', name: 'Stephanie Vaughn', jobTitle: 'Billing & Placement Specialist', image: 'https://www.openarmsinitiative.com/Stephanie%20Vaughn.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#jessena-varghese', name: 'Jessena Varghese', jobTitle: 'Clinical Director', image: 'https://www.openarmsinitiative.com/Jessena%20Varghese%20-%20LPC.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#henri-jo-ball', name: 'Henri Jo Ball', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/Henri.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#emeka-nnaka', name: 'Emeka Nnaka', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/Emeka%20Nnaka%20-%20LPC.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#brenda-mitchell', name: 'Brenda Mitchell', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/Brenda%20Mitchell%20-%20LPC.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#karli-burch', name: 'Karli Burch', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/Karli%20Burch%20-%20LPC.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#lori-baker', name: 'Lori Baker', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/lori.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Marriage and Family Therapist - Supervisor (LMFT-S)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#breanna-white', name: 'Breanna White', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/Breanna%20White%20-%20LPC.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor (LPC)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#rebekah-thomas', name: 'Rebekah Thomas', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/rebekah.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' }, hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Professional Counselor - Candidate (LPC-C)' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#jamira-alexander', name: 'Jamira Alexander', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/Jamira%20Alexander.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#victori-swinford', name: 'Victori Swinford', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/Victori.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
    { '@type': 'Person', '@id': 'https://www.openarmsinitiative.com/about-us#mattea-lear', name: 'Mattea Lear', jobTitle: 'Therapist', image: 'https://www.openarmsinitiative.com/Mattea.jpg', worksFor: { '@id': 'https://www.openarmsinitiative.com/#organization' } },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ABOUT) }} />
      <AboutClient />
    </>
  );
}
