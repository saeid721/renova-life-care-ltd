/**
 * Renova Life Care Ltd — Global Design Tokens
 * Single source of truth for all design decisions.
 */

export const colors = {
  primary: "#428a26",       // Primary Green — health & trust
  primaryDark: "#2e6a1a",   // Darker green for hover states
  secondary: "#86b437",     // Secondary Green — energy & vitality
  accent: "#007ab9",        // Accent Blue — clarity & calm
  authority: "#05417d",     // Dark Blue — authority & professionalism
  white: "#ffffff",
  black: "#000000",
  gray: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  background: {
    light: "#f8fafc",
    white: "#ffffff",
    section: "#f0f7ed",     // Soft green-tinted background
    dark: "#05417d",
  },
  text: {
    primary: "#1e293b",
    secondary: "#475569",
    muted: "#64748b",
    white: "#ffffff",
    heading: "#0f172a",
  },
  status: {
    success: "#428a26",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#007ab9",
  },
};

export const typography = {
  fontFamily: {
    heading: "'Sen', sans-serif",
    body: "Sen', sans-serif",
    mono: "'Sen', sans-serif",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

export const spacing = {
  sectionY: "py-20 md:py-28",
  containerX: "px-4 md:px-8 lg:px-16",
  maxWidth: "max-w-7xl mx-auto",
};

export const borderRadius = {
  sm: "rounded",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
  full: "rounded-full",
};

export const shadows = {
  card: "shadow-[0_4px_24px_rgba(4,65,125,0.08)]",
  cardHover: "shadow-[0_8px_40px_rgba(4,65,125,0.16)]",
  button: "shadow-[0_4px_16px_rgba(66,138,38,0.35)]",
};

export const transitions = {
  default: "transition-all duration-300 ease-in-out",
  fast: "transition-all duration-150 ease-in-out",
  slow: "transition-all duration-500 ease-in-out",
};

const theme = { colors, typography, spacing, borderRadius, shadows, transitions };
export default theme;
