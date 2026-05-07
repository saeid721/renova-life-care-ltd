"use client";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";
import "./DoctorsSection.css";

export default function DoctorsSection() {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const accentColors = [
    { from: "#428a26", to: "#86b437" },
    { from: "#05417d", to: "#1E6FAF" },
    { from: "#1E6FAF", to: "#428a26" },
    { from: "#86b437", to: "#05417d" },
  ];

  return (
    <Section id="doctors" variant="alternate">
      {/* Decorative Background Elements */}
      <div className="doctors-bg-orb doctors-bg-orb--1" aria-hidden="true" />
      <div className="doctors-bg-orb doctors-bg-orb--2" aria-hidden="true" />
      <div className="doctors-bg-grid" aria-hidden="true" />

      <div className="doctors-header-wrapper">
        <div className="doctors-label-pill">
          <span className="doctors-label-dot" aria-hidden="true" />
          Meet Our Team
        </div>
        <h2 className="doctors-heading">
          Expert Specialists,
          <span className="doctors-heading-accent"> Compassionate Care</span>
        </h2>
        <p className="doctors-subheading">
          Our doctors bring decades of experience and international training to
          deliver the best healthcare in Bangladesh.
        </p>
      </div>

      <div className="doctors-grid">
        {doctors.map((doc, index) => {
          const accent = accentColors[index % accentColors.length];
          return (
            <article
              key={doc.id}
              className="dcard"
              style={{
                "--accent-from": accent.from,
                "--accent-to": accent.to,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Top accent line */}
              <div className="dcard__accent-bar" aria-hidden="true" />

              {/* Image / Avatar */}
              <div className="dcard__visual">
                <div className="dcard__image-ring" aria-hidden="true" />
                <div className="dcard__image-wrap">
                  <Image
                    src={`/images/doctors/doctor-${doc.id}.jpg`}
                    alt={`Portrait of ${doc.name}`}
                    fill
                    className="dcard__image"
                    sizes="(max-width: 640px) 120px, 120px"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Fallback initials */}
                  <div className="dcard__initials" aria-hidden="true">
                    {getInitials(doc.name)}
                  </div>
                </div>

                {/* Availability indicator */}
                <div className="dcard__status" role="status" aria-label="Available for appointments">
                  <span className="dcard__status-dot" aria-hidden="true" />
                  <span className="dcard__status-text">Available</span>
                </div>
              </div>

              {/* Content */}
              <div className="dcard__body">
                <h3 className="dcard__name">{doc.name}</h3>
                <p className="dcard__specialty">{doc.specialty}</p>
                <p className="dcard__qualification">{doc.qualification}</p>

                {/* Stats row */}
                <div className="dcard__stats">
                  <div className="dcard__stat">
                    <span className="dcard__stat-value">{doc.experience}</span>
                    <span className="dcard__stat-label">Experience</span>
                  </div>
                  <div className="dcard__stat-divider" aria-hidden="true" />
                  <div className="dcard__stat">
                    <span className="dcard__stat-value">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {doc.rating}
                    </span>
                    <span className="dcard__stat-label">Rating</span>
                  </div>
                  <div className="dcard__stat-divider" aria-hidden="true" />
                  <div className="dcard__stat">
                    <span className="dcard__stat-value">{doc.patients}</span>
                    <span className="dcard__stat-label">Patients</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/appointment"
                  className="dcard__cta"
                  aria-label={`Book appointment with ${doc.name}`}
                >
                  <span>Book Appointment</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* View All CTA */}
      <div className="doctors-cta-row">
        <Link href="/doctors" className="doctors-cta-link">
          <span>View All Doctors</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}