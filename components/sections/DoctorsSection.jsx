"use client";
import Link from "next/link";
import { doctors } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";

export default function DoctorsSection() {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getGradientClass = (index) => {
    const gradients = [
      "from-green-400 to-primary",
      "from-blue-400 to-authority",
      "from-secondary to-green-500",
      "from-authority to-accent",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Section id="doctors" bg="bg-slate-50">
      <SectionHeader
        label="Meet Our Team"
        title="Expert Specialists, Compassionate Care"
        subtitle="Our doctors bring decades of experience and international training to deliver the best healthcare in Bangladesh."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, index) => (
          <div
            key={doc.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 border border-slate-100"
          >
            {/* Image Area */}
            <div className="relative h-56 bg-gradient-to-br from-primary/10 to-authority/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-28 h-28 rounded-full bg-gradient-to-br ${getGradientClass(
                    index
                  )} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white text-2xl font-bold">
                    {getInitials(doc.name)}
                  </span>
                </div>
              </div>
              {/* Available Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">
                  Available
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-1 group-hover:text-primary transition-colors">
                {doc.name}
              </h3>
              <p className="text-primary font-semibold text-sm mb-1">
                {doc.specialty}
              </p>
              <p className="text-slate-400 text-xs mb-4">{doc.qualification}</p>

              <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                <span>{doc.experience} Exp.</span>
                <div className="flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#f59e0b"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="font-semibold text-slate-700">
                    {doc.rating}
                  </span>
                </div>
                <span>{doc.patients} Patients</span>
              </div>

              <Link
                href="/appointment"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label={`Book appointment with ${doc.name}`}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/doctors"
          className="btn-secondary inline-flex items-center gap-2"
          aria-label="View all doctors"
        >
          View All Doctors
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
        </Link>
      </div>
    </Section>
  );
}