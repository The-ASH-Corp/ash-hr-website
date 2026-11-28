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
          <span className="block text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#253b97] mb-2">
            {placementSupportCard.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-bold text-[#0f172a] tracking-tight leading-snug">
            {placementSupportCard.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 mt-2 max-w-3xl 2xl:max-w-4xl">
            {placementSupportCard.description}
          </p>
        </div>

      </div>

      {/* Motto Tagline Banner */}
      <div className="mb-7 p-5 sm:p-6 2xl:p-8 rounded-2xl bg-gradient-to-r from-[#253b97] via-[#1d2f7a] to-[#253b97] text-white text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <span className="text-xs 2xl:text-sm uppercase font-bold tracking-widest text-[#f5b82e] block">
            OUR COMMITMENT
          </span>
          <span className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-extrabold tracking-wide">
            {placementSupportCard.tagline}
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenEnquiry}
          className="px-6 py-3 rounded-full bg-[#f5b82e] hover:bg-[#eab308] text-[#0f172a] text-xs sm:text-sm 2xl:text-base font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          Enquire for Placement Drive
        </button>
      </div>

     

      {/* 6 Placement Pillars Grid */}
      <div>
        <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] mb-4">
          Structured 6-Pillar Career Support Pathway:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 2xl:gap-8">
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
              className="group rounded-2xl p-5 sm:p-6 2xl:p-8 min-[137.5rem]:p-10 bg-[#f8fafc] hover:bg-[#253b97] border border-slate-200/90 hover:border-[#253b97] shadow-xs hover:shadow-[0_18px_38px_-10px_rgba(37,59,151,0.32)] transition-all duration-250 flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#eef2ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-[#ffca28] text-xs sm:text-sm 2xl:text-base font-extrabold flex items-center justify-center mb-4 transition-colors duration-250">
                  0{idx + 1}
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] group-hover:text-white mb-2 leading-snug transition-colors duration-250">
                  {pillar.title}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 group-hover:text-blue-100/90 leading-relaxed transition-colors duration-250">
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
