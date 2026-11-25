"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { courseTabsData } from "./courseTabsData";

export default function CourseTabsBar() {
  const [activeTab, setActiveTab] = useState<string>(courseTabsData[0].id);

  const handleTabClick = (id: string, href: string) => {
    setActiveTab(id);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="bg-white border-b border-slate-200/80 sticky top-16 sm:top-20 z-40"
      data-purpose="course-section-tabs"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
        <nav
          aria-label="Course Sections"
          className="flex items-center gap-6 sm:gap-8 lg:gap-9 overflow-x-auto"
        >
          {courseTabsData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id, tab.href)}
                className={
                  isActive
                    ? "relative py-3.5 sm:py-4 text-xs sm:text-[13px] font-bold text-[#253b97] whitespace-nowrap transition-colors cursor-pointer"
                    : "relative py-3.5 sm:py-4 text-xs sm:text-[13px] font-medium text-slate-600 hover:text-[#253b97] whitespace-nowrap transition-colors cursor-pointer"
                }
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="courseActiveTabIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ backgroundColor: "#253b97" }}
                    className="absolute inset-x-0 bottom-0 h-[2.5px] bg-[#253b97] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

