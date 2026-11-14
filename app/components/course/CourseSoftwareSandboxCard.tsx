"use client";

import { motion } from "framer-motion";
import { courseOverviewData, SoftwareSandboxItem } from "./courseOverviewData";

function SandboxToolBadge({ item }: { item: SoftwareSandboxItem }) {
  switch (item.badgeType) {
    case "epfo":
      return (
        <div
          style={{ backgroundColor: "#eff4ff", color: "#253b97" }}
          className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#253b97] flex items-center justify-center font-extrabold text-[14px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "esic":
      return (
        <div
          style={{ backgroundColor: "#ecfdf5", color: "#059669" }}
          className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center font-extrabold text-[14px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "tds":
      return (
        <div
          style={{ backgroundColor: "#f5f3ff", color: "#7c3aed" }}
          className="w-12 h-12 rounded-xl bg-[#f5f3ff] text-[#7c3aed] flex items-center justify-center font-extrabold text-[14px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "darwinbox":
      return (
        <div
          style={{ backgroundColor: "#fff7ed", color: "#c2410c" }}
          className="w-12 h-12 rounded-xl bg-[#fff7ed] text-[#c2410c] flex items-center justify-center mb-4"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      );
    case "zoho":
      return (
        <div
          style={{ backgroundColor: "#eff6ff", color: "#1d4ed8" }}
          className="w-12 h-12 rounded-xl bg-[#eff6ff] text-[#1d4ed8] flex items-center justify-center font-extrabold text-[14px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "xls":
      return (
        <div
          style={{ backgroundColor: "#ecfdf5", color: "#15803d" }}
          className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#15803d] flex items-center justify-center font-extrabold text-[14px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
  }
}

export default function CourseSoftwareSandboxCard() {
  const { softwareSandboxCard } = courseOverviewData;

  return (
    <motion.div
      id="software-sandbox"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundColor: "#ffffff" }}
      className="scroll-mt-32 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)]"
    >
      {/* Eyebrow */}
      <div className="text-[11px] font-bold tracking-[0.14em] text-[#253b97] uppercase mb-2">
        {softwareSandboxCard.eyebrow}
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-extrabold tracking-tight text-[#0f172a] leading-[1.2] mb-2.5">
        {softwareSandboxCard.title}
      </h2>

      {/* Subtitle */}
      <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-[1.65] mb-7 max-w-2xl">
        {softwareSandboxCard.subtitle}
      </p>

      {/* 3x2 Software Sandbox Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {softwareSandboxCard.tools.map((tool, idx) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
            whileHover={{
              y: -3,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0,
              },
            }}
            style={{ backgroundColor: "#ffffff" }}
            className="flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#253b97]/30 hover:shadow-[0_10px_25px_rgba(37,59,151,0.06)] transition-colors"
          >
            <SandboxToolBadge item={tool} />
            <h3 className="text-[14px] sm:text-[14.5px] font-bold text-[#0f172a] mb-1.5">
              {tool.title}
            </h3>
            <p className="text-[12px] text-slate-500 leading-[1.55] max-w-[210px]">
              {tool.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

