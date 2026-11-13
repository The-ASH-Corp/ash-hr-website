"use client";

import { motion } from "framer-motion";
import { contactInfoData } from "./contactInfoData";

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

export default function ContactInfoSection() {
  const { map, locationCard, phoneCard, emailCard, websiteCard } =
    contactInfoData;

  return (
    <section
      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
      className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] overflow-hidden"
      data-purpose="contact-map-and-info"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24 space-y-10 sm:space-y-12">
        {/* Google Map Embed Area */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ backgroundColor: "#ffffff" }}
          className="w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-sm h-[300px] sm:h-[360px] lg:h-[420px]"
        >
          <iframe
            title={map.title}
            src={map.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </motion.div>

        {/* 4 Contact Info Cards */}
        <motion.div
          variants={cardGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {/* Card 1: Location Info */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ backgroundColor: "#ffffff" }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                backgroundColor: locationCard.iconBg,
                color: locationCard.iconColor,
              }}
              className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 shrink-0"
            >
              {/* Map with Pin Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 5.1L9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77L15 5.1zm0 13.79l-6-2.11V5.11l6 2.11v11.67z" />
              </svg>
            </motion.div>

            <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a] mb-4">
              {locationCard.title}
            </h3>

            <div className="w-full space-y-3 flex-1 flex flex-col justify-between">
              {locationCard.branches.map((branch) => (
                <div
                  key={branch.name}
                  style={{ backgroundColor: "#f8fafc" }}
                  className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-3.5 text-center"
                >
                  <h4 className="text-xs font-extrabold text-[#253b97] mb-1">
                    {branch.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {branch.address}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Phone Numbers */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ backgroundColor: "#ffffff" }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                backgroundColor: phoneCard.iconBg,
                color: phoneCard.iconColor,
              }}
              className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 shrink-0"
            >
              {/* Phone Call Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v3h3.59l-4.3 4.29 1.42 1.42L17 7.41V11h2V3h-7z" />
              </svg>
            </motion.div>

            <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a] mb-2">
              {phoneCard.title}
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed max-w-[200px] mb-4">
              {phoneCard.subtitle}
            </p>

            <div className="w-full space-y-3 mt-auto">
              {phoneCard.numbers.map((item) => (
                <div
                  key={item.campus}
                  style={{ backgroundColor: "#f8fafc" }}
                  className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-3.5 text-center"
                >
                  <span className="block text-[11px] font-medium text-slate-400 mb-1">
                    {item.campus}
                  </span>
                  <a
                    href={item.href}
                    className="text-sm sm:text-[15px] font-extrabold text-[#0f172a] hover:text-[#253b97] transition-colors"
                  >
                    {item.number}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Email Info */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ backgroundColor: "#ffffff" }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                backgroundColor: emailCard.iconBg,
                color: emailCard.iconColor,
              }}
              className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 shrink-0"
            >
              {/* Open Mail / Envelope Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32L19.99 8v.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z" />
              </svg>
            </motion.div>

            <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a] mb-2">
              {emailCard.title}
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed max-w-[200px] mb-5">
              {emailCard.subtitle}
            </p>

            <div
              style={{ backgroundColor: "#f8fafc" }}
              className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-4.5 text-center my-auto"
            >
              <span className="block text-[11px] font-medium text-slate-400 mb-1.5">
                {emailCard.boxLabel}
              </span>
              <a
                href={emailCard.href}
                className="text-sm sm:text-[15px] font-extrabold text-[#253b97] hover:underline break-all"
              >
                {emailCard.email}
              </a>
            </div>

            <p className="text-[11px] font-medium text-slate-400 mt-5">
              {emailCard.footerNote}
            </p>
          </motion.div>

          {/* Card 4: Website URL */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ backgroundColor: "#ffffff" }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                backgroundColor: websiteCard.iconBg,
                color: websiteCard.iconColor,
              }}
              className="w-13 h-13 rounded-2xl flex items-center justify-center mb-4 shrink-0"
            >
              {/* Globe Icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </motion.div>

            <h3 className="text-base sm:text-lg font-extrabold text-[#0f172a] mb-2">
              {websiteCard.title}
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed max-w-[200px] mb-5">
              {websiteCard.subtitle}
            </p>

            <div
              style={{ backgroundColor: "#f8fafc" }}
              className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-4.5 text-center my-auto"
            >
              <span className="block text-[11px] font-medium text-slate-400 mb-1.5">
                {websiteCard.boxLabel}
              </span>
              <a
                href={websiteCard.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-[15px] font-extrabold text-[#253b97] hover:underline break-all"
              >
                {websiteCard.urlDisplay}
              </a>
            </div>

            <p className="text-[11px] font-medium text-slate-400 mt-5">
              {websiteCard.footerNote}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

