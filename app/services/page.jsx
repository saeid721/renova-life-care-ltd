import { ServicesSection } from "@/components/sections";
import { siteConfig, services } from "@/constants/siteData";
import Link from "next/link";

export const metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description: `Explore comprehensive medical services at ${siteConfig.name} — from General Checkup to Cardiology, Orthopedics, Neurology, Pediatrics, and Dental Care.`,
  openGraph: {
    title: `Our Services | ${siteConfig.name}`,
    description: `Comprehensive medical care under one roof at ${siteConfig.name}.`,
    url: "https://www.renovalifecare.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">What We Offer</span>
          <h1 className="page-hero__title">
            Our <span className="page-hero__highlight">Medical Services</span>
          </h1>
          <p className="page-hero__subtitle">
            Comprehensive healthcare solutions delivered by specialist doctors using state-of-the-art facilities.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Services</span>
          </nav>
        </div>
      </section>

      {/* Services Section (reused from homepage) */}
      <ServicesSection />

      {/* Why Choose Us */}
      <section className="page-section page-section--slate">
        <div className="page-section__container">
          <div className="page-section__header">
            <span className="page-section__label">Why Choose Us</span>
            <h2 className="page-section__title">Healthcare You Can Trust</h2>
            <p className="page-section__subtitle">
              Every service is backed by certified specialists, modern equipment, and a patient-first philosophy.
            </p>
          </div>
          <div className="page-features-grid">
            {[
              { icon: "🏥", title: "State-of-the-Art Facilities", desc: "Modern diagnostic and surgical equipment maintained to the highest standards." },
              { icon: "👨‍⚕️", title: "BMDC Certified Specialists", desc: "All our doctors are registered with Bangladesh Medical & Dental Council." },
              { icon: "🕐", title: "24/7 Emergency Care", desc: "Round-the-clock emergency services with rapid response teams." },
              { icon: "💊", title: "Integrated Pharmacy", desc: "In-house pharmacy for convenient access to prescribed medications." },
              { icon: "📋", title: "Digital Health Records", desc: "Secure electronic records accessible by your care team anytime." },
              { icon: "🚑", title: "Ambulance Service", desc: "Fully-equipped ambulances available for patient transport citywide." },
            ].map((feature) => (
              <div key={feature.title} className="page-feature-card">
                <div className="page-feature-icon">{feature.icon}</div>
                <h3 className="page-feature-title">{feature.title}</h3>
                <p className="page-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section page-section--green">
        <div className="page-section__container page-cta-center">
          <h2 className="page-cta-title">Ready to Get Started?</h2>
          <p className="page-cta-subtitle">Book an appointment with one of our specialists today.</p>
          <Link href="/appointment" className="page-cta-btn">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
