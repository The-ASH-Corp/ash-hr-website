"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseOverviewData, CareerRoleItem } from "./courseOverviewData";

export default function CourseJobOpportunitiesCard() {
  const { whoCanJoinCard } = courseOverviewData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeRole, setActiveRole] = useState<CareerRoleItem>(
    whoCanJoinCard.allRoles[0],
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
      id="job-opportunities"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] scroll-mt-28"
      data-purpose="course-job-opportunities-card"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 mb-6 border-b border-slate-100">
        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#253b97] mb-1.5">
            CAREER PATHWAYS & ROLES
          </span>
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-extrabold text-[#0f172a] tracking-tight leading-[1.2]">
            Potential Job Opportunities
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-2xl">
            Explore the 17+ dual-domain career roles across Human Resources,
            Corporate Office Administration, and Hospital Front-Office
            Operations. Hover or click any role to inspect core responsibilities
            and hiring sectors.
          </p>
        </div>

        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eef2ff] text-[#253b97] text-xs font-extrabold">
            <span className="w-2 h-2 rounded-full bg-[#253b97] animate-pulse" />
            <span>{whoCanJoinCard.allRoles.length}+ Target Job Roles</span>
          </span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-[#253b97] text-white shadow-xs"
                : "bg-[#f8fafc] hover:bg-[#eef2ff] text-slate-600 hover:text-[#253b97] border border-slate-200/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-7">
        {filteredRoles.map((role, idx) => {
          return (
            <motion.button
              key={role.id}
              type="button"
              onClick={() => setActiveRole(role)}
              onMouseEnter={() => setActiveRole(role)}
              whileHover={{
                y: -4,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0,
                },
              }}
              whileTap={{ scale: 0.98 }}
              className="group p-4 rounded-2xl border text-left bg-[#f8fafc] hover:bg-[#253b97] border-slate-200/90 hover:border-[#253b97] text-[#0f172a] hover:text-white shadow-2xs hover:shadow-[0_14px_30px_-8px_rgba(37,59,151,0.3)] transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-200 transition-colors">
                  {role.trackLabel.replace(" Track", "")}
                </span>
                <span className="text-[10.5px] font-extrabold text-slate-300 group-hover:text-[#ffca28] transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="text-xs sm:text-[13.5px] font-extrabold text-[#0f172a] group-hover:text-white leading-snug transition-colors">
                {role.shortTitle}
              </div>
            </motion.button>
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
          className="rounded-2xl p-5 sm:p-7 bg-[#f8fafc] border border-slate-200/90"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 mb-5 border-b border-slate-200/80">
            <div>
              <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#253b97]">
                {activeRole.trackLabel}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0f172a] mt-0.5">
                {activeRole.fullTitle}
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 mt-1 max-w-2xl">
                {activeRole.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold text-[#0f172a] flex items-center gap-2 mb-3">
                <svg
                  className="w-4 h-4 text-[#253b97] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Primary Job Responsibilities</span>
              </span>
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
                {activeRole.responsibilities.map((res, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#253b97] shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs sm:text-[13px] font-extrabold text-[#0f172a] flex items-center gap-2 mb-3">
                <svg
                  className="w-4 h-4 text-[#253b97] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                <span>Hiring Industry Sectors</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {activeRole.sectors.map((sec, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 text-xs font-bold text-[#0f172a] shadow-2xs"
                  >
                    {sec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
