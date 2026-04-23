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

  const getGradientClass = (index) => {
    const gradients = [
      "from-green-400-to-primary",
      "from-blue-400-to-authority",
      "from-secondary-to-green-500",
      "from-authority-to-accent",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Section id="doctors" bg="bg-slate-50">
      <SectionHeader
        label="Meet Our Team"
        title="Expert Specialists, Compassionate Care"
        subtitle="Our doctors bring decades of experience and international training to deliver the best healthcare in Bangladesh."
      />

      <div className="doctors-grid">
        {doctors.map((doc, index) => (
          <div
            key={doc.id}
            className="doctor-card"
          >
            {/* Image Area */}
            <div className="doctor-image-container">
              <Image
                src={`/images/doctors/doctor-${doc.id}.jpg`}
                alt={doc.name}
                fill
                className="doctor-image"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Fallback Initials (shown if image fails to load) */}
              <div className={`doctor-fallback ${getGradientClass(index)}`}>
                <span className="doctor-fallback-text">
                  {getInitials(doc.name)}
                </span>
              </div>
              {/* Available Badge */}
              <div className="doctor-available-badge">
                <div className="doctor-available-dot" />
                <span className="doctor-available-text">
                  Available
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="doctor-content">
              <h3 className="doctor-name">
                {doc.name}
              </h3>
              <p className="doctor-specialty">
                {doc.specialty}
              </p>
              <p className="doctor-qualification">{doc.qualification}</p>

              <div className="doctor-details">
                <span>{doc.experience} Exp.</span>
                <div className="doctor-rating">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#f59e0b"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="doctor-rating-value">
                    {doc.rating}
                  </span>
                </div>
                <span>{doc.patients} Patients</span>
              </div>

              <Link
                href="/appointment"
                className="doctor-appointment-btn"
                aria-label={`Book appointment with ${doc.name}`}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="doctors-view-all">
        <Link
          href="/doctors"
          className="doctors-view-all-btn"
          aria-label="View all doctors"
        >
          View All Doctors
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
    </Section>
  );
}