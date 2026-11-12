"use client";

import { motion } from "framer-motion";

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
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[2200px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
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
              We Are Providing
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[2200px]:text-6xl font-bold text-slate-900 tracking-tight">
              10+ <span className="text-[#253b97]">International</span> Accreditation
              &amp; Certification
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base 2xl:text-lg min-[2200px]:text-xl leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              At <strong>CBA Academy</strong>, students are awarded several
              certifications that are recognized both nationally and
              internationally to gain valuable skills and qualifications.
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
            className="bg-white p-5 sm:p-6 2xl:p-8 min-[2200px]:p-10 rounded-xl 2xl:rounded-2xl border border-slate-200 hover:bg-[#253b97] hover:border-[#253b97] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
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
              <h3 className="text-base 2xl:text-lg min-[2200px]:text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                Case Study Based Learning
              </h3>
              <p className="text-xs 2xl:text-sm min-[2200px]:text-base text-slate-600 group-hover:text-indigo-100/90 leading-relaxed transition-colors duration-300">
                Direct access for learners to work on real-time industry case
                studies.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center text-xs 2xl:text-sm min-[2200px]:text-base font-semibold text-[#253b97] group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300">
              Practical Rigor <span className="ml-1.5">→</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-5 sm:p-6 2xl:p-8 min-[2200px]:p-10 rounded-xl 2xl:rounded-2xl border border-slate-200 hover:bg-[#253b97] hover:border-[#253b97] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
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
              <h3 className="text-base 2xl:text-lg min-[2200px]:text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                Practical Work Experience
              </h3>
              <p className="text-xs 2xl:text-sm min-[2200px]:text-base text-slate-600 group-hover:text-indigo-100/90 leading-relaxed transition-colors duration-300">
                Equipping the learners to work independently with practical
                experience.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center text-xs 2xl:text-sm min-[2200px]:text-base font-semibold text-[#253b97] group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300">
              Hands-on Projects <span className="ml-1.5">→</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-5 sm:p-6 2xl:p-8 min-[2200px]:p-10 rounded-xl 2xl:rounded-2xl border border-slate-200 hover:bg-[#253b97] hover:border-[#253b97] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
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
              <h3 className="text-base 2xl:text-lg min-[2200px]:text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                100% Placement Assistance
              </h3>
              <p className="text-xs 2xl:text-sm min-[2200px]:text-base text-slate-600 group-hover:text-indigo-100/90 leading-relaxed transition-colors duration-300">
                Exclusive lifetime access to the Hire platform and top hiring
                partners.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center text-xs 2xl:text-sm min-[2200px]:text-base font-semibold text-[#253b97] group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300">
              Career Guarantee <span className="ml-1.5">→</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-5 sm:p-6 2xl:p-8 min-[2200px]:p-10 rounded-xl 2xl:rounded-2xl border border-slate-200 hover:bg-[#253b97] hover:border-[#253b97] hover:shadow-xl transition-colors duration-300 flex flex-col justify-between group"
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
              <h3 className="text-base 2xl:text-lg min-[2200px]:text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                Free Company Internship
              </h3>
              <p className="text-xs 2xl:text-sm min-[2200px]:text-base text-slate-600 group-hover:text-indigo-100/90 leading-relaxed transition-colors duration-300">
                Our Free Company Internship program lets you gain real-world
                experience at no cost.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 2xl:mt-8 pt-4 border-t border-slate-100 group-hover:border-white/20 flex items-center text-xs 2xl:text-sm min-[2200px]:text-base font-semibold text-[#253b97] group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300">
              Corporate Stint <span className="ml-1.5">→</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Action Footer for section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 sm:mt-10 2xl:mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-3 2xl:gap-4"
        >
          <span className="text-xs sm:text-sm 2xl:text-base min-[2200px]:text-lg text-slate-600">
            More than 10k+ happy Students rely on us
          </span>
          <motion.button
            onClick={onOpenEnquiry}
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: "#253b97", color: "#ffffff" }}
            className="inline-flex items-center px-5 2xl:px-7 py-2 2xl:py-2.5 rounded-full text-xs 2xl:text-sm min-[2200px]:text-base font-semibold text-white bg-[#253b97] hover:bg-[#1c2d73] transition-colors duration-200 cursor-pointer shadow-sm"
          >
            More Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
