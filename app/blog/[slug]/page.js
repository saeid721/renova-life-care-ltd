// app/blog/[slug]/page.js
import Link from "next/link";
import { siteConfig, blogs } from "@/constants/siteData";
import Image from "next/image";
import BlogShareButtons from "@/components/common/BlogShareButtons";
import "@/styles/pages/blog-detail.css";

export async function generateMetadata({ params }) {
  const post = blogs.find((b) => b.slug === params.slug) || blogs[0];
  
  return {
    title: `${post.title} | Health Blog | ${siteConfig.name}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [`${siteConfig.url}/images/blog/image${post.id}.jpg`],
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      images: [`${siteConfig.url}/images/blog/image${post.id}.jpg`],
    },
  };
}

export default function BlogDetailPage({ params }) {
  const post = blogs.find((b) => b.slug === params.slug) || blogs[0];
  
  // Get related posts (same category, excluding current)
  const relatedPosts = blogs
    .filter((b) => b.category === post.category && b.id !== post.id)
    .slice(0, 3);

  const shareUrl = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <article className="blog-detail-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Health Insights</span>
          <h1 className="page-hero__title page-hero__title--blog">
            {post.title}
          </h1>
          <p className="page-hero__subtitle page-hero__subtitle--blog">
            {post.excerpt}
          </p>
          
          {/* Article Meta */}
          <div className="blog-meta-bar">
            <div className="blog-meta-left">
              <span className="blog-category-badge blog-category-badge--large">
                {post.category}
              </span>
              <time dateTime={post.date} className="blog-meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                {post.date}
              </time>
              <span className="blog-meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                {post.readTime}
              </span>
            </div>
            <div className="blog-meta-right">
              <span className="blog-meta-label">Share:</span>
              {/* Client Component for interactivity */}
              <BlogShareButtons title={post.title} url={shareUrl} />
            </div>
          </div>
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Featured Image */}
      <section className="blog-featured-image">
        <div className="blog-featured-image__container">
          <Image
            src={`/images/blog/image${post.id}.jpg`}
            alt={post.title}
            width={1200}
            height={600}
            className="blog-featured-image__main"
            priority
          />
          {/* Fallback */}
          <div className="blog-featured-image__fallback" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#428a26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="page-section page-section--white">
        <div className="page-section__container blog-content-wrapper">
          {/* Main Article */}
          <div className="blog-article">
            <div 
              className="blog-article__content" 
              dangerouslySetInnerHTML={{ __html: post.content || "<p>Content not available.</p>" }} 
            />
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="blog-tags">
                <span className="blog-tags__label">Tags:</span>
                <div className="blog-tags__list">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/blog?tag=${tag.toLowerCase()}`} className="blog-tag">
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author Box */}
            <div className="blog-author-box">
              <div className="blog-author-avatar">
                <Image
                  src={`/images/authors/author${post.authorId || 1}.jpg`}
                  alt={post.author}
                  width={64}
                  height={64}
                  className="blog-author-avatar__img"
                />
              </div>
              <div className="blog-author-info">
                <h4 className="blog-author-name">Dr. {post.author}</h4>
                <p className="blog-author-role">{post.authorRole || "Medical Specialist"}</p>
                <p className="blog-author-bio">
                  {post.authorBio || "Board-certified specialist dedicated to providing evidence-based health information."}
                </p>
                <Link href={`/team/${post.authorSlug || "specialist"}`} className="blog-author-link">
                  View Profile
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="blog-navigation">
              <Link href="/blog" className="blog-nav-btn blog-nav-btn--back">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to All Articles
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Table of Contents */}
            <div className="blog-toc">
              <h4 className="blog-toc__title">On This Page</h4>
              <nav className="blog-toc__nav">
                <ul className="blog-toc__list">
                  <li><a href="#introduction" className="blog-toc__link">Introduction</a></li>
                  <li><a href="#symptoms" className="blog-toc__link">Key Symptoms</a></li>
                  <li><a href="#diagnosis" className="blog-toc__link">Diagnostic Process</a></li>
                  <li><a href="#treatment" className="blog-toc__link">Treatment Options</a></li>
                  <li><a href="#prevention" className="blog-toc__link">Prevention Tips</a></li>
                  <li><a href="#faq" className="blog-toc__link">FAQs</a></li>
                </ul>
              </nav>
            </div>

            {/* Quick Contact CTA */}
            <div className="blog-cta-card">
              <div className="blog-cta-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h4 className="blog-cta-card__title">Need Expert Advice?</h4>
              <p className="blog-cta-card__text">
                Our specialists are ready to help. Book a consultation today.
              </p>
              <Link href="/appointments" className="btn-outline-white btn-sm blog-cta-card__btn">
                Book Appointment
              </Link>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="blog-related">
                <h4 className="blog-related__title">Related Articles</h4>
                <div className="blog-related__list">
                  {relatedPosts.map((related) => (
                    <Link key={related.id} href={`/blog/${related.slug}`} className="blog-related-card">
                      <div className="blog-related-card__image">
                        <Image
                          src={`/images/blog/image${related.id}.jpg`}
                          alt={related.title}
                          width={80}
                          height={60}
                          className="blog-related-card__img"
                        />
                      </div>
                      <div className="blog-related-card__content">
                        <span className="blog-related-card__category">{related.category}</span>
                        <h5 className="blog-related-card__title">{related.title}</h5>
                        <span className="blog-related-card__time">{related.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="page-section page-section--green">
        <div className="page-section__container page-cta-center">
          <span className="page-section__label">Stay Updated</span>
          <h2 className="page-cta-title">Subscribe to Our Health Newsletter</h2>
          <p className="page-cta-subtitle">
            Get the latest health tips and medical news delivered straight to your inbox every week.
          </p>
          <form className="page-newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="page-newsletter-input"
              aria-label="Email address"
              required
            />
            <button type="submit" className="page-cta-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: `${siteConfig.url}/images/blog/image${post.id}.jpg`,
            author: {
              "@type": "Person",
              name: `Dr. ${post.author}`,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/logo.png`,
              },
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/blog/${post.slug}`,
            },
          }),
        }}
      />
    </article>
  );
}