"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { courseHeroData } from "./courseHeroData";

interface CourseHeroSectionProps {
  onOpenEnquiry?: () => void;
}

interface AnimatedCourseStatProps {
  to: number;
  suffix: string;
  decimals?: number;
  formatWithCommas?: boolean;
  duration?: number;
}

function AnimatedCourseStat({
  to,
  suffix,
  decimals = 0,
  formatWithCommas = false,
  duration = 1.8,
}: AnimatedCourseStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : formatWithCommas
      ? Math.round(displayValue).toLocaleString("en-US")
      : String(Math.round(displayValue));

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const statGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CourseHeroSection({
  onOpenEnquiry,
}: CourseHeroSectionProps) {
  const lastBreadcrumbIndex = courseHeroData.breadcrumbs.length - 1;

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1b2c73 0%, #233892 50%, #1a2a6c 100%)",
        color: "#ffffff",
      }}
      className="relative bg-gradient-to-br from-[#1b2c73] via-[#233892] to-[#1a2a6c] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 overflow-hidden"
      data-purpose="course-hero-banner"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_65%)]"
      />

      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24 relative z-10">
        {/* Top Breadcrumb Pill Badge (matching About & Contact Hero design) */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          whileHover={{ scale: 1.03 }}
          aria-label="Breadcrumb"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.16)",
          }}
          className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6 sm:mb-8"
        >
          {courseHeroData.breadcrumbs.map((item, idx) => (
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

        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Course Details & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Accreditation Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                <svg
                  style={{ color: "#f5b82e" }}
                  className="w-3.5 h-3.5 text-[#f5b82e] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L9.19 4.19 5.7 3.7l-.49 3.49L3 10l2.21 2.81.49 3.49 3.49-.49L12 18l2.81-2.19 3.49.49.49-3.49L21 10l-2.21-2.81-.49-3.49-3.49.49L12 2zm-1.06 11.41L7.53 10l1.41-1.41 2 2 4.12-4.12 1.41 1.41-5.53 5.53z" />
                </svg>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-100">
                  {courseHeroData.badges.accredited}
                </span>
              </div>

              {/*  */}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-extrabold tracking-tight leading-[1.12] text-white"
            >
              {courseHeroData.headingLine1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] via-[#93c5fd] to-white">
                {courseHeroData.headingHighlight}
              </span>{" "}
              {courseHeroData.headingLine2Suffix}
            </motion.h1>

            {/* Tagline from Document */}
            {courseHeroData.tagline && (
              <motion.div
                variants={itemVariants}
                className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f5b82e]"
              >
                {courseHeroData.tagline}
              </motion.div>
            )}

            {/* Subtitle / Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-[17px] text-slate-200/90 font-normal leading-[1.7] max-w-2xl min-[137.5rem]:max-w-4xl"
            >
              {courseHeroData.description}
            </motion.p>

            {/* Next Executive Batch Box */}
           

            {/* CTA Buttons & Phone Row */}
            <motion.div
              variants={itemVariants}
              className="pt-1 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <motion.button
                type="button"
                onClick={onOpenEnquiry}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                style={{ backgroundColor: "#f5b82e", color: "#0f172a" }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f5b82e] hover:bg-[#eab308] text-[#0f172a] text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
              >
                <span>{courseHeroData.primaryCta}</span>
                <span className="text-base leading-none">→</span>
              </motion.button>

              

              
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image with Floating Immersion Card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 320, damping: 20, delay: 0 },
              }}
              className="relative w-full max-w-md lg:max-w-[470px] min-[137.5rem]:max-w-xl aspect-[4/3.6] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group"
            >
              <Image
                src={courseHeroData.heroImage.src}
                alt={courseHeroData.heroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

              {/* Floating White Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
                className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 bg-white rounded-2xl p-4 sm:p-5 shadow-xl"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#253b97]">
                    {courseHeroData.heroImage.overlayEyebrow}
                  </span>
                  <span
                    style={{ backgroundColor: "#dcfce7", color: "#15803d" }}
                    className="px-2.5 py-0.5 rounded-full bg-[#dcfce7] text-[#15803d] text-[10px] sm:text-[11px] font-bold shrink-0"
                  >
                    {courseHeroData.heroImage.overlayBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-extrabold text-[#0f172a] leading-snug">
                  {courseHeroData.heroImage.overlayTitle}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}
