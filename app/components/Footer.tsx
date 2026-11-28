"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerData } from "./landingData";
import WhatsAppIcon from "./WhatsAppIcon";

function FooterSocialIcon({ label, short }: { label: string; short?: string }) {
  const key = label.toLowerCase();

  // WhatsApp
  if (key.includes("whatsapp") || short === "WA") {
    return <WhatsAppIcon className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 " />;
  }

  // Facebook
  if (key.includes("facebook") || short === "FB") {
    return (
      <svg
        className="w-4 h-4 2xl:w-4.5 2xl:h-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
      </svg>
    );
  }

  // Instagram
  if (key.includes("instagram") || short === "IG") {
    return (
      <svg
        className="w-4 h-4 2xl:w-4.5 2xl:h-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  // YouTube
  if (key.includes("youtube") || short === "YT") {
    return (
      <svg
        className="w-4 h-4 2xl:w-4.5 2xl:h-4.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
      </svg>
    );
  }

  return <span>{short ?? label.slice(0, 2).toUpperCase()}</span>;
}

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
              <strong>ASH Academy</strong> is a premier career development
              institute providing comprehensive practical training in{" "}
              <strong>HR & Administration Management</strong>,{" "}
              <strong>Office Operations</strong>, and{" "}
              <strong>Healthcare Administration</strong>. With a proven record
              of 200+ students trained and 100+ placements, we transform learners
              into confident, job-ready professionals.
            </p>
            <p className="text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-400 leading-relaxed lg:pr-6">
              Our 6-month programme combines <strong>theory</strong>,{" "}
              <strong>practical exercises</strong>, and{" "}
              <strong>workplace-based training</strong> with 100% placement support.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 2xl:space-x-4 pt-2">
              {footerData.socialLinks.map((social) => (
                <motion.a
                  key={social.short}
                  aria-label={social.label}
                  title={social.label}
                  whileHover={{ y: -4, scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 400, damping: 16 }}
                  className="w-9 h-9 2xl:w-10 2xl:h-10 min-[137.5rem]:w-11 min-[137.5rem]:h-11 rounded-full bg-slate-800 hover:bg-[#253b97] text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm border border-slate-700/60"
                  href={social.href}
                  {...(social.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <FooterSocialIcon label={social.label} short={social.short} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links: Program Modules */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3 2xl:space-y-4">
            <h4 className="text-sm 2xl:text-base min-[137.5rem]:text-lg font-bold text-white uppercase tracking-wider">
              Programme
            </h4>
            <ul className="space-y-2 2xl:space-y-2.5 text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-400">
              {footerData.courseLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="inline-block hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Key Areas */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3 2xl:space-y-4">
            <h4 className="text-sm 2xl:text-base min-[137.5rem]:text-lg font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 2xl:space-y-2.5 text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-400">
              {footerData.communityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="inline-block hover:text-white transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Campus Hub */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3 2xl:space-y-4">
            <h4 className="text-sm 2xl:text-base min-[137.5rem]:text-lg font-bold text-white uppercase tracking-wider">
              Campus & Contact
            </h4>
            <div className="space-y-2.5 text-xs 2xl:text-sm text-slate-400">
              <p className="leading-relaxed">
                <strong className="text-white">Main Campus:</strong>
                <br />
                2nd Floor, OPS Mall, Vailathur, Ponmundam, Tirur Road, Malappuram, Kerala, India (676106)
              </p>
              <p>
                <strong className="text-white">Phone:</strong>
                <br />
                <a href="tel:+918921365750" className="hover:text-white transition-colors">
                  +91 8921 365 750
                </a>
                {" • "}
                <a href="tel:+919337009400" className="hover:text-white transition-colors">
                  +91 9337 009 400
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>
                <br />
                <a href="mailto:connect@ashacademy.ai" className="hover:text-white transition-colors">
                  connect@ashacademy.ai
                </a>
              </p>
              <p>
                <strong className="text-white">Website:</strong>
                <br />
                <span className="text-sky-300">www.ashacademy.ai</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-6 sm:pt-8 2xl:pt-10 flex flex-col sm:flex-row items-center justify-between text-xs 2xl:text-sm min-[137.5rem]:text-base text-slate-500 gap-4 text-center sm:text-left">
          <p>{footerData.copyright}</p>
          <div className="flex items-center space-x-6 2xl:space-x-8">
            {footerData.bottomLinks.map((item) => (
              <span
                key={item}
                className="hover:text-slate-400 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
