import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../blogData';
import { blogContent } from '../blogContent';
import FaqAccordion from '../FaqAccordion';

const SITE_URL = 'https://www.openarmsinitiative.com';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Post Not Found | Open Arms Initiative' };
  }
  return {
    title: `${post.title} | Open Arms Initiative`,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blogs/${post.slug}/` },
  };
}

// Same real text -> id rule used to build the sidebar's "On This Page" links
// and the actual <h2> anchor ids, so a click always lands on a heading that
// really exists on the page (both are derived from the same block.text).
function slugifyHeading(text) {
  const slug = (text || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return slug ? `toc-${slug}` : '';
}

function ArticleBlock({ block, index }) {
  switch (block.type) {
    case 'intro-heading':
      return <p className="blog-post-intro-heading" dangerouslySetInnerHTML={{ __html: block.html }} />;
    case 'h2':
      return block.html
        ? <h2 className="blog-post-h2" dangerouslySetInnerHTML={{ __html: block.html }} />
        : <h2 className="blog-post-h2" id={slugifyHeading(block.text)}>{block.text}</h2>;
    case 'h3':
      return <h3 className="blog-post-h3">{block.text}</h3>;
    case 'p':
      return block.html
        ? <p className="blog-post-p" dangerouslySetInnerHTML={{ __html: block.html }} />
        : <p className="blog-post-p">{block.text}</p>;
    case 'figure':
      return (
        <figure className="blog-post-figure">
          <img src={block.image} alt={block.alt || ''} loading="lazy" />
        </figure>
      );
    case 'list':
      return (
        <ul className="blog-post-list">
          {block.items.map((item, i) => (
            item.html
              ? <li key={i} dangerouslySetInnerHTML={{ __html: item.html }} />
              : <li key={i}>{item.text}</li>
          ))}
        </ul>
      );
    case 'ordered-list':
      return (
        <ol className="blog-post-list blog-post-list-ordered">
          {block.items.map((item, i) => (
            item.html
              ? <li key={i} dangerouslySetInnerHTML={{ __html: item.html }} />
              : <li key={i}>{item.text}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div className="blog-post-table-wrap">
          <table className="blog-post-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

function QuoteGroup({ lines }) {
  return (
    <div className="blog-post-quote">
      <span className="blog-post-quote-mark" aria-hidden="true">&#8220;</span>
      {lines.map((line, i) => (
        <p className="blog-post-quote-line" key={i}>{line}</p>
      ))}
    </div>
  );
}

function groupFaqBlocks(blocks) {
  const grouped = [];
  for (const block of blocks) {
    if (block.type === 'faq') {
      const last = grouped[grouped.length - 1];
      if (last && last.type === 'faq-group') {
        last.items.push(block);
      } else {
        grouped.push({ type: 'faq-group', items: [block] });
      }
    } else if (block.type === 'quote') {
      const last = grouped[grouped.length - 1];
      if (last && last.type === 'quote-group') {
        last.lines.push(block.text);
      } else {
        grouped.push({ type: 'quote-group', lines: [block.text] });
      }
    } else {
      grouped.push(block);
    }
  }
  return grouped;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

  const isoDate = new Date(post.date).toISOString();
  const postUrl = `${SITE_URL}/blogs/${post.slug}/`;

  // Real "On This Page" entries — one per actual h2 block in this post,
  // same slugify rule as the h2's own rendered id (see ArticleBlock above),
  // so every TOC link is guaranteed to land on a real heading.
  const tocItems = content.blocks
    .filter((b) => b.type === 'h2' && b.text)
    .map((b) => ({ id: slugifyHeading(b.text), text: b.text }));

  // Real related posts — same category, excluding this post, most recent 3.
  // Never invented: falls back to any other posts if none share a category,
  // and renders nothing at all if there simply aren't other posts yet.
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const relatedPostsFallback = relatedPosts.length > 0
    ? relatedPosts
    : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blogs/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  };

  const schemaBlogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${encodeURI(post.image)}`,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      '@type': 'Organization',
      name: 'Open Arms Initiative',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Open Arms Initiative',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-full.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <main className="blog-post-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlogPosting) }} />
      {/* Hero — real photo background (from the post's own featured image) +
          the same wave-bottom graphic used elsewhere on the site
          (.jj-hero-wave-section), so a post's hero blends into the article
          body instead of ending on a hard line. */}
      <section
        className="blog-post-hero blog-post-hero-photo"
        style={post.image ? { backgroundImage: `url(${post.image})` } : undefined}
      >
        <div className="blog-post-hero-overlay" aria-hidden="true" />
        <div className="blog-post-hero-inner">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-meta-dot" aria-hidden="true">&middot;</span>
            <Link href="/blogs" className="blog-post-cat">{post.category}</Link>
          </div>
        </div>
        <svg className="blog-post-hero-wave" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 Q220 10 440 55 Q680 105 920 55 Q1160 5 1440 50 L1440 160 L0 160Z" />
        </svg>
      </section>

      {/* Article body — main column + sticky sidebar (support CTA, real
          "On This Page" table of contents, real related posts). */}
      <section className="blog-post-section">
        <div className="blog-post-container blog-post-container-sidebar">
          <div className="blog-post-main-col">
            <div className="blog-post-card">
              <div className="blog-post-thumb">
                <img src={post.image} alt={post.alt} />
              </div>

              <article className="blog-post-content">
                {groupFaqBlocks(content.blocks).map((block, i) => {
                  if (block.type === 'faq-group') return <FaqAccordion items={block.items} key={i} />;
                  if (block.type === 'quote-group') return <QuoteGroup lines={block.lines} key={i} />;
                  return <ArticleBlock block={block} index={i} key={i} />;
                })}
              </article>

              {(content.previousPost || content.nextPost) && (
                <div className="blog-post-nav">
                  {content.previousPost && (
                    <Link href={`/blogs/${content.previousPost.slug}`} className="blog-post-nav-card">
                      <span className="blog-post-nav-thumb">
                        <img src={content.previousPost.image} alt="Previous post thumbnail" />
                      </span>
                      <span className="blog-post-nav-text">
                        <span className="blog-post-nav-label">
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
                          Previous Post
                        </span>
                        <span className="blog-post-nav-title">{content.previousPost.title}</span>
                      </span>
                    </Link>
                  )}
                  {content.nextPost && (
                    <Link href={`/blogs/${content.nextPost.slug}`} className="blog-post-nav-card blog-post-nav-card-next">
                      <span className="blog-post-nav-text">
                        <span className="blog-post-nav-label">
                          Next Post
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                        </span>
                        <span className="blog-post-nav-title">{content.nextPost.title}</span>
                      </span>
                      <span className="blog-post-nav-thumb">
                        <img src={content.nextPost.image} alt="Next post thumbnail" />
                      </span>
                    </Link>
                  )}
                </div>
              )}
            </div>

            <div className="blog-comment-card">
              <h2 className="blog-comment-title">Leave a Comment</h2>
              <form className="blog-comment-form">
                <textarea
                  className="blog-comment-textarea"
                  placeholder="Write Your Comment...."
                  rows={7}
                />
                <label className="blog-comment-checkbox-row">
                  <input type="checkbox" />
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
                <button type="submit" className="blog-comment-submit">Post Comment</button>
              </form>
            </div>
          </div>

          <aside className="blog-post-sidebar">
            <div className="blog-post-sidebar-cta">
              <div className="blog-post-sidebar-cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              </div>
              <h3 className="blog-post-sidebar-title">Need Support?</h3>
              <p className="blog-post-sidebar-text">You don&apos;t have to go through this alone. Our team is here to help you find the right support, whether it&apos;s individual counseling, family services, or professional training.</p>
              <Link href="/contact" className="blog-post-sidebar-btn">Schedule an Appointment &rarr;</Link>
            </div>

            {tocItems.length > 0 && (
              <div className="blog-post-sidebar-card">
                <h3 className="blog-post-sidebar-card-title">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M3 12h18M3 18h18"/></svg>
                  On This Page
                </h3>
                <nav className="blog-post-toc">
                  {tocItems.map((item, i) => (
                    <a key={i} href={`#${item.id}`} className="blog-post-toc-link">
                      <span className="blog-post-toc-chevron" aria-hidden="true">&rsaquo;</span>{item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {relatedPostsFallback.length > 0 && (
              <div className="blog-post-sidebar-card">
                <h3 className="blog-post-sidebar-card-title">Related Posts</h3>
                <div className="blog-post-related-list">
                  {relatedPostsFallback.map((rp) => (
                    <Link key={rp.slug} href={`/blogs/${rp.slug}`} className="blog-post-related-item">
                      <span className="blog-post-related-thumb">
                        <img src={rp.image} alt={rp.alt || rp.title} />
                      </span>
                      <span className="blog-post-related-text">
                        <span className="blog-post-related-cat">{rp.category}</span>
                        <span className="blog-post-related-title">{rp.title}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
