"use client";

import Link from "next/link";
import { useState } from "react";
import { pricingPlans } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";
import Button from "@/components/common/Button";
import "./PricingSection.css";

const planIcons = {
  basic: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  standard: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  premium: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

function CheckIcon({ isPopular }) {
  return (
    <div className={`check-icon ${isPopular ? "light" : ""}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
        viewBox="0 0 24 24" fill="none"
        stroke={isPopular ? "white" : "#428a26"}
        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getDisplayPrice = (plan) => {
    if (!isAnnual) return plan.price;
    return Math.round(plan.price * 0.8 * 12);
  };

  return (
    <Section id="pricing" variant="alternate">
      <SectionHeader
        label="Pricing Plans"
        title="Transparent, Affordable Healthcare"
        subtitle="No hidden fees. Choose the plan that fits your family's needs. All prices in BDT."
      />

      {/* Billing Toggle */}
      <div className="pricing-toggle">
        <span className={`toggle-label ${!isAnnual ? "active" : ""}`}>Monthly</span>
        <button
          className={`toggle-pill ${isAnnual ? "annual" : ""}`}
          onClick={() => setIsAnnual((v) => !v)}
          aria-label={isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}
          aria-pressed={isAnnual}
        />
        <span className={`toggle-label ${isAnnual ? "active" : ""}`}>Annual</span>
        {isAnnual && <span className="savings-badge">Save 20%</span>}
      </div>

      {/* Cards Grid */}
      <div className="pricing-grid">
        {pricingPlans.map((plan) => {
          const iconKey = plan.id ?? plan.name?.toLowerCase();
          const icon = planIcons[iconKey] ?? planIcons.standard;
          const displayPrice = getDisplayPrice(plan);

          return (
            <div
              key={plan.id}
              /* Side cards reuse .card + .card--hover from Card.css */
              className={`pricing-card ${plan.popular ? "popular" : "card card--hover"}`}
            >
              {plan.popular && (
                <div className="popular-badge">⭐ Most Popular</div>
              )}

              {/* Plan Icon */}
              <div
                className={`plan-icon ${plan.popular ? "light" : ""}`}
                style={{ color: plan.popular ? "#fff" : "var(--color-primary)" }}
              >
                {icon}
              </div>

              {/* Header */}
              <div className="card-header">
                <p className={`plan-name ${plan.popular ? "text-light" : ""}`}>
                  {plan.name}
                </p>
                <div className="price-container">
                  <span className={`currency ${plan.popular ? "text-light" : ""}`}>
                    {plan.currency}
                  </span>
                  <span className={`price ${plan.popular ? "text-light" : ""}`}>
                    {displayPrice.toLocaleString()}
                  </span>
                  <span className={`period ${plan.popular ? "text-light-dim" : ""}`}>
                    {isAnnual ? "/year" : (plan.period ?? "/month")}
                  </span>
                </div>
                <p className={`plan-description ${plan.popular ? "text-light-dim" : ""}`}>
                  {plan.description}
                </p>
              </div>

              {plan.valueTag && (
                <div className={`value-tag ${plan.popular ? "light" : ""}`}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {plan.valueTag}
                </div>
              )}

              <div className={`divider ${plan.popular ? "light" : ""}`} />

              {/* Features */}
              <ul className="features-list">
                {plan.features.map((feature) => (
                  <li key={feature} className="feature-item">
                    <CheckIcon isPopular={plan.popular} />
                    <span className={`feature-text ${plan.popular ? "text-light-dim" : ""}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/*
                Popular card → inline white CTA (matches the dark bg).
                Side cards   → project <Button variant="secondary"> from Button.css,
                               which gives the authority-color outline + gradient hover.
              */}
              {plan.popular ? (
                <Link href="/appointment" className="cta-button popular">
                  {plan.cta ?? "Get Started"}
                  <svg className="cta-arrow" xmlns="http://www.w3.org/2000/svg"
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ) : (
                <Button
                  href="/appointment"
                  variant="secondary"
                  className="btn-full"
                >
                  {plan.cta ?? "Get Started"}
                </Button>
              )}
            </div>
          );
        })}
      </div>

      <p className="custom-plans-note">
        Custom plans available for corporates &amp; clinics.{" "}
        <Link href="/contact" className="contact-link">
          Contact us →
        </Link>
      </p>
    </Section>
  );
}