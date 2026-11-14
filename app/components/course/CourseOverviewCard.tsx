"use client";

import { motion } from "framer-motion";
import { courseOverviewData, OverviewHighlightItem } from "./courseOverviewData";

function HighlightIcon({ type }: { type: OverviewHighlightItem["iconType"] }) {
  switch (type) {
    case "industry":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
        </svg>
      );
    case "guaranteed":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M15 8h2M15 12h2M7 16h10" />
        </svg>
      );
    case "portals":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 9l3 3-3 3M11 15h4" />
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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] scroll-mt-28"
      data-purpose="course-overview-card"
    >
      {/* Top Eyebrow */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <span
          style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
          className="w-7 h-7 rounded-lg bg-[#eef2ff] text-[#253b97] flex items-center justify-center shrink-0"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
          </svg>
        </span>
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#253b97]">
          {overviewCard.eyebrow}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-snug mb-3.5">
        {overviewCard.title}
      </h2>

      {/* Description */}
      <p className="text-slate-600 text-xs sm:text-sm leading-[1.85]">
        {overviewCard.description}
      </p>

      {/* Bottom 3 Highlights Row */}
      <div className="mt-7 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {overviewCard.highlights.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{
              y: -3,
              transition: { type: "spring", stiffness: 380, damping: 20, delay: 0 },
            }}
            className="flex items-center gap-3"
          >
            <div
              style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
              className="w-9 h-9 rounded-xl bg-[#eef2ff] text-[#253b97] flex items-center justify-center shrink-0"
            >
              <HighlightIcon type={item.iconType} />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-[#0f172a] leading-tight">
                {item.title}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

