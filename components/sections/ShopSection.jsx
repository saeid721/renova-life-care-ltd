"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { shopProducts } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";
import { useCart } from "@/context/CartContext";
import "./ShopSection.css";

/* ── Icons ──────────────────────────────────────────────────── */
const CartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const BuyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg width="11" height="11" viewBox="0 0 24 24"
    fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ── Badge color map ── */
const badgeClass = {
  "Best Seller": "shop-badge-bestseller",
  "New":         "shop-badge-new",
};

/* ════════════════════════════════════════════════════════════════
   PRODUCT CARD
   ════════════════════════════════════════════════════════════════ */
function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const router = useRouter();

  const inCart  = cartItems.some((i) => i.id === product.id);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  const badgeKey  = product.badge;
  const badgeCls  = badgeClass[badgeKey] || "shop-badge-sale";
  const discount  = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <article className="spc-card" aria-label={product.name}>
      {/* ── Image ── */}
      <div className="spc-img-wrap">
        <Image
          src={`/images/shop/image${product.id}.jpg`}
          alt={product.name}
          fill
          className="spc-img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Gradient overlay */}
        <div className="spc-img-overlay" aria-hidden="true" />

        {/* Badge */}
        {product.badge && (
          <span className={`spc-badge ${badgeCls}`}>{product.badge}</span>
        )}

        {/* Discount pill */}
        {discount && (
          <span className="spc-discount-pill">-{discount}%</span>
        )}

        {/* Quick-add on image hover */}
        <div className="spc-quick-add" aria-hidden="true">
          <button
            type="button"
            className="spc-quick-btn"
            onClick={handleAddToCart}
            tabIndex={-1}
          >
            <CartIcon />
            Quick Add
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="spc-body">
        {/* Category + rating row */}
        <div className="spc-meta">
          <span className="spc-category">{product.category}</span>
          <div className="spc-stars" aria-label={`${product.rating} stars`}>
            {[1,2,3,4,5].map((s) => (
              <StarIcon key={s} filled={s <= Math.floor(product.rating)} />
            ))}
            <span className="spc-reviews">({product.reviews})</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="spc-name">{product.name}</h3>

        {/* Price row */}
        <div className="spc-price-row">
          <span className="spc-price">৳{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="spc-old-price">৳{product.oldPrice.toLocaleString()}</span>
          )}
        </div>

        {/* ── CTA buttons ── */}
        <div className="spc-actions">
          <button
            type="button"
            onClick={handleAddToCart}
            className={`btn btn-secondary spc-btn-cart ${added ? "spc-btn-cart--added" : ""}`}
            aria-label={added ? "Added to cart" : `Add ${product.name} to cart`}
          >
            {added ? <CheckIcon /> : <CartIcon />}
            <span>{added ? "Added!" : "Add to Cart"}</span>
          </button>

          <button
            type="button"
            onClick={handleBuyNow}
            className="btn btn-primary spc-btn-buy"
            aria-label={`Buy ${product.name} now`}
          >
            <BuyIcon />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </article>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION
   ════════════════════════════════════════════════════════════════ */
export default function ShopSection() {
  return (
    <Section id="shop" bg="bg-white">
      <SectionHeader
        label="Our Shop"
        title="Health Products, <span class='text-primary'>Delivered to Your Door</span>"
        subtitle="Trusted medical devices, supplements, and health kits from certified brands — all in one place."
      />

      <div className="shop-grid">
        {shopProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="shop-view-all">
        <Link href="/shop" className="btn btn-primary shop-cta-btn">
          Browse All Products
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </Section>
  );
}