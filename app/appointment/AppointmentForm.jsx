"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Button from "@/components/common/Button";
import "@/styles/pages/appointment.css";

/* ═══════════════════════════════════════════════════════════════
   DATA & CONFIG
   ═══════════════════════════════════════════════════════════════ */
const DEPARTMENTS = [
  { id: "general", name: "General Checkup", icon: "🩺", desc: "Routine health screening", waitTime: "15-30 min" },
  { id: "cardiology", name: "Cardiology", icon: "❤️", desc: "Heart health, ECG, stress tests", waitTime: "30-45 min" },
  { id: "orthopedics", name: "Orthopedics", icon: "🦴", desc: "Bone, joint & muscle care", waitTime: "30-45 min" },
  { id: "neurology", name: "Neurology", icon: "🧠", desc: "Brain & nervous system", waitTime: "45-60 min" },
  { id: "pediatrics", name: "Pediatrics", icon: "👶", desc: "Child health & development", waitTime: "20-35 min" },
  { id: "dental", name: "Dental Care", icon: "🦷", desc: "Teeth cleaning, fillings", waitTime: "30-60 min" },
  { id: "dermatology", name: "Dermatology", icon: "🧴", desc: "Skin, hair & nail treatments", waitTime: "25-40 min" },
  { id: "ophthalmology", name: "Eye Care", icon: "👁️", desc: "Vision tests, eye diseases", waitTime: "30-50 min" },
  { id: "gynecology", name: "Gynecology", icon: "🤰", desc: "Women's health & prenatal", waitTime: "35-50 min" },
  { id: "oncology", name: "Oncology", icon: "🎗️", desc: "Cancer screening & treatment", waitTime: "45-75 min" },
];

const TIME_SLOTS = [
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
];

const BRANCHES = [
  { id: "dhaka-main", name: "Dhaka - Main Branch", address: "House 45, Road 12, Dhanmondi" },
  { id: "dhaka-uttara", name: "Dhaka - Uttara", address: "Sector 7, Road 4, Uttara" },
  { id: "chittagong", name: "Chittagong", address: "GEC Circle, Agrabad" },
  { id: "sylhet", name: "Sylhet", address: "Zindabazar, Amberkhana" },
  { id: "rajshahi", name: "Rajshahi", address: "Shaheb Bazar" },
];

const DOCTORS = {
  cardiology: [
    { id: "doc-c1", name: "Dr. Fatima Rahman", title: "Senior Cardiologist", exp: "15+ years", img: "👩‍⚕️" },
    { id: "doc-c2", name: "Dr. Ahmed Hassan", title: "Interventional Cardiologist", exp: "12 years", img: "👨‍⚕️" },
  ],
  orthopedics: [
    { id: "doc-o1", name: "Dr. Kamal Uddin", title: "Orthopedic Surgeon", exp: "18 years", img: "👨‍⚕️" },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   SVG ICONS (Inline for client component)
   ═══════════════════════════════════════════════════════════════ */
const Icons = {
  User: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Mail: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 4.08 4.18A2 2 0 0 1 6.06 2h3a2 2 0 0 1 2 1.72c.127.946.36 1.874.69 2.76a2 2 0 0 1-.45 2.11L10.09 9.91a16 16 0 0 0 6.29 6.29l1.13-1.14a2 2 0 0 1 2.11-.45c.886.33 1.814.563 2.76.69A2 2 0 0 1 22 16.92z"/></svg>,
  Calendar: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Location: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>,
  ArrowRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  ArrowLeft: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  Lock: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  Info: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
};

/* ═══════════════════════════════════════════════════════════════
   VALIDATION UTILS
   ═══════════════════════════════════════════════════════════════ */
const validateStep1 = (data) => {
  const errs = {};
  if (!data.fullName?.trim() || data.fullName.trim().length < 3) errs.fullName = "Please enter your full name";
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email";
  if (!data.phone?.trim() || !/^(\+880|01)[0-9]{9,10}$/.test(data.phone.replace(/\s/g, ""))) errs.phone = "Valid BD phone required";
  if (!data.dob) errs.dob = "Date of birth is required";
  if (!data.gender) errs.gender = "Please select gender";
  return errs;
};

const validateStep2 = (data) => {
  const errs = {};
  if (!data.department) errs.department = "Please select a department";
  if (!data.doctor) errs.doctor = "Please select a doctor";
  if (!data.branch) errs.branch = "Please choose a branch";
  if (!data.appointmentDate) errs.appointmentDate = "Select preferred date";
  if (!data.timeSlot) errs.timeSlot = "Select a time slot";
  return errs;
};

const validateStep3 = (data) => {
  const errs = {};
  if (!data.symptoms?.trim() || data.symptoms.trim().length < 10) errs.symptoms = "Please describe your symptoms (min 10 chars)";
  if (!data.consent) errs.consent = "You must agree to proceed";
  return errs;
};

/* ═══════════════════════════════════════════════════════════════
   CLIENT COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", dob: "", gender: "",
    department: "", doctor: "", branch: "", appointmentDate: "", timeSlot: "",
    symptoms: "", medicalHistory: "", consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const availableDoctors = useMemo(() => {
    return formData.department ? DOCTORS[formData.department] || [] : [];
  }, [formData.department]);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const nextStep = () => {
    let validationFn, stepData;
    if (step === 1) { validationFn = validateStep1; stepData = formData; }
    else if (step === 2) { validationFn = validateStep2; stepData = formData; }
    else if (step === 3) { validationFn = validateStep3; stepData = formData; }
    
    const errs = validationFn(stepData);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    
    setErrors({});
    setStep(prev => Math.min(prev + 1, 4));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateStep3(formData);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    
    setSubmitting(true);
    setErrors({});
    
    try {
      await new Promise(res => setTimeout(res, 2000));
      const ref = `APPT-${Date.now().toString(36).toUpperCase()}`;
      setBookingRef(ref);
      setBookingConfirmed(true);
    } catch (err) {
      setErrors({ submit: "Booking failed. Please try again or call us." });
    } finally {
      setSubmitting(false);
    }
  };

  // Confirmation View
  if (bookingConfirmed) {
    return (
      <div className="confirm-card card">
        <div className="confirm-header">
          <div className="confirm-icon">✓</div>
          <h3>Booking Reference</h3>
          <p className="confirm-ref">{bookingRef}</p>
        </div>
        
        <div className="confirm-details">
          <div className="confirm-row"><span>Patient</span><strong>{formData.fullName}</strong></div>
          <div className="confirm-row"><span>Department</span><strong>{DEPARTMENTS.find(d => d.id === formData.department)?.name}</strong></div>
          <div className="confirm-row"><span>Doctor</span><strong>{availableDoctors.find(d => d.id === formData.doctor)?.name}</strong></div>
          <div className="confirm-row"><span>Branch</span><strong>{BRANCHES.find(b => b.id === formData.branch)?.name}</strong></div>
          <div className="confirm-row"><span>Date & Time</span><strong>{formData.appointmentDate} at {formData.timeSlot}</strong></div>
        </div>

        <div className="confirm-actions">
          <Button variant="primary" href="/dashboard" className="confirm-btn">View My Appointments</Button>
          <Button variant="secondary" href="/" className="confirm-btn">Return Home</Button>
          <a href="tel:+8801234567890" className="confirm-call">📞 Need to reschedule? Call us</a>
        </div>

        <div className="confirm-tips">
          <Icons.Info />
          <p><strong>Before your visit:</strong> Arrive 15 minutes early, bring your ID & previous reports.</p>
        </div>
      </div>
    );
  }

  // Main Form
  return (
    <>
      {/* Progress Steps */}
      <div className="appt-progress">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`appt-progress__step ${step >= s ? "active" : ""} ${step > s ? "completed" : ""}`}>
            <div className="appt-progress__number">{step > s ? "✓" : s}</div>
            <span className="appt-progress__label">{s === 1 ? "Details" : s === 2 ? "Schedule" : "Confirm"}</span>
          </div>
        ))}
        <div className="appt-progress__line" />
      </div>

      <form onSubmit={handleSubmit} className="appt-form-wrapper">
        
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="appt-step card">
            <div className="appt-step__header">
              <Icons.User />
              <h3>Personal Information</h3>
              <p>Tell us about yourself</p>
            </div>

            <div className="appt-form-grid">
              <div className="appt-form__group">
                <label htmlFor="fullName">Full Name *</label>
                <div className="appt-input-wrap">
                  <Icons.User />
                  <input id="fullName" type="text" placeholder="Fatima Rahman" value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className={`appt-input ${errors.fullName ? "error" : ""}`} aria-invalid={!!errors.fullName} />
                </div>
                {errors.fullName && <span className="appt-error">{errors.fullName}</span>}
              </div>

              <div className="appt-form__group">
                <label htmlFor="email">Email Address *</label>
                <div className="appt-input-wrap">
                  <Icons.Mail />
                  <input id="email" type="email" placeholder="you@example.com" value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`appt-input ${errors.email ? "error" : ""}`} aria-invalid={!!errors.email} />
                </div>
                {errors.email && <span className="appt-error">{errors.email}</span>}
              </div>

              <div className="appt-form__group">
                <label htmlFor="phone">Phone Number *</label>
                <div className="appt-input-wrap">
                  <Icons.Phone />
                  <input id="phone" type="tel" placeholder="+880 1XXX-XXXXXX" value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={`appt-input ${errors.phone ? "error" : ""}`} aria-invalid={!!errors.phone} />
                </div>
                {errors.phone && <span className="appt-error">{errors.phone}</span>}
              </div>

              <div className="appt-form__group">
                <label htmlFor="dob">Date of Birth *</label>
                <div className="appt-input-wrap">
                  <Icons.Calendar />
                  <input id="dob" type="date" value={formData.dob}
                    onChange={(e) => updateField("dob", e.target.value)}
                    className={`appt-input ${errors.dob ? "error" : ""}`} max={minDate} aria-invalid={!!errors.dob} />
                </div>
                {errors.dob && <span className="appt-error">{errors.dob}</span>}
              </div>

              <div className="appt-form__group">
                <label>Gender *</label>
                <div className="appt-radio-group">
                  {["Male", "Female", "Other"].map((g) => (
                    <label key={g} className={`appt-radio ${formData.gender === g.toLowerCase() ? "selected" : ""}`}>
                      <input type="radio" name="gender" value={g.toLowerCase()}
                        checked={formData.gender === g.toLowerCase()}
                        onChange={(e) => updateField("gender", e.target.value)} />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
                {errors.gender && <span className="appt-error">{errors.gender}</span>}
              </div>
            </div>

            <div className="appt-step__footer">
              <Button type="button" variant="primary" onClick={nextStep} className="appt-btn-next">
                Continue <Icons.ArrowRight />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Appointment Details */}
        {step === 2 && (
          <div className="appt-step card">
            <div className="appt-step__header">
              <Icons.Calendar />
              <h3>Appointment Details</h3>
              <p>Choose your preferred schedule</p>
            </div>

            <div className="appt-form__group">
              <label>Select Department *</label>
              <div className="appt-dept-grid">
                {DEPARTMENTS.map((dept) => (
                  <button key={dept.id} type="button"
                    className={`appt-dept-card ${formData.department === dept.id ? "selected" : ""}`}
                    onClick={() => { updateField("department", dept.id); updateField("doctor", ""); }}>
                    <span className="appt-dept-icon">{dept.icon}</span>
                    <span className="appt-dept-name">{dept.name}</span>
                    <span className="appt-dept-wait">~{dept.waitTime}</span>
                  </button>
                ))}
              </div>
              {errors.department && <span className="appt-error">{errors.department}</span>}
            </div>

            {formData.department && availableDoctors.length > 0 && (
              <div className="appt-form__group">
                <label>Select Doctor *</label>
                <div className="appt-doctor-grid">
                  {availableDoctors.map((doc) => (
                    <label key={doc.id} className={`appt-doctor-card ${formData.doctor === doc.id ? "selected" : ""}`}>
                      <input type="radio" name="doctor" value={doc.id}
                        checked={formData.doctor === doc.id}
                        onChange={(e) => updateField("doctor", e.target.value)} />
                      <div className="appt-doctor-info">
                        <span className="appt-doctor-avatar">{doc.img}</span>
                        <div><strong>{doc.name}</strong><p>{doc.title} • {doc.exp}</p></div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.doctor && <span className="appt-error">{errors.doctor}</span>}
              </div>
            )}

            <div className="appt-form-row">
              <div className="appt-form__group">
                <label>Branch Location *</label>
                <div className="appt-input-wrap">
                  <Icons.Location />
                  <select value={formData.branch} onChange={(e) => updateField("branch", e.target.value)}
                    className={`appt-select ${errors.branch ? "error" : ""}`} aria-invalid={!!errors.branch}>
                    <option value="">Select a branch</option>
                    {BRANCHES.map((b) => (<option key={b.id} value={b.id}>{b.name}</option>))}
                  </select>
                </div>
                {errors.branch && <span className="appt-error">{errors.branch}</span>}
              </div>

              <div className="appt-form__group">
                <label>Preferred Date *</label>
                <div className="appt-input-wrap">
                  <Icons.Calendar />
                  <input type="date" value={formData.appointmentDate}
                    onChange={(e) => updateField("appointmentDate", e.target.value)}
                    className={`appt-input ${errors.appointmentDate ? "error" : ""}`} min={minDate} aria-invalid={!!errors.appointmentDate} />
                </div>
                {errors.appointmentDate && <span className="appt-error">{errors.appointmentDate}</span>}
              </div>
            </div>

            {formData.appointmentDate && (
              <div className="appt-form__group">
                <label>Select Time Slot *</label>
                <div className="appt-time-grid">
                  {TIME_SLOTS.map((slot) => {
                    const isBooked = Math.random() > 0.7;
                    return (
                      <button key={slot} type="button" disabled={isBooked}
                        className={`appt-time-slot ${formData.timeSlot === slot ? "selected" : ""} ${isBooked ? "booked" : ""}`}
                        onClick={() => updateField("timeSlot", slot)}>
                        {slot}{isBooked && <span className="appt-time-badge">Full</span>}
                      </button>
                    );
                  })}
                </div>
                {errors.timeSlot && <span className="appt-error">{errors.timeSlot}</span>}
              </div>
            )}

            <div className="appt-step__footer">
              <Button type="button" variant="secondary" onClick={prevStep} className="appt-btn-prev">
                <Icons.ArrowLeft /> Back
              </Button>
              <Button type="button" variant="primary" onClick={nextStep} className="appt-btn-next">
                Continue <Icons.ArrowRight />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Confirm */}
        {step === 3 && (
          <div className="appt-step card">
            <div className="appt-step__header">
              <Icons.Check />
              <h3>Review & Confirm</h3>
              <p>Verify your details before booking</p>
            </div>

            <div className="appt-summary-grid">
              <div className="appt-summary-card">
                <h4>👤 Patient</h4>
                <p><strong>{formData.fullName}</strong></p>
                <p>{formData.email}</p>
                <p>{formData.phone}</p>
              </div>
              <div className="appt-summary-card">
                <h4>🏥 Appointment</h4>
                <p><strong>{DEPARTMENTS.find(d => d.id === formData.department)?.name}</strong></p>
                <p>{availableDoctors.find(d => d.id === formData.doctor)?.name}</p>
                <p>{formData.appointmentDate} at {formData.timeSlot}</p>
              </div>
            </div>

            <div className="appt-form__group">
              <label htmlFor="symptoms">Describe Your Symptoms *</label>
              <textarea id="symptoms" rows="4" placeholder="Briefly describe what you're experiencing..."
                value={formData.symptoms} onChange={(e) => updateField("symptoms", e.target.value)}
                className={`appt-textarea ${errors.symptoms ? "error" : ""}`} aria-invalid={!!errors.symptoms} />
              {errors.symptoms && <span className="appt-error">{errors.symptoms}</span>}
            </div>

            <label className={`appt-checkbox ${errors.consent ? "error" : ""}`}>
              <input type="checkbox" checked={formData.consent}
                onChange={(e) => updateField("consent", e.target.checked)} />
              <span>I agree to the <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.</span>
            </label>
            {errors.consent && <span className="appt-error">{errors.consent}</span>}
            {errors.submit && <span className="appt-error appt-error--submit">{errors.submit}</span>}

            <div className="appt-step__footer">
              <Button type="button" variant="secondary" onClick={prevStep} className="appt-btn-prev">
                <Icons.ArrowLeft /> Edit
              </Button>
              <Button type="submit" variant="primary" disabled={submitting} className="appt-btn-confirm">
                {submitting ? <><span className="appt-spinner" /> Processing...</> : <><Icons.Lock /> Confirm Booking</>}
              </Button>
            </div>
          </div>
        )}
      </form>
    </>
  );
}