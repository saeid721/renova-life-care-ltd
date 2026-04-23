// components/common/Container.jsx
import { cn } from "@/lib/utils/cn";

/**
 * Container — Centralized layout wrapper.
 * Named export: import { Container } from "@/components/common/Container";
 */
export function Container({ children, className, as: Tag = "div", ...props }) {
  return (
    <Tag
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}