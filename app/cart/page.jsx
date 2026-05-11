import { siteConfig } from "@/constants/siteData";
import Link from "next/link";
import Button from "@/components/common/Button";
import "@/styles/pages/cart.css";

export const metadata = {
  title: `Your Cart | ${siteConfig.name}`,
  description: `Review your selected health packages and proceed to checkout at ${siteConfig.name}.`,
  openGraph: {
    title: `Your Cart | ${siteConfig.name}`,
    description: `Review your selected health packages before checkout.`,
    url: `${siteConfig.url}/cart`,
  },
};

/* ═══════════════════════════════════════════════════════════════
   MOCK CART DATA (Replace with context/state management)
   ═══════════════════════════════════════════════════════════════ */
const initialCartItems = [
  {
    id: "cart-1",
    packageId: "package-2",
    name: "Package-2",
    description: "Comprehensive wellness check",
    price: 10650,
    originalPrice: 14030,
    savings: 3380,
    quantity: 1,
    features: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting & 2 hrs ABF)",
      "HbA1c",
      "Lipid Profile (Fasting)",
      "Liver Function Test",
      "Ultrasonography of Whole Abdomen",
    ],
  },
  {
    id: "cart-2",
    packageId: "package-1",
    name: "Package-1",
    description: "Essential health screening",
    price: 5900,
    originalPrice: 7710,
    savings: 1810,
    quantity: 2,
    features: [
      "Complete Blood Count (CBC)",
      "Random Blood Sugar",
      "Lipid Profile (Random)",
      "ECG",
      "Ultrasonography of Whole Abdomen",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   ICONS
   ═══════════════════════════════════════════════════════════════ */
const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const MinusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const TruckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <path d="M16 8h4l3 3v5h-7" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const RefreshIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

export default function CartPage() {
  const cartItems = initialCartItems;
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalSavings = cartItems.reduce((sum, item) => sum + item.savings * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Your Cart</span>
          <h1 className="page-hero__title">
            Review Your <span className="page-hero__highlight">Selected Packages</span>
          </h1>
          <p className="page-hero__subtitle">
            Verify your health package selections before proceeding to checkout. All prices in BDT.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <a href="/packages">Packages</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Cart</span>
          </nav>
        </div>
      </section>

      {/* Cart Content */}
      <section className="page-section">
        <div className="page-section__container">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty__icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Browse our health packages and add one to get started.</p>
              <Button variant="primary" href="/packages" className="cart-empty__btn">
                Explore Packages
              </Button>
            </div>
          ) : (
            <div className="cart-grid">
              {/* Cart Items */}
              <div className="cart-items">
                {cartItems.map((item) => (
                  <article key={item.id} className="cart-item card">
                    <div className="cart-item__header">
                      <div className="cart-item__badge">Popular</div>
                      <button className="cart-item__remove" aria-label={`Remove ${item.name}`}>
                        <TrashIcon />
                      </button>
                    </div>
                    
                    <div className="cart-item__content">
                      <div className="cart-item__info">
                        <h3 className="cart-item__name">{item.name}</h3>
                        <p className="cart-item__desc">{item.description}</p>
                        <ul className="cart-item__features">
                          {item.features.slice(0, 4).map((feature, i) => (
                            <li key={i}>✓ {feature}</li>
                          ))}
                          {item.features.length > 4 && (
                            <li className="cart-item__more">+{item.features.length - 4} more tests</li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="cart-item__actions">
                        <div className="qty-control">
                          <button className="qty-btn" aria-label="Decrease quantity">
                            <MinusIcon />
                          </button>
                          <span className="qty-value">{item.quantity}</span>
                          <button className="qty-btn" aria-label="Increase quantity">
                            <PlusIcon />
                          </button>
                        </div>
                        <div className="cart-item__price">
                          <span className="cart-item__original">
                            BDT {item.originalPrice.toLocaleString()}
                          </span>
                          <span className="cart-item__current">
                            BDT {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {item.savings > 0 && (
                      <div className="cart-item__savings">
                        You save BDT {(item.savings * item.quantity).toLocaleString()}
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {/* Order Summary */}
              <aside className="cart-summary card">
                <h3 className="cart-summary__title">Order Summary</h3>
                
                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <span>BDT {subtotal.toLocaleString()}.00</span>
                </div>
                <div className="cart-summary__row">
                  <span>Tax (5%)</span>
                  <span>BDT {tax.toLocaleString()}.00</span>
                </div>
                {totalSavings > 0 && (
                  <div className="cart-summary__row cart-summary__savings">
                    <span>Total Savings</span>
                    <span>- BDT {totalSavings.toLocaleString()}.00</span>
                  </div>
                )}
                
                <div className="cart-summary__divider" />
                
                <div className="cart-summary__total">
                  <span>Total</span>
                  <span className="cart-summary__total-value">
                    BDT {total.toLocaleString()}.00
                  </span>
                </div>
                
                <div className="cart-summary__trust">
                  <div className="trust-item">
                    <ShieldIcon />
                    <span>Secure Payment</span>
                  </div>
                  <div className="trust-item">
                    <TruckIcon />
                    <span>Instant Report Access</span>
                  </div>
                  <div className="trust-item">
                    <RefreshIcon />
                    <span>Free Rescheduling</span>
                  </div>
                </div>
                
                <Button variant="primary" href="/checkout" className="cart-summary__checkout">
                  Proceed to Checkout
                </Button>
                
                <Link href="/packages" className="cart-summary__continue">
                  ← Continue Shopping
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}