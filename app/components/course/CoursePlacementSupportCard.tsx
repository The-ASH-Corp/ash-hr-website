"use client";

import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

interface CoursePlacementSupportCardProps {
  onOpenEnquiry?: () => void;
}

export default function CoursePlacementSupportCard({
  onOpenEnquiry,
}: CoursePlacementSupportCardProps) {
  const { placementSupportCard } = courseOverviewData;

  return (
    <motion.section
      id="placement-support"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] scroll-mt-28"
      data-purpose="course-placement-support-card"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 mb-7 border-b border-slate-100">
        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#253b97] mb-1.5">
            {placementSupportCard.eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-snug">
            {placementSupportCard.title}
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-500 mt-1 max-w-xl">
            {placementSupportCard.description}
          </p>
        </div>

      </div>

      {/* Motto Tagline Banner */}
      <div className="mb-7 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#253b97] via-[#1d2f7a] to-[#253b97] text-white text-center flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-left">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#f5b82e] block">
            OUR COMMITMENT
          </span>
          <span className="text-base sm:text-lg font-extrabold tracking-wide">
            {placementSupportCard.tagline}
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenEnquiry}
          className="px-4 py-2 rounded-full bg-[#f5b82e] hover:bg-[#eab308] text-[#0f172a] text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          Enquire for Placement Drive
        </button>
      </div>

     

      {/* 6 Placement Pillars Grid */}
      <div>
        <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a] mb-4">
          Structured 6-Pillar Career Support Pathway:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {placementSupportCard.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -6,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0,
                },
              }}
              className="group rounded-2xl p-5 sm:p-6 bg-[#f8fafc] hover:bg-[#253b97] border border-slate-200/90 hover:border-[#253b97] shadow-xs hover:shadow-[0_18px_38px_-10px_rgba(37,59,151,0.32)] transition-all duration-250 flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#eef2ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-[#ffca28] text-xs font-extrabold flex items-center justify-center mb-4 transition-colors duration-250">
                  0{idx + 1}
                </div>
                <h4 className="text-sm sm:text-[15px] font-extrabold text-[#0f172a] group-hover:text-white mb-1.5 leading-snug transition-colors duration-250">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-500 group-hover:text-blue-100/90 leading-relaxed transition-colors duration-250">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
