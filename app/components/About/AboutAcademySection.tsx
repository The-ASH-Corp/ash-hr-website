"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { aboutAcademyData, AboutStatItem } from "./aboutAcademyData";

interface AnimatedCounterProps {
  to: number;
  suffix: string;
  formatWithCommas?: boolean;
  duration?: number;
}

function AnimatedCounter({
  to,
  suffix,
  formatWithCommas = false,
  duration = 1.8,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  const formatted = formatWithCommas
    ? displayValue.toLocaleString("en-US")
    : String(displayValue);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

function StatIcon({ type }: { type: AboutStatItem["iconType"] }) {
  switch (type) {
    case "students":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 8l11 5 9-4.09V15h2V8L12 3zm0 11.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 2c-3.33 0-6 1.34-6 3v1.5h12V19.5c0-1.66-2.67-3-6-3z" />
        </svg>
      );
    case "placement":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 3h4a2 2 0 012 2v2h4a2 2 0 012 2v3h-8v-1h-4v1H2V9a2 2 0 012-2h4V5a2 2 0 012-2zm0 4h4V5h-4v2zm12 7v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5h8v1h4v-1h8z" />
        </svg>
      );
    case "certifications":
      return (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="9" r="5" />
          <path d="M9.5 13.5L8 21l4-2 4 2-1.5-7.5" />
        </svg>
      );
    case "branches":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      );
  }
}

export default function AboutAcademySection() {
  return (
    <section
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="py-16 sm:py-20 lg:py-24 bg-white text-[#0f172a] overflow-hidden"
      data-purpose="about-academy-section"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 min-[137.5rem]:gap-20 items-start">
          {/* Left Column: Intro + 2x2 Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Badge */}
            <div>
              <motion.span
                whileHover={{ scale: 1.03 }}
                style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
                className="inline-block px-3.5 py-1.5 rounded-md bg-[#eef2ff] text-[#253b97] text-[11px] font-bold uppercase tracking-wider"
              >
                {aboutAcademyData.badgeText}
              </motion.span>
            </div>

            {/* Heading with Golden Wavy Underline */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0f172a] tracking-tight leading-[1.2]">
                {aboutAcademyData.headingLine1}
                <br />
                <span className="relative inline-block text-[#253b97] pb-2">
                  {aboutAcademyData.headingHighlight}
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                    className="absolute left-0 -bottom-0.5 w-full h-2.5 text-[#f59e0b]"
                    viewBox="0 0 280 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7 Q 9 1, 16 7 T 30 7 T 44 7 T 58 7 T 72 7 T 86 7 T 100 7 T 114 7 T 128 7 T 142 7 T 156 7 T 170 7 T 184 7 T 198 7 T 212 7 T 226 7 T 240 7 T 254 7 T 268 7 T 278 7"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </motion.svg>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-[1.75] max-w-xl min-[137.5rem]:max-w-none">
              {aboutAcademyData.description}
            </p>

            {/* 2x2 Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {aboutAcademyData.stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -5, scale: 1.015 }}
                  style={{ backgroundColor: "#f8fafc" }}
                  className="bg-[#f8fafc] border border-slate-100 hover:border-slate-200/90 hover:shadow-md rounded-2xl p-6 sm:p-7 text-center transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    style={{
                      backgroundColor: stat.iconBg,
                      color: stat.iconColor,
                    }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5"
                  >
                    <StatIcon type={stat.iconType} />
                  </motion.div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight tabular-nums">
                    <AnimatedCounter
                      to={stat.numericValue}
                      suffix={stat.suffix}
                      formatWithCommas={stat.formatWithCommas}
                    />
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-1.5 leading-snug max-w-[170px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Mission Card + Mentors Image Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Mission & Approach Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              style={{ backgroundColor: "#f8fafc" }}
              className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  style={{ backgroundColor: "#253b97", color: "#ffffff" }}
                  className="w-5 h-5 rounded-full bg-[#253b97] text-white flex items-center justify-center shrink-0"
                >
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.8 6.2l-2.6 5.2-5.2 2.6 2.6-5.2 5.2-2.6z" />
                  </svg>
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a]">
                  {aboutAcademyData.missionCard.title}
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-[1.75] pb-5 border-b border-slate-200/70">
                {aboutAcademyData.missionCard.description}
              </p>

              <div className="pt-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
                  {aboutAcademyData.missionCard.programsLabel}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {aboutAcademyData.missionCard.programs.map((program, idx) => (
                    <motion.div
                      key={program}
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + idx * 0.08 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2.5 cursor-default"
                    >
                      <span
                        style={{
                          backgroundColor: "#dcfce7",
                          color: "#16a34a",
                        }}
                        className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#16a34a] flex items-center justify-center text-[11px] font-bold shrink-0"
                      >
                        ✓
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800">
                        {program}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bottom Mentors & Alumni Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] sm:aspect-[16/9.5] bg-slate-900 group"
            >
              <Image
                src={aboutAcademyData.mentorCard.imageSrc}
                alt={aboutAcademyData.mentorCard.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/95 via-[#090d16]/55 to-transparent pointer-events-none" />

              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 z-10">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  style={{ backgroundColor: "#f59e0b", color: "#0f172a" }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b] text-slate-950 text-[11px] font-bold mb-2.5 shadow-sm"
                >
                  <svg
                    className="w-3.5 h-3.5 text-slate-950 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                  </svg>
                  <span>{aboutAcademyData.mentorCard.badgeText}</span>
                </motion.div>

                <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl leading-snug mb-1.5">
                  {aboutAcademyData.mentorCard.title}
                </h3>

                <p className="text-slate-200/90 text-xs sm:text-[13px] leading-relaxed max-w-xl">
                  {aboutAcademyData.mentorCard.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

