import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";
import "./BlogSection.css";

export default function BlogSection() {
  return (
    <Section id="blog" bg="bg-white">
      <SectionHeader
        label="Health Insights"
        title="Stay Informed, Stay Healthy"
        subtitle="Expert articles and health tips from our specialist team — written in easy-to-understand language."
      />

      <div className="blog-grid">
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className="blog-card"
          >
            {/* Image Container */}
            <div className="blog-image-container">
              <Image
                src={`/images/blog/image${post.id}.jpg`}
                alt={post.title}
                fill
                className="blog-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Fallback Icon */}
              <div className="blog-fallback" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#428a26"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="blog-category-badge">
                <span className="blog-category">
                  {post.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="blog-content">
              <div className="blog-meta">
                <span>{post.date}</span>
                <span className="blog-meta-separator">·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="blog-title">
                {post.title}
              </h3>
              <p className="blog-excerpt">
                {post.excerpt}
              </p>
              <div className="blog-read-more">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="blog-read-more-icon"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Read All Articles Button */}
      <div className="blog-view-all">
        <Link href="/blog" className="btn btn-primary blog-cta-btn">
        Read All Articles
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </Section>
  );
}