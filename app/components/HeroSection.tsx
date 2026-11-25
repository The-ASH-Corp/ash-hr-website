"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroData } from "./landingData";

interface HeroSectionProps {
  onOpenEnquiry?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  return (
    <section
      className="relative bg-gradient-to-b from-[#1c2d73] via-[#253b97] to-[#1c2d73] text-white pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20 2xl:pt-24 2xl:pb-28 min-[137.5rem]:pt-32 min-[137.5rem]:pb-36 overflow-hidden"
      data-purpose="hero-banner"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 2xl:gap-20 items-center">
          {/* Left Hero Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5 sm:space-y-6 2xl:space-y-8 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 2xl:px-4 py-1.5 2xl:py-2 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs 2xl:text-sm font-semibold tracking-wider text-sky-200 uppercase"
            >
              <span className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-sky-300 animate-pulse"></span>
              {heroData.badgeText}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl min-[137.5rem]:text-8xl font-bold tracking-tight leading-tight text-white"
            >
              {heroData.headingLine1} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-white">
                {heroData.headingHighlight}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-200/90 max-w-xl 2xl:max-w-2xl min-[137.5rem]:max-w-3xl font-normal leading-relaxed mx-auto lg:mx-0"
            >
              {heroData.description}
            </motion.p>

            {/* Enquiry Now Action Button */}
            <motion.div
              variants={itemVariants}
              className="pt-1 sm:pt-2 flex justify-center lg:justify-start"
            >
              <motion.button
                type="button"
                onClick={onOpenEnquiry}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    delay: 0,
                  },
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2.5 px-8 2xl:px-10 py-3.5 2xl:py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm sm:text-base 2xl:text-lg min-[137.5rem]:text-xl transition-colors shadow-lg shadow-amber-400/20 whitespace-nowrap cursor-pointer"
              >
                <span>{heroData.submitLabel}</span>
                <svg
                  className="w-4 h-4 2xl:w-5 2xl:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </motion.button>
            </motion.div>

            
          </motion.div>

          {/* Right Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl min-[137.5rem]:max-w-2xl group"
            >
              <div className="rounded-2xl 2xl:rounded-3xl overflow-hidden border border-white/20 shadow-xl relative aspect-[4/5] bg-slate-900">
                <Image
                  alt={heroData.heroImage.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  src={heroData.heroImage.src}
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, (max-width: 1536px) 512px, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Clean minimal placement badge */}
               
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Clean, minimal accreditation bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 sm:mt-14 2xl:mt-20 pt-6 2xl:pt-8 border-t border-white/10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-items-center sm:justify-center lg:justify-between gap-4 sm:gap-6 text-slate-300 text-[11px] sm:text-xs 2xl:text-sm min-[137.5rem]:text-base font-semibold tracking-wider uppercase"
        >
          {heroData.accreditations.map((item) => (
            <motion.span
              key={item.label}
              whileHover={{ scale: 1.06, y: -2, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="flex items-center gap-2 2xl:gap-3 cursor-default"
            >
              <span
                className={`w-6 h-6 2xl:w-7 2xl:h-7 shrink-0 ${item.rounded} border border-white/30 flex items-center justify-center text-[10px] 2xl:text-xs text-white font-bold`}
              >
                {item.badge}
              </span>{" "}
              <span className="truncate">{item.label}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
