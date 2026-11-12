"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface WhyChooseUsSectionProps {
  onOpenEnquiry?: () => void;
}

export default function WhyChooseUsSection({
  onOpenEnquiry,
}: WhyChooseUsSectionProps) {
  const checkpoints = [
    "More than 90% Pass Rate",
    "Supportive Learning Environment",
    "Daily Doubt Clearing Advantage",
    "Access to Updated and Relevant Study Materials",
    "Tailored Interview Preparation Support",
  ];

  return (
    <section
      style={{ backgroundColor: "#fbf8ff" }}
      className="py-14 sm:py-16 lg:py-20 2xl:py-28 bg-[#fbf8ff] border-y border-slate-200/60 overflow-hidden"
      data-purpose="why-choose-us"
      id="about"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[2200px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-center">
          {/* Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative max-w-md sm:max-w-lg lg:max-w-none mx-auto w-full"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 2xl:gap-6">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl 2xl:rounded-3xl overflow-hidden shadow-sm aspect-[4/5] bg-slate-100 relative group"
              >
                <Image
                  alt="Students engaged in collaborative professional learning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="/images/img_5.jpg"
                  fill
                  sizes="(max-width: 768px) 45vw, (max-width: 1536px) 280px, 400px"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl 2xl:rounded-3xl overflow-hidden shadow-sm aspect-[4/5] bg-slate-100 mt-4 sm:mt-6 2xl:mt-8 relative group"
              >
                <Image
                  alt="Student working on laptop in corporate environment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="/images/img_6.jpg"
                  fill
                  sizes="(max-width: 768px) 45vw, (max-width: 1536px) 280px, 400px"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Copy and Bullets */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 2xl:space-y-8 lg:pl-6 2xl:pl-10"
          >
            <div className="text-center sm:text-left space-y-2">
              <span className="text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#253b97] block">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[2200px]:text-6xl font-bold text-slate-900 tracking-tight">
                Why Choose <span className="text-[#253b97]">Us?</span>
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base 2xl:text-lg min-[2200px]:text-xl leading-relaxed text-center sm:text-left">
              At <strong>CBA Academy</strong>, our goal is to give students
              practical skills and knowledge for career success by combining
              classroom lessons with real-world experience. We prepare you with
              confidence for professional challenges.
            </p>

            {/* Checkpoint list and experience badge */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 2xl:gap-8 pt-2 items-center">
              <div className="sm:col-span-8 space-y-3 2xl:space-y-4">
                {checkpoints.map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 2xl:gap-4 cursor-default"
                  >
                    <span
                      style={{ backgroundColor: "#e0e7ff", color: "#253b97" }}
                      className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full bg-[#e0e7ff] text-[#253b97] flex items-center justify-center text-xs 2xl:text-sm font-bold shrink-0"
                    >
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm 2xl:text-base min-[2200px]:text-lg font-medium text-slate-800">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Clean, steady attention 15+ Years badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                whileHover={{ scale: 1.05, y: -3 }}
                style={{ backgroundColor: "#253b97", color: "#ffffff" }}
                className="sm:col-span-4 relative overflow-hidden bg-[#253b97] text-white py-4 px-6 sm:p-5 2xl:p-7 rounded-2xl text-center shadow-lg shadow-[#253b97]/25 flex flex-col justify-center items-center cursor-default"
              >
                {/* Smooth periodic light shimmer sweep */}
                <motion.div
                  animate={{ x: ["-150%", "250%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />

                <span className="relative z-10 text-3xl sm:text-4xl 2xl:text-5xl min-[2200px]:text-6xl font-extrabold tracking-tight leading-none text-white">
                  15+
                </span>
                <span className="relative z-10 text-[11px] 2xl:text-xs font-semibold uppercase tracking-wider text-sky-200 mt-1 2xl:mt-2">
                  Years Experience
                </span>
              </motion.div>
            </div>

            {/* Director info & CTA */}
            <div className="pt-4 2xl:pt-6 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 2xl:gap-8 border-t border-slate-200/80">
              <motion.button
                onClick={onOpenEnquiry}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: "#253b97", color: "#ffffff" }}
                className="px-5 2xl:px-7 py-2.5 2xl:py-3 rounded-full text-xs 2xl:text-sm min-[2200px]:text-base font-semibold uppercase tracking-wider text-white bg-[#253b97] hover:bg-[#1c2d73] transition-colors shadow-sm cursor-pointer"
              >
                More About Us
              </motion.button>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center gap-3 2xl:gap-4"
              >
                <div className="relative w-10 h-10 2xl:w-12 2xl:h-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
                  <Image
                    alt="Fazalul Rahiman portrait"
                    className="w-full h-full object-cover"
                    src="/images/img_7.jpg"
                    fill
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm 2xl:text-base min-[2200px]:text-lg font-bold text-slate-900 leading-tight">
                    Fazalul Rahiman
                  </h4>
                  <p className="text-xs 2xl:text-sm text-slate-500 font-medium">
                    CEO, HEAD DIRECTOR
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
