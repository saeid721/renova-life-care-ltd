"use client";

import { useState, useEffect, useMemo } from "react";
import {
  DEPARTMENTS, DOCTORS, BRANCHES, SLOTS,
  INITIAL_FORM, validateStep1, validateStep2, validateStep3,
} from "./appointmentData";
import "@/styles/pages/appointment.css";

/* ═══════════════════════════════════════════════════════════════
   INLINE SVG ICONS
   ═══════════════════════════════════════════════════════════════ */
const SVG_PROPS = { fill: "none", stroke: "currentColor", strokeWidth: "1.8" };

const IconUser     = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconMail     = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IconPhone    = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 4.08 4.18 2 2 0 0 1 6.06 2h3a2 2 0 0 1 2 1.72c.127.946.36 1.874.69 2.76a2 2 0 0 1-.45 2.11L10.09 9.91a16 16 0 0 0 6.29 6.29l1.13-1.14a2 2 0 0 1 2.11-.45c.886.33 1.814.563 2.76.69A2 2 0 0 1 22 16.92z"/></svg>;
const IconCalendar = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IconPin      = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconCheck    = ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
const IconArrowR   = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS} strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconArrowL   = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS} strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const IconLock     = ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const IconInfo     = ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" {...SVG_PROPS}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;

/* ═══════════════════════════════════════════════════════════════
   FIELD WRAPPER — label + icon + error message
   ═══════════════════════════════════════════════════════════════ */
function Field({ label, error, icon: IconComponent, children }) {
  return (
    <div className="appt-field">
      {label && <label>{label}</label>}
      {IconComponent
        ? (
          <div className="appt-input-wrap">
            <span className="appt-ico"><IconComponent size={16} /></span>
            {children}
          </div>
        )
        : children
      }
      {error && <span className="appt-err-msg">{error}</span>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STEP 1 — Personal Information
   ═══════════════════════════════════════════════════════════════ */
function Step1({ data, errors, upd, onNext }) {
  return (
    <div className="appt-card">
      <div className="appt-card__head">
        <div className="appt-card__icon">🪪</div>
        <div>
          <div className="appt-card__title">Patient Information</div>
          <div className="appt-card__sub">Tell us about yourself so we can serve you better</div>
        </div>
      </div>

      <div className="appt-card__body appt-stack">
        <div className="appt-grid-2">
          <Field label="Full Name *" icon={IconUser} error={errors.fullName}>
            <input
              className={`appt-inp${errors.fullName ? " err" : ""}`}
              type="text"
              placeholder="Fatima Rahman"
              value={data.fullName}
              onChange={e => upd("fullName", e.target.value)}
              autoComplete="name"
              aria-invalid={!!errors.fullName}
            />
          </Field>

          <Field label="Email Address *" icon={IconMail} error={errors.email}>
            <input
              className={`appt-inp${errors.email ? " err" : ""}`}
              type="email"
              placeholder="you@example.com"
              value={data.email}
              onChange={e => upd("email", e.target.value)}
              autoComplete="email"
              aria-invalid={!!errors.email}
            />
          </Field>

          <Field label="Phone Number *" icon={IconPhone} error={errors.phone}>
            <input
              className={`appt-inp${errors.phone ? " err" : ""}`}
              type="tel"
              placeholder="+880 1XXX-XXXXXX"
              value={data.phone}
              onChange={e => upd("phone", e.target.value)}
              autoComplete="tel"
              aria-invalid={!!errors.phone}
            />
          </Field>

          <Field label="Date of Birth *" icon={IconCalendar} error={errors.dob}>
            <input
              className={`appt-inp${errors.dob ? " err" : ""}`}
              type="date"
              value={data.dob}
              onChange={e => upd("dob", e.target.value)}
              max={new Date().toISOString().split("T")[0]}
              aria-invalid={!!errors.dob}
            />
          </Field>
        </div>

        <Field label="Gender *" error={errors.gender}>
          <div className="appt-radio-group">
            {["Male", "Female", "Other"].map(g => (
              <label
                key={g}
                className={`appt-radio-pill${data.gender === g.toLowerCase() ? " sel" : ""}`}
              >
                <input
                  type="radio"
                  name="gender"
                  value={g.toLowerCase()}
                  checked={data.gender === g.toLowerCase()}
                  onChange={e => upd("gender", e.target.value)}
                />
                {g}
              </label>
            ))}
          </div>
        </Field>
      </div>

      <div className="appt-card__foot">
        <span className="appt-step-counter">Step 1 of 3</span>
        <button className="btn btn-primary" onClick={onNext} type="button">
          Continue <IconArrowR size={16} />
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STEP 2 — Appointment Details
   ═══════════════════════════════════════════════════════════════ */
function Step2({ data, errors, upd, onNext, onBack, bookedSlots, minDate }) {
  const doctors = useMemo(
    () => (data.dept ? DOCTORS[data.dept] || [] : []),
    [data.dept]
  );

  return (
    <div className="appt-card">
      <div className="appt-card__head">
        <div className="appt-card__icon">📅</div>
        <div>
          <div className="appt-card__title">Appointment Details</div>
          <div className="appt-card__sub">Choose your department, doctor, and preferred time</div>
        </div>
      </div>

      <div className="appt-card__body appt-stack">

        {/* Department */}
        <Field label="Select Department *" error={errors.dept}>
          <div className="appt-dept-grid">
            {DEPARTMENTS.map(dept => (
              <button
                key={dept.id}
                type="button"
                className={`appt-dept-card${data.dept === dept.id ? " sel" : ""}`}
                onClick={() => { upd("dept", dept.id); upd("doctor", ""); }}
                aria-pressed={data.dept === dept.id}
              >
                <span className="appt-dept-card__icon">{dept.icon}</span>
                <span className="appt-dept-card__name">{dept.name}</span>
                <span className="appt-dept-card__wait">{dept.wait}</span>
              </button>
            ))}
          </div>
        </Field>

        {/* Doctor */}
        {data.dept && doctors.length > 0 && (
          <Field label="Select Doctor *" error={errors.doctor}>
            <div className="appt-doc-list">
              {doctors.map(doc => (
                <label
                  key={doc.id}
                  className={`appt-doc-card${data.doctor === doc.id ? " sel" : ""}`}
                >
                  <input
                    type="radio"
                    name="doctor"
                    value={doc.id}
                    checked={data.doctor === doc.id}
                    onChange={e => upd("doctor", e.target.value)}
                  />
                  <div className="appt-doc-avatar">{doc.avatar}</div>
                  <div>
                    <div className="appt-doc-name">{doc.name}</div>
                    <div className="appt-doc-meta">{doc.title} · {doc.exp} experience</div>
                  </div>
                </label>
              ))}
            </div>
          </Field>
        )}

        {data.dept && doctors.length === 0 && (
          <div className="appt-doc-fallback">
            Our team will assign the most suitable specialist upon confirmation.
          </div>
        )}

        {/* Branch & Date */}
        <div className="appt-grid-2">
          <Field label="Branch Location *" icon={IconPin} error={errors.branch}>
            <select
              className={`appt-sel${errors.branch ? " err" : ""}`}
              value={data.branch}
              onChange={e => upd("branch", e.target.value)}
              aria-invalid={!!errors.branch}
            >
              <option value="">Select a branch</option>
              {BRANCHES.map(b => (
                <option key={b.id} value={b.id}>{b.name} — {b.addr}</option>
              ))}
            </select>
          </Field>

          <Field label="Preferred Date *" icon={IconCalendar} error={errors.date}>
            <input
              className={`appt-inp${errors.date ? " err" : ""}`}
              type="date"
              value={data.date}
              onChange={e => upd("date", e.target.value)}
              min={minDate}
              aria-invalid={!!errors.date}
            />
          </Field>
        </div>

        {/* Time Slots */}
        {data.date && (
          <Field label="Select Time Slot *" error={errors.slot}>
            <div className="appt-time-grid">
              {SLOTS.map(slot => {
                const isBooked = bookedSlots.has(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isBooked}
                    className={[
                      "appt-slot-btn",
                      data.slot === slot ? "active" : "",
                      isBooked ? "booked" : "",
                    ].join(" ").trim()}
                    onClick={() => upd("slot", slot)}
                    aria-pressed={data.slot === slot}
                    aria-disabled={isBooked}
                  >
                    {slot}
                    {isBooked && <span className="appt-slot-badge">Full</span>}
                  </button>
                );
              })}
            </div>
          </Field>
        )}
      </div>

      <div className="appt-card__foot">
        <button className="appt-btn appt-btn-ghost" onClick={onBack} type="button">
          <IconArrowL size={16} /> Back
        </button>
        <button className="appt-btn appt-btn-primary" onClick={onNext} type="button">
          Continue <IconArrowR size={16} />
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STEP 3 — Review & Confirm
   ═══════════════════════════════════════════════════════════════ */
function Step3({ data, errors, upd, onBack, onSubmit, busy }) {
  const dept   = DEPARTMENTS.find(d => d.id === data.dept);
  const doctors = data.dept ? (DOCTORS[data.dept] || []) : [];
  const doctor  = doctors.find(d => d.id === data.doctor);
  const branch  = BRANCHES.find(b => b.id === data.branch);

  return (
    <form className="appt-card" onSubmit={onSubmit}>
      <div className="appt-card__head">
        <div className="appt-card__icon">✅</div>
        <div>
          <div className="appt-card__title">Review & Confirm</div>
          <div className="appt-card__sub">Verify your details before finalising your booking</div>
        </div>
      </div>

      <div className="appt-card__body appt-stack">
        {/* Summary cards */}
        <div className="appt-summary-grid">
          <div className="appt-summ-card">
            <h4>👤 Patient</h4>
            <p><strong>{data.fullName}</strong><br />{data.email}<br />{data.phone}</p>
          </div>
          <div className="appt-summ-card">
            <h4>🏥 Appointment</h4>
            <p>
              <strong>{dept?.name}</strong><br />
              {doctor?.name || "Doctor to be assigned"}<br />
              {branch?.name}
            </p>
          </div>
          <div className="appt-summ-card">
            <h4>📅 Schedule</h4>
            <p><strong>{data.date}</strong><br />{data.slot}</p>
          </div>
          <div className="appt-summ-card">
            <h4>👤 Profile</h4>
            <p>
              DOB: <strong>{data.dob}</strong><br />
              Gender: <strong style={{ textTransform: "capitalize" }}>{data.gender}</strong>
            </p>
          </div>
        </div>

        <div className="appt-divider" />

        {/* Symptoms */}
        <Field label="Describe Your Symptoms *" error={errors.symptoms}>
          <textarea
            className={`appt-ta${errors.symptoms ? " err" : ""}`}
            rows={4}
            placeholder="Describe what you're experiencing, how long it has been happening, and any relevant details…"
            value={data.symptoms}
            onChange={e => upd("symptoms", e.target.value)}
            aria-invalid={!!errors.symptoms}
          />
        </Field>

        {/* Medical History */}
        <Field label="Previous Medical History (optional)">
          <textarea
            className="appt-ta"
            rows={3}
            placeholder="Any existing conditions, allergies, or medications you're currently taking…"
            value={data.medHistory}
            onChange={e => upd("medHistory", e.target.value)}
          />
        </Field>

        {/* Consent */}
        <label className={`appt-check-wrap${errors.consent ? " err" : ""}`}>
          <input
            type="checkbox"
            checked={data.consent}
            onChange={e => upd("consent", e.target.checked)}
          />
          <span>
            I agree to the{" "}
            <a href="/terms" onClick={e => e.stopPropagation()}>Terms of Service</a> and{" "}
            <a href="/privacy" onClick={e => e.stopPropagation()}>Privacy Policy</a>.
            I consent to my information being used to facilitate this appointment.
          </span>
        </label>
        {errors.consent && <span className="appt-err-msg">{errors.consent}</span>}

        {errors.submit && (
          <div className="appt-submit-err">⚠️ {errors.submit}</div>
        )}
      </div>

      <div className="appt-card__foot">
        <button type="button" className="appt-btn appt-btn-ghost" onClick={onBack}>
          <IconArrowL size={16} /> Edit Details
        </button>
        <button type="submit" className="appt-btn appt-btn-primary" disabled={busy}>
          {busy
            ? <><span className="appt-spinner" /> Processing…</>
            : <><IconLock size={15} /> Confirm Booking</>
          }
        </button>
      </div>
    </form>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONFIRMATION VIEW
   ═══════════════════════════════════════════════════════════════ */
function Confirmation({ data, bookingRef, onReset }) {
  const dept   = DEPARTMENTS.find(d => d.id === data.dept);
  const doctors = data.dept ? (DOCTORS[data.dept] || []) : [];
  const doctor  = doctors.find(d => d.id === data.doctor);
  const branch  = BRANCHES.find(b => b.id === data.branch);

  const rows = [
    ["Patient",    data.fullName],
    ["Department", dept?.name],
    ["Doctor",     doctor?.name || "To be assigned"],
    ["Branch",     branch?.name],
    ["Date",       data.date],
    ["Time",       data.slot],
  ];

  return (
    <div className="appt-confirm-wrap">
      <div className="appt-confirm-card appt-card">
        <div className="appt-card__body">
          <div className="appt-confirm-icon">✅</div>
          <h2 className="appt-confirm-title">Booking Confirmed!</h2>
          <p style={{ color: "var(--appt-ink3)", marginBottom: 8 }}>Your reference number</p>
          <div className="appt-confirm-ref">{bookingRef}</div>

          <div className="appt-confirm-rows">
            {rows.filter(([, v]) => v).map(([k, v]) => (
              <div className="appt-conf-row" key={k}>
                <span>{k}</span>
                <strong>{v}</strong>
              </div>
            ))}
          </div>

          <div className="appt-confirm-actions">
            <a href="/" className="appt-btn appt-btn-primary">
              <IconCheck size={16} /> Go to Homepage
            </a>
            <button className="appt-btn appt-btn-ghost" onClick={onReset} type="button">
              Book Another Appointment
            </button>
          </div>

          <div className="appt-confirm-note">
            <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>💡</span>
            <p>
              <strong>Before your visit:</strong> Arrive 15 minutes early.
              Bring your national ID and any previous medical reports or prescriptions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════════════════════════════ */
function Sidebar({ phone, email }) {
  return (
    <aside className="appt-sidebar">
      <div className="appt-sb-card">
        <h4>Why book with us?</h4>
        <ul className="appt-benefit-list">
          {[
            "Instant confirmation",
            "Free rescheduling",
            "SSL-encrypted data",
            "Board-certified doctors",
            "Digital reports delivered",
            "24/7 support available",
          ].map(b => (
            <li key={b}>
              <span className="appt-benefit-dot">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="appt-sb-card">
        <h4>Need help?</h4>
        <p>Our support team is available 24/7</p>
        <a href={`tel:${phone}`} className="appt-contact-link">
          <span className="c-ico">📞</span> {phone}
        </a>
        <a href={`mailto:${email}`} className="appt-contact-link">
          <span className="c-ico">✉️</span> {email}
        </a>
      </div>

      <div className="appt-trust-badge">
        <span style={{ fontSize: 20 }}>🛡️</span>
        <span>Your personal data is never sold or shared with third parties.</span>
      </div>
    </aside>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN EXPORT — AppointmentForm
   Usage: <AppointmentForm phone="+880 1234-567890" email="appointments@clinic.com" />
   ═══════════════════════════════════════════════════════════════ */
export default function AppointmentForm({
  phone = "+880 1234-567890",
  email = "appointments@clinic.com",
}) {
  const [step,   setStep]   = useState(1);
  const [data,   setData]   = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [busy,   setBusy]   = useState(false);
  const [done,   setDone]   = useState(false);
  const [ref,    setRef]    = useState("");
  const [minDate, setMinDate] = useState("");

  /* Stable "booked" slots — generated once per session */
  const [bookedSlots] = useState(
    () => new Set(SLOTS.filter((_, i) => i % 3 === 2))
  );

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  /* Field updater — also clears the matching error */
  const upd = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: null }));
  };

  /* Advance / retreat step */
  const go = (direction) => {
    if (direction === 1) {
      const validators = { 1: validateStep1, 2: validateStep2, 3: validateStep3 };
      const e = validators[step](data);
      if (Object.keys(e).length) { setErrors(e); return; }
      setErrors({});
    }
    setStep(s => s + direction);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Final submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateStep3(data);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setBusy(true);
    setErrors({});
    try {
      await new Promise(resolve => setTimeout(resolve, 1800));
      setRef(`APPT-${Date.now().toString(36).toUpperCase()}`);
      setDone(true);
    } catch {
      setErrors({ submit: "Booking failed. Please try again or call us directly." });
    } finally {
      setBusy(false);
    }
  };

  /* Reset back to step 1 */
  const handleReset = () => {
    setDone(false);
    setStep(1);
    setData(INITIAL_FORM);
    setErrors({});
  };

  /* ── PROGRESS BAR ── */
  const STEPS = [
    { label: "Patient Info",  sub: "Personal details" },
    { label: "Schedule",      sub: "Date & doctor" },
    { label: "Confirm",       sub: "Review & book" },
  ];

  return (
    <>
      {/* Sticky progress */}
      {!done && (
        <div className="appt-progress-wrap">
          <nav className="appt-progress" aria-label="Booking progress">
            {STEPS.map((s, i) => {
              const n = i + 1;
              const cls = [
                "appt-progress__step",
                step === n ? "active" : "",
                step > n  ? "done"   : "",
              ].join(" ").trim();
              return (
                <div key={n} className={cls}>
                  <div className="appt-progress__num">{step > n ? "✓" : n}</div>
                  <div>
                    <div className="appt-progress__label">{s.label}</div>
                    <div className="appt-progress__sublabel">{s.sub}</div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      )}

      {/* Main body */}
      <div className="appt-body">
        {done && (
          <Confirmation data={data} bookingRef={ref} onReset={handleReset} />
        )}

        {!done && step === 1 && (
          <Step1
            data={data}
            errors={errors}
            upd={upd}
            onNext={() => go(1)}
          />
        )}

        {!done && step === 2 && (
          <Step2
            data={data}
            errors={errors}
            upd={upd}
            onNext={() => go(1)}
            onBack={() => go(-1)}
            bookedSlots={bookedSlots}
            minDate={minDate}
          />
        )}

        {!done && step === 3 && (
          <Step3
            data={data}
            errors={errors}
            upd={upd}
            onBack={() => go(-1)}
            onSubmit={handleSubmit}
            busy={busy}
          />
        )}

        {/* Sidebar only during form steps */}
        {!done && (
          <Sidebar phone={phone} email={email} />
        )}
      </div>
    </>
  );
}