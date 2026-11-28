"use client";

import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

interface CourseSyllabusCardProps {
  onOpenEnquiry?: () => void;
}

export default function CourseSyllabusCard({}: CourseSyllabusCardProps) {
  const { syllabusCard } = courseOverviewData;

  return (
    <motion.section
      id="interactive-syllabus"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] scroll-mt-28"
      data-purpose="course-syllabus-card"
    >
      {/* Header Row */}
      <div className="mb-6">
        <span className="block text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#253b97] mb-2">
          {syllabusCard.eyebrow}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-bold text-[#0f172a] tracking-tight leading-snug">
          {syllabusCard.title}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 mt-2 max-w-3xl 2xl:max-w-4xl">
          {syllabusCard.subtitle}
        </p>
      </div>

      {/* 6 Months Static Topic Rows */}
      <div className="space-y-3.5">
        {syllabusCard.months.map((month) => {
          const isGold = month.badgeVariant === "gold";

          return (
            <div
              key={month.id}
              className="rounded-2xl border border-slate-200/90 hover:border-slate-300 bg-white hover:bg-slate-50/70 transition-colors overflow-hidden"
            >
              <div className="w-full px-4 sm:px-6 2xl:px-8 py-4.5 2xl:py-6 flex items-center justify-between gap-4 text-left">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 2xl:gap-5">
                  <span
                    style={
                      isGold
                        ? { backgroundColor: "#f5b82e", color: "#0f172a" }
                        : { backgroundColor: "#253b97", color: "#ffffff" }
                    }
                    className="px-3.5 py-1.5 rounded-md text-xs sm:text-sm 2xl:text-base font-extrabold shrink-0"
                  >
                    {month.monthLabel}
                  </span>

                  <div>
                    <span className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] block leading-snug">
                      {month.title}
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 block mt-0.5">
                      {month.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus Training Module — Basic Social Media Page Handling */}
      <div className="mt-5 pt-5 border-t border-slate-100">
        <div className="p-4 sm:p-6 2xl:p-8 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-4">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 2xl:gap-5">
            <span
              style={{ backgroundColor: "#fbbf24", color: "#0f172a" }}
              className="px-3.5 py-1.5 rounded-md bg-amber-400 text-slate-900 text-xs sm:text-sm 2xl:text-base font-extrabold uppercase shrink-0"
            >
              BONUS MODULE
            </span>
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] leading-snug">
                {syllabusCard.extraTraining.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 mt-0.5">
                {syllabusCard.extraTraining.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
