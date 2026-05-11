import { siteConfig } from "@/constants/siteData";
import Link from "next/link";
import Button from "@/components/common/Button";
import "@/styles/pages/package.css";

export const metadata = {
  title: `Our Package | ${siteConfig.name}`,
  description: `Explore comprehensive medical services at ${siteConfig.name} — from General Checkup to Cardiology, Orthopedics, Neurology, Pediatrics, and Dental Care.`,
  openGraph: {
    title: `Our Package | ${siteConfig.name}`,
    description: `Comprehensive medical care under one roof at ${siteConfig.name}.`,
    url: `${siteConfig.url}/packages`,
  },
};

/* ═══════════════════════════════════════════════════════════════
   STATIC PLANS DATA
   ═══════════════════════════════════════════════════════════════ */
   const pricingPlans = [
    {
      id: "package-1",
      name: "Package-1",
      description: "Essential health screening",
      price: 5900,
      totalCost: 7710,
      savings: 1810,
      popular: false,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Random Blood Sugar",                         price: 200  },
        { name: "Lipid Profile (Random)",                     price: 1400 },
        { name: "Blood Grouping & RH Factor",                 price: 300  },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "HBsAg",                                      price: 1000 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 110  },
      ],
    },
    {
      id: "package-2",
      name: "Package-2",
      description: "Comprehensive wellness check",
      price: 10650,
      totalCost: 14030,
      savings: 3380,
      popular: true,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Blood Sugar (Fasting & 2 hrs ABF)",          price: 400  },
        { name: "HbA1c",                                      price: 1400 },
        { name: "Lipid Profile (Fasting)",                    price: 1400 },
        { name: "Liver Function Test",                        price: 1000 },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "Serum Uric Acid",                            price: 600  },
        { name: "Serum Electrolytes",                         price: 1000 },
        { name: "TSH",                                        price: 1000 },
        { name: "HBsAg",                                      price: 1000 },
        { name: "PSA",                                        price: 1400 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 130  },
      ],
    },
    {
      id: "package-3",
      name: "Package-3",
      description: "Advanced full-body package",
      price: 12850,
      totalCost: 16930,
      savings: 4080,
      popular: false,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Blood Sugar (Fasting & 2 hrs ABF)",          price: 400  },
        { name: "HbA1c",                                      price: 1400 },
        { name: "Lipid Profile (Fasting)",                    price: 1400 },
        { name: "Liver Function Test",                        price: 1000 },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "Serum Uric Acid",                            price: 600  },
        { name: "Serum Electrolytes",                         price: 1000 },
        { name: "TSH",                                        price: 1000 },
        { name: "HBsAg",                                      price: 1000 },
        { name: "Pap Smear",                                  price: 1200 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Mammography of Both Breast",                 price: 3000 },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 230  },
      ],
    },
    {
      id: "package-1",
      name: "Package-4",
      description: "Essential health screening",
      price: 5900,
      totalCost: 7710,
      savings: 1810,
      popular: false,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Random Blood Sugar",                         price: 200  },
        { name: "Lipid Profile (Random)",                     price: 1400 },
        { name: "Blood Grouping & RH Factor",                 price: 300  },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "HBsAg",                                      price: 1000 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 110  },
      ],
    },
    {
      id: "package-2",
      name: "Package-5",
      description: "Comprehensive wellness check",
      price: 10650,
      totalCost: 14030,
      savings: 3380,
      popular: true,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Blood Sugar (Fasting & 2 hrs ABF)",          price: 400  },
        { name: "HbA1c",                                      price: 1400 },
        { name: "Lipid Profile (Fasting)",                    price: 1400 },
        { name: "Liver Function Test",                        price: 1000 },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "Serum Uric Acid",                            price: 600  },
        { name: "Serum Electrolytes",                         price: 1000 },
        { name: "TSH",                                        price: 1000 },
        { name: "HBsAg",                                      price: 1000 },
        { name: "PSA",                                        price: 1400 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 130  },
      ],
    },
    {
      id: "package-3",
      name: "Package-6",
      description: "Advanced full-body package",
      price: 12850,
      totalCost: 16930,
      savings: 4080,
      popular: false,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Blood Sugar (Fasting & 2 hrs ABF)",          price: 400  },
        { name: "HbA1c",                                      price: 1400 },
        { name: "Lipid Profile (Fasting)",                    price: 1400 },
        { name: "Liver Function Test",                        price: 1000 },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "Serum Uric Acid",                            price: 600  },
        { name: "Serum Electrolytes",                         price: 1000 },
        { name: "TSH",                                        price: 1000 },
        { name: "HBsAg",                                      price: 1000 },
        { name: "Pap Smear",                                  price: 1200 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Mammography of Both Breast",                 price: 3000 },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 230  },
      ],
    },
    {
      id: "package-1",
      name: "Package-7",
      description: "Essential health screening",
      price: 5900,
      totalCost: 7710,
      savings: 1810,
      popular: false,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Random Blood Sugar",                         price: 200  },
        { name: "Lipid Profile (Random)",                     price: 1400 },
        { name: "Blood Grouping & RH Factor",                 price: 300  },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "HBsAg",                                      price: 1000 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 110  },
      ],
    },
    {
      id: "package-2",
      name: "Package-8",
      description: "Comprehensive wellness check",
      price: 10650,
      totalCost: 14030,
      savings: 3380,
      popular: true,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Blood Sugar (Fasting & 2 hrs ABF)",          price: 400  },
        { name: "HbA1c",                                      price: 1400 },
        { name: "Lipid Profile (Fasting)",                    price: 1400 },
        { name: "Liver Function Test",                        price: 1000 },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "Serum Uric Acid",                            price: 600  },
        { name: "Serum Electrolytes",                         price: 1000 },
        { name: "TSH",                                        price: 1000 },
        { name: "HBsAg",                                      price: 1000 },
        { name: "PSA",                                        price: 1400 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 130  },
      ],
    },
    {
      id: "package-3",
      name: "Package-9",
      description: "Advanced full-body package",
      price: 12850,
      totalCost: 16930,
      savings: 4080,
      popular: false,
      features: [
        { name: "Complete Blood Count (CBC)",                 price: 400  },
        { name: "Blood Sugar (Fasting & 2 hrs ABF)",          price: 400  },
        { name: "HbA1c",                                      price: 1400 },
        { name: "Lipid Profile (Fasting)",                    price: 1400 },
        { name: "Liver Function Test",                        price: 1000 },
        { name: "Serum Creatinine",                           price: 400  },
        { name: "Serum Uric Acid",                            price: 600  },
        { name: "Serum Electrolytes",                         price: 1000 },
        { name: "TSH",                                        price: 1000 },
        { name: "HBsAg",                                      price: 1000 },
        { name: "Pap Smear",                                  price: 1200 },
        { name: "Urine R/E",                                  price: 400  },
        { name: "ECG",                                        price: 400  },
        { name: "Digital X-Ray of Chest P/A View (Digital)",  price: 600  },
        { name: "Mammography of Both Breast",                 price: 3000 },
        { name: "Ultrasonography of Whole Abdomen",           price: 2500 },
        { name: "Needle, Tube & Reg. Charges",                price: 230  },
      ],
    },
  ];
  
  /* ═══════════════════════════════════════════════════════════════
     ICONS
     ═══════════════════════════════════════════════════════════════ */
  const CartIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
  
  const BuyIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
  
  const planIcons = {
    "package-1": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    "package-2": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    "package-3": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  };
  
  /* ── Save ribbon ─────────────────────────────────────────────── */
  function SaveRibbon({ amount, isPopular }) {
    if (!amount) return null;
    return (
      <div className={`pkg-ribbon ${isPopular ? "ribbon-popular" : ""}`}>
        <span>Save {Number(amount).toLocaleString()}</span>
      </div>
    );
  }
  
export default function PackagePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Health Packages</span>
          <h1 className="page-hero__title">
            Our <span className="page-hero__highlight">Health Packages & Discounts</span>
          </h1>
          <p className="page-hero__subtitle">
          Comprehensive diagnostic packages for your family's well-being. All prices in BDT.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Packages</span>
          </nav>
        </div>
      </section>

      {/* Pacakge */}
      <section className="page-section">
        <div className="page-section__container">
          {/* 3-column grid */}
          <div className="pricing-grid">
            {pricingPlans.map((plan) => {
              const icon = planIcons[plan.id];

              return (
                <div
                  key={plan.id}
                  className={`pricing-card card ${plan.popular ? "popular" : ""}`}
                >
                  <SaveRibbon amount={plan.savings} isPopular={plan.popular} />

                  {/* Header: icon + name */}
                  <div className="pkg-header">
                    <div className={`plan-icon-wrap ${plan.popular ? "icon-popular" : ""}`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className={`pkg-plan-name ${plan.popular ? "name-popular" : ""}`}>
                        {plan.name}
                      </h3>
                      <p className="pkg-plan-sub">{plan.description}</p>
                    </div>
                  </div>

                  <div className={`pkg-divider ${plan.popular ? "divider-popular" : ""}`} />

                  {/* Feature rows */}
                  <ul className="pkg-features">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`pkg-feature-row ${i % 2 === 0 ? "row-even" : "row-odd"}`}
                      >
                        <span className="pkg-feature-name">{feature.name}</span>
                        <span className="pkg-feature-price">
                          BDT {feature.price.toLocaleString()}.00
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price summary */}
                  <div className="pkg-price-block">
                    <div className="pkg-price-row">
                      <span className="pkg-price-label">Total Cost:</span>
                      <span className="pkg-total-value">
                        BDT {plan.totalCost.toLocaleString()}.00
                      </span>
                    </div>
                    <div className="pkg-price-row">
                      <span className="pkg-price-label strong">Discounted Price:</span>
                      <span className="pkg-discounted-value">
                        BDT {plan.price.toLocaleString()}.00
                      </span>
                    </div>
                  </div>

                  {/* Two CTA buttons */}
                  <div className="pkg-cta-group">
                    <Button variant="secondary" className="pkg-btn-stretch">
                      <CartIcon /> Add to Cart
                    </Button>
                    <Button variant="primary" className="pkg-btn-stretch" href="/checkout">
                      <BuyIcon /> Buy Now
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="custom-plans-note">
            Custom packages available for corporate health programs.{" "}
            <Link href="/contact" className="contact-link">Contact us →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
