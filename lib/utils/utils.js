/**
 * Utility functions for Renova Life Care Ltd.
 */

/**
 * cn — Conditional classname utility (lightweight clsx alternative).
 * Merges classname strings, filtering out falsy values.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ").trim();
}

/**
 * formatCurrency — Format BDT currency.
 */
export function formatCurrency(amount, currency = "৳") {
  return `${currency}${Number(amount).toLocaleString("bn-BD")}`;
}

/**
 * slugify — Convert string to URL-safe slug.
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * truncate — Truncate string with ellipsis.
 */
export function truncate(str, maxLength = 100) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + "…";
}

/**
 * getInitials — Get initials from a full name.
 */
export function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
