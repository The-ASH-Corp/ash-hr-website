"use client";

import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

export default function CourseAccreditationsCard() {
  const { accreditationsCard } = courseOverviewData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)]"
      data-purpose="course-accreditations-card"
    >
      <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-3.5">
        {accreditationsCard.eyebrow}
      </span>

      <div className="grid grid-cols-2 gap-y-3 gap-x-4">
        {accreditationsCard.items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{
              x: 3,
              transition: { type: "spring", stiffness: 400, damping: 20, delay: 0 },
            }}
            className="flex items-center gap-2.5 cursor-default"
          >
            <span
              style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
              className="w-6 h-6 rounded-md bg-[#eef2ff] text-[#253b97] text-[10px] font-extrabold flex items-center justify-center shrink-0"
            >
              {item.badge}
            </span>
            <span className="text-xs font-semibold text-slate-700">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

