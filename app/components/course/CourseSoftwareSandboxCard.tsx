"use client";

import { motion } from "framer-motion";
import { courseOverviewData, SoftwareSandboxItem } from "./courseOverviewData";

function SandboxToolBadge({ item }: { item: SoftwareSandboxItem }) {
  switch (item.badgeType) {
    case "zoho":
      return (
        <div
          style={{ backgroundColor: "#eff6ff", color: "#1d4ed8" }}
          className="w-12 h-12 rounded-xl bg-[#eff6ff] text-[#1d4ed8] flex items-center justify-center font-extrabold text-[13px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "keka":
      return (
        <div
          style={{ backgroundColor: "#ecfdf5", color: "#059669" }}
          className="w-12 h-12 rounded-xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center font-extrabold text-[13px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "zohobooks":
      return (
        <div
          style={{ backgroundColor: "#fff7ed", color: "#c2410c" }}
          className="w-12 h-12 rounded-xl bg-[#fff7ed] text-[#c2410c] flex items-center justify-center font-extrabold text-[13px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "workspace":
      return (
        <div
          style={{ backgroundColor: "#eff4ff", color: "#253b97" }}
          className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#253b97] flex items-center justify-center font-extrabold text-[13px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "ai":
      return (
        <div
          style={{ backgroundColor: "#f5f3ff", color: "#7c3aed" }}
          className="w-12 h-12 rounded-xl bg-[#f5f3ff] text-[#7c3aed] flex items-center justify-center font-extrabold text-[13px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    case "his":
      return (
        <div
          style={{ backgroundColor: "#fef2f2", color: "#dc2626" }}
          className="w-12 h-12 rounded-xl bg-[#fef2f2] text-[#dc2626] flex items-center justify-center font-extrabold text-[13px] tracking-tight mb-4"
        >
          {item.badgeText}
        </div>
      );
    default:
      return (
        <div
          style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
          className="w-12 h-12 rounded-xl bg-[#eef2ff] text-[#253b97] flex items-center justify-center font-extrabold text-[13px] tracking-tight mb-4"
        >
          {item.badgeText ?? "APP"}
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
              y: -6,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0,
              },
            }}
            className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-[#f8fafc] hover:bg-[#253b97] border border-slate-200/90 hover:border-[#253b97] shadow-xs hover:shadow-[0_18px_38px_-10px_rgba(37,59,151,0.32)] transition-all duration-250 cursor-default"
          >
            <SandboxToolBadge item={tool} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#ffca28] transition-colors mb-1">
              {tool.tag}
            </span>
            <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#0f172a] group-hover:text-white transition-colors mb-1.5">
              {tool.title}
            </h3>
            <p className="text-[12px] text-slate-500 group-hover:text-blue-100/90 leading-[1.55] max-w-[220px] transition-colors">
              {tool.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
