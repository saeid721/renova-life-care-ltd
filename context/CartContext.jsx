"use client";
import { createContext, useContext, useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════
   CART CONTEXT — Global state for shop cart
   File: /context/CartContext.jsx  (create this folder + file)
   ═══════════════════════════════════════════════════════════════ */

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  /* ── Load from localStorage on mount ── */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("rlc_cart");
      if (saved) setCartItems(JSON.parse(saved));
    } catch {}
  }, []);

  /* ── Persist to localStorage on change ── */
  useEffect(() => {
    try {
      localStorage.setItem("rlc_cart", JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  /* ── Add or increment ── */
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  /* ── Remove one item ── */
  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));

  /* ── Update quantity ── */
  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  /* ── Clear all ── */
  const clearCart = () => setCartItems([]);

  /* ── Totals ── */
  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const hasPackage = cartItems.some((i) => i.category === "Health Package");

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
        hasPackage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}