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

        <div className="shrink-0">
          <span
            style={{ backgroundColor: "#dcfce7", color: "#15803d" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dcfce7] text-[#15803d] text-xs font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
            <span>{placementSupportCard.badge}</span>
          </span>
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

      {/* 4 Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {placementSupportCard.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-[#253b97]">
              {stat.value}
            </div>
            <div className="text-[11px] font-bold text-slate-500 mt-0.5 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* 6 Placement Pillars Grid */}
      <div>
        <h3 className="text-sm sm:text-base font-extrabold text-[#0f172a] mb-4">
          Structured 6-Pillar Career Support Pathway:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placementSupportCard.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="rounded-2xl p-4 sm:p-5 bg-white border border-slate-200 hover:border-[#253b97]/30 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-lg bg-[#eef2ff] text-[#253b97] text-xs font-bold flex items-center justify-center mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-xs sm:text-[13px] font-bold text-[#0f172a] mb-1.5 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-[11.5px] text-slate-500 leading-relaxed">
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
