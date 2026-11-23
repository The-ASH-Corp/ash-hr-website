"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

interface CourseSyllabusCardProps {
  onOpenEnquiry?: () => void;
}

export default function CourseSyllabusCard({
  onOpenEnquiry,
}: CourseSyllabusCardProps) {
  const { syllabusCard } = courseOverviewData;
  const defaultOpenMonth =
    syllabusCard.months.find((m) => m.defaultOpen)?.id ?? "month-1";
  const [openMonthId, setOpenMonthId] = useState<string | null>(defaultOpenMonth);
  const [showExtraTraining, setShowExtraTraining] = useState<boolean>(false);

  const toggleMonth = (id: string) => {
    setOpenMonthId((prev) => (prev === id ? null : id));
  };

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
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#253b97] mb-1.5">
            {syllabusCard.eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-snug">
            {syllabusCard.title}
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-500 mt-1 max-w-xl">
            {syllabusCard.subtitle}
          </p>
        </div>

        <motion.button
          type="button"
          onClick={onOpenEnquiry}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#eef2ff] hover:bg-[#e0e7ff] text-[#253b97] text-xs font-bold transition-colors cursor-pointer"
        >
          <svg
            className="w-3.5 h-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
          </svg>
          <span>{syllabusCard.downloadLabel}</span>
        </motion.button>
      </div>

      {/* 6 Months Accordion Modules */}
      <div className="space-y-4">
        {syllabusCard.months.map((month) => {
          const isOpen = openMonthId === month.id;
          const isGold = month.badgeVariant === "gold";

          return (
            <div
              key={month.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? "border-[#253b97]/40 shadow-sm"
                  : "border-slate-200/90 hover:border-slate-300"
              }`}
            >
              {/* Accordion Header */}
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleMonth(month.id)}
                className={`w-full px-4 sm:px-6 py-4.5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors ${
                  isOpen ? "bg-slate-50/90 border-b border-slate-200" : "bg-white hover:bg-slate-50/70"
                }`}
              >
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <span
                    style={
                      isGold
                        ? { backgroundColor: "#f5b82e", color: "#0f172a" }
                        : { backgroundColor: "#253b97", color: "#ffffff" }
                    }
                    className="px-3 py-1 rounded-md text-[11px] font-extrabold shrink-0"
                  >
                    {month.monthLabel}
                  </span>

                  <div>
                    <span className="text-xs sm:text-sm font-extrabold text-[#0f172a] block leading-snug">
                      {month.title}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {month.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-bold text-slate-400 hidden sm:inline-block">
                    {month.weeks.length} Weeks
                  </span>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-slate-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                </div>
              </button>

              {/* Accordion Body: Detailed Weeks Table */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-6 bg-white space-y-4">
                      <div className="grid grid-cols-1 gap-3.5">
                        {month.weeks.map((week) => (
                          <div
                            key={week.weekNumber}
                            className="p-4 rounded-xl border border-slate-100 bg-[#fbfbfe] hover:bg-white hover:border-slate-200 transition-colors"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-[#eef2ff] text-[#253b97] text-[10px] font-extrabold">
                                  {week.weekLabel}
                                </span>
                                <h4 className="text-xs sm:text-[13px] font-bold text-[#0f172a]">
                                  {week.title}
                                </h4>
                              </div>

                              <div className="sm:text-right shrink-0">
                                <span className="text-[10px] font-semibold text-slate-400 block sm:inline">
                                  Weekly Submission:{" "}
                                </span>
                                <span className="text-[11px] font-bold text-[#16a34a] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                                  {week.submission}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-1.5 text-xs text-slate-600 pl-1">
                              <div>
                                <span className="font-semibold text-slate-700">Topics: </span>
                                {week.topics}
                              </div>
                              <div className="text-slate-500 text-[11.5px]">
                                <span className="font-semibold text-slate-600">Weekly Outcome: </span>
                                {week.outcome}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {month.footerBadges && month.footerBadges.length > 0 && (
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          {month.footerBadges.map((badge) => (
                            <span
                              key={badge.label}
                              className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                                badge.variant === "green"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : badge.variant === "amber"
                                  ? "bg-amber-100 text-amber-900"
                                  : "bg-indigo-100 text-indigo-900"
                              }`}
                            >
                              ✓ {badge.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Extra Training - Basic Social Media Page Handling (Document 2 Page 25) */}
      <div className="mt-6 pt-6 border-t border-slate-100">
        <button
          type="button"
          onClick={() => setShowExtraTraining(!showExtraTraining)}
          className="w-full p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 hover:bg-amber-50 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-900 text-[10px] font-extrabold uppercase">
                BONUS MODULE
              </span>
              <h3 className="text-xs sm:text-sm font-extrabold text-[#0f172a]">
                {syllabusCard.extraTraining.title}
              </h3>
            </div>
            <p className="text-[11.5px] text-slate-600 mt-1">
              {syllabusCard.extraTraining.subtitle}
            </p>
          </div>

          <motion.svg
            animate={{ rotate: showExtraTraining ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-4 h-4 text-slate-600 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </button>

        <AnimatePresence>
          {showExtraTraining && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-4 sm:p-5 mt-2 rounded-2xl bg-white border border-amber-200/70 space-y-3">
                <p className="text-xs text-amber-800 font-medium italic">
                  Note: {syllabusCard.extraTraining.note}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {syllabusCard.extraTraining.sessions.map((sess) => (
                    <div
                      key={sess.sessionNumber}
                      className="p-3 rounded-xl bg-amber-50/30 border border-amber-100"
                    >
                      <div className="text-[10px] font-bold text-amber-700 uppercase mb-0.5">
                        Session {sess.sessionNumber}
                      </div>
                      <div className="text-xs font-bold text-[#0f172a] mb-1">
                        {sess.title}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-relaxed">
                        {sess.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
