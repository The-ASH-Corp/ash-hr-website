"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

interface CourseFeeStructureCardProps {
  onOpenEnquiry?: () => void;
}

export default function CourseFeeStructureCard({
  onOpenEnquiry,
}: CourseFeeStructureCardProps) {
  const { feeStructureCard } = courseOverviewData;
  const [activeOptionId, setActiveOptionId] = useState<string>("one-time");

  return (
    <motion.section
      id="fee-structure"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] scroll-mt-28"
      data-purpose="course-fee-structure-card"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 mb-7 border-b border-slate-100">
        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#253b97] mb-1.5">
            {feeStructureCard.eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0f172a] tracking-tight leading-snug">
            {feeStructureCard.title}
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-500 mt-1 max-w-xl">
            {feeStructureCard.subtitle}
          </p>
        </div>

        <div className="shrink-0">
          <span
            style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eef2ff] text-[#253b97] text-xs font-bold"
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
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{feeStructureCard.duration}</span>
          </span>
        </div>
      </div>

      {/* 2-Column Fee Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
        {feeStructureCard.options.map((option) => {
          const isSelected = activeOptionId === option.id;

          return (
            <motion.div
              key={option.id}
              onClick={() => setActiveOptionId(option.id)}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between border transition-all cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-b from-white to-[#f7f9ff] border-[#253b97] shadow-lg shadow-[#253b97]/10 ring-2 ring-[#253b97]/20"
                  : "bg-white hover:bg-slate-50/70 border-slate-200"
              }`}
            >
              <div>
                {/* Badge & Total amount */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    style={
                      option.isPopular
                        ? { backgroundColor: "#f5b82e", color: "#0f172a" }
                        : { backgroundColor: "#e2e8f0", color: "#334155" }
                    }
                    className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider"
                  >
                    {option.badge}
                  </span>

                  {option.savingsNote && (
                    <span className="text-[11px] font-bold text-emerald-600">
                      {option.isPopular ? "Save ₹5,000" : "0% Interest"}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a] mb-1">
                  {option.name}
                </h3>
                <p className="text-[11.5px] text-slate-500 mb-4 leading-relaxed">
                  {option.sublabel}
                </p>

                {/* Big Price Tag */}
                <div className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 mb-5 flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-slate-500">Total Program Fee</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#253b97] tracking-tight">
                    {option.totalFee}
                  </span>
                </div>

                {/* Detailed Payment Schedule Table */}
                <div className="space-y-2 mb-4">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Payment Breakdown & Due Dates:
                  </span>
                  <div className="rounded-xl border border-slate-100 overflow-hidden text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 border-b border-slate-100">
                        <tr>
                          <th className="py-2 px-3">Payment</th>
                          <th className="py-2 px-3">Due Timeline</th>
                          <th className="py-2 px-3 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {option.breakdown.map((row, idx) => (
                          <tr
                            key={idx}
                            className={
                              row.highlight
                                ? "bg-amber-50/50 font-semibold"
                                : "hover:bg-slate-50/60"
                            }
                          >
                            <td className="py-2 px-3 font-medium text-[#0f172a]">
                              {row.item}
                            </td>
                            <td className="py-2 px-3 text-slate-500 text-[11px]">
                              {row.due}
                            </td>
                            <td className="py-2 px-3 text-right font-bold text-[#253b97]">
                              {row.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquiry?.();
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-[#253b97] hover:bg-[#1c2d73] text-white shadow-md shadow-[#253b97]/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  <span>Select & Enquire for this Plan</span>
                  <span className="text-sm">→</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Terms & Conditions Box (From Document 1) */}
      <div className="rounded-2xl p-5 sm:p-6 bg-slate-50 border border-slate-200/80">
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="w-4 h-4 text-[#253b97] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <h4 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0f172a]">
            Fee Terms & Conditions
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 leading-relaxed">
          {feeStructureCard.terms.map((term, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#253b97] shrink-0" />
              <span>{term}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
