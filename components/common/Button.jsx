// components/common/Button.jsx
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export default function Button({ children, href, variant = "primary", className, ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:-translate-y-0.5 shadow-button",
    secondary: "border-2 border-authority text-authority hover:bg-authority hover:text-white",
  };
  
  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}