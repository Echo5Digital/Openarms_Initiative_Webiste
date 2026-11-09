import BlogListClient from './BlogListClient';
import { blogPosts } from './blogData';

const SITE_URL = 'https://www.openarmsinitiative.com';
const POSTS_PER_PAGE = 10;

export const metadata = {
  title: 'Mental Health Blog | Open Arms Initiative Oklahoma City',
  description: 'Helpful articles, mental health insights, and community stories from the Open Arms Initiative team.',
  alternates: { canonical: `${SITE_URL}/blogs` },
};

const SCHEMA_BLOGS = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/blogs#webpage`,
      url: `${SITE_URL}/blogs`,
      name: 'Mental Health Blog | Open Arms Initiative Oklahoma City',
      description: 'Helpful articles, mental health insights, and community stories from the Open Arms Initiative team.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      mainEntity: { '@id': `${SITE_URL}/blogs#blog` },
      breadcrumb: { '@id': `${SITE_URL}/blogs#breadcrumb` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/blogs#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blogs` },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Open Arms Initiative',
    },
    {
      '@type': ['MedicalClinic', 'NGO'],
      '@id': `${SITE_URL}/#organization`,
      name: 'Open Arms Initiative',
      url: `${SITE_URL}/`,
    },
    {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blogs#blog`,
      name: 'Open Arms Initiative Blog',
      description: 'Helpful articles, mental health insights, and community stories from the Open Arms Initiative team.',
      url: `${SITE_URL}/blogs/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      blogPost: blogPosts.slice(0, POSTS_PER_PAGE).map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        url: `${SITE_URL}/blogs/${post.slug}/`,
        image: `${SITE_URL}${encodeURI(post.image)}`,
        datePublished: new Date(post.date).toISOString(),
      })),
    },
  ],
};

export default function BlogsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BLOGS) }} />
      <BlogListClient page={1} />
    </>
  );
}
