"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, socialLinks } from "@/constants/navLinks";
import { siteConfig } from "@/constants/siteData";
import "../../styles/components/Navbar.css";

/* ── Inline SVG social icons ── */
const SocialIcon = ({ type }) => {
  const paths = {
    facebook:
      "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    linkedin:
      "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
    youtube:
      "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "instagram" ? (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      ) : type === "youtube" ? (
        <>
          <path d={paths.youtube} />
          <polygon points="10 15 15 11.75 10 8.5 10 15" />
        </>
      ) : (
        <path d={paths[type]} />
      )}
      {type === "linkedin" && (
        <circle cx="2" cy="2" r="1.5" transform="translate(0 7)" />
      )}
    </svg>
  );
};

/* ── Phone SVG ── */
const PhoneIcon = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 10a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 0h3a2 2 0 0 1 2 1.72A12.84 12.84 0 0 0 9.1 5.07a2 2 0 0 1-.45 2.11L7.5 8.28a16 16 0 0 0 6.29 6.29l1.1-1.1a2 2 0 0 1 2.11-.45A12.84 12.84 0 0 0 20.28 14a2 2 0 0 1 1.72 2z" />
  </svg>
);

/* ── Calendar SVG ── */
const CalendarIcon = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

/* ── Close SVG ── */
const CloseIcon = () => (
  <svg
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ── Email SVG ── */
const EmailIcon = ({ size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ════════════════════════════════════════════
   MAIN NAVBAR COMPONENT
   ════════════════════════════════════════════ */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const drawerRef = useRef(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Close on Escape key */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      {/* ── Top Announcement Bar (desktop only via CSS) ── */}
      <div className="top-bar" role="banner">
        <div className="top-bar-container">
          <div className="top-bar-left">
            {/* Emergency Phone */}
            <span className="emergency-badge">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 10a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 0h3a2 2 0 0 1 2 1.72A12.84 12.84 0 0 0 9.1 5.07a2 2 0 0 1-.45 2.11L7.5 8.28a16 16 0 0 0 6.29 6.29l1.1-1.1a2 2 0 0 1 2.11-.45A12.84 12.84 0 0 0 20.28 14a2 2 0 0 1 1.72 2z" />
              </svg>
              Emergency:&nbsp;{siteConfig.phone}
            </span>

            {/* Email */}
            <span className="email-badge">
              <EmailIcon />
              {siteConfig.email}
            </span>
          </div>

          {/* Social Icons */}
          <div className="top-bar-right">
            <nav
              className="topbar-social"
              aria-label="Follow us on social media"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="topbar-social-link"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={`main-header${isScrolled ? " scrolled" : ""}`}>
        <nav
          className="nav-container"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="logo-wrapper" aria-label="Renova Life Care — Home">
            <div className="logo">
              <Image
                src="/images/logo2.png"
                alt="Renova Life Care"
                width={180}
                height={64}
                priority
                style={{ width: "auto", height: "52px", maxHeight: "52px", objectFit: "contain" }}
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link${activeLink === link.href ? " active" : ""}`}
                  onClick={() => setActiveLink(link.href)}
                  aria-current={activeLink === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="nav-buttons">
            <Link href={`tel:${siteConfig.phone}`} className="btn-call">
              <PhoneIcon size={15} />
              Call Now
            </Link>
            <Link href="/appointment" className="btn-appointment">
              <CalendarIcon size={15} />
              Book Appointment
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`mobile-menu-btn${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* ── Backdrop Overlay ── */}
      <div
        className={`mobile-overlay${mobileOpen ? " visible" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* ── Side Drawer ── */}
      <aside
        id="mobile-drawer"
        className={`mobile-drawer${mobileOpen ? " open" : ""}`}
        ref={drawerRef}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <Link href="/" className="drawer-logo" onClick={closeDrawer} aria-label="Home">
            <Image
              src="/images/logo2.png"
              alt="Renova Life Care"
              width={160}
              height={56}
              style={{ width: "auto", height: "38px", maxHeight: "38px", objectFit: "contain" }}
            />
          </Link>
          <button
            className="drawer-close-btn"
            onClick={closeDrawer}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Contact strip inside drawer */}
        <div className="drawer-contact-info">
          <div className="drawer-contact-item">
            <PhoneIcon size={14} />
            <span>{siteConfig.phone}</span>
          </div>
          <div className="drawer-contact-item">
            <EmailIcon size={14} />
            <span>{siteConfig.email}</span>
          </div>
        </div>

        <hr className="drawer-divider" style={{ margin: "0.75rem 1rem 0.25rem" }} />

        {/* Drawer Nav Links */}
        <div className="drawer-body">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${activeLink === link.href ? " active" : ""}`}
              onClick={() => {
                setActiveLink(link.href);
                closeDrawer();
              }}
              aria-current={activeLink === link.href ? "page" : undefined}
            >
              <span className="nav-dot" aria-hidden="true" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Drawer Footer CTAs */}
        <div className="drawer-footer">
          <Link
            href={`tel:${siteConfig.phone}`}
            className="mobile-btn-call"
            onClick={closeDrawer}
          >
            <PhoneIcon size={16} />
            Call Now
          </Link>
          <Link
            href="/appointment"
            className="mobile-btn-appointment"
            onClick={closeDrawer}
          >
            <CalendarIcon size={16} />
            Book Appointment
          </Link>

          {/* Social row */}
          <nav className="drawer-social" aria-label="Social media links">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-social-link"
                aria-label={`Follow us on ${social.label}`}
              >
                <SocialIcon type={social.icon} />
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}