"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setPhoneNumber("");
      }, 4000);
    }
  };

  return (
    <section
      className="relative bg-gradient-to-b from-[#1c2d73] via-[#253b97] to-[#1c2d73] text-white pt-16 pb-20 overflow-hidden"
      data-purpose="hero-banner"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider text-sky-200 uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse"></span>
              CREATE YOUR FUTURE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
              Upskill and <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-200 to-white">
                Upgrade Your Career
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200/90 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
              Kick start your Career Journey with recognised international standard
              learning. Get Globally Approved Skills and Shape your Inspiring
              Career.
            </p>

            {/* Streamlined Demo Booking Form */}
            <div className="pt-2 max-w-lg mx-auto lg:mx-0">
              <p className="text-xs font-medium text-sky-200 mb-2.5 flex items-center justify-center lg:justify-start gap-1.5">
                <svg
                  className="w-4 h-4 text-sky-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    clipRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                Book your free demo class now
              </p>

              {submitted ? (
                <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  Thank you! Our admission counselor will call {phoneNumber}{" "}
                  shortly.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-2 bg-white p-1.5 rounded-full shadow-lg border border-white/40"
                >
                  <div className="flex items-center w-full px-4">
                    <svg
                      className="w-4 h-4 text-slate-400 mr-2.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <input
                      aria-label="Contact Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-transparent py-2 text-slate-800 placeholder-slate-400 text-sm focus:outline-none border-0"
                      placeholder="Enter Contact Number"
                      required
                      type="tel"
                    />
                  </div>
                  <button
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold text-sm transition-all shadow-sm whitespace-nowrap active:scale-95 shrink-0 cursor-pointer"
                    type="submit"
                  >
                    Enquiry Now
                  </button>
                </form>
              )}
            </div>

            {/* Social Proof Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <Image
                    alt="Student avatar"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white/60 object-cover"
                    src="/images/img_1.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Student avatar"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white/60 object-cover"
                    src="/images/img_2.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Student avatar"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white/60 object-cover"
                    src="/images/img_3.jpg"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="text-left">
                  <div className="flex text-amber-300 text-xs">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium">
                    (5k+ Reviews)
                  </p>
                </div>
              </div>

              <div className="h-4 w-px bg-white/20 hidden sm:block"></div>

              <div className="flex items-center gap-2 text-white">
                <span className="text-sm font-bold text-white">20,000+</span>
                <span className="text-xs text-slate-300 font-normal">
                  Happy Students
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl relative aspect-[4/5] bg-slate-900">
                <Image
                  alt="Two professional young academy students dressed in executive corporate formal attire"
                  className="w-full h-full object-cover object-top"
                  src="/images/img_4.jpg"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Clean minimal placement badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/60 shadow flex items-center justify-between text-slate-900">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                      Placement Rate
                    </div>
                    <div className="text-sm font-bold text-primary">
                      96.8% Success
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                      Recognition
                    </div>
                    <div className="text-sm font-bold text-slate-800">
                      10+ Global Certs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean, minimal accreditation bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-between gap-6 text-slate-300 text-xs font-semibold tracking-wider uppercase">
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 rounded border border-white/30 flex items-center justify-center text-[10px] text-white font-bold">
              C
            </span>{" "}
            CPD Accredited
          </span>
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white font-bold">
              IAF
            </span>{" "}
            Member
          </span>
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 rounded border border-white/30 flex items-center justify-center text-[10px] text-white font-bold">
              E
            </span>{" "}
            ELACI Approved
          </span>
          <span className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white font-bold">
              ISO
            </span>{" "}
            9001:2015 Certified
          </span>
        </div>
      </div>
    </section>
  );
}

