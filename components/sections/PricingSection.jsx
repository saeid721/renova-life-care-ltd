import Link from "next/link";
import { pricingPlans } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";

export default function PricingSection() {
  return (
    <Section id="pricing" bg="bg-white">
      <SectionHeader
        label="Pricing Plans"
        title="Transparent, Affordable Healthcare"
        subtitle="No hidden fees. Choose the plan that fits your family's needs. All prices in BDT."
      />

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-3xl p-8 transition-all duration-300 ${
              plan.popular
                ? "bg-gradient-to-br from-authority to-accent text-white shadow-[0_20px_60px_rgba(5,65,125,0.25)] scale-105"
                : "bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 border border-slate-100"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <p
                className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                  plan.popular ? "text-white/70" : "text-primary"
                }`}
              >
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1">
                <span
                  className={`font-heading font-bold text-5xl ${
                    plan.popular ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.currency}
                  {plan.price.toLocaleString()}
                </span>
                <span
                  className={`text-sm ${
                    plan.popular ? "text-white/60" : "text-slate-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-3 text-sm ${
                  plan.popular ? "text-white/70" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>
            </div>
            {/* Divider */}
            <div
              className={`h-px mb-6 ${
                plan.popular ? "bg-white/20" : "bg-slate-100"
              }`}
            />
            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={plan.popular ? "white" : "#428a26"}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-white/85" : "text-slate-600"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/appointment"
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                plan.popular
                  ? "bg-white text-authority hover:bg-secondary hover:text-white"
                  : "bg-primary text-white hover:bg-primary-dark"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-slate-400 mt-8">
        Custom plans available for corporates.{" "}
        <Link href="/contact" className="text-primary font-semibold hover:underline">
          Contact us →
        </Link>
      </p>
    </Section>
  );
}