"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { shopProducts } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";
import "./ShopSection.css";

export default function ShopSection() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    setCart((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <Section id="shop" bg="bg-white">
      <SectionHeader
        label="Our Shop"
        title="Health Products, Delivered to Your Door"
        subtitle="Trusted medical devices, supplements, and health kits from certified brands — all in one place."
      />

      <div className="shop-grid">
        {shopProducts.map((product) => (
          <div
            key={product.id}
            className="shop-product-card"
          >
            {/* Product Image */}
            <div className="shop-product-image-container">
              <Image
                src={`/images/shop/image${product.id}.jpg`}
                alt={product.name}
                fill
                className="shop-product-image"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Fallback Icon (shown if image fails to load) */}
              <div className="shop-product-fallback" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#428a26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              {product.badge && (
                <span
                  className={`shop-product-badge ${
                    product.badge === "Best Seller"
                      ? "shop-badge-bestseller"
                      : product.badge === "New"
                      ? "shop-badge-new"
                      : "shop-badge-sale"
                  }`}
                  aria-label={product.badge}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="shop-product-info">
              <p className="shop-product-category">
                {product.category}
              </p>
              <h3 className="shop-product-name">
                {product.name}
              </h3>
              <div className="shop-product-rating">
                <div className="shop-product-stars" aria-label={`${product.rating} star rating`}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill={
                        i < Math.floor(product.rating) ? "#f59e0b" : "none"
                      }
                      stroke="#f59e0b"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="shop-product-reviews">
                  ({product.reviews})
                </span>
              </div>
              <div className="shop-product-price-section">
                <div className="shop-product-prices">
                  <span className="shop-product-current-price">
                    ৳{product.price.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <span className="shop-product-old-price">
                      ৳{product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(product.id)}
                  className={`shop-product-cart-btn ${
                    cart.includes(product.id) ? "added" : ""
                  }`}
                  aria-label={cart.includes(product.id) ? `${product.name} added to cart` : `Add ${product.name} to cart`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  {cart.includes(product.id) ? "Added" : "Add"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All shop Button */}
      <div className="shop-view-all">
        <Link href="/shop" className="btn btn-primary shop-cta-btn">
          Browse All Products
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </Section>
  );
}