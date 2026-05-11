// app/about/page.jsx
import { SectionHeader } from "@/components/common/Section";
import { siteConfig, stats } from "@/constants/siteData";
import Image from "next/image";
import "@/styles/pages/about.css";

export const metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name} — our mission, vision, history, and the dedicated team behind Bangladesh's most trusted healthcare provider.`,
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/about`,
  },
};

// ── Management team data ────────────────────────────────────────────────────
const managementTeam = [
  {
    name: "Dr. Rafiqul Islam",
    role: "Managing Director",
    specialty: "MBBS, FCPS (Medicine)",
    image: "/images/team/md.jpg",
    isMD: true,
    message:
      "At Renova Life Care, our mission has always been simple: to deliver world-class healthcare with a human touch. Every patient who walks through our doors deserves the best medical expertise paired with genuine compassion. We are committed to continuous growth, ethical practice, and making quality care accessible to all.",
  },
  {
    name: "Prof. Nasrin Akter",
    role: "Medical Director",
    specialty: "MBBS, MS (Gynaecology)",
    image: "/images/team/member1.jpg",
  },
  {
    name: "Dr. Kamal Hossain",
    role: "Chief Operations Officer",
    specialty: "MBA (Healthcare Management)",
    image: "/images/team/member2.jpg",
  },
  {
    name: "Dr. Shirin Sultana",
    role: "Head of Diagnostics",
    specialty: "MBBS, MD (Pathology)",
    image: "/images/team/member3.jpg",
  },
  {
    name: "Mr. Tanvir Ahmed",
    role: "Chief Financial Officer",
    specialty: "CA, MBA (Finance)",
    image: "/images/team/member4.jpg",
  },
  {
    name: "Dr. Farhana Begum",
    role: "Head of Nursing",
    specialty: "BSc Nursing, MPH",
    image: "/images/team/member5.jpg",
  },
];

const [md, ...teamMembers] = managementTeam;

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          PAGE HERO BANNER
      ══════════════════════════════════════ */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Who We Are</span>
          <h1 className="page-hero__title">
            About <span className="page-hero__highlight">Renova Life Care</span>
          </h1>
          <p className="page-hero__subtitle">
            Delivering compassionate, world-class medicine to the people of Bangladesh since{" "}
            {siteConfig.established}.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">About</span>
          </nav>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <section className="page-section">
        <div className="page-section__container">
          <div className="about-grid">

            {/* Left — Image */}
            <div className="about-image-wrapper anim-fade-left">
              <div className="about-image-container">
                <Image
                  src="/images/about.jpg"
                  alt="Renova Life Care medical team"
                  fill
                  className="about-image"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="about-overlay-badge">
                  <div className="about-badge-content">
                    <div className="about-badge-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#428a26"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                    </div>
                    <div>
                      <p className="about-badge-title">BMDC Certified</p>
                      <p className="about-badge-subtitle">All doctors verified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="about-floating-card anim-fade-up-d2">
                <div className="about-floating-content">
                  <div className="about-floating-stat">
                    <p className="about-floating-value">15+</p>
                    <p className="about-floating-label">Years</p>
                  </div>
                  <div className="about-floating-divider" />
                  <div className="about-floating-stat">
                    <p className="about-floating-value">50K+</p>
                    <p className="about-floating-label">Patients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Content */}
            <div className="about-content anim-fade-right">
              <SectionHeader
                label="About Us"
                title="Compassionate Care, <span class='text-primary'>Expert Medicine</span>"
                subtitle={siteConfig.description}
                align="left"
                titleClassName="!text-left"
              />

              <div className="about-features">
                {[
                  { icon: "🩺", title: "Expert Doctors",         desc: "BMDC-certified specialists with international training" },
                  { icon: "🏥", title: "Modern Facilities",      desc: "State-of-the-art equipment and hygienic environment" },
                  { icon: "💙", title: "Patient-First Approach", desc: "Compassionate care tailored to your needs" },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`about-feature-item anim-fade-up anim-d${i + 1}`}
                  >
                    <span className="about-feature-icon">{item.icon}</span>
                    <div>
                      <h4 className="about-feature-title">{item.title}</h4>
                      <p className="about-feature-description">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="about-stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="about-stat-item">
                    <p className="about-stat-value">{stat.value}</p>
                    <p className="about-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION · VISION · VALUES
      ══════════════════════════════════════ */}
      <section className="page-section page-section--white">
        <div className="page-section__container">
          <div className="page-mv-grid">
            <div className="page-mv-card page-mv-card--mission anim-fade-up anim-d1">
              <div className="page-mv-icon">🎯</div>
              <h2 className="page-mv-title">Our Mission</h2>
              <p className="page-mv-text">
                To provide accessible, affordable, and high-quality healthcare to every individual in
                Bangladesh — ensuring no one is left without expert medical attention regardless of
                their background.
              </p>
            </div>
            <div className="page-mv-card page-mv-card--vision anim-fade-up anim-d2">
              <div className="page-mv-icon">🔭</div>
              <h2 className="page-mv-title">Our Vision</h2>
              <p className="page-mv-text">
                To be the most trusted and comprehensive healthcare network in South Asia — setting
                new standards in patient care, medical innovation, and community wellness.
              </p>
            </div>
            <div className="page-mv-card page-mv-card--values anim-fade-up anim-d3">
              <div className="page-mv-icon">💎</div>
              <h2 className="page-mv-title">Our Values</h2>
              <p className="page-mv-text">
                Integrity, compassion, excellence, and continuous learning — these are the pillars
                that define every decision we make and every patient interaction we have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BANNER
      ══════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════
          MD MESSAGE
      ══════════════════════════════════════ */}
      <section className="page-section page-section--white" id="md-message">
        <div className="page-section__container">
          <div className="md-section-inner">

            {/* decorative background quote */}
            <span className="md-bg-quote" aria-hidden="true">&ldquo;</span>

            <div className="md-grid">

              {/* Left — Photo */}
              <div className="md-photo-col anim-fade-left">
                <div className="md-photo-frame">
                  <div className="md-photo-ring" />
                  <div className="md-photo-img-wrap">
                    <Image
                      src={md.image}
                      alt={md.name}
                      fill
                      className="md-photo-img"
                      sizes="(max-width: 768px) 220px, 300px"
                    />
                  </div>
                  <div className="md-signature-badge">
                    <svg
                      className="md-sig-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                    <span>BMDC Verified</span>
                  </div>
                </div>

                <div className="md-identity">
                  <h3 className="md-name">{md.name}</h3>
                  <p className="md-role">{md.role}</p>
                  <p className="md-specialty">{md.specialty}</p>
                </div>
              </div>

              {/* Right — Message */}
              <div className="md-message-col anim-fade-right">
                <div className="md-label-row">
                  <span className="md-label-dot" />
                  <span className="md-label-text">Message from our MD</span>
                </div>

                <h2 className="md-heading">
                  A Word From Our{" "}
                  <span className="md-heading-accent">Managing Director</span>
                </h2>

                <div className="md-quote-wrap">
                  <svg
                    className="md-open-quote"
                    viewBox="0 0 44 32"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M0 32V19.2C0 8.96 6.187 2.773 18.56 0L20.907 4.48C15.04 5.76 11.733 8.96 10.667 13.867H17.067V32H0ZM26.133 32V19.2C26.133 8.96 32.32 2.773 44.693 0L47.04 4.48C41.173 5.76 37.867 8.96 36.8 13.867H43.2V32H26.133Z" />
                  </svg>
                  <p className="md-message-text">{md.message}</p>
                </div>

                <div className="md-divider" />

                <div className="md-stats-row">
                  {[
                    { value: "15+",  label: "Years Leading" },
                    { value: "50K+", label: "Lives Touched" },
                    { value: "98%",  label: "Patient Satisfaction" },
                  ].map((s) => (
                    <div key={s.label} className="md-stat-pill">
                      <strong className="md-stat-val">{s.value}</strong>
                      <span className="md-stat-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MANAGEMENT TEAM
      ══════════════════════════════════════ */}
      <section className="page-section" id="management">
        <div className="page-section__container">

          {/* Section header */}
          <div className="mgmt-header">
            <span className="mgmt-header__label">Our Leadership</span>
            <h2 className="mgmt-header__title">
              The Team Behind{" "}
              <span className="mgmt-header__accent">Our Excellence</span>
            </h2>
            <p className="mgmt-header__subtitle">
              Experienced leaders driving innovation, compassion, and quality across every department.
            </p>
          </div>

          <div className="mgmt-grid">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`mgmt-card anim-fade-up anim-d${(i % 5) + 1}`}
              >
                {/* Green top bar */}
                <div className="mgmt-card-accent" />

                {/* Avatar */}
                <div className="mgmt-avatar-wrap">
                  <div className="mgmt-avatar-ring" />
                  <div className="mgmt-avatar-img">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="mgmt-img"
                      sizes="120px"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="mgmt-info">
                  <h4 className="mgmt-name">{member.name}</h4>
                  <p className="mgmt-role">{member.role}</p>
                  <span className="mgmt-specialty-tag">{member.specialty}</span>
                </div>

                {/* Social */}
                <div className="mgmt-social">
                  <a href="#" className="mgmt-social-btn" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="mgmt-social-btn" aria-label="Email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}