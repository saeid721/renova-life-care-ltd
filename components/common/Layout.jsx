import { cn } from "@/lib/utils/utils";

/**
 * Container — Centralized layout wrapper.
 * Provides consistent max-width and horizontal padding.
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

/**
 * Section — Full-width section wrapper with consistent vertical padding.
 *
 * @param {string} bg         - Tailwind background class
 * @param {boolean} contained - Wraps children in a Container
 */
export function Section({
  children,
  className,
  bg = "bg-white",
  contained = true,
  id,
  as: Tag = "section",
  ...props
}) {
  return (
    <Tag
      id={id}
      className={cn("section-padding", bg, className)}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </Tag>
  );
}

/**
 * SectionHeader — Reusable heading block for sections.
 *
 * @param {string} label    - Small overline text
 * @param {string} title    - Main heading
 * @param {string} subtitle - Supporting text
 * @param {string} align    - "left" | "center" | "right"
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  dark = false,
}) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-3 mb-14", alignClass, className)}>
      {label && (
        <span
          className={cn(
            "section-label",
            dark && "text-secondary [&::before]:bg-secondary"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-heading font-bold max-w-2xl",
          dark ? "text-white" : "text-slate-900",
          align === "center" && "mx-auto",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-lg",
            dark ? "text-white/75" : "text-slate-500",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
