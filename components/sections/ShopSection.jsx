"use client";
import { useState } from "react";
import Link from "next/link";
import { shopProducts } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";

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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shopProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 border border-slate-100"
          >
            {/* Product Image */}
            <div className="relative h-48 bg-gradient-to-br from-slate-50 to-primary/8 flex items-center justify-center overflow-hidden">
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(66,138,38,0.2), rgba(134,180,55,0.2))",
                }}
                aria-hidden="true"
              >
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
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                    product.badge === "Best Seller"
                      ? "bg-amber-100 text-amber-700"
                      : product.badge === "New"
                      ? "bg-primary/15 text-primary"
                      : "bg-red-100 text-red-600"
                  }`}
                  aria-label={product.badge}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-5">
              <p className="text-xs text-slate-400 font-medium mb-1">
                {product.category}
              </p>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex" aria-label={`${product.rating} star rating`}>
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
                <span className="text-xs text-slate-400">
                  ({product.reviews})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-xl text-primary">
                    ৳{product.price.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      ৳{product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(product.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    cart.includes(product.id)
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
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

      <div className="flex justify-center mt-12">
        <Link
          href="/shop"
          className="btn-secondary inline-flex items-center gap-2"
          aria-label="Browse all products"
        >
          Browse All Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}