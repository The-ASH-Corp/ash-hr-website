"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogsData, BlogPostItem } from "./blogsData";

interface BlogsFeaturedSectionProps {
  onSelectArticle: (article: BlogPostItem) => void;
}

export default function BlogsFeaturedSection({
  onSelectArticle,
}: BlogsFeaturedSectionProps) {
  const { featuredPost } = blogsData;

  return (
    <section
      style={{ backgroundColor: "#ffffff" }}
      className="py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-100"
      data-purpose="blogs-featured-section"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ backgroundColor: "#f8fafc" }}
          className="rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.04)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 5 Columns: Featured Article Cover Image */}
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[360px] lg:min-h-full overflow-hidden group">
              <Image
                src={featuredPost.imageSrc}
                alt={featuredPost.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-[#0f172a]/15 to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span
                  style={{ backgroundColor: "#ffca28", color: "#0f172a" }}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-[#ffca28] text-[#0f172a] text-[10.5px] font-extrabold uppercase tracking-wider shadow-sm"
                >
                  {featuredPost.badge}
                </span>
              </div>

              {/* Bottom Floating Author Chip on Mobile/Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-bold">
                  {featuredPost.category}
                </span>
                <span className="text-[11.5px] font-semibold text-slate-200">
                  {featuredPost.readTime}
                </span>
              </div>
            </div>

            {/* Right 7 Columns: Featured Content & Key Takeaways */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
              <div>
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="font-bold uppercase tracking-wider text-[#253b97]">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span className="font-semibold text-slate-600">
                    {featuredPost.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#0f172a] leading-[1.25] tracking-tight mb-3.5">
                  {featuredPost.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[1.7] mb-5">
                  {featuredPost.excerpt}
                </p>

                {/* Key Takeaways Box */}
                <div
                  style={{ backgroundColor: "#ffffff" }}
                  className="rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/80 mb-6"
                >
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#253b97] mb-2.5">
                    KEY ARTICLE TAKEAWAYS
                  </div>
                  <ul className="space-y-2">
                    {featuredPost.keyTakeaways.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.55]"
                      >
                        <span className="mt-1 w-4 h-4 rounded-full bg-[#e8edff] text-[#253b97] flex items-center justify-center text-[10px] font-extrabold shrink-0">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Author + CTA Footer */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      fill
                      sizes="44px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-extrabold text-[#0f172a]">
                      {featuredPost.author.name}
                    </div>
                    <div className="text-[11.5px] font-semibold text-[#253b97]">
                      {featuredPost.author.role}
                    </div>
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={() => onSelectArticle(featuredPost)}
                  whileHover={{
                    y: -2,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: 0,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: "#253b97", color: "#ffffff" }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#253b97] hover:bg-[#1c2d73] text-white text-xs sm:text-[13px] font-bold shadow-md shadow-[#253b97]/20 transition-colors cursor-pointer shrink-0"
                >
                  <span>Read Full Article</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

