"use client";

import { motion } from "framer-motion";
import { courseOverviewData, CompetencyCardItem } from "./courseOverviewData";

function CompetencyIcon({ type }: { type: CompetencyCardItem["iconType"] }) {
  switch (type) {
    case "architecture":
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
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M6 9v3a1 1 0 001 1h10a1 1 0 001-1V9M12 13v2" />
        </svg>
      );
    case "sourcing":
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
          <circle cx="10" cy="8" r="4" />
          <path d="M2 20c0-3.3 3.6-6 8-6" />
          <circle cx="17" cy="17" r="3" />
          <path d="M21 21l-1.9-1.9" />
        </svg>
      );
    case "compliance":
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
          <path d="M14 4l6 6-8 8-6-6 8-8z" />
          <path d="M4 20h16" />
        </svg>
      );
    case "payroll":
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
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      );
    case "analytics":
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
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      );
    case "hris":
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
          <rect x="9" y="3" width="6" height="5" rx="1" />
          <rect x="3" y="15" width="6" height="5" rx="1" />
          <rect x="15" y="15" width="6" height="5" rx="1" />
          <path d="M12 8v4M6 15v-3h12v3" />
        </svg>
      );
  }
}

export default function CourseCompetenciesCard() {
  const { competenciesCard } = courseOverviewData;

  return (
    <motion.section
      id="competencies"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] scroll-mt-28"
      data-purpose="course-competencies-card"
    >
      {/* Eyebrow */}
      <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#253b97] mb-1.5">
        {competenciesCard.eyebrow}
      </span>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-snug mb-2">
        {competenciesCard.title}
      </h2>

      {/* Subtitle */}
      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
        {competenciesCard.subtitle}
      </p>

      {/* 2x3 Competency Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {competenciesCard.items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{
              y: -4,
              scale: 1.01,
              transition: { type: "spring", stiffness: 380, damping: 22, delay: 0 },
            }}
            style={{ backgroundColor: "#f8fafc" }}
            className="rounded-2xl p-5 bg-[#f8fafc] hover:bg-[#f0f3ff]/60 border border-slate-100 hover:border-[#253b97]/25 transition-colors duration-200 flex items-start gap-3.5"
          >
            <span className="text-[#253b97] mt-0.5 shrink-0">
              <CompetencyIcon type={item.iconType} />
            </span>

            <div>
              <h3 className="text-xs sm:text-[13px] font-extrabold text-[#0f172a] mb-1.5">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

