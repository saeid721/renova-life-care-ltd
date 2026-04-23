import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";
import "./PortfolioSection.css";

export default function PortfolioSection() {
  const getGradientClass = (index) => {
    const gradients = [
      "gradient-authority-accent",
      "gradient-primary-secondary",
      "gradient-secondary-primary",
      "gradient-accent-authority",
      "gradient-primary-fade",
      "gradient-authority-fade",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Section id="portfolio" bg="bg-slate-50">
      <SectionHeader
        label="Our Facilities"
        title="World-Class Infrastructure"
        subtitle="State-of-the-art facilities designed for your comfort, safety, and the best medical outcomes."
      />

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`portfolio-item ${index === 0 ? "portfolio-item-large" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title} facility`}
          >
            {/* Background Image */}
            <div className="portfolio-image-container">
              <Image
                src={`/images/portfolio/image${item.id}.jpg`}
                alt={item.title}
                fill
                className="portfolio-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Fallback Gradient */}
              <div className={`portfolio-fallback ${getGradientClass(index)}`} aria-hidden="true" />
            </div>
            {/* Overlay */}
            <div className="portfolio-overlay" aria-hidden="true" />
            {/* Content */}
            <div className="portfolio-content">
              <span className="portfolio-category">
                {item.category}
              </span>
              <h3 className="portfolio-title">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-view-all">
        <Link
          href="/about#facilities"
          className="portfolio-view-all-btn"
          aria-label="View all facilities"
        >
          View All Facilities
        </Link>
      </div>
    </Section>
  );
}