import Image from "next/image";

export default function HowWeTeachSection() {
  return (
    <section
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
      data-purpose="hands-on-framework"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">
            How We Teach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Practical, Hands-On Learning for{" "}
            <span className="text-sky-300">Real-World</span> Success
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            At CBA Academy, we focus on practical skills that prepare you for the
            workplace. Our unique training approach ensures you are job-ready from
            day one.
          </p>
        </div>

        {/* 4 Pillars Surrounding Center Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Left 2 Pillars */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-sky-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                01. Practical Training
              </h3>
              <p className="text-xs text-slate-300">
                You can gain skill &amp; industrial experience
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-sky-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                02. Real Client Project
              </h3>
              <p className="text-xs text-slate-300">
                Hands-on-experience &amp; meeting client need
              </p>
            </div>
          </div>

          {/* Center Image Showcase */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-xs rounded-2xl overflow-hidden border border-white/20 aspect-[3/4] shadow-2xl group">
              <Image
                alt="Two accomplished business graduates representing CBA Academy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/images/img_8.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>

          {/* Right 2 Pillars */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-sky-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                03. Interview Preparation
              </h3>
              <p className="text-xs text-slate-300">
                Improve your communication skills and confidence
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-white/10 text-sky-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 14l9-5-9-5-9 5 9 5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                04. Achieve Your Dream Career
              </h3>
              <p className="text-xs text-slate-300">
                Setting clear goals, gaining the necessary skills and experience
              </p>
            </div>
          </div>
        </div>

        {/* Clean Stat Counter Bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                50+
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                Job Oriented Courses
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                15+
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                20k+
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                Students Completed
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                98%
              </div>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
                Placement Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

