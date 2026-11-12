"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { label: "WhatsApp", short: "WA", href: "https://wa.me/919072801300", external: true },
    { label: "Facebook", short: "FB", href: "#facebook", external: false },
    { label: "Instagram", short: "IG", href: "#instagram", external: false },
    { label: "LinkedIn", short: "IN", href: "#linkedin", external: false },
    { label: "YouTube", short: "YT", href: "#youtube", external: false },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="bg-executive-navy text-white pt-16 pb-12 border-t border-slate-800"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* About Column */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              whileHover={{ x: 2 }}
              className="flex items-center gap-2 w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white leading-none">
                cba
                <span className="text-slate-400 text-base font-semibold">
                  academy
                </span>
              </span>
            </motion.div>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              <strong>CBA Academy</strong> is a career-focused professional
              training institute dedicated to building job-ready skills for
              today&apos;s competitive corporate world. We offer industry-relevant
              courses in <strong>Accounting</strong>,{" "}
              <strong>Office Administration</strong>,{" "}
              <strong>Human Resource Management</strong>, and{" "}
              <strong>English Communication</strong>, designed to transform
              students into confident professionals.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Our programs combine <strong>expert-led training</strong>,{" "}
              <strong>practical exposure</strong>, and{" "}
              <strong>internship support</strong>, ensuring every learner is
              prepared for real-world challenges.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.short}
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 400, damping: 16 }}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
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
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Course
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { label: "HR Course", href: "#courses" },
                { label: "Office Administration", href: "#courses" },
                { label: "Accounting Course", href: "#courses" },
                { label: "Spoken English", href: "#courses" },
                { label: "Terms & Condition", href: "#" },
              ].map((link) => (
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
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Community
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { label: "Help Center", href: "#" },
                { label: "Our Partners", href: "#" },
                { label: "Suggestions", href: "#" },
                { label: "Our Blog", href: "#blogs" },
                { label: "Newsletter", href: "#" },
              ].map((link) => (
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
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { label: "Help Center", href: "#" },
                { label: "Our Partners", href: "#" },
                { label: "Suggestions", href: "#" },
                { label: "Our Blog", href: "#blogs" },
                { label: "Newsletter", href: "#" },
              ].map((link) => (
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>Copyright © 2025 CBA Academy. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            {["Services", "Help & FAQs", "Careers"].map((item) => (
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
