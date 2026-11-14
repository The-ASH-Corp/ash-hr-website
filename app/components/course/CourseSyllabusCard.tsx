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
  const defaultOpenModule =
    syllabusCard.modules.find((m) => m.defaultOpen)?.id ?? "months-5-6";
  const [openModuleId, setOpenModuleId] = useState<string | null>(
    defaultOpenModule
  );

  const toggleModule = (id: string) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      id="interactive-syllabus"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
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
        </div>

        <motion.button
          type="button"
          onClick={onOpenEnquiry}
          whileHover={{
            scale: 1.03,
            y: -1,
            transition: { type: "spring", stiffness: 400, damping: 20, delay: 0 },
          }}
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

      {/* Accordion Modules */}
      <div className="space-y-3.5">
        {syllabusCard.modules.map((mod) => {
          const isOpen = openModuleId === mod.id;
          const isGold = mod.badgeVariant === "gold";

          return (
            <div
              key={mod.id}
              className={
                isOpen
                  ? "rounded-2xl border border-[#253b97]/35 bg-white shadow-xs overflow-hidden transition-colors"
                  : "rounded-2xl border border-slate-200/80 hover:border-slate-300 bg-white overflow-hidden transition-colors"
              }
            >
              {/* Accordion Header Button */}
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleModule(mod.id)}
                style={
                  isOpen
                    ? { backgroundColor: "#f8fafc" }
                    : { backgroundColor: "#ffffff" }
                }
                className={
                  isOpen
                    ? "w-full px-4 sm:px-5 py-4 flex items-center justify-between gap-3 text-left bg-[#f8fafc] border-b border-slate-200/70 cursor-pointer transition-colors"
                    : "w-full px-4 sm:px-5 py-4 flex items-center justify-between gap-3 text-left bg-white hover:bg-slate-50/70 cursor-pointer transition-colors"
                }
              >
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                  <span
                    style={
                      isGold
                        ? { backgroundColor: "#f5b82e", color: "#0f172a" }
                        : { backgroundColor: "#253b97", color: "#ffffff" }
                    }
                    className={
                      isGold
                        ? "px-3 py-1 rounded-md bg-[#f5b82e] text-[#0f172a] text-[11px] font-extrabold shrink-0"
                        : "px-3 py-1 rounded-md bg-[#253b97] text-white text-[11px] font-bold shrink-0"
                    }
                  >
                    {mod.monthLabel}
                  </span>

                  <span className="text-xs sm:text-sm font-extrabold text-[#0f172a] leading-snug">
                    {mod.title}
                  </span>
                </div>

                <motion.svg
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    isOpen
                      ? "w-4 h-4 text-[#0f172a] shrink-0"
                      : "w-4 h-4 text-slate-400 shrink-0"
                  }
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

              {/* Accordion Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 space-y-3 bg-white">
                      <ul className="space-y-2.5">
                        {mod.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className={
                              bullet.highlighted
                                ? "text-xs sm:text-[13px] font-bold text-[#253b97] leading-relaxed"
                                : "text-xs sm:text-[13px] text-slate-600 leading-relaxed"
                            }
                          >
                            • {bullet.text}
                          </li>
                        ))}
                      </ul>

                      {mod.footerBadges && mod.footerBadges.length > 0 && (
                        <div className="pt-2 flex flex-wrap items-center gap-2.5">
                          {mod.footerBadges.map((badge) => (
                            <span
                              key={badge.label}
                              style={
                                badge.variant === "green"
                                  ? {
                                      backgroundColor: "#dcfce7",
                                      color: "#15803d",
                                    }
                                  : {
                                      backgroundColor: "#eef2ff",
                                      color: "#253b97",
                                    }
                              }
                              className={
                                badge.variant === "green"
                                  ? "px-3 py-1 rounded-full bg-[#dcfce7] text-[#15803d] text-[11px] font-bold"
                                  : "px-3 py-1 rounded-full bg-[#eef2ff] text-[#253b97] text-[11px] font-bold"
                              }
                            >
                              {badge.label}
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
    </motion.section>
  );
}

