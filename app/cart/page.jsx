"use client";
/* ═══════════════════════════════════════════════════════════════
   File: /app/cart/page.jsx  (REPLACE existing file)
   ═══════════════════════════════════════════════════════════════ */
import { useState } from "react";   
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import "@/styles/pages/cart.css";
import "@/styles/components/HeroSection.css";

/* ── Icons ── */
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
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════
   PACKAGE FEATURES MAP
   ═══════════════════════════════════════════════════════════════ */
const packageFeaturesMap = {
  "package-1": [
    "Complete Blood Count (CBC)",
    "Random Blood Sugar",
    "Lipid Profile (Random)",
    "Blood Grouping & RH Factor",
    "Serum Creatinine",
    "HBsAg",
    "Urine R/E",
    "ECG",
    "Digital X-Ray of Chest P/A View",
    "Ultrasonography of Whole Abdomen",
    "Needle, Tube & Reg. Charges",
  ],
  "package-2": [
    "Complete Blood Count (CBC)",
    "Blood Sugar (Fasting & 2 hrs ABF)",
    "HbA1c",
    "Lipid Profile (Fasting)",
    "Liver Function Test",
    "Serum Creatinine",
    "Serum Uric Acid",
    "Serum Electrolytes",
    "TSH",
    "HBsAg",
    "PSA",
    "Urine R/E",
    "ECG",
    "Digital X-Ray of Chest P/A View",
    "Ultrasonography of Whole Abdomen",
    "Needle, Tube & Reg. Charges",
  ],
  "package-3": [
    "Complete Blood Count (CBC)",
    "Blood Sugar (Fasting & 2 hrs ABF)",
    "HbA1c",
    "Lipid Profile (Fasting)",
    "Liver Function Test",
    "Serum Creatinine",
    "Serum Uric Acid",
    "Serum Electrolytes",
    "TSH",
    "HBsAg",
    "Pap Smear",
    "Urine R/E",
    "ECG",
    "Digital X-Ray of Chest P/A View",
    "Mammography of Both Breast",
    "Ultrasonography of Whole Abdomen",
    "Needle, Tube & Reg. Charges",
  ],
};

/* Reuse features for package-4 to package-9 (cycle through 1-2-3) */
["4","5","6","7","8","9"].forEach((n) => {
  const base = ["1","2","3"][(parseInt(n) - 1) % 3];
  packageFeaturesMap[`package-${n}`] = packageFeaturesMap[`package-${base}`];
});

/* ── Helper: is this item a Health Package? ── */
const isPackage = (item) => item.category === "Health Package";

/* ═══════════════════════════════════════════════════════════════
   PACKAGE DETAIL PANEL
   ═══════════════════════════════════════════════════════════════ */
function PackageDetail({ item }) {
  const [expanded, setExpanded] = useState(false);
  const features  = packageFeaturesMap[item.id] || [];
  const showCount = 4;
  const visible   = expanded ? features : features.slice(0, showCount);
  const remaining = features.length - showCount;

  return (
    <div className="cart-pkg-detail">
      <ul className="cart-pkg-features">
        {visible.map((f, i) => (
          <li key={i} className="cart-pkg-feature-item">
            <span className="cart-pkg-check">✓</span>
            <span>{f}</span>
          </li>
        ))}
        {!expanded && remaining > 0 && (
          <li className="cart-pkg-more" onClick={() => setExpanded(true)}>
            <span className="cart-pkg-check">✓</span>
            <span>+{remaining} more tests</span>
          </li>
        )}
        {expanded && (
          <li className="cart-pkg-more" onClick={() => setExpanded(false)}>
            <span className="cart-pkg-check">✓</span>
            <span>Show less</span>
          </li>
        )}
      </ul>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function CartPage() {
  const { cartItems, removeFromCart, updateQty, totalPrice } = useCart();

  const tax   = Math.round(totalPrice * 0.05);
  const total = totalPrice + tax;

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__container">
          <span className="page-hero__label">Your Cart</span>
          <h1 className="page-hero__title">
            Review Your <span className="page-hero__highlight">Selected Items</span>
          </h1>
          <p className="page-hero__subtitle">
            Verify your selections before proceeding to checkout. All prices in BDT.
          </p>
          <nav aria-label="Breadcrumb" className="page-hero__breadcrumb">
            <a href="/">Home</a>
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
              <p>Browse our health products and packages to get started.</p>
              <Link href="/shop" className="btn btn-primary cart-empty__btn">
                Explore Products
              </Link>
            </div>
          ) : (
            <div className="cart-grid">

              {/* ── Cart Items ── */}
              <div className="cart-items">
                {cartItems.map((item) => {
                  const pkg     = isPackage(item);
                  const savings = item.oldPrice
                    ? (item.oldPrice - item.price) * item.quantity
                    : 0;

                  return (
                    <article key={item.id} className="cart-item card">

                      {/* ── Header row ── */}
                      <div className="cart-item__header">
                        <div className="cart-item__badge">
                          {pkg && item.popular
                            ? "Popular"
                            : item.category || "Product"}
                        </div>
                        <button
                          className="cart-item__remove"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <TrashIcon />
                          <span>Remove</span>
                        </button>
                      </div>

                      {/* ── Content grid ──
                          Package  → full-width feature list (no image column)
                          Product  → image + info + actions (3 columns)
                      ── */}
                      {pkg ? (
                        /* ══ PACKAGE LAYOUT ══ */
                        <div className="cart-item__content cart-item__content--pkg">
                          {/* Left: name + description */}
                          <div className="cart-item__info">
                            <h3 className="cart-item__name">{item.name}</h3>
                            <p className="cart-item__desc">Discounted health package</p>
                            {/* Feature list */}
                            <PackageDetail item={item} />
                          </div>

                          {/* Right: qty + price */}
                          <div className="cart-item__actions">
                            <div className="qty-control">
                              <button className="qty-btn"
                                onClick={() => updateQty(item.id, item.quantity - 1)}
                                aria-label="Decrease quantity">
                                <MinusIcon />
                              </button>
                              <span className="qty-value">{item.quantity}</span>
                              <button className="qty-btn"
                                onClick={() => updateQty(item.id, item.quantity + 1)}
                                aria-label="Increase quantity">
                                <PlusIcon />
                              </button>
                            </div>
                            <div className="cart-item__price">
                              {item.oldPrice && (
                                <span className="cart-item__original">
                                  BDT {(item.oldPrice * item.quantity).toLocaleString()}
                                </span>
                              )}
                              <span className="cart-item__current">
                                BDT {(item.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* ══ PRODUCT LAYOUT ══ */
                        <div className="cart-item__content">
                          {/* Product image */}
                          <div className="cart-item__img-wrap">
                            <Image
                              src={`/images/shop/image${item.id}.jpg`}
                              alt={item.name}
                              fill
                              className="cart-item__img"
                              sizes="96px"
                            />
                          </div>

                          {/* Name */}
                          <div className="cart-item__info">
                            <h3 className="cart-item__name">{item.name}</h3>
                            {item.oldPrice && (
                              <p className="cart-item__desc">
                                Was ৳{item.oldPrice.toLocaleString()}
                              </p>
                            )}
                          </div>

                          {/* Qty + price */}
                          <div className="cart-item__actions">
                            <div className="qty-control">
                              <button className="qty-btn"
                                onClick={() => updateQty(item.id, item.quantity - 1)}
                                aria-label="Decrease quantity">
                                <MinusIcon />
                              </button>
                              <span className="qty-value">{item.quantity}</span>
                              <button className="qty-btn"
                                onClick={() => updateQty(item.id, item.quantity + 1)}
                                aria-label="Increase quantity">
                                <PlusIcon />
                              </button>
                            </div>
                            <div className="cart-item__price">
                              {item.oldPrice && (
                                <span className="cart-item__original">
                                  ৳{(item.oldPrice * item.quantity).toLocaleString()}
                                </span>
                              )}
                              <span className="cart-item__current">
                                ৳{(item.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── Savings strip ── */}
                      {savings > 0 && (
                        <div className="cart-item__savings">
                          You save {pkg ? "BDT" : "৳"} {savings.toLocaleString()}
                        </div>
                      )}

                    </article>
                  );
                })}
              </div>

              {/* ── Order Summary ── */}
              <aside className="cart-summary card">
                <h3 className="cart-summary__title">Order Summary</h3>
                <div className="cart-summary__row">
                  <span>Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span>৳{totalPrice.toLocaleString()}.00</span>
                </div>
                <div className="cart-summary__row">
                  <span>Tax (5%)</span>
                  <span>৳{tax.toLocaleString()}.00</span>
                </div>
                <div className="cart-summary__divider" />
                <div className="cart-summary__total">
                  <span>Total</span>
                  <span className="cart-summary__total-value">
                    ৳{total.toLocaleString()}.00
                  </span>
                </div>
                <div className="cart-summary__trust">
                  <div className="trust-item"><ShieldIcon /><span>Secure Payment</span></div>
                  <div className="trust-item"><TruckIcon /><span>Home Delivery Available</span></div>
                  <div className="trust-item"><RefreshIcon /><span>Easy Returns</span></div>
                </div>
                <Link href="/checkout" className="btn btn-primary cart-summary__checkout">
                  Proceed to Checkout
                </Link>
                <Link href="/shop" className="cart-summary__continue">
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