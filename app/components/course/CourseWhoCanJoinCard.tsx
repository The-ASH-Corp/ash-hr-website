"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseOverviewData, CareerRoleItem } from "./courseOverviewData";

export default function CourseWhoCanJoinCard() {
  const { whoCanJoinCard } = courseOverviewData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeRole, setActiveRole] = useState<CareerRoleItem>(
    whoCanJoinCard.allRoles[0]
  );

  const categories = [
    { id: "all", label: `All Roles (${whoCanJoinCard.allRoles.length})` },
    { id: "hr", label: "HR Management" },
    { id: "admin", label: "Office Administration" },
    { id: "hospital", label: "Healthcare Admin" },
    { id: "management", label: "Management & Operations" },
  ];

  const filteredRoles =
    selectedCategory === "all"
      ? whoCanJoinCard.allRoles
      : whoCanJoinCard.allRoles.filter((r) => r.category === selectedCategory);

  return (
    <motion.section
      id="who-can-join"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] scroll-mt-28"
      data-purpose="course-who-can-join-card"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 mb-7 border-b border-slate-100">
        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#253b97] mb-1.5">
            {whoCanJoinCard.eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-snug">
            {whoCanJoinCard.title}
          </h2>
        </div>

        <div className="shrink-0">
          <span
            style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold border border-amber-300/60"
          >
            <svg
              className="w-3.5 h-3.5 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
            </svg>
            <span>{whoCanJoinCard.eligibilityBadge}</span>
          </span>
        </div>
      </div>

      {/* Target Groups Grid (Document 3: Page 4) */}
      <div className="mb-10">
        <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a] mb-4">
          Ideal Candidates for this 6-Month Programme:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {whoCanJoinCard.targetGroups.map((group, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="rounded-2xl p-4 bg-slate-50 border border-slate-200/90 hover:border-[#253b97]/30 hover:bg-[#f8faff] transition-all"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-lg bg-[#eef2ff] text-[#253b97] flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </span>
                <h4 className="text-xs sm:text-[13px] font-bold text-[#0f172a]">
                  {group.title}
                </h4>
              </div>
              <p className="text-[11.5px] text-slate-500 leading-relaxed pl-8">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose ASH Academy (Document 3: Pages 2 & 3) */}
      <div className="mb-10 pt-8 border-t border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a]">
            Why Choose ASH Academy?
          </h3>
          <span className="text-[11px] font-bold text-[#253b97] bg-[#eef2ff] px-3 py-1 rounded-full">
            200+ Students Trained • 100+ Placements
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {whoCanJoinCard.whyChooseAsh.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4 bg-white border border-slate-200 shadow-2xs"
            >
              <h4 className="text-xs sm:text-[13px] font-bold text-[#253b97] mb-1">
                {item.title}
              </h4>
              <p className="text-[11.5px] text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Potential Job Roles Section (Document 3: Page 6 - 17 Job Roles!) */}
      <div className="pt-8 border-t border-slate-100">
        <div className="mb-5">
          <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a] mb-1">
            {whoCanJoinCard.rolesHeading}
          </h3>
          <p className="text-xs text-slate-500">
            Click on any role to see daily job responsibilities and recruiting corporate sectors:
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#253b97] text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Roles Button Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-6">
          {filteredRoles.map((role) => {
            const isCurrent = activeRole.id === role.id;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveRole(role)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-[#253b97] text-white border-[#253b97] shadow-sm"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-[#0f172a]"
                }`}
              >
                <div
                  className={`text-[10px] font-medium mb-0.5 ${
                    isCurrent ? "text-blue-200" : "text-slate-400"
                  }`}
                >
                  {role.trackLabel.replace(" Track", "")}
                </div>
                <div
                  className={`text-xs font-bold truncate ${
                    isCurrent ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  {role.shortTitle}
                </div>
                <div
                  className={`text-[11px] font-semibold mt-1 ${
                    isCurrent ? "text-[#f5b82e]" : "text-[#253b97]"
                  }`}
                >
                  {role.shortSalary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Role Detailed Preview Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl p-5 sm:p-6 bg-slate-50 border border-slate-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 mb-4 border-b border-slate-200/80">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#253b97]">
                  {activeRole.trackLabel}
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-[#0f172a]">
                  {activeRole.fullTitle}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {activeRole.description}
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Typical Market CTC
                </span>
                <span className="text-lg font-extrabold text-[#253b97]">
                  {activeRole.shortSalary}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <span className="text-xs font-bold text-[#0f172a] block mb-2">
                  Primary Job Responsibilities:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeRole.responsibilities.map((res, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#253b97] shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold text-[#0f172a] block mb-2">
                  Hiring Industry Sectors:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeRole.sectors.map((sec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
