"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      initials: "ST",
      role: "Corporate Graduate",
      quote:
        "I'm very pleased with my experience at this training institute. The courses were relevant and well-taught, and the instructors were very professional. The practical skills I gained have been essential for my career growth.",
      featured: false,
    },
    {
      initials: "EA",
      role: "Executive Associate",
      quote:
        "This institute exceeded my expectations. The training was thorough and practical, and the staff were supportive and knowledgeable. My understanding of the subject was greatly aided by the practical approach.",
      featured: true,
    },
    {
      initials: "AL",
      role: "Academy Alumni",
      quote:
        "I am glad that I was a student of Ash Academy. The hands-on projects felt like real-world challenges, making the learning process dynamic and practical. Plus, the support staff went above and beyond.",
      featured: false,
    },
  ];

  return (
    <section
      style={{ backgroundColor: "#ffffff" }}
      className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
      data-purpose="testimonials"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-3.5 sm:space-y-4 text-center lg:text-left"
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#253b97] block">
              Students Testimonial
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
              What Our Happy <span className="text-[#253b97]">Students</span> Say!
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed pt-1 max-w-xl mx-auto lg:mx-0">
              Discover what our students have to say about their experiences.
              From transformative learning moments to supportive instructors,
              their stories highlight why they&apos;re excited about the journey
              they&apos;ve had with us.
            </p>
          </motion.div>

          {/* Right Testimonial Quote Cards Stack */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.initials}
                initial={{ opacity: 0, x: 35, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={
                  t.featured
                    ? "p-5 sm:p-6 lg:p-7 rounded-2xl border border-[#253b97]/30 bg-[#f0f3ff]/60 hover:bg-[#f0f3ff]/90 transition-colors shadow-sm"
                    : "p-5 sm:p-6 lg:p-7 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-colors shadow-sm"
                }
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3.5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={
                        t.featured
                          ? { backgroundColor: "#253b97", color: "#ffffff" }
                          : { backgroundColor: "#f0f3ff", color: "#253b97" }
                      }
                      className={
                        t.featured
                          ? "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#253b97] text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0"
                          : "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f0f3ff] text-[#253b97] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0"
                      }
                    >
                      {t.initials}
                    </motion.div>
                    <div>
                      <h4 className="text-sm sm:text-base lg:text-[17px] font-bold text-slate-900">
                        {t.role}
                      </h4>
                      <div
                        className={
                          t.featured
                            ? "flex text-amber-500 text-xs sm:text-sm"
                            : "flex text-amber-400 text-xs sm:text-sm"
                        }
                      >
                        ★★★★★
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  className={
                    t.featured
                      ? "text-sm sm:text-[15px] lg:text-base text-slate-700 leading-relaxed"
                      : "text-sm sm:text-[15px] lg:text-base text-slate-600 leading-relaxed"
                  }
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
