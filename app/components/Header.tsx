"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

const courses = [
  "Office Administration",
  "Financial Accounting",
  "Human Resource Management",
  "Personality Development",
  "English Communication",
];

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            aria-label="CBA Academy Home"
            className="flex items-center gap-2 group"
            href="#home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              whileHover={{ rotate: -6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 350, damping: 16 }}
              className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md shadow-primary/30"
            >
              C
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-primary leading-none">
                cba
                <span className="text-slate-800 text-lg font-semibold tracking-normal">
                  academy
                </span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Professional Institute
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-8"
          >
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              href="#home"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#about"
            >
              About Us
            </motion.a>

            {/* Dropdown link */}
            <div
              className="relative group"
              onMouseEnter={() => setCourseDropdownOpen(true)}
              onMouseLeave={() => setCourseDropdownOpen(false)}
            >
              <motion.button
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                aria-expanded={courseDropdownOpen}
                onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 group-hover:text-primary transition-colors py-2 cursor-pointer"
                type="button"
              >
                <span>Course</span>
                <motion.svg
                  animate={{ rotate: courseDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 text-slate-400 group-hover:text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {courseDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 top-full w-64 py-2 bg-white rounded-xl shadow-xl border border-slate-100 mt-1 z-50"
                  >
                    {courses.map((course) => (
                      <motion.a
                        key={course}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary transition-colors"
                        href="#courses"
                        onClick={() => setCourseDropdownOpen(false)}
                      >
                        {course}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#blogs"
            >
              Our Blog
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#contact"
            >
              Contact
            </motion.a>
          </nav>

          {/* CTA Action */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onOpenEnquiry}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors duration-200 shadow-md shadow-primary/25 focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
            >
              Apply Now
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
              <div className="py-4 space-y-2">
                <a
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-primary hover:bg-primary-50"
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <div className="px-3 py-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Courses
                  </span>
                  <div className="mt-1 pl-2 space-y-1">
                    {courses.map((course) => (
                      <a
                        key={course}
                        className="block py-1 text-sm text-slate-600 hover:text-primary"
                        href="#courses"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {course}
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
                  href="#blogs"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Blog
                </a>
                <a
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="pt-2">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEnquiry?.();
                    }}
                    className="w-full text-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-colors shadow-md"
                  >
                    Apply Now
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
