"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

export default function CourseAdmissionsCard() {
  const { admissionsCard } = courseOverviewData;
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState(
    admissionsCard.qualifications[0]
  );
  const [batch, setBatch] = useState(admissionsCard.batches[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName("");
      setPhone("");
    }, 4500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="relative bg-white rounded-3xl p-6 sm:p-7 border border-[#253b97]/20 shadow-[0_15px_40px_-10px_rgba(37,59,151,0.1)] overflow-hidden"
      data-purpose="course-admissions-card"
    >
      {/* Top-Right FAST TRACK Ribbon */}
      <div
        style={{ backgroundColor: "#f5b82e", color: "#0f172a" }}
        className="absolute top-0 right-0 px-3.5 py-1 rounded-bl-xl bg-[#f5b82e] text-[#0f172a] text-[10px] font-extrabold uppercase tracking-wider shadow-xs"
      >
        {admissionsCard.ribbonText}
      </div>

      {/* Header */}
      <div className="mb-5 pt-1">
        <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#253b97]">
          {admissionsCard.eyebrow}
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-[#0f172a] mt-1">
          {admissionsCard.title}
        </h3>
        <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-1">
          {admissionsCard.description}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-700">
            {admissionsCard.nameLabel}
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={admissionsCard.namePlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0f172a] placeholder-slate-400 focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-700">
            {admissionsCard.phoneLabel}
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={admissionsCard.phonePlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-[#0f172a] placeholder-slate-400 focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-700">
            {admissionsCard.qualificationLabel}
          </label>
          <div className="relative">
            <select
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-9 text-xs text-[#0f172a] focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all cursor-pointer"
            >
              {admissionsCard.qualifications.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-700">
            {admissionsCard.batchLabel}
          </label>
          <div className="relative">
            <select
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 pr-9 text-xs text-[#0f172a] focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all cursor-pointer"
            >
              {admissionsCard.batches.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Primary Reserve Seat Button */}
        <motion.button
          type="submit"
          whileHover={{
            scale: 1.015,
            y: -1,
            transition: { type: "spring", stiffness: 400, damping: 20, delay: 0 },
          }}
          whileTap={{ scale: 0.98 }}
          style={{ backgroundColor: "#253b97", color: "#ffffff" }}
          className="w-full mt-2 py-3.5 px-5 rounded-xl bg-[#253b97] hover:bg-[#1c2d73] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#253b97]/25 transition-colors cursor-pointer"
        >
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <span>{admissionsCard.submitLabel}</span>
        </motion.button>

        {/* Secondary WhatsApp Button */}
        <motion.a
          href={admissionsCard.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.015,
            y: -1,
            transition: { type: "spring", stiffness: 400, damping: 20, delay: 0 },
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            backgroundColor: "#ecfdf5",
            borderColor: "#a7f3d0",
            color: "#047857",
          }}
          className="w-full py-3 px-5 rounded-xl bg-[#ecfdf5] hover:bg-[#d1fae5] border border-[#a7f3d0] text-[#047857] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
        >
          <span
            style={{ backgroundColor: "#10b981" }}
            className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0"
          />
          <svg
            className="w-3.5 h-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
          </svg>
          <span>{admissionsCard.whatsappLabel}</span>
        </motion.a>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="rounded-xl bg-emerald-50 border border-emerald-200 px-3.5 py-2.5 text-[11px] font-semibold text-emerald-800 text-center"
            >
              {admissionsCard.successMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}

