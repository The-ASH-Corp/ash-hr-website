"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ctaBannerData } from "./landingData";

interface CtaBannerProps {
  onOpenEnquiry?: () => void;
}

export default function CtaBanner({ onOpenEnquiry }: CtaBannerProps) {
  return (
    <section
      style={{ backgroundColor: "#fbf8ff" }}
      className="py-10 sm:py-14 lg:py-16 bg-[#fbf8ff]"
      data-purpose="cta-banner"
      id="contact"
    >
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          style={{ backgroundColor: "#253b97", color: "#ffffff" }}
          className="bg-[#253b97] rounded-2xl sm:rounded-3xl p-7 sm:p-9 lg:p-12 text-white shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left info */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-center lg:text-left">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-200 block">
                {ctaBannerData.eyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {ctaBannerData.callPrefix}{" "}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  className="inline-block hover:text-sky-300 transition-colors"
                  href={ctaBannerData.phoneHref}
                >
                  {ctaBannerData.phoneDisplay}
                </motion.a>
              </h3>
              <div className="pt-0.5">
                <motion.button
                  onClick={onOpenEnquiry}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 16 }}
                  style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
                  className="inline-flex items-center px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                >
                  {ctaBannerData.ctaLabel}
                </motion.button>
              </div>
            </div>

            {/* Center student picture */}
            <div className="lg:col-span-3 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border-2 border-white/40 overflow-hidden shadow bg-slate-800 relative group"
              >
                <Image
                  alt={ctaBannerData.studentImage.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  src={ctaBannerData.studentImage.src}
                  fill
                  sizes="144px"
                />
              </motion.div>
            </div>

            {/* Contact Details Block */}
            <div className="lg:col-span-4 space-y-1.5 sm:space-y-2 text-center lg:text-right border-t lg:border-t-0 lg:border-l border-white/20 pt-5 lg:pt-0 lg:pl-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-sky-200 font-semibold">
                {ctaBannerData.rightNote}
              </p>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                {ctaBannerData.academyName}
              </h4>
              <p className="text-xs sm:text-sm text-slate-200">
                {ctaBannerData.tagline}
              </p>
              <div className="pt-1 text-sm sm:text-base space-y-0.5">
                <p>
                  <a
                    className="hover:underline font-semibold text-white"
                    href={ctaBannerData.phoneHref}
                  >
                    {ctaBannerData.phoneCompact}
                  </a>
                </p>
                <p>
                  <a
                    className="hover:underline text-indigo-100 text-xs sm:text-sm"
                    href={ctaBannerData.emailHref}
                  >
                    {ctaBannerData.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
