"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CtaBannerProps {
  onOpenEnquiry?: () => void;
}

export default function CtaBanner({ onOpenEnquiry }: CtaBannerProps) {
  return (
    <section className="py-14 bg-surface" data-purpose="cta-banner" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          className="bg-primary rounded-2xl p-8 sm:p-10 text-white shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left info */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-200">
                Get in touch directly
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Call Us:{" "}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  className="inline-block hover:text-sky-300 transition-colors"
                  href="tel:9072801300"
                >
                  9072 80 1300
                </motion.a>
              </h3>
              <div>
                <motion.button
                  onClick={onOpenEnquiry}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 16 }}
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
                >
                  Registration
                </motion.button>
              </div>
            </div>

            {/* Center student picture */}
            <div className="lg:col-span-3 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-white/40 overflow-hidden shadow bg-slate-800 relative group"
              >
                <Image
                  alt="Representative student from CBA Academy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  src="/images/img_9.jpg"
                  fill
                  sizes="128px"
                />
              </motion.div>
            </div>

            {/* Contact Details Block */}
            <div className="lg:col-span-4 space-y-1.5 text-left lg:text-right border-t lg:border-t-0 lg:border-l border-white/20 pt-5 lg:pt-0 lg:pl-8">
              <p className="text-xs uppercase tracking-wider text-sky-200 font-semibold">
                Contact us today for batch dates &amp; fees:
              </p>
              <h4 className="text-base font-bold text-white">CBA Academy</h4>
              <p className="text-xs text-slate-200">
                Start your professional journey
              </p>
              <div className="pt-1 text-sm space-y-0.5">
                <p>
                  <a
                    className="hover:underline font-semibold text-white"
                    href="tel:9072801300"
                  >
                    9072801300
                  </a>
                </p>
                <p>
                  <a
                    className="hover:underline text-indigo-100 text-xs"
                    href="mailto:info@cbaacademy.in"
                  >
                    info@cbaacademy.in
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
