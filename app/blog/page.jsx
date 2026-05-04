import { BlogSection } from "@/components/sections";
import { siteConfig } from "@/constants/siteData";
import Link from "next/link";

export const metadata = {
  title: `Health Blog | ${siteConfig.name}`,
  description: `Health tips, expert medical articles, and wellness guides from the specialist team at ${siteConfig.name} — written in easy-to-understand language.`,
  openGraph: {
    title: `Health Blog | ${siteConfig.name}`,
    description: `Expert health articles and wellness tips from ${siteConfig.name}'s medical team.`,
    url: "https://www.renovalifecare.com/blog",
  },
};

export default function BlogPage() {
  const categories = [
    "All", "Cardiology", "Neurology", "Orthopedics",
    "Pediatrics", "Dental Care", "Nutrition", "Mental Health",
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Health Insights</span>
          <h1 className="page-hero__title">
            Our <span className="page-hero__highlight">Health Blog</span>
          </h1>
          <p className="page-hero__subtitle">
            Expert articles, wellness tips, and health guides from our team of specialist doctors — written for everyone.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Blog</span>
          </nav>
        </div>
      </section>

      {/* Category Filter */}
      <section className="page-section page-section--white" style={{ paddingBottom: 0 }}>
        <div className="page-section__container">
          <div className="page-blog-categories">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`page-blog-cat-btn${i === 0 ? " active" : ""}`}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts (reused) */}
      <BlogSection />

      {/* Newsletter CTA */}
      <section className="page-section page-section--slate">
        <div className="page-section__container page-cta-center">
          <span className="page-section__label">Stay Updated</span>
          <h2 className="page-cta-title">Subscribe to Our Health Newsletter</h2>
          <p className="page-cta-subtitle">
            Get the latest health tips and medical news delivered straight to your inbox every week.
          </p>
          <form className="page-newsletter-form" onSubmit={(e) => e.preventDefault()}>
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
    </>
  );
}
