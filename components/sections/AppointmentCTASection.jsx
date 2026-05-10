"use client";

import Link from "next/link";
import { siteConfig } from "@/constants/siteData";
import { useState, useEffect } from "react";
import "./AppointmentCTASection.css";

/* ─── SVG Icons ──────────────────────────────────────────── */
const Icon = {
  User: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Phone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.87-6.87A19.79 19.79 0 0 1 4.08 4.18 2 2 0 0 1 6.06 2h3a2 2 0 0 1 2 1.72c.127.946.36 1.874.69 2.76a2 2 0 0 1-.45 2.11L10.09 9.91a16 16 0 0 0 6.29 6.29l1.13-1.14a2 2 0 0 1 2.11-.45c.886.33 1.814.563 2.76.69A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Stethoscope: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
      <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/>
      <circle cx="20" cy="10" r="2"/>
    </svg>
  ),
  StethoscopeSmall: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
      <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/>
      <circle cx="20" cy="10" r="2"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Check: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Arrow: () => (
    <svg className="appt__submit-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  AlertCircle: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  Shield: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Clock: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Star: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

/* ─── Departments ────────────────────────────────────────── */
const DEPARTMENTS = [
  { value: "",              label: "Select Department",     disabled: true },
  { value: "general",      label: "General Checkup" },
  { value: "cardiology",   label: "Cardiology" },
  { value: "orthopedics",  label: "Orthopedics" },
  { value: "neurology",    label: "Neurology" },
  { value: "pediatrics",   label: "Pediatrics" },
  { value: "dental",       label: "Dental Care" },
  { value: "dermatology",  label: "Dermatology" },
  { value: "ophthalmology",label: "Eye Care" },
  { value: "gynecology",   label: "Gynecology & Obs." },
  { value: "oncology",     label: "Oncology" },
];

/* ─── Validation ─────────────────────────────────────────── */
const validate = (data) => {
  const errs = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errs.name = "Enter a valid full name";
  if (!data.phone.trim() || !/^(\+880|01)[0-9]{9,10}$/.test(data.phone.replace(/\s/g, "")))
    errs.phone = "Enter a valid Bangladesh phone number";
  if (!data.department)
    errs.department = "Please select a department";
  if (!data.date)
    errs.date = "Please select a preferred date";
  return errs;
};

/* ─── Component ──────────────────────────────────────────── */
export default function AppointmentCTASection() {
  const EMPTY = { name: "", phone: "", department: "", date: "" };

  const [form,       setForm]       = useState(EMPTY);
  const [errors,     setErrors]     = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status,     setStatus]     = useState(null); // "success" | "error"
  const [minDate,    setMinDate]    = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const change = (field, value) => {
    setForm(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: null }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setStatus(null);
    try {
      await new Promise(r => setTimeout(r, 1600));
      setStatus("success");
      setForm(EMPTY);
      setTimeout(() => setStatus(null), 6000);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls  = (f) => `appt__input${errors[f]  ? " appt__input--err"  : ""}`;
  const selectCls = (f) => `appt__select${errors[f] ? " appt__select--err" : ""}`;

  const FEATURES = [
    "Instant confirmation",
    "Free first consultation",
    "100% privacy guaranteed",
    "Available 24 / 7",
  ];

  const STATS = [
    { num: "50K+", label: "Patients Served"    },
    { num: "120+", label: "Specialist Doctors" },
    { num: "4.9★", label: "Average Rating"     },
  ];

  return (
    <section
      id="appointment"
      className="appt"
      aria-labelledby="appt-heading"
    >
      {/* Animated background */}
      <div className="appt__bg" aria-hidden="true">
        <div className="appt__bg-glow" />
        <div className="appt__bg-grid" />
        <div className="appt__bg-lines" />
        <div className="appt__orb appt__orb--a" />
        <div className="appt__orb appt__orb--b" />
        <div className="appt__orb appt__orb--c" />
      </div>

      <div className="appt__container">
        <div className="appt__grid">

          {/* ══ LEFT ══ */}
          <div className="appt__left">

            {/* Eyebrow */}
            <div className="appt__tag" role="presentation">
              <span className="appt__tag-dot" />
              <span className="appt__tag-text">Now Accepting Patients</span>
            </div>

            {/* Headline */}
            <h2 id="appt-heading" className="appt__headline">
              Your Health Deserves
              <em>Expert Care,</em>
              <span className="appt__headline-accent">Right Now.</span>
            </h2>

            {/* Subtext */}
            <p className="appt__subtext">
              Connect with Bangladesh's leading specialists in seconds.
              Smart, secure, and built around your wellbeing —
              book an appointment in under two minutes.
            </p>

            {/* Feature pills */}
            <ul className="appt__features" aria-label="Key benefits">
              {FEATURES.map((f) => (
                <li key={f} className="appt__feature">
                  <span className="appt__feature-icon"><Icon.Check /></span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="appt__stats" role="list" aria-label="Clinic statistics">
              {STATS.map((s) => (
                <div key={s.label} className="appt__stat" role="listitem">
                  <span className="appt__stat-num">{s.num}</span>
                  <span className="appt__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Phone */}
            <div className="appt__phone-block">
              <span className="appt__phone-label">Prefer a call?</span>
              <Link
                href={`tel:${siteConfig.phone}`}
                className="appt__phone-link"
                aria-label={`Call us at ${siteConfig.phone}`}
              >
                <span className="appt__phone-icon"><Icon.Phone /></span>
                <span>{siteConfig.phone}</span>
              </Link>
            </div>
          </div>

          {/* ══ RIGHT — Form Card ══ */}
          <div className="appt__card">

            {/* Card header */}
            <div className="appt__card-head">
              <div className="appt__card-icon-wrap">
                <Icon.Stethoscope />
              </div>
              <h3 className="appt__card-title">Book an Appointment</h3>
              <p className="appt__card-subtitle">
                We'll confirm within 1 hour — guaranteed
              </p>
            </div>

            {/* Card body */}
            <div className="appt__card-body">

              {/* Alerts */}
              {status === "success" && (
                <div className="appt__alert appt__alert--success" role="alert">
                  <span className="appt__alert-icon"><Icon.CheckCircle /></span>
                  <span>Appointment requested! Our team will call you shortly.</span>
                </div>
              )}
              {status === "error" && (
                <div className="appt__alert appt__alert--error" role="alert">
                  <span className="appt__alert-icon"><Icon.AlertCircle /></span>
                  <span>Something went wrong. Please try again or call us directly.</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={submit} className="appt__form" noValidate>

                {/* Name + Phone row */}
                <div className="appt__row">

                  {/* Name */}
                  <div className="appt__field">
                    <label htmlFor="appt-name" className="appt__label">
                      Full Name <span className="appt__req" aria-hidden="true">*</span>
                    </label>
                    <div className="appt__input-wrap">
                      <span className="appt__input-icon"><Icon.User /></span>
                      <input
                        id="appt-name"
                        type="text"
                        placeholder="Fatima Rahman"
                        value={form.name}
                        onChange={(e) => change("name", e.target.value)}
                        className={inputCls("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "err-name" : undefined}
                        disabled={submitting}
                        autoComplete="name"
                      />
                    </div>
                    {errors.name && (
                      <span id="err-name" className="appt__error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="appt__field">
                    <label htmlFor="appt-phone" className="appt__label">
                      Phone <span className="appt__req" aria-hidden="true">*</span>
                    </label>
                    <div className="appt__input-wrap">
                      <span className="appt__input-icon"><Icon.Phone /></span>
                      <input
                        id="appt-phone"
                        type="tel"
                        placeholder="01XXX-XXXXXX"
                        value={form.phone}
                        onChange={(e) => change("phone", e.target.value)}
                        className={inputCls("phone")}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "err-phone" : undefined}
                        disabled={submitting}
                        autoComplete="tel"
                      />
                    </div>
                    {errors.phone && (
                      <span id="err-phone" className="appt__error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Department */}
                <div className="appt__field">
                  <label htmlFor="appt-dept" className="appt__label">
                    Department <span className="appt__req" aria-hidden="true">*</span>
                  </label>
                  <div className="appt__input-wrap">
                    <span className="appt__input-icon"><Icon.StethoscopeSmall /></span>
                    <select
                      id="appt-dept"
                      value={form.department}
                      onChange={(e) => change("department", e.target.value)}
                      className={selectCls("department")}
                      aria-invalid={!!errors.department}
                      aria-describedby={errors.department ? "err-dept" : undefined}
                      disabled={submitting}
                    >
                      {DEPARTMENTS.map((d) => (
                        <option
                          key={d.value || "placeholder"}
                          value={d.value}
                          disabled={d.disabled}
                        >
                          {d.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.department && (
                    <span id="err-dept" className="appt__error" role="alert">
                      {errors.department}
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="appt__field">
                  <label htmlFor="appt-date" className="appt__label">
                    Preferred Date <span className="appt__req" aria-hidden="true">*</span>
                  </label>
                  <div className="appt__input-wrap">
                    <span className="appt__input-icon"><Icon.Calendar /></span>
                    <input
                      id="appt-date"
                      type="date"
                      value={form.date}
                      onChange={(e) => change("date", e.target.value)}
                      className={inputCls("date")}
                      aria-invalid={!!errors.date}
                      aria-describedby={errors.date ? "err-date" : undefined}
                      disabled={submitting}
                      min={minDate}
                    />
                  </div>
                  {errors.date && (
                    <span id="err-date" className="appt__error" role="alert">
                      {errors.date}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="appt__submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  aria-label={submitting ? "Submitting…" : "Request appointment"}
                >
                  {submitting ? (
                    <>
                      <span className="appt__spinner" aria-hidden="true" />
                      <span>Processing…</span>
                    </>
                  ) : (
                    <>
                      <span>Request Appointment</span>
                      <Icon.Arrow />
                    </>
                  )}
                </button>

                {/* Trust strip */}
                <div className="appt__trust">
                  <Icon.Shield />
                  <span>SSL Encrypted</span>
                  <span className="appt__trust-dot" />
                  <Icon.Clock />
                  <span>1-hour confirm</span>
                  <span className="appt__trust-dot" />
                  <Icon.Star />
                  <span>4.9 / 5 rating</span>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="appt__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 20 1440 40V80H0V40Z"
            fill="rgba(255,255,255,0.04)"
          />
          <path
            d="M0 60C240 30 600 80 960 50C1200 28 1380 60 1440 55V80H0V60Z"
            fill="rgba(255,255,255,0.025)"
          />
        </svg>
      </div>
    </section>
  );
}