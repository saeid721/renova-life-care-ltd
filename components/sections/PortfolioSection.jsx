import Link from "next/link";
import { portfolioItems } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";

export default function PortfolioSection() {
  const getGradientClass = (index) => {
    const gradients = [
      "bg-gradient-to-br from-authority to-accent",
      "bg-gradient-to-br from-primary to-secondary",
      "bg-gradient-to-br from-secondary to-primary",
      "bg-gradient-to-br from-accent to-authority",
      "bg-gradient-to-br from-primary/80 to-secondary",
      "bg-gradient-to-br from-authority/80 to-accent/80",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Section id="portfolio" bg="bg-slate-50">
      <SectionHeader
        label="Our Facilities"
        title="World-Class Infrastructure"
        subtitle="State-of-the-art facilities designed for your comfort, safety, and the best medical outcomes."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            style={{ minHeight: index === 0 ? "320px" : "200px" }}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title} facility`}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 ${getGradientClass(index)}`}
              aria-hidden="true"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" aria-hidden="true" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-2 w-fit">
                {item.category}
              </span>
              <h3 className="font-heading font-bold text-white text-base md:text-lg leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/about#facilities"
          className="btn-secondary"
          aria-label="View all facilities"
        >
          View All Facilities
        </Link>
      </div>
    </Section>
  );
}