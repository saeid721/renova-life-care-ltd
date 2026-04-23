"use client";

import Link from "next/link";
import { siteConfig } from "@/constants/siteData";
import { useState, useEffect } from "react";
import "./AppointmentCTASection.css";

/**
 * AppointmentCTASection — Professional appointment booking section
 * Features: Animated background, smart form validation, accessibility-first design
 */
export default function AppointmentCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMinDateSet, setIsMinDateSet] = useState(false);

  // Set minimum date to today for date picker
  useEffect(() => {
    setIsMinDateSet(true);
  }, []);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(\+880|01)[0-9]{9,10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid Bangladesh phone number";
    }
    
    if (!formData.department) {
      newErrors.department = "Please select a department";
    }
    
    if (!formData.date) {
      newErrors.date = "Please select a preferred date";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", department: "", date: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const departments = [
    { value: "", label: "Select Department", disabled: true },
    { value: "general", label: "🩺 General Checkup", icon: "🩺" },
    { value: "cardiology", label: "❤️ Cardiology", icon: "❤️" },
    { value: "orthopedics", label: "🦴 Orthopedics", icon: "🦴" },
    { value: "neurology", label: "🧠 Neurology", icon: "🧠" },
    { value: "pediatrics", label: "👶 Pediatrics", icon: "👶" },
    { value: "dental", label: "🦷 Dental Care", icon: "🦷" },
    { value: "dermatology", label: "🧴 Dermatology", icon: "🧴" },
    { value: "ophthalmology", label: "👁️ Eye Care", icon: "👁️" },
  ];

  return (
    <section
      id="appointment"
      className="appointment-cta-section"
      aria-labelledby="appointment-heading"
    >
      {/* Animated Background */}
      <div className="appointment-bg-wrapper" aria-hidden="true">
        <div className="appointment-bg-gradient" />
        <div className="appointment-bg-dots" />
        <div className="appointment-bg-blob blob-1" />
        <div className="appointment-bg-blob blob-2" />
        <div className="appointment-bg-blob blob-3" />
        
        {/* Floating particles */}
        <div className="appointment-particles">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="appointment-particle"
              style={{
                left: `${15 + i * 14}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="appointment-container">
        <div className="appointment-grid">
          
          {/* Left - Content */}
          <div className="appointment-content-left">
            {/* Badge */}
            {/* <div className="appointment-badge-wrapper">
              <span className="appointment-badge-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.87-6.87A19.79 19.79 0 0 1 2 7.08V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.72c.127.946.36 1.874.69 2.76a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6.29 6.29l1.13-1.14a2 2 0 0 1 2.11-.45c.886.33 1.814.563 2.76.69A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <span className="appointment-badge-text">Book Now</span>
            </div> */}

            {/* Heading */}
            <h2 id="appointment-heading" className="appointment-heading">
              Ready to Take the Next Step
              <br />
              <span className="appointment-highlight">for Your Health?</span>
            </h2>
            
            {/* Description */}
            <p className="appointment-description">
              Expert care is just a click away. Schedule your consultation with 
              Bangladesh's trusted healthcare specialists. Fast, secure, and 
              available around the clock.
            </p>

            {/* Trust Features */}
            <ul className="appointment-features">
              <li className="appointment-feature-item">
                <span className="appointment-feature-icon" aria-hidden="true">✓</span>
                <span>Instant confirmation</span>
              </li>
              <li className="appointment-feature-item">
                <span className="appointment-feature-icon" aria-hidden="true">✓</span>
                <span>Free consultation call</span>
              </li>
              <li className="appointment-feature-item">
                <span className="appointment-feature-icon" aria-hidden="true">✓</span>
                <span>100% privacy guaranteed</span>
              </li>
            </ul>

            {/* Direct Contact */}
            <div className="appointment-direct-contact">
              <p className="appointment-contact-label">Prefer to talk?</p>
              <Link
                href={`tel:${siteConfig.phone}`}
                className="appointment-contact-link"
                aria-label={`Call us directly at ${siteConfig.phone}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.87-6.87A19.79 19.79 0 0 1 4.08 4.18 2 2 0 0 1 6.06 2h3a2 2 0 0 1 2 1.72c.127.946.36 1.874.69 2.76a2 2 0 0 1-.45 2.11L10.09 9.91a16 16 0 0 0 6.29 6.29l1.13-1.14a2 2 0 0 1 2.11-.45c.886.33 1.814.563 2.76.69A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{siteConfig.phone}</span>
              </Link>
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="appointment-form-card">
            {/* Card Header */}
            <div className="appointment-form-header">
              <h3 className="appointment-form-title">Quick Appointment Request</h3>
              <p className="appointment-form-subtitle">Fill the form & we'll contact you within 1 hour</p>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="appointment-alert appointment-alert-success" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Thank you! We'll contact you shortly.</span>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="appointment-alert appointment-alert-error" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span>Something went wrong. Please try again.</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="appointment-form" noValidate>
              {/* Name Field */}
              <div className="appointment-form-group">
                <label htmlFor="appt-name" className="appointment-form-label">
                  Full Name <span className="appointment-required" aria-hidden="true">*</span>
                </label>
                <div className={`appointment-input-wrapper ${errors.name ? "error" : ""}`}>
                  <svg className="appointment-input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <input
                    id="appt-name"
                    type="text"
                    placeholder="Dr. Fatima Rahman"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`appointment-form-input ${errors.name ? "input-error" : ""}`}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && (
                  <span id="name-error" className="appointment-error-message" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div className="appointment-form-group">
                <label htmlFor="appt-phone" className="appointment-form-label">
                  Phone Number <span className="appointment-required" aria-hidden="true">*</span>
                </label>
                <div className={`appointment-input-wrapper ${errors.phone ? "error" : ""}`}>
                  <svg className="appointment-input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.87-6.87A19.79 19.79 0 0 1 4.08 4.18 2 2 0 0 1 6.06 2h3a2 2 0 0 1 2 1.72c.127.946.36 1.874.69 2.76a2 2 0 0 1-.45 2.11L10.09 9.91a16 16 0 0 0 6.29 6.29l1.13-1.14a2 2 0 0 1 2.11-.45c.886.33 1.814.563 2.76.69A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <input
                    id="appt-phone"
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`appointment-form-input ${errors.phone ? "input-error" : ""}`}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    disabled={isSubmitting}
                    pattern="^(\+880|01)[0-9]{9,10}$"
                  />
                </div>
                {errors.phone && (
                  <span id="phone-error" className="appointment-error-message" role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Department Select */}
              <div className="appointment-form-group">
                <label htmlFor="appt-dept" className="appointment-form-label">
                  Department <span className="appointment-required" aria-hidden="true">*</span>
                </label>
                <div className={`appointment-input-wrapper ${errors.department ? "error" : ""}`}>
                  <svg className="appointment-input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <select
                    id="appt-dept"
                    value={formData.department}
                    onChange={(e) => handleChange("department", e.target.value)}
                    className={`appointment-form-select ${errors.department ? "input-error" : ""}`}
                    aria-invalid={errors.department ? "true" : "false"}
                    aria-describedby={errors.department ? "dept-error" : undefined}
                    disabled={isSubmitting}
                  >
                    {departments.map((dept) => (
                      <option
                        key={dept.value || "default"}
                        value={dept.value}
                        disabled={dept.disabled}
                        className="appointment-select-option"
                      >
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.department && (
                  <span id="dept-error" className="appointment-error-message" role="alert">
                    {errors.department}
                  </span>
                )}
              </div>

              {/* Date Field */}
              <div className="appointment-form-group">
                <label htmlFor="appt-date" className="appointment-form-label">
                  Preferred Date <span className="appointment-required" aria-hidden="true">*</span>
                </label>
                <div className={`appointment-input-wrapper ${errors.date ? "error" : ""}`}>
                  <svg className="appointment-input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <input
                    id="appt-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className={`appointment-form-input ${errors.date ? "input-error" : ""}`}
                    aria-invalid={errors.date ? "true" : "false"}
                    aria-describedby={errors.date ? "date-error" : undefined}
                    disabled={isSubmitting}
                    min={isMinDateSet ? new Date().toISOString().split("T")[0] : undefined}
                  />
                </div>
                {errors.date && (
                  <span id="date-error" className="appointment-error-message" role="alert">
                    {errors.date}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="appointment-submit-btn"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-label={isSubmitting ? "Submitting your request" : "Submit appointment request"}
              >
                {isSubmitting ? (
                  <>
                    <span className="appointment-btn-spinner" aria-hidden="true" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Request Appointment</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Privacy Note */}
            {/* <p className="appointment-privacy-note">
              🔒 Your information is secure and never shared. 
              <br className="appointment-mobile-break" />
              By submitting, you agree to our{" "}
              <Link href="/privacy" className="appointment-privacy-link">Privacy Policy</Link>.
            </p> */}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="appointment-bottom-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 32C240 48 480 16 720 24C960 32 1200 64 1440 48V80H0V32Z" fill="rgba(255,255,255,0.1)"/>
        </svg>
      </div>
    </section>
  );
}