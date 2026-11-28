"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contactHeroData } from "./contactHeroData";

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

export default function ContactHeroSection() {
  const lastBreadcrumbIndex = contactHeroData.breadcrumbs.length - 1;

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #131f54 0%, #1c2f7d 50%, #253b97 100%)",
        color: "#ffffff",
      }}
      className="relative bg-gradient-to-br from-[#131f54] via-[#1c2f7d] to-[#253b97] text-white py-20 sm:py-24 lg:py-28 overflow-hidden"
      data-purpose="contact-hero-banner"
    >
      {/* Subtle dot pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Soft diagonal light glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,84,190,0.35)_0%,_transparent_70%)]"
      />

      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl min-[137.5rem]:max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          {/* Top Breadcrumb Pill Badge */}
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
            {contactHeroData.breadcrumbs.map((item, idx) => (
              <div key={item.label} className="inline-flex items-center gap-2">
                {item.href && idx < lastBreadcrumbIndex ? (
                  <Link
                    href={item.href}
                    className="text-[11px] sm:text-xs 2xl:text-sm font-semibold uppercase tracking-[0.08em] text-slate-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[11px] sm:text-xs 2xl:text-sm font-extrabold uppercase tracking-[0.08em] text-white">
                    {item.label}
                  </span>
                )}
                {idx < lastBreadcrumbIndex && (
                  <span className="text-[11px] sm:text-xs 2xl:text-sm text-slate-400 select-none">
                    /
                  </span>
                )}
              </div>
            ))}
          </motion.nav>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl min-[137.5rem]:text-8xl font-bold tracking-tight leading-tight text-white mb-4 sm:mb-5"
          >
            {contactHeroData.title}
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-200/90 font-normal leading-relaxed max-w-2xl 2xl:max-w-3xl min-[137.5rem]:max-w-4xl mx-auto"
          >
            {contactHeroData.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

