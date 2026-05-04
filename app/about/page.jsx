import { AboutSection } from "@/components/sections";
import { siteConfig, stats } from "@/constants/siteData";

export const metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name} — our mission, vision, history, and the dedicated team behind Bangladesh's most trusted healthcare provider.`,
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: siteConfig.description,
    url: "https://www.renovalifecare.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Who We Are</span>
          <h1 className="page-hero__title">
            About <span className="page-hero__highlight">Renova Life Care</span>
          </h1>
          <p className="page-hero__subtitle">
            Delivering compassionate, world-class medicine to the people of Bangladesh since {siteConfig.established}.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">About</span>
          </nav>
        </div>
      </section>

      {/* About Section (reused from homepage) */}
      <AboutSection />

      {/* Mission & Vision */}
      <section className="page-section page-section--white">
        <div className="page-section__container">
          <div className="page-mv-grid">
            <div className="page-mv-card page-mv-card--mission">
              <div className="page-mv-icon">🎯</div>
              <h2 className="page-mv-title">Our Mission</h2>
              <p className="page-mv-text">
                To provide accessible, affordable, and high-quality healthcare to every individual in Bangladesh — ensuring no one is left without expert medical attention regardless of their background.
              </p>
            </div>
            <div className="page-mv-card page-mv-card--vision">
              <div className="page-mv-icon">🔭</div>
              <h2 className="page-mv-title">Our Vision</h2>
              <p className="page-mv-text">
                To be the most trusted and comprehensive healthcare network in South Asia — setting new standards in patient care, medical innovation, and community wellness.
              </p>
            </div>
            <div className="page-mv-card page-mv-card--values">
              <div className="page-mv-icon">💎</div>
              <h2 className="page-mv-title">Our Values</h2>
              <p className="page-mv-text">
                Integrity, compassion, excellence, and continuous learning — these are the pillars that define every decision we make and every patient interaction we have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="page-section page-section--green">
        <div className="page-section__container">
          <div className="page-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="page-stat-item">
                <p className="page-stat-value">{stat.value}</p>
                <p className="page-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
