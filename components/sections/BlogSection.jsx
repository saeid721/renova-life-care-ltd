import Link from "next/link";
import { blogs } from "@/constants/siteData";
import { Section, SectionHeader } from "@/components/common/Section";

export default function BlogSection() {
  return (
    <Section id="blog" bg="bg-white">
      <SectionHeader
        label="Health Insights"
        title="Stay Informed, Stay Healthy"
        subtitle="Expert articles and health tips from our specialist team — written in easy-to-understand language."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full border border-slate-100"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-authority/10 relative overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#428a26"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-primary">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/blog" className="btn-secondary inline-flex items-center gap-2">
          Read All Articles
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
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}