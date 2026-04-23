// components/common/Section.jsx
import { cn } from "@/lib/utils/cn";

export function Section({ id, children, className, bg = "bg-white", variant }) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        bg === "bg-slate-50" && "bg-slate-50",
        bg === "bg-white" && "bg-white",
        variant === "alternate" && "bg-slate-50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ label, title, subtitle, align = "center", titleClassName }) {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      align === "center" && "text-center",
      align === "left" && "text-left"
    )}>
      {label && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-3 text-primary">
          <span className="w-8 h-0.5 rounded-full bg-primary" />
          {label}
        </span>
      )}
      <h2 
        className={cn(
          "font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4",
          titleClassName
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-slate-500 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}