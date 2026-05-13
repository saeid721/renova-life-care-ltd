"use client";
/* ═══════════════════════════════════════════════════════════════
   CartBadge.jsx — Drop-in replacement for cart icon + count
   File: /components/common/CartBadge.jsx  (create this file)

   Usage in Navbar.jsx — replace the existing cart <Link> block:

   OLD:
     <Link href="/cart" className="topbar-action-link" aria-label="Shopping Cart">
       <CartIcon size={15} />
       <span>Cart</span>
     </Link>

   NEW:
     import CartBadge from "@/components/common/CartBadge";
     ...
     <CartBadge />

   ═══════════════════════════════════════════════════════════════ */
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import "./CartBadge.css";

const CartIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export default function CartBadge() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="topbar-action-link cart-badge-wrap" aria-label={`Cart, ${totalItems} item${totalItems !== 1 ? "s" : ""}`}>
      <span className="cart-badge-icon-wrap">
        <CartIcon size={15} />
        {totalItems > 0 && (
          <span className="cart-badge-count" aria-hidden="true">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </span>
      <span>Cart</span>
    </Link>
  );
}