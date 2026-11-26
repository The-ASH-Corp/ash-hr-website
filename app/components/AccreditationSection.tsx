"use client";

import { motion } from "framer-motion";
import { accreditationData } from "./landingData";

interface AccreditationSectionProps {
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AccreditationSection({
  onOpenEnquiry,
}: AccreditationSectionProps) {
  return (
    <section
      style={{ backgroundColor: "#ffffff" }}
      className="py-14 sm:py-16 lg:py-20 2xl:py-28 bg-white"
      data-purpose="accreditation-pillars"
      id="courses"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 2xl:gap-10 items-end mb-10 sm:mb-12 2xl:mb-16 text-center lg:text-left"
        >
          <div className="lg:col-span-7">
            <span className="inline-block text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#253b97] mb-2">
              {accreditationData.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-bold text-slate-900 tracking-tight">
              {accreditationData.headingPrefix}{" "}
              <span className="text-[#253b97]">
                {accreditationData.headingHighlight}
              </span>{" "}
              {accreditationData.headingSuffix}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base 2xl:text-lg min-[137.5rem]:text-xl leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              At <strong>{accreditationData.brandName}</strong>
              {accreditationData.descriptionSuffix}
            </p>
          </div>
        </motion.div>

        {/* 4 Core Offerings Cards */}
        <motion.div
          variants={cardGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-5 sm:p-6 2xl:p-8 min-[137.5rem]:p-10 rounded-xl 2xl:rounded-2xl border border-slate-200 hover:bg-[#253b97] hover:border-[#253b97] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
          >
            <div>
              <motion.div
                whileHover={{ rotate: 6, scale: 1.12 }}
                className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg 2xl:rounded-xl bg-[#f0f3ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-white flex items-center justify-center mb-4 sm:mb-5 2xl:mb-6 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 2xl:w-6 2xl:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-[16.5px] sm:text-[18.5px] lg:text-base 2xl:text-lg min-[137.5rem]:text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                {accreditationData.cards[0].title}
              </h3>
              <p className="text-[12.5px] sm:text-[14.5px] lg:text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-600 group-hover:text-indigo-100/90 leading-relaxed transition-colors duration-300">
                {accreditationData.cards[0].description}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center text-[12.5px] sm:text-[14.5px] lg:text-xs 2xl:text-sm min-[137.5rem]:text-base font-semibold text-[#253b97] group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300">
              {accreditationData.cards[0].footerLabel}{" "}
              <span className="ml-1.5">→</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-5 sm:p-6 2xl:p-8 min-[137.5rem]:p-10 rounded-xl 2xl:rounded-2xl border border-slate-200 hover:bg-[#253b97] hover:border-[#253b97] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
          >
            <div>
              <motion.div
                whileHover={{ rotate: 6, scale: 1.12 }}
                className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg 2xl:rounded-xl bg-[#f0f3ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-white flex items-center justify-center mb-4 sm:mb-5 2xl:mb-6 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 2xl:w-6 2xl:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-[16.5px] sm:text-[18.5px] lg:text-base 2xl:text-lg min-[137.5rem]:text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                {accreditationData.cards[1].title}
              </h3>
              <p className="text-[12.5px] sm:text-[14.5px] lg:text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-600 group-hover:text-indigo-100/90 leading-relaxed transition-colors duration-300">
                {accreditationData.cards[1].description}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center text-[12.5px] sm:text-[14.5px] lg:text-xs 2xl:text-sm min-[137.5rem]:text-base font-semibold text-[#253b97] group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300">
              {accreditationData.cards[1].footerLabel}{" "}
              <span className="ml-1.5">→</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-5 sm:p-6 2xl:p-8 min-[137.5rem]:p-10 rounded-xl 2xl:rounded-2xl border border-slate-200 hover:bg-[#253b97] hover:border-[#253b97] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
          >
            <div>
              <motion.div
                whileHover={{ rotate: 6, scale: 1.12 }}
                className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg 2xl:rounded-xl bg-[#f0f3ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-white flex items-center justify-center mb-4 sm:mb-5 2xl:mb-6 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 2xl:w-6 2xl:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-[16.5px] sm:text-[18.5px] lg:text-base 2xl:text-lg min-[137.5rem]:text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                {accreditationData.cards[2].title}
              </h3>
              <p className="text-[12.5px] sm:text-[14.5px] lg:text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-600 group-hover:text-indigo-100/90 leading-relaxed transition-colors duration-300">
                {accreditationData.cards[2].description}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center text-[12.5px] sm:text-[14.5px] lg:text-xs 2xl:text-sm min-[137.5rem]:text-base font-semibold text-[#253b97] group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300">
              {accreditationData.cards[2].footerLabel}{" "}
              <span className="ml-1.5">→</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-5 sm:p-6 2xl:p-8 min-[137.5rem]:p-10 rounded-xl 2xl:rounded-2xl border border-slate-200 hover:bg-[#253b97] hover:border-[#253b97] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
          >
            <div>
              <motion.div
                whileHover={{ rotate: 6, scale: 1.12 }}
                className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-lg 2xl:rounded-xl bg-[#f0f3ff] text-[#253b97] group-hover:bg-white/15 group-hover:text-white flex items-center justify-center mb-4 sm:mb-5 2xl:mb-6 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 2xl:w-6 2xl:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-[16.5px] sm:text-[18.5px] lg:text-base 2xl:text-lg min-[137.5rem]:text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                {accreditationData.cards[3].title}
              </h3>
              <p className="text-[12.5px] sm:text-[14.5px] lg:text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-600 group-hover:text-indigo-100/90 leading-relaxed transition-colors duration-300">
                {accreditationData.cards[3].description}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center text-[12.5px] sm:text-[14.5px] lg:text-xs 2xl:text-sm min-[137.5rem]:text-base font-semibold text-[#253b97] group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300">
              {accreditationData.cards[3].footerLabel}{" "}
              <span className="ml-1.5">→</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Action Footer for section */}

      </div>
    </section>
  );
}
