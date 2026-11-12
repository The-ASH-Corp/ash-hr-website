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
      className="py-20 bg-surface border-y border-slate-200/60 overflow-hidden"
      data-purpose="why-choose-us"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-slate-100 relative group"
              >
                <Image
                  alt="Students engaged in collaborative professional learning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="/images/img_5.jpg"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-slate-100 mt-6 relative group"
              >
                <Image
                  alt="Student working on laptop in corporate environment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="/images/img_6.jpg"
                  fill
                  sizes="(max-width: 768px) 50vw, 250px"
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
            className="lg:col-span-7 space-y-6 lg:pl-6"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose <span className="text-primary">CBA Academy?</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong>CBA Academy</strong>, our goal is to give students
              practical skills and knowledge for career success by combining
              classroom lessons with real-world experience. We prepare you with
              confidence for professional challenges.
            </p>

            {/* Checkpoint list and experience badge */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-2 items-center">
              <div className="sm:col-span-8 space-y-3">
                {checkpoints.map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 cursor-default"
                  >
                    <span className="w-5 h-5 rounded-full bg-primary-100 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-slate-800">
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
                className="sm:col-span-4 relative overflow-hidden bg-primary text-white p-5 rounded-2xl text-center shadow-lg shadow-primary/25 flex flex-col justify-center items-center cursor-default"
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

                <span className="relative z-10 text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-white">
                  15+
                </span>
                <span className="relative z-10 text-[11px] font-semibold uppercase tracking-wider text-sky-200 mt-1">
                  Years Experience
                </span>
              </motion.div>
            </div>

            {/* Director info & CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-200/80">
              <motion.button
                onClick={onOpenEnquiry}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-primary hover:bg-primary-dark transition-colors shadow-sm cursor-pointer"
              >
                More About Us
              </motion.button>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                  <Image
                    alt="Fazalul Rahiman portrait"
                    className="w-full h-full object-cover"
                    src="/images/img_7.jpg"
                    fill
                    sizes="40px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    Fazalul Rahiman
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
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
