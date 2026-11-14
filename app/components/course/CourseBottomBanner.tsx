"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

interface CourseBottomBannerProps {
  onOpenEnquiry?: () => void;
}

export default function CourseBottomBanner({
  onOpenEnquiry,
}: CourseBottomBannerProps) {
  const { bottomBanner } = courseOverviewData;

  return (
    <section
      style={{ backgroundColor: "#f8fafc" }}
      className="pb-14 sm:pb-18 lg:pb-22 bg-[#f8fafc] overflow-hidden"
      data-purpose="course-admissions-cta"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "linear-gradient(135deg, #253b97 0%, #1d2f7a 55%, #131f54 100%)",
            color: "#ffffff",
          }}
          className="relative rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-xl overflow-hidden"
        >
          {/* Subtle decorative glow circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/[0.04]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-12 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-white/[0.04]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Executive Admissions Helpline */}
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <span
                style={{ color: "#fbbf24" }}
                className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#fbbf24] block"
              >
                {bottomBanner.eyebrow}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight leading-[1.15] text-white">
                <span className="block">{bottomBanner.headingLine1}</span>
                <span className="block text-[#fbbf24]">
                  {bottomBanner.headingLine2}
                </span>
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-200/90 leading-relaxed max-w-md min-[137.5rem]:max-w-lg mx-auto lg:mx-0">
                {bottomBanner.description}
              </p>

              <div className="pt-1">
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
                  style={{ backgroundColor: "#ffffff", color: "#1c2d73" }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#1c2d73] text-xs font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5 text-[#253b97] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 4a2 2 0 110 4 2 2 0 010-4zm4 10H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z" />
                  </svg>
                  <span>{bottomBanner.ctaLabel}</span>
                </motion.button>
              </div>
            </div>

            {/* Center Column: Counselor Portrait + Available Now Pill */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative inline-flex flex-col items-center">
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    transition: {
                      type: "spring",
                      stiffness: 280,
                      damping: 20,
                      delay: 0,
                    },
                  }}
                  className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full p-1.5 border border-white/25 bg-white/10 shadow-xl"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/50 bg-slate-800">
                    <Image
                      src={bottomBanner.counselorImage.src}
                      alt={bottomBanner.counselorImage.alt}
                      fill
                      sizes="192px"
                      className="object-cover object-top"
                    />
                  </div>
                </motion.div>

                {/* Green Available Now Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                  style={{ backgroundColor: "#10b981", color: "#ffffff" }}
                  className="-mt-3.5 relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#10b981] text-white text-[11px] font-bold shadow-md border border-white/30"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>{bottomBanner.statusBadge}</span>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-4 min-[137.5rem]:justify-self-end space-y-2.5 text-center lg:text-left border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8">
              <p
                style={{ color: "#fbbf24" }}
                className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wide text-[#fbbf24] leading-snug"
              >
                {bottomBanner.rightHeading}
              </p>

              <h4 className="text-base sm:text-lg font-extrabold text-white">
                {bottomBanner.academyName}
              </h4>

              <p className="text-xs text-slate-200/90 leading-relaxed max-w-sm min-[137.5rem]:max-w-md mx-auto lg:mx-0">
                {bottomBanner.rightDescription}
              </p>

              <div className="pt-1.5 space-y-1.5 text-xs sm:text-[13px] text-white">
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <svg
                    style={{ color: "#fbbf24" }}
                    className="w-3.5 h-3.5 text-[#fbbf24] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  <a
                    href={bottomBanner.phoneHref}
                    className="font-bold hover:underline"
                  >
                    {bottomBanner.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <svg
                    style={{ color: "#fbbf24" }}
                    className="w-3.5 h-3.5 text-[#fbbf24] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a
                    href={bottomBanner.emailHref}
                    className="font-bold hover:underline"
                  >
                    {bottomBanner.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
