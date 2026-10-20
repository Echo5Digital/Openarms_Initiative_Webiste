import VideoGalleryClient from './VideoGalleryClient';
import { videos } from './videoData';

export const metadata = {
  title: 'Video Gallery | Open Arms Initiative',
  description: 'Watch videos from Open Arms Initiative on parenting, leadership, and mental health, no sign-in required.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/video-gallery' },
};

const SCHEMA_VIDEO_GALLERY = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.openarmsinitiative.com/video-gallery#webpage',
      url: 'https://www.openarmsinitiative.com/video-gallery',
      name: 'Video Gallery | Open Arms Initiative',
      description: 'Watch videos from Open Arms Initiative on parenting, leadership, and mental health, no sign-in required.',
      isPartOf: { '@id': 'https://www.openarmsinitiative.com/#website' },
      about: { '@id': 'https://www.openarmsinitiative.com/#organization' },
      breadcrumb: { '@id': 'https://www.openarmsinitiative.com/video-gallery#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.openarmsinitiative.com/video-gallery#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
        { '@type': 'ListItem', position: 2, name: 'Video Gallery', item: 'https://www.openarmsinitiative.com/video-gallery' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.openarmsinitiative.com/#website',
      url: 'https://www.openarmsinitiative.com/',
      name: 'Open Arms Initiative',
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.openarmsinitiative.com/video-gallery#videolist',
      itemListElement: videos.map((video, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'VideoObject',
          name: video.title,
          description: video.title,
          thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
          embedUrl: `https://www.youtube.com/embed/${video.id}`,
          contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
          publisher: { '@id': 'https://www.openarmsinitiative.com/#organization' },
        },
      })),
    },
  ],
};

export default function VideoGalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_VIDEO_GALLERY) }} />
      <VideoGalleryClient />
    </>
  );
}
