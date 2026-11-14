"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

export default function CourseCareerExplorerCard() {
  const { careerExplorerCard } = courseOverviewData;
  const [selectedRoleId, setSelectedRoleId] = useState<string>(
    careerExplorerCard.roles[0]?.id ?? "hrbp",
  );

  const activeRole =
    careerExplorerCard.roles.find((role) => role.id === selectedRoleId) ??
    careerExplorerCard.roles[0];

  return (
    <motion.div
      id="career-roi"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundColor: "#ffffff" }}
      className="scroll-mt-32 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)]"
    >
      {/* Eyebrow */}
      <div className="text-[11px] font-bold tracking-[0.14em] text-[#253b97] uppercase mb-2">
        {careerExplorerCard.eyebrow}
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-extrabold tracking-tight text-[#0f172a] leading-[1.2] mb-2.5">
        {careerExplorerCard.title}
      </h2>

      {/* Subtitle */}
      <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[1.65] mb-6 max-w-2xl">
        {careerExplorerCard.subtitle}
      </p>

      {/* Role Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5 mb-6">
        {careerExplorerCard.roles.map((role) => {
          return (
            <motion.button
              key={role.id}
              type="button"
              onClick={() => setSelectedRoleId(role.id)}
              onMouseEnter={() => setSelectedRoleId(role.id)}
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
              className="group text-left rounded-2xl p-4 border bg-white border-slate-200/90 text-[#0f172a] hover:bg-[#253b97] hover:border-[#253b97] hover:text-white hover:shadow-[0_8px_20px_rgba(37,59,151,0.22)] transition-colors duration-200 cursor-pointer"
            >
              <div className="text-[11px] font-medium mb-1 text-slate-400 group-hover:text-blue-200 transition-colors duration-200">
                {role.trackLabel}
              </div>
              <div className="text-[14.5px] font-bold leading-snug mb-1.5 text-[#0f172a] group-hover:text-white transition-colors duration-200">
                {role.shortTitle}
              </div>
              <div className="text-[11.5px] font-extrabold tracking-tight text-[#253b97] group-hover:text-[#ffca28] transition-colors duration-200">
                {role.shortSalary}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Role Details Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{ backgroundColor: "#f8fafc" }}
          className="rounded-2xl p-5 sm:p-7 bg-[#f8fafc] border border-slate-200/80"
        >
          {/* Top Row: Role Title & Market CTC Range */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-5 mb-5 border-b border-slate-200/80">
            <div>
              <h3 className="text-lg sm:text-[20px] font-extrabold text-[#0f172a] mb-1.5">
                {activeRole.fullTitle}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-[1.6] max-w-md">
                {activeRole.description}
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="text-[10px] font-bold tracking-[0.12em] text-slate-400 uppercase mb-1">
                {careerExplorerCard.ctcLabel}
              </div>
              <div className="text-xl sm:text-[22px] font-extrabold text-[#253b97] leading-[1.25] tracking-tight">
                <div>{activeRole.ctcRangeTop}</div>
                <div>{activeRole.ctcRangeBottom}</div>
              </div>
            </div>
          </div>

          {/* Bottom 2-Column Grid: Responsibilities & Recruiting Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Primary Daily Responsibilities */}
            <div>
              <div className="flex items-center gap-2 text-[12.5px] font-bold text-[#0f172a] mb-3.5">
                <svg
                  className="w-4 h-4 text-[#253b97] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{careerExplorerCard.responsibilitiesHeading}</span>
              </div>

              <ul className="space-y-2.5">
                {activeRole.responsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.55]"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Primary Recruiting Sectors */}
            <div>
              <div className="flex items-center gap-2 text-[12.5px] font-bold text-[#0f172a] mb-3.5">
                <svg
                  className="w-4 h-4 text-[#253b97] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                <span>{careerExplorerCard.sectorsHeading}</span>
              </div>

              <div className="flex flex-col items-start gap-2">
                {activeRole.sectors.map((sector, idx) => (
                  <span
                    key={idx}
                    style={{ backgroundColor: "#ffffff" }}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200/90 text-[12px] font-bold text-[#0f172a] shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

