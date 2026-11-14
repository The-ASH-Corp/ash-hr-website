"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { headerData } from "./landingData";

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isCoursePage = pathname === "/course";
  const isBlogsPage = pathname === "/blogs";
  const isContactPage = pathname === "/contact";
  const isHomePage = pathname === "/";

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              aria-label="ASH Academy Home"
              className="flex items-center group shrink-0"
              href="/"
            >
              <div className="relative h-10 w-20 sm:h-11 sm:w-22 overflow-hidden">
                <Image
                  src={headerData.logo.src}
                  alt={headerData.logo.alt}
                  fill
                  priority
                  sizes="96px"
                  className="object-cover object-[center_45%]"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center md:space-x-6 lg:space-x-8"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                className={
                  isHomePage
                    ? "text-sm font-semibold text-[#253b97] hover:text-[#1c2d73] transition-colors whitespace-nowrap"
                    : "text-sm font-medium text-slate-600 hover:text-[#253b97] transition-colors whitespace-nowrap"
                }
                href="/"
              >
                Home
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                className={
                  isAboutPage
                    ? "text-sm font-semibold text-[#253b97] hover:text-[#1c2d73] transition-colors whitespace-nowrap"
                    : "text-sm font-medium text-slate-600 hover:text-[#253b97] transition-colors whitespace-nowrap"
                }
                href="/about"
              >
                About Us
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                className={
                  isCoursePage
                    ? "text-sm font-semibold text-[#253b97] hover:text-[#1c2d73] transition-colors whitespace-nowrap"
                    : "text-sm font-medium text-slate-600 hover:text-[#253b97] transition-colors whitespace-nowrap"
                }
                href="/course"
              >
                Course
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                className={
                  isBlogsPage
                    ? "text-sm font-semibold text-[#253b97] hover:text-[#1c2d73] transition-colors whitespace-nowrap"
                    : "text-sm font-medium text-slate-600 hover:text-[#253b97] transition-colors whitespace-nowrap"
                }
                href="/blogs"
              >
                Our Blog
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                className={
                  isContactPage
                    ? "text-sm font-semibold text-[#253b97] hover:text-[#1c2d73] transition-colors whitespace-nowrap"
                    : "text-sm font-medium text-slate-600 hover:text-[#253b97] transition-colors whitespace-nowrap"
                }
                href="/contact"
              >
                Contact
              </Link>
            </motion.div>
          </nav>

          {/* CTA Action */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <motion.button
              onClick={onOpenEnquiry}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              style={{ backgroundColor: "#253b97", color: "#ffffff" }}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#253b97] hover:bg-[#1c2d73] transition-colors duration-200 shadow-md shadow-[#253b97]/25 focus:ring-2 focus:ring-offset-2 focus:ring-[#253b97] cursor-pointer whitespace-nowrap"
            >
              {headerData.ctaLabel}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                ) : (
                  <path
                    d="M4 6h16M4 12h16m-7 6h7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="py-4 space-y-1.5">
                <Link
                  className={
                    isHomePage
                      ? "block px-3 py-2 rounded-lg text-sm font-semibold text-[#253b97] hover:bg-[#f0f3ff]"
                      : "block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                  }
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className={
                    isAboutPage
                      ? "block px-3 py-2 rounded-lg text-sm font-semibold text-[#253b97] hover:bg-[#f0f3ff]"
                      : "block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                  }
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  className={
                    isCoursePage
                      ? "block px-3 py-2 rounded-lg text-sm font-semibold text-[#253b97] hover:bg-[#f0f3ff]"
                      : "block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                  }
                  href="/course"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Course
                </Link>
                <Link
                  className={
                    isBlogsPage
                      ? "block px-3 py-2 rounded-lg text-sm font-semibold text-[#253b97] hover:bg-[#f0f3ff]"
                      : "block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                  }
                  href="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Blog
                </Link>
                <Link
                  className={
                    isContactPage
                      ? "block px-3 py-2 rounded-lg text-sm font-semibold text-[#253b97] hover:bg-[#f0f3ff]"
                      : "block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                  }
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-2 px-1">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEnquiry?.();
                    }}
                    style={{ backgroundColor: "#253b97", color: "#ffffff" }}
                    className="w-full text-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#253b97] hover:bg-[#1c2d73] transition-colors shadow-md"
                  >
                    {headerData.ctaLabel}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
