"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseOverviewData } from "./courseOverviewData";

export default function CourseFaqCard() {
  const { faqCard } = courseOverviewData;
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div
      id="faqs"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundColor: "#ffffff" }}
      className="scroll-mt-32 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)]"
    >
      {/* Eyebrow */}
      <div className="text-xs 2xl:text-sm font-bold tracking-wider text-[#253b97] uppercase mb-2">
        {faqCard.eyebrow}
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl min-[137.5rem]:text-6xl font-bold tracking-tight text-[#0f172a] leading-[1.2] mb-6">
        {faqCard.title}
      </h2>

      {/* FAQ Accordion List */}
      <div className="space-y-3.5">
        {faqCard.items.map((faq) => {
          const isOpen = openFaqId === faq.id;

          return (
            <div
              key={faq.id}
              style={{ backgroundColor: "#ffffff" }}
              className={`rounded-2xl border transition-colors overflow-hidden ${
                isOpen
                  ? "border-[#253b97]/30 bg-white shadow-[0_4px_20px_rgba(37,59,151,0.05)]"
                  : "border-slate-200/80 bg-white hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4.5 sm:py-5 text-left cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] leading-snug">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={`shrink-0 ${
                    isOpen ? "text-[#253b97]" : "text-slate-400"
                  }`}
                >
                  <svg
                    className="w-5 h-5 2xl:w-6 2xl:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100 text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

