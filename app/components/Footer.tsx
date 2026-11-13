"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { footerData } from "./landingData";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: "#0f172a", color: "#ffffff" }}
      className="bg-[#0f172a] text-white pt-12 pb-8 sm:pt-16 sm:pb-12 2xl:pt-20 2xl:pb-14 border-t border-slate-800"
      data-purpose="site-footer"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-8 sm:gap-10 2xl:gap-14 pb-10 sm:pb-12 2xl:pb-16 border-b border-slate-800">
          {/* About Column */}
          <div className="sm:col-span-3 lg:col-span-5 space-y-4 2xl:space-y-5">
            <motion.a
              href="#home"
              whileHover={{ x: 2, scale: 1.02 }}
              className="inline-flex items-center w-fit"
            >
              <div className="relative h-12 w-24 2xl:h-14 2xl:w-28 min-[137.5rem]:h-16 min-[137.5rem]:w-32 overflow-hidden">
                <Image
                  src={footerData.logo.src}
                  alt={footerData.logo.alt}
                  fill
                  sizes="128px"
                  className="object-cover object-[center_45%] brightness-0 invert"
                />
              </div>
            </motion.a>
            <p className="text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-400 leading-relaxed lg:pr-6">
              <strong>Ash Academy</strong> is a career-focused professional
              training institute dedicated to building job-ready skills for
              today&apos;s competitive corporate world. We offer industry-relevant
              courses in <strong>Accounting</strong>,{" "}
              <strong>Office Administration</strong>,{" "}
              <strong>Human Resource Management</strong>, and{" "}
              <strong>English Communication</strong>, designed to transform
              students into confident professionals.
            </p>
            <p className="text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-400 leading-relaxed lg:pr-6">
              Our programs combine <strong>expert-led training</strong>,{" "}
              <strong>practical exposure</strong>, and{" "}
              <strong>internship support</strong>, ensuring every learner is
              prepared for real-world challenges.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 2xl:space-x-4 pt-2">
              {footerData.socialLinks.map((social) => (
                <motion.a
                  key={social.short}
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 400, damping: 16 }}
                  className="w-8 h-8 2xl:w-10 2xl:h-10 min-[137.5rem]:w-11 min-[137.5rem]:h-11 rounded-full bg-slate-800 hover:bg-[#253b97] text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs 2xl:text-sm font-bold"
                  href={social.href}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {social.short}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links: Our Course */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3 2xl:space-y-4">
            <h4 className="text-sm 2xl:text-base min-[137.5rem]:text-lg font-bold text-white uppercase tracking-wider">
              Our Course
            </h4>
            <ul className="space-y-2 2xl:space-y-2.5 text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-400">
              {footerData.courseLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    whileHover={{ x: 4 }}
                    className="inline-block hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Our Community */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3 2xl:space-y-4">
            <h4 className="text-sm 2xl:text-base min-[137.5rem]:text-lg font-bold text-white uppercase tracking-wider">
              Our Community
            </h4>
            <ul className="space-y-2 2xl:space-y-2.5 text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-400">
              {footerData.communityLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    whileHover={{ x: 4 }}
                    className="inline-block hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Company Resources */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3 2xl:space-y-4">
            <h4 className="text-sm 2xl:text-base min-[137.5rem]:text-lg font-bold text-white uppercase tracking-wider">
              Company Resources
            </h4>
            <ul className="space-y-2 2xl:space-y-2.5 text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-400">
              {footerData.resourceLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    whileHover={{ x: 4 }}
                    className="inline-block hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-6 sm:pt-8 2xl:pt-10 flex flex-col sm:flex-row items-center justify-between text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-500 gap-4 text-center sm:text-left">
          <p>{footerData.copyright}</p>
          <div className="flex items-center space-x-6 2xl:space-x-8">
            {footerData.bottomLinks.map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: -2 }}
                className="hover:text-slate-400 transition-colors"
                href="#"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
