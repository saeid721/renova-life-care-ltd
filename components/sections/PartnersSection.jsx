import { partners } from "@/constants/siteData";

export default function PartnersSection() {
  return (
    <section
      className="py-14 bg-white border-y border-slate-100"
      aria-label="Our trusted partners"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
          Trusted Partners & Affiliations
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              title={partner.name}
            >
              <div className="h-10 flex items-center justify-center text-slate-400 font-semibold text-xs text-center">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}