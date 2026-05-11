import { DoctorsSection } from "@/components/sections";
import { siteConfig } from "@/constants/siteData";
import Link from "next/link";
import "@/styles/pages/doctors.css";

export const metadata = {
  title: `Our Doctors | ${siteConfig.name}`,
  description: `Meet the expert medical team at ${siteConfig.name} — BMDC-certified specialists with international training and years of experience in their fields.`,
  openGraph: {
    title: `Our Doctors | ${siteConfig.name}`,
    description: `Expert specialists at ${siteConfig.name} — compassionate, certified, and committed to your health.`,
    url: `${siteConfig.url}/doctors`,
  },
};



// ── Correct Icons for Actions ─────────────
const ProfileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);


export default function DoctorsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Our Medical Team</span>
          <h1 className="page-hero__title">
            Meet Our <span className="page-hero__highlight">Specialist Doctors</span>
          </h1>
          <p className="page-hero__subtitle">
            Internationally trained, BMDC-certified doctors dedicated to delivering the highest standard of patient care.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Doctors</span>
          </nav>
        </div>
      </section>

      {/* Doctors Section (reused) */}
      <DoctorsSection />

      {/* Join Our Team CTA */}
      <section className="page-section page-section--slate">
        <div className="page-section__container">
          <div className="page-join-grid">
            <div className="page-join-content">
              <span className="page-section__label">Career Opportunities</span>
              <h2 className="page-join-title">Are You a Medical Professional?</h2>
              <p className="page-join-text">
                We are always looking for talented, passionate doctors and healthcare workers to join our growing team.
                If you are dedicated to making a difference in patient lives, we want to hear from you.
              </p>
              <div className="page-join-benefits">
                {[
                  "Competitive salary and benefits",
                  "International training opportunities",
                  "Modern, well-equipped facilities",
                  "Collaborative and supportive team",
                ].map((benefit) => (
                  <div key={benefit} className="page-join-benefit-item">
                    <span className="page-join-check">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="page-cta-btn page-cta-btn--outline">
                Apply Now
              </Link>
            </div>
            <div className="page-join-visual">
              <div className="page-join-badge-stack">
                <div className="page-join-badge">
                  <span className="page-join-badge-num">50+</span>
                  <span className="page-join-badge-label">Specialists</span>
                </div>
                <div className="page-join-badge page-join-badge--accent">
                  <span className="page-join-badge-num">15+</span>
                  <span className="page-join-badge-label">Departments</span>
                </div>
                <div className="page-join-badge page-join-badge--green">
                  <span className="page-join-badge-num">100%</span>
                  <span className="page-join-badge-label">BMDC Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="page-section page-section--green">
        <div className="page-section__container page-cta-center">
          <h2 className="page-cta-title">Book a Consultation</h2>
          <p className="page-cta-subtitle">Choose your preferred specialist and schedule an appointment at your convenience.</p>
          <Link href="/appointment" className="page-cta-btn">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
