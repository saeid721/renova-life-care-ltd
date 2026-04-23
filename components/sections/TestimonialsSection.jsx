import { testimonials } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" bg="bg-slate-50">
      <SectionHeader
        label="Patient Stories"
        title="Real Patients, Real Transformations"
        subtitle="Thousands of families across Bangladesh trust Renova Life Care with their most precious asset — their health."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5 h-full border border-slate-100"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={i < t.rating ? "#f59e0b" : "none"}
                  stroke="#f59e0b"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            {/* Quote */}
            <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 italic">
              &ldquo;{t.review}&rdquo;
            </blockquote>
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  {t.name}
                </p>
                <p className="text-slate-400 text-xs">
                  {t.location} · {t.service}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust bar */}
      <div className="mt-14 grid grid-cols-3 gap-6 pt-12 border-t border-slate-200">
        <div className="text-center">
          <p className="font-heading font-bold text-3xl md:text-4xl text-primary mb-1">
            98%
          </p>
          <p className="text-slate-500 text-sm">Patient Satisfaction</p>
        </div>
        <div className="text-center">
          <p className="font-heading font-bold text-3xl md:text-4xl text-primary mb-1">
            4.9/5
          </p>
          <p className="text-slate-500 text-sm">Average Rating</p>
        </div>
        <div className="text-center">
          <p className="font-heading font-bold text-3xl md:text-4xl text-primary mb-1">
            15,000+
          </p>
          <p className="text-slate-500 text-sm">Reviews Collected</p>
        </div>
      </div>
    </Section>
  );
}