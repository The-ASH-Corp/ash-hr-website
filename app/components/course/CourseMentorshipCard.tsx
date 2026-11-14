"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

export default function CourseMentorshipCard() {
  const { mentorshipCard } = courseOverviewData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundColor: "#ffffff" }}
      className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)]"
    >
      {/* Eyebrow */}
      <div className="text-[11px] font-bold tracking-[0.14em] text-[#253b97] uppercase mb-2">
        {mentorshipCard.eyebrow}
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-extrabold tracking-tight text-[#0f172a] leading-[1.2] mb-6 max-w-xl">
        {mentorshipCard.title}
      </h2>

      {/* 2 Mentor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mentorshipCard.mentors.map((mentor, idx) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
            whileHover={{
              y: -2,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0,
              },
            }}
            style={{ backgroundColor: "#f8fafc" }}
            className="flex items-center gap-4 rounded-2xl p-4 sm:p-5 bg-[#f8fafc] border border-slate-200/80 hover:border-[#253b97]/30 hover:bg-white hover:shadow-[0_10px_25px_rgba(37,59,151,0.06)] transition-colors"
          >
            {/* Circular Avatar */}
            <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
              <Image
                src={mentor.imageSrc}
                alt={mentor.imageAlt}
                fill
                sizes="70px"
                className="object-cover object-top"
              />
            </div>

            {/* Text Details */}
            <div className="min-w-0">
              <h3 className="text-[15px] font-extrabold text-[#0f172a] leading-snug">
                {mentor.name}
              </h3>
              <div className="text-[12px] font-bold text-[#253b97] mb-1.5">
                {mentor.role}
              </div>
              <p className="text-[12px] text-slate-500 leading-[1.5]">
                {mentor.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

