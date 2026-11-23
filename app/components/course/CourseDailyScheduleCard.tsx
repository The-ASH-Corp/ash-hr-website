"use client";

import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

export default function CourseDailyScheduleCard() {
  const { dailyScheduleCard } = courseOverviewData;

  return (
    <motion.section
      id="schedule"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] scroll-mt-28"
      data-purpose="course-daily-schedule-card"
    >
      {/* Eyebrow & Main Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 mb-7 border-b border-slate-100">
        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#253b97] mb-1.5">
            {dailyScheduleCard.eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-snug">
            {dailyScheduleCard.title}
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-500 mt-1 max-w-xl">
            {dailyScheduleCard.subtitle}
          </p>
        </div>

        <div className="shrink-0">
          <span
            style={{ backgroundColor: "#ecfdf5", color: "#047857" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ecfdf5] text-[#047857] text-xs font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>{dailyScheduleCard.schedulePill}</span>
          </span>
        </div>
      </div>

      {/* Part 1: Daily Time Structure (Timeline format) */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a] flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#253b97]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>1. Daily Time Structure</span>
          </h3>
          <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline-block">
            {dailyScheduleCard.totalClassTime}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {dailyScheduleCard.slots.map((slot, index) => {
            const isBreak = slot.type === "break";
            return (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  backgroundColor: isBreak ? "#fffbeb" : "#f8fafc",
                  borderColor: isBreak ? "#fef3c7" : "#e2e8f0",
                }}
                className={`rounded-2xl p-4 border flex flex-col justify-between ${
                  isBreak ? "bg-amber-50/60 border-amber-200" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                        isBreak
                          ? "bg-amber-200 text-amber-900"
                          : "bg-[#253b97] text-white"
                      }`}
                    >
                      {slot.slot}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {slot.duration}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-[#0f172a] mb-1.5">
                    {slot.time}
                  </div>

                  <p className="text-[11.5px] text-slate-600 leading-relaxed">
                    {slot.activity}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Weekly 5-Day Pattern */}
      <div className="mb-8 pt-6 border-t border-slate-100">
        <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a] mb-4 flex items-center gap-2">
          <svg
            className="w-4 h-4 text-[#253b97]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>2. Weekly Pattern (Every Monday to Friday)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {dailyScheduleCard.weeklyPattern.map((dayItem, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="rounded-2xl p-4 bg-white border border-slate-200 hover:border-[#253b97]/30 hover:shadow-xs transition-all"
            >
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#253b97] mb-1">
                {dayItem.day}
              </span>
              <h4 className="text-xs sm:text-[13px] font-bold text-[#0f172a] mb-1.5 leading-snug">
                {dayItem.title}
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {dayItem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 3: How Student Work is Evaluated */}
      <div className="pt-6 border-t border-slate-100 bg-[#f8fafc] -mx-6 sm:-mx-8 lg:-mx-10 -mb-6 sm:-mb-8 lg:-mb-10 p-6 sm:p-8 lg:p-10 rounded-b-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a] flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span>3. How We Check Student Work (Marking Standards 1 to 4)</span>
          </h3>
          <span className="text-[11px] font-bold text-[#253b97] bg-[#eef2ff] px-3 py-1 rounded-full">
            Friday Weekly Review Checklist
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {dailyScheduleCard.evaluationCriteria.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-3.5 bg-white border border-slate-200/90 shadow-2xs"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-[#0f172a]">
                  {item.point}
                </span>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Score 1–4
                </span>
              </div>
              <p className="text-[11.5px] text-slate-500 leading-relaxed">
                {item.check}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
