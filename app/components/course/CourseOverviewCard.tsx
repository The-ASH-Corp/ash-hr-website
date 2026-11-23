"use client";

import { motion } from "framer-motion";
import { courseOverviewData, OverviewHighlightItem } from "./courseOverviewData";

function HighlightIcon({ type }: { type: OverviewHighlightItem["iconType"] }) {
  switch (type) {
    case "dualDomain":
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
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "practical":
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
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "placement":
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
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "ai":
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
      <p className="text-slate-600 text-xs sm:text-sm leading-[1.85] mb-6">
        {overviewCard.description}
      </p>

      {/* Key Highlights Quick Strip (Document 2 & 3 Data) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-7">
        {overviewCard.keyHighlights.map((kh, i) => (
          <div key={i} className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
              {kh.label}
            </span>
            <span className="text-xs sm:text-[13px] font-extrabold text-[#0f172a] block leading-tight">
              {kh.value}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom 4 Highlights Row */}
      <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewCard.highlights.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-slate-50 transition-colors"
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
