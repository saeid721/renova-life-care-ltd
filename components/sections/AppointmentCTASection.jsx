"use client";
import Link from "next/link";
import { siteConfig } from "@/constants/siteData";
import { useState } from "react";

export default function AppointmentCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="appointment"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="appointment-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #05417d 0%, #07356a 60%, #042a54 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: "#428a26" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: "#86b437" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4">
              <span
                className="w-8 h-0.5 rounded-full"
                style={{ background: "#86b437" }}
                aria-hidden="true"
              />
              Book Now
            </span>
            <h2
              id="appointment-heading"
              className="font-heading font-bold text-4xl md:text-5xl text-white mb-5 leading-tight"
            >
              Ready to Take the
              <br />
              <span style={{ color: "#86b437" }}>Next Step</span> for Your
              Health?
            </h2>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Schedule an appointment with our specialists today. Online booking
              is fast, easy, and available 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #428a26, #86b437)",
                  boxShadow: "0 4px 20px rgba(66,138,38,0.4)",
                }}
                aria-label="Book appointment online"
              >
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
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Appointment Online
              </Link>
              <Link
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
                aria-label={`Call ${siteConfig.phone}`}
              >
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 10a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 0h3a2 2 0 0 1 2 1.72A12.84 12.84 0 0 0 9.1 5.07a2 2 0 0 1-.45 2.11L7.5 8.28a16 16 0 0 0 6.29 6.29l1.1-1.1a2 2 0 0 1 2.11-.45A12.84 12.84 0 0 0 20.28 14a2 2 0 0 1 1.72 2z" />
                </svg>
                Call {siteConfig.phone}
              </Link>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="rounded-3xl p-8 border border-white/20"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h3 className="font-heading font-bold text-white text-xl mb-6">
              Quick Appointment Request
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-white/80 text-sm font-medium mb-2"
                    htmlFor="appt-name"
                  >
                    Full Name
                  </label>
                  <input
                    id="appt-name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/15 border border-white/25 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                    aria-label="Full name"
                  />
                </div>
                <div>
                  <label
                    className="block text-white/80 text-sm font-medium mb-2"
                    htmlFor="appt-phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="appt-phone"
                    type="tel"
                    placeholder="+880 XXXX-XXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white/15 border border-white/25 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                    aria-label="Phone number"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-white/80 text-sm font-medium mb-2"
                  htmlFor="appt-dept"
                >
                  Department
                </label>
                <select
                  id="appt-dept"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full bg-white/15 border border-white/25 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                  aria-label="Select department"
                >
                  <option value="" className="text-slate-700">
                    Select Department
                  </option>
                  <option value="general" className="text-slate-700">
                    General Checkup
                  </option>
                  <option value="cardiology" className="text-slate-700">
                    Cardiology
                  </option>
                  <option value="orthopedics" className="text-slate-700">
                    Orthopedics
                  </option>
                  <option value="neurology" className="text-slate-700">
                    Neurology
                  </option>
                  <option value="pediatrics" className="text-slate-700">
                    Pediatrics
                  </option>
                  <option value="dental" className="text-slate-700">
                    Dental Care
                  </option>
                </select>
              </div>
              <div>
                <label
                  className="block text-white/80 text-sm font-medium mb-2"
                  htmlFor="appt-date"
                >
                  Preferred Date
                </label>
                <input
                  id="appt-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full bg-white/15 border border-white/25 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/60 transition-colors"
                  aria-label="Preferred appointment date"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-white text-sm mt-2 transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #428a26, #86b437)",
                }}
                aria-label="Submit appointment request"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}