"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

export default function HeroSection() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setPhoneNumber("");
      }, 4000);
    }
  };

  return (
    <section
      className="relative bg-gradient-to-b from-[#1c2d73] via-[#253b97] to-[#1c2d73] text-white pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20 2xl:pt-24 2xl:pb-28 min-[2200px]:pt-32 min-[2200px]:pb-36 overflow-hidden"
      data-purpose="hero-banner"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[2200px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
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
              CREATE YOUR FUTURE
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl min-[2200px]:text-8xl font-bold tracking-tight leading-tight text-white"
            >
              Upskill and <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-white">
                Upgrade Your Career
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[2200px]:text-2xl text-slate-200/90 max-w-xl 2xl:max-w-2xl min-[2200px]:max-w-3xl font-normal leading-relaxed mx-auto lg:mx-0"
            >
              Kick start your Career Journey with recognised international standard
              learning. Get Globally Approved Skills and Shape your Inspiring
              Career.
            </motion.p>

            {/* Streamlined Demo Booking Form */}
            <motion.div
              variants={itemVariants}
              className="pt-1 sm:pt-2 max-w-lg 2xl:max-w-xl min-[2200px]:max-w-2xl mx-auto lg:mx-0"
            >
              <p className="text-xs 2xl:text-sm min-[2200px]:text-base font-medium text-sky-200 mb-2.5 2xl:mb-3 flex items-center justify-center lg:justify-start gap-1.5">
                <svg
                  className="w-4 h-4 2xl:w-5 2xl:h-5 text-sky-300 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    clipRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                Book your free demo class now
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-4 sm:px-5 py-3 2xl:py-4 rounded-2xl sm:rounded-full text-xs sm:text-sm 2xl:text-base font-medium flex items-center justify-center lg:justify-start gap-2 text-left"
                  >
                    <span className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span>
                      Thank you! Our admission counselor will call {phoneNumber}{" "}
                      shortly.
                    </span>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-white p-2 sm:p-1.5 2xl:p-2 rounded-2xl sm:rounded-full shadow-lg border border-white/40"
                  >
                    <div className="flex items-center w-full px-3 sm:px-4">
                      <svg
                        className="w-4 h-4 2xl:w-5 2xl:h-5 text-slate-400 mr-2.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                      </svg>
                      <input
                        aria-label="Contact Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full bg-transparent py-2 2xl:py-2.5 text-slate-800 placeholder-slate-400 text-sm 2xl:text-base min-[2200px]:text-lg focus:outline-none border-0"
                        placeholder="Enter Contact Number"
                        required
                        type="tel"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-full sm:w-auto px-6 2xl:px-8 py-2.5 2xl:py-3 rounded-xl sm:rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm 2xl:text-base min-[2200px]:text-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
                      type="submit"
                    >
                      Enquiry Now
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Social Proof Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-4 2xl:pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 2xl:gap-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2.5 2xl:gap-3.5">
                <div className="flex -space-x-2">
                  {["/images/img_1.jpg", "/images/img_2.jpg", "/images/img_3.jpg"].map(
                    (src, idx) => (
                      <motion.div
                        key={src}
                        whileHover={{ y: -4, scale: 1.12, zIndex: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative"
                      >
                        <Image
                          alt={`Student avatar ${idx + 1}`}
                          className="inline-block h-8 w-8 2xl:h-10 2xl:w-10 rounded-full ring-2 ring-white/60 object-cover"
                          src={src}
                          width={40}
                          height={40}
                        />
                      </motion.div>
                    )
                  )}
                </div>
                <div className="text-left">
                  <div className="flex text-amber-300 text-xs 2xl:text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="text-[11px] 2xl:text-xs text-slate-200 font-medium">
                    (5k+ Reviews)
                  </p>
                </div>
              </div>

              <div className="h-4 2xl:h-6 w-px bg-white/20 hidden sm:block"></div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-2 text-white"
              >
                <span className="text-sm 2xl:text-base min-[2200px]:text-lg font-bold text-white">
                  20,000+
                </span>
                <span className="text-xs 2xl:text-sm min-[2200px]:text-base text-slate-300 font-normal">
                  Happy Students
                </span>
              </motion.div>
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
              className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl min-[2200px]:max-w-2xl group"
            >
              <div className="rounded-2xl 2xl:rounded-3xl overflow-hidden border border-white/20 shadow-xl relative aspect-[4/5] bg-slate-900">
                <Image
                  alt="Two professional young academy students dressed in executive corporate formal attire"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  src="/images/img_4.png"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, (max-width: 1536px) 512px, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Clean minimal placement badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 2xl:bottom-6 2xl:left-6 2xl:right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 2xl:px-6 2xl:py-3.5 rounded-xl 2xl:rounded-2xl border border-white/60 shadow flex items-center justify-between text-slate-900"
                >
                  <div>
                    <div className="text-[9px] sm:text-[10px] 2xl:text-xs uppercase tracking-wider font-semibold text-slate-500">
                      Placement Rate
                    </div>
                    <div className="text-xs sm:text-sm 2xl:text-base min-[2200px]:text-lg font-bold text-[#253b97]">
                      96.8% Success
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] sm:text-[10px] 2xl:text-xs uppercase tracking-wider font-semibold text-slate-500">
                      Recognition
                    </div>
                    <div className="text-xs sm:text-sm 2xl:text-base min-[2200px]:text-lg font-bold text-slate-800">
                      10+ Global Certs
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Clean, minimal accreditation bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 sm:mt-14 2xl:mt-20 pt-6 2xl:pt-8 border-t border-white/10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-items-center sm:justify-center lg:justify-between gap-4 sm:gap-6 text-slate-300 text-[11px] sm:text-xs 2xl:text-sm min-[2200px]:text-base font-semibold tracking-wider uppercase"
        >
          {[
            { badge: "C", label: "CPD Accredited", rounded: "rounded" },
            { badge: "IAF", label: "Member", rounded: "rounded-full" },
            { badge: "E", label: "ELACI Approved", rounded: "rounded" },
            { badge: "ISO", label: "9001:2015 Certified", rounded: "rounded-full" },
          ].map((item) => (
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
