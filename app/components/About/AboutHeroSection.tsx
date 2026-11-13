"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { aboutHeroData } from "./aboutHeroData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutHeroSection() {
  const lastBreadcrumbIndex = aboutHeroData.breadcrumbs.length - 1;

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #162460 0%, #1d2f7a 50%, #253b97 100%)",
        color: "#ffffff",
      }}
      className="relative bg-gradient-to-br from-[#162460] via-[#1d2f7a] to-[#253b97] text-white py-20 sm:py-24 lg:py-28 overflow-hidden"
      data-purpose="about-hero-banner"
    >
      {/* Subtle radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)] pointer-events-none" />

      {/* Decorative Overlapping Circles on the Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full border border-white/[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 right-10 sm:right-24 lg:right-32 w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] lg:w-[340px] lg:h-[340px] rounded-full border border-white/[0.08]"
      />

      <div className="w-full max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          {/* Top Pill Badge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.18)",
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-5 sm:mb-6"
          >
            {/* Classical Institution / Columns Icon in Gold */}
            <svg
              className="w-3.5 h-3.5 text-[#f5b82e] shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L2 7v2h20V7L12 2zm-7 9v7H3v2h18v-2h-2v-7h-2v7h-4v-7h-2v7H7v-7H5z" />
            </svg>
            <span
              style={{ color: "#f5b82e" }}
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] text-[#f5b82e]"
            >
              {aboutHeroData.badgeText}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-tight text-white mb-5 sm:mb-6"
          >
            {aboutHeroData.title}
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-[17px] text-slate-200/90 font-normal leading-[1.75] max-w-[650px] mx-auto mb-7 sm:mb-8"
          >
            {aboutHeroData.description}
          </motion.p>

          {/* Breadcrumb Navigation */}
          <motion.nav
            variants={itemVariants}
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            {aboutHeroData.breadcrumbs.map((item, idx) => (
              <div key={item.label} className="inline-flex items-center gap-2">
                {item.href && idx < lastBreadcrumbIndex ? (
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors font-normal"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    style={{ color: "#f5b82e" }}
                    className="text-[#f5b82e] font-semibold"
                  >
                    {item.label}
                  </span>
                )}
                {idx < lastBreadcrumbIndex && (
                  <span className="text-slate-400 select-none">/</span>
                )}
              </div>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </section>
  );
}
