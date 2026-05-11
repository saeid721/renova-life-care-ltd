import { siteConfig } from "@/constants/siteData";
import AppointmentForm from "./AppointmentForm";
import "@/styles/pages/appointment.css";

export const metadata = {
  title: `Book Appointment | ${siteConfig.name}`,
  description: `Schedule your appointment with expert doctors at ${siteConfig.name}. Fast, secure, and convenient online booking for all medical specialties.`,
  openGraph: {
    title: `Book Appointment | ${siteConfig.name}`,
    description: `Book your health consultation online in minutes.`,
    url: `${siteConfig.url}/appointment`,
    type: "website",
  },
};

export default function AppointmentPage() {
  return (
    <div className="appt-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Book Online</span>
          <h1 className="page-hero__title">
            Schedule Your <span className="page-hero__highlight">Appointment</span>
          </h1>
          <p className="page-hero__subtitle">
            Quick, secure booking with Bangladesh's trusted healthcare providers. 
            Get confirmed within 1 hour.
          </p>
          
          {/* Progress indicator placeholder - rendered by client component */}
        </div>
      </section>

      {/* Form Section */}
      <section className="page-section">
        <div className="page-section__container">
          {/* Client Component handles all interactivity */}
          <AppointmentForm />
          
          {/* Sidebar Info */}
          <aside className="appt-sidebar">
            <div className="appt-sidebar__card card">
              <h4>🛡️ Why Book With Us?</h4>
              <ul className="appt-benefits">
                <li>✓ Instant confirmation</li>
                <li>✓ Free rescheduling</li>
                <li>✓ SSL-encrypted data</li>
                <li>✓ Expert doctors</li>
                <li>✓ Digital reports</li>
              </ul>
            </div>

            <div className="appt-sidebar__card card">
              <h4>📞 Need Help?</h4>
              <p>Our support team is available 24/7</p>
              <a href={`tel:${siteConfig.phone}`} className="appt-sidebar-phone">
                📞 {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="appt-sidebar-email">
                ✉️ {siteConfig.email}
              </a>
            </div>

            <div className="appt-sidebar__trust">
              🛡️ <span>Your data is secure & never shared</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="appt-trust-banner">
        <div className="appt-trust-banner__container">
          ✨ <span>Trusted by 50,000+ patients across Bangladesh</span> ✨
        </div>
      </section>
    </div>
  );
}