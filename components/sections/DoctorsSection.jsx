"use client";

import Image from "next/image";
import { useState } from "react";
import { doctors } from "@/constants/siteData";
import Button from "@/components/common/Button";
import { Section } from "@/components/common/Section";
import "./DoctorsSection.css";

// ── Icons ─────────────────────────────────────────────────────
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

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--color-status-warning)" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ── Initials Fallback Component (JSX - No TypeScript) ─────────
const InitialsFallback = ({ name, accentFrom, accentTo }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div 
      className="dcard__image-wrap"
      style={{ 
        background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "2rem",
        fontWeight: "var(--font-weight-bold)",
      }}
      aria-label={`${name} - photo unavailable`}
    >
      <span className="initials-fallback">{initials}</span>
    </div>
  );
};

export default function DoctorsSection() {
  const accentColors = [
    { from: "var(--color-authority)", to: "var(--color-secondary)" },
    { from: "var(--color-primary-dark)", to: "var(--color-primary)" },
    { from: "var(--color-primary)", to: "var(--color-authority)" },
    { from: "var(--color-secondary)", to: "var(--color-primary-dark)" },
  ];

  const [imageErrors, setImageErrors] = useState({});

  return (
    <Section id="doctors" variant="alternate">
      {/* Decorative Background Elements */}
      <div className="doctors-bg-orb doctors-bg-orb--1" aria-hidden="true" />
      <div className="doctors-bg-orb doctors-bg-orb--2" aria-hidden="true" />
      <div className="doctors-bg-grid" aria-hidden="true" />

      {/* Header */}
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

      {/* Doctors Grid */}
      <div className="doctors-grid">
        {doctors.map((doc, index) => {
          const accent = accentColors[index % accentColors.length];
          const hasImageError = imageErrors[doc.id];

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
                
                {hasImageError ? (
                  <InitialsFallback 
                    name={doc.name} 
                    accentFrom={accent.from} 
                    accentTo={accent.to} 
                  />
                ) : (
                  <div className="dcard__image-wrap">
                    <Image
                      src={`/images/doctors/doctor-${doc.id}.jpg`}
                      alt={`Portrait of ${doc.name}`}
                      fill
                      sizes="(max-width: 559px) 150px, 180px"
                      className="dcard__image"
                      onError={() => setImageErrors((prev) => ({ ...prev, [doc.id]: true }))}
                    />
                  </div>
                )}

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
                      <StarIcon />
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

                {/* Two CTA buttons - Stacked */}
                <div className="dcard-cta-group">
                  <Button variant="secondary" href={`/doctors/${doc.id}`}>
                    <ProfileIcon /> Doctor Profile
                  </Button>
                  <Button variant="primary" href={`/appointment?doctor=${doc.id}`}>
                    <CalendarIcon /> Book Appointment
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* View All CTA */}
      <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
        <Button variant="primary" className="btn-lg" href="/doctors">
          <UsersIcon /> View All Doctors
        </Button>
      </div>
    </Section>
  );
}