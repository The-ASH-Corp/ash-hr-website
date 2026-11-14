"use client";

import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

export default function CourseSnapshotCard() {
  const { snapshotCard } = courseOverviewData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)]"
      data-purpose="course-snapshot-card"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-[#253b97] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 16V12M12 16V8M16 16v-5" />
          </svg>
          <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0f172a]">
            {snapshotCard.title}
          </h3>
        </div>

        <span
          style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
          className="px-2.5 py-1 rounded-md bg-[#eef2ff] text-[#253b97] text-[10px] font-extrabold uppercase tracking-wider"
        >
          {snapshotCard.badge}
        </span>
      </div>

      {/* Key-Value Rows */}
      <div className="divide-y divide-slate-100">
        {snapshotCard.rows.map((row) => {
          const valueClass =
            row.valueColor === "green"
              ? "text-xs font-extrabold text-[#16a34a]"
              : row.valueColor === "blue"
              ? "text-xs font-extrabold text-[#253b97]"
              : "text-xs font-extrabold text-[#0f172a]";

          return (
            <div
              key={row.label}
              className="py-3.5 flex items-center justify-between gap-3"
            >
              <span className="text-xs text-slate-500 font-medium">
                {row.label}
              </span>
              <span className={`${valueClass} text-right`}>{row.value}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

