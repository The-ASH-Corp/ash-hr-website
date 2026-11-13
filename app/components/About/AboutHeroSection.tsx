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

      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl min-[137.5rem]:max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          {/* Top Breadcrumb Pill Badge (matching Contact Hero design) */}
          <motion.nav
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            aria-label="Breadcrumb"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.16)",
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-5 sm:mb-6"
          >
            {aboutHeroData.breadcrumbs.map((item, idx) => (
              <div key={item.label} className="inline-flex items-center gap-2">
                {item.href && idx < lastBreadcrumbIndex ? (
                  <Link
                    href={item.href}
                    className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-slate-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.08em] text-white">
                    {item.label}
                  </span>
                )}
                {idx < lastBreadcrumbIndex && (
                  <span className="text-[11px] sm:text-xs text-slate-400 select-none">
                    /
                  </span>
                )}
              </div>
            ))}
          </motion.nav>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-tight text-white mb-4 sm:mb-5"
          >
            {aboutHeroData.title}
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-[17px] text-slate-200/90 font-normal leading-[1.75] max-w-[650px] min-[137.5rem]:max-w-4xl mx-auto"
          >
            {aboutHeroData.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
