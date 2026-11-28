"use client";

import { motion } from "framer-motion";
import { courseOverviewData, CompetencyCardItem } from "./courseOverviewData";

function CompetencyIcon({ type }: { type: CompetencyCardItem["iconType"] }) {
  switch (type) {
    case "architecture":
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
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M6 9v3a1 1 0 001 1h10a1 1 0 001-1V9M12 13v2" />
        </svg>
      );
    case "sourcing":
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
          <circle cx="10" cy="8" r="4" />
          <path d="M2 20c0-3.3 3.6-6 8-6" />
          <circle cx="17" cy="17" r="3" />
          <path d="M21 21l-1.9-1.9" />
        </svg>
      );
    case "compliance":
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
          <path d="M14 4l6 6-8 8-6-6 8-8z" />
          <path d="M4 20h16" />
        </svg>
      );
    case "payroll":
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
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      );
    case "analytics":
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
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      );
    case "hris":
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
          <rect x="9" y="3" width="6" height="5" rx="1" />
          <rect x="3" y="15" width="6" height="5" rx="1" />
          <rect x="15" y="15" width="6" height="5" rx="1" />
          <path d="M12 8v4M6 15v-3h12v3" />
        </svg>
      );
    case "hospital":
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
          <path d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
          <path d="M12 9v4M10 11h4" />
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
          <path d="M12 2a4 4 0 00-4 4v2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
          <circle cx="9" cy="13" r="1" />
          <circle cx="15" cy="13" r="1" />
          <path d="M10 17h4" />
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
      <span className="block text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#253b97] mb-2">
        {competenciesCard.eyebrow}
      </span>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-bold text-[#0f172a] tracking-tight leading-[1.2] mb-2.5">
        {competenciesCard.title}
      </h2>

      {/* Subtitle */}
      <p className="text-slate-600 text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl leading-relaxed mb-7 max-w-3xl 2xl:max-w-4xl">
        {competenciesCard.subtitle}
      </p>

      {/* Competency Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
        {competenciesCard.items.map((item, idx) => (
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
            className="group rounded-2xl p-5 sm:p-6 2xl:p-8 min-[137.5rem]:p-10 bg-[#f8fafc] hover:bg-[#253b97] border border-slate-200/90 hover:border-[#253b97] shadow-xs hover:shadow-[0_18px_38px_-10px_rgba(37,59,151,0.32)] transition-all duration-250 flex flex-col justify-between cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#eef2ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-[#ffca28] flex items-center justify-center shrink-0 transition-colors duration-250">
                <CompetencyIcon type={item.iconType} />
              </div>
              <span className="text-xs sm:text-sm 2xl:text-base font-extrabold tracking-widest text-slate-300 group-hover:text-white/60 transition-colors duration-250">
                0{idx + 1}
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] group-hover:text-white mb-2 leading-snug transition-colors duration-250">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 group-hover:text-blue-100/90 leading-relaxed transition-colors duration-250">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
