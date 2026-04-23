import { cn } from "@/lib/utils/utils";

/**
 * Card — Base card component with hover elevation.
 */
export function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl overflow-hidden",
        "shadow-card",
        hover && "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * ServiceCard — Card for displaying a medical service.
 */
export function ServiceCard({ title, description, icon: Icon, color = "#428a26", href }) {
  return (
    <a
      href={href}
      className={cn(
        "group flex flex-col gap-4 p-7 bg-white rounded-2xl shadow-card",
        "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover",
        "border border-transparent hover:border-primary/10",
        "cursor-pointer"
      )}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
        aria-hidden="true"
      >
        <div
          className="w-7 h-7 rounded-md"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>

      {/* CTA Arrow */}
      <div
        className="flex items-center gap-1.5 text-sm font-semibold mt-auto transition-all duration-300 group-hover:gap-2.5"
        style={{ color }}
      >
        Learn More
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
      </div>
    </a>
  );
}

/**
 * DoctorCard — Card for displaying a doctor profile.
 */
export function DoctorCard({ name, specialty, qualification, experience, available, rating, patients, image }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/10 to-authority/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Placeholder for doctor image */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#428a26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>
        {/* Availability Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          <span className="text-xs font-semibold text-slate-700">Available</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-amber-500 flex-shrink-0 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span className="text-xs font-semibold text-slate-700">{rating}</span>
          </div>
        </div>

        <p className="text-primary font-semibold text-sm mb-1">{specialty}</p>
        <p className="text-slate-400 text-xs mb-4">{qualification}</p>

        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
          <span>{experience} Exp.</span>
          <span>{patients} Patients</span>
        </div>

        <a
          href="/appointment"
          className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          aria-label={`Book appointment with ${name}`}
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}

/**
 * TestimonialCard — Card for patient reviews.
 */
export function TestimonialCard({ name, location, rating, review, service, index = 0 }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5 h-full">
      {/* Stars */}
      <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
        {stars.map((filled, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={filled ? "#f59e0b" : "none"}
            stroke="#f59e0b"
            strokeWidth="2"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 italic">
        &ldquo;{review}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-primary font-bold text-sm" aria-hidden="true">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm">{name}</p>
          <p className="text-slate-400 text-xs">{location} · {service}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * BlogCard — Card for blog/news posts.
 */
export function BlogCard({ title, excerpt, category, date, readTime, author, href }) {
  return (
    <a
      href={href}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
      aria-label={`Read article: ${title}`}
    >
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-authority/10 relative overflow-hidden flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#428a26" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">{excerpt}</p>

        <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-primary">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </a>
  );
}
