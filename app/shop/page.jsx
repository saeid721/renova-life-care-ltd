import { ShopSection } from "@/components/sections";
import { siteConfig } from "@/constants/siteData";
import Link from "next/link";

export const metadata = {
  title: `Health Shop | ${siteConfig.name}`,
  description: `Shop certified health products, medical devices, and supplements at ${siteConfig.name} — trusted brands delivered to your door across Bangladesh.`,
  openGraph: {
    title: `Health Shop | ${siteConfig.name}`,
    description: `Trusted medical devices, supplements, and health kits from certified brands.`,
    url: `${siteConfig.url}/shop`,
  },
};

export default function ShopPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Health Store</span>
          <h1 className="page-hero__title">
            Shop <span className="page-hero__highlight">Health Products</span>
          </h1>
          <p className="page-hero__subtitle">
            Certified medical devices, supplements, and healthcare kits — delivered to your doorstep across Bangladesh.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Shop</span>
          </nav>
        </div>
      </section>

      {/* Shop Highlights */}
      <section className="page-section page-section--white">
        <div className="page-section__container">
          <div className="page-shop-perks">
            {[
              { icon: "✅", title: "Certified Products", desc: "All products are certified and approved by health authorities." },
              { icon: "🚚", title: "Fast Delivery", desc: "Dhaka delivery within 24 hours. Nationwide within 3 days." },
              { icon: "↩️", title: "Easy Returns", desc: "Hassle-free 7-day return policy on all products." },
              { icon: "🔒", title: "Secure Payments", desc: "SSL-secured checkout with bKash, Nagad, and card support." },
            ].map((perk) => (
              <div key={perk.title} className="page-perk-card">
                <span className="page-perk-icon">{perk.icon}</span>
                <div>
                  <h3 className="page-perk-title">{perk.title}</h3>
                  <p className="page-perk-desc">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid (reused) */}
      <ShopSection />

      {/* CTA */}
      <section className="page-section page-section--green">
        <div className="page-section__container page-cta-center">
          <h2 className="page-cta-title">Need Help Choosing?</h2>
          <p className="page-cta-subtitle">Our pharmacists can recommend the right products for your health needs.</p>
          <Link href="/contact" className="page-cta-btn">
            Contact a Pharmacist
          </Link>
        </div>
      </section>
    </>
  );
}
