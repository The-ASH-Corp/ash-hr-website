"use client";

import { useState } from "react";

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            aria-label="CBA Academy Home"
            className="flex items-center gap-2 group"
            href="#home"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md shadow-primary/30 group-hover:scale-105 transition-transform">
              C
            </div>
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
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-8"
          >
            <a
              className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#about"
            >
              About Us
            </a>

            {/* Dropdown link */}
            <div
              className="relative group"
              onMouseEnter={() => setCourseDropdownOpen(true)}
              onMouseLeave={() => setCourseDropdownOpen(false)}
            >
              <button
                aria-expanded={courseDropdownOpen}
                onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 group-hover:text-primary transition-colors py-2 cursor-pointer"
                type="button"
              >
                <span>Course</span>
                <svg
                  className={`w-4 h-4 text-slate-400 group-hover:text-primary transition-transform duration-200 ${
                    courseDropdownOpen ? "rotate-180" : ""
                  }`}
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
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full ${
                  courseDropdownOpen ? "block" : "hidden"
                } group-hover:block w-64 py-2 bg-white rounded-xl shadow-xl border border-slate-100 mt-1 transition-all z-50`}
              >
                <a
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary transition-colors"
                  href="#courses"
                  onClick={() => setCourseDropdownOpen(false)}
                >
                  Office Administration
                </a>
                <a
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary transition-colors"
                  href="#courses"
                  onClick={() => setCourseDropdownOpen(false)}
                >
                  Financial Accounting
                </a>
                <a
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary transition-colors"
                  href="#courses"
                  onClick={() => setCourseDropdownOpen(false)}
                >
                  Human Resource Management
                </a>
                <a
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary transition-colors"
                  href="#courses"
                  onClick={() => setCourseDropdownOpen(false)}
                >
                  Personality Development
                </a>
                <a
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary transition-colors"
                  href="#courses"
                  onClick={() => setCourseDropdownOpen(false)}
                >
                  English Communication
                </a>
              </div>
            </div>

            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#blogs"
            >
              Our Blog
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          {/* CTA Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-md shadow-primary/25 focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer active:scale-95"
            >
              Apply Now
            </button>

            {/* Mobile menu button */}
            <button
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
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
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
                <a
                  className="block py-1 text-sm text-slate-600 hover:text-primary"
                  href="#courses"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Office Administration
                </a>
                <a
                  className="block py-1 text-sm text-slate-600 hover:text-primary"
                  href="#courses"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Financial Accounting
                </a>
                <a
                  className="block py-1 text-sm text-slate-600 hover:text-primary"
                  href="#courses"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Human Resource Management
                </a>
                <a
                  className="block py-1 text-sm text-slate-600 hover:text-primary"
                  href="#courses"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Personality Development
                </a>
                <a
                  className="block py-1 text-sm text-slate-600 hover:text-primary"
                  href="#courses"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  English Communication
                </a>
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
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry?.();
                }}
                className="w-full text-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-dark transition shadow-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
