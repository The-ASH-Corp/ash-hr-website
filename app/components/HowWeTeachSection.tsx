"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { howWeTeachData } from "./landingData";

interface AnimatedStatProps {
  from?: number;
  to: number;
  suffix: string;
  duration?: number;
}

function AnimatedStat({
  from = 0,
  to,
  suffix,
  duration = 1.8,
}: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function HowWeTeachSection() {
  return (
    <section
      style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
      className="py-14 sm:py-16 lg:py-20 2xl:py-28 min-[137.5rem]:py-32 bg-slate-900 text-white relative overflow-hidden"
      data-purpose="hands-on-framework"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl 2xl:max-w-3xl min-[137.5rem]:max-w-4xl mx-auto mb-10 sm:mb-14 2xl:mb-20 space-y-2.5 sm:space-y-3 2xl:space-y-4"
        >
          <span className="text-xs 2xl:text-sm min-[137.5rem]:text-base font-semibold uppercase tracking-wider text-sky-300 block">
            {howWeTeachData.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-bold tracking-tight">
            {howWeTeachData.headingPrefix}{" "}
            <span className="text-sky-300">
              {howWeTeachData.headingHighlight}
            </span>{" "}
            {howWeTeachData.headingSuffix}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base 2xl:text-lg min-[137.5rem]:text-xl leading-relaxed">
            {howWeTeachData.description}
          </p>
        </motion.div>

        {/* 4 Pillars Surrounding Center Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 2xl:gap-12 items-center mb-12 sm:mb-14 2xl:mb-20">
          {/* Left 2 Pillars */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 2xl:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 p-5 2xl:p-7 min-[137.5rem]:p-8 rounded-xl 2xl:rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-colors duration-200 group"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                className="w-9 h-9 2xl:w-12 2xl:h-12 min-[137.5rem]:w-14 min-[137.5rem]:h-14 rounded-lg 2xl:rounded-xl bg-white/10 text-sky-300 flex items-center justify-center mb-3 2xl:mb-4 transition-transform"
              >
                <svg
                  className="w-5 h-5 2xl:w-6 2xl:h-6 min-[137.5rem]:w-7 min-[137.5rem]:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-base 2xl:text-xl min-[137.5rem]:text-2xl font-bold text-white mb-1 2xl:mb-2">
                {howWeTeachData.leftPillars[0].title}
              </h3>
              <p className="text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-300">
                {howWeTeachData.leftPillars[0].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 p-5 2xl:p-7 min-[137.5rem]:p-8 rounded-xl 2xl:rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-colors duration-200 group"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                className="w-9 h-9 2xl:w-12 2xl:h-12 min-[137.5rem]:w-14 min-[137.5rem]:h-14 rounded-lg 2xl:rounded-xl bg-white/10 text-sky-300 flex items-center justify-center mb-3 2xl:mb-4 transition-transform"
              >
                <svg
                  className="w-5 h-5 2xl:w-6 2xl:h-6 min-[137.5rem]:w-7 min-[137.5rem]:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-base 2xl:text-xl min-[137.5rem]:text-2xl font-bold text-white mb-1 2xl:mb-2">
                {howWeTeachData.leftPillars[1].title}
              </h3>
              <p className="text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-300">
                {howWeTeachData.leftPillars[1].description}
              </p>
            </motion.div>
          </div>

          {/* Center Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex justify-center"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative w-full max-w-[260px] sm:max-w-xs xl:max-w-sm 2xl:max-w-md min-[137.5rem]:max-w-lg rounded-2xl overflow-hidden border border-white/20 aspect-[3/4] shadow-2xl group"
            >
              <Image
                alt={howWeTeachData.centerImage.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={howWeTeachData.centerImage.src}
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1536px) 384px, 512px"
              />
            </motion.div>
          </motion.div>

          {/* Right 2 Pillars */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 2xl:gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 p-5 2xl:p-7 min-[137.5rem]:p-8 rounded-xl 2xl:rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-colors duration-200 group"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.15 }}
                className="w-9 h-9 2xl:w-12 2xl:h-12 min-[137.5rem]:w-14 min-[137.5rem]:h-14 rounded-lg 2xl:rounded-xl bg-white/10 text-sky-300 flex items-center justify-center mb-3 2xl:mb-4 transition-transform"
              >
                <svg
                  className="w-5 h-5 2xl:w-6 2xl:h-6 min-[137.5rem]:w-7 min-[137.5rem]:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-base 2xl:text-xl min-[137.5rem]:text-2xl font-bold text-white mb-1 2xl:mb-2">
                {howWeTeachData.rightPillars[0].title}
              </h3>
              <p className="text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-300">
                {howWeTeachData.rightPillars[0].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 p-5 2xl:p-7 min-[137.5rem]:p-8 rounded-xl 2xl:rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-colors duration-200 group"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.15 }}
                className="w-9 h-9 2xl:w-12 2xl:h-12 min-[137.5rem]:w-14 min-[137.5rem]:h-14 rounded-lg 2xl:rounded-xl bg-white/10 text-sky-300 flex items-center justify-center mb-3 2xl:mb-4 transition-transform"
              >
                <svg
                  className="w-5 h-5 2xl:w-6 2xl:h-6 min-[137.5rem]:w-7 min-[137.5rem]:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 14l9-5-9-5-9 5 9 5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-base 2xl:text-xl min-[137.5rem]:text-2xl font-bold text-white mb-1 2xl:mb-2">
                {howWeTeachData.rightPillars[1].title}
              </h3>
              <p className="text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-300">
                {howWeTeachData.rightPillars[1].description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Clean Stat Counter Bar */}
        <div className="border-t border-white/10 pt-8 sm:pt-10 2xl:pt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 2xl:gap-12 text-center">
            {howWeTeachData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="cursor-default"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-extrabold text-white tabular-nums">
                  <AnimatedStat to={stat.to} suffix={stat.suffix} />
                </div>
                <p className="text-[11px] sm:text-xs 2xl:text-sm min-[137.5rem]:text-base uppercase tracking-wider text-slate-400 mt-1 2xl:mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
