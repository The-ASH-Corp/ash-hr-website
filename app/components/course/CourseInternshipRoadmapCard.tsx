"use client";

import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

export default function CourseInternshipRoadmapCard() {
  const { internshipRoadmapCard } = courseOverviewData;

  return (
    <motion.div
      id="internship-roadmap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundColor: "#ffffff" }}
      className="scroll-mt-32 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)]"
    >
      {/* Eyebrow */}
      <div className="text-[11px] font-bold tracking-[0.14em] text-[#253b97] uppercase mb-2">
        {internshipRoadmapCard.eyebrow}
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-extrabold tracking-tight text-[#0f172a] leading-[1.2] mb-3.5">
        {internshipRoadmapCard.title}
      </h2>

      {/* Green Implementation Pill Badge */}
      <div className="mb-6">
        <span
          style={{ backgroundColor: "#dcfce7", color: "#15803d" }}
          className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#dcfce7] text-[#15803d] text-[11.5px] font-bold"
        >
          {internshipRoadmapCard.badgeText}
        </span>
      </div>

      {/* 4 Phase Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {internshipRoadmapCard.phases.map((phase, idx) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
            whileHover={{
              y: -3,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0,
              },
            }}
            style={{ backgroundColor: "#f8fafc" }}
            className="flex flex-col justify-between rounded-2xl p-5 bg-[#f8fafc] border border-slate-200/80 hover:border-[#253b97]/30 hover:bg-white hover:shadow-[0_10px_25px_rgba(37,59,151,0.06)] transition-colors"
          >
            <div>
              {/* Days Pill */}
              <span
                style={{ backgroundColor: "#e8edff", color: "#253b97" }}
                className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#e8edff] text-[#253b97] text-[10.5px] font-bold mb-3.5"
              >
                {phase.daysLabel}
              </span>

              {/* Phase Title */}
              <h3 className="text-[14.5px] font-extrabold text-[#0f172a] leading-[1.3] mb-2">
                {phase.title}
              </h3>

              {/* Phase Description */}
              <p className="text-[12px] sm:text-[12.5px] text-slate-500 leading-[1.55] mb-5">
                {phase.description}
              </p>
            </div>

            {/* Footer Milestone */}
            <div className="pt-3.5 border-t border-slate-200/80">
              <span
                className={`text-[11.5px] font-bold ${
                  phase.milestoneColor === "green"
                    ? "text-[#15803d]"
                    : "text-[#253b97]"
                }`}
              >
                {phase.milestone}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

