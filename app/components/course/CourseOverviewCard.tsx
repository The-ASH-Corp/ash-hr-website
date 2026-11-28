"use client";

import { motion } from "framer-motion";
import { courseOverviewData, OverviewHighlightItem } from "./courseOverviewData";

function HighlightIcon({ type }: { type: OverviewHighlightItem["iconType"] }) {
  switch (type) {
    case "dualDomain":
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "practical":
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "placement":
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "ai":
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
          <circle cx="9" cy="13" r="1" />
          <circle cx="15" cy="13" r="1" />
          <path d="M10 17h4" />
        </svg>
      );
  }
}

export default function CourseOverviewCard() {
  const { overviewCard } = courseOverviewData;

  return (
    <motion.section
      id="overview"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.07)] scroll-mt-28 overflow-hidden"
      data-purpose="course-overview-card"
    >
      {/* Subtle Top-Right Decorative Gradient Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-[#253b97]/[0.06] to-transparent blur-2xl"
      />

      {/* Top Split Layout: Programme Abstract (Left) + Executive Snapshot Panel (Right) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-center pb-8 mb-8 border-b border-slate-100">
        {/* Left 7 Columns: Eyebrow, Heading & Abstract */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef2ff] border border-[#253b97]/15">
            <span className="w-2 h-2 rounded-full bg-[#253b97] animate-pulse" />
            <span className="text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#253b97]">
              {overviewCard.eyebrow}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-bold text-[#0f172a] tracking-tight leading-[1.18]">
            {overviewCard.title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl leading-relaxed">
            {overviewCard.description}
          </p>
        </div>

        {/* Right 5 Columns: Dark Navy Executive Programme Matrix */}
        <div className="lg:col-span-5">
          <div
            style={{
              background:
                "linear-gradient(135deg, #131f54 0%, #1c2f7d 55%, #253b97 100%)",
              color: "#ffffff",
            }}
            className="relative rounded-2xl p-5 sm:p-6 2xl:p-8 text-white shadow-[0_14px_32px_-8px_rgba(28,45,115,0.35)] overflow-hidden"
          >
            <div
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              className="pointer-events-none absolute inset-0"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                <span className="text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#ffca28]">
                  PROGRAMME SNAPSHOT
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-xs 2xl:text-sm font-bold text-blue-100">
                  Executive Track
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 2xl:gap-4">
                {overviewCard.keyHighlights.map((kh, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -2,
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                        delay: 0,
                      },
                    }}
                    className="rounded-xl p-3.5 2xl:p-4 bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 hover:border-[#ffca28]/50 backdrop-blur-sm transition-colors duration-200 cursor-default"
                  >
                    <span className="text-xs 2xl:text-sm font-bold uppercase tracking-wider text-blue-200/80 block mb-1">
                      {kh.label}
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg 2xl:text-xl font-bold text-white block leading-snug">
                      {kh.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 4 Interactive Bento Pillar Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
        {overviewCard.highlights.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{
              y: -6,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0,
              },
            }}
            className="group relative flex flex-col justify-between p-5 sm:p-6 2xl:p-8 min-[137.5rem]:p-10 rounded-2xl bg-[#f8fafc] hover:bg-[#253b97] border border-slate-200/90 hover:border-[#253b97] shadow-xs hover:shadow-[0_18px_38px_-10px_rgba(37,59,151,0.35)] transition-all duration-250 cursor-default overflow-hidden"
          >
            {/* Top Row: Icon Box + Step Badge */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#eef2ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-[#ffca28] flex items-center justify-center shrink-0 shadow-xs transition-colors duration-250">
                <HighlightIcon type={item.iconType} />
              </div>
              <span className="text-xs sm:text-sm 2xl:text-base font-extrabold tracking-widest text-slate-300 group-hover:text-[#ffca28] transition-colors duration-250">
                0{idx + 1}
              </span>
            </div>

            {/* Bottom Content: Title & Subtitle */}
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] group-hover:text-white leading-snug mb-2 transition-colors duration-250">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 group-hover:text-blue-100/90 leading-relaxed transition-colors duration-250">
                {item.subtitle}
              </p>
            </div>

            {/* Bottom Animated Accent Line */}
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-200/70 group-hover:border-white/15 flex items-center justify-between text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl font-semibold text-[#253b97] group-hover:text-[#ffca28] transition-colors duration-250">
              <span>Core Pillar</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
