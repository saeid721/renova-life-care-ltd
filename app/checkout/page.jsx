import { siteConfig } from "@/constants/siteData";
import Link from "next/link";
import Button from "@/components/common/Button";
import "@/styles/pages/checkout.css";

export const metadata = {
  title: `Checkout | ${siteConfig.name}`,
  description: `Complete your health package booking at ${siteConfig.name}. Secure payment and instant confirmation.`,
  openGraph: {
    title: `Checkout | ${siteConfig.name}`,
    description: `Secure checkout for your health packages.`,
    url: `${siteConfig.url}/checkout`,
  },
};

/* ═══════════════════════════════════════════════════════════════
   MOCK CHECKOUT DATA
   ═══════════════════════════════════════════════════════════════ */
const checkoutData = {
  items: [
    {
      id: "item-1",
      name: "Package-2",
      description: "Comprehensive wellness check",
      price: 10650,
      quantity: 1,
    },
    {
      id: "item-2",
      name: "Package-1",
      description: "Essential health screening",
      price: 5900,
      quantity: 2,
    },
  ],
  subtotal: 22450,
  tax: 1123,
  total: 23573,
};

/* ═══════════════════════════════════════════════════════════════
   ICONS
   ═══════════════════════════════════════════════════════════════ */
const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function CheckoutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Secure Checkout</span>
          <h1 className="page-hero__title">
            Complete Your <span className="page-hero__highlight">Booking</span>
          </h1>
          <p className="page-hero__subtitle">
            Enter your details to confirm your health package appointment. All information is encrypted and secure.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <a href="/packages">Packages</a>
            <span aria-hidden="true"> / </span>
            <a href="/cart">Cart</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Checkout</span>
          </nav>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="page-section">
        <div className="page-section__container">
          <div className="checkout-grid">
            {/* Checkout Form */}
            <form className="checkout-form">
              {/* Progress Steps */}
              <div className="checkout-steps">
                <div className="step active">
                  <span className="step__number">1</span>
                  <span className="step__label">Details</span>
                </div>
                <div className="step__divider" />
                <div className="step active">
                  <span className="step__number">2</span>
                  <span className="step__label">Payment</span>
                </div>
                <div className="step__divider" />
                <div className="step">
                  <span className="step__number">3</span>
                  <span className="step__label">Confirm</span>
                </div>
              </div>

              {/* Patient Information */}
              <fieldset className="checkout-section">
                <legend className="checkout-section__title">
                  <LocationIcon />
                  Patient Information
                </legend>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="input-field"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="input-field"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="input-field"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="input-field"
                      placeholder="+880 1XXX-XXXXXX"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                      type="date" 
                      id="dob" 
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea 
                    id="address" 
                    className="input-field"
                    rows="3"
                    placeholder="Enter your full address"
                  />
                </div>
              </fieldset>

              {/* Appointment Details */}
              <fieldset className="checkout-section">
                <legend className="checkout-section__title">
                  <CalendarIcon />
                  Appointment Preferences
                </legend>

                <div className="form-group">
                  <label htmlFor="appointmentDate">Preferred Date *</label>
                  <input 
                    type="date" 
                    id="appointmentDate" 
                    className="input-field"
                    required
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="timeSlot">Time Slot *</label>
                    <select id="timeSlot" className="input-field" required>
                      <option value="">Select a time</option>
                      <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="branch">Branch Location *</label>
                    <select id="branch" className="input-field" required>
                      <option value="">Select branch</option>
                      <option value="dhaka-main">Dhaka - Main Branch</option>
                      <option value="dhaka-uttara">Dhaka - Uttara</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Special Requests (Optional)</label>
                  <textarea 
                    id="notes" 
                    className="input-field"
                    rows="3"
                    placeholder="Any specific requirements or notes..."
                  />
                </div>
              </fieldset>

              {/* Payment Information */}
              <fieldset className="checkout-section">
                <legend className="checkout-section__title">
                  <CardIcon />
                  Payment Method
                </legend>

                <div className="payment-methods">
                  <label className="payment-option">
                    <input type="radio" name="payment" value="card" defaultChecked />
                    <div className="payment-option__content">
                      <CardIcon />
                      <span>Credit/Debit Card</span>
                    </div>
                  </label>
                  
                  <label className="payment-option">
                    <input type="radio" name="payment" value="bkash" />
                    <div className="payment-option__content">
                      <span className="payment-icon">📱</span>
                      <span>bKash / Mobile Banking</span>
                    </div>
                  </label>
                  
                  <label className="payment-option">
                    <input type="radio" name="payment" value="cash" />
                    <div className="payment-option__content">
                      <span className="payment-icon">💵</span>
                      <span>Cash on Visit</span>
                    </div>
                  </label>
                </div>

                {/* Card Details (shown when card selected) */}
                <div className="card-details">
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number *</label>
                    <input 
                      type="text" 
                      id="cardNumber" 
                      className="input-field"
                      placeholder="XXXX XXXX XXXX XXXX"
                      maxLength="19"
                    />
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="expiry">Expiry Date *</label>
                      <input 
                        type="text" 
                        id="expiry" 
                        className="input-field"
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv">CVV *</label>
                      <input 
                        type="text" 
                        id="cvv" 
                        className="input-field"
                        placeholder="123"
                        maxLength="4"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="cardName">Name on Card *</label>
                    <input 
                      type="text" 
                      id="cardName" 
                      className="input-field"
                      placeholder="As it appears on card"
                    />
                  </div>
                </div>

                <div className="secure-notice">
                  <LockIcon />
                  <span>Your payment information is encrypted and secure. We never store your full card details.</span>
                </div>
              </fieldset>

              {/* Terms & Submit */}
              <div className="checkout-terms">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>
                    I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                  </span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Send me health tips and exclusive offers via email</span>
                </label>
              </div>

              <div className="checkout-actions">
                <Button variant="secondary" type="button" href="/cart" className="checkout-btn">
                  ← Back to Cart
                </Button>
                <Button variant="primary" type="submit" className="checkout-btn checkout-btn--main">
                  <LockIcon /> Pay BDT {checkoutData.total.toLocaleString()}
                </Button>
              </div>
            </form>

            {/* Order Summary Sidebar */}
            <aside className="checkout-summary card">
              <h3 className="checkout-summary__title">Order Summary</h3>
              
              <div className="checkout-items">
                {checkoutData.items.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <div className="checkout-item__info">
                      <h4 className="checkout-item__name">{item.name}</h4>
                      <p className="checkout-item__desc">{item.description}</p>
                      <span className="checkout-item__qty">Qty: {item.quantity}</span>
                    </div>
                    <span className="checkout-item__price">
                      BDT {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="checkout-summary__divider" />
              
              <div className="checkout-summary__row">
                <span>Subtotal</span>
                <span>BDT {checkoutData.subtotal.toLocaleString()}.00</span>
              </div>
              <div className="checkout-summary__row">
                <span>Tax (5%)</span>
                <span>BDT {checkoutData.tax.toLocaleString()}.00</span>
              </div>
              
              <div className="checkout-summary__divider" />
              
              <div className="checkout-summary__total">
                <span>Total</span>
                <span className="checkout-summary__total-value">
                  BDT {checkoutData.total.toLocaleString()}.00
                </span>
              </div>
              
              <div className="checkout-summary__guarantee">
                <div className="guarantee-item">
                  <CheckIcon />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="guarantee-item">
                  <CheckIcon />
                  <span>Free Report Resend</span>
                </div>
                <div className="guarantee-item">
                  <CheckIcon />
                  <span>Expert Doctor Consultation</span>
                </div>
              </div>
              
              <div className="checkout-summary__support">
                <strong>Need Help?</strong>
                <p>Call us: <a href="tel:+8801234567890">+880 1234-567890</a></p>
                <p>Hours: Sat-Thu, 8AM-8PM</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}