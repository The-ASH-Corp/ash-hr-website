"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutServicesData, AboutServiceCardItem } from "./aboutServicesData";

interface AboutServicesSectionProps {
  onOpenEnquiry?: () => void;
}

const cardGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ServiceCardIcon({ type }: { type: AboutServiceCardItem["iconType"] }) {
  switch (type) {
    case "office":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-5 4h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h3v1.5H8V10z" />
        </svg>
      );
    case "pgFinance":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 14.2L5 13.4v3.6c0 2.21 3.13 4 7 4s7-1.79 7-4v-3.6l-7 3.8z" />
        </svg>
      );
    case "diplomaFinance":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2 4H7V5h10v2zm-8 4H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 4h-2v-6h2v6zm-8 0H7v-2h2v2zm4 0h-2v-2h2v2z" />
        </svg>
      );
    case "hr":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      );
  }
}

export default function AboutServicesSection({
  onOpenEnquiry,
}: AboutServicesSectionProps) {
  const { admissionsBanner, trustBar } = aboutServicesData;

  return (
    <>
      {/* Top Section: Services & Features */}
      <section
        style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
        className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] border-t border-slate-200/60 overflow-hidden"
        data-purpose="about-services-section"
      >
        <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl min-[137.5rem]:max-w-4xl mb-10 sm:mb-12 space-y-3"
          >
            <div>
              <span
                style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
                className="inline-block px-3.5 py-1.5 rounded-md bg-[#eef2ff] text-[#253b97] text-xs 2xl:text-sm font-bold uppercase tracking-wider"
              >
                {aboutServicesData.badgeText}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-bold text-[#0f172a] tracking-tight leading-tight">
              {aboutServicesData.headingPrefix}{" "}
              <span className="text-[#253b97]">
                {aboutServicesData.headingHighlight}
              </span>{" "}
              {aboutServicesData.headingSuffix}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl leading-relaxed pt-0.5">
              {aboutServicesData.description}
            </p>
          </motion.div>

          {/* 4 Service Cards */}
          <motion.div
            variants={cardGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 2xl:gap-8"
          >
            {aboutServicesData.cards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl p-6 sm:p-7 2xl:p-8 min-[137.5rem]:p-10 bg-white text-[#0f172a] border border-slate-200/80 hover:bg-[#1b2e78] hover:border-[#1b2e78] hover:shadow-xl flex flex-col justify-between transition-colors duration-300 group"
              >
                <div>
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    className="w-11 h-11 2xl:w-12 2xl:h-12 rounded-xl bg-[#eef2ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-[#f59e0b] flex items-center justify-center mb-5 transition-colors duration-300"
                  >
                    <ServiceCardIcon type={card.iconType} />
                  </motion.div>

                  <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] group-hover:text-white leading-snug mb-3 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 group-hover:text-slate-200/90 leading-relaxed transition-colors duration-300">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-white/15 flex items-center justify-between transition-colors duration-300">
                  <span className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl font-semibold text-[#253b97] group-hover:text-[#f59e0b] transition-colors duration-300">
                    {card.footerLabel}
                  </span>
                  {card.badgeLabel ? (
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 group-hover:bg-white/15 group-hover:text-white text-xs 2xl:text-sm font-semibold transition-colors duration-300">
                      {card.badgeLabel}
                    </span>
                  ) : (
                    <span className="text-base sm:text-lg 2xl:text-xl font-bold text-[#0f172a] group-hover:text-[#f59e0b] group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Trust Strip Bar */}
          {/*  */}
        </div>
      </section>

      {/* Bottom Section: Direct Admissions CTA Banner */}
      <section
        style={{ backgroundColor: "#ffffff" }}
        className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden"
        data-purpose="about-admissions-cta"
      >
        <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background:
                "linear-gradient(135deg, #1b2d74 0%, #22378c 55%, #253b97 100%)",
              color: "#ffffff",
            }}
            className="relative rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-xl overflow-hidden"
          >
            {/* Subtle decorative circle in bottom right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-12 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-white/[0.04]"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Direct Admissions & Call Us */}
              <div className="lg:col-span-4 space-y-3.5 text-center lg:text-left">
                <span
                  style={{ color: "#f59e0b" }}
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#f59e0b] block"
                >
                  {admissionsBanner.eyebrow}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-white">
                  {admissionsBanner.callLabel}
                  <br />
                  <a
                    href={admissionsBanner.phoneHref}
                    className="hover:text-sky-200 transition-colors"
                  >
                    {admissionsBanner.phoneDisplay}
                  </a>
                </h3>

                {/*  */}

                <div className="pt-1">
                  <motion.button
                    type="button"
                    onClick={onOpenEnquiry}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    style={{ backgroundColor: "#ffffff", color: "#1c2d73" }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-[#1c2d73] text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 text-[#253b97] shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 4a2 2 0 110 4 2 2 0 010-4zm4 10H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z" />
                    </svg>
                    <span>{admissionsBanner.ctaLabel}</span>
                  </motion.button>
                </div>
              </div>

              {/* Center Column: Counselor Portrait + Admissions Open Pill */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative inline-flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                    className="relative w-44 h-44 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full p-1.5 border border-white/25 bg-white/5 shadow-xl"
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/40 bg-slate-800">
                      <Image
                        src={admissionsBanner.counselorImage.src}
                        alt={admissionsBanner.counselorImage.alt}
                        fill
                        sizes="208px"
                        className="object-cover object-center"
                      />
                    </div>
                  </motion.div>

                  {/* Green Admissions Open Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.45 }}
                    style={{ backgroundColor: "#10b981", color: "#ffffff" }}
                    className="-mt-4 relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#10b981] text-white text-xs font-bold shadow-md border border-white/30"
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>{admissionsBanner.statusBadge}</span>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Contact & Brochure Details */}
              <div className="lg:col-span-4 min-[137.5rem]:justify-self-end space-y-2.5 text-center lg:text-left">
                <p
                  style={{ color: "#f59e0b" }}
                  className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#f59e0b] leading-snug"
                >
                  {admissionsBanner.rightHeading}
                </p>

                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                  {admissionsBanner.academyName}
                </h4>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-sm min-[137.5rem]:max-w-md mx-auto lg:mx-0">
                  {admissionsBanner.rightDescription}
                </p>

                <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-white">
                  <svg
                    className="w-3.5 h-3.5 text-white shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  <span>
                    <a
                      href={admissionsBanner.phoneHref}
                      className="font-bold hover:underline"
                    >
                      {admissionsBanner.phoneCompact}
                    </a>{" "}
                    <span className="text-slate-300 font-normal">or</span>{" "}
                    <a
                      href={admissionsBanner.emailHref}
                      className="font-bold hover:underline"
                    >
                      {admissionsBanner.email}
                    </a>
                  </span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
