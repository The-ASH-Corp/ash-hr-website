export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" data-purpose="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Title and Description */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Students Testimonial
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What Our Happy <span className="text-primary">Students</span> Say!
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Discover what our students have to say about their experiences.
              From transformative learning moments to supportive instructors,
              their stories highlight why they&apos;re excited about the journey
              they&apos;ve had with us.
            </p>
          </div>

          {/* Right Testimonial Quote Cards Stack */}
          <div className="lg:col-span-7 space-y-4">
            {/* Testimonial 1 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-sm">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-50 text-primary font-bold text-xs flex items-center justify-center">
                    ST
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Corporate Graduate
                    </h4>
                    <div className="flex text-amber-400 text-xs">★★★★★</div>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                &ldquo;I&apos;m very pleased with my experience at this training
                institute. The courses were relevant and well-taught, and the
                instructors were very professional. The practical skills I
                gained have been essential for my career growth.&rdquo;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-5 rounded-xl border border-primary/30 bg-primary-50/60 hover:bg-primary-50/80 transition-colors shadow-sm">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">
                    EA
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Executive Associate
                    </h4>
                    <div className="flex text-amber-500 text-xs">★★★★★</div>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                &ldquo;This institute exceeded my expectations. The training was
                thorough and practical, and the staff were supportive and
                knowledgeable. My understanding of the subject was greatly aided
                by the practical approach.&rdquo;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-sm">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-50 text-primary font-bold text-xs flex items-center justify-center">
                    AL
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Academy Alumni
                    </h4>
                    <div className="flex text-amber-400 text-xs">★★★★★</div>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                &ldquo;I am glad that I was a student of CBA Academy. The
                hands-on projects felt like real-world challenges, making the
                learning process dynamic and practical. Plus, the support staff
                went above and beyond.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

